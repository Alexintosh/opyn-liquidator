(this["webpackJsonpweb-liquidate"]=this["webpackJsonpweb-liquidate"]||[]).push([[32],{451:function(n,e,t){"use strict";t.r(e);var c=t(2),r=t.n(c);function o(n,e,t,c,r,o,a){try{var i=n[o](a),u=i.value}catch(s){return void t(s)}i.done?e(u):Promise.resolve(u).then(c,r)}e.default=function(n){var e=n.infuraKey,c=n.preferred,a=n.label,i=n.iconSrc;return{name:a||"WalletConnect",svg:n.svg||'\n  <svg \n    height="25" \n    viewBox="0 0 40 25" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n  <path d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z" \n        fill="#3b99fc"/>\n  </svg>\n',iconSrc:i,wallet:function(){var n,c=(n=r.a.mark((function n(c){var o,a,i,u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=c.resetWalletState,n.next=3,t.e(10).then(t.t.bind(null,767,7));case 3:return a=n.sent,i=a.default,(u=new i({infuraId:e})).autoRefreshOnNetworkChange=!1,u.wc.on("disconnect",(function(){o({disconnected:!0,walletName:"WalletConnect"})})),n.abrupt("return",{provider:u,interface:{name:"WalletConnect",connect:function(){return new Promise((function(n,e){u.enable().then(n).catch((function(){return e({message:"This dapp needs access to your account information."})}))}))},address:{onChange:function(n){u.send("eth_accounts").then((function(e){return e[0]&&n(e[0])})),u.on("accountsChanged",(function(e){return n(e[0])}))}},network:{onChange:function(n){u.send("eth_chainId").then(n),u.on("chainChanged",n)}},balance:{get:function(){return new Promise((function(n){u.wc._accounts[0]?u.send("eth_getBalance",[u.wc._accounts[0],"latest"]):n(null)}))}},disconnect:function(){u.wc.killSession(),u.stop()}}});case 9:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(c,r){var a=n.apply(e,t);function i(n){o(a,c,r,i,u,"next",n)}function u(n){o(a,c,r,i,u,"throw",n)}i(void 0)}))});return function(n){return c.apply(this,arguments)}}(),type:"sdk",desktop:!0,preferred:c}}}}]);
//# sourceMappingURL=32.2e8038a2.chunk.js.map