webpackJsonp([33],{196:function(t,e,s){var i=s(40)(s(326),s(453),null,null,null);t.exports=i.exports},244:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(302);e.default={props:{spreadLink:{type:String,default:""}},mounted:function(){this.copyLink()},methods:{copyLink:function(){i.a.setMoviePath("/static/js/plugins/zeroClipboard/ZeroClipboard.swf");var t=new i.a.Client;t.setHandCursor(!0),t.setText(this.spreadLink),t.glue("copy_link_a"),t.addEventListener("mouseUp",function(t,e){alert("复制链接成功！")})}}}},279:function(t,e,s){var i=s(40)(s(244),s(287),null,null,null);t.exports=i.exports},287:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tg_link"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.spreadLink,expression:"spreadLink"}],staticClass:"tg_link_input",attrs:{readonly:"",id:"spreadLink"},domProps:{value:t.spreadLink},on:{input:function(e){e.target.composing||(t.spreadLink=e.target.value)}}}),t._v(" "),s("a",{staticClass:"copy_link f16",attrs:{id:"copy_link_a"}},[t._v("复制链接")])])},staticRenderFns:[]}},302:function(t,e,s){"use strict";var i={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(t){return"string"==typeof t&&(t=document.getElementById(t)),t.addClass||(t.hide=function(){this.style.display="none"},t.show=function(){this.style.display=""},t.addClass=function(t){this.removeClass(t),this.className+=" "+t},t.removeClass=function(t){for(var e=this.className.split(/\s+/),s=-1,i=0;i<e.length;i++)e[i]==t&&(s=i,i=e.length);return s>-1&&(e.splice(s,1),this.className=e.join(" ")),this},t.hasClass=function(t){return!!this.className.match(new RegExp("\\s*"+t+"\\s*"))}),t},setMoviePath:function(t){this.moviePath=t},dispatch:function(t,e,s){var i=this.clients[t];i&&i.receiveEvent(e,s)},register:function(t,e){this.clients[t]=e},getDOMObjectPosition:function(t,e){for(var s={left:0,top:0,width:t.width?t.width:t.offsetWidth,height:t.height?t.height:t.offsetHeight};t&&t!=e;)s.left+=t.offsetLeft,s.top+=t.offsetTop,t=t.offsetParent;return s},Client:function(t){this.handlers={},this.id=i.nextId++,this.movieId="ZeroClipboardMovie_"+this.id,i.register(this.id,this),t&&this.glue(t)}};i.Client.prototype={id:0,ready:!1,movie:null,clipText:"",handCursorEnabled:!0,cssEffects:!0,handlers:null,glue:function(t,e,s){this.domElement=i.$(t);var a=999;this.domElement.style.zIndex&&(a=parseInt(this.domElement.style.zIndex,10)+1),"string"==typeof e?e=i.$(e):void 0===e&&(e=document.getElementById("accountRight").childNodes[0]);var n=i.getDOMObjectPosition(this.domElement,e);this.div=document.createElement("div");var o=this.div.style;if(o.position="fixed",o.left=n.left+"px",o.top=n.top+"px",o.width=n.width+"px",o.height=n.height+"px",o.zIndex=a,"object"==typeof s)for(addedStyle in s)o[addedStyle]=s[addedStyle];e.appendChild(this.div),this.div.innerHTML=this.getHTML(n.width,n.height)},getHTML:function(t,e){var s="",a="id="+this.id+"&width="+t+"&height="+e;if(navigator.userAgent.match(/MSIE/)){s+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+(location.href.match(/^https/i)?"https://":"http://")+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+t+'" height="'+e+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+i.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+a+'"/><param name="wmode" value="transparent"/></object>'}else s+='<embed id="'+this.movieId+'" src="'+i.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+t+'" height="'+e+'" name="'+this.movieId+'" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+a+'" wmode="transparent" />';return s},hide:function(){this.div&&(this.div.style.left="-2000px")},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide(),this.div.innerHTML="";var t=document.getElementsByTagName("body")[0];try{t.removeChild(this.div)}catch(t){}this.domElement=null,this.div=null}},reposition:function(t){if(t&&(this.domElement=i.$(t),this.domElement||this.hide()),this.domElement&&this.div){var e=i.getDOMObjectPosition(this.domElement),s=this.div.style;s.left=e.left+"px",s.top=e.top+"px"}},setText:function(t){this.clipText=t,this.ready&&this.movie.setText(t)},addEventListener:function(t,e){t=t.toString().toLowerCase().replace(/^on/,""),this.handlers[t]||(this.handlers[t]=[]),this.handlers[t].push(e)},setHandCursor:function(t){this.handCursorEnabled=t,this.ready&&this.movie.setHandCursor(t)},setCSSEffects:function(t){this.cssEffects=!!t},receiveEvent:function(t,e){switch(t=t.toString().toLowerCase().replace(/^on/,"")){case"load":if(this.movie=document.getElementById(this.movieId),!this.movie){var s=this;return void setTimeout(function(){s.receiveEvent("load",null)},1)}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var s=this;return setTimeout(function(){s.receiveEvent("load",null)},100),void(this.ready=!0)}this.ready=!0,this.movie.setText(this.clipText),this.movie.setHandCursor(this.handCursorEnabled);break;case"mouseover":this.domElement&&this.cssEffects&&(this.domElement.addClass("hover"),this.recoverActive&&this.domElement.addClass("active"));break;case"mouseout":this.domElement&&this.cssEffects&&(this.recoverActive=!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.recoverActive=!0),this.domElement.removeClass("hover"));break;case"mousedown":this.domElement&&this.cssEffects&&this.domElement.addClass("active");break;case"mouseup":this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=!1)}if(this.handlers[t])for(var i=0,a=this.handlers[t].length;i<a;i++){var n=this.handlers[t][i];"function"==typeof n?n(this,e):"object"==typeof n&&2==n.length?n[0][n[1]](this,e):"string"==typeof n&&window[n](this,e)}}},window.ZeroClipboard=i,e.a=i},326:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(279),a=s.n(i);e.default={components:{copyLink:a.a},data:function(){return{ruleText:1,spreadLink:"https://www.yitianlicai.com/registerMobile?un=10000143",code:10000143,qrCode:"https://www.yitianlicai.com/data/attachments/c080bedc-0284-44dc-bf7d-716bb16f2847"}}}},453:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p_zhright"},[s("div",{staticClass:"p_zhinvelist mt0"},[t._m(0),t._v(" "),s("div",{staticClass:"mb40"},[s("div",{staticClass:"fz18"},[t._v("一、我的推广链接")]),t._v(" "),s("div",{staticClass:"ml40"},[s("p",{staticClass:"mt15 mb15"},[t._v("我的邀请码为："+t._s(t.code)+"或注册手机号码，邀请好友在注册时输入或直接复制链接")]),t._v(" "),s("copy-link",{attrs:{"spread-link":t.spreadLink}})],1)]),t._v(" "),s("div",{staticClass:"mb40 relative"},[s("div",{staticClass:"fz18"},[t._v("二、我的专属二维码")]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"tg_link_ma"},[s("img",{staticClass:"block",attrs:{src:t.qrCode,alt:"",width:"116",height:"116"}}),t._v(" "),s("p",{staticClass:"f16 mt10 ta_c"},[t._v("打开手机，扫一扫")])])]),t._v(" "),s("div",{staticClass:"pt15 b_top"},[s("p",{staticClass:"bold"},[t._v("说明：")]),t._v(" "),s("p",{staticClass:"mt10"},[t._v("1、什么是邀请码？")]),t._v(" "),s("p",{staticClass:"24"},[t._v("用户注册后将获得属于个人的唯一标识码，好友填入邀请码注册成功后，推广人将会根据好友充值或投资具体情况获得一定奖励。")]),t._v(" "),s("p",{staticClass:"mt10"},[t._v("2、如何使用邀请码？")]),t._v(" "),s("p",{staticClass:"24"},[t._v("邀请对象收到邀请码或含有邀请码的链接地址后，将邀请码复制，注册时粘贴到邀请码栏，完成注册。")]),t._v(" "),s("p",{staticClass:"mt10"},[t._v("3、奖励规则")]),t._v(" "),s("p",{staticClass:"24"},[t._v(t._s(t.ruleText))]),t._v(" "),s("p",{staticClass:"mt10"},[t._v("4、特别申明")]),t._v(" "),s("p",{staticClass:"24"},[t._v("若发现任何作弊或非法手段获得奖励的，将取消全部返利金额。邀请码最终解释权归益田理财所有。")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",{staticClass:"p_zhtitle mb20"},[s("span",{staticClass:"fl"},[t._v("我的推广")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ml40"},[s("p",{staticClass:"mt15 mb15"},[t._v("通过微信“扫一扫”立即分享至微信朋友圈微信，邀请好友加入益田理财")]),t._v(" "),s("p",{staticClass:"lh24 c_gray"},[t._v("邀请规则：")]),t._v(" "),s("p",{staticClass:"lh24 c_gray"},[t._v("1、通过微信扫描二维码；")]),t._v(" "),s("p",{staticClass:"lh24 c_gray"},[t._v("2、点击右上角菜单分享至朋友圈或者发送给朋友")])])}]}}});
//# sourceMappingURL=33.64b1e375f6f24b091c4a.js.map