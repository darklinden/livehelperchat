(window.webpackJsonpUserList=window.webpackJsonpUserList||[]).push([[3],{31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params={},this.attributes=null,this.chatEvents=null}return r(e,[{key:"setParams",value:function(e,t,r){this.params=e,this.attributes=t,this.chatEvents=r;var o=this.attributes.userSession.getVID(),s={hostname:e.hostname,path:e.path};""!=e.port&&(s.port=parseInt(e.port)),1==e.secure&&(s.secure=!0);var a=n(40).connect(s);function i(){var e=a.subscribe("uo_"+o);e.on("subscribeFail",(function(e){console.error("Failed to subscribe to the sample channel due to error: "+e)})),e.watch((function(e){"check_message"==e.op&&t.eventEmitter.emitEvent("checkMessageOperator")}))}a.on("error",(function(e){console.error(e)}));var c="chat_uo_"+o;a.on("connect",(function(t){t.isAuthenticated?i():a.emit("login",{hash:e.hash,chanelName:c},(function(e){e?console.log(e):i()}))}))}}]),e}());t.nodeJSChat=o}}]);
//# sourceMappingURL=e831f73bcb51c9907cd7.js.map