(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{78581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(53678)}])},53678:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var r=t(28520),o=t.n(r),c=t(85893),a=t(9008),i=t(214),s=t.n(i),u=t(67294),l=t(69795),f=t(49718),d=t(57749),h=t(24239);function p(n,e,t,r,o,c,a){try{var i=n[c](a),s=i.value}catch(u){return void t(u)}i.done?e(s):Promise.resolve(s).then(r,o)}function b(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var c=n.apply(e,t);function a(n){p(c,r,o,a,i,"next",n)}function i(n){p(c,r,o,a,i,"throw",n)}a(void 0)}))}}function x(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m="0x94916d24AD8cba5c409e6B18341c3E2141d04b63";function v(){var n=(0,l.Ge)(),e=n.active,t=n.account,r=n.library,i=(n.connector,n.activate),p=n.deactivate;function v(){return(v=b(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i(f.L);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}function w(){return(w=b(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{p()}catch(e){console.log(e)}case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}console.log(t);var g=(0,u.useState)([]),y=g[0],k=g[1],j=b(o().mark((function n(){var e,c,a,i,s,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new r.eth.Contract(d,m),n.next=3,e.methods.balanceOf(t).call();case 3:c=n.sent,k(a=[]),i=0;case 7:if(!(i<c)){n.next=19;break}return n.next=10,e.methods.tokenOfOwnerByIndex(t,i).call();case 10:return s=n.sent,n.next=13,e.methods.tokenURI(s).call();case 13:u=n.sent,a=x(a).concat([u]),k(a);case 16:i++,n.next=7;break;case 19:case"end":return n.stop()}}),n)}))),N=b(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:new r.eth.Contract(d,m).methods.mintToken(1).send({value:"400000000000000000",from:t}).on("transactionHash",(function(n){console.log("transactionHash:".concat(n))})).on("confirmation",(function(n,e){console.log("confirmation:".concat(n),e)})).on("receipt",(function(n){console.log("receipt",n),j()})).on("error",(function(n,e){console.log("error",n,e)}));case 2:case"end":return n.stop()}}),n)})));return(0,u.useEffect)((function(){t?j():k([])}),[t]),(0,c.jsxs)("div",{className:s().container,children:[(0,c.jsxs)(a.default,{children:[(0,c.jsx)("title",{children:"MyNFT App"}),(0,c.jsx)("meta",{name:"description",content:"Generative 100 NFT"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsxs)("main",{className:s().main,children:[(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,c.jsx)("button",{onClick:function(){return v.apply(this,arguments)},className:"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800",children:"Connect to MetaMask"}),e?(0,c.jsxs)("span",{children:["Connected with ",(0,c.jsx)("b",{children:t})]}):(0,c.jsx)("span",{children:"Not connected"}),(0,c.jsx)("button",{onClick:function(){return w.apply(this,arguments)},className:"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800",children:"Disconnect"})]}),t&&(0,c.jsx)("button",{onClick:N,className:"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800",children:"buy"}),(0,c.jsx)("ul",{children:y.map((function(n,e){return(0,c.jsx)(h.Z,{tokenURI:n},e)}))})]})]})}}},function(n){n.O(0,[279,774,888,179],(function(){return e=78581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);