(this["webpackJsonpweb-liquidate"]=this["webpackJsonpweb-liquidate"]||[]).push([[21],{1280:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),o=t(1290);function i(e,n,t,r,a,o,i){try{var l=e[o](i),c=l.value}catch(s){return void t(s)}l.done?n(c):Promise.resolve(c).then(r,a)}n.default=function(e){var n=e.preferred,t=e.label,r=e.iconSrc;return{name:t||"Status",iconSrc:r,iconSrcSet:r,svg:e.svg||'\n<svg width="40" height="40" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M54.7 0C24.7 0 0.400024 24.3 0.400024 54.3C0.400024 84.3 24.7 108.6 54.7 108.6C84.7 108.6 109 84.3 109 54.3C108.9 24.3 84.6 0 54.7 0ZM47.3 77.6C40.4 78 33.4 74 33.1 67.5C32.7 61.1 37.9 56.8 46.5 56.4C49.7 56.2 52.3 56.5 54.8 56.7C57.4 57 60 57.2 63.1 57C64.6 56.9 66.2 56.7 67.8 56.4C67 67.4 58.6 77 47.3 77.6ZM65.3 52.3C61.9 52.5 59.2 52.2 56.5 51.9C53.8 51.6 51 51.3 47.7 51.5C46.1 51.6 44.4 51.8 42.8 52.2C43.8 40.2 52.6 29.7 64.5 29.1C71.8 28.7 79.1 33.1 79.5 40.2C79.9 47.2 74.4 51.8 65.3 52.3Z" fill="#4360DF"/>\n</svg>\n',wallet:function(){var e,n=(e=a.a.mark((function e(n){var t,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.getProviderName,r=n.createModernProviderInterface,o=window.ethereum,e.abrupt("return",{provider:o,interface:o&&"Status"===t(o)?r(o):null});case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function l(e){i(o,r,a,l,c,"next",e)}function c(e){i(o,r,a,l,c,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}(),type:"injected",link:"https://status.im/",installMessage:o.a,mobile:!0,preferred:n}}},1290:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(e){var n=e.currentWallet,t=e.selectedWallet;return n?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(n,"</b>\n    installed. If you would prefer to use\n    <b>").concat(t,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(t,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(t,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===t?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},a=function(e){var n=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n    You\'ll need to install <b>'.concat(n,"</b> to continue. Click below to install and then load this Dapp with <b>").concat(n,"</b>.\n  </p>\n  ")}}}]);
//# sourceMappingURL=21.3afd90a2.chunk.js.map