var ScanditSDKProxy=function(){function e(){var e=Windows.Graphics.Display,t=e.DisplayInformation.getForCurrentView().currentOrientation;return t===e.DisplayOrientations.portrait||t===e.DisplayOrientations.portraitFlipped}function t(t){var n=t.viewfinderDimension;return e()?{width:n[0],height:n[1]}:{width:n[2],height:n[3]}}function n(t){return e()?t.portrait:t.landscape}function i(e){var t=JSON.stringify(e),n=new BarcodeScannerPlugin.ScanSettingsProxy(t),i=e.scanningHotSpot;n.setScanningHotSpot(i.x,i.y);var r=e.activeScanningAreaPortrait;n.setActiveScanningAreaPortrait(r.x,r.y,r.width,r.height);var o=e.activeScanningAreaLandscape;return n.setActiveScanningAreaLandscape(o.x,o.y,o.width,o.height),n.setCameraFacing(e.cameraFacingPreference),n}function r(e,t,n){if(void 0===e||null===e)return null;if(void 0!==e.substr&&"%"===e.substr(e.length-1,1)){var i=.01*parseFloat(e.substr(0,e.length-1));return i*n}return parseFloat(e)*t}function o(e){var t=Windows.Graphics.Display.DisplayInformation.getForCurrentView(),n=t.rawDpiX/t.logicalDpi,i=t.rawDpiY/t.logicalDpi,o={left:r(e.leftMargin,n,window.innerWidth),right:r(e.rightMargin,n,window.innerWidth),top:r(e.topMargin,i,window.innerHeight),bottom:r(e.bottomMargin,i,window.innerHeight),height:r(e.height,i,window.innerHeight),width:r(e.width,n,window.innerWidth)};return null===o.left&&(null!==o.right&&null!==o.width?o.left=window.innerWidth-o.right-o.width:o.left=0),null===o.right&&(null!==o.width?o.right=window.innerWidth-o.left-o.width:o.right=0),null===o.top&&(null!==o.bottom&&null!==o.height?o.top=window.innerHeight-o.height-o.bottom:o.top=0),null===o.bottom&&(null!==o.height?o.bottom=window.innerHeight-o.height-o.top:o.bottom=0),o}function a(e,t){var n=o(t);e.style.margin=n.top+"px "+n.right+"px "+n.bottom+"px "+n.left+"px";var i=window.innerWidth,r=window.innerHeight;return e.style.width=i-n.left-n.right+"px",e.style.height=r-n.top-n.bottom+"px",n}function l(){var e={beep:!0,viewfinderColor:"#fff",viewfinderDecodedColor:"#fff",guiStyle:Scandit.ScanOverlay.GuiStyle.DEFAULT,viewfinderDimension:[.9,.4,.6,.4]};return e}function s(e,t){for(var n in e)e.hasOwnProperty(n)&&"function"!=typeof e[n]&&"picker"!==n&&"properties"!==n&&(t[n]=e[n])}function d(e){var t,n,i;return 4===e.length?(t=parseInt(e[1],16),n=parseInt(e[2],16),i=parseInt(e[3],16),[17*t,17*n,17*i]):7===e.length?(t=parseInt(e.substr(1,2),16),n=parseInt(e.substr(3,2),16),i=parseInt(e.substr(5,2),16),[t,n,i]):[0,0,0]}function c(e,t){var n=document.createElement("canvas");n.width=e.width,n.height=e.height;var i=n.getContext("2d"),r=document.createElement("img");r.src="/www/img/scanline-inactive.png",r.width=e.width,r.height=e.height;var o=document.createElement("img");o.src="/www/img/scanline-active.png",o.width=e.width,o.height=e.height;var a=i.createRadialGradient(n.width/2,n.height/2,4*n.width/10,n.width/2,n.height/2,5*n.width/10);if(t)var l=d(V.scanLineColorActive);else var l=d(V.scanLineColor);a.addColorStop(0,"rgba("+l[0]+", "+l[1]+", "+l[2]+", 1)"),a.addColorStop(1,"rgba("+l[0]+", "+l[1]+", "+l[2]+", 0)"),i.fillStyle=a,i.fillRect(0,0,e.width,e.height),i.globalCompositeOperation="source-in",i.drawImage(r,0,0,r.width,r.height),i.globalCompositeOperation="source-atop",i.fillStyle="rgba("+l[0]+", "+l[1]+", "+l[2]+", 1)",i.fillRect(0,0,e.width,e.height),t&&(i.globalCompositeOperation="source-atop",i.drawImage(o,0,0,r.width,r.height)),e.src=n.toDataURL()}function p(e,t,n,i,r,a){var l=o(e),s=window.innerWidth-l.left-l.right,d=window.innerHeight-l.top-l.bottom,p=t.y*d,u=t.x*s,h=n.width*s,g=n.height*d;i.style.top=p-.5*g+"px",i.style.left=u-.5*h+"px",i.style.width=h+"px",i.style.height=g+"px",i.style.borderColor=V.overlay.viewfinderColor;var v=n.width*s,y=47/748*v;a.style.top=p-.5*y+"px",a.style.left=u-.5*v+"px",a.style.width=v+"px",a.style.height=y+"px",c(a,!0);var w=55,f=20;r.style.width=w+"px",r.style.height=f+"px",V.overlay.guiStyle==Scandit.ScanOverlay.GuiStyle.DEFAULT?(i.style.display="block",a.style.display="none",r.style.left=u+.5*h-w+"px",r.style.top=p+.5*g+"px"):V.overlay.guiStyle==Scandit.ScanOverlay.GuiStyle.LASER?(i.style.display="none",a.style.display="block",r.style.left=u+.5*v-w-25+"px",r.style.top=p+.5*y+"px"):(i.style.display="none",a.style.display="none",r.style.left=u+.5*h-w+"px",r.style.top=p+.5*g+"px")}function u(t){if(null!=t.capture){var n=t.capture.videoWidth,i=t.capture.videoHeight;if(0!==n&&0!==i){if(e()){var r=n;n=i,i=r}var o,a,l=n/i,s=t.root.clientWidth/t.root.clientHeight;s>l?(o=t.root.clientWidth,a=Math.round(o/l)):(a=Math.round(t.root.clientHeight),o=a*l);var d=Math.floor((t.root.clientHeight-a)/2)+"px",c=Math.floor((t.root.clientWidth-o)/2)+"px";setTimeout(function(){t.preview&&(t.preview.style.width=o+"px",t.preview.style.height=a+"px",t.preview.style.margin=d+" "+c)},50),setTimeout(function(){t.preview&&(t.preview.style.height=a+1+"px")},1e3)}}}function h(){I()}function g(e){V.preview&&("hidden"===document.visibilityState&&V.running?(V.startOnWindowVisible=!0,L()):V.startOnWindowVisible&&(O({paused:V.paused}),V.startOnWindowVisible=!1))}function v(e){if(null!=V.capture){V.errorPanel.style.display="table",V.errorPanel.style.width=V.root.style.width,V.errorPanel.style.height=V.root.style.height,V.errorPanel.style.fontSize="160%";var t="display:table-cell;text-align:center;text-transform:none;vertical-align:middle;opacity:1.0;padding:50px";V.errorPanel.innerHTML='<div style="'+t+'">'+e+"</div>",V.viewFinder.style.display="none",V.logo.style.display="none"}}function y(){return-1!==navigator.appVersion.indexOf("MSAppHost/3.0")?!1:-1!==navigator.appVersion.indexOf("Windows Phone 8.1;")?!1:-1!==navigator.appVersion.indexOf("MSAppHost/2.0;")}function w(e){V.rejectedCodeIds=e}function f(e){var t=999;if(e.root=document.createElement("div"),e.root.style.position="absolute",e.root.style.margin="0px",e.root.style.background="black",e.root.style.overflow="hidden",e.root.style.top="0px",e.root.style.left="0px",e.root.style.zIndex=t,e.errorPanel=document.createElement("div"),e.errorPanel.style.position="absolute",e.errorPanel.style.margin="0px",e.errorPanel.style.background="black",e.errorPanel.style.color="white",e.errorPanel.style.textAlign="center",e.errorPanel.style.verticalAlign="middle",e.errorPanel.style.opacity=.7,e.errorPanel.style.display="none",e.errorPanel.style.zIndex=t+1,e.errorPanel.style.padding="0px",e.errorPanel.innertHTML="One, two, three",e.root.appendChild(e.errorPanel),document.body.appendChild(e.root),e.preview=document.createElement("video"),e.preview.msZoom=!0,e.preview.style.background="black",e.preview.style.zIndex=t+1,e.root.appendChild(e.preview),e.logo=document.createElement("img"),e.logo.src="/www/img/scandit-logo.svg",e.logo.style.position="absolute",e.logo.style.zIndex=t+2,e.logo.msUserSelect="none",e.root.appendChild(e.logo),e.viewFinder=document.createElement("div"),e.viewFinder.style.zIndex=t+2,e.viewFinder.style.position="absolute",e.viewFinder.style.borderWidth="1px",e.viewFinder.style.borderStyle="solid",e.viewFinder.style.borderRadius="10px",e.scanLine=document.createElement("img"),e.scanLine.src="/www/img/scanline-active.png",e.scanLine.style.width="374px",e.scanLine.style.height="24px",e.scanLine.style.position="absolute",e.scanLine.style.zIndex=t+2,e.scanLine.msUserSelect="none",e.root.appendChild(e.scanLine),e.root.appendChild(e.viewFinder),y()&&e.isFullScreen){var n=document.createElement("div");n.style.width="100%",n.style.background="black",n.style.opacity=.4,n.style.zIndex=t+2,n.style.color="white",n.style.color="white",n.style.fontSize="200%",n.style.textTransform="none",n.style.bottom="0px",n.style.left="0px",n.style.padding="5px",n.style.position="absolute",n.style.msUserSelect="none";var i=document.createElement("span");i.onclick=H,i.innerHTML="Cancel",n.appendChild(i),i.style.opacity=1,e.root.appendChild(n)}else n=null;e.beeper=document.createElement("audio");var r=document.createElement("source");r.src="/www/wav/scan-beep.wav",e.beeper.appendChild(r)}function m(e){return e&&(void 0!==e.width||void 0!==e.height||void 0!==e.topMargin||void 0!==e.bottomMargin||void 0!==e.leftMargin||void 0!==e.rightMargin)}function S(e,t){if(!e||0===e.length)return!0;for(var n=t.newlyRecognizedCodes,i=0;i<e.length;++i){for(var r=e[0],o=!1,a=0;a<n.length;++a)if(n[a].uniqueId===r){o=!0;break}if(!o)return!0}return!1}function b(e,t){if(e.state=t,null!==e.pendingStateTransition&&e.state===e.desiredState){var n=e.pendingStateTransition;e.pendingStateTransition=null,n()}}function C(e,t,n){return e.desiredState!==t?e.desiredState!==e.state?void(e.pendingStateTransition=function(){C(e,t,n)}):(e.desiredState=t,t===W?e.state===T?void P(e.root):void E():t===z?(e.state===R&&D(),void(e.state===T&&O({paused:!1}))):t===R?(e.state===z&&k(),void(e.state===T&&O({paused:!0}))):t===T?void(e.state===W&&x.apply(this,n)):void 0):void 0}function x(e,r,o,d,c){V.scanSettings=o,V.overlay=l(),s(c,V.overlay),c.hasOwnProperty("viewfinderColor")||c.hasOwnProperty("viewfinderDecodedColor")?(V.scanLineColorActive=V.overlay.viewfinderColor,V.scanLineColor=V.overlay.viewfinderDecodedColor):(V.scanLineColorActive="#00a2ba",V.scanLineColor="#00a2ba"),V.isFullScreen=!(m(d.landscapeConstraints)||m(d.portraitConstraints)),f(V),V.continuousMode=d.continuousMode,V.cancelCallback=r,V.handleEvent=function(t,n){if(e){var i=[t];i.push(n),e(i,{keepCallback:!0})}};var w=i(o);V.constraints={landscape:d.landscapeConstraints||{},portrait:d.portraitConstraints||{}};var x=n(V.constraints);a(V.root,x);var L=t(V.overlay);p(x,o.scanningHotSpot,L,V.viewFinder,V.logo,V.scanLine),document.addEventListener("visibilitychange",g),window.addEventListener("resize",h),V.isFullScreen&&!y()&&document.addEventListener("backbutton",H,!1),V.capture=new BarcodeScannerPlugin.Capture(w),null!==e&&V.capture.addDidScanDelegate(function(e){o.codeRejectionEnabled||V.overlay.beep&&V.beeper.play(),V.handleEvent("didScan",e.session),o.codeRejectionEnabled&&S(V.rejectedCodeIds,e.session)&&V.overlay.beep&&V.beeper.play(),V.continuousMode||C(V,W),e.done()}),null!==V.cancelCallback&&V.capture.addFailDelegate(function(e){V.cancelCallback(e)}),V.capture.addOrientationChangedCallback(function(){V.capture&&u(V)}),V.capture.addRecognitionFailedDelegate(v),b(V,T)}function L(){V.preview.pause();var e=V.capture;return e.stopAsync().then(function(){return V.preview.src=null,e.closeAsync()}).then(function(){V.running&&(V.handleEvent("didChangeState",Scandit.BarcodePicker.State.STOPPED),V.running=!1),b(V,T)})}function P(e){e&&document.body.removeChild(e),document.removeEventListener("visibilitychange",g),document.removeEventListener("backbutton",H),window.removeEventListener("resize",h),V.preview=null,V.capture=null,V.settings=null,V.margins=null,V.root=null,V.beeper=null,V.otherElements=null,b(V,W)}function E(){if(null!=V.capture){var e=V.root;L().then(function(){P(e)})}}function k(){V.capture&&(V.paused=!0,V.capture.pauseScanning(),V.handleEvent("didChangeState",Scandit.BarcodePicker.State.PAUSED),b(V,R),c(V.scanLine,!1))}function D(){V.capture&&(V.paused=!1,V.capture.resumeScanning(),V.handleEvent("didChangeState",Scandit.BarcodePicker.State.ACTIVE),b(V,z),c(V.scanLine,!0))}function F(){V.capture&&V.preview&&(V.preview.removeEventListener("loadeddata",F),V.capture.startAsync(V.paused).then(function(){u(V)}))}function O(e){V.capture&&V.desiredState!==z&&(V.running=!0,V.desiredState=z,V.capture.initAsync().then(function(){V.capture&&null!==V.capture.mediaCaptureSource&&(V.preview.src=URL.createObjectURL(V.capture.mediaCaptureSource),V.paused=e.paused,V.preview.addEventListener("loadeddata",F),V.preview.play(),V.handleEvent("didChangeState",Scandit.BarcodePicker.State.ACTIVE),b(V,z))}),c(V.scanLine,!0))}function A(e){V.capture&&(V.constraints={landscape:e.landscapeConstraints,portrait:e.portraitConstraints},I())}function I(){if(null!==V.preview){var e=n(V.constraints);a(V.root,e);var i=t(V.overlay);p(e,V.scanSettings.scanningHotSpot,i,V.viewFinder,V.logo,V.scanLine),u(V)}}function H(){V.desiredState!==W&&(V.cancelCallback&&V.cancelCallback("Canceled",{keepCallback:!0}),C(V,W))}function M(e){if(V.capture){var t=i(e);V.capture.applySettingsAsync(t)}}var W="closed",T="shown",z="active",R="paused",V={root:null,preview:null,capture:null,settings:null,scanSettings:null,margins:null,deviceOrientationChangeListener:null,continuousMode:!1,cancelCallback:null,paused:!1,running:!1,startOnWindowVisible:!1,state:W,desiredState:W,pendingStateTransition:null};return{show:function(e,t,n){C(V,T,[e,t,n[0],n[1],n[2]])},cancel:function(){H()},start:function(e,t,n){O(n[0])},initLicense:function(e,t,n){BarcodeScannerPlugin.Capture.appKey=n[0]},applySettings:function(e,t,n){M(n[0])},stop:function(){C(V,R),C(V,T),L()},pause:function(){C(V,R)},resume:function(){C(V,z)},torch:function(){},updateOverlay:function(e,i,r){s(r[0],V.overlay);var o=t(V.overlay),a=n(V.constraints);p(a,V.scanSettings.scanningHotSpot,o,V.viewFinder,V.logo,V.scanLine)},resize:function(e,t,n){V.isFullScreen||A(n[0])},finishDidScanCallback:function(e,t,n){w(n[1])}}}();cordova.commandProxy.add("ScanditSDK",ScanditSDKProxy);
