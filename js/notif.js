           
(function(w, d) {
    w.PushEngage = w.PushEngage || [];
    w._peq = w._peq || [];
        PushEngage.push(['init', {
            appId: 'c4a2fd0e-b2bb-4edd-abb1-da49526d4b8a'
        }]);

    var e = d.createElement('script');
        e.src = 'https://clientcdn.pushengage.com/sdks/pushengage-web-sdk.js';
        e.async = true;
        e.type = 'text/javascript';

        // Append PushEngage SDK script to the head of the document
        d.head.appendChild(e);
})(window, document);