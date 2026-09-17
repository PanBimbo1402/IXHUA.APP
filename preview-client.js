/* Owner review controls beside the real product. No alternate app or generated workout data. */
(function () {
  'use strict';
  const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let current, banner;
  // The accepted application's key is unchanged. A dedicated preview port isolates
  // this owner test from earlier releases; reset never clears unrelated storage.
  const appKey='rebuild-core-0-9', previousRoundKey='ixhua-owner-previous-round';
  const stateOptions=['NOT RUN','PASS','FAIL','BLOCKED'];
  function downloadJSON(value,name) {
    const url=URL.createObjectURL(new Blob([typeof value==='string'?value:JSON.stringify(value,null,2)],{type:'application/json'}));
    const link=document.createElement('a');link.href=url;link.download=name;document.body.append(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function freshTestControls(dialog) {
    const panel=dialog.querySelector('#ixhua-owner-reset');
    const error=panel.querySelector('[role=alert]');
    dialog.querySelector('#ixhua-owner-fresh').onclick=()=>{panel.hidden=false;panel.querySelector('#ixhua-owner-reset-cancel').focus();};
    panel.querySelector('#ixhua-owner-reset-cancel').onclick=()=>{panel.hidden=true;dialog.querySelector('#ixhua-owner-fresh').focus();};
    dialog.querySelector('#ixhua-owner-export-data').onclick=()=>{
      try{downloadJSON(localStorage.getItem(appKey)||'{}','IXHUA-current-test-data.json');}
      catch(e){error.textContent='Could not export data: '+e.message;panel.hidden=false;}
    };
    const backupButton=dialog.querySelector('#ixhua-owner-export-previous');
    try{backupButton.disabled=!localStorage.getItem(previousRoundKey);}catch{backupButton.disabled=true;}
    backupButton.onclick=()=>{
      try{const backup=JSON.parse(localStorage.getItem(previousRoundKey));downloadJSON(backup.data,'IXHUA-previous-test-data.json');}
      catch(e){error.textContent='Could not read the previous round: '+e.message;panel.hidden=false;}
    };
    panel.querySelector('#ixhua-owner-reset-confirm').onclick=()=>{
      try{
        const data=localStorage.getItem(appKey);
        if(panel.querySelector('[name=keepBackup]').checked&&data){
          localStorage.setItem(previousRoundKey,JSON.stringify({buildId:current.buildId,savedAt:new Date().toISOString(),data}));
        }
        // An empty object starts the real app's defaults without re-importing a
        // legacy 0.8 key. Feedback and the previous-round backup remain intact.
        localStorage.setItem(appKey,'{}');
        location.reload();
      }catch(e){error.textContent='Your current test was kept. Browser storage could not save the backup/reset. Download current data, then uncheck “Keep the previous round” and retry. '+e.message;}
    };
  }
  async function loadStatus() {
    const response=await fetch('/preview/status',{credentials:'same-origin',signal:AbortSignal.timeout(7000)});
    if(!response.ok) throw new Error(response.status===401?'Pairing expired. Scan the current QR from START-IXHUA.':'Preview status is unavailable. Keep START-IXHUA running and retry.');
    return response.json();
  }
  function storageKey() {return `ixhua-owner-phone-review:${current.buildId}`;}
  function readRecord() {
    try {const record=JSON.parse(localStorage.getItem(storageKey())||'null');if(record&&record.buildId===current.buildId&&record.results&&typeof record.results==='object')return record;} catch {}
    return {buildId:current.buildId,results:{},device:'',os:'',browser:'',physicalPhone:false,notes:''};
  }
  async function openReview() {
    if(document.getElementById('ixhua-phone-review'))return;
    const previous=document.activeElement;
    try {current=await loadStatus();} catch(error) {alert(error.message);return;}
    const record=readRecord();
    const dialog=document.createElement('dialog');
    dialog.id='ixhua-phone-review';
    dialog.className='ixhua-review';
    dialog.setAttribute('aria-labelledby','ixhua-review-title');
    dialog.innerHTML=`<header><div><p class="eyebrow">OWNER TESTING · ${current.buildId.slice(0,12)}</p><h2 id="ixhua-review-title">Your six-identity test.</h2></div><button type="button" id="ixhua-review-close" aria-label="Close testing status">×</button></header>
      <p>${escapeHTML(current.sourceProduct)}</p><p class="warning">${escapeHTML(current.releaseStatus)}</p>
      <p>Runner → Strength &amp; Muscle → Hybrid → General Fitness → Longevity → Custom</p>
      <p>Apply your answers, then inspect Today, Training, Progress and Plan. Reload to check that your profile and program stay saved.</p>
      <section class="ixhua-owner-controls" aria-label="Repeat athlete onboarding"><h3>Ready for the next identity?</h3>
      <p>Start a new round with blank answers and logs. This phone’s feedback record stays saved.</p>
      <button type="button" id="ixhua-owner-fresh">Start fresh test</button>
      <button type="button" id="ixhua-owner-export-data">Download current data</button>
      <button type="button" id="ixhua-owner-export-previous">Download previous round</button>
      <div id="ixhua-owner-reset" hidden><h3>Reset this phone’s test data?</h3><p>This replaces this browser’s profile, onboarding draft, program, food and workout logs, including any active workout. Your other builds and feedback record are unaffected.</p>
      <label class="check-label"><input name="keepBackup" type="checkbox" checked>Keep the previous round on this browser (one backup)</label>
      <p>Download a round before the next reset to keep more than one. You can restore a downloaded round in Settings → Restore IXHUA backup.</p>
      <button type="button" id="ixhua-owner-reset-cancel">Keep this test</button><button type="button" id="ixhua-owner-reset-confirm">Reset and restart onboarding</button><p role="alert"></p></div></section>
      <details><summary>Build identity and preview limits</summary>
      <p>Accepted checkpoint: <code>${escapeHTML(current.ownerAcceptance?.baselineCommit||'')}</code><br>Owner source: <code>${escapeHTML(current.sourceIdentity?.commit||'Development working copy')}</code><br>${escapeHTML(current.sourceIdentity?.status||'')}</p>
      <p>This is the accepted application and persistence layer, with owner testing controls. No new major subsystem is included.</p>
      <section><h3>Services and browser limits</h3><ul>${current.services.map(s=>`<li><strong>${escapeHTML(s.name)} · ${escapeHTML(s.state)}</strong><p>${escapeHTML(s.detail)}</p></li>`).join('')}</ul>
      <p>${window.isSecureContext?'This browser is in a secure context. That does not validate native capabilities.':'This is an HTTP Wi-Fi preview. Live browser camera, service workers and some other secure-context features are unavailable. Use photo upload and barcode digits; do not record camera access as passed.'}</p>
      <p>Logs are local to this browser and address. Keep the PC awake and the server running. Browser refresh persistence does not establish native background or offline-restart support.</p></section>
      <section><h3>Requires Native Device Beta</h3><ul>${current.nativeOnly.map(x=>`<li>${escapeHTML(x)} — <strong>Requires Native Device Beta</strong></li>`).join('')}</ul><p>These native capabilities are not implemented in this supplied foundation. Browser demonstrations must not be counted as native validation.</p></section>
      <details><summary>Outside this owner acceptance: full RC status</summary><ul>${current.requiredNonHardware.map(f=>`<li><strong>${escapeHTML(f.name)} — ${escapeHTML(f.status)}</strong><p>${escapeHTML(f.detail)}</p></li>`).join('')}</ul></details></details>
      ${current.sourceChanged?'<p class="warning">The source changed after startup. Restart before recording tests.</p>':''}
      <section><h3>Your physical iPhone test record</h3><p>Results start as NOT RUN. Mark only what you tried yourself. A blocked provider or missing feature stays BLOCKED.</p>
      <form id="ixhua-review-form"><div class="review-fields"><label>iPhone model<input name="device" maxlength="100" placeholder="e.g. iPhone 17" value="${escapeHTML(record.device)}"></label><label>iOS version<input name="os" maxlength="60" placeholder="From Settings → General → About" value="${escapeHTML(record.os)}"></label><label>Browser<input name="browser" maxlength="100" placeholder="Safari" value="${escapeHTML(record.browser)}"></label></div>
      <label class="check-label"><input name="physicalPhone" type="checkbox" ${record.physicalPhone?'checked':''}> I performed these checks on my physical iPhone.</label>
      ${current.checks.map(check=>`<label class="review-check"><strong>${escapeHTML(check.title)}</strong><span>${escapeHTML(check.steps)}</span><select name="check-${check.id}" data-review-check="${check.id}" aria-label="Result: ${escapeHTML(check.title)}">${stateOptions.map(value=>`<option ${record.results[check.id]===value?'selected':''}>${value}</option>`).join('')}</select></label>`).join('')}
      <label>Issues and observations<textarea name="notes" rows="4" maxlength="6000" placeholder="What happened, what you expected, and which screen…">${escapeHTML(record.notes)}</textarea></label>
      <p id="ixhua-review-save-status" role="status"></p><button type="submit">Save test record on this phone</button><button type="button" id="ixhua-review-export">Download test record</button></form>
      <p>This record does not approve a release. Native Device Beta requires your separate explicit approval after the full non-hardware experience is ready and reviewed.</p></section>`;
    document.body.append(dialog);
    dialog.showModal();
    dialog.querySelector('#ixhua-review-close').onclick=()=>dialog.close();
    dialog.addEventListener('close',()=>{dialog.remove();previous?.focus();});
    freshTestControls(dialog);
    const form=dialog.querySelector('form');
    function collect() {
      const fields=new FormData(form);
      return {recordType:'owner-reported-physical-phone-checks',buildId:current.buildId,sourceProduct:current.sourceProduct,sourceIdentity:current.sourceIdentity,ownerAcceptance:current.ownerAcceptance,
        recordedAt:new Date().toISOString(),device:String(fields.get('device')),os:String(fields.get('os')),browser:String(fields.get('browser')),
        physicalPhone:fields.has('physicalPhone'),observedUserAgent:navigator.userAgent,secureContext:window.isSecureContext===true,
        origin:location.origin,results:Object.fromEntries(current.checks.map(check=>[check.id,fields.get(`check-${check.id}`)])),
        notes:String(fields.get('notes')),releaseGate:current.releaseGate,nativeValidation:'NOT CLAIMED',approval:'NOT GRANTED BY THIS RECORD'};
    }
    function save() {
      const value=collect();
      try {localStorage.setItem(storageKey(),JSON.stringify(value));dialog.querySelector('#ixhua-review-save-status').textContent='Saved on this phone. Download the record to keep or share a copy.';}
      catch {dialog.querySelector('#ixhua-review-save-status').textContent='Browser storage failed. Download the record before closing this panel.';}
      return value;
    }
    form.onsubmit=event=>{event.preventDefault();save();};
    form.addEventListener('input',save);
    form.addEventListener('change',save);
    dialog.querySelector('#ixhua-review-export').onclick=()=>{
      downloadJSON(save(),`IXHUA-PHONE-TEST-${current.buildId.slice(0,12)}.json`);
    };
  }
  loadStatus().then(status=>{
    if(status.mode!=='owner-phone-preview')return;
    current=status;
    const css=document.createElement('link');css.rel='stylesheet';css.href='/preview/style.css';document.head.append(css);
    banner=document.createElement('button');banner.type='button';banner.className='ixhua-preview-banner';
    banner.textContent=`Owner testing · Reset / feedback · ${current.buildId.slice(0,8)}`;
    banner.onclick=openReview;document.body.prepend(banner);
    // The real onboarding dialog uses the top layer. Keep owner controls reachable
    // within it on every step without changing the accepted onboarding engine.
    function onboardingControl(){
      const header=document.querySelector('.ix-onboarding .ix-onboarding-shell > header');
      if(!header||header.querySelector('.ixhua-owner-onboarding'))return;
      const button=document.createElement('button');button.type='button';button.className='ixhua-owner-onboarding';button.textContent='Owner testing';button.onclick=openReview;header.append(button);
    }
    onboardingControl();
    new MutationObserver(onboardingControl).observe(document.body,{childList:true,subtree:true});
    window.addEventListener('storage',event=>{if(event.key===appKey&&event.newValue==='{}')location.reload();});
  }).catch(()=>{}); // Normal localhost/static builds do not expose owner-preview endpoints.
})();
