(function(e){function t(t){for(var n,a,s=t[0],u=t[1],c=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==i[u]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"24b6":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],a=(r("5c0b"),r("2877")),s={},u=Object(a["a"])(s,i,o,!1,null,null,null),c=u.exports,l=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"forms w-50"},[r("div",{staticClass:"row mb-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fev_predicted,expression:"fev_predicted"}],staticClass:"col",attrs:{placeholder:"Enter fev predicted",type:"number"},domProps:{value:e.fev_predicted},on:{input:function(t){t.target.composing||(e.fev_predicted=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.mMRC,expression:"mMRC"}],staticClass:"col",attrs:{placeholder:"Enter mMRC",type:"number"},domProps:{value:e.mMRC},on:{input:function(t){t.target.composing||(e.mMRC=t.target.value)}}})]),r("div",{staticClass:"row mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.BMI,expression:"BMI"}],staticClass:"col",attrs:{placeholder:"Enter BMI",type:"number"},domProps:{value:e.BMI},on:{input:function(t){t.target.composing||(e.BMI=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.MWD6,expression:"MWD6"}],staticClass:"col",attrs:{placeholder:"Enter MWD6",type:"number"},domProps:{value:e.MWD6},on:{input:function(t){t.target.composing||(e.MWD6=t.target.value)}}})])]),r("div",{staticClass:"result"},[e._v(" Bode index for this patient is: "+e._s(e.result)+" "),r("br"),e._v(" Bode index is from 0-10 ")])])},d=[],f={name:"Main",computed:{result:function(){return 0*(this.BMI>21)+1*(this.BMI<=21)+0*(this.FEV_predicted>=65)+1*(50<=this.FEV_predicted<=64)+2*(36<=this.FEV_predicted<=49)+3*(this.FEV_predicted<=35)+0*(0==this.mMRC)+0*(1==this.mMRC)+1*(2==this.mMRC)+2*(3==this.mMRC)+3*(4==this.mMRC)+0*(this.MWD6>=350)+1*(250<=this.MWD6<=349)+2*(150<=this.MWD6<=249)+3*(this.MWD6<=149)}},data:function(){return{fev_predicted:null,mMRC:null,BMI:null,MWD6:null}}},m=f,v=(r("c50f"),Object(a["a"])(m,p,d,!1,null,"312fb150",null)),h=v.exports;n["a"].use(l["a"]);var M=[{path:"/",name:"Main",component:h}],b=new l["a"]({routes:M}),g=b;n["a"].config.productionTip=!1,new n["a"]({router:g,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},c50f:function(e,t,r){"use strict";r("24b6")}});
//# sourceMappingURL=app.34174e53.js.map