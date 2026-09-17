'use strict';
(async function () {
  const output=document.getElementById('pair-status');
  const params=new URLSearchParams(location.hash.slice(1));
  const token=params.get('access');
  const buildId=params.get('build');
  history.replaceState(null,'',location.pathname);
  if(!token||!buildId){output.textContent='Scan the current QR in START-IXHUA. This link has no pairing code.';return;}
  try {
    const response=await fetch('/preview/pair',{method:'POST',headers:{'Content-Type':'application/json'},credentials:'same-origin',body:JSON.stringify({token,buildId}),signal:AbortSignal.timeout(10000)});
    const data=await response.json();
    if(!response.ok)throw new Error(data.error||'Pairing failed. Scan the current QR again.');
    output.textContent='Paired. Opening the real application…';
    location.replace('/');
  } catch(error) {output.textContent=error.name==='TimeoutError'?'The computer did not respond. Keep START-IXHUA running, check Wi-Fi, then scan again.':error.message;}
})();
