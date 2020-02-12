
// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"5",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currencyCode"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-9921182-2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-9921182-17",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"aff"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"OfferCode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pre"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"src"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"inf"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","currencyCode","value",["macro",1]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":8
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",2],
      "vtp_eventAction":"Add to Cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",2],
      "vtp_eventAction":"Checkout",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","currencyCode","value",["macro",1]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":21
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",2],
      "vtp_eventAction":"Product Detail View",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"13284319_11",
      "tag_id":23
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"868806589868001\");fbq(\"trackSingle\",\"868806589868001\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=868806589868001\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",6,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddPaymentInfo\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",6,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",6,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",6,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eec.add"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eec.checkout"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eec.detail"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".g-feature-list .g-feature-list-item .g-feature-list-container a"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".pv-carousel-item a"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/purchase\/checkout"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/purchase\/configure"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/search"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/event\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/performance\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/confirm"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/tour\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/show\/"
    }],
  "rules":[
    [["if",0],["add",0,3,6]],
    [["if",1],["add",1]],
    [["if",2],["add",2]],
    [["if",3],["add",4]],
    [["if",0,4,5],["add",5]],
    [["if",0,6],["add",7]],
    [["if",0,7],["add",8]],
    [["if",0,8],["add",9]],
    [["if",0,9],["add",10]],
    [["if",0,10],["unless",11],["add",10]],
    [["if",0,12],["add",10]],
    [["if",0,13],["add",10]]]
},
"runtime":[
[],[]
]



};
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={nf:!0},ia={};try{ia.__proto__=fa;ea=ia.nf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=da,la=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(){},qa=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},t=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};xa.prototype.contains=function(a){return void 0!==this.get(a)};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},B=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=B(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=B(e,c[d])):c[d]=e}return c};var ob;
var pb=[],qb=[],rb=[],tb=[],ub=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):ob(c,e,b)},Db=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Eb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=pb[g];if(!h||b.Gc(h))return;c[g]=!0;try{var k=Db(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.Rf(d,k))}catch(y){b.ce&&b.ce(y,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Bb(a[n],b,c);xb&&(m=m||q===xb.yb);d.push(q)}return xb&&m?xb.Uf(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&ua(a[1])&&"macro"===a[1][0]&&xb.Bg(a))return xb.Mg(d);d=String(d);for(var u=2;u<a.length;u++)Qa[a[u]]&&(d=Qa[a[u]](d));return d;case "tag":var p=a[1];if(!tb[p])throw Error("Unable to resolve tag reference "+p+".");return d={Td:a[2],
index:p};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=Fb(r,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Fb=function(a,b,c){try{return wb(Db(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Gb=function(){var a=function(b){return{toString:function(){return b}}};return{jd:a("convert_case_to"),kd:a("convert_false_to"),ld:a("convert_null_to"),md:a("convert_true_to"),nd:a("convert_undefined_to"),sh:a("debug_mode_metadata"),la:a("function"),bf:a("instance_name"),cf:a("live_only"),df:a("malware_disabled"),ef:a("metadata"),uh:a("original_vendor_template_id"),ff:a("once_per_event"),Gd:a("once_per_load"),Hd:a("setup_tags"),Id:a("tag_id"),Jd:a("teardown_tags")}}();var Hb=null,Kb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Hb=Ib(a);for(var e=0;e<qb.length;e++){var g=qb[e],h=Jb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<tb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Hb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Hb(e[g]);if(2===h)return null;
if(1===h)return!1}return!0},Ib=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Fb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,F=document,Sb=navigator,Tb=F.currentScript&&F.currentScript.src,Ub=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Vb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Wb=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Vb(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var g=la.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},Xb=function(){if(Tb){var a=Tb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Yb=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);Vb(c,b);void 0!==a&&(c.src=a);return c},Zb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},$b=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ac=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},bc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},cc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},dc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},ec=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},fc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var I={ka:"_ee",cc:"event_callback",Ra:"event_timeout",w:"gtag.config",O:"allow_ad_personalization_signals",U:"cookie_expires",Pa:"cookie_update",Aa:"session_duration",V:"user_properties"};var uc=/[A-Z]+/,vc=/\s/,wc=function(a){if(f(a)&&(a=Ea(a),!vc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(uc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},yc=function(a){for(var b={},c=0;c<a.length;++c){var d=wc(a[c]);d&&(b[d.id]=d)}xc(b);var e=[];za(b,function(g,h){e.push(h)});return e};
function xc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var zc={},Ac=null,Bc=Math.random();zc.m="GTM-WZCVLFF";zc.Cb="av9";var Cc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Dc="www.googletagmanager.com/gtm.js";var Ec=Dc,Fc=null,Gc=null,Hc=null,Ic="//www.googletagmanager.com/a?id="+zc.m+"&cv=5",Jc={},Kc={},Lc=function(){var a=Ac.sequence||0;Ac.sequence=a+1;return a};var Mc={},J=function(a,b){Mc[a]=Mc[a]||[];Mc[a][b]=!0},Nc=function(a){for(var b=[],c=Mc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Oc=function(){return"&tc="+tb.filter(function(a){return a}).length},Rc=function(){Pc||(Pc=D.setTimeout(Qc,500))},Qc=function(){Pc&&(D.clearTimeout(Pc),Pc=void 0);void 0===Sc||Tc[Sc]&&!Uc&&!Vc||(Wc[Sc]||Xc.Dg()||0>=Yc--?(J("GTM",1),Wc[Sc]=!0):(Xc.Xg(),Zb(Zc()),Tc[Sc]=!0,ad=Vc=Uc=""))},Zc=function(){var a=Sc;if(void 0===a)return"";var b=Nc("GTM"),c=Nc("TAGGING");return[bd,Tc[a]?"":"&es=1",cd[a],b?"&u="+b:"",c?"&ut="+c:"",Oc(),Uc,Vc,ad,"&z=0"].join("")},dd=function(){return[Ic,"&v=3&t=t","&pid="+
wa(),"&rv="+zc.Cb].join("")},ed="0.005000">Math.random(),bd=dd(),fd=function(){bd=dd()},Tc={},Uc="",Vc="",ad="",Sc=void 0,cd={},Wc={},Pc=void 0,Xc=function(a,b){var c=0,d=0;return{Dg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},Xg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),Yc=1E3,gd=function(a,b){if(ed&&!Wc[a]&&Sc!==a){Qc();Sc=a;Uc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";cd[a]="&e="+c+"&eid="+a;Rc()}},hd=function(a,b,c){if(ed&&!Wc[a]&&b){a!==Sc&&
(Qc(),Sc=a);var d=String(b[Gb.la]||"").replace(/_/g,"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Uc=Uc?Uc+"."+e:"&tr="+e;Rc();2022<=Zc().length&&Qc()}},id=function(a,b,c){if(ed&&!Wc[a]){a!==Sc&&(Qc(),Sc=a);var d=c+b;Vc=Vc?Vc+"."+d:"&epr="+d;Rc();2022<=Zc().length&&Qc()}};var jd={},kd=new xa,ld={},md={},pd={name:"dataLayer",set:function(a,b){B(La(a,b),ld);nd()},get:function(a){return od(a,2)},reset:function(){kd=new xa;ld={};nd()}},od=function(a,b){if(2!=b){var c=kd.get(a);if(ed){var d=qd(a);c!==d&&J("GTM",5)}return c}return qd(a)},qd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:sd(d)},sd=function(a){for(var b=ld,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var ud=function(a,b){md.hasOwnProperty(a)||(kd.set(a,b),B(La(a,b),ld),nd())},nd=function(a){za(md,function(b,c){kd.set(b,c);B(La(b,void 0),ld);B(La(b,c),ld);a&&delete md[b]})},vd=function(a,b,c){jd[a]=jd[a]||{};var d=1!==c?qd(b):kd.get(b);"array"===Na(d)||"object"===Na(d)?jd[a][b]=B(d):jd[a][b]=d},wd=function(a,b){if(jd[a])return jd[a][b]};var xd=function(){var a=!1;return a};var P=function(a,b,c,d){return(2===yd()||d||"http:"!=D.location.protocol?a:b)+c},yd=function(){var a=Xb(),b;if(1===a)a:{var c=Ec;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Nd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Od={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Pd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Qd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Sd=function(a){Kc.pntr=Kc.pntr||["nonGoogleScripts"];Kc.snppx=Kc.snppx||["nonGoogleScripts"];Kc.qpx=Kc.qpx||["nonGooglePixels"];var b=od("gtm.whitelist");b&&J("GTM",9);
var c=b&&Ka(Da(b),Od),d=od("gtm.blacklist");d||(d=od("tagTypeBlacklist"))&&J("GTM",3);d?J("GTM",8):d=[];Rd()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=t(Da(d),"google")&&J("GTM",2);var e=d&&Ka(Da(d),Pd),g={};return function(h){var k=h&&h[Gb.la];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];
var l=Kc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>t(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>t(c,l[q])){J("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=t(e,k);if(p)u=p;else{var r=ya(e,l||[]);r&&J("GTM",10);u=r}}var v=!m||u;v||!(0<=t(l,"sandboxedScripts"))||c&&-1!==t(c,"sandboxedScripts")||(v=ya(e,Qd));return g[k]=v}},Rd=function(){return Nd.test(D.location&&D.location.hostname)};var Td={Rf:function(a,b){b[Gb.jd]&&"string"===typeof a&&(a=1==b[Gb.jd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Gb.ld)&&null===a&&(a=b[Gb.ld]);b.hasOwnProperty(Gb.nd)&&void 0===a&&(a=b[Gb.nd]);b.hasOwnProperty(Gb.md)&&!0===a&&(a=b[Gb.md]);b.hasOwnProperty(Gb.kd)&&!1===a&&(a=b[Gb.kd]);return a}};var Ud={active:!0,isWhitelisted:function(){return!0}},Vd=function(a){var b=Ac.zones;!b&&a&&(b=Ac.zones=a());return b};var Wd=!1,Xd=0,Yd=[];function Zd(a){if(!Wd){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Wd=!0;for(var e=0;e<Yd.length;e++)G(Yd[e])}Yd.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function $d(){if(!Wd&&140>Xd){Xd++;try{F.documentElement.doScroll("left"),Zd()}catch(a){D.setTimeout($d,50)}}}var ae=function(a){Wd?a():Yd.push(a)};var be={},ce={},de=function(a,b,c,d){if(!ce[a]||Cc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=B(d,e));e.id=c;e.status="timeout";return ce[a].tags.push(e)-1},ee=function(a,b,c,d){if(ce[a]){var e=ce[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function fe(a){for(var b=be[a]||[],c=0;c<b.length;c++)b[c]();be[a]={push:function(d){d(zc.m,ce[a])}}}
var ie=function(a,b,c){ce[a]={tags:[]};qa(b)&&ge(a,b);c&&D.setTimeout(function(){return fe(a)},Number(c));return he(a)},ge=function(a,b){be[a]=be[a]||[];be[a].push(Ha(function(){return G(function(){b(zc.m,ce[a])})}))};function he(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&fe(a)})},Af:function(){d=!0;b>=c&&fe(a)}}};var je=function(){function a(d){return!ra(d)||0>d?0:d}if(!Ac._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(pd.get("gtm.start"))?pd.get("gtm.start"):0;Ac._li={cst:a(c-b),cbt:a(Gc-b)}}};var ne=!1,oe=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},pe=!1;
var qe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||J("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}je();return D[b]},re=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=oe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var te=function(){},se=function(){return D.GoogleAnalyticsObject||"ga"};var ve=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var we=/:[0-9]+$/,xe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Ae=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ye(a.protocol)||ye(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(we,"").toLowerCase());var g=b,h,k=ye(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ze(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(we,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||J("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=t(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=xe(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ye=function(a){return a?a.replace(":","").toLowerCase():""},ze=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Be=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||J("TAGGING",1),c="/"+c);var d=b.hostname.replace(we,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function Ge(a,b,c,d){var e=tb[a],g=He(a,b,c,d);if(!g)return null;var h=Bb(e[Gb.Hd],c,[]);if(h&&h.length){var k=h[0];g=Ge(k.index,{s:g,o:1===k.Td?b.terminate:g,terminate:b.terminate},c,d)}return g}
function He(a,b,c,d){function e(){if(g[Gb.df])k();else{var w=Db(g,c,[]),y=de(c.id,String(g[Gb.la]),Number(g[Gb.Id]),w[Gb.ef]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-C;hd(c.id,tb[a],"5");ee(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-C;hd(c.id,tb[a],"6");ee(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;hd(c.id,g,"1");var z=function(){var A=Fa()-C;hd(c.id,g,"7");ee(c.id,y,"exception",A);x||(x=!0,k())};var C=Fa();try{Ab(w,c)}catch(A){z(A)}}}var g=tb[a],h=b.s,k=b.o,l=b.terminate;if(c.Gc(g))return null;var m=Bb(g[Gb.Jd],c,[]);if(m&&m.length){var n=m[0],q=Ge(n.index,{s:h,o:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.Td?l:q}if(g[Gb.Gd]||g[Gb.ff]){var u=g[Gb.Gd]?ub:c.gh,p=h,r=k;if(!u[a]){e=Ha(e);var v=Ie(a,u,e);h=v.s;k=v.o}return function(){u[a](p,r)}}return e}
function Ie(a,b,c){var d=[],e=[];b[a]=Je(d,e,c);return{s:function(){b[a]=Ke;for(var g=0;g<d.length;g++)d[g]()},o:function(){b[a]=Le;for(var g=0;g<e.length;g++)e[g]()}}}function Je(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ke(a){a()}function Le(a,b){b()};var Oe=function(a,b){for(var c=[],d=0;d<tb.length;d++)if(a.kb[d]){var e=tb[d];var g=b.add();try{var h=Ge(d,{s:g,o:g,terminate:g},a,d);h?c.push({ve:d,je:Eb(e),bg:h}):(Me(d,a),g())}catch(l){g()}}b.Af();c.sort(Ne);for(var k=0;k<c.length;k++)c[k].bg();return 0<c.length};function Ne(a,b){var c,d=b.je,e=a.je;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ve,k=b.ve;g=h>k?1:h<k?-1:0}return g}
function Me(a,b){if(!ed)return;var c=function(d){var e=b.Gc(tb[d])?"3":"4",g=Bb(tb[d][Gb.Hd],b,[]);g&&g.length&&c(g[0].index);hd(b.id,tb[d],e);var h=Bb(tb[d][Gb.Jd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Pe=!1,Qe=function(a,b,c,d,e){if("gtm.js"==b){if(Pe)return!1;Pe=!0}gd(a,b);var g=ie(a,d,e);vd(a,"event",1);vd(a,"ecommerce",1);vd(a,"gtm");var h={id:a,name:b,Gc:Sd(c),kb:[],gh:[],ce:function(){J("GTM",6)}};h.kb=Kb(h);var k=Oe(h,g);
if(!k)return k;for(var l=0;l<h.kb.length;l++)if(h.kb[l]){var m=tb[l];if(m&&!Cc[String(m[Gb.la])])return!0}return!1};var Se=/^https?:\/\/www\.googletagmanager\.com/,Te=function(){var a;return a},Ue=function(){var a=!1;return a};var Ve=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.La={};this.globalConfig={};this.s=function(){};this.o=function(){}},We=function(a){var b=new Ve;b.eventModel=a;return b},Xe=function(a,b){a.targetConfig=b;return a},Ye=function(a,b){a.containerConfig=b;return a},Ze=function(a,b){a.La=b;return a},$e=function(a,b){a.globalConfig=b;return a},af=function(a,b){a.s=b;return a},bf=function(a,b){a.o=b;return a};
Ve.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.La[a])return this.La[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};var cf={},df=["G"];cf.xe="";var ef=cf.xe.split(",");function ff(){var a=Ac;return a.gcq=a.gcq||new gf}
var hf=function(a,b,c){ff().register(a,b,c)},jf=function(a,b,c,d){ff().push("event",[b,a],c,d)},kf=function(a,b){ff().push("config",[a],b)},lf={},mf=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.La={};this.ke=null;this.Zd=!1},nf=function(a,b,c,d,e){this.type=a;this.we=b;this.L=c||"";this.Gb=d;this.defer=e},gf=function(){this.Pd={};this.Yd={};this.fb=[]},of=function(a,b){var c=wc(b);return a.Pd[c.containerId]=a.Pd[c.containerId]||new mf},pf=function(a,b,c,d){if(d.L){var e=
of(a,d.L),g=e.ke;if(g){var h=B(c),k=B(e.targetConfig[d.L]),l=B(e.containerConfig),m=B(e.La),n=B(a.Yd),q=od("gtm.uniqueEventId"),u=wc(d.L).prefix,p=bf(af($e(Ze(Ye(Xe(We(h),k),l),m),n),function(){id(q,u,"2");}),function(){id(q,u,"3");});try{id(q,u,"1");3===g.length?g(b,d.we,p):4===g.length&&
g(d.L,b,d.we,p)}catch(r){id(q,u,"4");}}}};
gf.prototype.register=function(a,b,c){if(3!==of(this,a).status){of(this,a).ke=b;of(this,a).status=3;c&&(of(this,a).La=c);var d=wc(a),e=lf[d.containerId];if(void 0!==e){var g=Ac[d.containerId].bootstrap,h=d.prefix.toUpperCase();Ac[d.containerId]._spx&&(h=h.toLowerCase());var k=od("gtm.uniqueEventId"),l=h,m=Fa()-g;if(ed&&!Wc[k]){k!==Sc&&(Qc(),Sc=k);var n=l+"."+Math.floor(g-e)+"."+Math.floor(m);ad=ad?ad+","+n:"&cl="+n}delete lf[d.containerId]}this.flush()}};
gf.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var g=wc(c),h;if(h=g){var k;if(k=1===of(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(of(this,c).status=2,this.push("require",[],g.containerId),lf[g.containerId]=Fa(),!xd())){var m=encodeURIComponent(g.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";Wb(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.fb.push(new nf(a,e,c,b,d));d||this.flush()};
gf.prototype.flush=function(a){for(var b=this;this.fb.length;){var c=this.fb[0];if(c.defer)c.defer=!1,this.fb.push(c);else switch(c.type){case "require":if(3!==of(this,c.L).status&&!a)return;break;case "set":za(c.Gb[0],function(l,m){B(La(l,m),b.Yd)});break;case "config":var d=c.Gb[0],e=!!d[I.xb];delete d[I.xb];var g=of(this,c.L),h=wc(c.L),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.L]={});g.Zd&&e||pf(this,I.w,d,c);g.Zd=!0;delete d[I.ka];k?B(d,g.containerConfig):B(d,g.targetConfig[c.L]);
break;case "event":pf(this,c.Gb[1],c.Gb[0],c)}this.fb.shift()}};var qf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},tf=function(a,b,c,d){var e=rf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=sf(e,function(g){return g.Lb},b);if(1===e.length)return e[0].id;e=sf(e,function(g){return g.lb},c);return e[0]?e[0].id:void 0}};
function uf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=qf(b,e).indexOf(c)}
var xf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var r=h[p];if(null!=r)switch(p){case "secure":r&&(m+="; secure");break;case "domain":q=r;break;default:"path"==p&&(u=r),"expires"==p&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+p+"="+r}}if("auto"===q){for(var v=vf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!wf(y,u)&&uf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!wf(q,u)&&uf(m,a,l)}return k};function sf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function rf(a,b){for(var c=[],d=qf(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Lb:1*k[0]||1,lb:1*k[1]||1}))}}return c}
var yf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,zf=/(^|\.)doubleclick\.net$/i,wf=function(a,b){return zf.test(document.location.hostname)||"/"===b&&yf.test(a)},vf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;zf.test(e)||yf.test(e)||a.push("none");return a};var Af="".split(/,/),Bf=!1;var Cf=null,Df={},Ef={},Gf,Hf=function(a,b){var c={event:a};b&&(c.eventModel=B(b),b[I.cc]&&(c.eventCallback=b[I.cc]),b[I.Ra]&&(c.eventTimeout=b[I.Ra]));return c};
var Nf={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=Hf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).Fh().yh(a[1],a[2])},set:function(a){var b;2==a.length&&Pa(a[1])?b=
B(a[1]):3==a.length&&f(a[1])&&(b={},Pa(a[2])||ua(a[2])?b[a[1]]=B(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Of={policy:!0};var Qf=function(a){return Pf?F.querySelectorAll(a):null},Rf=function(a,b){if(!Pf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Sf=!1;if(F.querySelectorAll)try{var Tf=F.querySelectorAll(":root");Tf&&1==Tf.length&&Tf[0]==F.documentElement&&(Sf=!0)}catch(a){}var Pf=Sf;var $f=function(a){if(Zf(a))return a;this.nh=a};$f.prototype.ig=function(){return this.nh};var Zf=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};$f.prototype.getUntrustedUpdateValue=$f.prototype.ig;var ag=!1,bg=[];function cg(){if(!ag){ag=!0;for(var a=0;a<bg.length;a++)G(bg[a])}}var dg=function(a){ag?G(a):bg.push(a)};var eg=[],fg=!1,gg=function(a){return D["dataLayer"].push(a)},hg=function(a){var b=Ac["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},jg=function(a){var b=a._clear;za(a,function(g,h){"_clear"!==g&&(b&&ud(g,void 0),ud(g,h))});Fc||(Fc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Lc(),a["gtm.uniqueEventId"]=d,ud("gtm.uniqueEventId",d));Hc=c;var e=ig(a);
Hc=null;switch(c){case "gtm.init":J("GTM",19),e&&J("GTM",20)}return e};function ig(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Ac.zones;d=e?e.checkState(zc.m,c):Ud;return d.active?Qe(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var kg=function(){for(var a=!1;!fg&&0<eg.length;){fg=!0;delete ld.eventModel;nd();var b=eg.shift();if(null!=b){var c=Zf(b);if(c){var d=b;b=Zf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=od(h,1);if(ua(k)||Pa(k))k=B(k);md[h]=k}}try{if(qa(b))try{b.call(pd)}catch(v){}else if(ua(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=od(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&f(b[0])){var r=Nf[b[0]];if(r&&(!c||!Of[b[0]])){b=r(b);break a}}b=void 0}if(!b){fg=!1;continue}}a=jg(b)||a}}finally{c&&nd(!0)}}fg=!1}
return!a},lg=function(){var a=kg();try{var b=zc.m,c=D["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},ng=function(){var a=Ub("dataLayer",[]),b=Ub("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ae(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});dg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<Ac.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new $f(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);eg.push.apply(eg,d);if(300<this.length)for(J("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return kg()&&h};eg.push.apply(eg,a.slice(0));mg()&&G(lg)},mg=function(){var a=!0;return a};var og;var Kg={};Kg.yb=new String("undefined");
var Lg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Kg.yb?b:a[d]);return c.join("")}};Lg.prototype.toString=function(){return this.resolve("undefined")};Lg.prototype.valueOf=Lg.prototype.toString;Kg.kf=Lg;Kg.sc={};Kg.Uf=function(a){return new Lg(a)};var Mg={};Kg.Yg=function(a,b){var c=Lc();Mg[c]=[a,b];return c};Kg.Qd=function(a){var b=a?0:1;return function(c){var d=Mg[c];if(d&&"function"===typeof d[b])d[b]();Mg[c]=void 0}};Kg.Bg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Kg.Mg=function(a){if(a===Kg.yb)return a;var b=Lc();Kg.sc[b]=a;return'google_tag_manager["'+zc.m+'"].macro('+b+")"};Kg.Fg=function(a,b,c){a instanceof Kg.kf&&(a=a.resolve(Kg.Yg(b,c)),b=pa);return{Ec:a,s:b}};var Ng=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||bc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Og=function(a){Ac.hasOwnProperty("autoEventsSettings")||(Ac.autoEventsSettings={});var b=Ac.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Pg=function(a,b,c){Og(a)[b]=c},Qg=function(a,b,c,d){var e=Og(a),g=Ga(e,b,d);e[b]=c(g)},Rg=function(a,b,c){var d=Og(a);return Ga(d,b,c)};var Sg=function(){for(var a=Sb.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Vg=function(a,b,c,d){var e=Tg(b);return tf(a,e,Ug(c),d)},Wg=function(a,b,c,d){var e=""+Tg(c),g=Ug(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Tg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ug=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Xg=["1"],Yg={},bh=function(a,b,c,d){var e=Zg(a);Yg[e]||$g(e,b,c)||(ah(e,Sg(),b,c,d),$g(e,b,c))};function ah(a,b,c,d,e){var g=Wg(b,"1",d,c);xf(a,g,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function $g(a,b,c){var d=Vg(a,b,c,Xg);d&&(Yg[a]=d);return d}function Zg(a){return(a||"_gcl")+"_au"};var ch=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({ad:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].ad]||(g[a[h].ad]=[]),g[a[h].ad].push({timestamp:k[1],fg:k[2]}))}return g};function dh(){for(var a=eh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function fh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var eh,gh,hh=function(a){eh=eh||fh();gh=gh||dh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(eh[l],eh[m],eh[n],eh[q])}return b.join("")},ih=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=gh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}eh=eh||fh();gh=gh||
dh();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jh;function kh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var oh=function(){var a=lh,b=mh,c=nh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){$b(F,"mousedown",d);$b(F,"keyup",d);$b(F,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},nh=function(){var a=Ub("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ph=/(.*?)\*(.*?)\*(.*)/,qh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,rh=/^(?:www\.|m\.|amp\.)+/,sh=/([^?#]+)(\?[^#]*)?(#.*)?/,th=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,vh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(hh(String(d))))}var e=b.join("*");return["1",uh(e),e].join("*")},uh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jh)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}jh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^jh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},xh=function(){return function(a){var b=Be(D.location.href),c=b.search.replace("?",""),d=xe(c,"_gl",!0)||"";a.query=wh(d)||{};var e=Ae(b,"fragment").match(th);a.fragment=wh(e&&e[3]||
"")||{}}},yh=function(){var a=xh(),b=nh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},wh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=ph.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===uh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=ih(u[p+1]);return q}}}}catch(r){}};
function zh(a,b,c){function d(m){var n=m,q=th.exec(n),u=n;if(q){var p=q[2],r=q[4];u=q[1];r&&(u=u+p+r)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=sh.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Ah(a,b,c){for(var d={},e={},g=nh().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&kh(k.domains,b)&&(k.fragment?Ia(e,k.callback()):Ia(d,k.callback()))}if(Ja(d)){var l=vh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var r=F.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=zh(l,a.action);ve.test(v)&&(a.action=v)}}}else Bh(l,a,!1)}if(!c&&Ja(e)){var w=vh(e);Bh(w,a,!0)}}function Bh(a,b,c){if(b.href){var d=zh(a,b.href,void 0===c?!1:c);ve.test(d)&&(b.href=d)}}
var lh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Ah(e,e.hostname,!1)}}catch(h){}},mh=function(a){try{if(a.action){var b=Ae(Be(a.action),"host");Ah(a,b,!0)}}catch(c){}},Ch=function(a,b,c,d){oh();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};nh().decorators.push(e)},Dh=function(){var a=F.location.hostname,b=qh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(rh,""),l=e.replace(rh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Eh=function(a,b){return!1===a?!1:a||b||Dh()};var Fh={};var Gh=/^\w+$/,Hh=/^[\w-]+$/,Ih=/^~?[\w-]+$/,Jh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Kh(a){return a&&"string"==typeof a&&a.match(Gh)?a:"_gcl"}var Mh=function(){var a=Be(D.location.href),b=Ae(a,"query",!1,void 0,"gclid"),c=Ae(a,"query",!1,void 0,"gclsrc"),d=Ae(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||xe(e,"gclid",void 0);c=c||xe(e,"gclsrc",void 0)}return Lh(b,c,d)};
function Lh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Hh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Fh.gtm_3pds?0:Fh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Oh=function(a){var b=Mh();Nh(b,a)};
function Nh(a,b,c){function d(q,u){var p=Ph(q,e);p&&xf(p,u,h,g,l,!0)}b=b||{};var e=Kh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ia?7776E3:b.Ia;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Th?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Rh=function(a,b,c,d,e){for(var g=yh(),h=Kh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Jh[l]){var m=Ph(l,h),n=g[m];if(n){var q=Math.min(Qh(n),Fa()),u;b:{for(var p=q,r=qf(m,F.cookie),v=0;v<r.length;++v)if(Qh(r[v])>p){u=!0;break b}u=!1}u||xf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Nh(Lh(g.gclid,g.gclsrc),w)},Ph=function(a,b){var c=Jh[a];if(void 0!==c)return b+c},Qh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Sh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Th=function(a,b,c,d,e){if(ua(b)){var g=Kh(e);Ch(function(){for(var h={},k=0;k<a.length;++k){var l=Ph(a[k],g);if(l){var m=qf(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Uh=function(a){return a.filter(function(b){return Ih.test(b)})},Vh=function(a,b){for(var c=Kh(b&&b.prefix),d={},e=0;e<a.length;e++)Jh[a[e]]&&(d[a[e]]=Jh[a[e]]);za(d,function(g,h){var k=qf(c+h,F.cookie);if(k.length){var l=k[0],m=Qh(l),n={};n[g]=[Sh(l)];Nh(n,b,m)}})};var Wh=/^\d+\.fls\.doubleclick\.net$/;function Xh(a){var b=Be(D.location.href),c=Ae(b,"host",!1);if(c&&c.match(Wh)){var d=Ae(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Yh(a,b){if("aw"==a||"dc"==a){var c=Xh("gcl"+a);if(c)return c.split(".")}var d=Kh(b);if("_gcl"==d){var e;e=Mh()[a]||[];if(0<e.length)return e}var g=Ph(a,d),h;if(g){var k=[];if(F.cookie){var l=qf(g,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Sh(l[m]);n&&-1===t(k,n)&&k.push(n)}h=Uh(k)}else h=k}else h=k}else h=[];return h}
var Zh=function(){var a=Xh("gac");if(a)return decodeURIComponent(a);var b=ch(),c=[];za(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].fg);g=Uh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},$h=function(a,b,c,d,e){bh(b,c,d,e);var g=Yg[Zg(b)],h=Mh().dc||[],k=!1;if(g&&0<h.length){var l=Ac.joined_au=Ac.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+g;Sb.sendBeacon&&Sb.sendBeacon(u)||Zb(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=Zg(b),r=Yg[p];r&&ah(p,r,c,d,e)}};var ai;if(3===zc.Cb.length)ai="g";else{var bi="G";ai=bi}
var ci={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ai,OPT:"o"},di=function(a){var b=zc.m.split("-"),c=b[0].toUpperCase(),d=ci[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===zc.Cb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+zc.Cb+e};var ii=["input","select","textarea"],ji=["button","hidden","image","reset","submit"],ki=function(a){var b=a.tagName.toLowerCase();return!va(ii,function(c){return c===b})||"input"===b&&va(ji,function(c){return c===a.type.toLowerCase()})?!1:!0},li=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):ec(a,["form"],100)},mi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(ki(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var qi=!!D.MutationObserver,ri=void 0,si=function(a){if(!ri){var b=function(){var c=F.body;if(c)if(qi)(new MutationObserver(function(){for(var e=0;e<ri.length;e++)G(ri[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;$b(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<ri.length;e++)G(ri[e])}))})}};ri=[];F.body?b():G(b)}ri.push(a)};var Ui=D.clearTimeout,Vi=D.setTimeout,R=function(a,b,c){if(xd()){b&&G(b)}else return Wb(a,b,c)},Wi=function(){return D.location.href},Xi=function(a){return Ae(Be(a),"fragment")},Yi=function(a){return ze(Be(a))},V=function(a,b){return od(a,b||2)},Zi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return gg(a)},$i=function(a,b){D[a]=b},W=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},
aj=function(a,b,c){return qf(a,b,void 0===c?!0:!!c)},bj=function(a,b){if(xd()){b&&G(b)}else Yb(a,b)},cj=function(a){return!!Rg(a,"init",!1)},dj=function(a){Pg(a,"init",!0)},ej=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Ec;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&za(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});R(P("https://","http://",d))},fj=function(a,b){var c=a[b];return c};
var gj=Kg.Fg;var hj=new xa,ij=function(a,b){function c(h){var k=Be(h),l=Ae(k,"protocol"),m=Ae(k,"host",!0),n=Ae(k,"port"),q=Ae(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},kj=function(a){return jj(a)?1:0};
function jj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(kj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=t(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,r=hj.get(p);r||(r=new RegExp(c,u),hj.set(p,r));q=r.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ij(b,
c)}return!1};var mj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var nj={},oj=encodeURI,X=encodeURIComponent,pj=Zb;var qj=function(a,b){if(!a)return!1;var c=Ae(Be(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var rj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};nj.Cg=function(){var a=!1;return a};var xk=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var Ik=window,Jk=document,Kk=function(a){var b=Ik._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ik["ga-disable-"+a])return!0;try{var c=Ik.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=qf("AMP_TOKEN",Jk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Jk.getElementById("__gaOptOutExtension")?!0:!1};
var Nk=function(a){return"_"===a.charAt(0)},Ok=function(a){za(a,function(c){Nk(c)&&delete a[c]});var b=a[I.V]||{};za(b,function(c){Nk(c)&&delete b[c]})};var Rk=function(a,b,c){jf(b,c,a)},Sk=function(a,b,c){jf(b,c,a,!0)},Uk=function(a,b){},Tk=function(a,b){};
var Y={a:{}};

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(wd(a.vtp_gtmEventId,"event"))})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0;Y.__f.priorityOverride=0})(function(a){var b=V("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ae(Be(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Yi(String(b)):String(b)})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0;Y.__k.priorityOverride=0})(function(a){return aj(a.vtp_name,V("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:V("gtm.url",1))||Wi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Yi(String(c));var e=Be(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ua(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=Ae(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=Ae(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;B(rj(n.vtp_fieldsToSet,"fieldName","value"),g);B(rj(n.vtp_contentGroup,"index","group"),h);B(rj(n.vtp_dimension,"index","dimension"),k);B(rj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=B(n);d=B(d,q)}B(rj(d.vtp_fieldsToSet,"fieldName","value"),g);B(rj(d.vtp_contentGroup,
"index","group"),h);B(rj(d.vtp_dimension,"index","dimension"),k);B(rj(d.vtp_metric,"index","metric"),l);var u=qe(d.vtp_functionName);if(qa(u)){var p="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,p=r+"."):(r="gtm"+Lc(),p=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(O){var L=[].slice.call(arguments,0);L[0]=p+L[0];u.apply(window,L)},x=function(O,L){return void 0===L?L:O(L)},z=function(O,L){if(L)for(var sa in L)L.hasOwnProperty(sa)&&y("set",O+sa,L[sa])},C=function(){
var O=function(Ll,oi,Ml){if(!Pa(oi))return!1;for(var $c=Ga(Object(oi),Ml,[]),Ff=0;$c&&Ff<$c.length;Ff++)y(Ll,$c[Ff]);return!!$c&&0<$c.length},L;if(d.vtp_useEcommerceDataLayer){var sa=!1;sa||(L=V("ecommerce",1))}else d.vtp_ecommerceMacroData&&(L=d.vtp_ecommerceMacroData.ecommerce);if(!Pa(L))return;L=Object(L);var Cb=Ga(g,"currencyCode",L.currencyCode);
void 0!==Cb&&y("set","&cu",Cb);O("ec:addImpression",L,"impressions");if(O("ec:addPromo",L[L.promoClick?"promoClick":"promoView"],"promotions")&&L.promoClick){y("ec:setAction","promo_click",L.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),$a="refund purchase remove checkout checkout_option add click detail".split(" "),ab=0;ab<Ba.length;ab++){var kb=L[Ba[ab]];if(kb){O("ec:addProduct",kb,"products");y("ec:setAction",Ba[ab],kb.actionField);
if(ed)for(var sb=0;sb<$a.length;sb++){var pc=L[$a[sb]];if(pc){pc!==kb&&J("GTM",13);break}}break}}},A=function(O,L,sa){var Cb=0;if(O)for(var Ba in O)if(O.hasOwnProperty(Ba)&&(sa&&v[Ba]||!sa&&void 0===v[Ba])){var $a=w[Ba]?Ca(O[Ba]):O[Ba];"anonymizeIp"!=Ba||$a||($a=void 0);L[Ba]=$a;Cb++}return Cb},E={name:r};A(g,E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",di(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,L){void 0!==d[L]&&y("set",O,d[L])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var H={};A(g,H,!1)&&y("set",H);var K;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=g&&g.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var Q={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||
e.value)};A(K,Q,!1);y("send",Q);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var na=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:na})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ka})}K?y("send","pageview",K):y("send","pageview");}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var bb=P("https:","http:","//www.google-analytics.com/"+ta,g&&g.forceSSL);R(bb,function(){var O=oe();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.b="ua";Y.__ua.g=!0;Y.__ua.priorityOverride=0}();







Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.b="gas";Y.__gas.g=!0;Y.__gas.priorityOverride=0})(function(a){var b=B(a),c=b;c[Gb.la]=null;c[Gb.bf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();




Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Vb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(u){G(h)}}}var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,g=gj(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Ec,k=g.s;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,dc(h),k,e)()}else Vi(function(){c(d)},
200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0;Y.__html.priorityOverride=0}();






Y.a.lcl=[],function(){function a(){var e=W("document"),g=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.Ag||k.timeStamp&&k.timeStamp===g)){g=k.timeStamp;l=ec(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=Rg("lcl",m?"nv.mwt":"mwt",0),q;q=m?Rg("lcl","nv.ids",[]):Rg("lcl","ids",[]);if(q.length){var u=Ng(l,"gtm.linkClick",q);if(b(k,l,e)&&!m&&n&&l.href){var p=String(fj(l,"rel")||""),r=!!va(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
r&&J("GTM",36);var v=W((fj(l,"target")||"_self").substring(1)),w=!0;if(Zi(u,hg(function(){var y;if(y=w&&v){var x;a:if(r&&d){var z;try{z=new MouseEvent(k.type)}catch(C){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.Ag=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=fj(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else Zi(u,function(){},n||2E3);return!0}}};$b(e,"click",h,!1);$b(e,"auxclick",h,
!1)}function b(e,g,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=fj(g,"href"),l=k.indexOf("#"),m=fj(g,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=Yi(k),q=Yi(h.location);return n!==q}return!0}function c(e){var g=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(q){return Math.max(k,
q)};Qg("lcl","mwt",m,0);h||Qg("lcl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Qg("lcl","ids",n,[]);h||Qg("lcl","nv.ids",n,[]);cj("lcl")||(a(),dj("lcl"));G(e.vtp_gtmOnSuccess)}var d=!1;Y.__lcl=c;Y.__lcl.b="lcl";Y.__lcl.g=!0;Y.__lcl.priorityOverride=0;}();


var Kl={};Kl.macro=function(a){if(Kg.sc.hasOwnProperty(a))return Kg.sc[a]},Kl.onHtmlSuccess=Kg.Qd(!0),Kl.onHtmlFailure=Kg.Qd(!1);Kl.dataLayer=pd;Kl.callback=function(a){Jc.hasOwnProperty(a)&&qa(Jc[a])&&Jc[a]();delete Jc[a]};Kl.Ff=function(){Ac[zc.m]=Kl;Ia(Kc,Y.a);xb=xb||Kg;yb=Td};
Kl.wg=function(){Fh.gtm_3pds=!0;Ac=D.google_tag_manager=D.google_tag_manager||{};if(Ac[zc.m]){var a=Ac.zones;a&&a.unregisterChild(zc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)tb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);qb.push(q)}vb=Y;wb=kj;(0,Kl.Ff)();ng();Wd=!1;Xd=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)Zd();else{$b(F,"DOMContentLoaded",Zd);$b(F,"readystatechange",Zd);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&$d()}$b(D,"load",Zd)}ag=!1;"complete"===F.readyState?
cg():$b(D,"load",cg);a:{if(!ed)break a;D.setInterval(fd,864E5);}
Gc=(new Date).getTime();}};(0,Kl.wg)();

})()
