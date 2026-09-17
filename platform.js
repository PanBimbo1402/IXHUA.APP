/* Shared record IDs: native randomUUID requires HTTPS; getRandomValues also works on LAN HTTP. */
(function (scope) {
  'use strict';
  scope.REBUILD_RECORD_ID = function () {
    if (typeof scope.crypto?.randomUUID === 'function') return scope.crypto.randomUUID();
    if (typeof scope.crypto?.getRandomValues !== 'function') {
      throw new Error('This browser cannot create record IDs. Open the preview in a current Safari browser.');
    }
    const bytes = scope.crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;
    const hex = Array.from(bytes, n => n.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
  };
})(window);
