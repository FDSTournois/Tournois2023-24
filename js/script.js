
(function(w, d) {
  w.PushEngage = w.PushEngage || [];
  w._peq = w._peq || [];
  PushEngage.push(['init', {
      appId: 'b356a85b-aedf-4089-89b7-c39e7e3e12db'
  }]);

  var e = d.createElement('script');
  console.log("Hello G");

  e.src = 'https://clientcdn.pushengage.com/sdks/pushengage-web-sdk.js';
  e.async = true;
  e.type = 'text/javascript';
  d.head.appendChild(e);
})(window, document);

