/** Build at: 2023-06-07 15:53:35 Setup: /mapping/78/ */
/* prebid.js v7.45.0
Updated: 2023-06-07
Modules: adfBidAdapter, appnexusBidAdapter, criteoBidAdapter, dspxBidAdapter, orbidderBidAdapter, pubmaticBidAdapter, rubiconBidAdapter, smartadserverBidAdapter, stroeerCoreBidAdapter, teadsBidAdapter, tripleliftBidAdapter, visxBidAdapter, yieldlabBidAdapter, currency, consentManagement */
if(window.pbjs&&window.pbjs.libLoaded)try{window.pbjs.getConfig("debug")&&console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")}catch(e){}else (function(){
!function(){var e,n={35706:function(e,n,t){t.d(n,{Pd:function(){return d},Th:function(){return s},_U:function(){return f}});var r=t(55730),i=t(64358),o=t(20265),a=t(34614),u=(0,t(78640).R)(),c="outstream";function s(e){var n=this,t=e.url,o=e.config,a=e.id,u=e.callback,s=e.loaded,d=e.adUnitCode,f=e.renderNow;this.url=t,this.config=o,this.handlers={},this.id=a,this.renderNow=f,this.loaded=s,this.cmd=[],this.push=function(e){"function"==typeof e?n.loaded?e.call():n.cmd.push(e):(0,i.logError)("Commands given to Renderer.push must be wrapped in a function")},this.callback=u||function(){n.loaded=!0,n.process()},this.render=function(){var e=this,n=arguments,o=function(){e._render?e._render.apply(e,n):(0,i.logWarn)("No render function was provided, please use .setRender on the renderer")};l(d)?((0,i.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d)),o()):f?o():(this.cmd.unshift(o),(0,r.B)(t,c,this.callback,this.documentContext))}.bind(this)}function d(e){return!(!e||!e.url&&!e.renderNow)}function f(e,n,t){var r=null;e.config&&e.config.documentResolver&&(r=e.config.documentResolver(n,document,t)),r||(r=document),e.documentContext=r,e.render(n,e.documentContext)}function l(e){var n=u.adUnits,t=(0,a.sE)(n,(function(n){return n.code===e}));if(!t)return!1;var r=(0,o.Z)(t,"renderer"),i=!!(r&&r.url&&r.render),c=(0,o.Z)(t,"mediaTypes.video.renderer"),s=!!(c&&c.url&&c.render);return!!(i&&!0!==r.backupOnly||s&&!0!==c.backupOnly)}s.install=function(e){return new s({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode,renderNow:e.renderNow})},s.prototype.getConfig=function(){return this.config},s.prototype.setRender=function(e){this._render=e},s.prototype.setEventHandlers=function(e){this.handlers=e},s.prototype.handleVideoEvent=function(e){var n=e.id,t=e.eventName;"function"==typeof this.handlers[t]&&this.handlers[t](),(0,i.logMessage)("Prebid Renderer event for id ".concat(n," type ").concat(t))},s.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){(0,i.logError)("Error processing Renderer command: ",e)}}},9633:function(e,n,t){t.d(n,{UL:function(){return i},XG:function(){return a},_U:function(){return u},ic:function(){return r},y2:function(){return o}});var r="core",i="bidder",o="userId",a="rtd",u="analytics"},875:function(e,n,t){t.d(n,{f:function(){return a}});var r=t(20265),i={};function o(e,n,t){var r=function(e,n){var t=i[e]=i[e]||{bidders:{}};return n?t.bidders[n]=t.bidders[n]||{}:t}(e,t);return r[n]=(r[n]||0)+1,r[n]}var a={incrementRequestsCounter:function(e){return o(e,"requestsCounter")},incrementBidderRequestsCounter:function(e,n){return o(e,"requestsCounter",n)},incrementBidderWinsCounter:function(e,n){return o(e,"winsCounter",n)},getRequestsCounter:function(e){return(0,r.Z)(i,"".concat(e,".requestsCounter"))||0},getBidderRequestsCounter:function(e,n){return(0,r.Z)(i,"".concat(e,".bidders.").concat(n,".requestsCounter"))||0},getBidderWinsCounter:function(e,n){return(0,r.Z)(i,"".concat(e,".bidders.").concat(n,".winsCounter"))||0}}},48525:function(e,n,t){function r(e){var n=e;return{callBids:function(){},setBidderCode:function(e){n=e},getBidderCode:function(){return n}}}t.d(n,{Z:function(){return r}})},51039:function(e,n,t){t.d(n,{qJ:function(){return U},VP:function(){return z},ZP:function(){return Y},JO:function(){return x},rp:function(){return M},uV:function(){return K},TJ:function(){return F},Ct:function(){return G},nX:function(){return W}});var r=t(89062),i=t(93324),o=t(4942),a=t(64358),u=t(20265),c=t(71002),s=t(3193),d=t(34614),f=t(24679),l=[];function g(e,n){return e.labelAll?{labelAll:!0,labels:e.labelAll,activeLabels:n}:{labelAll:!1,labels:e.labelAny,activeLabels:n}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.labels,t=void 0===n?[]:n,r=e.labelAll,i=void 0!==r&&r,o=e.activeLabels,c=void 0===o?[]:o,s=arguments.length>1?arguments[1]:void 0,g=arguments.length>2?arguments[2]:void 0,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l,h=v(p);(0,a.isPlainObject)(s)||(s=g?{banner:{sizes:g}}:{});var m=(0,u.Z)(s,"banner.sizes");h.shouldFilter&&m&&((s=(0,a.deepClone)(s)).banner.sizes=m.filter((function(e){return h.sizesSupported[e]})));var b={active:!s.hasOwnProperty(f.Mk)||(0,u.Z)(s,"banner.sizes.length")>0&&(0===t.length||!i&&(t.some((function(e){return h.labels[e]}))||t.some((function(e){return(0,d.q9)(c,e)})))||i&&t.reduce((function(e,n){return e?h.labels[n]||(0,d.q9)(c,n):e}),!0)),mediaTypes:s};return m&&m.length!==s.banner.sizes.length&&(b.filterResults={before:m,after:s.banner.sizes}),b}function v(e){return e.reduce((function(e,n){if("object"===(0,c.Z)(n)&&"string"==typeof n.mediaQuery&&n.mediaQuery.length>0){var t=!1;try{t=(0,a.getWindowTop)().matchMedia(n.mediaQuery).matches}catch(e){(0,a.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"),t=matchMedia(n.mediaQuery).matches}t&&(Array.isArray(n.sizesSupported)&&(e.shouldFilter=!0),["labels","sizesSupported"].forEach((function(t){return(n[t]||[]).forEach((function(n){return e[t][n]=!0}))})))}else(0,a.logWarn)('sizeConfig rule missing required property "mediaQuery"');return e}),{labels:{},sizesSupported:{},shouldFilter:!1})}s.vc.getConfig("sizeConfig",(function(e){return function(e){l=e}(e.sizeConfig)}));var h=t(70059),m=t(14699),b=t(48928),y=t(92797),w=t(875),E=t(25102),C=t(34516),A=t(52021),T=t(5644),I=t(99128),O=t(78653),S=t(9633);function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var U={CLIENT:"client",SERVER:"server"},j={},_=j.bidderRegistry={},R=j.aliasRegistry={},P=[];s.vc.getConfig("s2sConfig",(function(e){e&&e.s2sConfig&&(P=(0,a.isArray)(e.s2sConfig)?e.s2sConfig:[e.s2sConfig])}));var q={};var D=(0,y.z3)("sync",(function(e){var n=e.bidderCode,t=e.auctionId,r=e.bidderRequestId,i=e.adUnits,o=e.src,c=e.metrics;return i.reduce((function(e,i){var s=i.bids.filter((function(e){return e.bidder===n}));return null==n&&0===s.length&&null!=i.s2sBid&&s.push({bidder:null}),e.push(s.reduce((function(e,n){var s=null==(n=Object.assign({},n,{ortb2Imp:(0,a.mergeDeep)({},i.ortb2Imp,n.ortb2Imp)},(0,a.getDefinedParams)(i,["nativeParams","nativeOrtbRequest","mediaType","renderer"]))).mediaTypes?i.mediaTypes:n.mediaTypes;return(0,a.isValidMediaTypes)(s)?n=Object.assign({},n,{mediaTypes:s}):(0,a.logError)("mediaTypes is not correctly configured for adunit ".concat(i.code)),e.push(Object.assign({},n,{adUnitCode:i.code,transactionId:i.transactionId,sizes:(0,u.Z)(s,"banner.sizes")||(0,u.Z)(s,"video.playerSize")||[],bidId:n.bid_id||(0,a.getUniqueIdentifierStr)(),bidderRequestId:r,auctionId:t,src:o,metrics:c,bidRequestsCount:w.f.getRequestsCounter(i.code),bidderRequestsCount:w.f.getBidderRequestsCounter(i.code,n.bidder),bidderWinsCount:w.f.getBidderWinsCounter(i.code,n.bidder)})),e}),[])),e}),[]).reduce(a.flatten,[]).filter((function(e){return""!==e}))}),"getBids");var x=(0,y.z3)("sync",(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.getS2SBidders,i=void 0===r?K:r;if(null==n)return e;var o=i(n);return e.filter((function(e){return o.has(e.bidder)}))}),"filterBidsForAdUnit");function Z(e,n){var t=(0,a.deepClone)(e),r=!1;return t.forEach((function(e){var t=e.bids.filter((function(e){var t;return"pbsBidAdapter"===e.module&&(null===(t=e.params)||void 0===t?void 0:t.configName)===n.configName}));1===t.length?(e.s2sBid=t[0],r=!0,e.ortb2Imp=(0,a.mergeDeep)({},e.s2sBid.ortb2Imp,e.ortb2Imp)):t.length>1&&(0,a.logWarn)('Multiple "module" bids for the same s2s configuration; all will be ignored',t),e.bids=x(e.bids,n).map((function(e){return e.bid_id=(0,a.getUniqueIdentifierStr)(),e}))})),{adUnits:t=t.filter((function(e){return 0!==e.bids.length||null!=e.s2sBid})),hasModuleBids:r}}function N(e){var n=(0,a.deepClone)(e);return n.forEach((function(e){e.bids=x(e.bids,null)})),n=n.filter((function(e){return 0!==e.bids.length}))}var M=new C.iK,W=new C.LO,F=new C.$e,z={getCoppa:function(){return!!s.vc.getConfig("coppa")}},L=(0,y.z3)("sync",(function(e,n){return function(e,n){return e.reduce((function(e,t){var r=p(g(t,n),t.mediaTypes,t.sizes),i=r.active,o=r.mediaTypes,u=r.filterResults;return i?(u&&(0,a.logInfo)('Size mapping filtered adUnit "'.concat(t.code,'" banner sizes from '),u.before,"to ",u.after),t.mediaTypes=o,t.bids=t.bids.reduce((function(e,r){var i=p(g(r,n),t.mediaTypes),o=i.active,u=i.mediaTypes,c=i.filterResults;return o?(c&&((0,a.logInfo)('Size mapping filtered adUnit "'.concat(t.code,'" bidder "').concat(r.bidder,'" banner sizes from '),c.before,"to ",c.after),r.mediaTypes=u),e.push(r)):(0,a.logInfo)('Size mapping deactivated adUnit "'.concat(t.code,'" bidder "').concat(r.bidder,'"')),e}),[]),e.push(t)):(0,a.logInfo)('Size mapping disabled adUnit "'.concat(t.code,'"')),e}),[])}(e,n)}),"setupAdUnitMediaTypes");function K(e){(0,a.isArray)(e)||(e=[e]);var n=new Set([null]);return e.filter((function(e){return e&&e.enabled})).flatMap((function(e){return e.bidders})).forEach((function(e){return n.add(e)})),n}var G=(0,y.z3)("sync",(function(e,n){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.getS2SBidders,u=void 0===i?K:i,c=u(n);return(0,a.getBidderCodes)(e).reduce((function(e,n){return e[c.has(n)?U.SERVER:U.CLIENT].push(n),e}),(t={},(0,o.Z)(t,U.CLIENT,[]),(0,o.Z)(t,U.SERVER,[]),t))}),"partitionBidders");function H(e,n){var t=_[e],r=(null==t?void 0:t.getSpec)&&t.getSpec();if(r&&r[n]&&"function"==typeof r[n])return[r,r[n]]}function V(e,n,t,r){try{(0,a.logInfo)("Invoking ".concat(e,".").concat(n));for(var i=arguments.length,o=new Array(i>4?i-4:0),u=4;u<i;u++)o[u-4]=arguments[u];s.vc.runWithBidder(e,r.bind.apply(r,[t].concat(o)))}catch(t){(0,a.logWarn)("Error calling ".concat(n," of ").concat(e))}}function Q(e,n,t){var i=H(e,n);null!=i&&V.apply(void 0,[e,n].concat((0,r.Z)(i),[t]))}function J(e){for(var n=new Set;R.hasOwnProperty(e)&&!n.has(e);)n.add(e),e=R[e];return e}j.makeBidRequests=(0,y.z3)("sync",(function(e,n,t,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},u=arguments.length>6?arguments[6]:void 0;u=(0,I.Bf)(u),A.emit(T.FP.BEFORE_REQUEST_BIDS,e),(0,h.Fb)(e),e=L(e,i);var c=G(e,P),f=c[U.CLIENT],l=c[U.SERVER];s.vc.getConfig("bidderSequence")===s.FD&&(f=(0,a.shuffle)(f));var g=(0,E.nH)(),p=[],v=o.global||{},m=o.bidder||{};function b(e){var n=Object.freeze((0,a.mergeDeep)({},v,m[e.bidderCode]));return e.ortb2=n,e.bids.forEach((function(e){return e.ortb2=n})),e}P.forEach((function(r){if(r&&r.enabled){var i=Z(e,r),o=i.adUnits,c=i.hasModuleBids,s=(0,a.generateUUID)();(0===l.length&&c?[null]:l).forEach((function(e){var i=(0,a.getUniqueIdentifierStr)(),c=u.fork(),d=b({bidderCode:e,auctionId:t,bidderRequestId:i,uniquePbsTid:s,bids:D({bidderCode:e,auctionId:t,bidderRequestId:i,adUnits:(0,a.deepClone)(o),src:T.os.YZ,metrics:c}),auctionStart:n,timeout:r.timeout,src:T.os.YZ,refererInfo:g,metrics:c});0!==d.bids.length&&p.push(d)})),o.forEach((function(e){var n=e.bids.filter((function(e){return(0,d.sE)(p,(function(n){return(0,d.sE)(n.bids,(function(n){return n.bidId===e.bid_id}))}))}));e.bids=n})),p.forEach((function(e){void 0===e.adUnitsS2SCopy&&(e.adUnitsS2SCopy=o.filter((function(e){return e.bids.length>0||null!=e.s2sBid})))}))}}));var y=N(e);return f.forEach((function(e){var o=(0,a.getUniqueIdentifierStr)(),c=u.fork(),s=b({bidderCode:e,auctionId:t,bidderRequestId:o,bids:D({bidderCode:e,auctionId:t,bidderRequestId:o,adUnits:(0,a.deepClone)(y),labels:i,src:"client",metrics:c}),auctionStart:n,timeout:r,refererInfo:g,metrics:c}),d=_[e];d||(0,a.logError)("Trying to make a request for bidder that does not exist: ".concat(e)),d&&s.bids&&0!==s.bids.length&&p.push(s)})),p.forEach((function(e){M.getConsentData()&&(e.gdprConsent=M.getConsentData()),W.getConsentData()&&(e.uspConsent=W.getConsentData()),F.getConsentData()&&(e.gppConsent=F.getConsentData())})),p}),"makeBidRequests"),j.callBids=function(e,n,t,r,o,u,c){var d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};if(n.length){var f=n.reduce((function(e,n){return e[Number(void 0!==n.src&&n.src===T.os.YZ)].push(n),e}),[[],[]]),l=(0,i.Z)(f,2),g=l[0],p=l[1],v=[];p.forEach((function(e){for(var n=-1,t=0;t<v.length;++t)if(e.uniquePbsTid===v[t].uniquePbsTid){n=t;break}n<=-1&&v.push(e)}));var h=0;P.forEach((function(e){if(e&&v[h]&&K(e).has(v[h].bidderCode)){var n=(0,b.O)(u,o?{request:o.request.bind(null,"s2s"),done:o.done}:void 0),i=e.bidders,c=_[e.adapter],s=v[h].uniquePbsTid,f=v[h].adUnitsS2SCopy,l=p.filter((function(e){return e.uniquePbsTid===s}));if(c){var g={ad_units:f,s2sConfig:e,ortb2Fragments:d};if(g.ad_units.length){var m=l.map((function(e){return e.start=(0,a.timestamp)(),r.bind(e)})),y=(0,a.getBidderCodes)(g.ad_units).filter((function(e){return i.includes(e)}));(0,a.logMessage)("CALLING S2S HEADER BIDDERS ==== ".concat(y.length>0?y.join(", "):'No bidder specified, using "ortb2Imp" definition(s) only')),l.forEach((function(e){A.emit(T.FP.BID_REQUESTED,k(k({},e),{},{tid:e.auctionId}))})),c.callBids(g,p,t,(function(){return m.forEach((function(e){return e()}))}),n)}}else(0,a.logError)("missing "+e.adapter);h++}})),g.forEach((function(e){e.start=(0,a.timestamp)();var n=_[e.bidderCode];s.vc.runWithBidder(e.bidderCode,(function(){(0,a.logMessage)("CALLING BIDDER"),A.emit(T.FP.BID_REQUESTED,e)}));var i=(0,b.O)(u,o?{request:o.request.bind(null,e.bidderCode),done:o.done}:void 0),d=r.bind(e);try{s.vc.runWithBidder(e.bidderCode,a.bind.call(n.callBids,n,e,t,d,i,c,s.vc.callbackWithBidder(e.bidderCode)))}catch(n){(0,a.logError)("".concat(e.bidderCode," Bid Adapter emitted an uncaught error when parsing their bidRequest"),{e:n,bidRequest:e}),d()}}))}else(0,a.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")},j.videoAdapters=[],j.registerBidAdapter=function(e,n){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.supportedMediaTypes,o=void 0===i?[]:i;e&&n?"function"==typeof e.callBids?(_[n]=e,C.qh.register(S.UL,n,null===(t=e.getSpec)||void 0===t?void 0:t.call(e).gvlid),(0,d.q9)(o,"video")&&j.videoAdapters.push(n),(0,d.q9)(o,"native")&&h.Sg.push(n)):(0,a.logError)("Bidder adaptor error for bidder code: "+n+"bidder must implement a callBids() function"):(0,a.logError)("bidAdapter or bidderCode not specified")},j.aliasBidAdapter=function(e,n,t){if(void 0===_[n]){var r=_[e];if(void 0===r){var i=[];P.forEach((function(t){if(t.bidders&&t.bidders.length){var r=t&&t.bidders;t&&(0,d.q9)(r,n)?R[n]=e:i.push(e)}})),i.forEach((function(e){(0,a.logError)('bidderCode "'+e+'" is not an existing bidder.',"adapterManager.aliasBidAdapter")}))}else try{var o,u=function(e){var n=[];return(0,d.q9)(j.videoAdapters,e)&&n.push("video"),(0,d.q9)(h.Sg,e)&&n.push("native"),n}(e);if(r.constructor.prototype!=Object.prototype)(o=new r.constructor).setBidderCode(n);else{var c=r.getSpec(),s=t&&t.gvlid,f=t&&t.skipPbsAliasing;o=(0,m.PZ)(Object.assign({},c,{code:n,gvlid:s,skipPbsAliasing:f})),R[n]=e}j.registerBidAdapter(o,n,{supportedMediaTypes:u})}catch(n){(0,a.logError)(e+" bidder does not currently support aliasing.","adapterManager.aliasBidAdapter")}}else(0,a.logMessage)('alias name "'+n+'" has been already specified.')},j.registerAnalyticsAdapter=function(e){var n=e.adapter,t=e.code,r=e.gvlid;n&&t?"function"==typeof n.enableAnalytics?(n.code=t,q[t]={adapter:n,gvlid:r},C.qh.register(S._U,t,r)):(0,a.logError)('Prebid Error: Analytics adaptor error for analytics "'.concat(t,'"\n        analytics adapter must implement an enableAnalytics() function')):(0,a.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified")},j.enableAnalytics=function(e){(0,a.isArray)(e)||(e=[e]),(0,a._each)(e,(function(e){var n=q[e.provider];n&&n.adapter?n.adapter.enableAnalytics(e):(0,a.logError)("Prebid Error: no analytics adapter found in registry for '".concat(e.provider,"'."))}))},j.getBidAdapter=function(e){return _[e]},j.getAnalyticsAdapter=function(e){return q[e]},j.callTimedOutBidders=function(e,n,t){n=n.map((function(n){return n.params=(0,a.getUserConfiguredParams)(e,n.adUnitCode,n.bidder),n.timeout=t,n})),n=(0,a.groupBy)(n,"bidder"),Object.keys(n).forEach((function(e){Q(e,"onTimeout",n[e])}))},j.callBidWonBidder=function(e,n,t){n.params=(0,a.getUserConfiguredParams)(t,n.adUnitCode,n.bidder),w.f.incrementBidderWinsCounter(n.adUnitCode,n.bidder),Q(e,"onBidWon",n)},j.callSetTargetingBidder=function(e,n){Q(e,"onSetTargeting",n)},j.callBidViewableBidder=function(e,n){Q(e,"onBidViewable",n)},j.callBidderError=function(e,n,t){Q(e,"onBidderError",{error:n,bidderRequest:t})},j.callDataDeletionRequest=(0,y.z3)("sync",(function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o="onDataDeletionRequest";Object.keys(_).filter((function(e){return!R.hasOwnProperty(e)})).forEach((function(e){var t=H(e,o);if(null!=t){var i=O.K.getBidsRequested().filter((function(n){return J(n.bidderCode)===e}));V.apply(void 0,[e,o].concat((0,r.Z)(t),[i],n))}})),Object.entries(q).forEach((function(e){var t,r=(0,i.Z)(e,2),u=r[0],c=r[1],s=null==c||null===(t=c.adapter)||void 0===t?void 0:t[o];if("function"==typeof s)try{s.apply(c.adapter,n)}catch(e){(0,a.logError)("error calling ".concat(o," of ").concat(u),e)}}))}));var Y=j},14699:function(e,n,t){t.d(n,{BF:function(){return U},JY:function(){return R},Ks:function(){return k},PZ:function(){return S},Q1:function(){return j},dX:function(){return O}});var r=t(93324),i=t(71002),o=t(48525),a=t(51039),u=t(3193),c=t(69626),s=t(11974),d=t(70059),f=t(90154),l=t(5644),g=t(52021),p=t(34614),v=t(48928),h=t(64358),m=t(20265),b=t(24679),y=t(92797),w=t(15164),E=t(78653),C=t(55975),A=t(99128),T=(0,w.eA)("bidderFactory"),I=["cpm","ttl","creativeId","netRevenue","currency"];function O(e){var n=Array.isArray(e.supportedMediaTypes)?{supportedMediaTypes:e.supportedMediaTypes}:void 0;function t(e){var t=S(e);a.ZP.registerBidAdapter(t,e.code,n)}t(e),Array.isArray(e.aliases)&&e.aliases.forEach((function(n){var r,i,o=n;(0,h.isPlainObject)(n)&&(o=n.code,r=n.gvlid,i=n.skipPbsAliasing),a.ZP.aliasRegistry[o]=e.code,t(Object.assign({},e,{code:o,gvlid:r,skipPbsAliasing:i}))}))}function S(e){return Object.assign(new o.Z(e.code),{getSpec:function(){return Object.freeze(Object.assign({},e))},registerSyncs:n,callBids:function(r,i,o,s,d,f){if(Array.isArray(r.bids)){var p={},v=[],m=P(r).measureTime("validate",(function(){return r.bids.filter(t)}));if(0!==m.length){var b={};m.forEach((function(e){b[e.bidId]=e,e.adUnitCode||(e.adUnitCode=e.placementCode)})),B(e,m,r,s,f,{onRequest:function(e){return g.emit(l.FP.BEFORE_BIDDER_HTTP,r,e)},onResponse:function(n){d(e.code),v.push(n)},onFledgeAuctionConfigs:function(e){e.forEach((function(e){var n=b[e.bidId];n?U(n.adUnitCode,e.config):(0,h.logWarn)("Received fledge auction configuration for an unknown bidId",e)}))},onError:function(n,t){d(e.code),a.ZP.callBidderError(e.code,t,r),g.emit(l.FP.BIDDER_ERROR,{error:t,bidderRequest:r}),(0,h.logError)("Server call for ".concat(e.code," failed: ").concat(n," ").concat(t.status,". Continuing without bids."))},onBid:function(n){var t=b[n.requestId];if(t){if(n.adapterCode=t.bidder,function(e,n){var t=C.S.get(n,"allowAlternateBidderCodes")||!1,r=C.S.get(n,"allowedAlternateBidderCodes");if(e&&n&&n!==e&&(r=(0,h.isArray)(r)?r.map((function(e){return e.trim().toLowerCase()})).filter((function(e){return!!e})).filter(h.uniques):r,!t||(0,h.isArray)(r)&&"*"!==r[0]&&!r.includes(e)))return!0;return!1}(n.bidderCode,t.bidder))return(0,h.logWarn)("".concat(n.bidderCode," is not a registered partner or known bidder of ").concat(t.bidder,", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings.")),void i.reject(t.adUnitCode,n,l.Gw.Dg);n.originalCpm=n.cpm,n.originalCurrency=n.currency,n.meta=n.meta||Object.assign({},n[t.bidder]);var r=Object.assign((0,c.m)(l.Q_.GOOD,t),n);!function(e,n){var t=(0,A.Bf)(n.metrics);t.checkpoint("addBidResponse"),p[e]=!0,t.measureTime("addBidResponse.validate",(function(){return R(e,n)}))?i(e,n):i.reject(e,n,l.Gw.UI)}(t.adUnitCode,r)}else(0,h.logWarn)("Bidder ".concat(e.code," made bid for unknown request ID: ").concat(n.requestId,". Ignoring.")),i.reject(null,n,l.Gw.Gp)},onCompletion:y})}else y()}function y(){o(),u.vc.runWithBidder(e.code,(function(){g.emit(l.FP.BIDDER_DONE,r),n(v,r.gdprConsent,r.uspConsent,r.gppConsent)}))}}});function n(n,t,r,i){k(e,n,t,r,i)}function t(n){return!!e.isBidRequestValid(n)||((0,h.logWarn)("Invalid bid sent to bidder ".concat(e.code,": ").concat(JSON.stringify(n))),!1)}}var B=(0,y.z3)("sync",(function(e,n,t,r,o,a){var u=a.onRequest,c=a.onResponse,s=a.onFledgeAuctionConfigs,d=a.onError,f=a.onBid,l=a.onCompletion,g=P(t);l=g.startTiming("total").stopBefore(l);var p=g.measureTime("buildRequests",(function(){return e.buildRequests(n,t)}));if(p&&0!==p.length){Array.isArray(p)||(p=[p]);var v=(0,h.delayExecution)(l,p.length);p.forEach((function(n){var t=g.fork();function a(e){null!=e&&(e.metrics=t.fork().renameWith()),f(e)}var l=o((function(r,i){m();try{r=JSON.parse(r)}catch(e){}r={body:r,headers:{get:i.getResponseHeader.bind(i)}},c(r);try{r=t.measureTime("interpretResponse",(function(){return e.interpretResponse(r,n)}))}catch(n){return(0,h.logError)("Bidder ".concat(e.code," failed to interpret the server's response. Continuing without bids"),null,n),void v()}var o;r&&(0,h.isArray)(r.fledgeAuctionConfigs)?(s(r.fledgeAuctionConfigs),o=r.bids):o=r,o&&((0,h.isArray)(o)?o.forEach(a):a(o)),v()})),p=o((function(e,n){m(),d(e,n),v()}));u(n);var m=t.startTiming("net");switch(n.method){case"GET":r("".concat(n.url).concat(function(e){if(e)return"?".concat("object"===(0,i.Z)(e)?(0,h.parseQueryStringParameters)(e):e);return""}(n.data)),{success:l,error:p},void 0,Object.assign({method:"GET",withCredentials:!0},n.options));break;case"POST":r(n.url,{success:l,error:p},"string"==typeof n.data?n.data:JSON.stringify(n.data),Object.assign({method:"POST",contentType:"text/plain",withCredentials:!0},n.options));break;default:(0,h.logWarn)("Skipping invalid request from ".concat(e.code,". Request type ").concat(n.type," must be GET or POST")),v()}}))}else l()}),"processBidderRequests"),k=(0,y.z3)("async",(function(e,n,t,r,i){var o=u.vc.getConfig("userSync.aliasSyncEnabled");if(e.getUserSyncs&&(o||!a.ZP.aliasRegistry[e.code])){var c=u.vc.getConfig("userSync.filterSettings"),d=e.getUserSyncs({iframeEnabled:!(!c||!c.iframe&&!c.all),pixelEnabled:!(!c||!c.image&&!c.all)},n,t,r,i);d&&(Array.isArray(d)||(d=[d]),d.forEach((function(n){s.k_.registerSync(n.type,e.code,n.url)})),s.k_.bidderDone(e.code))}}),"registerSyncs"),U=(0,y.z3)("sync",(function(e,n){}),"addComponentAuction");function j(e,n){var t=a.ZP.getBidAdapter(e);if(t.getSpec().getMappingFileInfo){var r=t.getSpec().getMappingFileInfo(),i=r.localStorageKey?r.localStorageKey:t.getBidderCode(),o=T.getDataFromLocalStorage(i);if(o){try{o=JSON.parse(o)}catch(n){(0,h.logError)("Failed to parse ".concat(e," mapping data stored in local storage"))}return o.mapping[n]?o.mapping[n]:null}}}function _(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.index,o=void 0===i?E.K.index:i;if((n.width||0===parseInt(n.width,10))&&(n.height||0===parseInt(n.height,10)))return n.width=parseInt(n.width,10),n.height=parseInt(n.height,10),!0;var a=o.getBidRequest(n),u=o.getMediaTypes(n),c=a&&a.sizes||u&&u.banner&&u.banner.sizes,s=(0,h.parseSizesInput)(c);if(1===s.length){var d=s[0].split("x"),f=(0,r.Z)(d,2),l=f[0],g=f[1];return n.width=parseInt(l,10),n.height=parseInt(g,10),!0}return!1}function R(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.index,i=void 0===r?E.K.index:r;function o(){var e=Object.keys(n);return I.every((function(t){return(0,p.q9)(e,t)&&!(0,p.q9)([void 0,null],n[t])}))}function a(e){return"Invalid bid from ".concat(n.bidderCode,". Ignoring bid: ").concat(e)}return e?n?o()?"native"!==n.mediaType||(0,d.r4)(n,{index:i})?"video"!==n.mediaType||(0,f.Dn)(n,{index:i})?!("banner"===n.mediaType&&!_(e,n,{index:i}))||((0,h.logError)(a("Banner bids require a width and height")),!1):((0,h.logError)(a("Video bid does not have required vastUrl or renderer property")),!1):((0,h.logError)(a("Native bid missing some required properties.")),!1):((0,h.logError)(a("Bidder ".concat(n.bidderCode," is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))),!1):((0,h.logWarn)("Some adapter tried to add an undefined bid for ".concat(e,".")),!1):((0,h.logWarn)("No adUnitCode was supplied to addBidResponse."),!1)}function P(e){return(0,A.Bf)(e.metrics).renameWith((function(n){return["adapter.client.".concat(n),"adapters.client.".concat(e.bidderCode,".").concat(n)]}))}(0,y.v5)("checkAdUnitSetup").before((function(e,n){if(!u.vc.getConfig("adpod.brandCategoryExclusion"))return e.call(this,n);n.filter((function(e){return(0,m.Z)(e,"mediaTypes.video.context")===b.Oh})).map((function(e){return e.bids.map((function(e){return e.bidder}))})).reduce(h.flatten,[]).filter(h.uniques).forEach((function(e){var n=a.ZP.getBidAdapter(e);if(n.getSpec().getMappingFileInfo){var t=n.getSpec().getMappingFileInfo(),r=t.refreshInDays?t.refreshInDays:1,i=t.localStorageKey?t.localStorageKey:n.getSpec().code,o=T.getDataFromLocalStorage(i);try{(!(o=o?JSON.parse(o):void 0)||(0,h.timestamp)()>o.lastUpdated+24*r*60*60*1e3)&&(0,v.h)(t.url,{success:function(n){try{n=JSON.parse(n);var t={lastUpdated:(0,h.timestamp)(),mapping:n.mapping};T.setDataInLocalStorage(i,JSON.stringify(t))}catch(n){(0,h.logError)("Failed to parse ".concat(e," bidder translation mapping file"))}},error:function(){(0,h.logError)("Failed to load ".concat(e," bidder translation file"))}})}catch(n){(0,h.logError)("Failed to parse ".concat(e," bidder translation mapping file"))}}})),e.call(this,n)}))},55730:function(e,n,t){t.d(n,{B:function(){return u}});var r=t(34614),i=t(64358),o=new WeakMap,a=["debugging","adloox","criteo","outstream","adagio","spotx","browsi","brandmetrics","justtag","tncId","akamaidap","ftrackId","inskin","hadron","medianet","improvedigital","aaxBlockmeter","confiant","arcspan"];function u(e,n,t,u,c){if(n&&e){if((0,r.q9)(a,n)){u||(u=document);var s=l(u,e);if(s)return t&&"function"==typeof t&&(s.loaded?t():s.callbacks.push(t)),s.tag;var d=o.get(u)||{},f={loaded:!1,tag:null,callbacks:[]};return d[e]=f,o.set(u,d),t&&"function"==typeof t&&f.callbacks.push(t),(0,i.logWarn)("module ".concat(n," is loading external JavaScript")),function(n,t,r,o){r||(r=document);var a=r.createElement("script");a.type="text/javascript",a.async=!0;var u=l(r,e);u&&(u.tag=a);a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,t())}:a.onload=function(){t()};a.src=n,o&&(0,i.setScriptAttributes)(a,o);return(0,i.insertElement)(a,r),a}(e,(function(){f.loaded=!0;try{for(var e=0;e<f.callbacks.length;e++)f.callbacks[e]()}catch(e){(0,i.logError)("Error executing callback","adloader.js:loadExternalScript",e)}}),u,c)}(0,i.logError)("".concat(n," not whitelisted for loading external JavaScript"))}else(0,i.logError)("cannot load external script without url and moduleCode");function l(e,n){var t=o.get(e);return t&&t[n]?t[n]:null}}},48928:function(e,n,t){t.d(n,{O:function(){return u},h:function(){return a}});var r=t(71002),i=t(3193),o=t(64358),a=u();function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.request,a=n.done;return function(n,u,c){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{var d,f=s.method||(c?"POST":"GET"),l=document.createElement("a");l.href=n;var g="object"===(0,r.Z)(u)&&null!==u?u:{success:function(){(0,o.logMessage)("xhr success")},error:function(e){(0,o.logError)("xhr error",null,e)}};if("function"==typeof u&&(g.success=u),(d=new window.XMLHttpRequest).onreadystatechange=function(){if(4===d.readyState){"function"==typeof a&&a(l.origin);var e=d.status;e>=200&&e<300||304===e?g.success(d.responseText,d):g.error(d.statusText,d)}},i.vc.getConfig("disableAjaxTimeout")||(d.ontimeout=function(){(0,o.logError)("  xhr timeout after ",d.timeout,"ms")}),"GET"===f&&c){var p=(0,o.parseUrl)(n,s);Object.assign(p.search,c),n=(0,o.buildUrl)(p)}d.open(f,n,!0),i.vc.getConfig("disableAjaxTimeout")||(d.timeout=e),s.withCredentials&&(d.withCredentials=!0),(0,o._each)(s.customHeaders,(function(e,n){d.setRequestHeader(n,e)})),s.preflight&&d.setRequestHeader("X-Requested-With","XMLHttpRequest"),d.setRequestHeader("Content-Type",s.contentType||"text/plain"),"function"==typeof t&&t(l.origin),"POST"===f&&c?d.send(c):d.send()}catch(e){(0,o.logError)("xhr construction",e),"object"===(0,r.Z)(u)&&null!==u&&u.error(e)}}}},25686:function(e,n,t){t.d(n,{LX:function(){return $},RH:function(){return J},Yt:function(){return q},Yw:function(){return B},dg:function(){return Y},e0:function(){return D},lU:function(){return N},mv:function(){return k},sq:function(){return Z},vO:function(){return P}});var r=t(93324),i=t(71002),o=t(64358),a=t(20265),u=t(56463),c=t(70059),s=t(79885),d=t(35706),f=t(3193),l=t(11974),g=t(92797),p=t(34614),v=t(90154),h=t(24679),m=t(78653),b=t(55975),y=t(52021),w=t(51039),E=t(5644),C=t(68792),A=t(99128),T=t(69626),I=t(36066),O=t(78640),S=l.k_.syncUsers,B="inProgress",k="completed";y.on(E.FP.BID_ADJUSTMENT,(function(e){!function(e){var n=(0,I.O)(e.cpm,e);n>=0&&(e.cpm=n)}(e)}));var U={},j={},_=[],R=(0,O.R)();function P(e){var n=e.adUnits,t=e.adUnitCodes,a=e.callback,u=e.cbTimeout,c=e.labels,s=e.auctionId,d=e.ortb2Fragments,l=e.metrics;l=(0,A.Bf)(l);var g,v,b,I,O=n,P=c,Z=t,W=s||(0,o.generateUUID)(),F=u,L=new Set,K=[],G=a,Q=[],J=[],Y=[],X=[],$=[];function ee(){return{auctionId:W,timestamp:g,auctionEnd:v,auctionStatus:I,adUnits:O,adUnitCodes:Z,labels:P,bidderRequests:Q,noBids:Y,bidsReceived:J,bidsRejected:K,winningBids:X,timeout:F,metrics:l,seatNonBids:$}}function te(e,t){if(t&&clearTimeout(b),void 0===v){var r=[];e&&((0,o.logMessage)("Auction ".concat(W," timedOut")),i=L,(r=Q.map((function(e){return(e.bids||[]).filter((function(e){return!i.has(e.bidder)}))})).reduce(o.flatten,[])).length&&y.emit(E.FP.BID_TIMEOUT,r)),I=k,v=Date.now(),l.checkpoint("auctionEnd"),l.timeBetween("requestBids","auctionEnd","requestBids.total"),l.timeBetween("callBids","auctionEnd","requestBids.callBids"),y.emit(E.FP.AUCTION_END,ee()),x(O,(function(){try{if(null!=G){var t=Z,i=J.filter(o.bind.call(o.adUnitsFilter,this,t)).reduce(ne,{});G.apply(R,[i,e,W]),G=null}}catch(e){(0,o.logError)("Error executing bidsBackHandler",null,e)}finally{r.length&&w.ZP.callTimedOutBidders(n,r,F);var a=f.vc.getConfig("userSync")||{};a.enableOverride||S(a.syncDelay)}}))}var i}function re(){f.vc.resetBidder(),(0,o.logInfo)("Bids Received for Auction with id: ".concat(W),J),I=k,te(!1,!0)}function ie(e){L.add(e)}function oe(e){var n=this;e.forEach((function(e){var n;n=e,Q=Q.concat(n)}));var t={},a={bidRequests:e,run:function(){var a,s;a=te.bind(null,!0),s=setTimeout(a,F),b=s,I=B,y.emit(E.FP.AUCTION_INIT,ee());var l=function(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).index,a=void 0===t?m.K.index:t,u=0,c=!1,s=new Set,d={},l={};function g(e,n){null==l[e]&&(l[e]=C.Z.resolve()),l[e]=l[e].then((function(){return C.Z.resolve(n).catch((function(){}))}))}function v(e,t){var r=e.timeout;(null==r||r>n.getTimeout())&&(r=n.getTimeout());var i=n.getAuctionStart()+r-Date.now(),o=l[e.bidderRequestId],a=l[""];(null!=o||null!=a)&&i>0?C.Z.race([C.Z.timeout(i),C.Z.resolve(a).then((function(){return o}))]).then(t):t()}function b(){u--,c&&0===u&&e()}function w(e,n,t){return d[n.requestId]=!0,H(n,e),u++,t(b)}function A(e,t){w(e,t,(function(e){var r=V(t);r.mediaType===h.pX?M(n,r,e):(null!=r.native&&"object"===(0,i.Z)(r.native)&&z(r),N(n,r),e())}))}function I(e,t,i){return w(e,t,(function(e){var a,u=(0,T.m)(E.Q_.NO_BID,null===(a=t.getIdentifiers)||void 0===a?void 0:a.call(t));return Object.assign(u,Object.fromEntries(Object.entries(t).filter((function(e){var n=(0,r.Z)(e,1)[0];return!u.hasOwnProperty(n)&&!["ad","adUrl","vastXml","vastUrl","native"].includes(n)})))),u.status=E.UE.G9,u.cpm=0,t.rejectionReason=i,(0,o.logWarn)("Bid from ".concat(t.bidder||"unknown bidder"," was rejected: ").concat(i),t),y.emit(E.FP.BID_REJECTED,t),n.addBidRejected(t),e(),u}))}function O(){var t=this,r=n.getBidRequests(),i=f.vc.getConfig("auctionOptions");if(s.add(t),i&&!(0,o.isEmpty)(i)){var a=i.secondaryBidders;a&&!r.every((function(e){return(0,p.q9)(a,e.bidderCode)}))&&(r=r.filter((function(e){return!(0,p.q9)(a,e.bidderCode)})))}c=r.every((function(e){return s.has(e)})),t.bids.forEach((function(e){d[e.bidId]||(n.addNoBid(e),y.emit(E.FP.NO_BID,e))})),c&&0===u&&e()}return{addBidResponse:function(){function e(e,n){var t,r=a.getBidderRequest(n);g(r&&r.bidderRequestId||"",q.call({dispatch:A},e,n,(function(r){return null==t&&(t=I(e,n,r)),t})))}return e.reject=I,e}(),adapterDone:function(){v(this,O.bind(this))}}}(re,n);w.ZP.callBids(O,e,l.addBidResponse,l.adapterDone,{request:function(e,n){c(U,n),c(t,e),j[e]||(j[e]={SRA:!0,origin:n}),t[e]>1&&(j[e].SRA=!1)},done:function(e){U[e]--,_[0]&&u(_[0])&&_.shift()}},F,ie,d)}};function u(e){var n=!0,t=f.vc.getConfig("maxRequestsPerOrigin")||4;return e.bidRequests.some((function(e){var r=1,i=void 0!==e.src&&e.src===E.os.YZ?"s2s":e.bidderCode;return j[i]&&(!1===j[i].SRA&&(r=Math.min(e.bids.length,t)),U[j[i].origin]+r>t&&(n=!1)),!n})),n&&e.run(),n}function c(e,n){void 0===e[n]?e[n]=1:e[n]++}u(a)||((0,o.logWarn)("queueing auction due to limited endpoint capacity"),_.push(a))}return y.on(E.FP.SEAT_NON_BID,(function(e){var n;e.auctionId===W&&(n=e.seatnonbid,$=$.concat(n))})),{addBidReceived:function(e){J=J.concat(e)},addBidRejected:function(e){K=K.concat(e)},addNoBid:function(e){Y=Y.concat(e)},executeCallback:te,callBids:function(){I="started",g=Date.now();var e=l.measureTime("requestBids.makeRequests",(function(){return w.ZP.makeBidRequests(O,g,W,F,P,d,l)}));(0,o.logInfo)("Bids Requested for Auction with id: ".concat(W),e),l.checkpoint("callBids"),e.length<1?((0,o.logWarn)("No valid bid requests returned for auction"),re()):D.call({dispatch:oe,context:this},e)},addWinningBid:function(e){X=X.concat(e),w.ZP.callBidWonBidder(e.adapterCode||e.bidder,e,n)},setBidTargeting:function(e){w.ZP.callSetTargetingBidder(e.adapterCode||e.bidder,e)},getWinningBids:function(){return X},getAuctionStart:function(){return g},getTimeout:function(){return F},getAuctionId:function(){return W},getAuctionStatus:function(){return I},getAdUnits:function(){return O},getAdUnitCodes:function(){return Z},getBidRequests:function(){return Q},getBidsReceived:function(){return J},getNoBids:function(){return Y},getNonBids:function(){return $},getFPD:function(){return d},getMetrics:function(){return l}}}var q=(0,g.z3)("sync",(function(e,n,t){this.dispatch.call(null,e,n)}),"addBidResponse"),D=(0,g.z3)("sync",(function(e){this.dispatch.call(this.context,e)}),"addBidderRequests"),x=(0,g.z3)("async",(function(e,n){n&&n()}),"bidsBackCallback");function Z(e,n){n.timeToRespond>e.getTimeout()+f.vc.getConfig("timeoutBuffer")&&e.executeCallback(!0)}function N(e,n){!function(e){var n,t=!0===b.S.get(e.bidderCode,"allowZeroCpmBids")?e.cpm>=0:e.cpm>0;e.bidderCode&&(t||e.dealId)&&(n=function(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).index,r=void 0===t?m.K.index:t;if(!n)return{};var i=r.getBidRequest(n),o={},a=$(n.mediaType,e);ee(o,a,n,i),e&&b.S.getOwn(e,E.k2.xn)&&(ee(o,b.S.ownSettingsFor(e),n,i),n.sendStandardTargeting=b.S.get(e,"sendStandardTargeting"));n.native&&(o=Object.assign({},o,(0,c.Ur)(n)));return o}(e.bidderCode,e));e.adserverTargeting=Object.assign(e.adserverTargeting||{},n)}(n),(0,A.Bf)(n.metrics).timeSince("addBidResponse","addBidResponse.total"),y.emit(E.FP.BID_RESPONSE,n),e.addBidReceived(n),Z(e,n)}function M(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.index,u=void 0===i?m.K.index:i,c=!0,s=(0,a.Z)(u.getMediaTypes({requestId:n.originalRequestId||n.requestId,transactionId:n.transactionId}),"video"),d=s&&(0,a.Z)(s,"context"),l=s&&(0,a.Z)(s,"useCacheKey");f.vc.getConfig("cache.url")&&(l||d!==v.gZ)&&(!n.videoCacheKey||f.vc.getConfig("cache.ignoreBidderCacheKey")?(c=!1,G(e,n,t,s)):n.vastUrl||((0,o.logError)("videoCacheKey specified but not required vastUrl for video bid"),c=!1)),c&&(N(e,n),t())}var W,F,z=function(e){var n,t,r=null===(n=m.K.index.getAdUnit(e))||void 0===n?void 0:n.nativeOrtbRequest,i=null===(t=e.native)||void 0===t?void 0:t.ortb;if(r&&i){var o=(0,c.zq)(i,r);Object.assign(e.native,o)}},L=function(e){(0,s.h)(e.map((function(e){return e.bidResponse})),(function(n,t){t.forEach((function(t,r){var i=e[r],a=i.auctionInstance,u=i.bidResponse,c=i.afterBidAdded;n?((0,o.logWarn)("Failed to save to the video cache: ".concat(n,". Video bid must be discarded.")),Z(a,u)):""===t.uuid?((0,o.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."),Z(a,u)):(u.videoCacheKey=t.uuid,u.vastUrl||(u.vastUrl=(0,s.z)(u.videoCacheKey)),N(a,u),c())}))}))};f.vc.getConfig("cache",(function(e){W="number"==typeof e.cache.batchSize&&e.cache.batchSize>0?e.cache.batchSize:1,F="number"==typeof e.cache.batchTimeout&&e.cache.batchTimeout>0?e.cache.batchTimeout:0}));var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:setTimeout,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L,t=[[]],r=!1,i=function(e){return e()};return function(o,a,u){var c=F>0?e:i;t[t.length-1].length>=W&&t.push([]),t[t.length-1].push({auctionInstance:o,bidResponse:a,afterBidAdded:u}),r||(r=!0,c((function(){t.forEach(n),t=[[]],r=!1}),F))}}(),G=(0,g.z3)("async",(function(e,n,t,r){K(e,n,t)}),"callPrebidCache");function H(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.index,i=void 0===r?m.K.index:r,a=i.getBidderRequest(e),u=i.getAdUnit(e),c=a&&a.start||e.requestTimestamp;Object.assign(e,{responseTimestamp:e.responseTimestamp||(0,o.timestamp)(),requestTimestamp:e.requestTimestamp||c,cpm:parseFloat(e.cpm)||0,bidder:e.bidder||e.bidderCode,adUnitCode:n}),null!=(null==u?void 0:u.ttlBuffer)&&(e.ttlBuffer=u.ttlBuffer),e.timeToRespond=e.responseTimestamp-e.requestTimestamp}function V(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.index,o=void 0===r?m.K.index:r;y.emit(E.FP.BID_ADJUSTMENT,e);var a=(null===(n=o.getBidRequest(e))||void 0===n?void 0:n.renderer)||o.getAdUnit(e).renderer,c=e.mediaType,s=o.getMediaTypes(e),l=s&&s[c],g=l&&l.renderer,p=null;g&&g.url&&g.render&&(!0!==g.backupOnly||!e.renderer)?p=g:a&&a.url&&a.render&&(!0!==a.backupOnly||!e.renderer)&&(p=a),p&&(e.renderer=d.Th.install({url:p.url,config:p.options}),e.renderer.setRender(p.render));var v=Q(e.mediaType,s,f.vc.getConfig("mediaTypePriceGranularity")),h=(0,u.D)(e.cpm,"object"===(0,i.Z)(v)?v:f.vc.getConfig("customPriceBucket"),f.vc.getConfig("currency.granularityMultiplier"));return e.pbLg=h.low,e.pbMg=h.med,e.pbHg=h.high,e.pbAg=h.auto,e.pbDg=h.dense,e.pbCg=h.custom,e}function Q(e,n,t){if(e&&t){if(e===h.pX){var r=(0,a.Z)(n,"".concat(h.pX,".context"),"instream");if(t["".concat(h.pX,"-").concat(r)])return t["".concat(h.pX,"-").concat(r)]}return t[e]}}var J=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.index,r=void 0===t?m.K.index:t,i=Q(e.mediaType,r.getMediaTypes(e),f.vc.getConfig("mediaTypePriceGranularity")),o="string"==typeof e.mediaType&&i?"string"==typeof i?i:"custom":f.vc.getConfig("priceGranularity");return o},Y=function(e){return function(n){var t=e||J(n);return t===E.Ql.B7?n.pbAg:t===E.Ql.uN?n.pbDg:t===E.Ql.yE?n.pbLg:t===E.Ql.M2?n.pbMg:t===E.Ql.lj?n.pbHg:t===E.Ql.qN?n.pbCg:void 0}};function X(e,n){return{key:e,val:"function"==typeof n?function(e,t){return n(e,t)}:function(e){return(0,o.getValue)(e,n)}}}function $(e,n){var t=E.TD,r=Object.assign({},b.S.settingsFor(null));if(r[E.k2.xn]||(r[E.k2.xn]=function(){var e=E.TD;return[X(e.BIDDER,"bidderCode"),X(e.AD_ID,"adId"),X(e.PRICE_BUCKET,Y()),X(e.SIZE,"size"),X(e.DEAL,"dealId"),X(e.SOURCE,"source"),X(e.FORMAT,"mediaType"),X(e.ADOMAIN,(function(e){return e.meta&&e.meta.advertiserDomains&&e.meta.advertiserDomains.length>0?[e.meta.advertiserDomains].flat()[0]:""})),X(e.ACAT,(function(e){return e.meta&&e.meta.primaryCatId?e.meta.primaryCatId:""}))]}()),"video"===e){var i=r[E.k2.xn].slice();if(r[E.k2.xn]=i,[t.UUID,t.CACHE_ID].forEach((function(e){void 0===(0,p.sE)(i,(function(n){return n.key===e}))&&i.push(X(e,"videoCacheKey"))})),f.vc.getConfig("cache.url")&&(!n||!1!==b.S.get(n,"sendStandardTargeting"))){var u=(0,o.parseUrl)(f.vc.getConfig("cache.url"));void 0===(0,p.sE)(i,(function(e){return e.key===t.CACHE_HOST}))&&i.push(X(t.CACHE_HOST,(function(e){return(0,a.Z)(e,"adserverTargeting.".concat(t.CACHE_HOST))?e.adserverTargeting[t.CACHE_HOST]:u.hostname})))}}return r}function ee(e,n,t,r){var i=n[E.k2.xn];return t.size=t.getSize(),(0,o._each)(i,(function(i){var a=i.key,u=i.val;if(e[a]&&(0,o.logWarn)("The key: "+a+" is being overwritten"),(0,o.isFn)(u))try{u=u(t,r)}catch(e){(0,o.logError)("bidmanager","ERROR",e)}(void 0===n.suppressEmptyKeys||!0!==n.suppressEmptyKeys)&&a!==E.TD.DEAL&&a!==E.TD.ACAT||!(0,o.isEmptyStr)(u)&&null!=u?e[a]=u:(0,o.logInfo)("suppressing empty key '"+a+"' from adserver targeting")})),e}function ne(e,n){return e[n.adUnitCode]||(e[n.adUnitCode]={bids:[]}),e[n.adUnitCode].bids.push(n),e}},78653:function(e,n,t){t.d(n,{K:function(){return s}});var r=t(64358),i=t(25686),o=t(34614);function a(e){Object.assign(this,{getAuction:function(n){var t=n.auctionId;if(null!=t)return e().find((function(e){return e.getAuctionId()===t}))},getAdUnit:function(n){var t=n.transactionId;if(null!=t)return e().flatMap((function(e){return e.getAdUnits()})).find((function(e){return e.transactionId===t}))},getMediaTypes:function(e){var n=e.transactionId,t=e.requestId;if(null!=t){var r=this.getBidRequest({requestId:t});if(null!=r&&(null==n||r.transactionId===n))return r.mediaTypes}else if(null!=n){var i=this.getAdUnit({transactionId:n});if(null!=i)return i.mediaTypes}},getBidderRequest:function(n){var t=n.requestId,r=n.bidderRequestId;if(null!=t||null!=r){var i=e().flatMap((function(e){return e.getBidRequests()}));return null!=r&&(i=i.filter((function(e){return e.bidderRequestId===r}))),null==t?i[0]:i.find((function(e){return e.bids&&null!=e.bids.find((function(e){return e.bidId===t}))}))}},getBidRequest:function(n){var t=n.requestId;if(null!=t)return e().flatMap((function(e){return e.getBidRequests()})).flatMap((function(e){return e.bids})).find((function(e){return e&&e.bidId===t}))}})}var u=t(5644),c=t(99128);var s=function(){var e=[],n={};return n.addWinningBid=function(n){var t=(0,c.Bf)(n.metrics);t.checkpoint("bidWon"),t.timeBetween("auctionEnd","bidWon","render.pending"),t.timeBetween("requestBids","bidWon","render.e2e");var i=(0,o.sE)(e,(function(e){return e.getAuctionId()===n.auctionId}));i?(n.status=u.UE.fe,i.addWinningBid(n)):(0,r.logWarn)("Auction not found when adding winning bid")},n.getAllWinningBids=function(){return e.map((function(e){return e.getWinningBids()})).reduce(r.flatten,[])},n.getBidsRequested=function(){return e.map((function(e){return e.getBidRequests()})).reduce(r.flatten,[])},n.getNoBids=function(){return e.map((function(e){return e.getNoBids()})).reduce(r.flatten,[])},n.getBidsReceived=function(){return e.map((function(e){if(e.getAuctionStatus()===i.mv)return e.getBidsReceived()})).reduce(r.flatten,[]).filter((function(e){return e}))},n.getAllBidsForAdUnitCode=function(n){return e.map((function(e){return e.getBidsReceived()})).reduce(r.flatten,[]).filter((function(e){return e&&e.adUnitCode===n}))},n.getAdUnits=function(){return e.map((function(e){return e.getAdUnits()})).reduce(r.flatten,[])},n.getAdUnitCodes=function(){return e.map((function(e){return e.getAdUnitCodes()})).reduce(r.flatten,[]).filter(r.uniques)},n.createAuction=function(n){var t=(0,i.vO)(n);return function(n){e.push(n)}(t),t},n.findBidByAdId=function(n){return(0,o.sE)(e.map((function(e){return e.getBidsReceived()})).reduce(r.flatten,[]),(function(e){return e.adId===n}))},n.getStandardBidderAdServerTargeting=function(){return(0,i.LX)()[u.k2.xn]},n.setStatusForBids=function(t,r){var i=n.findBidByAdId(t);if(i&&(i.status=r),i&&r===u.UE.CK){var a=(0,o.sE)(e,(function(e){return e.getAuctionId()===i.auctionId}));a&&a.setBidTargeting(i)}},n.getLastAuctionId=function(){return e.length&&e[e.length-1].getAuctionId()},n.clearAllAuctions=function(){e.length=0},n.index=new a((function(){return e})),n}()},55975:function(e,n,t){t.d(n,{S:function(){return g}});var r=t(15671),i=t(43144),o=t(20265),a=t(64358),u=t(78640),c=t(5644);function s(e,n){!function(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,n),n.add(e)}function d(e,n,t){if(!n.has(e))throw new TypeError("attempted to get private field on non-instance");return t}var f=new WeakSet;function l(e){return null==e?this.defaultScope:e}var g=new(function(){function e(n,t){(0,r.Z)(this,e),s(this,f),this.getSettings=n,this.defaultScope=t}return(0,i.Z)(e,[{key:"get",value:function(e,n){var t=this.getOwn(e,n);return void 0===t&&(t=this.getOwn(null,n)),t}},{key:"getOwn",value:function(e,n){return e=d(this,f,l).call(this,e),(0,o.Z)(this.getSettings(),"".concat(e,".").concat(n))}},{key:"getScopes",value:function(){var e=this;return Object.keys(this.getSettings()).filter((function(n){return n!==e.defaultScope}))}},{key:"settingsFor",value:function(e){return(0,a.mergeDeep)({},this.ownSettingsFor(null),this.ownSettingsFor(e))}},{key:"ownSettingsFor",value:function(e){return e=d(this,f,l).call(this,e),this.getSettings()[e]||{}}}]),e}())((function(){return(0,u.R)().bidderSettings||{}}),c.k2.zF)},69626:function(e,n,t){t.d(n,{m:function(){return o}});var r=t(64358);function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.src,i=void 0===t?"client":t,o=n.bidder,a=void 0===o?"":o,u=n.bidId,c=n.transactionId,s=n.auctionId,d=i,f=e||0;function l(){switch(f){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}}this.bidderCode=a,this.width=0,this.height=0,this.statusMessage=l(),this.adId=(0,r.getUniqueIdentifierStr)(),this.requestId=u,this.transactionId=c,this.auctionId=s,this.mediaType="banner",this.source=d,this.getStatusCode=function(){return f},this.getSize=function(){return this.width+"x"+this.height},this.getIdentifiers=function(){return{src:this.source,bidder:this.bidderCode,bidId:this.requestId,transactionId:this.transactionId,auctionId:this.auctionId}}}function o(e,n){return new i(e,n)}},3193:function(e,n,t){t.d(n,{FD:function(){return g},vc:function(){return b}});var r=t(4942),i=t(71002),o=t(93324),a=t(56463),u=t(34614),c=t(64358),s=t(20265),d=t(5644);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var l="TRUE"===(0,c.getParameterByName)(d.f).toUpperCase(),g="random",p={};p[g]=!0,p.fixed=!0;var v=g,h={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},m="*";var b=function(){var e,n,t,d=[],g=null;function b(){e={};var r={_debug:l,get debug(){return this._debug},set debug(e){this._debug=e},_bidderTimeout:3e3,get bidderTimeout(){return this._bidderTimeout},set bidderTimeout(e){this._bidderTimeout=e},_publisherDomain:null,get publisherDomain(){return this._publisherDomain},set publisherDomain(e){(0,c.logWarn)("publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"),this._publisherDomain=e},_priceGranularity:h.MEDIUM,set priceGranularity(e){o(e)&&("string"==typeof e?this._priceGranularity=i(e)?e:h.MEDIUM:(0,c.isPlainObject)(e)&&(this._customPriceBucket=e,this._priceGranularity=h.CUSTOM,(0,c.logMessage)("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_mediaTypePriceGranularity:{},get mediaTypePriceGranularity(){return this._mediaTypePriceGranularity},set mediaTypePriceGranularity(e){var n=this;this._mediaTypePriceGranularity=Object.keys(e).reduce((function(t,r){return o(e[r])?"string"==typeof e?t[r]=i(e[r])?e[r]:n._priceGranularity:(0,c.isPlainObject)(e)&&(t[r]=e[r],(0,c.logMessage)("Using custom price granularity for ".concat(r))):(0,c.logWarn)("Invalid price granularity for media type: ".concat(r)),t}),{})},_sendAllBids:true,get enableSendAllBids(){return this._sendAllBids},set enableSendAllBids(e){this._sendAllBids=e},_useBidCache:false,get useBidCache(){return this._useBidCache},set useBidCache(e){this._useBidCache=e},_deviceAccess:true,get deviceAccess(){return this._deviceAccess},set deviceAccess(e){this._deviceAccess=e},_bidderSequence:v,get bidderSequence(){return this._bidderSequence},set bidderSequence(e){p[e]?this._bidderSequence=e:(0,c.logWarn)("Invalid order: ".concat(e,". Bidder Sequence was not set."))},_timeoutBuffer:400,get timeoutBuffer(){return this._timeoutBuffer},set timeoutBuffer(e){this._timeoutBuffer=e},_disableAjaxTimeout:false,get disableAjaxTimeout(){return this._disableAjaxTimeout},set disableAjaxTimeout(e){this._disableAjaxTimeout=e},_maxNestedIframes:10,get maxNestedIframes(){return this._maxNestedIframes},set maxNestedIframes(e){this._maxNestedIframes=e},_auctionOptions:{},get auctionOptions(){return this._auctionOptions},set auctionOptions(e){(function(e){if(!(0,c.isPlainObject)(e))return(0,c.logWarn)("Auction Options must be an object"),!1;for(var n=0,t=Object.keys(e);n<t.length;n++){var r=t[n];if("secondaryBidders"!==r&&"suppressStaleRender"!==r)return(0,c.logWarn)("Auction Options given an incorrect param: ".concat(r)),!1;if("secondaryBidders"===r){if(!(0,c.isArray)(e[r]))return(0,c.logWarn)("Auction Options ".concat(r," must be of type Array")),!1;if(!e[r].every(c.isStr))return(0,c.logWarn)("Auction Options ".concat(r," must be only string")),!1}else if("suppressStaleRender"===r&&!(0,c.isBoolean)(e[r]))return(0,c.logWarn)("Auction Options ".concat(r," must be of type boolean")),!1}return!0})(e)&&(this._auctionOptions=e)}};function i(e){return(0,u.sE)(Object.keys(h),(function(n){return e===h[n]}))}function o(e){if(!e)return(0,c.logError)("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof e)i(e)||(0,c.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if((0,c.isPlainObject)(e)&&!(0,a.t)(e))return(0,c.logError)("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0}n&&U(Object.keys(n).reduce((function(e,t){return n[t]!==r[t]&&(e[t]=r[t]||{}),e}),{})),n=r,t={}}function y(){if(g&&t&&(0,c.isPlainObject)(t[g])){var e=t[g],r=new Set(Object.keys(n).concat(Object.keys(e)));return(0,u.Oc)(r).reduce((function(t,r){return void 0===e[r]?t[r]=n[r]:void 0===n[r]?t[r]=e[r]:(0,c.isPlainObject)(e[r])?t[r]=(0,c.mergeDeep)({},n[r],e[r]):t[r]=e[r],t}),{})}return Object.assign({},n)}var w=[y,function(){var e=y();return Object.defineProperty(e,"ortb2",{get:function(){throw new Error("invalid access to 'orbt2' config - use request parameters instead")}}),e}].map((function(e){return function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var n=arguments.length<=0?void 0:arguments[0];return n?(0,s.Z)(e(),n):y()}return k.apply(void 0,arguments)}})),E=(0,o.Z)(w,2),C=E[0],A=E[1],T=[A,C].map((function(e){return function(){var n=e.apply(void 0,arguments);return n&&"object"===(0,i.Z)(n)&&(n=(0,c.deepClone)(n)),n}})),I=(0,o.Z)(T,2),O=I[0],S=I[1];function B(t){if((0,c.isPlainObject)(t)){var r=Object.keys(t),i={};r.forEach((function(r){var o=t[r];(0,c.isPlainObject)(e[r])&&(0,c.isPlainObject)(o)&&(o=Object.assign({},e[r],o));try{i[r]=n[r]=o}catch(e){(0,c.logWarn)("Cannot set config for property ".concat(r," : "),e)}})),U(i)}else(0,c.logError)("setConfig options must be an object")}function k(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n;if("string"!=typeof e&&(i=e,e=m,t=n||{}),"function"==typeof i){var o={topic:e,callback:i};return d.push(o),t.init&&i(e===m?A():(0,r.Z)({},e,A(e))),function(){d.splice(d.indexOf(o),1)}}(0,c.logError)("listener must be a function")}function U(e){var n=Object.keys(e);d.filter((function(e){return(0,u.q9)(n,e.topic)})).forEach((function(n){n.callback((0,r.Z)({},n.topic,e[n.topic]))})),d.filter((function(e){return e.topic===m})).forEach((function(n){return n.callback(e)}))}function j(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{r(e),e.bidders.forEach((function(r){t[r]||(t[r]={}),Object.keys(e.config).forEach((function(i){var o=e.config[i];if((0,c.isPlainObject)(o)){var a=n?c.mergeDeep:Object.assign;t[r][i]=a({},t[r][i]||{},o)}else t[r][i]=o}))}))}catch(e){(0,c.logError)(e)}function r(e){if(!(0,c.isPlainObject)(e))throw"setBidderConfig bidder options must be an object";if(!Array.isArray(e.bidders)||!e.bidders.length)throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";if(!(0,c.isPlainObject)(e.config))throw"setBidderConfig bidder options must contain a config object"}}function _(e,n){g=e;try{return n()}finally{R()}}function R(){g=null}return b(),{getCurrentBidder:function(){return g},resetBidder:R,getConfig:A,getAnyConfig:C,readConfig:O,readAnyConfig:S,setConfig:B,mergeConfig:function(e){if((0,c.isPlainObject)(e)){var n=(0,c.mergeDeep)(y(),e);return B(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)),n}(0,c.logError)("mergeConfig input must be an object")},setDefaults:function(t){(0,c.isPlainObject)(e)?(Object.assign(e,t),Object.assign(n,t)):(0,c.logError)("defaults must be an object")},resetConfig:b,runWithBidder:_,callbackWithBidder:function(e){return function(n){return function(){if("function"==typeof n){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return _(e,c.bind.call.apply(c.bind,[n,this].concat(r)))}(0,c.logWarn)("config.callbackWithBidder callback is not a function")}}},setBidderConfig:j,getBidderConfig:function(){return t},mergeBidderConfig:function(e){return j(e,!0)}}}()},34516:function(e,n,t){t.d(n,{$P:function(){return m},$e:function(){return S},LO:function(){return I},iK:function(){return O},qh:function(){return j}});var r=t(60136),i=t(73930),o=t(61120),a=t(15671),u=t(43144),c=t(4942),s=t(18916),d=t(42793),f=t(64358),l=t(68792);function g(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,o.Z)(e);if(n){var a=(0,o.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,i.Z)(this,t)}}function p(e,n,t){v(e,n),n.set(e,t)}function v(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function h(e,n,t){if(!n.has(e))throw new TypeError("attempted to get private field on non-instance");return t}var m=Object.freeze({}),b=new WeakMap,y=new WeakMap,w=new WeakMap,E=new WeakMap,C=new WeakSet,A=function(){function e(){var n,t;(0,a.Z)(this,e),v(n=this,t=C),t.add(n),p(this,b,{writable:!0,value:void 0}),p(this,y,{writable:!0,value:void 0}),p(this,w,{writable:!0,value:void 0}),p(this,E,{writable:!0,value:void 0}),(0,c.Z)(this,"generatedTime",void 0),this.reset()}return(0,u.Z)(e,[{key:"reset",value:function(){(0,d.Z)(this,w,(0,l.P)()),(0,d.Z)(this,b,!1),(0,d.Z)(this,y,null),(0,d.Z)(this,E,!1),this.generatedTime=null}},{key:"enable",value:function(){(0,d.Z)(this,b,!0)}},{key:"enabled",get:function(){return(0,s.Z)(this,b)}},{key:"ready",get:function(){return(0,s.Z)(this,E)}},{key:"promise",get:function(){return(0,s.Z)(this,E)?l.Z.resolve((0,s.Z)(this,y)):((0,s.Z)(this,b)||h(this,C,T).call(this,null),(0,s.Z)(this,w).promise)}},{key:"setConsentData",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,f.timestamp)();this.generatedTime=n,h(this,C,T).call(this,e)}},{key:"getConsentData",value:function(){return(0,s.Z)(this,y)}}]),e}();function T(e){(0,d.Z)(this,E,!0),(0,d.Z)(this,y,e),(0,s.Z)(this,w).resolve(e)}var I=function(e){(0,r.Z)(t,e);var n=g(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,u.Z)(t,[{key:"getConsentMeta",value:function(){var e=this.getConsentData();if(e&&this.generatedTime)return{usp:e,generatedAt:this.generatedTime}}}]),t}(A),O=function(e){(0,r.Z)(t,e);var n=g(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,u.Z)(t,[{key:"getConsentMeta",value:function(){var e=this.getConsentData();if(e&&e.vendorData&&this.generatedTime)return{gdprApplies:e.gdprApplies,consentStringSize:(0,f.isStr)(e.vendorData.tcString)?e.vendorData.tcString.length:0,generatedAt:this.generatedTime,apiVersion:e.apiVersion}}}]),t}(A),S=function(e){(0,r.Z)(t,e);var n=g(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,u.Z)(t,[{key:"getConsentMeta",value:function(){if(this.getConsentData()&&this.generatedTime)return{generatedAt:this.generatedTime}}}]),t}(A);var B,k,U,j=(B={},k={},U={},{register:function(e,n,t){t&&((B[n]=B[n]||{})[e]=t,k.hasOwnProperty(n)?k[n]!==t&&(k[n]=U):k[n]=t)},get:function(e){var n={modules:B[e]||{}};return k.hasOwnProperty(e)&&k[e]!==U&&(n.gvlid=k[e]),n}})},56463:function(e,n,t){t.d(n,{D:function(){return f},t:function(){return g}});var r=t(34614),i=t(64358),o=t(3193),a={buckets:[{max:5,increment:.5}]},u={buckets:[{max:20,increment:.1}]},c={buckets:[{max:20,increment:.01}]},s={buckets:[{max:3,increment:.01},{max:8,increment:.05},{max:20,increment:.5}]},d={buckets:[{max:5,increment:.05},{max:10,increment:.1},{max:20,increment:.5}]};function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=parseFloat(e);return isNaN(r)&&(r=""),{low:""===r?"":l(e,a,t),med:""===r?"":l(e,u,t),high:""===r?"":l(e,c,t),auto:""===r?"":l(e,d,t),dense:""===r?"":l(e,s,t),custom:""===r?"":l(e,n,t)}}function l(e,n,t){var a="";if(!g(n))return a;var u=n.buckets.reduce((function(e,n){return e.max>n.max?e:n}),{max:0}),c=0,s=(0,r.sE)(n.buckets,(function(n){if(e>u.max*t){var r=n.precision;void 0===r&&(r=2),a=(n.max*t).toFixed(r)}else{if(e<=n.max*t&&e>=c*t)return n.min=c,n;c=n.max}}));return s&&(a=function(e,n,t){var r=void 0!==n.precision?n.precision:2,a=n.increment*t,u=n.min*t,c=Math.floor,s=o.vc.getConfig("cpmRoundingFunction");"function"==typeof s&&(c=s);var d,f,l=Math.pow(10,r+2),g=(e*l-u*l)/(a*l);try{d=c(g)*a+u}catch(e){f=!0}(f||"number"!=typeof d)&&((0,i.logWarn)("Invalid rounding function passed in config"),d=Math.floor(g)*a+u);return(d=Number(d.toFixed(10))).toFixed(r)}(e,s,t)),a}function g(e){if((0,i.isEmpty)(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var n=!0;return e.buckets.forEach((function(e){e.max&&e.increment||(n=!1)})),n}},53777:function(e,n,t){t.d(n,{Jc:function(){return d},dF:function(){return v}});var r=t(3193),i=t(92797),o=t(78640),a=t(64358),u=t(69626),c=t(55730),s=t(68792),d="__pbjs_debugging__";function f(){return(0,o.R)().installedModules.includes("debugging")}function l(e){return new s.Z((function(n){(0,c.B)(e,"debugging",n)}))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.alreadyInstalled,t=void 0===n?f:n,c=e.script,g=void 0===c?l:c,p=null;return function(){return null==p&&(p=new s.Z((function(e,n){setTimeout((function(){if(t())e();else{var c="https://cdn.jsdelivr.net/npm/prebid.js@7.45.0/dist/debugging-standalone.js";(0,a.logMessage)('Debugging module not installed, loading it from "'.concat(c,'"...')),(0,o.R)()._installDebugging=!0,g(c).then((function(){(0,o.R)()._installDebugging({DEBUG_KEY:d,hook:i.z3,config:r.vc,createBid:u.m,logger:(0,a.prefixLog)("DEBUG:")})})).then(e,n)}}))}))),p}}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.load,t=void 0===n?g():n,r=e.hook,o=void 0===r?(0,i.v5)("requestBids"):r,a=null,u=!1;function c(e){for(var n=this,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return(a||s.Z.resolve()).then((function(){return e.apply(n,r)}))}function d(){u||(a=t(),o.before(c,99),u=!0)}function f(){o.getHooks({hook:c}).remove(),u=!1}function l(){a=null,f()}return{enable:d,disable:f,reset:l}}();p.reset;function v(){var e=null;try{e=window.sessionStorage}catch(e){}if(null!==e){var n=p,t=null;try{t=e.getItem(d)}catch(e){}null!==t&&n.enable()}}r.vc.getConfig("debugging",(function(e){var n=e.debugging;null!=n&&n.enabled?p.enable():p.disable()}))},52021:function(e,n,t){t.r(n),t.d(n,{addEvents:function(){return h},clearEvents:function(){return m},emit:function(){return v},get:function(){return g},getEvents:function(){return p},off:function(){return l},on:function(){return f}});var r=t(64358),i=t(5644),o=Array.prototype.slice,a=Array.prototype.push,u=r._map(i.FP,(function(e){return e})),c=i.aI,s=[],d=function(){var e={},n={};function t(n,t){r.logMessage("Emitting event for: "+n);var i=t[0]||{},o=i[c[n]],u=e[n]||{que:[]},d=r._map(u,(function(e,n){return n})),f=[];s.push({eventType:n,args:i,id:o,elapsedTime:r.getPerformanceNow()}),o&&r.contains(d,o)&&a.apply(f,u[o].que),a.apply(f,u.que),r._each(f,(function(e){if(e)try{e.apply(null,t)}catch(e){r.logError("Error executing handler:","events.js",e)}}))}return n.on=function(n,t,i){if(function(e){return r.contains(u,e)}(n)){var o=e[n]||{que:[]};i?(o[i]=o[i]||{que:[]},o[i].que.push(t)):o.que.push(t),e[n]=o}else r.logError("Wrong event name : "+n+" Valid event names :"+u)},n.emit=function(e){var n=o.call(arguments,1);t(e,n)},n.off=function(n,t,i){var o=e[n];r.isEmpty(o)||r.isEmpty(o.que)&&r.isEmpty(o[i])||i&&(r.isEmpty(o[i])||r.isEmpty(o[i].que))||(i?r._each(o[i].que,(function(e){var n=o[i].que;e===t&&n.splice(n.indexOf(e),1)})):r._each(o.que,(function(e){var n=o.que;e===t&&n.splice(n.indexOf(e),1)})),e[n]=o)},n.get=function(){return e},n.addEvents=function(e){u=u.concat(e)},n.getEvents=function(){var e=[];return r._each(s,(function(n){var t=Object.assign({},n);e.push(t)})),e},n}();r._setEventEmitter(d.emit.bind(d));var f=d.on,l=d.off,g=d.get,p=d.getEvents,v=d.emit,h=d.addEvents;function m(){s.length=0}},54078:function(e,n,t){t.d(n,{S:function(){return w}});var r=t(93324),i=t(92797),o=t(25102),a=t(38196),u=t(64358),c=t(96475),s=t(3193),d=t(68792),f=["architecture","bitness","model","platformVersion","fullVersionList"],l=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null===(e=window.navigator)||void 0===e?void 0:e.userAgentData,t=(0,u.isEmpty)(n)?null:Object.freeze(p(1,n));return function(){return t}}(),g=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null===(e=window.navigator)||void 0===e?void 0:e.userAgentData,t={},r=new WeakMap;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;if(!r.has(e)){var i=Array.from(e);i.sort(),r.set(e,i.join("|"))}var o=r.get(e);if(!t.hasOwnProperty(o))try{t[o]=n.getHighEntropyValues(e).then((function(e){return(0,u.isEmpty)(e)?null:Object.freeze(p(2,e))})).catch((function(){return null}))}catch(e){t[o]=d.Z.resolve(null)}return t[o]}}();function p(e,n){function t(e,n){var t={brand:e};return(0,u.isStr)(n)&&!(0,u.isEmptyStr)(n)&&(t.version=n.split(".")),t}var r={source:e};return n.platform&&(r.platform=t(n.platform,n.platformVersion)),(n.fullVersionList||n.brands)&&(r.browsers=(n.fullVersionList||n.brands).map((function(e){return t(e.brand,e.version)}))),n.hasOwnProperty("mobile")&&(r.mobile=n.mobile?1:0),["model","bitness","architecture"].forEach((function(e){var t=n[e];(0,u.isStr)(t)&&(r[e]=t)})),r}var v=t(83790);function h(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var b={getRefererInfo:o.nH,findRootDomain:a.W,getWindowTop:u.getWindowTop,getWindowSelf:u.getWindowSelf,getHighEntropySUA:g,getLowEntropySUA:l},y=(0,v.A_)("FPD"),w=(0,i.z3)("sync",(function(e){return d.Z.all([e,(n=s.vc.getConfig("firstPartyData.uaHints"),Array.isArray(n)&&0!==n.length?b.getHighEntropySUA(n):d.Z.resolve(b.getLowEntropySUA())).catch((function(){return null}))]).then((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],o=b.getRefererInfo();!function(e){["app","site","device"].forEach((function(n){var t=s.vc.getConfig(n);null!=t&&(e[n]=(0,u.mergeDeep)({},t,e[n]))}))}(t),Object.entries(A).forEach((function(e){var n=(0,r.Z)(e,2),i=n[0],a=(0,n[1])(t,o);a&&Object.keys(a).length>0&&(t[i]=(0,u.mergeDeep)({},a,t[i]))})),i&&(0,c.N)(t,"device.sua",Object.assign({},i,t.device.sua)),t=y(t);var a,d=h(v.Iq);try{for(d.s();!(a=d.n()).done;){var f=a.value;if((0,v.Qg)(t,f)){t[f]=(0,u.mergeDeep)({},T(t,o),t[f]);break}}}catch(e){d.e(e)}finally{d.f()}return t}));var n}));function E(e){try{return e(b.getWindowTop())}catch(n){return e(b.getWindowSelf())}}function C(e){return(0,u.getDefinedParams)(e,Object.keys(e))}var A={site:function(e,n){if(!v.Iq.filter((function(e){return"site"!==e})).some(v.Qg.bind(null,e)))return C({page:n.page,ref:n.ref})},device:function(){return E((function(e){return{w:e.innerWidth||e.document.documentElement.clientWidth||e.document.body.clientWidth,h:e.innerHeight||e.document.documentElement.clientHeight||e.document.body.clientHeight,dnt:(0,u.getDNT)()?1:0,ua:e.navigator.userAgent,language:e.navigator.language.split("-").shift()}}))},regs:function(){var e={};E((function(e){return e.navigator.globalPrivacyControl}))&&(0,c.N)(e,"ext.gpc",1);var n=s.vc.getConfig("coppa");return"boolean"==typeof n&&(e.coppa=n?1:0),e}};function T(e,n){var t,r,i,a=(0,o.hh)(n.page,{noLeadingWww:!0});return C({domain:a,keywords:null===(t=E((function(e){return e.document.querySelector("meta[name='keywords']")})))||void 0===t||null===(r=t.content)||void 0===r||null===(i=r.replace)||void 0===i?void 0:i.call(r,/\s/g,""),publisher:C({domain:b.findRootDomain(a)})})}},83790:function(e,n,t){t.d(n,{A_:function(){return o},Iq:function(){return i},Qg:function(){return a}});var r=t(64358),i=["dooh","app","site"];function o(e){return function(n){return i.reduce((function(t,i){return a(n,i)&&(null!=t?((0,r.logWarn)("".concat(e," specifies both '").concat(t,"' and '").concat(i,"'; dropping the latter.")),delete n[i]):t=i),t}),null),n}}function a(e,n){return null!=e[n]&&Object.keys(e[n]).length>0}},38196:function(e,n,t){t.d(n,{W:function(){return o}});var r=t(64358),i=(0,t(15164).eA)(),o=(0,r.memoize)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.host;if(!i.cookiesAreEnabled())return e;var n,t,o=e.split(".");if(2===o.length)return e;var a=-2,u="_rdc".concat(Date.now()),c="writeable";do{n=o.slice(a).join(".");var s=new Date((0,r.timestamp)()+1e4).toUTCString();i.setCookie(u,c,s,"Lax",n,void 0);var d=i.getCookie(u,void 0);d===c?(t=!1,i.setCookie(u,"","Thu, 01 Jan 1970 00:00:01 GMT",void 0,n,void 0)):(a+=-1,t=Math.abs(a)<=o.length)}while(t);return n}))},92797:function(e,n,t){t.d(n,{Bx:function(){return p},Cd:function(){return s},IF:function(){return v},bA:function(){return g},o0:function(){return f},v5:function(){return d},z3:function(){return u}});var r=t(89062),i=t(81432),o=t.n(i),a=t(68792),u=o()({ready:o().SYNC|o().ASYNC|o().QUEUE}),c=(0,a.P)();u.ready=function(){var e=u.ready;return function(){try{return e.apply(u,arguments)}finally{c.resolve()}}}();var s=c.promise,d=u.get;function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=e.getHooks({hook:n});0===r.length&&e.before(n,t)}var l={};function g(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.postInstallAllowed,o=void 0!==i&&i;u("async",(function(t){t.forEach((function(e){return n.apply(void 0,(0,r.Z)(e))})),o&&(l[e]=n)}),e)([])}function p(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=l[e];if(i)return i.apply(void 0,t);d(e).before((function(e,n){n.push(t),e(n)}))}function v(e,n){return Object.defineProperties(n,Object.fromEntries(["before","after","getHooks","removeAll"].map((function(n){return[n,{get:function(){return e[n]}}]})))),n}},24679:function(e,n,t){t.d(n,{B5:function(){return r},Mk:function(){return o},Oh:function(){return a},pX:function(){return i}});var r="native",i="video",o="banner",a="adpod"},70059:function(e,n,t){t.d(n,{Fb:function(){return k},JL:function(){return x},Sg:function(){return h},Ur:function(){return P},e6:function(){return R},eK:function(){return D},lY:function(){return W},r4:function(){return j},xc:function(){return m},zq:function(){return L}});var r=t(89062),i=t(93324),o=t(4942),a=t(20265),u=t(64358),c=t(34614),s=t(78653),d=t(5644),f=t(24679);function l(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=[],m=Object.keys(d.FY).map((function(e){return d.FY[e]})),b={image:{ortb:{ver:"1.2",assets:[{required:1,id:1,img:{type:3,wmin:100,hmin:100}},{required:1,id:2,title:{len:140}},{required:1,id:3,data:{type:1}},{required:0,id:4,data:{type:2}},{required:0,id:5,img:{type:1,wmin:20,hmin:20}}]},image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}},y=d.s$,w=d.oF,E=d.V1,C=d.zA,A=d.FY,T=K(E),I=K(y),O={img:1,js:2,1:"img",2:"js"},S=1;function B(e){if(e&&e.type&&function(e){if(!e||!(0,c.q9)(Object.keys(b),e))return(0,u.logError)("".concat(e," nativeParam is not supported")),!1;return!0}(e.type)&&(e=b[e.type]),!e||!e.ortb||U(e.ortb))return e}function k(e){e.forEach((function(e){var n=e.nativeParams||(0,a.Z)(e,"mediaTypes.native");n&&(e.nativeParams=B(n)),e.nativeParams&&(e.nativeOrtbRequest=e.nativeParams.ortb||function(e){if(!e&&!(0,u.isPlainObject)(e))return void(0,u.logError)("Native assets object is empty or not an object: ",e);var n={ver:"1.2",assets:[]};for(var t in e)if(!C.includes(t))if(A.hasOwnProperty(t)){var r=e[t],i=0;r.required&&(0,u.isBoolean)(r.required)&&(i=Number(r.required));var o={id:n.assets.length,required:i};if(t in E)o.data={type:y[E[t]]},r.len&&(o.data.len=r.len);else if("icon"===t||"image"===t){if(o.img={type:"icon"===t?w.ICON:w.MAIN},r.aspect_ratios)if((0,u.isArray)(r.aspect_ratios))if(r.aspect_ratios.length){var a=r.aspect_ratios[0],c=a.min_width,s=a.min_height;(0,u.isInteger)(c)&&(0,u.isInteger)(s)?(o.img.wmin=c,o.img.hmin=s):(0,u.logError)("image.aspect_ratios min_width or min_height are invalid: ",c,s);var d=r.aspect_ratios.filter((function(e){return e.ratio_width&&e.ratio_height})).map((function(e){return"".concat(e.ratio_width,":").concat(e.ratio_height)}));d.length>0&&(o.img.ext={aspectratios:d})}else(0,u.logError)("image.aspect_ratios was passed, but it's empty:",r.aspect_ratios);else(0,u.logError)("image.aspect_ratios was passed, but it's not a an array:",r.aspect_ratios);r.sizes&&(2===r.sizes.length&&(0,u.isInteger)(r.sizes[0])&&(0,u.isInteger)(r.sizes[1])?(o.img.w=r.sizes[0],o.img.h=r.sizes[1],delete o.img.hmin,delete o.img.wmin):(0,u.logError)("image.sizes was passed, but its value is not an array of integers:",r.sizes))}else"title"===t?o.title={len:r.len||140}:"ext"===t&&(o.ext=r,delete o.required);n.assets.push(o)}else(0,u.logError)("Unrecognized native asset code: ".concat(t,". Asset will be ignored."));return n}(e.nativeParams))}))}function U(e){var n=e.assets;if(!Array.isArray(n)||0===n.length)return(0,u.logError)("assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ",n),!1;var t=n.map((function(e){return e.id}));return n.length!==new Set(t).size||t.some((function(e){return e!==parseInt(e,10)}))?((0,u.logError)("each asset object must have 'id' property, it must be unique and it must be an integer"),!1):e.hasOwnProperty("eventtrackers")&&!Array.isArray(e.eventtrackers)?((0,u.logError)("ortb.eventtrackers is not an array. Eventtrackers: ",e.eventtrackers),!1):n.every((function(e){return function(e){if(!(0,u.isPlainObject)(e))return(0,u.logError)("asset must be an object. Provided asset: ",e),!1;if(e.img){if(!(0,u.isNumber)(e.img.w)&&!(0,u.isNumber)(e.img.wmin))return(0,u.logError)("for img asset there must be 'w' or 'wmin' property"),!1;if(!(0,u.isNumber)(e.img.h)&&!(0,u.isNumber)(e.img.hmin))return(0,u.logError)("for img asset there must be 'h' or 'hmin' property"),!1}else if(e.title){if(!(0,u.isNumber)(e.title.len))return(0,u.logError)("for title asset there must be 'len' property defined"),!1}else if(e.data){if(!(0,u.isNumber)(e.data.type))return(0,u.logError)("for data asset 'type' property must be a number"),!1}else if(e.video&&!(Array.isArray(e.video.mimes)&&Array.isArray(e.video.protocols)&&(0,u.isNumber)(e.video.minduration)&&(0,u.isNumber)(e.video.maxduration)))return(0,u.logError)("video asset is not properly configured"),!1;return!0}(e)}))}function j(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.index,i=void 0===r?s.K.index:r,o=i.getAdUnit(e);if(!o)return!1;var a=o.nativeOrtbRequest,u=(null===(n=e.native)||void 0===n?void 0:n.ortb)||z(e.native,a);return _(u,a)}function _(e,n){if(!(0,a.Z)(e,"link.url"))return(0,u.logError)("native response doesn't have 'link' property. Ortb response: ",e),!1;var t=n.assets.filter((function(e){return 1===e.required})).map((function(e){return e.id})),r=e.assets.map((function(e){return e.id})),i=t.every((function(e){return(0,c.q9)(r,e)}));return i||(0,u.logError)("didn't receive a bid with all required assets. Required ids: ".concat(t,", but received ids in response: ").concat(r)),i}function R(e,n){var t=n.native.ortb||F(n.native);return"click"===e.action?function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fetchURL,r=void 0===t?u.triggerPixel:t;if(n){var i,o=(e.assets||[]).filter((function(e){return e.link})).reduce((function(e,n){return e[n.id]=n.link,e}),{}),a=(null===(i=e.link)||void 0===i?void 0:i.clicktrackers)||[],c=o[n],s=a;c&&(s=c.clicktrackers||[]),s.forEach((function(e){return r(e)}))}else{var d;((null===(d=e.link)||void 0===d?void 0:d.clicktrackers)||[]).forEach((function(e){return r(e)}))}}(t,null==e?void 0:e.assetId):function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.runMarkup,r=void 0===t?function(e){return(0,u.insertHtmlIntoIframe)(e)}:t,i=n.fetchURL,o=void 0===i?u.triggerPixel:i,a=(e.eventtrackers||[]).filter((function(e){return e.event===S})).reduce((function(e,n){return O.hasOwnProperty(n.method)&&e[O[n.method]].push(n.url),e}),{img:[],js:[]}),c=a.img,s=a.js;e.imptrackers&&(c=c.concat(e.imptrackers));c.forEach((function(e){return o(e)})),s=s.map((function(e){return'<script async src="'.concat(e,'"><\/script>')})),e.jstracker&&(s=s.concat([e.jstracker]));s.length&&r(s.join("\n"))}(t),e.action}function P(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.index,r=void 0===t?s.K.index:t,i={},o=r.getAdUnit(e);(0,a.Z)(o,"nativeParams.rendererUrl")?e.native.rendererUrl=Z(o.nativeParams.rendererUrl):(0,a.Z)(o,"nativeParams.adTemplate")&&(e.native.adTemplate=Z(o.nativeParams.adTemplate));var u=!1!==(0,a.Z)(o,"nativeParams.sendTargetingKeys"),c=N(o),d=v(v({},e.native),e.native.ext);return delete d.ext,Object.keys(d).forEach((function(n){var t=c[n],r=Z(e.native[n])||Z((0,a.Z)(e,"native.ext.".concat(n)));if("adTemplate"!==n&&t&&r){var s=(0,a.Z)(o,"nativeParams.".concat(n,".sendId"));if("boolean"!=typeof s&&(s=(0,a.Z)(o,"nativeParams.ext.".concat(n,".sendId"))),s)r="".concat(t,":").concat(e.adId);var d=(0,a.Z)(o,"nativeParams.".concat(n,".sendTargetingKeys"));"boolean"!=typeof d&&(d=(0,a.Z)(o,"nativeParams.ext.".concat(n,".sendTargetingKeys"))),("boolean"==typeof d?d:u)&&(i[t]=r)}})),i}function q(e,n,t){var r,i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=o.index,u=void 0===a?s.K.index:a,c={message:"assetResponse",adId:e.adId},f=u.getAdUnit(n),l=n.native;return n.native.ortb?c.ortb=n.native.ortb:null!==(r=f.mediaTypes)&&void 0!==r&&null!==(i=r.native)&&void 0!==i&&i.ortb&&(c.ortb=z(n.native,f.nativeOrtbRequest)),c.assets=[],(null==t?Object.keys(l):t).forEach((function(e){if("adTemplate"===e&&l[e])c.adTemplate=Z(l[e]);else if("rendererUrl"===e&&l[e])c.rendererUrl=Z(l[e]);else if("ext"===e)Object.keys(l[e]).forEach((function(n){if(l[e][n]){var t=Z(l[e][n]);c.assets.push({key:n,value:t})}}));else if(l[e]&&d.FY.hasOwnProperty(e)){var n=Z(l[e]);c.assets.push({key:e,value:n})}})),c}function D(e,n){var t=e.assets.map((function(e){return(0,u.getKeyByValue)(d.FY,e)}));return q(e,n,t)}function x(e,n){return q(e,n,null)}function Z(e){return(null==e?void 0:e.url)||e}function N(e){var n={};return(0,a.Z)(e,"nativeParams.ext")&&Object.keys(e.nativeParams.ext).forEach((function(e){n[e]="hb_native_".concat(e)})),v(v({},d.FY),n)}function M(e){if(U(e)){var n,t={},r=l(e.assets);try{var i=function(){var e=n.value;if(e.title){var r={required:!!e.required&&Boolean(e.required),len:e.title.len};t.title=r}else if(e.img){var i={required:!!e.required&&Boolean(e.required)};e.img.w&&e.img.h?i.sizes=[e.img.w,e.img.h]:e.img.wmin&&e.img.hmin&&(i.aspect_ratios={min_width:e.img.wmin,min_height:e.img.hmin,ratio_width:e.img.wmin,ratio_height:e.img.hmin}),e.img.type===w.MAIN?t.image=i:t.icon=i}else if(e.data){var o=Object.keys(y).find((function(n){return y[n]===e.data.type})),a=Object.keys(E).find((function(e){return E[e]===o}));t[a]={required:!!e.required&&Boolean(e.required)},e.data.len&&(t[a].len=e.data.len)}};for(r.s();!(n=r.n()).done;)i()}catch(e){r.e(e)}finally{r.f()}return t}}function W(e){if(!e||!(0,u.isArray)(e))return e;if(!e.some((function(e){var n;return null===(n=((null==e?void 0:e.mediaTypes)||{})[f.B5])||void 0===n?void 0:n.ortb})))return e;var n,t=(0,u.deepClone)(e),r=l(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.mediaTypes&&i.mediaTypes[f.B5]&&i.mediaTypes[f.B5].ortb&&(i.mediaTypes[f.B5]=Object.assign((0,u.pick)(i.mediaTypes[f.B5],C),M(i.mediaTypes[f.B5].ortb)),i.nativeParams=B(i.mediaTypes[f.B5]))}}catch(e){r.e(e)}finally{r.f()}return t}function F(e){var n={link:{},eventtrackers:[]};return Object.entries(e).forEach((function(e){var t=(0,i.Z)(e,2),r=t[0],o=t[1];switch(r){case"clickUrl":n.link.url=o;break;case"clickTrackers":n.link.clicktrackers=Array.isArray(o)?o:[o];break;case"impressionTrackers":(Array.isArray(o)?o:[o]).forEach((function(e){n.eventtrackers.push({event:S,method:O.img,url:e})}));break;case"javascriptTrackers":n.jstracker=Array.isArray(o)?o.join(""):o}})),n}function z(e,n){var t=v(v({},F(e)),{},{assets:[]});function r(e,r){var i=n.assets.find(e);null!=i&&(r(i=(0,u.deepClone)(i)),t.assets.push(i))}return Object.keys(e).filter((function(n){return!!e[n]})).forEach((function(n){var t=Z(e[n]);switch(n){case"title":r((function(e){return null!=e.title}),(function(e){e.title={text:t}}));break;case"image":case"icon":var i="image"===n?w.MAIN:w.ICON;r((function(e){return null!=e.img&&e.img.type===i}),(function(e){e.img={url:t}}));break;default:n in E&&r((function(e){return null!=e.data&&e.data.type===y[E[n]]}),(function(e){e.data={value:t}}))}})),t}function L(e,n){var t={},i=(null==n?void 0:n.assets)||[];t.clickUrl=e.link.url,t.privacyLink=e.privacy;var o,a=l((null==e?void 0:e.assets)||[]);try{var u=function(){var e=o.value,n=i.find((function(n){return e.id===n.id}));e.title?t.title=e.title.text:e.img?t[n.img.type===w.MAIN?"image":"icon"]={url:e.img.url,width:e.img.w,height:e.img.h}:e.data&&(t[T[I[n.data.type]]]=e.data.value)};for(a.s();!(o=a.n()).done;)u()}catch(e){a.e(e)}finally{a.f()}t.impressionTrackers=[];var c,s=[];null!=n&&n.imptrackers&&(c=t.impressionTrackers).push.apply(c,(0,r.Z)(n.imptrackers));var d,f=l((null==e?void 0:e.eventtrackers)||[]);try{for(f.s();!(d=f.n()).done;){var g=d.value;g.event===S&&g.method===O.img&&t.impressionTrackers.push(g.url),g.event===S&&g.method===O.js&&s.push(g.url)}}catch(e){f.e(e)}finally{f.f()}return s=s.map((function(e){return'<script async src="'.concat(e,'"><\/script>')})),null!=e&&e.jstracker&&s.push(e.jstracker),s.length&&(t.javascriptTrackers=s.join("\n")),t}function K(e){var n={};for(var t in e)n[e[t]]=t;return n}},34614:function(e,n,t){function r(e,n,t){return e&&e.includes(n,t)||!1}function i(){return Array.from.apply(Array,arguments)}function o(e,n,t){return e&&e.find(n,t)}function a(e,n,t){return e&&e.findIndex(n,t)}t.d(n,{Oc:function(){return i},cx:function(){return a},q9:function(){return r},sE:function(){return o}})},23866:function(e,n,t){t.d(n,{zh:function(){return ae},O5:function(){return ce},ew:function(){return fe}});var r=t(93324),i=t(4942),o=t(78640),a=t(64358),u=t(20265),c=t(96475),s=t(52021),d=t(70059),f=t(5644),l=t(78653),g=t(34614),p=t(35706),v=t(3193),h=f.FP,m=h.AD_RENDER_FAILED,b=h.AD_RENDER_SUCCEEDED;function y(e){var n=e.reason,t=e.message,r=e.bid,i=e.id,o={reason:n,message:t};r&&(o.bid=r),i&&(o.adId=i),(0,a.logError)(t),s.emit(m,o)}function w(e){var n=e.doc,t=e.bid,r=e.id,i={doc:n};t&&(i.bid=t),r&&(i.adId=r),s.emit(b,i)}var E=f.FP.BID_WON,C=f.FP.STALE_RENDER,A=new WeakSet,T={"Prebid Request":function(e,n,t){if(null==t)return void y({reason:f.q_.CANNOT_FIND_AD,message:"Cannot find ad for cross-origin render request: '".concat(n.adId,"'"),id:n.adId});if(t.status===f.UE.fe&&((0,a.logWarn)("Ad id ".concat(t.adId," has been rendered before")),s.emit(C,t),(0,u.Z)(v.vc.getConfig("auctionOptions"),"suppressStaleRender")))return;try{!function(e,n){var t=e.adId,r=e.ad,i=e.adUrl,o=e.width,u=e.height,c=e.renderer,s=e.cpm,d=e.originalCpm;(0,p.Pd)(c)?(0,p._U)(c,e):t&&(O(e),n({message:"Prebid Response",ad:(0,a.replaceAuctionPrice)(r,d||s),adUrl:(0,a.replaceAuctionPrice)(i,d||s),adId:t,width:o,height:u}))}(t,e)}catch(e){return void y({reason:f.q_.EXCEPTION,message:e.message,id:n.adId,bid:t})}l.K.addWinningBid(t),s.emit(E,t)},"Prebid Event":function(e,n,t){if(null==t)return void(0,a.logError)("Cannot find ad '".concat(n.adId,"' for x-origin event request"));if(t.status!==f.UE.fe)return void(0,a.logWarn)("Received x-origin event request without corresponding render request for ad '".concat(n.adId,"'"));switch(n.event){case f.FP.AD_RENDER_FAILED:y({bid:t,id:n.adId,reason:n.info.reason,message:n.info.message});break;case f.FP.AD_RENDER_SUCCEEDED:w({doc:null,bid:t,id:n.adId});break;default:(0,a.logError)("Received x-origin event request for unsupported event: '".concat(n.event,"' (adId: '").concat(n.adId,"')"))}}};function I(e){var n=e.message?"message":"data",t={};try{t=JSON.parse(e[n])}catch(e){return}if(t&&t.adId&&t.message){var r=(0,g.sE)(l.K.getBidsReceived(),(function(e){return e.adId===t.adId}));T.hasOwnProperty(t.message)&&T[t.message](function(e){return null==e.origin&&0===e.ports.length?function(){var e="Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";throw(0,a.logError)(e),new Error(e)}:e.ports.length>0?function(n){e.ports[0].postMessage(JSON.stringify(n))}:function(n){e.source.postMessage(JSON.stringify(n),e.origin)}}(e),t,r)}}function O(e){var n=e.adId,t=e.adUnitCode,r=e.width,i=e.height;["div","iframe"].forEach((function(e){var o=function(e){var r=function(e,n){return(0,a.isGptPubadsDefined)()?function(e){var n=(0,g.sE)(window.googletag.pubads().getSlots(),(function(n){return(0,g.sE)(n.getTargetingKeys(),(function(t){return(0,g.q9)(n.getTargeting(t),e)}))}));return n?n.getSlotElementId():null}(e):(0,a.isApnGetTagDefined)()?function(e){var n=window.apntag.getTag(e);return n&&n.targetId}(n):n}(n,t),i=document.getElementById(r);return i&&i.querySelector(e)}(e+':not([style*="display: none"])');if(o){var u=o.style;u.width=r?r+"px":"100%",u.height=i+"px"}else(0,a.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t,".  Can't resize it to ad's dimensions.  Please review setup."))}))}Object.assign(T,{"Prebid Native":function(e,n,t){if(null==t)return void(0,a.logError)("Cannot find ad for x-origin event request: '".concat(n.adId,"'"));A.has(t)||(A.add(t),l.K.addWinningBid(t),s.emit(E,t));switch(n.action){case"assetRequest":e((0,d.eK)(n,t));break;case"allAssetRequest":e((0,d.JL)(n,t));break;case"resizeNativeHeight":t.height=n.height,t.width=n.width,O(t);break;default:(0,d.e6)(n,t)}}});var S=t(11974),B=t(18621),k=t(92797),U=t(53777),j=t(875),_=t(69626),R=t(15164),P=t(51039),q=t(99128),D=t(68792),x=t(54078),Z=(0,o.R)(),N=S.k_.triggerUserSyncs,M=f.FP,W=M.ADD_AD_UNITS,F=M.BID_WON,z=M.REQUEST_BIDS,L=M.SET_TARGETING,K=M.STALE_RENDER,G=f.q_,H=G.PREVENT_WRITING_ON_MAIN_DOCUMENT,V=G.NO_AD,Q=G.EXCEPTION,J=G.CANNOT_FIND_AD,Y=G.MISSING_DOC_OR_ADID,X={bidWon:function(e){var n=l.K.getBidsRequested().map((function(e){return e.bids.map((function(e){return e.adUnitCode}))})).reduce(a.flatten).filter(a.uniques);if(!(0,a.contains)(n,e))return void(0,a.logError)('The "'+e+'" placement is not defined.');return!0}};function $(e,n,t){e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=n,e.defaultView.frameElement.height=t)}function ee(e,n){var t=[];return(0,a.isArray)(e)&&(n?e.length===n:e.length>0)&&(e.every((function(e){return(0,a.isArrayOfNums)(e,2)}))?t=e:(0,a.isArrayOfNums)(e,2)&&t.push(e)),t}function ne(e){var n=(0,a.deepClone)(e),t=n.mediaTypes.banner,r=ee(t.sizes);return r.length>0?(t.sizes=r,n.sizes=r):((0,a.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),delete n.mediaTypes.banner),n}function te(e){var n=(0,a.deepClone)(e),t=n.mediaTypes.video;if(t.playerSize){var r="number"==typeof t.playerSize[0]?2:1,i=ee(t.playerSize,r);i.length>0?(2===r&&(0,a.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),t.playerSize=i,n.sizes=i):((0,a.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),delete n.mediaTypes.video.playerSize)}return n}function re(e){var n=(0,a.deepClone)(e),t=n.mediaTypes.native;if(t.ortb){var r=Object.keys(f.FY).filter((function(e){return f.FY[e].includes("hb_native_")})),i=Object.keys(t).filter((function(e){return r.includes(e)}));i.length>0&&((0,a.logError)("when using native OpenRTB format, you cannot use legacy native properties. Deleting ".concat(i," keys from request.")),i.forEach((function(e){return delete n.mediaTypes.native[e]})))}return t.image&&t.image.sizes&&!Array.isArray(t.image.sizes)&&((0,a.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),delete n.mediaTypes.native.image.sizes),t.image&&t.image.aspect_ratios&&!Array.isArray(t.image.aspect_ratios)&&((0,a.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),delete n.mediaTypes.native.image.aspect_ratios),t.icon&&t.icon.sizes&&!Array.isArray(t.icon.sizes)&&((0,a.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),delete n.mediaTypes.native.icon.sizes),n}function ie(e,n){var t=(0,u.Z)(e,"mediaTypes.".concat(n,".pos"));if(!(0,a.isNumber)(t)||isNaN(t)||!isFinite(t)){var r="Value of property 'pos' on ad unit ".concat(e.code," should be of type: Number");(0,a.logWarn)(r),s.emit(f.FP.AUCTION_DEBUG,{type:"WARNING",arguments:r}),delete e.mediaTypes[n].pos}return e}function oe(e){var n=function(n){return"adUnit.code '".concat(e.code,"' ").concat(n)},t=e.mediaTypes,r=e.bids;return null==r||(0,a.isArray)(r)?null==r&&null==e.ortb2Imp?((0,a.logError)(n("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")),null):t&&0!==Object.keys(t).length?(null==e.ortb2Imp||null!=r&&0!==r.length||(e.bids=[{bidder:null}],(0,a.logMessage)(n("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))),e):((0,a.logError)(n("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")),null):((0,a.logError)(n("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")),null)}(0,U.dF)(),Z.bidderSettings=Z.bidderSettings||{},Z.libLoaded=!0,Z.version="v7.45.0",(0,a.logInfo)("Prebid.js v7.45.0 loaded"),Z.installedModules=Z.installedModules||[],Z.adUnits=Z.adUnits||[],Z.triggerUserSyncs=N;var ae={validateAdUnit:oe,validateBannerMediaType:ne,validateSizes:ee};Object.assign(ae,{validateNativeMediaType:re}),Object.assign(ae,{validateVideoMediaType:te});var ue,ce=(0,k.z3)("sync",(function(e){var n=[];return e.forEach((function(e){if(null!=(e=oe(e))){var t,r,i,o=e.mediaTypes;o.banner&&(t=ne(e),o.banner.hasOwnProperty("pos")&&(t=ie(t,"banner"))),o.video&&(r=te(t||e),o.video.hasOwnProperty("pos")&&(r=ie(r,"video"))),o.native&&(i=re(r||(t||e)));var a=Object.assign({},t,r,i);n.push(a)}})),n}),"checkAdUnitSetup");function se(e){var n=l.K[e]().filter(a.bind.call(a.adUnitsFilter,this,l.K.getAdUnitCodes())),t=l.K.getLastAuctionId();return n.map((function(e){return e.adUnitCode})).filter(a.uniques).map((function(e){return n.filter((function(n){return n.auctionId===t&&n.adUnitCode===e}))})).filter((function(e){return e&&e[0]&&e[0].adUnitCode})).map((function(e){return(0,i.Z)({},e[0].adUnitCode,{bids:e})})).reduce((function(e,n){return Object.assign(e,n)}),{})}function de(e,n,t){var r=n.querySelector(t);e.parentNode&&e.parentNode===r||(0,a.insertElement)(e,n,t)}Z.getAdserverTargetingForAdUnitCodeStr=function(e){if((0,a.logInfo)("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e){var n=Z.getAdserverTargetingForAdUnitCode(e);return(0,a.transformAdServerTargetingObj)(n)}(0,a.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},Z.getHighestUnusedBidResponseForAdUnitCode=function(e){if(e){var n=l.K.getAllBidsForAdUnitCode(e).filter(B.TL);return n.length?n.reduce(a.getHighestCpm):{}}(0,a.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")},Z.getAdserverTargetingForAdUnitCode=function(e){return Z.getAdserverTargeting(e)[e]},Z.getAdserverTargeting=function(e){return(0,a.logInfo)("Invoking pbjs.getAdserverTargeting",arguments),B.q0.getAllTargeting(e)},Z.getConsentMetadata=function(){return(0,a.logInfo)("Invoking pbjs.getConsentMetadata"),{gdpr:P.rp.getConsentMeta(),usp:P.nX.getConsentMeta(),gpp:P.TJ.getConsentMeta(),coppa:!!v.vc.getConfig("coppa")}},Z.getNoBids=function(){return(0,a.logInfo)("Invoking pbjs.getNoBids",arguments),se("getNoBids")},Z.getNoBidsForAdUnitCode=function(e){return{bids:l.K.getNoBids().filter((function(n){return n.adUnitCode===e}))}},Z.getBidResponses=function(){return(0,a.logInfo)("Invoking pbjs.getBidResponses",arguments),se("getBidsReceived")},Z.getBidResponsesForAdUnitCode=function(e){return{bids:l.K.getBidsReceived().filter((function(n){return n.adUnitCode===e}))}},Z.setTargetingForGPTAsync=function(e,n){if((0,a.logInfo)("Invoking pbjs.setTargetingForGPTAsync",arguments),(0,a.isGptPubadsDefined)()){var t=B.q0.getAllTargeting(e);B.q0.resetPresetTargeting(e,n),B.q0.setTargetingForGPT(t,n),Object.keys(t).forEach((function(e){Object.keys(t[e]).forEach((function(n){"hb_adid"===n&&l.K.setStatusForBids(t[e][n],f.UE.CK)}))})),s.emit(L,t)}else(0,a.logError)("window.googletag is not defined on the page")},Z.setTargetingForAst=function(e){(0,a.logInfo)("Invoking pbjs.setTargetingForAn",arguments),B.q0.isApntagDefined()?(B.q0.setTargetingForAst(e),s.emit(L,B.q0.getAllTargeting())):(0,a.logError)("window.apntag is not defined on the page")},Z.renderAd=(0,k.z3)("async",(function(e,n,t){if((0,a.logInfo)("Invoking pbjs.renderAd",arguments),(0,a.logMessage)("Calling renderAd with adId :"+n),n)try{var r=l.K.findBidByAdId(n);if(!r){var i="Error trying to write ad. Cannot find ad by given id : ".concat(n);return void y({reason:J,message:i,id:n})}if(r.status===f.UE.fe&&((0,a.logWarn)("Ad id ".concat(r.adId," has been rendered before")),s.emit(K,r),(0,u.Z)(v.vc.getConfig("auctionOptions"),"suppressStaleRender")))return;if(r.ad=(0,a.replaceAuctionPrice)(r.ad,r.originalCpm||r.cpm),r.adUrl=(0,a.replaceAuctionPrice)(r.adUrl,r.originalCpm||r.cpm),t&&t.clickThrough){var o=t.clickThrough;r.ad=(0,a.replaceClickThrough)(r.ad,o),r.adUrl=(0,a.replaceClickThrough)(r.adUrl,o)}l.K.addWinningBid(r),s.emit(F,r);var c=r.height,d=r.width,g=r.ad,h=r.mediaType,m=r.adUrl,b=r.renderer,E=r.adUnitCode,C=Z.adUnits.filter((function(e){return e.code===E})),A=Z.videoModule;if(C.video&&A)return void A.renderBid(C.video.divId,r);if(!e){var T="Error trying to write ad Id :".concat(n," to the page. Missing document");return void y({reason:Y,message:T,id:n})}var I=document.createComment("Creative ".concat(r.creativeId," served by ").concat(r.bidder," Prebid.js Header Bidding"));if((0,a.insertElement)(I,e,"html"),(0,p.Pd)(b))(0,p._U)(b,r,e),de(I,e,"html"),w({doc:e,bid:r,id:n});else if(e===document&&!(0,a.inIframe)()||"video"===h){var O="Error trying to write ad. Ad render call ad id ".concat(n," was prevented from writing to the main document.");y({reason:H,message:O,bid:r,id:n})}else if(g)e.write(g),e.close(),$(e,d,c),de(I,e,"html"),(0,a.callBurl)(r),w({doc:e,bid:r,id:n});else if(m){var S=(0,a.createInvisibleIframe)();S.height=c,S.width=d,S.style.display="inline",S.style.overflow="hidden",S.src=m,(0,a.insertElement)(S,e,"body"),$(e,d,c),de(I,e,"html"),(0,a.callBurl)(r),w({doc:e,bid:r,id:n})}else{var B="Error trying to write ad. No ad for bid response id: ".concat(n);y({reason:V,message:B,bid:r,id:n})}}catch(e){var k="Error trying to write ad Id :".concat(n," to the page:").concat(e.message);y({reason:Q,message:k,id:n})}else{var U="Error trying to write ad Id :".concat(n," to the page. Missing adId");y({reason:Y,message:U,id:n})}})),Z.removeAdUnit=function(e){((0,a.logInfo)("Invoking pbjs.removeAdUnit",arguments),e)?((0,a.isArray)(e)?e:[e]).forEach((function(e){for(var n=Z.adUnits.length-1;n>=0;n--)Z.adUnits[n].code===e&&Z.adUnits.splice(n,1)})):Z.adUnits=[]},Z.requestBids=(ue=(0,k.z3)("async",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.bidsBackHandler,t=e.timeout,i=e.adUnits,o=e.adUnitCodes,u=e.labels,c=e.auctionId,d=e.ttlBuffer,f=e.ortb2,l=e.metrics,p=e.defer;s.emit(z);var h=t||v.vc.getConfig("bidderTimeout");(0,a.logInfo)("Invoking pbjs.requestBids",arguments),o&&o.length?i=i.filter((function(e){return(0,g.q9)(o,e.code)})):o=i&&i.map((function(e){return e.code}));var m={global:(0,a.mergeDeep)({},v.vc.getAnyConfig("ortb2")||{},f||{}),bidder:Object.fromEntries(Object.entries(v.vc.getBidderConfig()).map((function(e){var n=(0,r.Z)(e,2);return[n[0],n[1].ortb2]})).filter((function(e){var n=(0,r.Z)(e,2);return n[0],null!=n[1]})))};return(0,x.S)(D.Z.resolve(m.global)).then((function(e){return m.global=e,fe({bidsBackHandler:n,timeout:h,adUnits:i,adUnitCodes:o,labels:u,auctionId:c,ttlBuffer:d,ortb2Fragments:m,metrics:l,defer:p})}))}),"requestBids"),(0,k.IF)(ue,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.adUnits||Z.adUnits;return e.adUnits=(0,a.isArray)(n)?n.slice():[n],e.metrics=(0,q.V6)(),e.metrics.checkpoint("requestBids"),e.defer=(0,D.P)({promiseFactory:function(e){return new Promise(e)}}),ue.call(this,e),e.defer.promise})));var fe=(0,k.z3)("async",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.bidsBackHandler,t=e.timeout,r=e.adUnits,i=e.ttlBuffer,o=e.adUnitCodes,u=e.labels,s=e.auctionId,d=e.ortb2Fragments,f=e.metrics,p=e.defer,h=(0,P.uV)(v.vc.getConfig("s2sConfig")||[]);function m(e,t,r){if("function"==typeof n)try{n(e,t,r)}catch(e){(0,a.logError)("Error executing bidsBackHandler",null,e)}p.resolve({bids:e,timedOut:t,auctionId:r})}if((r=(0,q.Bf)(f).measureTime("requestBids.validate",(function(){return ce(r)}))).forEach((function(e){var n,t,r=Object.keys(e.mediaTypes||{banner:"banner"}),o=e.bids.map((function(e){return e.bidder})),u=P.ZP.bidderRegistry,s=o.filter((function(e){return!h.has(e)})),d=(null===(n=e.ortb2Imp)||void 0===n||null===(t=n.ext)||void 0===t?void 0:t.tid)||(0,a.generateUUID)();e.transactionId=d,null==i||e.hasOwnProperty("ttlBuffer")||(e.ttlBuffer=i),(0,c.N)(e,"ortb2Imp.ext.tid",d),s.forEach((function(n){var t=u[n],i=t&&t.getSpec&&t.getSpec(),o=i&&i.supportedMediaTypes||["banner"];r.some((function(e){return(0,g.q9)(o,e)}))?j.f.incrementBidderRequestsCounter(e.code,n):((0,a.logWarn)((0,a.unsupportedBidderMessage)(e,n)),e.bids=e.bids.filter((function(e){return e.bidder!==n})))})),j.f.incrementRequestsCounter(e.code)})),r&&0!==r.length){var b=l.K.createAuction({adUnits:r,adUnitCodes:o,callback:m,cbTimeout:t,labels:u,auctionId:s,ortb2Fragments:d,metrics:f}),y=r.length;y>15&&(0,a.logInfo)("Current auction ".concat(b.getAuctionId()," contains ").concat(y," adUnits."),r),o.forEach((function(e){return B.q0.setLatestAuctionForAdUnit(e,b.getAuctionId())})),b.callBids()}else(0,a.logMessage)("No adUnits configured. No bids requested."),m()}),"startAuction");Z.requestBids.before((function(e,n){function t(e){for(var n;n=e.shift();)n()}t(R.Ld),t(le),e.call(this,n)}),49),Z.addAdUnits=function(e){(0,a.logInfo)("Invoking pbjs.addAdUnits",arguments),Z.adUnits.push.apply(Z.adUnits,(0,a.isArray)(e)?e:[e]),s.emit(W)},Z.onEvent=function(e,n,t){(0,a.logInfo)("Invoking pbjs.onEvent",arguments),(0,a.isFn)(n)?!t||X[e].call(null,t)?s.on(e,n,t):(0,a.logError)('The id provided is not valid for event "'+e+'" and no handler was set.'):(0,a.logError)('The event handler provided is not a function and was not set on event "'+e+'".')},Z.offEvent=function(e,n,t){(0,a.logInfo)("Invoking pbjs.offEvent",arguments),t&&!X[e].call(null,t)||s.off(e,n,t)},Z.getEvents=function(){return(0,a.logInfo)("Invoking pbjs.getEvents"),s.getEvents()},Z.registerBidAdapter=function(e,n){(0,a.logInfo)("Invoking pbjs.registerBidAdapter",arguments);try{P.ZP.registerBidAdapter(e(),n)}catch(e){(0,a.logError)("Error registering bidder adapter : "+e.message)}},Z.registerAnalyticsAdapter=function(e){(0,a.logInfo)("Invoking pbjs.registerAnalyticsAdapter",arguments);try{P.ZP.registerAnalyticsAdapter(e)}catch(e){(0,a.logError)("Error registering analytics adapter : "+e.message)}},Z.createBid=function(e){return(0,a.logInfo)("Invoking pbjs.createBid",arguments),(0,_.m)(e)};var le=[],ge=(0,k.z3)("async",(function(e){e&&!(0,a.isEmpty)(e)?((0,a.logInfo)("Invoking pbjs.enableAnalytics for: ",e),P.ZP.enableAnalytics(e)):(0,a.logError)("pbjs.enableAnalytics should be called with option {}")}),"enableAnalyticsCb");function pe(e){e.forEach((function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e){(0,a.logError)("Error processing command :","prebid.js",e)}}))}Z.enableAnalytics=function(e){le.push(ge.bind(this,e))},Z.aliasBidder=function(e,n,t){(0,a.logInfo)("Invoking pbjs.aliasBidder",arguments),e&&n?P.ZP.aliasBidAdapter(e,n,t):(0,a.logError)("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},Z.aliasRegistry=P.ZP.aliasRegistry,v.vc.getConfig("aliasRegistry",(function(e){"private"===e.aliasRegistry&&delete Z.aliasRegistry})),Z.getAllWinningBids=function(){return l.K.getAllWinningBids()},Z.getAllPrebidWinningBids=function(){return l.K.getBidsReceived().filter((function(e){return e.status===f.UE.CK}))},Z.getHighestCpmBids=function(e){return B.q0.getWinningBids(e)},Z.markWinningBidAsUsed=function(e){var n=[];e.adUnitCode&&e.adId?n=l.K.getBidsReceived().filter((function(n){return n.adId===e.adId&&n.adUnitCode===e.adUnitCode})):e.adUnitCode?n=B.q0.getWinningBids(e.adUnitCode):e.adId?n=l.K.getBidsReceived().filter((function(n){return n.adId===e.adId})):(0,a.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."),n.length>0&&(n[0].status=f.UE.fe)},Z.getConfig=v.vc.getAnyConfig,Z.readConfig=v.vc.readAnyConfig,Z.mergeConfig=v.vc.mergeConfig,Z.mergeBidderConfig=v.vc.mergeBidderConfig,Z.setConfig=v.vc.setConfig,Z.setBidderConfig=v.vc.setBidderConfig,Z.que.push((function(){window.addEventListener("message",I,!1)})),Z.cmd.push=function(e){if("function"==typeof e)try{e.call()}catch(e){(0,a.logError)("Error processing command :",e.message,e.stack)}else(0,a.logError)("Commands written into pbjs.cmd.push must be wrapped in a function")},Z.que.push=Z.cmd.push,Z.processQueue=function(){k.z3.ready(),pe(Z.que),pe(Z.cmd)}},78640:function(e,n,t){t.d(n,{R:function(){return o},z:function(){return a}});var r=window,i=r.pbjs=r.pbjs||{};function o(){return i}function a(e){i.installedModules.push(e)}i.cmd=i.cmd||[],i.que=i.que||[],r===window&&(r._pbjsGlobals=r._pbjsGlobals||[],r._pbjsGlobals.push("pbjs"))},25102:function(e,n,t){t.d(n,{hh:function(){return a},nH:function(){return s}});var r=t(3193),i=t(64358);function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;if(!e)return e;if(/\w+:\/\//.exec(e))return e;var t=n.location.protocol;try{t=n.top.location.protocol}catch(e){}return/^\/\//.exec(e)?t+e:"".concat(t,"//").concat(e)}function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.noLeadingWww,r=void 0!==t&&t,i=n.noPort,a=void 0!==i&&i;try{e=new URL(o(e))}catch(e){return}return e=a?e.hostname:e.host,r&&e.startsWith("www.")&&(e=e.substring(4)),e}function u(e){try{var n=e.querySelector("link[rel='canonical']");if(null!==n)return n.href}catch(e){}return null}var c,s=function(e){var n,t,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return i.top!==i?e:function(){var o=u(i.document),a=i.location.href;return n===o&&a===t||(n=o,t=a,r=e()),r}}((c=window,function(){var e,n,t,s,d=[],f=function(e){try{if(!e.location.ancestorOrigins)return;return e.location.ancestorOrigins}catch(e){}}(c),l=r.vc.getConfig("maxNestedIframes"),g=!1,p=0,v=!1,h=!1,m=!1;do{var b=e,y=h,w=void 0,E=!1,C=null;h=!1,e=e?e.parent:c;try{w=e.location.href||null}catch(e){E=!0}if(E)if(y){var A=b.context;try{n=C=A.sourceUrl,m=!0,v=!0,e===c.top&&(g=!0),A.canonicalUrl&&(t=A.canonicalUrl)}catch(e){}}else{(0,i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");try{var T=b.document.referrer;T&&(C=T,e===c.top&&(g=!0))}catch(e){}!C&&f&&f[p-1]&&(C=f[p-1],e===c.top&&(m=!0)),C&&!v&&(n=C)}else{if(w&&(n=C=w,v=!1,e===c.top)){g=!0;var I=u(e.document);I&&(t=I)}e.context&&e.context.sourceUrl&&(h=!0)}d.push(C),p++}while(e!==c.top&&p<l);d.reverse();try{s=c.top.document.referrer}catch(e){}var O=g||m?n:null,S=r.vc.getConfig("pageUrl")||t||null,B=r.vc.getConfig("pageUrl")||O||o(S,c);return O&&O.indexOf("?")>-1&&-1===B.indexOf("?")&&(B="".concat(B).concat(O.substring(O.indexOf("?")))),{reachedTop:g,isAmp:v,numIframes:p-1,stack:d,topmostLocation:n||null,location:O,canonicalUrl:S,page:B,domain:a(B)||null,ref:s||null,legacy:{reachedTop:g,isAmp:v,numIframes:p-1,stack:d,referer:n||null,canonicalUrl:S}}}))},15164:function(e,n,t){t.d(n,{Dp:function(){return u},Ld:function(){return s},S6:function(){return f},c$:function(){return c},df:function(){return l},eA:function(){return g}});var r=t(92797),i=t(64358),o=t(55975),a=t(9633),u="html5",c="cookie",s=[];function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.moduleName,t=e.moduleType,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=r.bidderSettings,l=void 0===d?o.S:d;function g(e){if(t!==a.UL)return!0;var r=l.get(n,"storageAllowed");return r&&!0!==r?Array.isArray(r)?r.some((function(n){return n===e})):r===e:!!r}function p(e,r){if(g(r)){var o;return f(t,n,{hasEnforcementHook:!1},(function(n){if(n&&n.hasEnforcementHook)o=e(n);else{var t={hasEnforcementHook:!1,valid:(0,i.hasDeviceAccess)()};o=e(t)}})),o}(0,i.logInfo)("bidderSettings denied access to device storage for bidder '".concat(n,"'"));return e({valid:!1})}function v(e,n,t){if(!t||"function"!=typeof t)return p(e,n);s.push((function(){var r=p(e,n);t(r)}))}var h=function(e,n,t,r,i,o){return v((function(o){if(o&&o.valid){var a=i&&""!==i?" ;domain=".concat(encodeURIComponent(i)):"",u=t&&""!==t?" ;expires=".concat(t):"",c=null!=r&&"none"==r.toLowerCase()?"; Secure":"";document.cookie="".concat(e,"=").concat(encodeURIComponent(n)).concat(u,"; path=/").concat(a).concat(r?"; SameSite=".concat(r):"").concat(c)}}),c,o)},m=function(e,n){return v((function(n){if(n&&n.valid){var t=window.document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]*)\\s*(;|$)");return t?decodeURIComponent(t[2]):null}return null}),c,n)},b=function(e){return v((function(e){if(e&&e.valid)try{return localStorage.setItem("prebid.cookieTest","1"),"1"===localStorage.getItem("prebid.cookieTest")}catch(e){}finally{try{localStorage.removeItem("prebid.cookieTest")}catch(e){}}return!1}),u,e)},y=function(e){return v((function(e){return!(!e||!e.valid)&&(0,i.checkCookieSupport)()}),c,e)},w=function(e,n,t){return v((function(t){t&&t.valid&&A()&&window.localStorage.setItem(e,n)}),u,t)},E=function(e,n){return v((function(n){return n&&n.valid&&A()?window.localStorage.getItem(e):null}),u,n)},C=function(e,n){return v((function(n){n&&n.valid&&A()&&window.localStorage.removeItem(e)}),u,n)},A=function(e){return v((function(e){if(e&&e.valid)try{return!!window.localStorage}catch(e){(0,i.logError)("Local storage api disabled")}return!1}),u,e)},T=function(e,n){return v((function(n){if(n&&n.valid){var t=[];if((0,i.hasDeviceAccess)())for(var r=document.cookie.split(";");r.length;){var o=r.pop(),a=o.indexOf("=");a=a<0?o.length:a,decodeURIComponent(o.slice(0,a).replace(/^\s+/,"")).indexOf(e)>=0&&t.push(decodeURIComponent(o.slice(a+1)))}return t}}),c,n)};return{setCookie:h,getCookie:m,localStorageIsEnabled:b,cookiesAreEnabled:y,setDataInLocalStorage:w,getDataFromLocalStorage:E,removeDataFromLocalStorage:C,hasLocalStorage:A,findSimilarCookies:T}}var f=(0,r.z3)("async",(function(e,n,t,r){r(t)}),"validateStorageEnforcement");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.moduleType,t=e.moduleName,r=e.bidderCode;function i(){throw new Error("Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName")}return r?((n&&n!==a.UL||t)&&i(),n=a.UL,t=r):t&&n||i(),d({moduleType:n,moduleName:t})}function g(e){return d({moduleName:e,moduleType:a.ic})}},18621:function(e,n,t){t.d(n,{TL:function(){return C},bP:function(){return T},ol:function(){return A},q0:function(){return I}});var r=t(4942),i=t(89062),o=t(64358),a=t(20265),u=t(3193),c=t(70059),s=t(78653),d=t(24679),f=t(92797),l=t(55975),g=t(34614),p=t(5644),v=[],h=1;u.vc.getConfig("ttlBuffer",(function(e){"number"==typeof e.ttlBuffer?h=e.ttlBuffer:(0,o.logError)("Invalid value for ttlBuffer",e.ttlBuffer)}));var m="targetingControls.allowTargetingKeys",b="targetingControls.addTargetingKeys",y='Only one of "'.concat(m,'" or "').concat(b,'" can be set'),w=Object.keys(p.TD).map((function(e){return p.TD[e]})),E={isActualBid:function(e){return e.getStatusCode()===p.Q_.GOOD},isBidNotExpired:function(e){return e.responseTimestamp+1e3*(e.ttl-(e.hasOwnProperty("ttlBuffer")?e.ttlBuffer:h))>(0,o.timestamp)()},isUnusedBid:function(e){return e&&(e.status&&!(0,g.q9)([p.UE.fe],e.status)||!e.status)}};function C(e){return!Object.values(E).some((function(n){return!n(e)}))}var A=(0,f.z3)("sync",(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!r){var a=[],c=u.vc.getConfig("sendBidsControl.dealPrioritization"),s=(0,o.groupBy)(e,"adUnitCode");return Object.keys(s).forEach((function(e){var r=[],u=(0,o.groupBy)(s[e],"bidderCode");Object.keys(u).forEach((function(e){return r.push(u[e].reduce(n))})),t>0?(r=c?r.sort(T(!0)):r.sort((function(e,n){return n.cpm-e.cpm})),a.push.apply(a,(0,i.Z)(r.slice(0,t)))):a.push.apply(a,(0,i.Z)(r))})),a}return e}));function T(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(n,t){return void 0!==n.adserverTargeting.hb_deal&&void 0===t.adserverTargeting.hb_deal?-1:void 0===n.adserverTargeting.hb_deal&&void 0!==t.adserverTargeting.hb_deal?1:e?t.cpm-n.cpm:t.adserverTargeting.hb_pb-n.adserverTargeting.hb_pb}}var I=function(e){var n={},t={};function s(e,n){return e.adserverTargeting&&n&&((0,o.isArray)(n)&&(0,g.q9)(n,e.adUnitCode)||"string"==typeof n&&e.adUnitCode===n)}function f(e,n){if(!0===u.vc.getConfig("targetingControls.alwaysIncludeDeals")){var t=w.concat(c.xc);return A(n,o.getHighestCpm).map((function(n){if(n.dealId&&s(n,e))return(0,r.Z)({},n.adUnitCode,q(n,t.filter((function(e){return void 0!==n.adserverTargeting[e]}))))})).filter((function(e){return e}))}return[]}function h(e,n){var t=Object.assign({},p.TD,p.FY),r=Object.keys(t),i={};(0,o.logInfo)("allowTargetingKeys - allowed keys [ ".concat(n.map((function(e){return t[e]})).join(", ")," ]")),e.map((function(e){var o=Object.keys(e)[0],a=e[o].filter((function(e){var o=Object.keys(e)[0],a=0===r.filter((function(e){return 0===o.indexOf(t[e])})).length||(0,g.sE)(n,(function(e){var n=t[e];return 0===o.indexOf(n)}));return i[o]=!a,a}));e[o]=a}));var a=Object.keys(i).filter((function(e){return i[e]}));return(0,o.logInfo)("allowTargetingKeys - removed keys [ ".concat(a.join(", ")," ]")),e.filter((function(e){return e[Object.keys(e)[0]].length>0}))}function E(e,n){var t=(0,o.deepClone)(e);return Object.keys(t).map((function(e){return{adUnitCode:e,adserverTargeting:t[e]}})).sort(T()).reduce((function(e,r,i,a){var u,c=(u=r.adserverTargeting,Object.keys(u).reduce((function(e,n){return e+"".concat(n,"%3d").concat(encodeURIComponent(u[n]),"%26")}),""));i+1===a.length&&(c=c.slice(0,-3));var s=r.adUnitCode,d=c.length;return d<=n?(n-=d,(0,o.logInfo)("AdUnit '".concat(s,"' auction keys comprised of ").concat(d," characters.  Deducted from running threshold; new limit is ").concat(n),t[s]),e[s]=t[s]):(0,o.logWarn)("The following keys for adUnitCode '".concat(s,"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d,", the current allotted amount was ").concat(n,".\n"),t[s]),i+1===a.length&&0===Object.keys(e).length&&(0,o.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),e}),{})}function I(e){var n=e.map((function(e){return(0,r.Z)({},Object.keys(e)[0],e[Object.keys(e)[0]].map((function(e){return(0,r.Z)({},Object.keys(e)[0],e[Object.keys(e)[0]].join(","))})).reduce((function(e,n){return Object.assign(n,e)}),{}))})).reduce((function(e,n){var t=Object.keys(n)[0];return e[t]=Object.assign({},e[t],n[t]),e}),{});return n}function O(n){return"string"==typeof n?[n]:(0,o.isArray)(n)?n:e.getAdUnitCodes()||[]}function S(){var n=e.getBidsReceived();if(u.vc.getConfig("useBidCache")){var r=u.vc.getConfig("bidCacheFilterFunction");"function"==typeof r&&(n=n.filter((function(e){return t[e.adUnitCode]===e.auctionId||!!r(e)})))}else n=n.filter((function(e){return t[e.adUnitCode]===e.auctionId}));return n=n.filter((function(e){return(0,a.Z)(e,"video.context")!==d.Oh})).filter(C),A(n,o.getOldestHighestCpmBid)}function B(e,t){var o=n.getWinningBids(e,t),a=k();return o=o.map((function(e){return(0,r.Z)({},e.adUnitCode,Object.keys(e.adserverTargeting).filter((function(n){return void 0===e.sendStandardTargeting||e.sendStandardTargeting||-1===a.indexOf(n)})).reduce((function(n,t){var o=[e.adserverTargeting[t]],a=(0,r.Z)({},t.substring(0,20),o);if(t===p.TD.DEAL){var u="".concat(t,"_").concat(e.bidderCode).substring(0,20),c=(0,r.Z)({},u,o);return[].concat((0,i.Z)(n),[a,c])}return[].concat((0,i.Z)(n),[a])}),[]))})),o}function k(){return e.getStandardBidderAdServerTargeting().map((function(e){return e.key})).concat(w).filter(o.uniques)}function U(e,n,t,r){return Object.keys(n.adserverTargeting).filter(j()).forEach((function(t){e.length&&e.filter(function(e){return function(t){return t.adUnitCode===n.adUnitCode&&t.adserverTargeting[e]}}(t)).forEach(function(e){return function(t){(0,o.isArray)(t.adserverTargeting[e])||(t.adserverTargeting[e]=[t.adserverTargeting[e]]),t.adserverTargeting[e]=t.adserverTargeting[e].concat(n.adserverTargeting[e]).filter(o.uniques),delete n.adserverTargeting[e]}}(t))})),e.push(n),e}function j(){var e=k();return e=e.concat(c.xc),function(n){return-1===e.indexOf(n)}}function _(e){return(0,r.Z)({},e.adUnitCode,Object.keys(e.adserverTargeting).filter(j()).map((function(n){return(0,r.Z)({},n.substring(0,20),[e.adserverTargeting[n]])})))}function R(e,n){return n.filter((function(n){return(0,g.q9)(e,n.adUnitCode)})).map((function(e){return Object.assign({},e)})).reduce(U,[]).map(_).filter((function(e){return e}))}function P(e,n){var t=w.concat(c.xc),i=u.vc.getConfig("sendBidsControl.bidLimit"),a=A(n,o.getHighestCpm,i),d=u.vc.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),f=d?d.map((function(e){return p.TD[e]})):t;return a.map((function(n){if(s(n,e))return(0,r.Z)({},n.adUnitCode,q(n,t.filter((function(e){return void 0!==n.adserverTargeting[e]&&-1!==f.indexOf(e)}))))})).filter((function(e){return e}))}function q(e,n){return n.map((function(n){return(0,r.Z)({},"".concat(n,"_").concat(e.bidderCode).substring(0,20),[e.adserverTargeting[n]])}))}function D(n){function t(e){return(0,a.Z)(e,p.k2.xn)}return e.getAdUnits().filter((function(e){return(0,g.q9)(n,e.code)&&t(e)})).map((function(e){return(0,r.Z)({},e.code,function(e){var n=t(e);return Object.keys(n).map((function(e){return(0,o.isStr)(n[e])&&(n[e]=n[e].split(",").map((function(e){return e.trim()}))),(0,o.isArray)(n[e])||(n[e]=[n[e]]),(0,r.Z)({},e,n[e])}))}(e))}))}return n.setLatestAuctionForAdUnit=function(e,n){t[e]=n},n.resetPresetTargeting=function(n,t){if((0,o.isGptPubadsDefined)()){var r=O(n),i=e.getAdUnits().filter((function(e){return(0,g.q9)(r,e.code)})),a=v.reduce((function(e,n){return e[n]=null,e}),{});window.googletag.pubads().getSlots().forEach((function(e){var n=(0,o.isFn)(t)&&t(e);i.forEach((function(t){(t.code===e.getAdUnitPath()||t.code===e.getSlotElementId()||(0,o.isFn)(n)&&n(t.code))&&e.updateTargetingFromMap(a)}))}))}},n.resetPresetTargetingAST=function(e){O(e).forEach((function(e){var n=window.apntag.getTag(e);if(n&&n.keywords){var t=Object.keys(n.keywords),r={};t.forEach((function(e){(0,g.q9)(v,e.toLowerCase())||(r[e]=n.keywords[e])})),window.apntag.modifyTag(e,{keywords:r})}}))},n.getAllTargeting=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S(),t=O(e),r=B(t,n).concat(R(t,n)).concat(u.vc.getConfig("enableSendAllBids")?P(t,n):f(t,n)).concat(D(t));r.map((function(e){Object.keys(e).map((function(n){e[n].map((function(e){-1===v.indexOf(Object.keys(e)[0])&&(v=Object.keys(e).concat(v))}))}))}));var i=Object.keys(Object.assign({},p.kF,p.FY)),a=u.vc.getConfig(m),c=u.vc.getConfig(b);if(null!=c&&null!=a)throw new Error(y);a=null!=c?i.concat(c):a||i,Array.isArray(a)&&a.length>0&&(r=h(r,a)),r=I(r);var s=u.vc.getConfig("targetingControls.auctionKeyMaxChars");return s&&((0,o.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(s," characters.  Running checks on auction keys...")),r=E(r,s)),t.forEach((function(e){r[e]||(r[e]={})})),r},u.vc.getConfig("targetingControls",(function(e){null!=(0,a.Z)(e,m)&&null!=(0,a.Z)(e,b)&&(0,o.logError)(y)})),n.setTargetingForGPT=function(e,n){window.googletag.pubads().getSlots().forEach((function(t){Object.keys(e).filter(n?n(t):(0,o.isAdUnitCodeMatchingSlot)(t)).forEach((function(n){Object.keys(e[n]).forEach((function(t){var r=e[n][t];"string"==typeof r&&-1!==r.indexOf(",")&&(r=r.split(",")),e[n][t]=r})),(0,o.logMessage)("Attempting to set targeting-map for slot: ".concat(t.getSlotElementId()," with targeting-map:"),e[n]),t.updateTargetingFromMap(e[n])}))}))},n.getWinningBids=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S(),t=O(e);return n.filter((function(e){return(0,g.q9)(t,e.adUnitCode)})).filter((function(e){return!0===l.S.get(e.bidderCode,"allowZeroCpmBids")?e.cpm>=0:e.cpm>0})).map((function(e){return e.adUnitCode})).filter(o.uniques).map((function(e){return n.filter((function(n){return n.adUnitCode===e?n:null})).reduce(o.getHighestCpm)}))},n.setTargetingForAst=function(e){var t=n.getAllTargeting(e);try{n.resetPresetTargetingAST(e)}catch(e){(0,o.logError)("unable to reset targeting for AST"+e)}Object.keys(t).forEach((function(e){return Object.keys(t[e]).forEach((function(n){if((0,o.logMessage)("Attempting to set targeting for targetId: ".concat(e," key: ").concat(n," value: ").concat(t[e][n])),(0,o.isStr)(t[e][n])||(0,o.isArray)(t[e][n])){var r={};n.search(/pt[0-9]/)<0?r[n.toUpperCase()]=t[e][n]:r[n]=t[e][n],window.apntag.setKeywords(e,r,{overrideKeyValue:!0})}}))}))},n.isApntagDefined=function(){if(window.apntag&&(0,o.isFn)(window.apntag.setKeywords))return!0},n}(s.K)},11974:function(e,n,t){t.d(n,{k_:function(){return d},oS:function(){return c}});var r=t(93324),i=t(64358),o=t(3193),a=t(34614),u=t(15164),c={syncEnabled:!0,filterSettings:{image:{bidders:"*",filter:"include"}},syncsPerBidder:5,syncDelay:3e3,auctionDelay:0};o.vc.setDefaults({userSync:(0,i.deepClone)(c)});var s=(0,u.eA)("usersync");var d=function(e){var n={},t={image:[],iframe:[]},u=new Set,c={},s={image:!0,iframe:!1},d=e.config;function f(){if(d.syncEnabled&&e.browserSupportsCookies){try{!function(){if(!s.iframe)return;l(t.iframe,(function(e){var n=(0,r.Z)(e,2),o=n[0],a=n[1];(0,i.logMessage)("Invoking iframe user sync for bidder: ".concat(o)),(0,i.insertUserSyncIframe)(a),function(e,n){e.image=e.image.filter((function(e){return e[0]!==n}))}(t,o)}))}(),function(){if(!s.image)return;l(t.image,(function(e){var n=(0,r.Z)(e,2),t=n[0],o=n[1];(0,i.logMessage)("Invoking image pixel user sync for bidder: ".concat(t)),(0,i.triggerPixel)(o)}))}()}catch(e){return(0,i.logError)("Error firing user syncs",e)}t={image:[],iframe:[]}}}function l(e,n){(0,i.shuffle)(e).forEach(n)}function g(e,n){var t=d.filterSettings;if(function(e,n){if(e.all&&e[n])return(0,i.logWarn)('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(n,'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')),!1;var t=e.all?e.all:e[n],r=e.all?"all":n;if(!t)return!1;var o=t.filter,a=t.bidders;if(o&&"include"!==o&&"exclude"!==o)return(0,i.logWarn)('UserSync "filterSettings.'.concat(r,".filter\" setting '").concat(o,"' is not a valid option; use either 'include' or 'exclude'.")),!1;if("*"!==a&&!(Array.isArray(a)&&a.length>0&&a.every((function(e){return(0,i.isStr)(e)&&"*"!==e}))))return(0,i.logWarn)('Detected an invalid setup in userSync "filterSettings.'.concat(r,".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")),!1;return!0}(t,e)){s[e]=!0;var r=t.all?t.all:t[e],o="*"===r.bidders?[n]:r.bidders,u={include:function(e,n){return!(0,a.q9)(e,n)},exclude:function(e,n){return(0,a.q9)(e,n)}};return u[r.filter||"include"](o,n)}return!s[e]}return o.vc.getConfig("userSync",(function(e){if(e.userSync){var n=e.userSync.filterSettings;(0,i.isPlainObject)(n)&&(n.image||n.all||(e.userSync.filterSettings.image={bidders:"*",filter:"include"}))}d=Object.assign(d,e.userSync)})),n.registerSync=function(e,r,o){return u.has(r)?(0,i.logMessage)('already fired syncs for "'.concat(r,'", ignoring registerSync call')):d.syncEnabled&&(0,i.isArray)(t[e])?r?0!==d.syncsPerBidder&&Number(c[r])>=d.syncsPerBidder?(0,i.logWarn)('Number of user syncs exceeded for "'.concat(r,'"')):n.canBidderRegisterSync(e,r)?(t[e].push([r,o]),void(c=function(e,n){return e[n]?e[n]+=1:e[n]=1,e}(c,r))):(0,i.logWarn)('Bidder "'.concat(r,'" not permitted to register their "').concat(e,'" userSync pixels.')):(0,i.logWarn)("Bidder is required for registering sync"):(0,i.logWarn)('User sync type "'.concat(e,'" not supported'))},n.bidderDone=u.add.bind(u),n.syncUsers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e)return setTimeout(f,Number(e));f()},n.triggerUserSyncs=function(){d.enableOverride&&n.syncUsers()},n.canBidderRegisterSync=function(e,n){return!d.filterSettings||!g(e,n)},n}(Object.defineProperties({config:o.vc.getConfig("userSync")},{browserSupportsCookies:{get:function(){return!(0,i.isSafariBrowser)()&&s.cookiesAreEnabled()}}}))},64358:function(e,n,t){t.r(n),t.d(n,{_each:function(){return le},_map:function(){return pe},_setEventEmitter:function(){return T},adUnitsFilter:function(){return Ne},bind:function(){return j},buildUrl:function(){return An},callBurl:function(){return ye},checkCookieSupport:function(){return Ve},chunk:function(){return hn},cleanObj:function(){return dn},compareOn:function(){return yn},contains:function(){return ge},convertCamelToUnderscore:function(){return sn},convertTypes:function(){return gn},createInvisibleIframe:function(){return ne},createTrackPixelHtml:function(){return Ce},createTrackPixelIframeHtml:function(){return Ae},cyrb53Hash:function(){return On},debugTurnedOn:function(){return ee},deepAccess:function(){return v.Z},deepClone:function(){return Me},deepEqual:function(){return Tn},deepSetValue:function(){return h.N},delayExecution:function(){return Qe},escapeUnsafeChars:function(){return _n},fill:function(){return vn},flatten:function(){return Oe},formatQS:function(){return En},generateUUID:function(){return P},getAdUnitSizes:function(){return N},getBidIdParameter:function(){return q},getBidRequest:function(){return Se},getBidderCodes:function(){return je},getDNT:function(){return en},getDefinedParams:function(){return Ye},getGptSlotForAdUnitCode:function(){return on},getGptSlotInfoForAdUnitCode:function(){return an},getHighestCpm:function(){return Pe},getKeyByValue:function(){return Ue},getKeys:function(){return Be},getLatestHighestCpmBid:function(){return De},getMaxValueFromArray:function(){return bn},getMinValueFromArray:function(){return mn},getOldestHighestCpmBid:function(){return qe},getParameterByName:function(){return te},getPerformanceNow:function(){return Ge},getPrebidInternal:function(){return B},getUniqueIdentifierStr:function(){return R},getUserConfiguredParams:function(){return $e},getValue:function(){return ke},getValueString:function(){return Te},getWindowFromDocument:function(){return Sn},getWindowLocation:function(){return G},getWindowSelf:function(){return K},getWindowTop:function(){return L},groupBy:function(){return Je},hasConsoleLogger:function(){return $},hasDeviceAccess:function(){return He},hasOwn:function(){return ve},inIframe:function(){return We},insertElement:function(){return he},insertHtmlIntoIframe:function(){return we},insertUserSyncIframe:function(){return Ee},internal:function(){return O},isA:function(){return re},isAdUnitCodeMatchingSlot:function(){return tn},isApnGetTagDefined:function(){return Re},isArray:function(){return ae},isArrayOfNums:function(){return pn},isBoolean:function(){return se},isEmpty:function(){return de},isEmptyStr:function(){return fe},isFn:function(){return ie},isGptPubadsDefined:function(){return _e},isInteger:function(){return cn},isNumber:function(){return ue},isPlainObject:function(){return ce},isSafariBrowser:function(){return Fe},isSlotMatchingAdUnitCode:function(){return rn},isStr:function(){return oe},isValidMediaTypes:function(){return Xe},logError:function(){return J},logInfo:function(){return V},logMessage:function(){return H},logWarn:function(){return Q},memoize:function(){return kn},mergeDeep:function(){return In},parseGPTSingleSizeArray:function(){return W},parseGPTSingleSizeArrayToRtbSize:function(){return F},parseQS:function(){return wn},parseQueryStringParameters:function(){return x},parseSizesInput:function(){return M},parseUrl:function(){return Cn},pick:function(){return fn},prefixLog:function(){return Y},replaceAuctionPrice:function(){return ze},replaceClickThrough:function(){return Le},safeJSONParse:function(){return Bn},setScriptAttributes:function(){return Un},shuffle:function(){return Ze},timestamp:function(){return Ke},transformAdServerTargetingObj:function(){return Z},transformBidderParamKeywords:function(){return ln},triggerPixel:function(){return be},tryAppendQueryString:function(){return D},uniques:function(){return Ie},unsupportedBidderMessage:function(){return un},waitForElementToLoad:function(){return me}});var r,i=t(93324),o=t(89062),a=t(4942),u=t(71002),c=t(3193),s=t(77079),d=t.n(s),f=t(34614),l=t(5644),g=t(68792),p=t(78640),v=t(20265),h=t(96475),m=Object.prototype.toString,b=Boolean(window.console),y=Boolean(b&&window.console.log),w=Boolean(b&&window.console.info),E=Boolean(b&&window.console.warn),C=Boolean(b&&window.console.error),A=(0,p.R)();function T(e){r=e}function I(){null!=r&&r.apply(void 0,arguments)}var O={checkCookieSupport:Ve,createTrackPixelIframeHtml:Ae,getWindowSelf:K,getWindowTop:L,getWindowLocation:G,insertUserSyncIframe:Ee,insertElement:he,isFn:ie,triggerPixel:be,logError:J,logWarn:Q,logMessage:H,logInfo:V,parseQS:wn,formatQS:En,deepEqual:Tn},S={};function B(){return S}var k,U={},j=function(e,n){return n}.bind(null,1,U)()===U?Function.prototype.bind:function(e){var n=this,t=Array.prototype.slice.call(arguments,1);return function(){return n.apply(e,t.concat(Array.prototype.slice.call(arguments)))}},_=(k=0,function(){return++k});function R(){return _()+Math.random().toString(16).substr(2)}function P(e){return e?(e^(window&&window.crypto&&window.crypto.getRandomValues?crypto.getRandomValues(new Uint8Array(1))[0]%16:16*Math.random())>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,P)}function q(e,n){return n&&n[e]?n[e]:""}function D(e,n,t){return t?e+n+"="+encodeURIComponent(t)+"&":e}function x(e){var n="";for(var t in e)e.hasOwnProperty(t)&&(n+=t+"="+encodeURIComponent(e[t])+"&");return n=n.replace(/&$/,"")}function Z(e){return e&&Object.getOwnPropertyNames(e).length>0?Be(e).map((function(n){return"".concat(n,"=").concat(encodeURIComponent(ke(e,n)))})).join("&"):""}function N(e){if(e){var n=[];if(e.mediaTypes&&e.mediaTypes.banner&&Array.isArray(e.mediaTypes.banner.sizes)){var t=e.mediaTypes.banner.sizes;Array.isArray(t[0])?n=t:n.push(t)}else Array.isArray(e.sizes)&&(Array.isArray(e.sizes[0])?n=e.sizes:n.push(e.sizes));return n}}function M(e){var n=[];if("string"==typeof e){var t=e.split(","),r=/^(\d)+x(\d)+$/i;if(t)for(var i in t)ve(t,i)&&t[i].match(r)&&n.push(t[i])}else if("object"===(0,u.Z)(e)){var o=e.length;if(o>0)if(2===o&&"number"==typeof e[0]&&"number"==typeof e[1])n.push(W(e));else for(var a=0;a<o;a++)n.push(W(e[a]))}return n}function W(e){if(z(e))return e[0]+"x"+e[1]}function F(e){if(z(e))return{w:e[0],h:e[1]}}function z(e){return ae(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1])}function L(){return window.top}function K(){return window.self}function G(){return window.location}function H(){ee()&&y&&console.log.apply(console,X(arguments,"MESSAGE:"))}function V(){ee()&&w&&console.info.apply(console,X(arguments,"INFO:"))}function Q(){ee()&&E&&console.warn.apply(console,X(arguments,"WARNING:")),I(l.FP.AUCTION_DEBUG,{type:"WARNING",arguments:arguments})}function J(){ee()&&C&&console.error.apply(console,X(arguments,"ERROR:")),I(l.FP.AUCTION_DEBUG,{type:"ERROR",arguments:arguments})}function Y(e){function n(n){return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];n.apply(void 0,[e].concat(r))}}return{logError:n(J),logWarn:n(Q),logMessage:n(H),logInfo:n(V)}}function X(e,n){e=[].slice.call(e);var t=c.vc.getCurrentBidder();return n&&e.unshift(n),t&&e.unshift(r("#aaa")),e.unshift(r("#3b88c3")),e.unshift("%cPrebid"+(t?"%c".concat(t):"")),e;function r(e){return"display: inline-block; color: #fff; background: ".concat(e,"; padding: 1px 4px; border-radius: 3px;")}}function $(){return y}function ee(){return!!c.vc.getConfig("debug")}function ne(){var e=document.createElement("iframe");return e.id=R(),e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e}function te(e){return wn(G().search)[e]||""}function re(e,n){return m.call(e)==="[object "+n+"]"}function ie(e){return re(e,"Function")}function oe(e){return re(e,"String")}function ae(e){return re(e,"Array")}function ue(e){return re(e,"Number")}function ce(e){return re(e,"Object")}function se(e){return re(e,"Boolean")}function de(e){if(!e)return!0;if(ae(e)||oe(e))return!(e.length>0);for(var n in e)if(hasOwnProperty.call(e,n))return!1;return!0}function fe(e){return oe(e)&&(!e||0===e.length)}function le(e,n){if(!de(e)){if(ie(e.forEach))return e.forEach(n,this);var t=0,r=e.length;if(r>0)for(;t<r;t++)n(e[t],t,e);else for(t in e)hasOwnProperty.call(e,t)&&n.call(this,e[t],t)}}function ge(e,n){if(de(e))return!1;if(ie(e.indexOf))return-1!==e.indexOf(n);for(var t=e.length;t--;)if(e[t]===n)return!0;return!1}function pe(e,n){if(de(e))return[];if(ie(e.map))return e.map(n);var t=[];return le(e,(function(r,i){t.push(n(r,i,e))})),t}function ve(e,n){return e.hasOwnProperty?e.hasOwnProperty(n):void 0!==e[n]&&e.constructor.prototype[n]!==e[n]}function he(e,n,t,r){var i;n=n||document,i=t?n.getElementsByTagName(t):n.getElementsByTagName("head");try{if((i=i.length?i:n.getElementsByTagName("body")).length){i=i[0];var o=r?null:i.firstChild;return i.insertBefore(e,o)}}catch(e){}}function me(e,n){var t=null;return new g.Z((function(r){var i=function n(){e.removeEventListener("load",n),e.removeEventListener("error",n),null!=t&&window.clearTimeout(t),r()};e.addEventListener("load",i),e.addEventListener("error",i),null!=n&&(t=window.setTimeout(i,n))}))}function be(e,n,t){var r=new Image;n&&O.isFn(n)&&me(r,t).then(n),r.src=e}function ye(e){var n=e.source,t=e.burl;n===l.os.YZ&&t&&O.triggerPixel(t)}function we(e){if(e){var n=document.createElement("iframe");n.id=R(),n.width=0,n.height=0,n.hspace="0",n.vspace="0",n.marginWidth="0",n.marginHeight="0",n.style.display="none",n.style.height="0px",n.style.width="0px",n.scrolling="no",n.frameBorder="0",n.allowtransparency="true",O.insertElement(n,document,"body"),n.contentWindow.document.open(),n.contentWindow.document.write(e),n.contentWindow.document.close()}}function Ee(e,n,t){var r=O.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),i=document.createElement("div");i.innerHTML=r;var o=i.firstChild;n&&O.isFn(n)&&me(o,t).then(n),O.insertElement(o,document,"html",!0)}function Ce(e){if(!e)return"";var n='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return n+='<img src="'+encodeURI(e)+'"></div>'}function Ae(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e?(n&&(e=encodeURI(e)),t&&(t='sandbox="'.concat(t,'"')),"<iframe ".concat(t,' id="').concat(R(),'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e,'">\n    </iframe>')):""}function Te(e,n,t){return null==n?t:oe(n)?n:ue(n)?n.toString():void O.logWarn("Unsuported type for param: "+e+" required type: String")}function Ie(e,n,t){return t.indexOf(e)===n}function Oe(e,n){return e.concat(n)}function Se(e,n){var t;if(e)return n.some((function(n){var r=(0,f.sE)(n.bids,(function(n){return["bidId","adId","bid_id"].some((function(t){return n[t]===e}))}));return r&&(t=r),r})),t}function Be(e){return Object.keys(e)}function ke(e,n){return e[n]}function Ue(e,n){for(var t in e)if(e.hasOwnProperty(t)&&e[t]===n)return t}function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.adUnits;return e.map((function(e){return e.bids.map((function(e){return e.bidder})).reduce(Oe,[])})).reduce(Oe,[]).filter((function(e){return void 0!==e})).filter(Ie)}function _e(){if(window.googletag&&ie(window.googletag.pubads)&&ie(window.googletag.pubads().getSlots))return!0}function Re(){if(window.apntag&&ie(window.apntag.getTag))return!0}var Pe=xe("timeToRespond",(function(e,n){return e>n})),qe=xe("responseTimestamp",(function(e,n){return e>n})),De=xe("responseTimestamp",(function(e,n){return e<n}));function xe(e,n){return function(t,r){return t.cpm===r.cpm?n(t[e],r[e])?r:t:t.cpm<r.cpm?r:t}}function Ze(e){for(var n=e.length;n>0;){var t=Math.floor(Math.random()*n),r=e[--n];e[n]=e[t],e[t]=r}return e}function Ne(e,n){return(0,f.q9)(e,n&&n.adUnitCode)}function Me(e){return d()(e)}function We(){try{return O.getWindowSelf()!==O.getWindowTop()}catch(e){return!0}}function Fe(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)}function ze(e,n){if(e)return e.replace(/\$\{AUCTION_PRICE\}/g,n)}function Le(e,n){if(e&&n&&"string"==typeof n)return e.replace(/\${CLICKTHROUGH}/g,n)}function Ke(){return(new Date).getTime()}function Ge(){return window.performance&&window.performance.now&&window.performance.now()||0}function He(){return!1!==c.vc.getConfig("deviceAccess")}function Ve(){if(window.navigator.cookieEnabled||document.cookie.length)return!0}function Qe(e,n){if(n<1)throw new Error("numRequiredCalls must be a positive number. Got ".concat(n));var t=0;return function(){++t===n&&e.apply(this,arguments)}}function Je(e,n){return e.reduce((function(e,t){return(e[t[n]]=e[t[n]]||[]).push(t),e}),{})}function Ye(e,n){return n.filter((function(n){return e[n]})).reduce((function(n,t){return Object.assign(n,(0,a.Z)({},t,e[t]))}),{})}function Xe(e){var n=["banner","native","video"];return!!Object.keys(e).every((function(e){return(0,f.q9)(n,e)}))&&(!e.video||!e.video.context||(0,f.q9)(["instream","outstream","adpod"],e.video.context))}function $e(e,n,t){return e.filter((function(e){return e.code===n})).map((function(e){return e.bids})).reduce(Oe,[]).filter((function(e){return e.bidder===t})).map((function(e){return e.params||{}}))}function en(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||"yes"===navigator.doNotTrack}var nn=function(e,n){return e.getAdUnitPath()===n||e.getSlotElementId()===n};function tn(e){return function(n){return nn(e,n)}}function rn(e){return function(n){return nn(n,e)}}function on(e){var n;return _e()&&(n=(0,f.sE)(window.googletag.pubads().getSlots(),rn(e))),n}function an(e){var n=on(e);return n?{gptSlot:n.getAdUnitPath(),divId:n.getSlotElementId()}:{}}function un(e,n){var t=Object.keys(e.mediaTypes||{banner:"banner"}).join(", ");return"\n    ".concat(e.code," is a ").concat(t," ad unit\n    containing bidders that don't support ").concat(t,": ").concat(n,".\n    This bidder won't fetch demand.\n  ")}function cn(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function sn(e){return e.replace(/(?:^|\.?)([A-Z])/g,(function(e,n){return"_"+n.toLowerCase()})).replace(/^_/,"")}function dn(e){return Object.keys(e).reduce((function(n,t){return void 0!==e[t]&&(n[t]=e[t]),n}),{})}function fn(e,n){return"object"!==(0,u.Z)(e)?{}:n.reduce((function(t,r,i){if("function"==typeof r)return t;var o=r,a=r.match(/^(.+?)\sas\s(.+?)$/i);a&&(r=a[1],o=a[2]);var u=e[r];return"function"==typeof n[i+1]&&(u=n[i+1](u,t)),void 0!==u&&(t[o]=u),t}),{})}function ln(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"keywords",t=[];return le(e,(function(e,r){if(ae(e)){var i=[];le(e,(function(e){((e=Te(n+"."+r,e))||""===e)&&i.push(e)})),e=i}else{if(!oe(e=Te(n+"."+r,e)))return;e=[e]}t.push({key:r,value:e})})),t}function gn(e,n){return Object.keys(e).forEach((function(t){var r,i;n[t]&&(ie(e[t])?n[t]=e[t](n[t]):n[t]=(r=e[t],i=n[t],"string"===r?i&&i.toString():"number"===r?Number(i):i),isNaN(n[t])&&delete n.key)})),n}function pn(e,n){return ae(e)&&(!n||e.length===n)&&e.every((function(e){return cn(e)}))}function vn(e,n){for(var t=[],r=0;r<n;r++){var i=ce(e)?Me(e):e;t.push(i)}return t}function hn(e,n){for(var t=[],r=0;r<Math.ceil(e.length/n);r++){var i=r*n,o=i+n;t.push(e.slice(i,o))}return t}function mn(e){return Math.min.apply(Math,(0,o.Z)(e))}function bn(e){return Math.max.apply(Math,(0,o.Z)(e))}function yn(e){return function(n,t){return n[e]<t[e]?1:n[e]>t[e]?-1:0}}function wn(e){return e?e.replace(/^\?/,"").split("&").reduce((function(e,n){var t=n.split("="),r=(0,i.Z)(t,2),o=r[0],a=r[1];return/\[\]$/.test(o)?(e[o=o.replace("[]","")]=e[o]||[],e[o].push(a)):e[o]=a||"",e}),{}):{}}function En(e){return Object.keys(e).map((function(n){return Array.isArray(e[n])?e[n].map((function(e){return"".concat(n,"[]=").concat(e)})).join("&"):"".concat(n,"=").concat(e[n])})).join("&")}function Cn(e,n){var t=document.createElement("a");n&&"noDecodeWholeURL"in n&&n.noDecodeWholeURL?t.href=e:t.href=decodeURIComponent(e);var r=n&&"decodeSearchAsString"in n&&n.decodeSearchAsString;return{href:t.href,protocol:(t.protocol||"").replace(/:$/,""),hostname:t.hostname,port:+t.port,pathname:t.pathname.replace(/^(?!\/)/,"/"),search:r?t.search:O.parseQS(t.search||""),hash:(t.hash||"").replace(/^#/,""),host:t.host||window.location.host}}function An(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":".concat(e.port):""))+(e.pathname||"")+(e.search?"?".concat(O.formatQS(e.search||"")):"")+(e.hash?"#".concat(e.hash):"")}function Tn(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.checkTypes,i=void 0!==r&&r;if(e===n)return!0;if("object"!==(0,u.Z)(e)||null===e||"object"!==(0,u.Z)(n)||null===n||i&&e.constructor!==n.constructor)return!1;if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o in e){if(!n.hasOwnProperty(o))return!1;if(!Tn(e[o],n[o],{checkTypes:i}))return!1}return!0}function In(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];if(!t.length)return e;var i=t.shift();if(ce(e)&&ce(i)){var u=function(n){ce(i[n])?(e[n]||Object.assign(e,(0,a.Z)({},n,{})),In(e[n],i[n])):ae(i[n])?e[n]?ae(e[n])&&i[n].forEach((function(t){for(var r=1,i=0;i<e[n].length;i++)if(Tn(e[n][i],t)){r=0;break}r&&e[n].push(t)})):Object.assign(e,(0,a.Z)({},n,(0,o.Z)(i[n]))):Object.assign(e,(0,a.Z)({},n,i[n]))};for(var c in i)u(c)}return In.apply(void 0,[e].concat(t))}function On(e){for(var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=function(e,n){if(ie(Math.imul))return Math.imul(e,n);var t=(4194303&e)*(n|=0);return 4290772992&e&&(t+=(4290772992&e)*n|0),0|t},i=3735928559^t,o=1103547991^t,a=0;a<e.length;a++)i=r(i^(n=e.charCodeAt(a)),2654435761),o=r(o^n,1597334677);return i=r(i^i>>>16,2246822507)^r(o^o>>>13,3266489909),(4294967296*(2097151&(o=r(o^o>>>16,2246822507)^r(i^i>>>13,3266489909)))+(i>>>0)).toString()}function Sn(e){return e?e.defaultView:null}function Bn(e){try{return JSON.parse(e)}catch(e){}}function kn(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},t=new Map,r=function(){var r=n.apply(this,arguments);return t.has(r)||t.set(r,e.apply(this,arguments)),t.get(r)};return r.clear=t.clear.bind(t),r}function Un(e,n){for(var t in n)n.hasOwnProperty(t)&&e.setAttribute(t,n[t])}var jn,_n=(jn={"<":"\\u003C",">":"\\u003E","/":"\\u002F","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"},function(e){return e.replace(/[<>\b\f\n\r\t\0\u2028\u2029\\]/g,(function(e){return jn[e]}))})},36066:function(e,n,t){t.d(n,{O:function(){return a}});var r=t(78653),i=t(55975),o=t(64358);function a(e,n,t){var a,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=u.index,s=void 0===c?r.K.index:c,d=u.bs,f=void 0===d?i.S:d;t=t||s.getBidRequest(n);var l=f.get((null==n?void 0:n.bidderCode)||(null===(a=t)||void 0===a?void 0:a.bidder),"bidCpmAdjustment");if(l&&"function"==typeof l)try{return l(e,Object.assign({},n),t)}catch(e){(0,o.logError)("Error during bid adjustment",e)}return e}},99128:function(e,n,t){t.d(n,{A:function(){return E},Bf:function(){return h},V6:function(){return b},g3:function(){return w}});var r=t(93324),i=t(3193);function o(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw o}}}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u="performanceMetrics",c=window.performance&&window.performance.now?function(){return window.performance.now()}:function(){return Date.now()},s=new WeakMap;function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.now,t=void 0===n?c:n,r=e.mkNode,i=void 0===r?g:r,o=e.mkTimer,a=void 0===o?l:o,u=e.mkRenamer,d=void 0===u?function(e){return e}:u,f=e.nodes,p=void 0===f?s:f;return function(){return function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return{forEach:function(n){n(e)}}};function o(e){return function(t){return n.dfWalk({visit:function(n,r){var i=r[e];if(i.hasOwnProperty(t))return i[t]}})}}r=d(r);var u=o("timestamps");function c(e,t){var i=r(e);n.dfWalk({follow:function(e,n){return n.propagate&&(!e||!e.stopPropagation)},visit:function(e,n){i.forEach((function(r){null==e?n.metrics[r]=t:(n.groups.hasOwnProperty(r)||(n.groups[r]=[]),n.groups[r].push(t))}))}})}function s(e){n.timestamps[e]=t()}function f(e,n){var r=u(e),i=null!=r?t()-r:null;return null!=n&&c(n,i),i}function l(e,n,t){var r=u(e),i=u(n),o=null!=r&&null!=i?i-r:null;return null!=t&&c(t,o),o}function g(e){return a(t,(function(n){return c(e,n)}))}function v(e,n){return g(e).stopAfter(n)()}function h(e,n,t){var r=g(e);return t(function(e){var n=r.stopBefore(e);return n.bail=e.bail&&r.stopBefore(e.bail),n.stopTiming=r,n.untimed=e,n}(n))}function m(){var e={};return n.dfWalk({visit:function(n,t){e=Object.assign({},!n||n.includeGroups?t.groups:null,t.metrics,e)}}),e}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.propagate,a=void 0===o||o,u=t.stopPropagation,c=void 0!==u&&u,s=t.includeGroups,d=void 0!==s&&s;return e(i([[n,{propagate:a,stopPropagation:c,includeGroups:d}]]),r)}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.propagate,i=void 0===r||r,o=t.stopPropagation,a=void 0!==o&&o,u=t.includeGroups,c=void 0!==u&&u,s=p.get(e);null!=s&&s.addParent(n,{propagate:i,stopPropagation:a,includeGroups:c})}function w(t){return e(n,t)}function E(){return e(n.newSibling(),r)}var C={startTiming:g,measureTime:v,measureHookTime:h,checkpoint:s,timeSince:f,timeBetween:l,setMetric:c,getMetrics:m,fork:b,join:y,newMetrics:E,renameWith:w,toJSON:function(){return m()}};return p.set(C,n),C}(i([]))}}function f(e,n,t){return function(){n&&n();try{return e.apply(this,arguments)}finally{t&&t()}}}function l(e,n){var t=e(),r=!1;function i(){r||(n(e()-t),r=!0)}return i.stopBefore=function(e){return f(e,i)},i.stopAfter=function(e){return f(e,null,i)},i}function g(e){return{metrics:{},timestamps:{},groups:{},addParent:function(n,t){e.push([n,t])},newSibling:function(){return g(e.slice())},dfWalk:function(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.visit,a=t.follow,u=void 0===a?function(){return!0}:a,c=t.visited,s=void 0===c?new Set:c,d=t.inEdge;if(!s.has(this)){if(s.add(this),null!=(n=i(d,this)))return n;var f,l=o(e);try{for(l.s();!(f=l.n()).done;){var g=(0,r.Z)(f.value,2),p=g[0],v=g[1];if(u(d,v)&&null!=(n=p.dfWalk({visit:i,follow:u,visited:s,inEdge:v})))return n}}catch(e){l.e(e)}finally{l.f()}}}}}var p=function(){var e=function(){},n=function(){return{}},t={forEach:e},r=function(){return null};r.stopBefore=function(e){return e},r.stopAfter=function(e){return e};var i=Object.defineProperties({dfWalk:e,newSibling:function(){return i},addParent:e},Object.fromEntries(["metrics","timestamps","groups"].map((function(e){return[e,{get:n}]}))));return d({now:function(){return 0},mkNode:function(){return i},mkRenamer:function(){return function(){return t}},mkTimer:function(){return r},nodes:{get:e,set:e}})()}(),v=!0;function h(e){return v&&e||p}i.vc.getConfig(u,(function(e){v=!!e[u]}));var m,b=(m=d(),function(){return v?m():p});function y(e,n){return function(t,r){return function(i){for(var o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];var c=this;return h(n.apply(c,a)).measureHookTime(e+t,i,(function(e){return r.call.apply(r,[c,e].concat(a))}))}}}var w=y("requestBids.",(function(e){return e.metrics})),E=y("addBidResponse.",(function(e,n){return n.metrics}))},68792:function(e,n,t){t.d(n,{P:function(){return h},Z:function(){return p}});var r=t(93324),i=t(15671),o=t(43144),a=t(18916),u=t(42793);function c(e,n,t){!function(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,n),n.set(e,t)}function s(e,n,t){return function(e,n){if(e!==n)throw new TypeError("Private static access of wrong provenance")}(e,n),t}var d=0,f=1,l=new WeakMap,g=new WeakMap,p=function(){function e(n){if((0,i.Z)(this,e),c(this,l,{writable:!0,value:void 0}),c(this,g,{writable:!0,value:void 0}),"function"!=typeof n)throw new Error("resolver not a function");var t=[],o=[],a=[d,f].map((function(e){return function(n){if(e===d&&"function"==typeof(null==n?void 0:n.then))n.then(p,v);else if(!t.length)for(t.push(e,n);o.length;)o.shift()()}})),s=(0,r.Z)(a,2),p=s[0],v=s[1];try{n(p,v)}catch(e){v(e)}(0,u.Z)(this,l,t),(0,u.Z)(this,g,o)}return(0,o.Z)(e,[{key:"then",value:function(e,n){var t=this,i=(0,a.Z)(this,l);return new this.constructor((function(o,u){var c=function(){var t=i[1],a=i[0]===d?[e,o]:[n,u],c=(0,r.Z)(a,2),s=c[0],f=c[1];if("function"==typeof s){try{t=s(t)}catch(e){return void u(e)}f=o}f(t)};i.length?c():(0,a.Z)(t,g).push(c)}))}},{key:"catch",value:function(e){return this.then(null,e)}},{key:"finally",value:function(e){var n,t=this;return this.then((function(t){return n=t,e()}),(function(r){return n=t.constructor.reject(r),e()})).then((function(){return n}))}}],[{key:"timeout",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new e((function(e){0===n?e():setTimeout(e,n)}))}},{key:"race",value:function(n){var t=this;return new this((function(r,i){s(t,e,v).call(t,n,(function(e,n){return e?r(n):i(n)}))}))}},{key:"all",value:function(n){var t=this;return new this((function(r,i){var o=[];s(t,e,v).call(t,n,(function(e,n,t){return e?o[t]=n:i(n)}),(function(){return r(o)}))}))}},{key:"allSettled",value:function(n){var t=this;return new this((function(r){var i=[];s(t,e,v).call(t,n,(function(e,n,t){return i[t]=e?{status:"fulfilled",value:n}:{status:"rejected",reason:n}}),(function(){return r(i)}))}))}},{key:"resolve",value:function(e){return new this((function(n){return n(e)}))}},{key:"reject",value:function(e){return new this((function(n,t){return t(e)}))}}]),e}();function v(e,n,t){var r=this,i=e.length;function o(){n.apply(this,arguments),--i<=0&&t&&t()}0===e.length&&t?t():e.forEach((function(e,n){return r.resolve(e).then((function(e){return o(!0,e,n)}),(function(e){return o(!1,e,n)}))}))}function h(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.promiseFactory,i=void 0===r?function(e){return new p(e)}:r;function o(e){return function(n){return e(n)}}return{promise:i((function(t,r){e=t,n=r})),resolve:o(e),reject:o(n)}}},90154:function(e,n,t){t.d(n,{Dn:function(){return d},LD:function(){return s},gZ:function(){return c},hD:function(){return f}});var r=t(20265),i=t(64358),o=t(3193),a=t(92797),u=t(78653),c="outstream",s="instream";function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.index,i=void 0===t?u.K.index:t,o=(0,r.Z)(i.getMediaTypes(e),"video"),a=o&&(0,r.Z)(o,"context"),c=o&&(0,r.Z)(o,"useCacheKey"),s=i.getAdUnit(e);return f(e,s,o,a,c)}var f=(0,a.z3)("sync",(function(e,n,t,r,a){return t&&(a||r!==c)?o.vc.getConfig("cache.url")||!e.vastXml||e.vastUrl?!(!e.vastUrl&&!e.vastXml):((0,i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),!1):!(r===c&&!a)||!!(e.renderer||n&&n.renderer||t.renderer)}),"checkVideoBidSetup")},79885:function(e,n,t){t.d(n,{h:function(){return s},z:function(){return d}});var r=t(48928),i=t(3193),o=t(78653);function a(e,n){var t=n?"<![CDATA[".concat(n,"]]>"):"";return'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e,"]]></VASTAdTagURI>\n        <Impression>").concat(t,"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")}function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.index,r=void 0===t?o.K.index:t,u=e.vastXml?e.vastXml:a(e.vastUrl,e.vastImpUrl),c=r.getAuction(e),s=Number(e.ttl)+15,d={type:"xml",value:u,ttlseconds:s};return i.vc.getConfig("cache.vasttrack")&&(d.bidder=e.bidder,d.bidid=e.requestId,d.aid=e.auctionId),null!=c&&(d.timestamp=c.getAuctionStart()),"string"==typeof e.customCacheKey&&""!==e.customCacheKey&&(d.key=e.customCacheKey),d}function c(e){return{success:function(n){var t;try{t=JSON.parse(n).responses}catch(n){return void e(n,[])}t?e(null,t):e(new Error("The cache server didn't respond with a responses property."),[])},error:function(n,t){e(new Error("Error storing video ad in the cache: ".concat(n,": ").concat(JSON.stringify(t))),[])}}}function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.O,o={puts:e.map(u)},a=t(i.vc.getConfig("cache.timeout"));a(i.vc.getConfig("cache.url"),c(n),JSON.stringify(o),{contentType:"text/plain",withCredentials:!0})}function d(e){return"".concat(i.vc.getConfig("cache.url"),"?uuid=").concat(e)}},20265:function(e,n,t){function r(e,n,t,r,i){for(n=n.split?n.split("."):n,r=0;r<n.length;r++)e=e?e[n[r]]:i;return e===i?t:e}t.d(n,{Z:function(){return r}})},81432:function(e){
/*
* @license MIT
* Fun Hooks v0.9.10
* (c) @snapwich
*/
a.SYNC=1,a.ASYNC=2,a.QUEUE=4;var n=Object.freeze({useProxy:!0,ready:0}),t=new WeakMap,r="2,1,0"===[1].reduce((function(e,n,t){return[e,n,t]}),2).toString()?Array.prototype.reduce:function(e,n){var t,r=Object(this),i=r.length>>>0,o=0;if(n)t=n;else{for(;o<i&&!(o in r);)o++;t=r[o++]}for(;o<i;)o in r&&(t=e(t,r[o],o,r)),o++;return t};function i(e,n){return Array.prototype.slice.call(e,n)}var o=Object.assign||function(e){return r.call(i(arguments,1),(function(e,n){return n&&Object.keys(n).forEach((function(t){e[t]=n[t]})),e}),e)};function a(e){var u,c={},s=[];function d(e,n){return"function"==typeof e?p.call(null,"sync",e,n):"string"==typeof e&&"function"==typeof n?p.apply(null,arguments):"object"==typeof e?f.apply(null,arguments):void 0}function f(e,n,t){var r=!0;void 0===n&&(n=Object.getOwnPropertyNames(e),r=!1);var i={},o=["constructor"];do{(n=n.filter((function(n){return!("function"!=typeof e[n]||-1!==o.indexOf(n)||n.match(/^_/))}))).forEach((function(n){var r=n.split(":"),o=r[0],a=r[1]||"sync";if(!i[o]){var u=e[o];i[o]=e[o]=p(a,u,t?[t,o]:void 0)}})),e=Object.getPrototypeOf(e)}while(r&&e);return i}function l(e){var n=Array.isArray(e)?e:e.split(".");return r.call(n,(function(t,r,i){var o=t[r],a=!1;return o||(i===n.length-1?(u||s.push((function(){a||console.warn("fun-hooks: referenced '"+e+"' but it was never created")})),t[r]=g((function(e){t[r]=e,a=!0}))):t[r]={})}),c)}function g(e){var n=[],r=[],i=function(){},a={before:function(e,t){return c.call(this,n,"before",e,t)},after:function(e,n){return c.call(this,r,"after",e,n)},getHooks:function(e){var t=n.concat(r);"object"==typeof e&&(t=t.filter((function(n){return Object.keys(e).every((function(t){return n[t]===e[t]}))})));try{o(t,{remove:function(){return t.forEach((function(e){e.remove()})),this}})}catch(e){console.error("error adding `remove` to array, did you modify Array.prototype?")}return t},removeAll:function(){return this.getHooks().remove()}},u={install:function(t,o,a){this.type=t,i=a,a(n,r),e&&e(o)}};return t.set(a.after,u),a;function c(e,t,o,a){var u={hook:o,type:t,priority:a||10,remove:function(){var t=e.indexOf(u);-1!==t&&(e.splice(t,1),i(n,r))}};return e.push(u),e.sort((function(e,n){return n.priority-e.priority})),i(n,r),this}}function p(n,r,c){var d=r.after&&t.get(r.after);if(d){if(d.type!==n)throw"fun-hooks: recreated hookable with different type";return r}var f,p,v=c?l(c):g(),h={get:function(e,n){return v[n]||Reflect.get.apply(Reflect,arguments)}};return u||s.push(m),e.useProxy&&"function"==typeof Proxy&&Proxy.revocable?p=new Proxy(r,h):(p=function(){return h.apply?h.apply(r,this,i(arguments)):r.apply(this,arguments)},o(p,v)),t.get(p.after).install(n,p,(function(e,t){var r,o=[];e.length||t.length?(e.forEach(a),r=o.push(void 0)-1,t.forEach(a),f=function(e,t,a){var u,c=0,s="async"===n&&"function"==typeof a[a.length-1]&&a.pop();function d(e){"sync"===n?u=e:s&&s.apply(null,arguments)}function f(e){if(o[c]){var r=i(arguments);return f.bail=d,r.unshift(f),o[c++].apply(t,r)}"sync"===n?u=e:s&&s.apply(null,arguments)}return o[r]=function(){var r=i(arguments,1);"async"===n&&s&&(delete f.bail,r.push(f));var o=e.apply(t,r);"sync"===n&&f(o)},f.apply(null,a),u}):f=void 0;function a(e){o.push(e.hook)}m()})),p;function m(){!u&&("sync"!==n||e.ready&a.SYNC)&&("async"!==n||e.ready&a.ASYNC)?"sync"!==n&&e.ready&a.QUEUE?h.apply=function(){var e=arguments;s.push((function(){p.apply(e[1],e[2])}))}:h.apply=function(){throw"fun-hooks: hooked function not ready"}:h.apply=f}}return(e=o({},n,e)).ready?d.ready=function(){u=!0,function(e){for(var n;n=e.shift();)n()}(s)}:u=!0,d.get=l,d}e.exports=a},77079:function(e){e.exports=function e(n){var t=Array.isArray(n)?[]:{};for(var r in n){var i=n[r];t[r]=i&&"object"==typeof i?e(i):i}return t}},30907:function(e,n,t){function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},83878:function(e,n,t){function r(e){if(Array.isArray(e))return e}t.d(n,{Z:function(){return r}})},45057:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(30907);function i(e){if(Array.isArray(e))return(0,r.Z)(e)}},26983:function(e,n,t){function r(e,n){return n.get?n.get.call(e):n.value}t.d(n,{Z:function(){return r}})},86011:function(e,n,t){function r(e,n,t){if(n.set)n.set.call(e,t);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=t}}t.d(n,{Z:function(){return r}})},15671:function(e,n,t){function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return r}})},1519:function(e,n,t){function r(e,n,t){if(!n.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return n.get(e)}t.d(n,{Z:function(){return r}})},18916:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(26983),i=t(1519);function o(e,n){var t=(0,i.Z)(e,n,"get");return(0,r.Z)(e,t)}},42793:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(86011),i=t(1519);function o(e,n,t){var o=(0,i.Z)(e,n,"set");return(0,r.Z)(e,o,t),t}},43144:function(e,n,t){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}t.d(n,{Z:function(){return i}})},4942:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},61120:function(e,n,t){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},60136:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(89611);function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&(0,r.Z)(e,n)}},59199:function(e,n,t){function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.d(n,{Z:function(){return r}})},31902:function(e,n,t){function r(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){u=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw i}}return o}}t.d(n,{Z:function(){return r}})},25267:function(e,n,t){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(n,{Z:function(){return r}})},42786:function(e,n,t){function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(n,{Z:function(){return r}})},73930:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(71002);function i(e,n){if(n&&("object"===(0,r.Z)(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}},89611:function(e,n,t){function r(e,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},r(e,n)}t.d(n,{Z:function(){return r}})},93324:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(83878),i=t(31902),o=t(40181),a=t(25267);function u(e,n){return(0,r.Z)(e)||(0,i.Z)(e,n)||(0,o.Z)(e,n)||(0,a.Z)()}},89062:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(45057),i=t(59199),o=t(40181),a=t(42786);function u(e){return(0,r.Z)(e)||(0,i.Z)(e)||(0,o.Z)(e)||(0,a.Z)()}},71002:function(e,n,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.d(n,{Z:function(){return r}})},40181:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(30907);function i(e,n){if(e){if("string"==typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}},96475:function(e,n,t){function r(e,n,t){n.split&&(n=n.split("."));for(var r,i,o=0,a=n.length,u=e;o<a&&"__proto__"!==(i=n[o++])&&"constructor"!==i&&"prototype"!==i;)u=u[i]=o===a?t:typeof(r=u[i])==typeof n?r:0*n[o]!=0||~(""+n[o]).indexOf(".")?{}:[]}t.d(n,{N:function(){return r}})},5644:function(e){e.exports=JSON.parse('{"k2":{"xn":"adserverTargeting","zF":"standard"},"f":"pbjs_debug","Q_":{"GOOD":1,"NO_BID":2},"FP":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","BID_REJECTED":"bidRejected","NO_BID":"noBid","SEAT_NON_BID":"seatNonBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"q_":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"aI":{"bidWon":"adUnitCode"},"Ql":{"yE":"low","M2":"medium","lj":"high","B7":"auto","uN":"dense","qN":"custom"},"TD":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain","ACAT":"hb_acat"},"kF":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"FY":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"os":{"YZ":"s2s"},"UE":{"CK":"targetingSet","fe":"rendered","G9":"bidRejected"},"Gw":{"UI":"Bid has missing or invalid properties","Gp":"Invalid request ID","Dg":"Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes","pe":"Bid does not meet price floor","Xx":"Unable to convert currency"},"V1":{"body":"desc","body2":"desc2","sponsoredBy":"sponsored","cta":"ctatext","rating":"rating","address":"address","downloads":"downloads","likes":"likes","phone":"phone","price":"price","salePrice":"saleprice","displayUrl":"displayurl"},"s$":{"sponsored":1,"desc":2,"rating":3,"likes":4,"downloads":5,"price":6,"saleprice":7,"phone":8,"address":9,"desc2":10,"displayurl":11,"ctatext":12},"oF":{"ICON":1,"MAIN":3},"zA":["privacyLink","clickUrl","sendTargetingKeys","adTemplate","rendererUrl","type"]}')}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return n[e].call(o.exports,o,o.exports,r),o.exports}r.m=n,e=[],r.O=function(n,t,i,o){if(!t){var a=1/0;for(d=0;d<e.length;d++){t=e[d][0],i=e[d][1],o=e[d][2];for(var u=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](t[c])}))?t.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(d--,1);var s=i();void 0!==s&&(n=s)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,i,o]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={25602:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var i,o,a=t[0],u=t[1],c=t[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(c)var d=c(r)}for(n&&n(t);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},t=self.pbjsChunk=self.pbjsChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var i=r(23866);i=r.O(i)}();
(self.pbjsChunk=self.pbjsChunk||[]).push([[85279],{24980:function(e,r,t){t.d(r,{T:function(){return R},x:function(){return O}});var n=t(93324),i=new WeakMap;function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!i.has(e)){var t=Object.entries(e);t.sort((function(e,r){return(e=e[1].priority||0)===(r=r[1].priority||0)?0:e>r?-1:1})),i.set(e,t.map((function(e){var r=(0,n.Z)(e,2);return[r[0],r[1].fn]})))}var o=i.get(e).filter((function(e){var t=(0,n.Z)(e,1)[0];return!r.hasOwnProperty(t)||r[t]})).map((function(e){var t=(0,n.Z)(e,2),i=t[0],o=t[1];return r.hasOwnProperty(i)?r[i].bind(this,o):o}));return function(){var e=this,r=Array.from(arguments);o.forEach((function(t){t.apply(e,r)}))}}var a=t(64358),s=t(4942),d=t(96475),u=t(20265),p=t(24679);function c(e){return(e=(0,a.parseSizesInput)(e)).map((function(e){var r=e.split("x"),t=(0,n.Z)(r,2),i=t[0],o=t[1];return{w:parseInt(i,10),h:parseInt(o,10)}}))}var f=new Set(["pos","placement","api","mimes","protocols","playbackmethod","minduration","maxduration","w","h","startdelay","placement","linearity","skip","skipmin","skipafter","minbitrate","maxbitrate","delivery","playbackend"]),v={instream:1};var l=t(15840);var m,b=t(26372),y=t(83790),h=(m={},(0,s.Z)(m,b.Z,{fpd:{priority:99,fn:function(e,r){(0,a.mergeDeep)(e,r.ortb2)}},onlyOneClient:{priority:-99,fn:(0,y.A_)("ORTB request")},props:{fn:function(e,r){var t;Object.assign(e,{id:e.id||r.auctionId,test:e.test||0});var n=parseInt(r.timeout,10);isNaN(n)||(e.tmax=n),(0,d.N)(e,"source.tid",(null===(t=e.source)||void 0===t?void 0:t.tid)||r.auctionId)}}}),(0,s.Z)(m,b.DZ,{fpd:{priority:99,fn:function(e,r){(0,a.mergeDeep)(e,r.ortb2Imp)}},id:{fn:function(e,r){e.id=r.bidId}},banner:{fn:function(e,r,t){if(!t.mediaType||t.mediaType===p.Mk){var n=(0,u.Z)(r,"mediaTypes.banner");if(n){var i={topframe:!0===(0,a.inIframe)()?0:1};n.sizes&&(i.format=c(n.sizes)),n.hasOwnProperty("pos")&&(i.pos=n.pos),e.banner=(0,a.mergeDeep)(i,e.banner)}}}},pbadslot:{fn:function(e){var r,t,n,i,o=null===(r=e.ext)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.pbadslot;o&&"string"==typeof o||(null===(n=e.ext)||void 0===n||(null===(i=n.data)||void 0===i||delete i.pbadslot))}}}),(0,s.Z)(m,b.Px,{mediaType:{priority:99,fn:l.R},banner:{fn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.createPixel,t=void 0===r?function(e){return(0,a.createTrackPixelHtml)(decodeURIComponent(e))}:r;return function(e,r){e.mediaType===p.Mk&&(r.adm&&r.nurl?(e.ad=r.adm,e.ad+=t(r.nurl)):r.adm?e.ad=r.adm:r.nurl&&(e.adUrl=r.nurl))}}()},props:{fn:function(e,r,t){var i;Object.entries({requestId:null===(i=t.bidRequest)||void 0===i?void 0:i.bidId,seatBidId:r.id,cpm:r.price,currency:t.ortbResponse.cur||t.currency,width:r.w,height:r.h,dealId:r.dealid,creative_id:r.crid,creativeId:r.crid,burl:r.burl,ttl:r.exp||t.ttl,netRevenue:t.netRevenue}).filter((function(e){var r=(0,n.Z)(e,2);r[0];return void 0!==r[1]})).forEach((function(r){var t=(0,n.Z)(r,2),i=t[0],o=t[1];return e[i]=o})),e.meta||(e.meta={}),r.adomain&&(e.meta.advertiserDomains=r.adomain)}}}),m);h[b.DZ].native={fn:function(e,r,t){if(!t.mediaType||t.mediaType===p.B5){var n,i=r.nativeOrtbRequest;i&&(null!==(n=(i=Object.assign({},t.nativeRequest,i)).assets)&&void 0!==n&&n.length?e.native=(0,a.mergeDeep)({},{request:JSON.stringify(i),ver:i.ver},e.native):(0,a.logWarn)("mediaTypes.native is set, but no assets were specified. Native request skipped.",r))}}},h[b.Px].native={fn:function(e,r){if(e.mediaType===p.B5){var t;if(t="string"==typeof r.adm?JSON.parse(r.adm):r.adm,!(0,a.isPlainObject)(t)||!Array.isArray(t.assets))throw new Error("ORTB native response contained no assets");e.native={ortb:t}}}},h[b.DZ].video={fn:function(e,r,t){if(!t.mediaType||t.mediaType===p.pX){var i=(0,u.Z)(r,"mediaTypes.video");if(!(0,a.isEmpty)(i)){var o=Object.fromEntries(Object.entries(i).filter((function(e){var r=(0,n.Z)(e,1)[0];return f.has(r)})));if(i.playerSize){var s=c(i.playerSize);s.length>1&&(0,a.logWarn)("video request specifies more than one playerSize; all but the first will be ignored"),Object.assign(o,s[0])}var d=v[i.context];null!=d&&(o.placement=d),e.video=(0,a.mergeDeep)(o,e.video)}}}},h[b.Px].video={fn:function(e,r,t){if(e.mediaType===p.pX){if((0,u.Z)(t.imp,"video.w")&&(0,u.Z)(t.imp,"video.h")){var n=[t.imp.video.w,t.imp.video.h];e.playerWidth=n[0],e.playerHeight=n[1]}r.adm&&(e.vastXml=r.adm),r.nurl&&(e.vastUrl=r.nurl)}}};var g=t(61283);function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.context,t=void 0===r?{}:r,n=e.processors,i=void 0===n?R:n,s=e.overrides,d=void 0===s?{}:s,u=e.imp,p=e.request,c=e.bidResponse,f=e.response,v=new WeakMap;function l(e,r,t,n){var a;return function(){return null==a&&(a=function(){var a=t.bind(this,o(i()[e]||{},d[e]||{}));return r&&(a=r.bind(this,a)),function(){try{return a.apply(this,arguments)}catch(e){n.call.apply(n,[this,e].concat(Array.prototype.slice.call(arguments)))}}}()),a.apply(this,arguments)}}var m=l(b.DZ,u,(function(e,r,t){var n={};return e(n,r,t),n}),(function(e,r,t){(0,a.logError)("Error while converting bidRequest to ORTB imp; request skipped.",{error:e,bidRequest:r,context:t})})),y=l(b.Z,p,(function(e,r,t,n){var i={imp:r};return e(i,t,n),i}),(function(e,r,t,n){throw(0,a.logError)("Error while converting to ORTB request",{error:e,imps:r,bidderRequest:t,context:n}),e})),h=l(b.Px,c,(function(e,r,t){var n={};return e(n,r,t),n}),(function(e,r,t){(0,a.logError)("Error while converting ORTB seatbid.bid to bidResponse; bid skipped.",{error:e,bid:r,context:t})})),g=l(b.YC,f,(function(e,r,t,n){var i={bids:r};return e(i,t,n),i}),(function(e,r,t,n){throw(0,a.logError)("Error while converting from ORTB response",{error:e,bidResponses:r,ortbResponse:t,context:n}),e}));return{toORTB:function(e){var r=e.bidderRequest,n=e.bidRequests,i=e.context,o=void 0===i?{}:i;n=n||r.bids;var s={req:Object.assign({bidRequests:n},t,o),imp:{}};s.req.impContext=s.imp;var d=n.map((function(e){var n=Object.assign({bidderRequest:r,reqContext:s.req},t,o),i=m(e,n);if(null!=i){if(i.hasOwnProperty("id"))return Object.assign(n,{bidRequest:e,imp:i}),s.imp[i.id]=n,i;(0,a.logError)("Converted ORTB imp does not specify an id, ignoring bid request",e,i)}})).filter(Boolean),u=y(d,r,s.req);return s.req.bidderRequest=r,null!=u&&v.set(u,s),u},fromORTB:function(e){var r=e.request,t=e.response,n=v.get(r);if(null==n)throw new Error("ortbRequest passed to `fromORTB` must be the same object returned by `toORTB`");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign(e,{ortbRequest:r},t,e)}var o=Object.fromEntries((r.imp||[]).map((function(e){return[e.id,e]}))),s=(t.seatbid||[]).flatMap((function(e){return(e.bid||[]).map((function(r){if(o.hasOwnProperty(r.impid)&&n.imp.hasOwnProperty(r.impid))return h(r,i(n.imp[r.impid],{imp:o[r.impid],seatbid:e,ortbResponse:t}));(0,a.logError)("ORTB response seatbid[].bid[].impid does not match any imp in request; ignoring bid",r)}))})).filter(Boolean);return g(s,t,i(n.req))}}}var R=(0,a.memoize)((function(){return(0,g.F)(h,(0,b.fP)(b.TP))}))},61283:function(e,r,t){t.d(r,{F:function(){return i}});var n=t(26372);function i(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=r.shift(),a=r.length>1?i.apply(void 0,r):r[0];return Object.fromEntries(n.gm.map((function(e){return[e,Object.assign({},o[e],a[e])]})))}},15840:function(e,r,t){t.d(r,{R:function(){return o},e:function(){return i}});var n=t(24679),i={1:n.Mk,2:n.pX,4:n.B5};function o(e,r,t){if(!e.mediaType){var n=t.mediaType;if(!n&&!i.hasOwnProperty(r.mtype))throw new Error("Cannot determine mediaType for response");e.mediaType=n||i[r.mtype]}}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[70951],{99933:function(e,i,r){r.d(i,{X:function(){return x}});var t=r(61283),d=r(4942),n=r(93324),a=r(26372),o=r(20265),s=r(64358),c=r(11021),b=r(51039),u=r(96475);var p=r(39702);var v=r(3193),f=r(78640);var l,g=r(24679);var m=(l={},(0,d.Z)(l,a.Z,{extPrebid:{fn:function(e,i){var r;(0,u.N)(e,"ext.prebid",(0,s.mergeDeep)({auctiontimestamp:i.auctionStart,targeting:{includewinners:!0,includebidderkeys:!1}},null===(r=e.ext)||void 0===r?void 0:r.prebid)),v.vc.getConfig("debug")&&(e.ext.prebid.debug=!0)}},extPrebidChannel:{fn:function(e){var i,r;(0,u.N)(e,"ext.prebid.channel",Object.assign({name:"pbjs",version:(0,f.R)().version},null===(i=e.ext)||void 0===i||null===(r=i.prebid)||void 0===r?void 0:r.channel))}},extPrebidAliases:{fn:function(e,i,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=t.am,n=void 0===d?b.ZP:d;if(n.aliasRegistry[i.bidderCode]){var a=n.bidderRegistry[i.bidderCode];a&&a.getSpec().skipPbsAliasing||(0,u.N)(e,"ext.prebid.aliases.".concat(i.bidderCode),n.aliasRegistry[i.bidderCode])}}}}),(0,d.Z)(l,a.DZ,{params:{fn:p.j},adUnitCode:{fn:function(e,i){var r=i.adUnitCode;r&&(0,u.N)(e,"ext.prebid.adunitcode",r)}}}),(0,d.Z)(l,a.Px,{mediaType:{fn:c.P,priority:99},videoCache:{fn:function(e,i){if(e.mediaType===g.pX){var r=(0,o.Z)(i,"ext.prebid.cache.vastXml")||{},t=r.cacheId,d=r.url;if(!t||!d){var n=(0,o.Z)(i,"ext.prebid.targeting")||{},a=n.hb_uuid,s=n.hb_cache_host,c=n.hb_cache_path;a&&s&&c&&(t=a,d="https://".concat(s).concat(c,"?uuid=").concat(a))}t&&d&&Object.assign(e,{videoCacheKey:t,vastUrl:d})}},priority:-10},bidderCode:{fn:function(e,i,r){var t;e.bidderCode=r.seatbid.seat,e.adapterCode=(0,o.Z)(i,"ext.prebid.meta.adaptercode")||(null===(t=r.bidRequest)||void 0===t?void 0:t.bidder)||e.bidderCode}},pbsBidId:{fn:function(e,i){var r=(0,o.Z)(i,"ext.prebid.bidid");(0,s.isStr)(r)&&(e.pbsBidId=r)}},adserverTargeting:{fn:function(e,i){var r=(0,o.Z)(i,"ext.prebid.targeting");(0,s.isPlainObject)(r)&&(e.adserverTargeting=r)}},extPrebidMeta:{fn:function(e,i){e.meta=(0,s.mergeDeep)({},(0,o.Z)(i,"ext.prebid.meta"),e.meta)}},pbsWurl:{fn:function(e,i){var r=(0,o.Z)(i,"ext.prebid.events.win");(0,s.isStr)(r)&&(e.pbsWurl=r)}}}),(0,d.Z)(l,a.YC,{serverSideStats:{fn:function(e,i,r){Object.entries({errors:"serverErrors",responsetimemillis:"serverResponseTimeMs"}).forEach((function(e){var t=(0,n.Z)(e,2),d=t[0],a=t[1],s=(0,o.Z)(i,"ext.".concat(d,".").concat(r.bidderRequest.bidderCode));s&&(r.bidderRequest[a]=s,r.bidRequests.forEach((function(e){return e[a]=s})))}))}}}),l),h=r(24980),x=(0,s.memoize)((function(){return(0,t.F)((0,h.T)(),m,(0,a.fP)(a.md))}))},11021:function(e,i,r){r.d(i,{E:function(){return o},P:function(){return s}});var t,d=r(4942),n=r(24679),a=r(15840),o=(t={},(0,d.Z)(t,n.Mk,"banner"),(0,d.Z)(t,n.B5,"native"),(0,d.Z)(t,n.pX,"video"),t);function s(e,i,r){var t,d,s=r.mediaType;s||(s=a.e.hasOwnProperty(i.mtype)?a.e[i.mtype]:null===(t=i.ext)||void 0===t||null===(d=t.prebid)||void 0===d?void 0:d.type,o.hasOwnProperty(s)||(s=n.Mk));e.mediaType=s}},39702:function(e,i,r){r.d(i,{j:function(){return a}});var t=r(78653),d=r(51039),n=r(96475);function a(e,i,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=a.adUnit,s=a.bidderRequests,c=a.index,b=void 0===c?t.K.index:c,u=a.bidderRegistry,p=void 0===u?d.ZP.bidderRegistry:u,v=i.params,f=p[i.bidder];f&&f.getSpec().transformBidParams&&(o=o||b.getAdUnit(i),s=s||[r.bidderRequest],v=f.getSpec().transformBidParams(v,!0,o,s)),v&&(0,n.N)(e,"ext.prebid.bidder.".concat(i.bidder),v)}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[74645],{3801:function(e,r,t){var n=t(89062),i=t(93324),a=t(71002),s=t(78640),d=t(14699),p=t(24679),o=t(64358),u=t(20265),c=t(96475),v=t(3193),m=t(35706),f=v.vc.getConfig,g={code:"adf",aliases:[{code:"adformOpenRTB",gvlid:50},{code:"adform",gvlid:50}],gvlid:50,supportedMediaTypes:[p.B5,p.Mk,p.pX],isBidRequestValid:function(e){var r=e.params||{},t=r.mid,n=r.inv,i=r.mname;return!!(t||n&&i)},buildRequests:function(e,r){var t,n,s=r.ortb2||{},d=s.user;"object"===(0,a.Z)(f("app"))?(t=f("app")||{},s.app&&(0,o.mergeDeep)(t,s.app)):(n=f("site")||{},s.site&&(0,o.mergeDeep)(n,s.site),n.page||(n.page=r.refererInfo.page));var p=f("device")||{};p.w=p.w||window.innerWidth,p.h=p.h||window.innerHeight,p.ua=p.ua||navigator.userAgent;var m=l(e,"params.adxDomain")||"adx.adform.net",g=l(e,"params.pt")||l(e,"params.priceType")||"net",b=r.auctionId,h=l(e,"params.test"),y=f("currency.adServerCurrency"),x=y&&[y],w=l(e,"userIdAsEids"),I=l(e,"schain"),C=e.map((function(e,r){e.netRevenue=g;var t=e.getFloor?e.getFloor({currency:y||"USD"}):{},n=t.floor,a=t.currency,s=e.params,d={id:r+1,tagid:s.mid,bidfloor:n,bidfloorcur:a,ext:{bidder:{inv:s.inv,mname:s.mname}}};if(e.nativeOrtbRequest&&e.nativeOrtbRequest.assets){for(var p=e.nativeOrtbRequest.assets,c=[],v=0;v<p.length;v++){var m=(0,o.deepClone)(p[v]),f=m.img;if(f){var l=f.ext&&f.ext.aspectratios;if(l){var b=parseInt(l[0].split(":")[0],10),h=parseInt(l[0].split(":")[1],10);f.wmin=f.wmin||0,f.hmin=h*f.wmin/b|0}}c.push(m)}d.native={request:{assets:c}}}var x=(0,u.Z)(e,"mediaTypes.banner");if(x&&x.sizes){var w=(0,o.parseSizesInput)(x.sizes).map((function(e){var r=e.split("x"),t=(0,i.Z)(r,2),n=t[0],a=t[1];return{w:parseInt(n,10),h:parseInt(a,10)}}));d.banner={format:w}}var I=(0,u.Z)(e,"mediaTypes.video");return I&&(d.video=I),d})),R={id:r.auctionId,site:n,app:t,user:d,device:p,source:{tid:b,fd:1},ext:{pt:g},cur:x,imp:C};return h&&(R.is_debug=!!h,R.test=1),v.vc.getConfig("coppa")&&(0,c.N)(R,"regs.coppa",1),void 0!==(0,u.Z)(r,"gdprConsent.gdprApplies")&&((0,c.N)(R,"user.ext.consent",r.gdprConsent.consentString),(0,c.N)(R,"regs.ext.gdpr",1&r.gdprConsent.gdprApplies)),r.uspConsent&&(0,c.N)(R,"regs.ext.us_privacy",r.uspConsent),w&&(0,c.N)(R,"user.ext.eids",w),I&&(0,c.N)(R,"source.ext.schain",I),{method:"POST",url:"https://"+m+"/adx/openrtb",data:JSON.stringify(R),bids:e}},interpretResponse:function(e,r){var t=r.bids;if(e.body){var i,a,s=e.body,d=s.seatbid,o=s.cur,c=(i=d.map((function(e){return e.bid})),(a=[]).concat.apply(a,(0,n.Z)(i))).reduce((function(e,r){return e[r.impid-1]=r,e}),[]);return t.map((function(e,r){var t=c[r];if(t){var n=(0,u.Z)(t,"ext.prebid.type"),i={requestId:e.bidId,cpm:t.price,creativeId:t.crid,ttl:360,netRevenue:"net"===e.netRevenue,currency:o,mediaType:n,width:t.w,height:t.h,dealId:t.dealid,meta:{mediaType:n,advertiserDomains:t.adomain}};return t.native?i.native={ortb:t.native}:i[n===p.pX?"vastXml":"ad"]=t.adm,e.renderer||n!==p.pX||"outstream"!==(0,u.Z)(e,"mediaTypes.video.context")||(i.renderer=m.Th.install({id:e.bidId,url:"https://s2.adform.net/banners/scripts/video/outstream/render.js",adUnitCode:e.adUnitCode}),i.renderer.setRender(b)),i}})).filter(Boolean)}}};function l(e,r){for(var t,n=0;n<e.length;n++)if(t=(0,u.Z)(e[n],r))return t}function b(e){e.renderer.push((function(){window.Adform.renderOutstream(e)}))}(0,d.dX)(g),(0,s.z)("adfBidAdapter")}},function(e){var r;r=3801,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[83864],{46319:function(e,r,a){a.d(r,{p:function(){return P}});var n=a(71002),t=a(89062),i=a(78640),s=a(64358),o=a(20265),d=a(35706),p=a(3193),c=a(14699),u=a(24679),l=a(78653),m=a(34614),f=a(90154),v=a(15164),g=a(55975),b=a(17673),y=a(70059),_="appnexus",h="https://ib.adnxs.com/ut/v3/prebid",k="https://ib.adnxs-simple.com/ut/v3/prebid",w=["id","minduration","maxduration","skippable","playback_method","frameworks","context","skipoffset"],x=["minduration","maxduration","skip","skipafter","playbackmethod","api","startdelay"],C=["age","externalUid","external_uid","segments","gender","dnt","language"],E=["geo","device_id"],I=["enabled","dongle","member_id","debug_timeout"],O={apn_debug_dongle:"dongle",apn_debug_member_id:"member_id",apn_debug_timeout:"debug_timeout"},A={playback_method:{unknown:0,auto_play_sound_on:1,auto_play_sound_off:2,click_to_play:3,mouse_over:4,auto_play_sound_unknown:5},context:{unknown:0,pre_roll:1,mid_roll:2,post_roll:3,outstream:4,"in-banner":5}},S={body:"description",body2:"desc2",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0}},icon:{serverName:"icon",requiredParams:{required:!0}},sponsoredBy:"sponsored_by",privacyLink:"privacy_link",salePrice:"saleprice",displayUrl:"displayurl"},T="<script",j=/\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,U="trk.js",q=(0,v.df)({bidderCode:_}),P={code:_,gvlid:32,aliases:[{code:"appnexusAst",gvlid:32},{code:"emxdigital",gvlid:183},{code:"pagescience",gvlid:32},{code:"defymedia",gvlid:32},{code:"gourmetads",gvlid:32},{code:"matomy",gvlid:32},{code:"featureforward",gvlid:32},{code:"oftmedia",gvlid:32},{code:"adasta",gvlid:32},{code:"beintoo",gvlid:618}],supportedMediaTypes:[u.Mk,u.pX,u.B5],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.placement_id||e.params.member&&(e.params.invCode||e.params.inv_code))},buildRequests:function(e,r){var a,n,i=(e=(0,y.lY)(e)).map(B),d=(0,m.sE)(e,z),c={};!0===p.vc.getConfig("coppa")&&(c={coppa:!0}),d&&Object.keys(d.params.user).filter((function(e){return(0,m.q9)(C,e)})).forEach((function(e){var r=(0,s.convertCamelToUnderscore)(e);if("segments"===e&&(0,s.isArray)(d.params.user[e])){var a=[];d.params.user[e].forEach((function(e){(0,s.isNumber)(e)?a.push({id:e}):(0,s.isPlainObject)(e)&&a.push(e)})),c[r]=a}else"segments"!==e&&(c[r]=d.params.user[e])}));var u,l=(0,m.sE)(e,M);l&&l.params&&l.params.app&&(u={},Object.keys(l.params.app).filter((function(e){return(0,m.q9)(E,e)})).forEach((function(e){return u[e]=l.params.app[e]})));var f,v=(0,m.sE)(e,X);v&&v.params&&l.params.app&&l.params.app.id&&(f={appid:v.params.app.id});var g={},_={},w=q.getCookie("apn_prebid_debug")||null;if(w)try{g=JSON.parse(w)}catch(e){(0,s.logError)("AppNexus Debug Auction Cookie Error:\n\n"+e)}else{Object.keys(O).forEach((function(e){var r=(0,s.getParameterByName)(e);(0,s.isStr)(r)&&""!==r&&(g[O[e]]=r,g.enabled=!0)})),g=(0,s.convertTypes)({member_id:"number",debug_timeout:"number"},g);var x=(0,m.sE)(e,F);x&&x.debug&&(g=x.debug)}g&&g.enabled&&Object.keys(g).filter((function(e){return(0,m.q9)(I,e)})).forEach((function(e){_[e]=g[e]}));var A=(0,m.sE)(e,D),S=A?parseInt(A.params.member,10):0,T=e[0].schain,j=(0,m.sE)(e,L),U={tags:(0,t.Z)(i),user:c,sdk:{source:"pbjs",version:"7.45.0"},schain:T};j&&(U.iab_support={omidpn:"Appnexus",omidpv:"7.45.0"}),S>0&&(U.member_id=S),l&&(U.device=u),v&&(U.app=f);var P,N,Z=(0,s.deepClone)(r&&r.ortb2),J=(P=Z,N=[],["site.keywords","site.content.keywords","user.keywords","app.keywords","app.content.keywords"].forEach((function(e){var r=(0,o.Z)(P,e);(0,s.isStr)(r)&&N.push(r)})),N).map((function(e){return $(e)})),H=(0,s.deepClone)(p.vc.getConfig("appnexusAuctionKeywords"))||{};Object.keys(H).forEach((function(e){((0,s.isStr)(H[e])||(0,s.isNumber)(H[e]))&&(H[e]=[H[e]])}));var W=s.mergeDeep.apply(void 0,[{},H].concat((0,t.Z)(J))),Q=(0,s.transformBidderParamKeywords)(W);if(Q.length>0&&(Q.forEach(R),U.keywords=Q),p.vc.getConfig("adpod.brandCategoryExclusion")&&(U.brand_category_uniqueness=!0),_.enabled&&(U.debug=_,(0,s.logInfo)("AppNexus Debug Auction Settings:\n\n"+JSON.stringify(_,null,4))),r&&r.gdprConsent&&(U.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies},r.gdprConsent.addtlConsent&&-1!==r.gdprConsent.addtlConsent.indexOf("~"))){var Y=r.gdprConsent.addtlConsent,G=Y.substring(Y.indexOf("~")+1);U.gdpr_consent.addtl_consent=G.split(".").map((function(e){return parseInt(e,10)}))}if(r&&r.uspConsent&&(U.us_privacy=r.uspConsent),null!=r&&r.gppConsent?U.privacy={gpp:r.gppConsent.gppString,gpp_sid:r.gppConsent.applicableSections}:null!=r&&null!==(a=r.ortb2)&&void 0!==a&&null!==(n=a.regs)&&void 0!==n&&n.gpp&&(U.privacy={gpp:r.ortb2.regs.gpp,gpp_sid:r.ortb2.regs.gpp_sid}),r&&r.refererInfo){var ee={rd_ref:encodeURIComponent(r.refererInfo.topmostLocation),rd_top:r.refererInfo.reachedTop,rd_ifs:r.refererInfo.numIframes,rd_stk:r.refererInfo.stack.map((function(e){return encodeURIComponent(e)})).join(",")},re=r.refererInfo.canonicalUrl;(0,s.isStr)(re)&&""!==re&&(ee.rd_can=re),U.referrer_detection=ee}if((0,m.sE)(e,K)&&e.filter(K).forEach((function(e){var r=function(e,r){var a=r.mediaTypes.video,n=a.durationRangeSec,i=a.requireExactDuration,o=function(e){var r=e.adPodDurationSec,a=e.durationRangeSec,n=e.requireExactDuration,t=(0,s.getMinValueFromArray)(a),i=Math.floor(r/t);return n?Math.max(i,a.length):i}(r.mediaTypes.video),d=(0,s.getMaxValueFromArray)(n),p=e.filter((function(e){return e.uuid===r.bidId})),c=s.fill.apply(void 0,(0,t.Z)(p).concat([o]));if(i){var u=Math.ceil(o/n.length),l=(0,s.chunk)(c,u);n.forEach((function(e,r){l[r].map((function(r){V(r,"minduration",e),V(r,"maxduration",e)}))}))}else c.map((function(e){return V(e,"maxduration",d)}));return c}(i,e),a=U.tags.filter((function(r){return r.uuid!==e.bidId}));U.tags=[].concat((0,t.Z)(a),(0,t.Z)(r))})),e[0].userId){var ae=[];e[0].userIdAsEids.forEach((function(e){!e||!e.uids||e.uids.length<1||e.uids.forEach((function(r){var a={source:e.source,id:r.id};"adserver.org"==e.source?a.rti_partner="TDID":"uidapi.com"==e.source&&(a.rti_partner="UID2"),ae.push(a)}))})),ae.length&&(U.eids=ae)}i[0].publisher_id&&(U.publisher_id=i[0].publisher_id);var ne=function(e,r){var a=[],n={withCredentials:!0},t=h;(0,b.h)(null==r?void 0:r.gdprConsent)||(t=k);"TRUE"!==(0,s.getParameterByName)("apn_test").toUpperCase()&&!0!==p.vc.getConfig("apn_test")||(n.customHeaders={"X-Is-Test":1});if(e.tags.length>15){var i=(0,s.deepClone)(e);(0,s.chunk)(e.tags,15).forEach((function(e){i.tags=e;var s=JSON.stringify(i);a.push({method:"POST",url:t,data:s,bidderRequest:r,options:n})}))}else{var o=JSON.stringify(e);a={method:"POST",url:t,data:o,bidderRequest:r,options:n}}return a}(U,r);return ne},interpretResponse:function(e,r){var a=this,n=r.bidderRequest;e=e.body;var t=[];if(!e||e.error){var i="in response for ".concat(n.bidderCode," adapter");return e&&e.error&&(i+=": ".concat(e.error)),(0,s.logError)(i),t}if(e.tags&&e.tags.forEach((function(e){var r,i=(r=e)&&r.ads&&r.ads.length&&(0,m.sE)(r.ads,(function(e){return e.rtb}));if(i&&((!0===g.S.get(n.bidderCode,"allowZeroCpmBids")?i.cpm>=0:i.cpm>0)&&(0,m.q9)(a.supportedMediaTypes,i.ad_type))){var p=function(e,r,a){var n=(0,s.getBidRequest)(e.uuid,[a]),t=(0,s.getUniqueIdentifierStr)(),i={adId:t,requestId:e.uuid,cpm:r.cpm,creativeId:r.creative_id,dealId:r.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:n.adUnitCode,appnexus:{buyerMemberId:r.buyer_member_id,dealPriority:r.deal_priority,dealCode:r.deal_code}};r.adomain&&(i.meta=Object.assign({},i.meta,{advertiserDomains:[r.adomain]}));r.advertiser_id&&(i.meta=Object.assign({},i.meta,{advertiserId:r.advertiser_id}));function p(e){return{ver:"1.0",complete:0,nodes:[{bsid:e.buyer_member_id.toString()}]}}r.buyer_member_id&&(i.meta=Object.assign({},i.meta,{dchain:p(r)}));r.brand_id&&(i.meta=Object.assign({},i.meta,{brandId:r.brand_id}));if(r.rtb.video){switch(Object.assign(i,{width:r.rtb.video.player_width,height:r.rtb.video.player_height,vastImpUrl:r.notify_url,ttl:3600}),(0,o.Z)(n,"mediaTypes.video.context")){case u.Oh:var l=(0,c.Q1)(n.bidder,r.brand_category_id);i.meta=Object.assign({},i.meta,{primaryCatId:l});var v=r.deal_priority;i.video={context:u.Oh,durationSeconds:Math.floor(r.rtb.video.duration_ms/1e3),dealTier:v},i.vastUrl=r.rtb.video.asset_url;break;case f.gZ:if(i.adResponse=e,i.adResponse.ad=i.adResponse.ads[0],i.adResponse.ad.video=i.adResponse.ad.rtb.video,i.vastXml=r.rtb.video.content,r.renderer_url){var g=(0,m.sE)(a.bids,(function(r){return r.bidId===e.uuid})),b=(0,o.Z)(g,"mediaTypes.video.renderer.options");b||(b=(0,o.Z)(g,"renderer.options")),i.renderer=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=d.Th.install({id:r.renderer_id,url:r.renderer_url,config:a,loaded:!1,adUnitCode:e});try{n.setRender(J)}catch(e){(0,s.logWarn)("Prebid Error calling setRender on renderer",e)}return n.setEventHandlers({impression:function(){return(0,s.logMessage)("AppNexus outstream video impression event")},loaded:function(){return(0,s.logMessage)("AppNexus outstream video loaded event")},ended:function(){(0,s.logMessage)("AppNexus outstream renderer video event"),document.querySelector("#".concat(e)).style.display="none"}}),n}(i.adUnitCode,r,b)}break;case f.LD:i.vastUrl=r.notify_url+"&redir="+encodeURIComponent(r.rtb.video.asset_url)}}else if(r.rtb[u.B5]){var y,_=r.rtb[u.B5];if(function(e){if(!e||""===e)return!1;var r=e.match(j),a=null!=r&&r.length>=1,n=e.match(U),t=null!=n&&n.length>=1;return e.startsWith(T)&&t&&a}(r.viewability.config)){var h="pbjs_adid="+t+";pbjs_auc="+n.adUnitCode;y=r.viewability.config.replace("dom_id=%native_dom_id%",h)}var k=_.javascript_trackers;null==k?k=y:(0,s.isStr)(k)?k=[k,y]:k.push(y),i[u.B5]={title:_.title,body:_.desc,body2:_.desc2,cta:_.ctatext,rating:_.rating,sponsoredBy:_.sponsored,privacyLink:_.privacy_link,address:_.address,downloads:_.downloads,likes:_.likes,phone:_.phone,price:_.price,salePrice:_.saleprice,clickUrl:_.link.url,displayUrl:_.displayurl,clickTrackers:_.link.click_trackers,impressionTrackers:_.impression_trackers,video:_.video,javascriptTrackers:k},_.main_img&&(i.native.image={url:_.main_img.url,height:_.main_img.height,width:_.main_img.width}),_.icon&&(i.native.icon={url:_.icon.url,height:_.icon.height,width:_.icon.width})}else{Object.assign(i,{width:r.rtb.banner.width,height:r.rtb.banner.height,ad:r.rtb.banner.content});try{if(r.rtb.trackers)for(var w=0;w<r.rtb.trackers[0].impression_urls.length;w++){var x=r.rtb.trackers[0].impression_urls[w],C=(0,s.createTrackPixelHtml)(x);i.ad+=C}}catch(e){(0,s.logError)("Error appending tracking pixel",e)}}return i}(e,i,n);p.mediaType=function(e){var r=e.ad_type;return r===u.pX?u.pX:r===u.B5?u.B5:u.Mk}(i),t.push(p)}})),e.debug&&e.debug.debug_info){var p="AppNexus Debug Auction for Prebid\n\n"+e.debug.debug_info;p=p.replace(/(<td>|<th>)/gm,"\t").replace(/(<\/td>|<\/th>)/gm,"\n").replace(/^<br>/gm,"").replace(/(<br>\n|<br>)/gm,"\n").replace(/<h1>(.*)<\/h1>/gm,"\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm,"\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim,""),(0,s.logMessage)("https://console.appnexus.com/docs/understanding-the-debug-auction"),(0,s.logMessage)(p)}return t},getMappingFileInfo:function(){return{url:"https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",refreshInDays:2}},getUserSyncs:function(e,r,a,n,t){if(e.iframeEnabled&&(0,b.h)(a)&&function(e){return!e||!Array.isArray(e.applicableSections)||e.applicableSections.every((function(e){return"number"==typeof e&&e<=5}))}(t))return[{type:"iframe",url:"https://acdn.adnxs.com/dmp/async_usersync.html"}]},transformBidParams:function(e,r,a,n){var t=s.transformBidderParamKeywords;if(!0===r){var i=null,d=p.vc.getConfig("s2sConfig");(0,s.isPlainObject)(d)?i=(0,o.Z)(d,"endpoint.p1Consent"):(0,s.isArray)(d)&&d.forEach((function(e){(0,m.q9)(e.bidders,a.bids[0].bidder)&&(i=(0,o.Z)(e,"endpoint.p1Consent"))})),i&&i.match("/openrtb2/prebid")&&(t=W)}return e=(0,s.convertTypes)({member:"string",invCode:"string",placementId:"number",keywords:t,publisherId:"number"},e),r&&(N(e.keywords)&&e.keywords.forEach(R),Object.keys(e).forEach((function(r){var a=(0,s.convertCamelToUnderscore)(r);a!==r&&(e[a]=e[r],delete e[r])})),e.use_pmt_rule="boolean"==typeof e.use_payment_rule&&e.use_payment_rule,e.use_payment_rule&&delete e.use_payment_rule),e}};function N(e){return!!((0,s.isArray)(e)&&e.length>0)}function R(e){N(e.value)&&""===e.value[0]&&delete e.value}function B(e){var r={};Object.keys(e.params).forEach((function(r){var a=(0,s.convertCamelToUnderscore)(r);a!==r&&(e.params[a]=e.params[r],delete e.params[r])})),r.sizes=Z(e.sizes),r.primary_size=r.sizes[0],r.ad_types=[],r.uuid=e.bidId,e.params.placement_id?r.id=parseInt(e.params.placement_id,10):r.code=e.params.inv_code,r.allow_smaller_sizes=e.params.allow_smaller_sizes||!1,r.use_pmt_rule="boolean"==typeof e.params.use_payment_rule?e.params.use_payment_rule:"boolean"==typeof e.params.use_pmt_rule&&e.params.use_pmt_rule,r.prebid=!0,r.disable_psa=!0;var a=function(e){if(!(0,s.isFn)(e.getFloor))return e.params.reserve?e.params.reserve:null;var r=e.getFloor({currency:"USD",mediaType:"*",size:"*"});if((0,s.isPlainObject)(r)&&!isNaN(r.floor)&&"USD"===r.currency)return r.floor;return null}(e);if(a&&(r.reserve=a),e.params.position)r.position={above:1,below:2}[e.params.position]||0;else{var n=(0,o.Z)(e,"mediaTypes.banner.pos")||(0,o.Z)(e,"mediaTypes.video.pos");0!==n&&1!==n&&3!==n||(r.position=3===n?2:n)}e.params.traffic_source_code&&(r.traffic_source_code=e.params.traffic_source_code),e.params.private_sizes&&(r.private_sizes=Z(e.params.private_sizes)),e.params.supply_type&&(r.supply_type=e.params.supply_type),e.params.pub_click&&(r.pubclick=e.params.pub_click),e.params.ext_inv_code&&(r.ext_inv_code=e.params.ext_inv_code),e.params.publisher_id&&(r.publisher_id=parseInt(e.params.publisher_id,10)),e.params.external_imp_id&&(r.external_imp_id=e.params.external_imp_id);var t=(0,o.Z)(e,"ortb2Imp.ext.data.keywords");if((0,s.isStr)(t)&&""!==t||!(0,s.isEmpty)(e.params.keywords)){var i=$(t),d=(0,s.isPlainObject)(e.params.keywords)?(0,s.deepClone)(e.params.keywords):{};Object.keys(d).forEach((function(e){((0,s.isStr)(d[e])||(0,s.isNumber)(d[e]))&&(d[e]=[d[e]])}));var p=(0,s.mergeDeep)({},d,i),c=(0,s.transformBidderParamKeywords)(p);c.length>0&&(c.forEach(R),r.keywords=c)}var f,v,g=(0,o.Z)(e,"ortb2Imp.ext.data.pbadslot");if(g&&(r.gpid=g),(e.mediaType===u.B5||(0,o.Z)(e,"mediaTypes.".concat(u.B5)))&&(r.ad_types.push(u.B5),0===r.sizes.length&&(r.sizes=Z([1,1])),e.nativeParams)){var b=(f=e.nativeParams,v={},Object.keys(f).forEach((function(e){var r=S[e]&&S[e].serverName||S[e]||e,a=S[e]&&S[e].requiredParams;if(v[r]=Object.assign({},a,f[e]),(r===S.image.serverName||r===S.icon.serverName)&&v[r].sizes){var n=v[r].sizes;((0,s.isArrayOfNums)(n)||(0,s.isArray)(n)&&n.length>0&&n.every((function(e){return(0,s.isArrayOfNums)(e)})))&&(v[r].sizes=Z(v[r].sizes))}r===S.privacyLink&&(v.privacy_supported=!0)})),v);r[u.B5]={layouts:[b]}}var y=(0,o.Z)(e,"mediaTypes.".concat(u.pX)),_=(0,o.Z)(e,"mediaTypes.video.context");r.hb_source=y&&"adpod"===_?7:1,(e.mediaType===u.pX||y)&&r.ad_types.push(u.pX),(e.mediaType===u.pX||y&&"outstream"!==_)&&(r.require_asset_url=!0),e.params.video&&(r.video={},Object.keys(e.params.video).filter((function(e){return(0,m.q9)(w,e)})).forEach((function(a){switch(a){case"context":case"playback_method":var n=e.params.video[a];n=(0,s.isArray)(n)?n[0]:n,r.video[a]=A[a][n];break;case"frameworks":break;default:r.video[a]=e.params.video[a]}})),e.params.video.frameworks&&(0,s.isArray)(e.params.video.frameworks)&&(r.video_frameworks=e.params.video.frameworks)),y&&(r.video=r.video||{},Object.keys(y).filter((function(e){return(0,m.q9)(x,e)})).forEach((function(e){switch(e){case"minduration":case"maxduration":"number"!=typeof r.video[e]&&(r.video[e]=y[e]);break;case"skip":"boolean"!=typeof r.video.skippable&&(r.video.skippable=1===y[e]);break;case"skipafter":"number"!=typeof r.video.skipoffset&&(r.video.skippoffset=y[e]);break;case"playbackmethod":if("number"!=typeof r.video.playback_method){var a=y[e];(a=(0,s.isArray)(a)?a[0]:a)>=1&&a<=4&&(r.video.playback_method=a)}break;case"api":if(!r.video_frameworks&&(0,s.isArray)(y[e])){var n=y[e].map((function(e){var r=4===e?5:5===e?4:e;if(r>=1&&r<=5)return r})).filter((function(e){return e}));r.video_frameworks=n}break;case"startdelay":case"placement":if("number"!=typeof r.video.context){var t=y.placement,i=y.startdelay,o=function(e){if(!e)return;if(2===e)return"in-banner";if(e>2)return"outstream"}(t)||function(e){if(!e)return;if(0===e)return"pre_roll";if(-1===e)return"mid_roll";if(-2===e)return"post_roll"}(i);r.video.context=A.context[o]}}}))),e.renderer&&(r.video=Object.assign({},r.video,{custom_renderer_present:!0})),e.params.frameworks&&(0,s.isArray)(e.params.frameworks)&&(r.banner_frameworks=e.params.frameworks);var h=(0,m.sE)(l.K.getAdUnits(),(function(r){return e.transactionId===r.transactionId}));return h&&h.mediaTypes&&h.mediaTypes.banner&&r.ad_types.push(u.Mk),0===r.ad_types.length&&delete r.ad_types,r}function Z(e){var r=[],a={};if((0,s.isArray)(e)&&2===e.length&&!(0,s.isArray)(e[0]))a.width=parseInt(e[0],10),a.height=parseInt(e[1],10),r.push(a);else if("object"===(0,n.Z)(e))for(var t=0;t<e.length;t++){var i=e[t];(a={}).width=parseInt(i[0],10),a.height=parseInt(i[1],10),r.push(a)}return r}function z(e){return!!e.params.user}function D(e){return!!parseInt(e.params.member,10)}function M(e){if(e.params)return!!e.params.app}function X(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}function F(e){return!!e.debug}function K(e){return e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.context===u.Oh}function L(e){var r=!1,a=e.params,n=e.params.video;return a.frameworks&&(0,s.isArray)(a.frameworks)&&(r=(0,m.q9)(e.params.frameworks,6)),!r&&n&&n.frameworks&&(0,s.isArray)(n.frameworks)&&(r=(0,m.q9)(e.params.video.frameworks,6)),r}function V(e,r,a){(0,s.isEmpty)(e.video)&&(e.video={}),e.video[r]=a}function J(e,r){!function(e){try{var r=document.getElementById(e).querySelectorAll("div[id^='google_ads']");r[0]&&r[0].style.setProperty("display","none")}catch(e){}}(e.adUnitCode),function(e){try{var r=document.getElementById(e).querySelectorAll("script[id^='sas_script']");r[0].nextSibling&&"iframe"===r[0].nextSibling.localName&&r[0].nextSibling.style.setProperty("display","none")}catch(e){}}(e.adUnitCode),e.renderer.push((function(){((0,s.getWindowFromDocument)(r)||window).ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},H.bind(null,e))}))}function H(e,r,a){e.renderer.handleVideoEvent({id:r,eventName:a})}function W(e){var r="";return Object.keys(e).forEach((function(a){(0,s.isStr)(e[a])?""!==e[a]?r+="".concat(a,"=").concat(e[a],","):r+="".concat(a,","):(0,s.isArray)(e[a])&&(""===e[a][0]?r+="".concat(a,","):e[a].forEach((function(e){r+="".concat(a,"=").concat(e,",")})))})),r=r.substring(0,r.length-1)}function $(e){var r={};(0,s.isStr)(e)&&""!==e&&e.split(/\s*(?:,)\s*/).forEach((function(e){if(-1!==e.indexOf("=")){var a=e.split("="),n=a[0],t=a[1];r.hasOwnProperty(n)?r[n].push(t):r[n]=[t]}else r.hasOwnProperty(e)||(r[e]=[""])}));return r}(0,c.dX)(P),(0,i.z)("appnexusBidAdapter")},17673:function(e,r,a){a.d(r,{h:function(){return t}});var n=a(20265);function t(e){return null==e||!e.gdprApplies||!0===(0,n.Z)(e,"vendorData.purpose.consents.1")}}},function(e){var r;r=46319,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[21266],{55630:function(n,e,t){var o,r,i,a,c,s,u=t(71002),l=t(4942),f=t(78640),d=t(64358),p=t(96475),g=t(3193),m=t(51039),v=t(34614),b=t(99128),y=t(26372),C=t(54078),w=!1,P={iab:function(n){var e=n.onSuccess,t=n.onError,o=n.onEvent;function r(n,r){(0,d.logInfo)("Received a response from CMP",n),r?(o(n),!1!==n.gdprApplies&&"tcloaded"!==n.eventStatus&&"useractioncomplete"!==n.eventStatus||S(n,{onSuccess:e,onError:t})):t("CMP unable to register callback function.  Please check CMP setup.")}var i={},a=function(){for(var n,e,t=window;;){try{if("function"==typeof t.__tcfapi){e=t.__tcfapi,n=t;break}}catch(n){}try{if(t.frames.__tcfapiLocator){n=t;break}}catch(n){}if(t===window.top)break;t=t.parent}return{cmpFrame:n,cmpFunction:e}}(),c=a.cmpFrame,s=a.cmpFunction;if(!c)return t("TCF2 CMP not found.");"function"==typeof s?((0,d.logInfo)("Detected CMP API is directly accessible, calling it now..."),s("addEventListener",2,r)):((0,d.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."),function(n,e,t){var o="__tcfapi",r="".concat(o,"Call");function a(n){var e="".concat(o,"Return"),t="string"==typeof n.data&&(0,v.q9)(n.data,e)?JSON.parse(n.data):n.data;if(t[e]&&t[e].callId){var r=t[e];i.hasOwnProperty(r.callId)&&i[r.callId](r.returnValue,r.success)}}window[o]=function(n,t,o,a){var c=Math.random()+"",s=(0,l.Z)({},r,{command:n,version:t,parameter:a,callId:c});i[c]=o,e.postMessage(s,"*")},window.addEventListener("message",a,!1),window[o](n,2,t)}("addEventListener",c,r))},static:function(n){var e=n.onSuccess,t=n.onError;S(a,{onSuccess:e,onError:t})}};function h(n){var e,t,i=!1,a=null,s=!1;function u(n){null!=a&&clearTimeout(a),i||null==n||(0===n?e():a=setTimeout(e,n))}function l(e,t,o){if(u(null),i=!0,m.rp.setConsentData(e),"function"==typeof n){for(var r=arguments.length,a=new Array(r>3?r-3:0),c=3;c<r;c++)a[c-3]=arguments[c];n.apply(void 0,[t,o].concat(a))}}if((0,v.q9)(Object.keys(P),o)){var f={onSuccess:function(n){return l(n,!1)},onError:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];l.apply(void 0,[null,!0,n].concat(t))},onEvent:function(n){t=n,s||(s=!0,null!=c&&u(c))}};e=function(){var n=function(n){l(n,!1,"".concat(s?"Timeout waiting for user action on CMP":"CMP did not load",", continuing auction..."))};S(t,{onSuccess:n,onError:function(){return n(E(void 0))}})},P[o](f),null!=c&&s||u(r)}else l(null,!1,"CMP framework (".concat(o,") is not a supported framework.  Aborting consentManagement module and resuming auction."))}var M=(0,b.g3)("gdpr",(function(n,e){var t;t=function(t,o){if(o){var r=d.logWarn;t&&(r=d.logError,o="".concat(o," Canceling auction as per consentManagement config."));for(var i=arguments.length,a=new Array(i>2?i-2:0),c=2;c<i;c++)a[c-2]=arguments[c];r.apply(void 0,[o].concat(a))}t?(n.stopTiming(),"function"==typeof e.bidsBackHandler?e.bidsBackHandler():(0,d.logError)("Error executing bidsBackHandler")):n.call(this,e)},s?((0,d.logInfo)("User consent information already known.  Pulling internally stored information..."),t(!1)):h(t)}));function S(n,e){var t,o,r=e.onSuccess,a=e.onError;t=n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:i,o=n&&n.tcString,"boolean"==typeof t&&(!0!==t||o&&(0,d.isStr)(o))?r(E(n)):a("CMP returned unexpected value during lookup process.",n)}function E(n){return s={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:i},n&&n.addtlConsent&&(0,d.isStr)(n.addtlConsent)&&(s.addtlConsent=n.addtlConsent),s.apiVersion=2,s}g.vc.getConfig("consentManagement",(function(n){return function(n){if((n=n&&(n.gdpr||n.usp||n.gpp?n.gdpr:n))&&"object"===(0,u.Z)(n)){var e;(0,d.isStr)(n.cmpApi)?o=n.cmpApi:(o="iab",(0,d.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab",")."))),(0,d.isNumber)(n.timeout)?r=n.timeout:(r=1e4,(0,d.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4,")."))),c=(0,d.isNumber)(n.actionTimeout)?n.actionTimeout:null,i=!0===n.defaultGdprScope,(0,d.logInfo)("consentManagement module has been activated..."),"static"===o&&((0,d.isPlainObject)(n.consentData)?(null!=(null===(e=a=n.consentData)||void 0===e?void 0:e.getTCData)&&(a=a.getTCData),r=0):(0,d.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),w||(0,f.R)().requestBids.before(M,50),w=!0,m.rp.enable(),h()}else(0,d.logWarn)("consentManagement (gdpr) config not defined, exiting consent manager")}(n.consentManagement)})),C.S.before((function(n,e){return n(e.then((function(n){var e=m.rp.getConsentData();return e&&("boolean"==typeof e.gdprApplies&&(0,p.N)(n,"regs.ext.gdpr",e.gdprApplies?1:0),(0,p.N)(n,"user.ext.consent",e.consentString)),n})))})),(0,y.f8)({type:y.Z,name:"gdprAddtlConsent",fn:function(n,e){var t,o=null===(t=e.gdprConsent)||void 0===t?void 0:t.addtlConsent;o&&"string"==typeof o&&(0,p.N)(n,"user.ext.ConsentedProvidersSettings.consented_providers",o)}}),(0,f.z)("consentManagement")},26372:function(n,e,t){t.d(e,{DZ:function(){return a},Px:function(){return c},TP:function(){return u},YC:function(){return s},Z:function(){return i},f8:function(){return g},fP:function(){return m},gm:function(){return o},md:function(){return l}});var o=["request","imp","bidResponse","response"],r=["default","pbs"],i=o[0],a=o[1],c=o[2],s=o[3],u=r[0],l=r[1],f=new Set(o);var d,p=(d={},{registerOrtbProcessor:function(n){var e=n.type,t=n.name,r=n.fn,i=n.priority,a=void 0===i?0:i,c=n.dialects,s=void 0===c?[u]:c;if(!f.has(e))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));s.forEach((function(n){d.hasOwnProperty(n)||(d[n]={}),d[n].hasOwnProperty(e)||(d[n][e]={}),d[n][e][t]={priority:a,fn:r}}))},getProcessors:function(n){return d[n]||{}}}),g=p.registerOrtbProcessor,m=p.getProcessors}},function(n){var e;e=55630,n(n.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[6406],{60241:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(78640),_src_utils_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(64358),_src_utils_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(20265),_src_adloader_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(55730),_src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(14699),_src_config_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3193),_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(24679),_src_polyfill_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(34614),criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1582),_src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15164),_src_native_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(70059),_src_refererDetection_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(25102),_src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(17673),GVLID=91,ADAPTER_VERSION=35,BIDDER_CODE="criteo",CDB_ENDPOINT="https://bidder.criteo.com/cdb",PROFILE_ID_INLINE=207,PROFILE_ID_PUBLISHERTAG=185,storage=(0,_src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.df)({bidderCode:BIDDER_CODE}),LOG_PREFIX="Criteo: ",FAST_BID_VERSION_PLACEHOLDER="%FAST_BID_VERSION%",FAST_BID_VERSION_CURRENT=135,FAST_BID_VERSION_LATEST="latest",FAST_BID_VERSION_NONE="none",PUBLISHER_TAG_URL_TEMPLATE="https://static.criteo.net/js/ld/publishertag.prebid"+FAST_BID_VERSION_PLACEHOLDER+".js",FAST_BID_PUBKEY_E=65537,FAST_BID_PUBKEY_N="ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",OPTOUT_COOKIE_NAME="cto_optout",BUNDLE_COOKIE_NAME="cto_bundle",GUID_RETENTION_TIME_HOUR=9360,OPTOUT_RETENTION_TIME_HOUR=43200,spec={code:BIDDER_CODE,gvlid:GVLID,supportedMediaTypes:[_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk,_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX,_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5],getUserSyncs:function(t,e,r,i){if(canFastBid(_src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.fastBidVersion")))return[];var o=(0,_src_refererDetection_js__WEBPACK_IMPORTED_MODULE_4__.nH)(),a="criteoPrebidAdapter";if(t.iframeEnabled&&(0,_src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_5__.h)(r)){var s=[];s.push("origin=".concat(a)),s.push("topUrl=".concat(o.domain)),r&&(r.gdprApplies&&s.push("gdpr=".concat(1==r.gdprApplies?1:0)),r.consentString&&s.push("gdpr_consent=".concat(r.consentString))),i&&s.push("us_privacy=".concat(i));var n=Math.random().toString(),_={bundle:readFromAllStorages(BUNDLE_COOKIE_NAME),cw:storage.cookiesAreEnabled(),lsw:storage.localStorageIsEnabled(),optoutCookie:readFromAllStorages(OPTOUT_COOKIE_NAME),origin:a,requestId:n,tld:o.domain,topUrl:o.domain,version:"7.45.0".replace(/\./g,"_")};window.addEventListener("message",(function t(e){if(e.data&&"https://gum.criteo.com"==e.origin&&e.data.requestId===n){this.removeEventListener("message",t),e.stopImmediatePropagation();var r=e.data;r.optout?(deleteFromAllStorages(BUNDLE_COOKIE_NAME),saveOnAllStorages(OPTOUT_COOKIE_NAME,!0,OPTOUT_RETENTION_TIME_HOUR)):r.bundle&&saveOnAllStorages(BUNDLE_COOKIE_NAME,r.bundle,GUID_RETENTION_TIME_HOUR)}}),!0);var p=JSON.stringify(_).replace(/"/g,"%22");return[{type:"iframe",url:"https://gum.criteo.com/syncframe?".concat(s.join("&"),"#").concat(p)}]}return[]},isBidRequestValid:function(t){return!(!t||!t.params||!t.params.zoneId&&!t.params.networkId)&&!(hasVideoMediaType(t)&&!hasValidVideoMediaType(t))},buildRequests:function(t,e){var r,i,o,a;t=(0,_src_native_js__WEBPACK_IMPORTED_MODULE_6__.lY)(t);var s=e.ortb2||{};Object.assign(e,{publisherExt:null===(r=s.site)||void 0===r?void 0:r.ext,userExt:null===(i=s.user)||void 0===i?void 0:i.ext,ceh:_src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.ceh"),coppa:_src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("coppa")});var n=_src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.fastBidVersion"),_=canFastBid(n);if(!publisherTagAvailable()&&_){window.Criteo=window.Criteo||{},window.Criteo.usePrebidEvents=!1,tryGetCriteoFastBid();var p=getFastBidUrl(n);setTimeout((function(){(0,_src_adloader_js__WEBPACK_IMPORTED_MODULE_7__.B)(p,BIDDER_CODE)}),e.timeout)}if(publisherTagAvailable()){var c=new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG,ADAPTER_VERSION,t,e,"7.45.0");o=c.buildCdbUrl(),a=c.buildCdbRequest()}else{var d=buildContext(t,e);o=buildCdbUrl(d),a=buildCdbRequest(d,t,e)}if(a)return{method:"POST",url:o,data:a,bidRequests:t}},interpretResponse:function(t,e){var r=t.body||t;if(publisherTagAvailable()){var i=Criteo.PubTag.Adapters.Prebid.GetAdapter(e);if(i)return i.interpretResponse(r,e)}var o=[];return r&&r.slots&&(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.isArray)(r.slots)&&r.slots.forEach((function(i){var a,s,n,_,p=(0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_9__.sE)(e.bidRequests,(function(t){return t.adUnitCode===i.impid&&(!t.params.zoneId||parseInt(t.params.zoneId)===i.zoneid)})),c=p.bidId,d={requestId:c,cpm:i.cpm,currency:i.currency,netRevenue:!0,ttl:i.ttl||60,creativeId:i.creativecode,width:i.width,height:i.height,dealId:i.dealCode};if(null!==(a=r.ext)&&void 0!==a&&null!==(s=a.paf)&&void 0!==s&&s.transmission&&null!==(n=i.ext)&&void 0!==n&&null!==(_=n.paf)&&void 0!==_&&_.content_id){var u={content_id:i.ext.paf.content_id,transmission:t.ext.paf.transmission};d.meta=Object.assign({},d.meta,{paf:u})}i.adomain&&(d.meta=Object.assign({},d.meta,{advertiserDomains:[i.adomain].flat()})),i.native?p.params.nativeCallback?d.ad=createNativeAd(c,i.native,p.params.nativeCallback):(d.native=createPrebidNativeAd(i.native),d.mediaType=_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5):i.video?(d.vastUrl=i.displayurl,d.mediaType=_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX):d.ad=i.creative,o.push(d)})),o},onTimeout:function(t){if(publisherTagAvailable()&&Array.isArray(t)){var e=[];t.forEach((function(t){-1===e.indexOf(t.auctionId)&&(e.push(t.auctionId),Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout())}))}},onBidWon:function(t){publisherTagAvailable()&&t&&Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)},onSetTargeting:function(t){publisherTagAvailable()&&Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)}};function readFromAllStorages(t){var e=storage.getCookie(t),r=storage.getDataFromLocalStorage(t);return e||r||void 0}function saveOnAllStorages(t,e,r){var i=new Date;i.setTime(i.getTime()+60*r*60*1e3);var o="expires=".concat(i.toUTCString());storage.setCookie(t,e,o),storage.setDataInLocalStorage(t,e)}function deleteFromAllStorages(t){storage.setCookie(t,"",0),storage.removeDataFromLocalStorage(t)}function publisherTagAvailable(){return"undefined"!=typeof Criteo&&Criteo.PubTag&&Criteo.PubTag.Adapters&&Criteo.PubTag.Adapters.Prebid}function buildContext(t,e){var r,i="";e&&e.refererInfo&&(i=e.refererInfo.page);var o=(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.parseUrl)(null==e||null===(r=e.refererInfo)||void 0===r?void 0:r.topmostLocation).search,a={url:i,debug:"1"===o.pbt_debug,noLog:"1"===o.pbt_nolog,amp:!1};return t.forEach((function(t){"amp"===t.params.integrationMode&&(a.amp=!0)})),a}function buildCdbUrl(t){var e=CDB_ENDPOINT;e+="?profileId="+PROFILE_ID_INLINE,e+="&av="+String(ADAPTER_VERSION),e+="&wv="+encodeURIComponent("7.45.0"),e+="&cb="+String(Math.floor(99999999999*Math.random())),storage.localStorageIsEnabled()?e+="&lsavail=1":e+="&lsavail=0",t.amp&&(e+="&im=1"),t.debug&&(e+="&debug=1"),t.noLog&&(e+="&nolog=1");var r=readFromAllStorages(BUNDLE_COOKIE_NAME);return r&&(e+="&bundle=".concat(r)),readFromAllStorages(OPTOUT_COOKIE_NAME)&&(e+="&optout=1"),e}function checkNativeSendId(t){return!(t.nativeParams&&(t.nativeParams.image&&(!0!==t.nativeParams.image.sendId||!0===t.nativeParams.image.sendTargetingKeys)||t.nativeParams.icon&&(!0!==t.nativeParams.icon.sendId||!0===t.nativeParams.icon.sendTargetingKeys)||t.nativeParams.clickUrl&&(!0!==t.nativeParams.clickUrl.sendId||!0===t.nativeParams.clickUrl.sendTargetingKeys)||t.nativeParams.displayUrl&&(!0!==t.nativeParams.displayUrl.sendId||!0===t.nativeParams.displayUrl.sendTargetingKeys)||t.nativeParams.privacyLink&&(!0!==t.nativeParams.privacyLink.sendId||!0===t.nativeParams.privacyLink.sendTargetingKeys)||t.nativeParams.privacyIcon&&(!0!==t.nativeParams.privacyIcon.sendId||!0===t.nativeParams.privacyIcon.sendTargetingKeys)))}function buildCdbRequest(t,e,r){var i,o,a,s,n,_,p,c,d={publisher:{url:t.url,ext:r.publisherExt},regs:{coppa:!0===r.coppa?1:!1===r.coppa?0:void 0,gpp:null===(i=r.ortb2)||void 0===i||null===(o=i.regs)||void 0===o?void 0:o.gpp,gpp_sid:null===(a=r.ortb2)||void 0===a||null===(s=a.regs)||void 0===s?void 0:s.gpp_sid},slots:e.map((function(t){p=t.params.networkId||p,c=t.schain||c;var e={impid:t.adUnitCode,transactionid:t.transactionId,auctionId:t.auctionId};if(t.params.zoneId&&(e.zoneid=t.params.zoneId),(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t,"ortb2Imp.ext")&&(e.ext=t.ortb2Imp.ext),t.params.ext&&(e.ext=Object.assign({},e.ext,t.params.ext)),t.params.publisherSubId&&(e.publishersubid=t.params.publisherSubId),(t.params.nativeCallback||hasNativeMediaType(t))&&(e.native=!0,checkNativeSendId(t)||(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logWarn)(LOG_PREFIX+"all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)")),hasBannerMediaType(t)?e.sizes=parseSizes((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t,"mediaTypes.banner.sizes"),parseSize):e.sizes=[],hasVideoMediaType(t)){var r={playersizes:parseSizes((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t,"mediaTypes.video.playerSize"),parseSize),mimes:t.mediaTypes.video.mimes,protocols:t.mediaTypes.video.protocols,maxduration:t.mediaTypes.video.maxduration,api:t.mediaTypes.video.api,skip:t.mediaTypes.video.skip,placement:t.mediaTypes.video.placement,minduration:t.mediaTypes.video.minduration,playbackmethod:t.mediaTypes.video.playbackmethod,startdelay:t.mediaTypes.video.startdelay},i=t.params.video;void 0!==i&&(r.skip=r.skip||i.skip||0,r.placement=r.placement||i.placement,r.minduration=r.minduration||i.minduration,r.playbackmethod=r.playbackmethod||i.playbackmethod,r.startdelay=r.startdelay||i.startdelay||0),e.video=r}return enrichSlotWithFloors(e,t),e}))};return p&&(d.publisher.networkid=p),c&&(d.source={ext:{schain:c}}),d.user=(null===(n=r.ortb2)||void 0===n?void 0:n.user)||{},d.site=(null===(_=r.ortb2)||void 0===_?void 0:_.site)||{},r&&r.ceh&&(d.user.ceh=r.ceh),r&&r.gdprConsent&&(d.gdprConsent={},void 0!==r.gdprConsent.gdprApplies&&(d.gdprConsent.gdprApplies=!!r.gdprConsent.gdprApplies),d.gdprConsent.version=r.gdprConsent.apiVersion,void 0!==r.gdprConsent.consentString&&(d.gdprConsent.consentData=r.gdprConsent.consentString)),r&&r.uspConsent&&(d.user.uspIab=r.uspConsent),d}function parseSizes(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t};return null==t?[]:Array.isArray(t[0])?t.map((function(t){return e(t)})):[e(t)]}function parseSize(t){return t[0]+"x"+t[1]}function hasVideoMediaType(t){return void 0!==(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t,"mediaTypes.video")}function hasBannerMediaType(t){return void 0!==(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t,"mediaTypes.banner")}function hasNativeMediaType(t){return void 0!==(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t,"mediaTypes.native")}function hasValidVideoMediaType(t){var e=!0;if(["mimes","playerSize","maxduration","protocols","api","skip","placement","playbackmethod"].forEach((function(r){void 0===(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t,"mediaTypes.video."+r)&&void 0===(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t,"params.video."+r)&&(e=!1,(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logError)("Criteo Bid Adapter: mediaTypes.video."+r+" is required"))})),e){var r=t.mediaTypes.video.placement||t.params.video.placement;if("instream"==t.mediaTypes.video.context&&1===r)return!0;if("outstream"==t.mediaTypes.video.context&&1!==r)return!0}return!1}function createPrebidNativeAd(t){return{sendTargetingKeys:!1,title:t.products[0].title,body:t.products[0].description,sponsoredBy:t.advertiser.description,icon:t.advertiser.logo,image:t.products[0].image,clickUrl:t.products[0].click_url,privacyLink:t.privacy.optout_click_url,privacyIcon:t.privacy.optout_image_url,cta:t.products[0].call_to_action,price:t.products[0].price,impressionTrackers:t.impression_pixels.map((function(t){return t.url}))}}function createNativeAd(t,e,r){var i="criteo_prebid_native_slots";return window[i]=window[i]||{},window[i][t]={callback:r,payload:e},'\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i,';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t,'"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>')}function pickAvailableGetFloorFunc(t){if(t.getFloor)return t.getFloor;if(t.params.bidFloor&&t.params.bidFloorCur)try{var e=parseFloat(t.params.bidFloor);return function(){return{currency:t.params.bidFloorCur,floor:e}}}catch(t){}}function enrichSlotWithFloors(t,e){try{var r={},i=pickAvailableGetFloorFunc(e);if(i){var o,a,s;if(null!==(o=e.mediaTypes)&&void 0!==o&&o.banner)r.banner={},parseSizes((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(e,"mediaTypes.banner.sizes")).forEach((function(t){return r.banner[parseSize(t).toString()]=i.call(e,{size:t,mediaType:_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk})}));if(null!==(a=e.mediaTypes)&&void 0!==a&&a.video)r.video={},parseSizes((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(e,"mediaTypes.video.playerSize")).forEach((function(t){return r.video[parseSize(t).toString()]=i.call(e,{size:t,mediaType:_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX})}));null!==(s=e.mediaTypes)&&void 0!==s&&s.native&&(r.native={},r.native["*"]=i.call(e,{size:"*",mediaType:_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5})),Object.keys(r).length>0&&(t.ext||(t.ext={}),Object.assign(t.ext,{floors:r}))}}catch(t){(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logError)("Could not parse floors from Prebid: "+t)}}function canFastBid(t){return t!==FAST_BID_VERSION_NONE}function getFastBidUrl(t){var e;if(t===FAST_BID_VERSION_LATEST)e="";else if(t){String(t).split(".")[0]<102&&(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logWarn)("Specifying a Fastbid version which is not supporting version selection."),e="."+t}else e="."+FAST_BID_VERSION_CURRENT;return PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER,e)}function tryGetCriteoFastBid(){try{var fastBidStorageKey="criteo_fast_bid",hashPrefix="// Hash: ",fastBidFromStorage=storage.getDataFromLocalStorage(fastBidStorageKey);if(null!==fastBidFromStorage){var firstLineEndPosition=fastBidFromStorage.indexOf("\n"),firstLine=fastBidFromStorage.substr(0,firstLineEndPosition).trim();if(firstLine.substr(0,hashPrefix.length)!==hashPrefix)(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logWarn)("No hash found in FastBid"),storage.removeDataFromLocalStorage(fastBidStorageKey);else{var publisherTagHash=firstLine.substr(hashPrefix.length),publisherTag=fastBidFromStorage.substr(firstLineEndPosition+1);(0,criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__.T)(publisherTag,publisherTagHash,FAST_BID_PUBKEY_N,FAST_BID_PUBKEY_E)?((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logInfo)("Using Criteo FastBid"),eval(publisherTag)):((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logWarn)("Invalid Criteo FastBid found"),storage.removeDataFromLocalStorage(fastBidStorageKey))}}}catch(t){}}(0,_src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_11__.dX)(spec),(0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_12__.z)("criteoBidAdapter")},17673:function(t,e,r){r.d(e,{h:function(){return o}});var i=r(20265);function o(t){return null==t||!t.gdprApplies||!0===(0,i.Z)(t,"vendorData.purpose.consents.1")}},44611:function(t,e){var r;Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){null!==t&&this.fromHexString(t)}return t.prototype.toHexString=function(){if(this.s<0)return"-"+this.negate().toHexString();var t,e=!1,r="",i=this.t,o=this.DB-i*this.DB%4;if(i-- >0)for(o<this.DB&&(t=this[i]>>o)>0&&(e=!0,r=c(t));i>=0;)o<4?(t=(this[i]&(1<<o)-1)<<4-o,t|=this[--i]>>(o+=this.DB-4)):(t=this[i]>>(o-=4)&15,o<=0&&(o+=this.DB,--i)),t>0&&(e=!0),e&&(r+=c(t));return e?r:"0"},t.prototype.fromHexString=function(e){if(null!==e){this.t=0,this.s=0;for(var r=e.length,i=!1,o=0;--r>=0;){var a=p(e,r);a<0?"-"==e.charAt(r)&&(i=!0):(i=!1,0==o?this[this.t++]=a:o+4>this.DB?(this[this.t-1]|=(a&(1<<this.DB-o)-1)<<o,this[this.t++]=a>>this.DB-o):this[this.t-1]|=a<<o,(o+=4)>=this.DB&&(o-=this.DB))}0,this.clamp(),i&&t.ZERO.subTo(this,this)}},t.prototype.negate=function(){var e=o();return t.ZERO.subTo(this,e),e},t.prototype.abs=function(){return this.s<0?this.negate():this},t.prototype.mod=function(e){var r=o();return this.abs().divRemTo(e,null,r),this.s<0&&r.compareTo(t.ZERO)>0&&e.subTo(r,r),r},t.prototype.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},t.prototype.lShiftTo=function(t,e){for(var r=t%this.DB,i=this.DB-r,o=(1<<i)-1,a=Math.floor(t/this.DB),s=this.s<<r&this.DM,n=this.t-1;n>=0;--n)e[n+a+1]=this[n]>>i|s,s=(this[n]&o)<<r;for(n=a-1;n>=0;--n)e[n]=0;e[a]=s,e.t=this.t+a+1,e.s=this.s,e.clamp()},t.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return(e=(e=(e=(e=e*(2-(15&t)*e)&15)*(2-(255&t)*e)&255)*(2-((65535&t)*e&65535))&65535)*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},t.prototype.dlShiftTo=function(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s},t.prototype.squareTo=function(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var i=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,i,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()},t.prototype.multiplyTo=function(e,r){var i=this.abs(),o=e.abs(),a=i.t;for(r.t=a+o.t;--a>=0;)r[a]=0;for(a=0;a<o.t;++a)r[a+i.t]=i.am(0,o[a],r,a,0,i.t);r.s=0,r.clamp(),this.s!=e.s&&t.ZERO.subTo(r,r)},t.prototype.divRemTo=function(e,r,i){var s=e.abs();if(!(s.t<=0)){var n=this.abs();if(n.t<s.t)return null!=r&&r.fromHexString("0"),void(null!=i&&this.copyTo(i));null==i&&(i=o());var _=o(),p=this.s,c=e.s,d=this.DB-a(s[s.t-1]);d>0?(s.lShiftTo(d,_),n.lShiftTo(d,i)):(s.copyTo(_),n.copyTo(i));var u=_.t,l=_[u-1];if(0!=l){var h=l*(1<<this.F1)+(u>1?_[u-2]>>this.F2:0),f=this.FV/h,E=(1<<this.F1)/h,v=1<<this.F2,m=i.t,T=m-u,g=null==r?o():r;for(_.dlShiftTo(T,g),i.compareTo(g)>=0&&(i[i.t++]=1,i.subTo(g,i)),t.ONE.dlShiftTo(u,g),g.subTo(_,_);_.t<u;)_[_.t++]=0;for(;--T>=0;){var O=i[--m]==l?this.DM:Math.floor(i[m]*f+(i[m-1]+v)*E);if((i[m]+=_.am(0,O,i,T,0,u))<O)for(_.dlShiftTo(T,g),i.subTo(g,i);i[m]<--O;)i.subTo(g,i)}null!=r&&(i.drShiftTo(u,r),p!=c&&t.ZERO.subTo(r,r)),i.t=u,i.clamp(),d>0&&i.rShiftTo(d,i),p<0&&t.ZERO.subTo(i,i)}}},t.prototype.rShiftTo=function(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)e.t=0;else{var i=t%this.DB,o=this.DB-i,a=(1<<i)-1;e[0]=this[r]>>i;for(var s=r+1;s<this.t;++s)e[s-r-1]|=(this[s]&a)<<o,e[s-r]=this[s]>>i;i>0&&(e[this.t-r-1]|=(this.s&a)<<o),e.t=this.t-r,e.clamp()}},t.prototype.drShiftTo=function(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s},t.prototype.subTo=function(t,e){for(var r=0,i=0,o=Math.min(t.t,this.t);r<o;)i+=this[r]-t[r],e[r++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;r<this.t;)i+=this[r],e[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<t.t;)i-=t[r],e[r++]=i&this.DM,i>>=this.DB;i-=t.s}e.s=i<0?-1:0,i<-1?e[r++]=this.DV+i:i>0&&(e[r++]=i),e.t=r,e.clamp()},t.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},t.prototype.modPowInt=function(t,e){var r;return r=t<256||e.isEven()?new d(e):new u(e),this.exp(t,r)},t.prototype.exp=function(e,r){if(e>4294967295||e<1)return t.ONE;var i=o(),s=o(),n=r.convert(this),_=a(e)-1;for(n.copyTo(i);--_>=0;)if(r.sqrTo(i,s),(e&1<<_)>0)r.mulTo(s,n,i);else{var p=i;i=s,s=p}return r.revert(i)},t.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},t.prototype.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(0!=(e=r-t.t))return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0},t.prototype.am1=function(t,e,r,i,o,a){for(;--a>=0;){var s=e*this[t++]+r[i]+o;o=Math.floor(s/67108864),r[i++]=67108863&s}return o},t.prototype.am2=function(t,e,r,i,o,a){for(var s=32767&e,n=e>>15;--a>=0;){var _=32767&this[t],p=this[t++]>>15,c=n*_+p*s;o=((_=s*_+((32767&c)<<15)+r[i]+(1073741823&o))>>>30)+(c>>>15)+n*p+(o>>>30),r[i++]=1073741823&_}return o},t.prototype.am3=function(t,e,r,i,o,a){for(var s=16383&e,n=e>>14;--a>=0;){var _=16383&this[t],p=this[t++]>>14,c=n*_+p*s;o=((_=s*_+((16383&c)<<14)+r[i]+o)>>28)+(c>>14)+n*p,r[i++]=268435455&_}return o},t}();function o(){return new i(null)}function a(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}e.BigInteger=i,e.nbi=o,e.nbits=a;var s,n,_=[];for(s="0".charCodeAt(0),n=0;n<=9;++n)_[s++]=n;for(s="a".charCodeAt(0),n=10;n<36;++n)_[s++]=n;for(s="A".charCodeAt(0),n=10;n<36;++n)_[s++]=n;function p(t,e){var r=_[t.charCodeAt(e)];return null==r?-1:r}e.intAt=p;function c(t){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)}e.int2char=c;e.b64toHex=function(t){var e,r="",i=0,o=0;for(e=0;e<t.length&&"="!=t.charAt(e);++e){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));a<0||(0==i?(r+=c(a>>2),o=3&a,i=1):1==i?(r+=c(o<<2|a>>4),o=15&a,i=2):2==i?(r+=c(o),r+=c(a>>2),o=3&a,i=3):(r+=c(o<<2|a>>4),r+=c(15&a),i=0))}return 1==i&&(r+=c(o<<2)),r},e.removeExtraSymbols=function(t){return t.replace(/^1f+00/,"").replace("3031300d060960864801650304020105000420","")};var d=function(){function t(t){this.m=t}return t.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},t.prototype.revert=function(t){return t},t.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}(),u=function(){function t(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}return t.prototype.convert=function(t){var e=o();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(i.ZERO)>0&&this.m.subTo(e,e),e},t.prototype.revert=function(t){var e=o();return t.copyTo(e),this.reduce(e),e},t.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],i=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=e+this.m.t]+=this.m.am(0,i,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}();function l(t){var e=o();return e.fromHexString(t.toString()),e}e.nbv=l,i.ZERO=l(0),i.ONE=l(1),"Microsoft Internet Explorer"==navigator.appName?(i.prototype.am=i.prototype.am2,r=30):"Netscape"!=navigator.appName?(i.prototype.am=i.prototype.am1,r=26):(i.prototype.am=i.prototype.am3,r=28),i.prototype.DB=r,i.prototype.DM=(1<<r)-1,i.prototype.DV=1<<r;i.prototype.FV=Math.pow(2,52),i.prototype.F1=52-r,i.prototype.F2=2*r-52},94950:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.hash=function(e){e=t.utf8Encode(e||"");for(var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],i=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],o=(e+=String.fromCharCode(128)).length/4+2,a=Math.ceil(o/16),s=new Array(a),n=0;n<a;n++){s[n]=new Array(16);for(var _=0;_<16;_++)s[n][_]=e.charCodeAt(64*n+4*_)<<24|e.charCodeAt(64*n+4*_+1)<<16|e.charCodeAt(64*n+4*_+2)<<8|e.charCodeAt(64*n+4*_+3)<<0}var p=8*(e.length-1)/Math.pow(2,32),c=8*(e.length-1)>>>0;s[a-1][14]=Math.floor(p),s[a-1][15]=c;for(n=0;n<a;n++){for(var d=new Array(64),u=0;u<16;u++)d[u]=s[n][u];for(u=16;u<64;u++)d[u]=t.q1(d[u-2])+d[u-7]+t.q0(d[u-15])+d[u-16]>>>0;var l=i[0],h=i[1],f=i[2],E=i[3],v=i[4],m=i[5],T=i[6],g=i[7];for(u=0;u<64;u++){var O=g+t.z1(v)+t.Ch(v,m,T)+r[u]+d[u],D=t.z0(l)+t.Maj(l,h,f);g=T,T=m,m=v,v=E+O>>>0,E=f,f=h,h=l,l=O+D>>>0}i[0]=i[0]+l>>>0,i[1]=i[1]+h>>>0,i[2]=i[2]+f>>>0,i[3]=i[3]+E>>>0,i[4]=i[4]+v>>>0,i[5]=i[5]+m>>>0,i[6]=i[6]+T>>>0,i[7]=i[7]+g>>>0}var b=new Array(i.length);for(g=0;g<i.length;g++)b[g]=("00000000"+i[g].toString(16)).slice(-8);return b.join("")},t.utf8Encode=function(t){try{return(new TextEncoder).encode(t).reduce((function(t,e){return t+String.fromCharCode(e)}),"")}catch(e){return unescape(encodeURIComponent(t))}},t.ROTR=function(t,e){return e>>>t|e<<32-t},t.z0=function(e){return t.ROTR(2,e)^t.ROTR(13,e)^t.ROTR(22,e)},t.z1=function(e){return t.ROTR(6,e)^t.ROTR(11,e)^t.ROTR(25,e)},t.q0=function(e){return t.ROTR(7,e)^t.ROTR(18,e)^e>>>3},t.q1=function(e){return t.ROTR(17,e)^t.ROTR(19,e)^e>>>10},t.Ch=function(t,e,r){return t&e^~t&r},t.Maj=function(t,e,r){return t&e^t&r^e&r},t}();e.Sha256=r},1582:function(t,e,r){var i=r(44611),o=r(94950);e.T=function(t,e,r,a){var s=new i.BigInteger(i.b64toHex(e)),n=new i.BigInteger(i.b64toHex(r)),_=s.modPowInt(a,n);return i.removeExtraSymbols(_.toHexString())===o.Sha256.hash(t)}}},function(t){var e;e=60241,t(t.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[99226],{72663:function(r,n,e){var o,c=e(71002),t=e(78640),i=e(64358),u=e(5644),s=e(48928),a=e(3193),f=e(92797),d=e(68792),l=e(26372),v=e(99128),y="https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$",g=[],p={},h=!1,C=!0,b="USD",m=!1,R={},w={},S=function(){var r;function n(){r=(0,d.P)()}return n(),{done:function(){return r.resolve()},reset:n,promise:function(){return r.promise}}}();function D(r){o?((0,i.logWarn)(r),(0,i.logWarn)("Currency failed loading rates, falling back to currency.defaultRates")):(0,i.logError)(r)}function I(r){p={},m=!0,(0,i.logInfo)("Installing addBidResponse decorator for currency module",arguments),(0,t.R)().convertCurrency=function(r,n,e){return parseFloat(r)*j(n,e)},(0,f.v5)("addBidResponse").before(F,100),C?(C=!1,(0,s.h)(r,{success:function(r){try{R=JSON.parse(r),(0,i.logInfo)("currencyRates set to "+JSON.stringify(R)),p={},h=!0,P(),S.done()}catch(n){D("Failed to parse currencyRates response: "+r)}},error:function(){D.apply(void 0,arguments),S.done()}})):S.done()}function O(){(0,i.logInfo)("Uninstalling addBidResponse decorator for currency module",arguments),(0,f.v5)("addBidResponse").getHooks({hook:F}).remove(),delete(0,t.R)().convertCurrency,b="USD",p={},m=!1,h=!1,C=!0,R={},w={}}a.vc.getConfig("currency",(function(r){return function(r){var n=y;if("object"===(0,c.Z)(r.rates)&&(R.conversions=r.rates,h=!0,C=!1),"object"===(0,c.Z)(r.defaultRates)&&(o=r.defaultRates,R.conversions=o,h=!0),"string"==typeof r.adServerCurrency){(0,i.logInfo)("enabling currency support",arguments),b=r.adServerCurrency,r.conversionRateFile&&((0,i.logInfo)("currency using override conversionRateFile:",r.conversionRateFile),n=r.conversionRateFile);var e=n.indexOf("$$TODAY$$");if(-1!==e){var t=new Date,u="".concat(t.getMonth()+1),s="".concat(t.getDate());u.length<2&&(u="0".concat(u)),s.length<2&&(s="0".concat(s));var a="".concat(t.getFullYear()).concat(u).concat(s);n="".concat(n.substring(0,e)).concat(a).concat(n.substring(e+9,n.length))}I(n)}else(0,i.logInfo)("disabling currency support"),O();"object"===(0,c.Z)(r.bidderCurrencyDefault)&&(w=r.bidderCurrencyDefault)}(r.currency)}));var F=(0,v.A)("currency",(function(r,n,e,o){if(!e)return r.call(this,n,e,o);var c=e.bidderCode||e.bidder;if(w[c]){var t=w[c];e.currency&&t!==e.currency?(0,i.logWarn)("Currency default '".concat(c,": ").concat(t,"' ignored. adapter specified '").concat(e.currency,"'")):e.currency=t}if(e.currency||((0,i.logWarn)('Currency not specified on bid.  Defaulted to "USD"'),e.currency="USD"),e.getCpmInNewCurrency=function(r){return(parseFloat(this.cpm)*j(this.currency,r)).toFixed(3)},e.currency===b)return r.call(this,n,e,o);g.push(function(r,n,e){return function(){var o=e[1];if(void 0!==o&&"currency"in o&&"cpm"in o){var c=o.currency;try{var t=j(c);1!==t&&(o.cpm=(parseFloat(o.cpm)*t).toFixed(4),o.currency=b)}catch(r){(0,i.logWarn)("Returning NO_BID, getCurrencyConversion threw error: ",r),e[1]=e[2](u.Gw.Xx)}}return r.apply(n,e)}}(r,this,[n,e,o])),!m||h?P():r.untimed.bail(S.promise())}));function P(){for(;g.length>0;)g.shift()()}function j(r){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,o=null,c="".concat(r,"->").concat(e);if(c in p)o=p[c],(0,i.logMessage)("Using conversionCache value "+o+" for "+c);else if(!1===m){if("USD"!==r)throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");o=1}else if(r===e)o=1;else if(r in R.conversions){if(!(e in(n=R.conversions[r])))throw new Error("Specified adServerCurrency in config '"+e+"' not found in the currency rates file");o=n[e],(0,i.logInfo)("getCurrencyConversion using direct "+r+" to "+e+" conversionRate "+o)}else if(e in R.conversions){if(!(r in(n=R.conversions[e])))throw new Error("Specified fromCurrency '"+r+"' not found in the currency rates file");o=E(1/n[r],4),(0,i.logInfo)("getCurrencyConversion using reciprocal "+r+" to "+e+" conversionRate "+o)}else{var t=Object.keys(R.conversions)[0];if(!(r in R.conversions[t]))throw new Error("Specified fromCurrency '"+r+"' not found in the currency rates file");var u=1/R.conversions[t][r];if(!(e in R.conversions[t]))throw new Error("Specified adServerCurrency in config '"+e+"' not found in the currency rates file");var s=R.conversions[t][e];o=E(u*s,4),(0,i.logInfo)("getCurrencyConversion using intermediate "+r+" thru "+t+" to "+e+" conversionRate "+o)}return c in p||((0,i.logMessage)("Adding conversionCache value "+o+" for "+c),p[c]=o),o}function E(r,n){for(var e=1,o=0;o<n;o++)e+="0";return Math.round(r*e)/e}(0,l.f8)({type:l.Z,name:"currency",fn:function(r,n,e){m&&(r.cur=r.cur||[e.currency||b])}}),(0,t.z)("currency")},26372:function(r,n,e){e.d(n,{DZ:function(){return i},Px:function(){return u},TP:function(){return a},YC:function(){return s},Z:function(){return t},f8:function(){return y},fP:function(){return g},gm:function(){return o},md:function(){return f}});var o=["request","imp","bidResponse","response"],c=["default","pbs"],t=o[0],i=o[1],u=o[2],s=o[3],a=c[0],f=c[1],d=new Set(o);var l,v=(l={},{registerOrtbProcessor:function(r){var n=r.type,e=r.name,c=r.fn,t=r.priority,i=void 0===t?0:t,u=r.dialects,s=void 0===u?[a]:u;if(!d.has(n))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));s.forEach((function(r){l.hasOwnProperty(r)||(l[r]={}),l[r].hasOwnProperty(n)||(l[r][n]={}),l[r][n][e]={priority:i,fn:c}}))},getProcessors:function(r){return l[r]||{}}}),y=v.registerOrtbProcessor,g=v.getProcessors}},function(r){var n;n=72663,r(r.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[36737],{31392:function(e,r,n){var t=n(71002),d=n(78640),i=n(20265),o=n(64358),a=n(3193),p=n(14699),s=n(24679),c=n(35706),u=n(34614),l=["mimes","minduration","maxduration","protocols","w","h","startdelay","placement","linearity","skip","skipmin","skipafter","sequence","battr","maxextended","minbitrate","maxbitrate","boxingallowed","playbackmethod","playbackend","delivery","pos","companionad","api","companiontype","ext"],f={code:"dspx",gvlid:602,aliases:[],supportedMediaTypes:[s.Mk,s.pX],isBidRequestValid:function(e){return!!e.params.placement},buildRequests:function(e,r){var n={};return e.map((function(e){var t=e.params,d=Math.floor(99999999999*Math.random()),a=r.refererInfo.page,p=e.bidId,c=e.adUnitCode||!1,f=e.auctionId||!1,v=t.devMode||!1,y=v?"https://dcbuyer.dspx.tv/request/":"https://buyer.dspx.tv/request/",b=t.placement;v&&t.dev&&(y=t.dev.endpoint||y,b=t.dev.placement||b,void 0!==t.dev.pfilter&&(t.pfilter=t.dev.pfilter));var x,w=function(e){var r={};e.mediaTypes?Object.keys(e.mediaTypes).forEach((function(n){n===s.Mk&&(r[n]=g(e)),n===s.pX&&(r[n]=function(e){return h((0,i.Z)(e,"mediaTypes.video.playerSize")||e.sizes)}(e))})):r[s.Mk]=g(e);return r}(e),I=w["banner"===(x=e).mediaType||(0,i.Z)(x,"mediaTypes.banner")||!function(e){return"video"===e.mediaType||!!(0,i.Z)(e,"mediaTypes.video")}(x)?s.Mk:s.pX];if(n={_f:"auto",alternative:"prebid_js",inventory_item_id:b,srw:I?I[0].width:0,srh:I?I[0].height:0,idt:100,rnd:d,ref:a,bid_id:p,pbver:"7.45.0"},void 0!==t.pfilter&&(n.pfilter=t.pfilter),r&&r.gdprConsent&&(void 0!==n.pfilter?n.pfilter.gdpr_consent||(n.pfilter.gdpr_consent=r.gdprConsent.consentString,n.pfilter.gdpr=r.gdprConsent.gdprApplies):n.pfilter={gdpr_consent:r.gdprConsent.consentString,gdpr:r.gdprConsent.gdprApplies}),void 0!==t.bcat&&(n.bcat=(0,i.Z)(r.ortb2Imp,"bcat")||t.bcat),void 0!==t.dvt&&(n.dvt=t.dvt),v&&(n.prebidDevMode=1),e.userId){e.userId.netId&&(n.did_netid=e.userId.netId),e.userId.id5id&&(n.did_id5=e.userId.id5id.uid||"0",void 0!==e.userId.id5id.ext.linkType&&(n.did_id5_linktype=e.userId.id5id.ext.linkType));var E=(0,i.Z)(e,"userId.uid2.id");E&&(n.did_uid2=E);var T=(0,i.Z)(e,"userId.sharedid.id");T&&(n.did_sharedid=T);var _=(0,i.Z)(e,"userId.pubcid");_&&(n.did_pubcid=_);var R=(0,i.Z)(e,"crumbs.pubcid");R&&(n.did_cpubcid=R)}if(e.schain&&(n.schain=e.schain),void 0===n.pfilter||!n.pfilter.floorprice){var C=function(e){if(!(0,o.isFn)(e.getFloor))return(0,i.Z)(e,"params.bidfloor",0);try{return e.getFloor({currency:"EUR",mediaType:"*",size:"*"}).floor}catch(e){return 0}}(e);C>0&&(void 0!==n.pfilter?n.pfilter.floorprice=C:n.pfilter={floorprice:C})}if(f&&(n.auctionId=f),c&&(n.pbcode=c),n.media_types=function(e){var r={};return Object.keys(e).forEach((function(n){r[n]=e[n].map((function(e){return e.width+"x"+e.height})).join(",")})),r}(w),void 0!==w[s.pX]){n.vctx=function(e){return(0,i.Z)(e,"mediaTypes.video.context")||"unknown"}(e),void 0!==t.vastFormat&&(n.vf=t.vastFormat),n.vpl={};var k=(0,i.Z)(e,"mediaTypes.video");Object.keys(k).filter((function(e){return(0,u.q9)(l,e)})).forEach((function(e){return n.vpl[e]=k[e]}))}return{method:"GET",url:y,data:m(n)}}))},interpretResponse:function(e,r){(0,o.logMessage)("DSPx: serverResponse",e),(0,o.logMessage)("DSPx: bidRequest",r);var n=[],t=e.body,d=t.crid||0,p=t.cpm/1e6||0;if(0!==p&&0!==d){var s=t.dealid||"",u=t.currency||"EUR",l=void 0===t.netRevenue||t.netRevenue,f={requestId:t.bid_id,cpm:p,width:t.width,height:t.height,creativeId:d,dealId:s,currency:u,netRevenue:l,type:t.type,ttl:a.vc.getConfig("_bidderTimeout"),meta:{advertiserDomains:t.adomain||[]}};t.vastUrl&&(f.vastUrl=t.vastUrl,f.mediaType="video"),t.vastXml&&(f.vastXml=t.vastXml,f.mediaType="video"),t.renderer&&(f.renderer=function(e,r){(0,o.logMessage)("DSPx: newRenderer",e,r);var n=c.Th.install({id:r.renderer.id||r.bid_id,url:e.params&&e.params.rendererUrl||r.renderer.url,config:r.renderer.options||(0,i.Z)(e,"renderer.options"),loaded:!1});try{n.setRender(b)}catch(e){(0,o.logWarn)("Prebid Error calling setRender on renderer",e)}return n}(r,t)),t.videoCacheKey&&(f.videoCacheKey=t.videoCacheKey),t.adTag&&(f.ad=t.adTag),t.bid_appendix&&Object.keys(t.bid_appendix).forEach((function(e){f[e]=t.bid_appendix[e]})),n.push(f)}return n},getUserSyncs:function(e,r,n,t){if(!r||0===r.length)return[];var d=[],i="";return n&&(i="gdprApplies"in n&&"boolean"==typeof n.gdprApplies?"gdpr=".concat(Number(n.gdprApplies),"&gdpr_consent=").concat(n.consentString):"gdpr_consent=".concat(n.consentString)),r.length>0&&r[0].body.userSync&&(e.iframeEnabled&&r[0].body.userSync.iframeUrl.forEach((function(e){return d.push({type:"iframe",url:v(e,i)})})),e.pixelEnabled&&r[0].body.userSync.imageUrl.forEach((function(e){return d.push({type:"image",url:v(e,i)})}))),d}};function v(e,r){return r?e+(-1!==e.indexOf("?")?"&":"?")+r:e}function m(e,r){var n,d=[];for(n in e)if(e.hasOwnProperty(n)){var i=r?r+"["+n+"]":n,o=e[n];d.push(null!==o&&"object"===(0,t.Z)(o)?m(o,i):encodeURIComponent(i)+"="+encodeURIComponent(o))}return d.join("&")}function g(e){return h((0,i.Z)(e,"mediaTypes.banner.sizes")||e.sizes)}function y(e){var r={};return r.width=parseInt(e[0],10),r.height=parseInt(e[1],10),r}function h(e){return Array.isArray(e[0])?e.map((function(e){return y(e)})):[y(e)]}function b(e){(0,o.logMessage)("DSPx: outstreamRender bid:",e);var r=function(e){var r=window.document.createDocumentFragment(),n=window.document.createElement("div");n.innerHTML=(0,i.Z)(e,"renderer.config.code",""),r.appendChild(n);for(var t=n.getElementsByTagName("script"),d=[],o=0;o<t.length;o++)d.push(t[o]);for(var a=0;a<d.length;a++){for(var p=d[a],s=document.createElement("script"),c=0;c<p.attributes.length;c++){var u=p.attributes[c];s.setAttribute(u.name,u.value)}s.appendChild(document.createTextNode(p.innerHTML)),p.parentNode.replaceChild(s,p)}return r}(e);try{var n=(0,o.getBidIdParameter)("iframe",e.renderer.config);if(n&&"IFRAME"===window.document.getElementById(n).nodeName){var t=window.document.getElementById(n);return(t.contentDocument||t.contentWindow&&t.contentWindow.document).body.appendChild(r),void("function"==typeof window.dspxRender?window.dspxRender(e):(0,o.logError)("[dspx][renderer] Error: dspxRender function is not found"))}var d=(0,o.getBidIdParameter)("slot",e.renderer.config)||e.adUnitCode;d&&window.document.getElementById(d)?(window.document.getElementById(d).appendChild(r),"function"==typeof window.dspxRender?window.dspxRender(e):(0,o.logError)("[dspx][renderer] Error: dspxRender function is not found")):d&&(0,o.logError)("[dspx][renderer] Error: slot not found")}catch(e){(0,o.logError)("[dspx][renderer] Error:"+e.message)}}(0,p.dX)(f),(0,d.z)("dspxBidAdapter")}},function(e){var r;r=31392,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[58196],{60967:function(r,e,t){var n=t(71002),a=t(78640),o=t(64358),i=t(14699),s=t(15164),d=t(24679),u=t(70059);function c(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function(r,e){if(!r)return;if("string"==typeof r)return f(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(r,e)}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,a=function(){};return{s:a,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return i=r.done,r},e:function(r){s=!0,o=r},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function f(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var p=(0,s.df)({bidderCode:"orbidder"});var l={code:"orbidder",gvlid:559,hostname:"https://orbidder.otto.de",supportedMediaTypes:[d.Mk,d.B5],getHostname:function(){var r=this.hostname;try{r=p.getDataFromLocalStorage("ov_orbidder_host")||r}catch(r){}return r},isBidRequestValid:function(r){return!(!(r.sizes&&r.bidId&&r.params&&r.params.accountId&&"string"==typeof r.params.accountId&&r.params.placementId&&"string"==typeof r.params.placementId)||void 0!==r.params.profile&&"object"!==(0,n.Z)(r.params.profile))},buildRequests:function(r,e){r=(0,u.lY)(r);var t=this.getHostname();return r.map((function(r){var n="";e&&e.refererInfo&&(n=e.refererInfo.page||""),r.params.bidfloor=function(r){if(!(0,o.isFn)(r.getFloor))return r.params.bidfloor;var e=r.getFloor({currency:"EUR",mediaType:"*",size:"*"});if((0,o.isPlainObject)(e)&&!isNaN(e.floor)&&"EUR"===e.currency)return e.floor;return}(r);var i={url:"".concat(t,"/bid"),method:"POST",options:{withCredentials:!0},data:{v:(0,a.R)().version,pageUrl:n,bidId:r.bidId,auctionId:r.auctionId,transactionId:r.transactionId,adUnitCode:r.adUnitCode,bidRequestCount:r.bidRequestCount,params:r.params,sizes:r.sizes,mediaTypes:r.mediaTypes}};return e&&e.gdprConsent&&(i.data.gdprConsent={consentString:e.gdprConsent.consentString,consentRequired:"boolean"==typeof e.gdprConsent.gdprApplies&&e.gdprConsent.gdprApplies}),i}))},interpretResponse:function(r){var e=[];return(r=r.body)&&r.length>0&&r.forEach((function(r){(function(r){var e=["requestId","cpm","ttl","creativeId","netRevenue","currency"];switch(r.mediaType){case d.Mk:e=e.concat(["width","height","ad"]);break;case d.B5:if(!r.native.hasOwnProperty("impressionTrackers"))return!1;break;default:return!1}var t,n=c(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(!r.hasOwnProperty(a))return!1}}catch(r){n.e(r)}finally{n.f()}return!0})(r)&&(Array.isArray(r.advertiserDomains)&&(r.meta={advertiserDomains:r.advertiserDomains}),e.push(r))})),e}};(0,i.dX)(l),(0,a.z)("orbidderBidAdapter")}},function(r){var e;e=60967,r(r.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[55126],{15817:function(e,r,t){var a=t(89062),i=t(4942),n=t(71002),s=t(78640),o=t(64358),d=t(20265),p=t(96475),c=t(14699),l=t(24679),u=t(3193),m=t(35706),g=t(55975),f=t(5644);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y="pubmatic",v="PubMatic: ",w="USD",x=void 0,I="https://pubmatic.bbvms.com/r/".concat("$RENDERER",".js"),P={kadpageurl:"",gender:"",yob:"",lat:"",lon:"",wiid:"",profId:"",verId:""},O="number",T="string",z="boolean",S="array",k={mimes:S,minduration:O,maxduration:O,startdelay:O,playbackmethod:S,api:S,protocols:S,w:O,h:O,battr:S,linearity:O,placement:O,minbitrate:O,maxbitrate:O,skip:O},C=1,E=3,R={1:"PMP",5:"PREF",6:"PMPG"},M={bootstrapPlayer:function(e){var r={code:e.adUnitCode};if(e.vastXml?r.vastXml=e.vastXml:e.vastUrl&&(r.vastUrl=e.vastUrl),e.vastXml||e.vastUrl){for(var t,a=M.getRendererId("pubmatic",e.rendererCode),i=document.getElementById(e.adUnitCode),n=0;n<window.bluebillywig.renderers.length;n++)if(window.bluebillywig.renderers[n]._id===a){t=window.bluebillywig.renderers[n];break}t?t.bootstrap(r,i):(0,o.logWarn)("".concat(v,": Couldn't find a renderer with ").concat(a))}else(0,o.logWarn)("".concat(v,": No vastXml or vastUrl on bid, bailing..."))},newRenderer:function(e,r){var t=I.replace("$RENDERER",e),a=m.Th.install({url:t,loaded:!1,adUnitCode:r});try{a.setRender(M.outstreamRender)}catch(e){(0,o.logWarn)("".concat(v,": Error tying to setRender on renderer"),e)}return a},outstreamRender:function(e){e.renderer.push((function(){M.bootstrapPlayer(e)}))},getRendererId:function(e,r){return"".concat(e,"-").concat(r)}},j=[l.Mk,l.pX,l.B5],W=0,_=!1,N=["pubmatic"],U=["all"];function A(e,r){if(!(0,o.isStr)(r))return r&&(0,o.logWarn)("PubMatic: Ignoring param key: "+e+", expects string-value, found "+(0,n.Z)(r)),x;switch(e){case"pmzoneid":return r.split(",").slice(0,50).map((function(e){return e.trim()})).join();case"kadfloor":case"lat":case"lon":return parseFloat(r)||x;case"yob":return parseInt(r)||x;default:return r}}function q(e){var r;e.params.adUnit="",e.params.adUnitIndex="0",e.params.width=0,e.params.height=0,e.params.adSlot=(r=e.params.adSlot,(0,o.isStr)(r)?r.replace(/^\s+/g,"").replace(/\s+$/g,""):(r&&(0,o.logWarn)("pubmatic: adSlot must be a string. Ignoring adSlot"),""));var t=e.params.adSlot,a=t.split(":");if(t=a[0],2==a.length&&(e.params.adUnitIndex=a[1]),a=t.split("@"),e.params.adUnit=a[0],a.length>1){if(2!=(a=a[1].split("x")).length)return void(0,o.logWarn)("PubMatic: AdSlot Error: adSlot not in required format");e.params.width=parseInt(a[0],10),e.params.height=parseInt(a[1],10)}else if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(l.Mk)&&e.mediaTypes.banner.hasOwnProperty("sizes")){for(var i=0,n=[];i<e.mediaTypes.banner.sizes.length;i++)2===e.mediaTypes.banner.sizes[i].length&&n.push(e.mediaTypes.banner.sizes[i]);e.mediaTypes.banner.sizes=n,e.mediaTypes.banner.sizes.length>=1&&(e.params.width=e.mediaTypes.banner.sizes[0][0],e.params.height=e.mediaTypes.banner.sizes[0][1],e.mediaTypes.banner.sizes=e.mediaTypes.banner.sizes.splice(1,e.mediaTypes.banner.sizes.length-1))}}function B(e,r,t){var a,i="Ignoring param key: "+e+", expects "+t+", found "+(0,n.Z)(r);switch(t){case z:a=o.isBoolean;break;case O:a=o.isNumber;break;case T:a=o.isStr;break;case S:a=o.isArray}return a(r)?r:((0,o.logWarn)(v+i),x)}var Z={desc:"desc",desc2:"desc2",body:"desc",body2:"desc2",sponsoredBy:"sponsored",cta:"ctatext",rating:"rating",address:"address",downloads:"downloads",likes:"likes",phone:"phone",price:"price",salePrice:"saleprice",displayUrl:"displayurl",saleprice:"saleprice",displayurl:"displayurl"},X=f.oF,D=f.zA,F=f.FY,J=f.s$,L=Object.values(Z);function V(e){var r;if(e.ortb){e=e.ortb,r=b(b({ver:"1.2"},e),{},{assets:[]});var t=e.assets,a=function(e){return e.title||e.img||e.data||e.video};if(t.length<1||!t.some((function(e){return a(e)})))return(0,o.logWarn)("".concat(v,": Native assets object is empty or contains some invalid object")),_=!0,r;t.forEach((function(e){var t=e;t.img&&(t.img.type==E?(t.w=t.w||t.width||(t.sizes?t.sizes[0]:x),t.h=t.h||t.height||(t.sizes?t.sizes[1]:x),t.wmin=t.wmin||t.minimumWidth||(t.minsizes?t.minsizes[0]:x),t.hmin=t.hmin||t.minimumHeight||(t.minsizes?t.minsizes[1]:x)):t.img.type==C&&(t.w=t.w||t.width||(t.sizes?t.sizes[0]:x),t.h=t.h||t.height||(t.sizes?t.sizes[1]:x))),t&&void 0!==t.id&&a(t)&&r.assets.push(t)}))}else r=function(e){if(!e&&!(0,o.isPlainObject)(e))return(0,o.logWarn)("".concat(v,": Native assets object is empty or not an object: ").concat(e)),void(_=!0);var r={ver:"1.2",assets:[]};for(var t in e)if(!D.includes(t))if(F.hasOwnProperty(t)||L.includes(t)){var a=e[t],i=0;a.required&&(0,o.isBoolean)(a.required)&&(i=Number(a.required));var n={id:r.assets.length,required:i};if(t in Z)n.data={type:J[Z[t]]},(a.len||a.length)&&(n.data.len=a.len||a.length),a.ext&&(n.data.ext=a.ext);else if("icon"===t||"image"===t){if(n.img={type:"icon"===t?X.ICON:X.MAIN},a.aspect_ratios)if((0,o.isArray)(a.aspect_ratios))if(a.aspect_ratios.length){var s=a.aspect_ratios[0],d=s.min_width,p=s.min_height;(0,o.isInteger)(d)&&(0,o.isInteger)(p)?(n.img.wmin=d,n.img.hmin=p):(0,o.logWarn)("".concat(v,": image.aspect_ratios min_width or min_height are invalid: ").concat(d,", ").concat(p));var c=a.aspect_ratios.filter((function(e){return e.ratio_width&&e.ratio_height})).map((function(e){return"".concat(e.ratio_width,":").concat(e.ratio_height)}));c.length>0&&(n.img.ext={aspectratios:c})}else(0,o.logWarn)("".concat(v,": image.aspect_ratios was passed, but it's empty: ").concat(a.aspect_ratios));else(0,o.logWarn)("".concat(v,": image.aspect_ratios was passed, but it's not a an array: ").concat(a.aspect_ratios));n.img.w=a.w||a.width,n.img.h=a.h||a.height,n.img.wmin=a.wmin||a.minimumWidth||(a.minsizes?a.minsizes[0]:x),n.img.hmin=a.hmin||a.minimumHeight||(a.minsizes?a.minsizes[1]:x),a.sizes&&(2===a.sizes.length&&(0,o.isInteger)(a.sizes[0])&&(0,o.isInteger)(a.sizes[1])?((0,o.logInfo)("".concat(v,": if asset.sizes exist, by OpenRTB spec we should remove wmin and hmin")),n.img.w=a.sizes[0],n.img.h=a.sizes[1],delete n.img.hmin,delete n.img.wmin):(0,o.logWarn)("".concat(v,": image.sizes was passed, but its value is not an array of integers: ").concat(a.sizes))),a.ext&&(n.img.ext=a.ext),a.mimes&&(n.img.mimes=a.mimes)}else"title"===t?(n.title={len:a.len||a.length||140},a.ext&&(n.title.ext=a.ext)):"ext"===t&&(n.ext=a,delete n.required);r.assets.push(n)}else(0,o.logWarn)("".concat(v,": Unrecognized native asset code: ").concat(t,". Asset will be ignored."));return r.assets.length<1?((0,o.logWarn)("".concat(v,": Could not find any valid asset")),void(_=!0)):r}(e);return r}function $(e){var r,t=e.mediaTypes.banner.sizes,a=[];if(t!==x&&(0,o.isArray)(t)){if(r={},e.params.width||e.params.height)r.w=e.params.width,r.h=e.params.height;else{if(0===t.length)return r=x,(0,o.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: "+e.params.adUnit+". Ignoring the banner impression in the adunit."),r;r.w=parseInt(t[0][0],10),r.h=parseInt(t[0][1],10),t=t.splice(1,t.length-1)}t.length>0&&(a=[],t.forEach((function(e){e.length>1&&a.push({w:e[0],h:e[1]})})),a.length>0&&(r.format=a)),r.pos=0,r.topframe=(0,o.inIframe)()?0:1}else(0,o.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: "+e.params.adUnit+". Ignoring the banner impression in the adunit."),r=x;return r}function H(e){var r,t=(0,o.mergeDeep)((0,d.Z)(e.mediaTypes,"video"),e.params.video);if(t!==x){for(var a in r={},function(e,r){(0,d.Z)(e,"placement")||(0,o.logWarn)("Video.Placement param missing for "+r)}(t,e.adUnitCode),k)t.hasOwnProperty(a)&&(r[a]=B(a,t[a],k[a]));(0,o.isArray)(e.mediaTypes.video.playerSize[0])?(r.w=parseInt(e.mediaTypes.video.playerSize[0][0],10),r.h=parseInt(e.mediaTypes.video.playerSize[0][1],10)):(0,o.isNumber)(e.mediaTypes.video.playerSize[0])&&(r.w=parseInt(e.mediaTypes.video.playerSize[0],10),r.h=parseInt(e.mediaTypes.video.playerSize[1],10))}else r=x,(0,o.logWarn)("PubMatic: Error: Video config params missing for adunit: "+e.params.adUnit+" with mediaType set as video. Ignoring video impression in the adunit.");return r}function G(e){var r,t,a={},i={},s=e.hasOwnProperty("sizes")?e.sizes:[],c="",m=[];if(function(e,r){r.params.deals&&((0,o.isArray)(r.params.deals)?r.params.deals.forEach((function(r){(0,o.isStr)(r)&&r.length>3?(e.pmp||(e.pmp={private_auction:0,deals:[]}),e.pmp.deals.push({id:r})):(0,o.logWarn)("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: "+r)})):(0,o.logWarn)("PubMatic: Error: bid.params.deals should be an array of strings."))}(a={id:e.bidId,tagid:e.params.adUnit||void 0,bidfloor:A("kadfloor",e.params.kadfloor),secure:1,ext:{pmZoneId:A("pmzoneid",e.params.pmzoneid)},bidfloorcur:e.params.currency?A("currency",e.params.currency):w},e),function(e,r){var t,a="";if(r.params.dctr)if(a=r.params.dctr,(0,o.isStr)(a)&&a.length>0){var i=a.split("|");a="",i.forEach((function(e){a+=e.length>0?e.trim()+"|":""})),t=a.length,"|"===a.substring(t,t-1)&&(a=a.substring(0,t-1)),e.ext.key_val=a.trim()}else(0,o.logWarn)("PubMatic: Ignoring param : dctr with value : "+a+", expects string-value, found empty or non-string value")}(a,e),function(e,r){var t=r.rtd&&r.rtd.jwplayer&&r.rtd.jwplayer.targeting||void 0,a="";if(void 0!==t&&""!==t&&t.hasOwnProperty("segments")){var i,n=t.segments.length;a+="jw-id="+t.content.id;for(var s=0;s<n;s++)a+="|jw-"+t.segments[s]+"=1";(i=e.ext)&&void 0===i.key_val?i.key_val=a:i.key_val+="|"+a}}(a,e),e.hasOwnProperty("mediaTypes"))for(c in e.mediaTypes)switch(c){case l.Mk:(r=$(e))!==x&&(a.banner=r);break;case l.B5:i.request=JSON.stringify(V(e.nativeParams)),_?((0,o.logWarn)("PubMatic: Error: Error in Native adunit "+e.params.adUnit+". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details."),_=!1):a.native=i;break;case l.pX:(t=H(e))!==x&&(a.video=t)}else r={pos:0,w:e.params.width,h:e.params.height,topframe:(0,o.inIframe)()?0:1},(0,o.isArray)(s)&&s.length>1&&((s=s.splice(1,s.length-1)).forEach((function(e){m.push({w:e[0],h:e[1]})})),r.format=m),a.banner=r;return function(e,r){var t=b({},(0,d.Z)(r,"ortb2Imp.ext.data"));Object.keys(t).forEach((function(r){"pbadslot"===r?"string"==typeof t[r]&&t[r]&&(0,p.N)(e,"ext.data.pbadslot",t[r]):"adserver"===r?["name","adslot"].forEach((function(r){var a=(0,d.Z)(t,"adserver.".concat(r));"string"==typeof a&&a&&((0,p.N)(e,"ext.data.adserver.".concat(r.toLowerCase()),a),"adslot"===r&&(0,p.N)(e,"ext.dfp_ad_unit_code",a))})):(0,p.N)(e,"ext.data.".concat(r),t[r])}))}(a,e),function(e,r){var t=-1;"function"!=typeof r.getFloor||u.vc.getConfig("pubmatic.disableFloors")||[l.Mk,l.pX,l.B5].forEach((function(a){if(e.hasOwnProperty(a)){var i=[];"banner"===a&&(e[a].w&&e[a].h&&i.push([e[a].w,e[a].h]),(0,o.isArray)(e[a].format)&&e[a].format.forEach((function(e){return i.push([e.w,e.h])}))),0===i.length&&i.push("*"),i.forEach((function(i){var s=r.getFloor({currency:e.bidfloorcur,mediaType:a,size:i});if((0,o.logInfo)(v,"floor from floor module returned for mediatype:",a," and size:",i," is: currency",s.currency,"floor",s.floor),"object"===(0,n.Z)(s)&&s.currency===e.bidfloorcur&&!isNaN(parseInt(s.floor))){var d=parseFloat(s.floor);(0,o.logInfo)(v,"floor from floor module:",d,"previous floor value",t,"Min:",Math.min(d,t)),t=-1===t?d:Math.min(d,t),(0,o.logInfo)(v,"new floor value:",t)}}))}}));e.bidfloor&&((0,o.logInfo)(v,"floor from floor module:",t,"impObj.bidfloor",e.bidfloor,"Max:",Math.max(t,e.bidfloor)),t=Math.max(t,e.bidfloor));e.bidfloor=!isNaN(t)&&t>0?t:x,(0,o.logInfo)(v,"new impObj.bidfloor value:",e.bidfloor)}(a,e),a.hasOwnProperty(l.Mk)||a.hasOwnProperty(l.B5)||a.hasOwnProperty(l.pX)?a:x}function Y(e,r){(r=r.filter((function(e){return"string"==typeof e||((0,o.logWarn)("PubMatic: acat: Each category should be a string, ignoring category: "+e),!1)})).map((function(e){return e.trim()})).filter((function(e,r,t){return t.indexOf(e)===r}))).length>0&&((0,o.logWarn)("PubMatic: acat: Selected: ",r),e.ext.acat=r)}function K(e){return!0===(0,o.isArray)(e)&&e.length>0}var Q={code:y,gvlid:76,supportedMediaTypes:[l.Mk,l.pX,l.B5],isBidRequestValid:function(e){if(e&&e.params){if(!(0,o.isStr)(e.params.publisherId))return(0,o.logWarn)("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: "+JSON.stringify(e)),!1;if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(l.pX)){var r=(0,d.Z)(e.mediaTypes,"video.mimes"),t=(0,d.Z)(e,"params.video.mimes");if(!1===K(r)&&!1===K(t))return(0,o.logWarn)("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:"+JSON.stringify(e)),!1;if(!e.mediaTypes[l.pX].hasOwnProperty("context"))return(0,o.logError)("".concat(v,": no context specified in bid. Rejecting bid: "),e),!1;if("outstream"===e.mediaTypes[l.pX].context&&!(0,o.isStr)(e.params.outstreamAU)&&!e.hasOwnProperty("renderer")&&!e.mediaTypes[l.pX].hasOwnProperty("renderer"))return e.mediaTypes.hasOwnProperty(l.Mk)||e.mediaTypes.hasOwnProperty(l.B5)?(delete e.mediaTypes[l.pX],(0,o.logWarn)("".concat(v,': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '),e),!0):((0,o.logError)("".concat(v,': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '),e),!1)}return!0}return!1},buildRequests:function(e,r){var t,i,s,c,m,f;r&&r.refererInfo&&(f=r.refererInfo);var h,b=function(e){return{pageURL:(null==e?void 0:e.page)||window.location.href,refURL:(null==e?void 0:e.ref)||window.document.referrer}}(f),y=function(e){return{id:""+(new Date).getTime(),at:1,cur:[w],imp:[],site:{page:e.pageURL,ref:e.refURL,publisher:{}},device:{ua:navigator.userAgent,js:1,dnt:"yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,h:screen.height,w:screen.width,language:navigator.language},user:{},ext:{}}}(b),v="",I=[],O=[],T=[];if(e.forEach((function(e){if((h=(0,o.deepClone)(e)).params.adSlot=h.params.adSlot||"",q(h),h.mediaTypes&&h.mediaTypes.hasOwnProperty("video")||h.params.hasOwnProperty("video"));else if(!(h.hasOwnProperty("mediaTypes")&&h.mediaTypes.hasOwnProperty(l.B5)||0!==h.params.width||0!==h.params.height))return void(0,o.logWarn)("PubMatic: Skipping the non-standard adslot: ",h.params.adSlot,JSON.stringify(h));b.pubId=b.pubId||h.params.publisherId,(b=function(e,r){var t,a,i;for(t in r.kadpageurl||(r.kadpageurl=r.pageURL),P)P.hasOwnProperty(t)&&(a=e[t])&&(i=P[t],"object"===(0,n.Z)(i)&&(a=i.f(a,r)),(0,o.isStr)(a)?r[t]=a:(0,o.logWarn)("PubMatic: Ignoring param : "+t+" with value : "+P[t]+", expects string-value, found "+(0,n.Z)(a)));return r}(h.params,b)).transactionId=h.transactionId,""===v?v=h.params.currency||x:h.params.hasOwnProperty("currency")&&v!==h.params.currency&&(0,o.logWarn)("PubMatic: Currency specifier ignored. Only one currency permitted."),h.params.currency=v,h.params.hasOwnProperty("dctr")&&(0,o.isStr)(h.params.dctr)&&I.push(h.params.dctr),h.params.hasOwnProperty("bcat")&&(0,o.isArray)(h.params.bcat)&&(O=O.concat(h.params.bcat)),h.params.hasOwnProperty("acat")&&(0,o.isArray)(h.params.acat)&&(T=T.concat(h.params.acat));var r=G(h);r&&y.imp.push(r)})),0!=y.imp.length){y.site.publisher.id=b.pubId.trim(),W=b.pubId.trim(),y.ext.wrapper={},y.ext.wrapper.profile=parseInt(b.profId)||x,y.ext.wrapper.version=parseInt(b.verId)||x,y.ext.wrapper.wiid=b.wiid||r.auctionId,y.ext.wrapper.wv="prebid_prebid_7.45.0",y.ext.wrapper.transactionId=b.transactionId,y.ext.wrapper.wp="pbjs";var z,S,k=r?g.S.get(r.bidderCode,"allowAlternateBidderCodes"):void 0;if(void 0!==k){if(y.ext.marketplace={},r&&1==k){var C=g.S.get(r.bidderCode,"allowedAlternateBidderCodes");(0,o.isArray)(C)?(C=C.map((function(e){return e.trim().toLowerCase()})).filter((function(e){return!!e})).filter(o.uniques),N=C.includes("*")?U:[].concat((0,a.Z)(N),(0,a.Z)(C))):N=U}y.ext.marketplace.allowedbidders=N.filter(o.uniques)}y.user.gender=b.gender?b.gender.trim():x,y.user.geo={},y.user.geo.lat=A("lat",b.lat),y.user.geo.lon=A("lon",b.lon),y.user.yob=A("yob",b.yob),y.device.geo=y.user.geo,y.site.page=b.kadpageurl.trim()||y.site.page.trim(),y.site.domain=(z=y.site.page,(S=document.createElement("a")).href=z,S.hostname),"object"===(0,n.Z)(u.vc.getConfig("content"))&&(y.site.content=u.vc.getConfig("content")),"object"===(0,n.Z)(u.vc.getConfig("device"))&&(y.device=Object.assign(y.device,u.vc.getConfig("device"))),y.device.language=y.device.language&&y.device.language.split("-")[0],(0,p.N)(y,"source.tid",b.transactionId),-1!==window.location.href.indexOf("pubmaticTest=true")&&(y.test=1),e[0].schain&&(0,p.N)(y,"source.ext.schain",e[0].schain),r&&r.gdprConsent&&((0,p.N)(y,"user.ext.consent",r.gdprConsent.consentString),(0,p.N)(y,"regs.ext.gdpr",r.gdprConsent.gdprApplies?1:0)),r&&r.uspConsent&&(0,p.N)(y,"regs.ext.us_privacy",r.uspConsent),!0===u.vc.getConfig("coppa")&&(0,p.N)(y,"regs.coppa",1),function(e,r){var t=(0,d.Z)(r,"0.userIdAsEids");(0,o.isArray)(t)&&t.length>0&&(0,p.N)(e,"user.eids",t)}(y,e);var E,R,M,j,_=r&&r.ortb2||{};if(_.site){var B=y.site,Z=B.page,X=B.domain,D=B.ref;(0,o.mergeDeep)(y,{site:_.site}),y.site.page=Z,y.site.domain=X,y.site.ref=D}if(_.user&&(0,o.mergeDeep)(y,{user:_.user}),_.bcat&&(O=O.concat(_.bcat)),null!==(t=_.device)&&void 0!==t&&t.sua)y.device.sua=null===(E=_.device)||void 0===E?void 0:E.sua;if(null!==(i=_.ext)&&void 0!==i&&null!==(s=i.prebid)&&void 0!==s&&null!==(c=s.bidderparams)&&void 0!==c&&null!==(m=c[r.bidderCode])&&void 0!==m&&m.acat){var F=_.ext.prebid.bidderparams[r.bidderCode].acat;Y(y,F)}else T.length&&Y(y,T);if(function(e,r){(r=r.filter((function(e){return"string"==typeof e||((0,o.logWarn)("PubMatic: bcat: Each category should be a string, ignoring category: "+e),!1)})).map((function(e){return e.trim()})).filter((function(e,r,t){if(e.length>3)return t.indexOf(e)===r;(0,o.logWarn)("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: "+e)}))).length>0&&((0,o.logWarn)("PubMatic: bcat: Selected: ",r),e.bcat=r)}(y,O),null!=r&&r.timeout)y.tmax=r.timeout;else y.tmax=null===(R=window)||void 0===R||null===(M=R.PWT)||void 0===M||null===(j=M.versionDetails)||void 0===j?void 0:j.timeout;return y.ext.epoch=(new Date).getTime(),"object"===(0,n.Z)(u.vc.getConfig("app"))&&(y.app=u.vc.getConfig("app"),y.app.publisher=y.site.publisher,y.app.ext=y.site.ext||x,"object"!==(0,n.Z)(y.app.content)&&(y.app.content=y.site.content||x),delete y.site),{method:"POST",url:"https://hbopenbid.pubmatic.com/translator?source=prebid-client",data:JSON.stringify(y),bidderRequest:r}}},interpretResponse:function(e,r){var t=[],a=w,i=JSON.parse(r.data),n=i.site&&i.site.ref?i.site.ref:"";try{e.body&&e.body.seatbid&&(0,o.isArray)(e.body.seatbid)&&(a=e.body.cur||a,e.body.seatbid.forEach((function(e){e.bid&&(0,o.isArray)(e.bid)&&e.bid.forEach((function(s){var p={requestId:s.impid,cpm:parseFloat((s.price||0).toFixed(2)),width:s.w,height:s.h,creativeId:s.crid||s.id,dealId:s.dealid,currency:a,netRevenue:true,ttl:300,referrer:n,ad:s.adm,pm_seat:e.seat||null,pm_dspid:s.ext&&s.ext.dspid?s.ext.dspid:null,partnerImpId:s.id||""};i.imp&&i.imp.length>0&&i.imp.forEach((function(e){if(s.impid===e.id)switch(function(e,r){if(e.ext&&null!=e.ext.bidtype)r.mediaType=j[e.ext.bidtype];else{(0,o.logInfo)("PubMatic: bid.ext.bidtype does not exist, checking alternatively for mediaType");var t=e.adm,a="",i=new RegExp(/VAST\s+version/);if(t.indexOf('span class="PubAPIAd"')>=0)r.mediaType=l.Mk;else if(i.test(t))r.mediaType=l.pX;else try{(a=JSON.parse(t.replace(/\\/g,"")))&&a.native&&(r.mediaType=l.B5)}catch(e){(0,o.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: "+t)}}}(s,p),p.mediaType){case l.Mk:break;case l.pX:p.width=s.hasOwnProperty("w")?s.w:e.video.w,p.height=s.hasOwnProperty("h")?s.h:e.video.h,p.vastXml=s.adm,function(e,r){var t,a,i;if(r.bidderRequest&&r.bidderRequest.bids){for(var n=0;n<r.bidderRequest.bids.length;n++)r.bidderRequest.bids[n].bidId===e.requestId&&(t=r.bidderRequest.bids[n].params,a=r.bidderRequest.bids[n].mediaTypes[l.pX].context,i=r.bidderRequest.bids[n].adUnitCode);a&&"outstream"===a&&t&&t.outstreamAU&&i&&(e.rendererCode=t.outstreamAU,e.renderer=M.newRenderer(e.rendererCode,i))}}(p,r),function(e,r,t){var a,i,n;if(null!=r&&null!==(a=r.ext)&&void 0!==a&&a.prebiddealpriority){var s=(0,o.getBidRequest)(e.requestId,[t.bidderRequest]),p=(0,d.Z)(s,"mediaTypes.video");if((null==p?void 0:p.context)==l.Oh){var c=(null==r||null===(i=r.ext)||void 0===i||null===(n=i.video)||void 0===n?void 0:n.duration)||(null==p?void 0:p.maxduration);e.video={context:l.Oh,durationSeconds:c,dealTier:r.ext.prebiddealpriority}}}}(p,s,r);break;case l.B5:!function(e,r){if(e.hasOwnProperty("adm")){var t="";try{t=JSON.parse(e.adm.replace(/\\/g,""))}catch(e){return void(0,o.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: "+r.adm)}r.native={ortb:b({},t.native)},r.mediaType=l.B5,r.width||(r.width=0),r.height||(r.height=0)}}(s,p)}})),s.ext&&s.ext.deal_channel&&(p.dealChannel=R[s.ext.deal_channel]||null),function(e,r,t){e.meta={},r.ext&&r.ext.dspid&&(e.meta.networkId=r.ext.dspid,e.meta.demandSource=r.ext.dspid),r.ext&&r.ext.dchain&&(e.meta.dchain=r.ext.dchain);var a=t||r.ext&&r.ext.advid;a&&(e.meta.advertiserId=a,e.meta.agencyId=a,e.meta.buyerId=a),r.adomain&&K(r.adomain)&&(e.meta.advertiserDomains=r.adomain,e.meta.clickUrl=r.adomain[0],e.meta.brandId=r.adomain[0]),r.cat&&K(r.cat)&&(e.meta.secondaryCatIds=r.cat,e.meta.primaryCatId=r.cat[0])}(p,s,e.seat),e.ext&&e.ext.buyid&&(p.adserverTargeting={hb_buyid_pubmatic:e.ext.buyid}),s.ext&&s.ext.marketplace&&(p.bidderCode=s.ext.marketplace),t.push(p)}))})))}catch(e){(0,o.logError)(e)}return t},getUserSyncs:function(e,r,t,a){var i=""+W;return t&&(i+="&gdpr="+(t.gdprApplies?1:0),i+="&gdpr_consent="+encodeURIComponent(t.consentString||"")),a&&(i+="&us_privacy="+encodeURIComponent(a)),!0===u.vc.getConfig("coppa")&&(i+="&coppa=1"),e.iframeEnabled?[{type:"iframe",url:"https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p="+i}]:[{type:"image",url:"https://image8.pubmatic.com/AdServer/ImgSync?p="+i}]},transformBidParams:function(e,r,t,a){return(0,o.convertTypes)({publisherId:"string",adSlot:"string"},e)}};(0,c.dX)(Q),(0,s.z)("pubmaticBidAdapter")}},function(e){var r;r=15817,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[56187],{40060:function(e,r,t){var n=t(4942),i=t(93324),o=t(71002),a=t(78640),s=t(24980),d=t(99933),c=t(14699),u=t(3193),p=t(24679),l=t(34614),f=t(35706),m=t(64358),v=t(96475),g=t(20265);function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y="https://video-outstream.rubiconproject.com/apex-2.2.1.js",h={};u.vc.getConfig("rubicon",(function(e){(0,m.mergeDeep)(h,e.rubicon)}));var _={1:"468x60",2:"728x90",5:"120x90",7:"125x125",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",17:"240x400",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",39:"750x100",40:"750x200",41:"750x300",42:"2x4",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",64:"580x500",65:"640x480",66:"930x600",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",85:"300x120",90:"548x150",94:"970x310",95:"970x100",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",105:"250x800",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",145:"980x150",152:"1000x250",156:"640x320",159:"320x250",179:"250x600",195:"600x300",198:"640x360",199:"640x200",213:"1030x590",214:"980x360",221:"1x1",229:"320x180",230:"2000x1400",232:"580x400",234:"6x6",251:"2x2",256:"480x820",257:"400x600",258:"500x200",259:"998x200",261:"480x480",264:"970x1000",265:"1920x1080",274:"1800x200",278:"320x500",282:"320x400",288:"640x380",524:"1x2",548:"500x1000",550:"980x480",552:"300x200",558:"640x640",562:"300x431",564:"320x431",566:"320x300",568:"300x150",570:"300x125",572:"250x350",574:"620x891",576:"610x877",578:"980x552",580:"505x656",622:"192x160"};(0,m._each)(_,(function(e,r){return _[e]=r}));var j=(0,s.x)({request:function(e,r,t,n){var i,s,d,c=n.bidRequests,p=e(r,t,n);p.cur=["USD"],p.test=u.vc.getConfig("debug")?1:0,(0,v.N)(p,"ext.prebid.cache",{vastxml:{returnCreative:!0===h.returnVast}}),(0,v.N)(p,"ext.prebid.bidders",{rubicon:{integration:h.int_type||"pbjs"}}),(0,v.N)(p,"ext.prebid.targeting.pricegranularity",{ranges:{low:[{max:5,increment:.5}],medium:[{max:20,increment:.1}],high:[{max:20,increment:.01}],auto:[{max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}],dense:[{max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}],custom:(d=u.vc).getConfig("customPriceBucket")&&d.getConfig("customPriceBucket").buckets}[d.getConfig("priceGranularity")]});var l=(0,a.R)().installedModules;return!l||l.length&&-1===l.indexOf("rubiconAnalyticsAdapter")||(0,v.N)(p,"ext.prebid.analytics",{rubicon:{"client-analytics":!0}}),function(e,r){var t,n,i={},o=new Set;r.forEach((function(r){var t,n,a,s,d,c={user:{ext:{data:b({},r.params.visitor)}},site:{ext:{data:b({},r.params.inventory)}}},p=e.imp.find((function(e){var r,t,n,i,o;return null===(r=e.ext)||void 0===r||null===(t=r.prebid)||void 0===t||null===(n=t.bidder)||void 0===n||null===(i=n.rubicon)||void 0===i||null===(o=i.video)||void 0===o?void 0:o.language}));p&&(c.site.content={language:null===(t=p.ext)||void 0===t||null===(n=t.prebid)||void 0===n||null===(a=n.bidder)||void 0===a||null===(s=a.rubicon)||void 0===s||null===(d=s.video)||void 0===d?void 0:d.language});r.params.keywords&&(Array.isArray(r.params.keywords)?r.params.keywords:r.params.keywords.split(",")).forEach((function(e){return o.add(e)}));i=(0,m.mergeDeep)(i,r.ortb2||{},c);var l=u.vc.getConfig("user.id");i.user.id=i.user.id||l})),(0,m.mergeDeep)(e,i),o&&o.size&&(0,v.N)(e,"site.keywords",Array.from(o.values()).join(","));null==e||(null===(t=e.ext)||void 0===t||(null===(n=t.prebid)||void 0===n||delete n.storedrequest))}(p,c),null==p||(null===(i=p.ext)||void 0===i||(null===(s=i.prebid)||void 0===s||delete s.storedrequest)),!0===h.disableFloors&&delete p.ext.prebid.floors,c.filter((function(e){return"object"===(0,o.Z)(e.floorData)})).length>0&&(p.ext.prebid.floors={enabled:!1}),p},imp:function(e,r,t){var n,i,o=S(r);if(!o.includes(p.Mk)||1!=o.length){var a=e(r,t);return a.id=r.adUnitCode,delete a.banner,u.vc.getConfig("s2sConfig.defaultTtl")&&(a.exp=u.vc.getConfig("s2sConfig.defaultTtl")),"atf"===r.params.position&&(a.video.pos=1),"btf"===r.params.position&&(a.video.pos=3),null===(n=a.ext)||void 0===n||(null===(i=n.prebid)||void 0===i||delete i.storedrequest),function(e,r){"USD"!=r.bidfloorcur&&(delete r.bidfloor,delete r.bidfloorcur);if(!r.bidfloor){var t=parseFloat((0,g.Z)(e,"params.floor"));isNaN(t)||(r.bidfloor=t,r.bidfloorcur="USD")}}(r,a),a}},bidResponse:function(e,r,t){var n=e(r,t);n.meta.mediaType=(0,g.Z)(r,"ext.prebid.type");var i=t.bidRequest;return n.mediaType===p.pX&&"outstream"===i.mediaTypes.video.context&&(n.renderer=function(e){var r=f.Th.install({id:e.adId,url:h.rendererUrl||y,config:h.rendererConfig||{},loaded:!1,adUnitCode:e.adUnitCode});try{r.setRender(w)}catch(e){(0,m.logWarn)("Prebid Error calling setRender on renderer",e)}return r}(n)),n.width=r.w||(0,g.Z)(i,"mediaTypes.video.w")||(0,g.Z)(i,"params.video.playerWidth"),n.height=r.h||(0,g.Z)(i,"mediaTypes.video.h")||(0,g.Z)(i,"params.video.playerHeight"),(0,g.Z)(r,"ext.bidder.rp.advid")&&(0,v.N)(n,"meta.advertiserId",r.ext.bidder.rp.advid),n},context:{netRevenue:!1!==h.netRevenue,ttl:300},processors:d.X}),k={code:"rubicon",gvlid:52,supportedMediaTypes:[p.Mk,p.pX,p.B5],isBidRequestValid:function(e){var r=!0;if("object"!==(0,o.Z)(e.params))return!1;for(var t=0,n=["accountId","siteId","zoneId"];t<n.length;t++)if(e.params[n[t]]=parseInt(e.params[n[t]]),isNaN(e.params[n[t]]))return(0,m.logError)("Rubicon: wrong format of accountId or siteId or zoneId."),!1;var i=S(e,!0);if(!i.length)return!1;i.includes(p.pX)&&(r=function(e){var r=!0,t=Object.prototype.toString.call([]),n=Object.prototype.toString.call(0),i={mimes:t,protocols:t,linearity:n,api:t};return Object.keys(i).forEach((function(t){Object.prototype.toString.call((0,g.Z)(e,"mediaTypes.video."+t))!==i[t]&&(r=!1,(0,m.logError)("Rubicon: mediaTypes.video."+t+" is required and must be of type: "+i[t]))})),r}(e));var a=[p.Mk,p.B5].filter((function(e){return i.includes(e)})).length>0;return a?r&&a:r},buildRequests:function(e,r){var t,n=[],i=[];if((t=e.filter((function(e){var r=S(e)||[],t=r.length,n=e.params||{},i=n.bidonmultiformat,o=n.video;return 1===t&&(r.includes(p.pX)||r.includes(p.B5))||2===t&&!r.includes(p.Mk)||o&&r.includes(p.pX)||i&&(r.includes(p.pX)||r.includes(p.B5))})))&&t.length){var o=j.toORTB({bidRequests:t,bidderRequest:r});i.push({method:"POST",url:"https://".concat(h.videoHost||"prebid-server",".rubiconproject.com/openrtb2/auction"),data:o,bidRequest:t})}var a=e.filter((function(e){var r=S(e)||[],t=e.params||{},n=t.bidonmultiformat,i=t.video;return r.includes(p.Mk)&&(1===r.length||n||!n&&!i||!n&&i&&!r.includes(p.pX))}));if(!0!==u.vc.getConfig("rubicon.singleRequest"))n=i.concat(a.map((function(e){var t=k.createSlotParams(e,r);return{method:"GET",url:"https://".concat(h.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:k.getOrderedParams(t).reduce((function(e,r){var n=t[r];return(0,m.isStr)(n)&&""!==n||(0,m.isNumber)(n)?"".concat(e).concat(T(r,n),"&"):e}),"")+"slots=1&rand=".concat(Math.random()),bidRequest:e}})));else{var s=a.reduce((function(e,r){return(e[r.params.siteId]=e[r.params.siteId]||[]).push(r),e}),{});n=i.concat(Object.keys(s).reduce((function(e,t){var n,i;return(n=s[t],i=10,n.map((function(e,r){return r%i==0?n.slice(r,r+i):null})).filter((function(e){return e}))).forEach((function(t){var n=k.combineSlotUrlParams(t.map((function(e){return k.createSlotParams(e,r)})));e.push({method:"GET",url:"https://".concat(h.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:k.getOrderedParams(n).reduce((function(e,r){var t=n[r];return(0,m.isStr)(t)&&""!==t||(0,m.isNumber)(t)?"".concat(e).concat(T(r,t),"&"):e}),"")+"slots=".concat(t.length,"&rand=").concat(Math.random()),bidRequest:t})})),e}),[]))}return n},getOrderedParams:function(e){var r=/^tg_v/,t=/^tg_i/,n=/^eid_|^tpid_/,i=["account_id","site_id","zone_id","size_id","alt_size_ids","p_pos","gdpr","gdpr_consent","us_privacy","rp_schain"].concat(Object.keys(e).filter((function(e){return n.test(e)}))).concat(["x_liverampidl","ppuid","rf","p_geo.latitude","p_geo.longitude","kw"]).concat(Object.keys(e).filter((function(e){return r.test(e)}))).concat(Object.keys(e).filter((function(e){return t.test(e)}))).concat(["tk_flint","x_source.tid","l_pb_bid_id","p_screen_res","rp_floor","rp_secure","tk_user_key"]);return i.concat(Object.keys(e).filter((function(e){return-1===i.indexOf(e)})))},combineSlotUrlParams:function(e){if(1===e.length)return e[0];var r=e.reduce((function(r,t,n){return Object.keys(t).forEach((function(i){r.hasOwnProperty(i)||(r[i]=new Array(e.length)),r[i].splice(n,1,t[i])})),r}),{}),t=new RegExp("^([^;]*)(;\\1)+$");return Object.keys(r).forEach((function(e){var n=r[e].join(";"),i=n.match(t);r[e]=i?i[1]:n})),r},createSlotParams:function(e,r){e.startTime=(new Date).getTime();var t=e.params,n=A(e,"banner"),a=t.latLong||[],s=(0,i.Z)(a,2),d=s[0],c=s[1],f={account_id:t.accountId,site_id:t.siteId,zone_id:t.zoneId,size_id:n[0],alt_size_ids:n.slice(1).join(",")||void 0,rp_floor:(t.floor=parseFloat(t.floor))>=.01?t.floor:void 0,rp_secure:"1",tk_flint:"".concat(h.int_type||"pbjs_lite","_v7.45.0"),"x_source.tid":e.transactionId,"x_imp.ext.tid":e.transactionId,l_pb_bid_id:e.bidId,p_screen_res:[window.screen.width,window.screen.height].join("x"),tk_user_key:t.userId,"p_geo.latitude":isNaN(parseFloat(d))?void 0:parseFloat(d).toFixed(4),"p_geo.longitude":isNaN(parseFloat(c))?void 0:parseFloat(c).toFixed(4),"tg_fl.eid":e.code,rf:O(e,r)};if("function"==typeof e.getFloor&&!h.disableFloors){var v;try{v=e.getFloor({currency:"USD",mediaType:"banner",size:"*"})}catch(e){(0,m.logError)("Rubicon: getFloor threw an error: ",e)}f.rp_hard_floor="object"!==(0,o.Z)(v)||"USD"!==v.currency||isNaN(parseInt(v.floor))?void 0:v.floor}var x={1:"atf",3:"btf"}[(0,g.Z)(e,"mediaTypes.banner.pos")]||"";f.p_pos="atf"===t.position||"btf"===t.position?t.position:x;var y=u.vc.getConfig("user.id");return y&&(f.ppuid=y),e.userIdAsEids&&e.userIdAsEids.forEach((function(e){try{if("adserver.org"===e.source?(f.tpid_tdid=e.uids[0].id,f["eid_adserver.org"]=e.uids[0].id):"liveintent.com"===e.source?(f["tpid_liveintent.com"]=e.uids[0].id,f["eid_liveintent.com"]=e.uids[0].id,e.ext&&Array.isArray(e.ext.segments)&&e.ext.segments.length&&(f["tg_v.LIseg"]=e.ext.segments.join(","))):"liveramp.com"===e.source?f.x_liverampidl=e.uids[0].id:"id5-sync.com"===e.source?f["eid_id5-sync.com"]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype,"^").concat(e.uids[0].ext&&e.uids[0].ext.linkType||""):f["eid_".concat(e.source)]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype||""),!f.ppuid){var r=(0,l.sE)(e.uids,(function(e){return e.ext&&"ppuid"===e.ext.stype}));r&&r.id&&(f.ppuid=r.id)}}catch(r){(0,m.logWarn)("Rubicon: error reading eid:",e,r)}})),r.gdprConsent&&("boolean"==typeof r.gdprConsent.gdprApplies&&(f.gdpr=Number(r.gdprConsent.gdprApplies)),f.gdpr_consent=r.gdprConsent.consentString),r.uspConsent&&(f.us_privacy=encodeURIComponent(r.uspConsent)),f.rp_maxbids=r.bidLimit||1,function(e,r,t){var n={user:{ext:{data:b({},e.params.visitor)}},site:{ext:{data:b({},e.params.inventory)}}};e.params.keywords&&(n.site.keywords=(0,m.isArray)(e.params.keywords)?e.params.keywords.join(","):e.params.keywords);var i=(0,m.mergeDeep)({},e.ortb2||{},n),a=(0,g.Z)(e.ortb2Imp,"ext")||{},s=(0,g.Z)(e.ortb2Imp,"ext.data")||{},d=(0,g.Z)(e,"ortb2Imp.ext.gpid"),c={user:[4],site:[1,2,5,6]},u={user:"tg_v.",site:"tg_i.",adserver:"tg_i.dfp_ad_unit_code",pbadslot:"tg_i.pbadslot",keywords:"kw"},l=function(e,r,t){return"data"===r&&Array.isArray(e)?e.filter((function(e){return e.segment&&(0,g.Z)(e,"ext.segtax")&&c[t]&&-1!==c[t].indexOf((0,g.Z)(e,"ext.segtax"))})).map((function(e){var r=e.segment.filter((function(e){return e.id})).reduce((function(e,r){return e.push(r.id),e}),[]);if(r.length>0)return r.toString()})).toString():("object"!==(0,o.Z)(e)||Array.isArray(e))&&void 0!==e?Array.isArray(e)?e.filter((function(e){if("object"!==(0,o.Z)(e)&&void 0!==e)return e.toString();(0,m.logWarn)("Rubicon: Filtered value: ",e,"for key",r,": Expected value to be string, integer, or an array of strings/ints")})).toString():e.toString():void 0},f=function(e,r,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=l(e,n,r),a=u[n]&&i?"".concat(u[n]):"data"===n?"".concat(u[r],"iab"):"".concat(u[r]).concat(n);t[a]=t[a]?t[a].concat(",",o):o};r===p.Mk?(["site","user"].forEach((function(e){Object.keys(i[e]).forEach((function(r){"site"===e&&"content"===r&&i[e][r].data?f(i[e][r].data,e,"data"):"ext"!==r?f(i[e][r],e,r):i[e][r].data&&Object.keys(i[e].ext.data).forEach((function(r){f(i[e].ext.data[r],e,r,!1)}))}))})),Object.keys(s).forEach((function(e){"adserver"!==e?f(s[e],"site",e):"gam"===s[e].name&&f(s[e].adslot,name,e)})),d&&(t.p_gpid=d),t["tg_i.pbadslot"]&&delete t["tg_i.dfp_ad_unit_code"]):(Object.keys(a).length&&(0,m.mergeDeep)(t.imp[0].ext,a),d&&(t.imp[0].ext.gpid=d),(0,m.mergeDeep)(t,i))}(e,p.Mk,f),!0===u.vc.getConfig("coppa")&&(f.coppa=1),e.schain&&C(e.schain)&&(f.rp_schain=k.serializeSupplyChain(e.schain)),f},serializeSupplyChain:function(e){if(!C(e))return"";var r=e.ver,t=e.complete,n=e.nodes;return"".concat(r,",").concat(t,"!").concat(k.serializeSupplyChainNodes(n))},serializeSupplyChainNodes:function(e){var r=["asi","sid","hp","rid","name","domain"];return e.map((function(e){return r.map((function(r){return encodeURIComponent(e[r]||"")})).join(",")})).join("!")},interpretResponse:function(e,r){e=e.body;var t=r.data;if(!e||"object"!==(0,o.Z)(e))return[];if(e.seatbid){var n=(0,g.Z)(e,"ext.errors.rubicon");return Array.isArray(n)&&n.length>0&&(0,m.logWarn)("Rubicon: Error in video response"),j.fromORTB({request:t,response:e}).bids}var a,s=e.ads,d=0,c=r.bidRequest;return"object"===(0,o.Z)(c)&&!Array.isArray(c)&&S(c).includes(p.pX)&&"object"===(0,o.Z)(s)&&(s=s[c.adUnitCode]),!Array.isArray(s)||s.length<1?[]:s.reduce((function(r,t,n){if(t.impression_id&&a===t.impression_id?d++:a=t.impression_id,"ok"!==t.status)return r;var s,u,l=Array.isArray(c)?c[n-d]:c;if(l&&"object"===(0,o.Z)(l)){var f={requestId:l.bidId,currency:"USD",creativeId:t.creative_id||"".concat(t.network||"","-").concat(t.advertiser||""),cpm:t.cpm||0,dealId:t.deal,ttl:300,netRevenue:!1!==h.netRevenue,rubicon:{advertiserId:t.advertiser,networkId:t.network},meta:{advertiserId:t.advertiser,networkId:t.network,mediaType:p.Mk}};if(t.creative_type&&(f.mediaType=t.creative_type),t.adomain&&(f.meta.advertiserDomains=Array.isArray(t.adomain)?t.adomain:[t.adomain]),t.creative_type===p.pX)f.width=l.params.video.playerWidth,f.height=l.params.video.playerHeight,f.vastUrl=t.creative_depot_url,f.impression_id=t.impression_id,f.videoCacheKey=t.impression_id;else{f.ad=(s=t.script,u=t.impression_id,"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(u,"'>\n<script type='text/javascript'>").concat(s,"<\/script>\n</div>\n</body>\n</html>"));var v=_[t.size_id].split("x").map((function(e){return Number(e)})),g=(0,i.Z)(v,2);f.width=g[0],f.height=g[1]}f.rubiconTargeting=(Array.isArray(t.targeting)?t.targeting:[]).reduce((function(e,r){return e[r.key]=r.values[0],e}),{rpfl_elemid:l.adUnitCode}),r.push(f)}else(0,m.logError)("Rubicon: bidRequest undefined at index position:".concat(n),c,e);return r}),[]).sort((function(e,r){return(r.cpm||0)-(e.cpm||0)}))},getUserSyncs:function(e,r,t,n){if(!Z&&e.iframeEnabled){var i={};return t&&("boolean"==typeof t.gdprApplies&&(i.gdpr=Number(t.gdprApplies)),"string"==typeof t.consentString&&(i.gdpr_consent=t.consentString)),n&&(i.us_privacy=encodeURIComponent(n)),i=Object.keys(i).length?"?".concat((0,m.formatQS)(i)):"",Z=!0,{type:"iframe",url:"https://".concat(h.syncHost||"eus",".rubiconproject.com/usync.html")+i}}},transformBidParams:function(e,r){return(0,m.convertTypes)({accountId:"number",siteId:"number",zoneId:"number"},e)}};function O(e,r){var t;return t=e.params.referrer?e.params.referrer:r.refererInfo.page,e.params.secure?t.replace(/^http:/i,"https:"):t}function w(e){var r,t=document.getElementById(e.adUnitCode);(r=t.querySelector("div[id^='google_ads']"))&&r.style.setProperty("display","none"),function(e){var r=e.querySelector("script[id^='sas_script']"),t=r&&r.nextSibling;t&&"iframe"===t.localName&&t.style.setProperty("display","none")}(t);var n=e.renderer.getConfig();e.renderer.push((function(){window.MagniteApex.renderAd({width:e.width,height:e.height,vastUrl:e.vastUrl,placement:{attachTo:t,align:n.align||"center",position:n.position||"append"},closeButton:n.closeButton||!1,label:n.label||void 0,collapse:n.collapse||!0})}))}function A(e,r){var t=e.params;if(r===p.pX){var n=[];return t.video&&t.video.playerWidth&&t.video.playerHeight?n=[t.video.playerWidth,t.video.playerHeight]:Array.isArray((0,g.Z)(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?n=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&e.sizes.length>0&&Array.isArray(e.sizes[0])&&e.sizes[0].length>1&&(n=e.sizes[0]),n}var i=[];return Array.isArray(t.sizes)?i=t.sizes:void 0!==(0,g.Z)(e,"mediaTypes.banner.sizes")?i=I(e.mediaTypes.banner.sizes):Array.isArray(e.sizes)&&e.sizes.length>0?i=I(e.sizes):(0,m.logWarn)("Rubicon: no sizes are setup or found"),function(e){var r=[15,2,9];return e.sort((function(e,t){var n=r.indexOf(e),i=r.indexOf(t);return n>-1||i>-1?-1===n?1:-1===i?-1:n-i:e-t}))}(i)}function I(e){return(0,m.parseSizesInput)(e).reduce((function(e,r){var t=parseInt(_[r],10);return t&&e.push(t),e}),[])}function R(e){var r=void 0!==(0,g.Z)(e,"mediaTypes.".concat(p.pX)),t=void 0!==(0,g.Z)(e,"mediaTypes.".concat(p.Mk)),n=void 0!==(0,g.Z)(e,"params.bidonmultiformat"),i="object"!==(0,o.Z)((0,g.Z)(e,"params.video"));return!(!r||!n)||(t&&i&&(r=!1),r&&i&&(0,v.N)(e,"params.video",{}),r)}function S(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=[];if(R(e)){if(-1===["outstream","instream"].indexOf((0,g.Z)(e,"mediaTypes.".concat(p.pX,".context"))))return r&&(0,m.logError)("Rubicon: mediaTypes.video.context must be outstream or instream"),t;if(A(e,p.pX).length<2)return r&&(0,m.logError)("Rubicon: could not determine the playerSize of the video"),t;r&&(0,m.logMessage)("Rubicon: making video request for adUnit",e.adUnitCode),t.push(p.pX)}if(void 0!==(0,g.Z)(e,"mediaTypes.".concat(p.B5))&&t.push(p.B5),void 0!==(0,g.Z)(e,"mediaTypes.".concat(p.Mk))){if(0===A(e,p.Mk).length)return r&&(0,m.logError)("Rubicon: could not determine the sizes for banner request"),t;r&&(0,m.logMessage)("Rubicon: making banner request for adUnit",e.adUnitCode),t.push(p.Mk)}return t}function C(e){var r=!1,t=["asi","sid","hp"];return e.nodes?((r=e.nodes.reduce((function(e,r){return e?t.every((function(e){return r.hasOwnProperty(e)})):e}),!0))||(0,m.logError)("Rubicon: required schain params missing"),r):r}function T(e,r){return"rp_schain"===e?"rp_schain=".concat(r):"".concat(e,"=").concat(encodeURIComponent(r))}var Z=!1;(0,c.dX)(k),(0,a.z)("rubiconBidAdapter")},26372:function(e,r,t){t.d(r,{DZ:function(){return a},Px:function(){return s},TP:function(){return c},YC:function(){return d},Z:function(){return o},f8:function(){return m},fP:function(){return v},gm:function(){return n},md:function(){return u}});var n=["request","imp","bidResponse","response"],i=["default","pbs"],o=n[0],a=n[1],s=n[2],d=n[3],c=i[0],u=i[1],p=new Set(n);var l,f=(l={},{registerOrtbProcessor:function(e){var r=e.type,t=e.name,i=e.fn,o=e.priority,a=void 0===o?0:o,s=e.dialects,d=void 0===s?[c]:s;if(!p.has(r))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));d.forEach((function(e){l.hasOwnProperty(e)||(l[e]={}),l[e].hasOwnProperty(r)||(l[e][r]={}),l[e][r][t]={priority:a,fn:i}}))},getProcessors:function(e){return l[e]||{}}}),m=f.registerOrtbProcessor,v=f.getProcessors}},function(e){e.O(0,[85279,70951],(function(){return r=40060,e(e.s=r);var r}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[31215],{13522:function(e,r,a){var t=a(78640),i=a(20265),n=a(64358),o=a(24679),d=a(3193),s=a(14699),p={code:"smartadserver",gvlid:45,aliases:["smart"],supportedMediaTypes:[o.Mk,o.pX],isBidRequestValid:function(e){return!!(e.params&&e.params.siteId&&e.params.pageId&&e.params.formatId)},serializeSupplyChain:function(e){if(!e||!e.nodes)return null;var r=["asi","sid","hp","rid","name","domain"];return"".concat(e.ver,",").concat(e.complete,"!")+e.nodes.map((function(e){return r.map((function(r){return e[r]?encodeURIComponent(e[r]):""})).join(",")})).join("!")},adaptBannerSizes:function(e){return e.map((function(e){return{w:e[0],h:e[1]}}))},fillPayloadForVideoBidRequest:function(e,r,a){var t=r.playerSize[0];e.isVideo="instream"===r.context,e.mediaType=o.pX,e.videoData={videoProtocol:this.getProtocolForVideoBidRequest(r,a),playerWidth:t[0],playerHeight:t[1],adBreak:this.getStartDelayForVideoBidRequest(r,a)}},getProtocolForVideoBidRequest:function(e,r){return void 0!==r&&r.protocol?r.protocol:void 0!==e&&Array.isArray(e.protocols)?Math.max.apply(Math,e.protocols):null},getStartDelayForVideoBidRequest:function(e,r){if(void 0!==r&&r.startDelay)return r.startDelay;if(void 0!==e){if(0==e.startdelay)return 1;if(-1==e.startdelay)return 2;if(-2==e.startdelay)return 3}return 2},createServerRequest:function(e,r){return{method:"POST",url:(void 0!==r?r:"https://prg.smartadserver.com")+"/prebid/v1",data:JSON.stringify(e)}},buildRequests:function(e,r){var a=d.vc.getConfig("currency.adServerCurrency"),t=(0,i.Z)(r,"ortb2.user.data",d.vc.getAnyConfig("ortb2.user.data")),s=(0,i.Z)(r,"ortb2.site.content.data",d.vc.getAnyConfig("ortb2.site.content.data"));return e.reduce((function(e,u){var l={siteid:u.params.siteId,pageid:u.params.pageId,formatid:u.params.formatId,currencyCode:a,targeting:u.params.target&&""!==u.params.target?u.params.target:void 0,buid:u.params.buId&&""!==u.params.buId?u.params.buId:void 0,appname:u.params.appName&&""!==u.params.appName?u.params.appName:void 0,ckid:u.params.ckId||0,tagId:u.adUnitCode,pageDomain:r&&r.refererInfo&&r.refererInfo.page?r.refererInfo.page:void 0,transactionId:u.transactionId,timeout:d.vc.getConfig("bidderTimeout"),bidId:u.bidId,prebidVersion:"7.45.0",schain:p.serializeSupplyChain(u.schain),sda:t,sdc:s};r&&(r.gdprConsent&&(l.addtl_consent=r.gdprConsent.addtlConsent,l.gdpr_consent=r.gdprConsent.consentString,l.gdpr=r.gdprConsent.gdprApplies),r.gppConsent&&(l.gpp=r.gppConsent.gppString,l.gpp_sid=r.gppConsent.applicableSections),r.uspConsent&&(l.us_privacy=r.uspConsent)),u&&u.userIdAsEids&&(l.eids=u.userIdAsEids),r&&r.uspConsent&&(l.us_privacy=r.uspConsent);var c=(0,i.Z)(u,"mediaTypes.banner"),m=(0,i.Z)(u,"mediaTypes.video"),f=m&&("instream"===m.context||"outstream"===m.context);if(c||f){var g;if(c){if(g=o.Mk,l.sizes=p.adaptBannerSizes(c.sizes),f){var v=(0,n.deepClone)(l);p.fillPayloadForVideoBidRequest(v,m,u.params.video),v.bidfloor=u.params.bidfloor||p.getBidFloor(u,a,o.pX),e.push(p.createServerRequest(v,u.params.domain))}}else g=o.pX,p.fillPayloadForVideoBidRequest(l,m,u.params.video);l.bidfloor=u.params.bidfloor||p.getBidFloor(u,a,g),e.push(p.createServerRequest(l,u.params.domain))}else e.push({});return e}),[])},interpretResponse:function(e,r){var a=[],t=e.body;try{if(t&&!t.isNoAd&&(t.ad||t.adUrl)){var i=JSON.parse(r.data),d={requestId:i.bidId,cpm:t.cpm,width:t.width,height:t.height,creativeId:t.creativeId,dealId:t.dealId,currency:t.currency,netRevenue:t.isNetCpm,ttl:t.ttl,dspPixels:t.dspPixels,meta:{advertiserDomains:t.adomain?t.adomain:[]}};i.mediaType===o.pX?(d.mediaType=o.pX,d.vastUrl=t.adUrl,d.vastXml=t.ad,d.content=t.ad):(d.adUrl=t.adUrl,d.ad=t.ad),a.push(d)}}catch(e){(0,n.logError)("Error while parsing smart server response",e)}return a},getBidFloor:function(e,r,a){if(!(0,n.isFn)(e.getFloor))return 0;var t=e.getFloor({currency:r||"USD",mediaType:a,size:"*"});return(0,n.isPlainObject)(t)&&!isNaN(t.floor)?t.floor:0},getUserSyncs:function(e,r){var a=[];return e.iframeEnabled&&r.length>0&&null!=r[0].body.cSyncUrl?a.push({type:"iframe",url:r[0].body.cSyncUrl}):e.pixelEnabled&&r.length>0&&void 0!==r[0].body.dspPixels&&r[0].body.dspPixels.forEach((function(e){a.push({type:"image",url:e})})),a}};(0,s.dX)(p),(0,t.z)("smartadserverBidAdapter")}},function(e){var r;r=13522,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[61814],{19333:function(e,t,n){var r=n(89062),i=n(4942),o=n(71002),a=n(78640),s=n(64358),c=n(20265),u=n(14699),d=n(24679);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l,m,h="stroeerCore",v={code:h,gvlid:136,supportedMediaTypes:[d.Mk,d.pX],isBidRequestValid:(l=[],m=function(e,t){return function(n){return!!e(n)||((0,s.logWarn)("".concat(h,": Bid setup for ").concat(n.adUnitCode," is invalid: ").concat(t)),!1)}},l.push(m((function(e){return function(e){return w(e)||S(e)}(e)}),"the media type is invalid")),l.push(m((function(e){return"object"===(0,o.Z)(e.params)}),"the custom params does not exist")),l.push(m((function(e){return(0,s.isStr)(e.params.sid)}),"the sid field must be a string")),function(e){return l.every((function(t){return t(e)}))}),buildRequests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.bids[0],i=t.refererInfo,o={id:t.auctionId,ref:i.ref,ssl:b(),mpa:y(),timeout:t.timeout-(Date.now()-t.auctionStart),url:i.page,schain:n.schain},a=n.userId;(0,s.isEmpty)(a)||(o.user={euids:a});var c=t.gdprConsent;c&&(o.gdpr={consent:c.consentString,applies:c.gdprApplies});var u=e.filter(w).map(P),d=e.filter(S).map(C);return{method:"POST",url:O(n.params),data:f(f({},o),{},{bids:[].concat((0,r.Z)(u),(0,r.Z)(d))})}},interpretResponse:function(e){var t=[];return e.body&&"object"===(0,o.Z)(e.body)&&e.body.bids.forEach((function(e){var n=null!=e.vastXml?d.pX:d.Mk,r={requestId:e.bidId,cpm:e.cpm||0,width:e.width||0,height:e.height||0,ttl:300,currency:"EUR",netRevenue:!0,creativeId:"",meta:{advertiserDomains:e.adomain},mediaType:n};n===d.pX?r.vastXml=e.vastXml:r.ad=e.ad,t.push(r)})),t},getUserSyncs:function(e,t,n){return t.length>0&&e.iframeEnabled?[{type:"iframe",url:"https://js.adscale.de/pbsync.html"+j(n)}]:[]}},b=function(){return"https:"===(0,s.getWindowSelf)().location.protocol},y=function(){try{return!!(0,s.getWindowTop)().location.href}catch(e){return!1}},g=function(e){var t;try{return function e(t,n){var r=t.getBoundingClientRect(),i=r.top+r.height>=0&&r.top<=n.innerHeight;return n!==n.parent?i&&e(n.frameElement,n.parent):i}((t=e,(0,s.getWindowSelf)().document.getElementById(t)),(0,s.getWindowSelf)())}catch(e){}},O=function(e){var t=e.host,n=void 0===t?"hb.adscale.de":t,r=e.port,i=void 0===r?"":r,o=e.securePort,a=e.path,c=void 0===a?"/dsh":a;return o&&(i=o),(0,s.buildUrl)({protocol:"https",hostname:n,port:i,pathname:c})},j=function(e){if(e){var t=encodeURIComponent(e.consentString||""),n=e.gdprApplies?1:0;return"?gdpr=".concat(n,"&gdpr_consent=").concat(t)}return""},w=function(e){return!e.mediaTypes&&!e.mediaType||e.mediaTypes&&e.mediaTypes.banner||e.mediaType===d.Mk},S=function(e){var t=e.mediaTypes;return t&&t.video&&["instream","outstream"].indexOf(t.video.context)>-1},T=function(e){return{bid:e.bidId,sid:e.params.sid,viz:g(e.adUnitCode)}},P=function(e){return f({ban:{siz:(0,c.Z)(e,"mediaTypes.banner.sizes")||[]}},T(e))},C=function(e){var t=(0,c.Z)(e,"mediaTypes.video")||{};return f({vid:{ctx:t.context,siz:t.playerSize,mim:t.mimes}},T(e))};(0,u.dX)(v),(0,a.z)("stroeerCoreBidAdapter")}},function(e){var t;t=19333,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[88029],{76401:function(e,t,r){var n=r(4942),i=r(78640),a=r(64358),d=r(20265),o=r(14699),s=r(15164);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u="teads",g=12,f=11,I=0,l=22,m="_tfpvi",v=(0,s.df)({bidderCode:u}),y={code:u,gvlid:132,supportedMediaTypes:["video","banner"],isBidRequestValid:function(e){var t=!1;if(void 0!==e.params){var r=P((0,a.getValue)(e.params,"placementId")),n=P((0,a.getValue)(e.params,"pageId"));t=r&&n}return t||(0,a.logError)("Teads placementId and pageId parameters are required. Bid aborted."),t},buildRequests:function(e,t){var r,n=e.map(S),i=c(c({referrer:b(t),pageReferrer:document.referrer,networkBandwidth:(r=window.navigator,r&&r.connection&&r.connection.downlink>=0?r.connection.downlink.toString():""),timeToFirstByte:h(window),data:n,deviceWidth:screen.width,hb_version:"7.45.0"},function(e){var t={unifiedId2:"uid2.id",liveRampId:"idl_env",lotamePanoramaId:"lotamePanoramaId",id5Id:"id5id.uid",criteoId:"criteoId",yahooConnectId:"connectId",quantcastId:"quantcastId",epsilonPublisherLinkId:"publinkId",publisherFirstPartyViewerId:"pubcid",merkleId:"merkleId.id",kinessoId:"kpuid"},r={};for(var n in t){var i=t[n],a=(0,d.Z)(e,"0.userId.".concat(i));a&&(r[n]=a)}return r}(e)),function(e){var t=(0,d.Z)(e,"0.userId.teadsId");if(t)return{firstPartyCookieTeadsId:t};if(v.cookiesAreEnabled(null)){var r=v.getCookie(m,null);if(r)return{firstPartyCookieTeadsId:r}}return{}}(e)),a=e[0];a.schain&&(i.schain=a.schain);var o=t.gdprConsent;if(t&&o){var s="boolean"==typeof o.gdprApplies,p="string"==typeof o.consentString,u=s?function(e,t){var r=g;e?t&&!t.isServiceSpecific&&(r=f):r=I;return r}(o.gdprApplies,o.vendorData):l;i.gdpr_iab={consent:p?o.consentString:"",status:u,apiVersion:o.apiVersion}}t&&t.uspConsent&&(i.us_privacy=t.uspConsent);var y=(0,d.Z)(a,"ortb2.device.sua");return y&&(i.userAgentClientHints=y),{method:"POST",url:"https://a.teads.tv/hb/bid-request",data:JSON.stringify(i)}},interpretResponse:function(e,t){var r=[];return(e=e.body).responses&&e.responses.forEach((function(e){var t={cpm:e.cpm,width:e.width,height:e.height,currency:e.currency,netRevenue:!0,ttl:e.ttl,meta:{advertiserDomains:e&&e.adomain?e.adomain:[]},ad:e.ad,requestId:e.bidId,creativeId:e.creativeId,placementId:e.placementId};e.dealId&&(t.dealId=e.dealId),r.push(t)})),r}};function b(e){var t="";return e&&e.refererInfo&&e.refererInfo.page&&(t=e.refererInfo.page),t}function h(e){var t=e.performance||e.webkitPerformance||e.msPerformance||e.mozPerformance,r=t&&"function"==typeof t.getEntriesByType&&"[object Function]"===Object.prototype.toString.call(t.getEntriesByType)&&t.getEntriesByType("navigation")[0]&&t.getEntriesByType("navigation")[0].responseStart&&t.getEntriesByType("navigation")[0].requestStart&&t.getEntriesByType("navigation")[0].responseStart>0&&t.getEntriesByType("navigation")[0].requestStart>0&&Math.round(t.getEntriesByType("navigation")[0].responseStart-t.getEntriesByType("navigation")[0].requestStart);if(r)return r.toString();var n=t&&t.timing.responseStart&&t.timing.requestStart&&t.timing.responseStart>0&&t.timing.requestStart>0&&t.timing.responseStart-t.timing.requestStart;return n?n.toString():""}function S(e){var t={},r=(0,a.getValue)(e.params,"placementId"),n=(0,a.getValue)(e.params,"pageId"),i=(0,d.Z)(e,"ortb2Imp.ext.gpid");return t.sizes=function(e){return(0,a.parseSizesInput)(function(e){var t=(0,d.Z)(e,"mediaTypes.video.playerSize"),r=(0,d.Z)(e,"mediaTypes.video.sizes"),n=(0,d.Z)(e,"mediaTypes.banner.sizes");return(0,a.isArray)(n)||(0,a.isArray)(t)||(0,a.isArray)(r)?[n,r,t].reduce((function(e,t){return(0,a.isArray)(t)&&((0,a.isArray)(t[0])?t.forEach((function(t){e.push(t)})):e.push(t)),e}),[]):e.sizes}(e))}(e),t.bidId=(0,a.getBidIdParameter)("bidId",e),t.bidderRequestId=(0,a.getBidIdParameter)("bidderRequestId",e),t.placementId=parseInt(r,10),t.pageId=parseInt(n,10),t.adUnitCode=(0,a.getBidIdParameter)("adUnitCode",e),t.auctionId=(0,a.getBidIdParameter)("auctionId",e),t.transactionId=(0,a.getBidIdParameter)("transactionId",e),i&&(t.gpid=i),t}function P(e){return parseInt(e)>0}(0,o.dX)(y),(0,i.z)("teadsBidAdapter")}},function(e){var t;t=76401,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[82599],{70789:function(e,r,t){var n=t(71002),i=t(4942),o=t(89062),a=t(78640),u=t(64358),d=t(24679),c=t(14699),p=t(3193),s=t(15164);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m="triplelift",y=!0,g=null,v=(0,s.df)({bidderCode:m}),b={gvlid:28,code:m,supportedMediaTypes:[d.Mk,d.pX],isBidRequestValid:function(e){return void 0!==e.params.inventoryCode},buildRequests:function(e,r){var t="https://tlx.3lift.com/header/auction?",n=function(e,r){var t,n,i={},a=e[0].schain,d=function(e){var r={},t={},n={},i=e.ortb2||{},o=function(){var e=v.getDataFromLocalStorage("opecloud_ctx");if(!e)return null;try{return JSON.parse(e)}catch(e){return(0,u.logError)("Triplelift: error parsing JSON: ",e),null}}(),a=Object.assign({},i.site),d=Object.assign({},i.user);if(o){d.data=d.data||[];try{d.data.push({name:"www.1plusx.com",ext:o})}catch(e){(0,u.logError)("Triplelift: error adding 1plusX segments: ",e)}}E(t,a),E(n,d),(0,u.isEmpty)(t)||(r.context=t);(0,u.isEmpty)(n)||(r.user=n);return r}(r);i.imp=e.map((function(e,r){var t={id:r,tagid:e.params.inventoryCode,floor:x(e)};return h(e)&&(t.video=function(e){var r=f(f({},e.params.video),e.mediaTypes.video);try{r.w||(r.w=r.playerSize[0][0]),r.h||(r.h=r.playerSize[0][1])}catch(e){(0,u.logWarn)("Video size not defined",e)}"instream"===r.context&&(r.placement=1);"outstream"===r.context&&(r.placement?-1===[3,4,5].indexOf(r.placement)&&((0,u.logMessage)("video.placement value of ".concat(r.placement," is invalid for outstream context. Setting placement to 3")),r.placement=3):r.placement=3);r.playbackmethod&&Number.isInteger(r.playbackmethod)&&(r.playbackmethod=Array.from(String(r.playbackmethod),Number));return delete r.playerSize,r}(e)),e.mediaTypes.banner&&!S(e)&&(t.banner={format:I(e.sizes)}),(0,u.isEmpty)(e.ortb2Imp)||(t.fpd=function(e){var r={},t={};E(t,e.ext),(0,u.isEmpty)(t)||(r.context=t);return r}(e.ortb2Imp)),t}));var c=[].concat((0,o.Z)((p=[e[0]],A(p,"tdid","adserver.org","TDID"))),(0,o.Z)(function(e){return A(e,"idl_env","liveramp.com","idl")}([e[0]])),(0,o.Z)(function(e){return A(e,"criteoId","criteo.com","criteoId")}([e[0]])),(0,o.Z)(function(e){return A(e,"pubcid","pubcid.org","pubcid")}([e[0]])),(0,o.Z)(function(e){var r=["adserver.org","liveramp.com","criteo.com","pubcid.org"],t=[];e.userIdAsEids&&e.userIdAsEids.forEach((function(e){try{if(-1===r.indexOf(e.source)){var n=e.uids.map((function(r){return{id:r.id,ext:{rtiPartner:e.source}}}));t.push({source:e.source,uids:n})}}catch(r){(0,u.logWarn)("Triplelift: Error attempting to add ".concat(e," to bid request"),r)}}));return t}(e[0])));var p;c.length>0&&(i.user={ext:{eids:c}});var s=function(e,r){var t={};(0,u.isEmpty)(e)||(t.schain=f({},e));(0,u.isEmpty)(r)||(t.fpd=f({},r));return t}(a,d);(0,u.isEmpty)(s)||(i.ext=s);null!=r&&null!==(t=r.ortb2)&&void 0!==t&&null!==(n=t.regs)&&void 0!==n&&n.gpp&&(i.regs=Object.assign({},r.ortb2.regs));return i}(e,r);if(t=(0,u.tryAppendQueryString)(t,"lib","prebid"),t=(0,u.tryAppendQueryString)(t,"v","7.45.0"),r&&r.refererInfo){var i=r.refererInfo.page;t=(0,u.tryAppendQueryString)(t,"referrer",i)}return r&&r.timeout&&(t=(0,u.tryAppendQueryString)(t,"tmax",r.timeout)),r&&r.gdprConsent&&(void 0!==r.gdprConsent.gdprApplies&&(y=r.gdprConsent.gdprApplies,t=(0,u.tryAppendQueryString)(t,"gdpr",y.toString())),void 0!==r.gdprConsent.consentString&&(g=r.gdprConsent.consentString,t=(0,u.tryAppendQueryString)(t,"cmp_cs",g))),r&&r.uspConsent&&(t=(0,u.tryAppendQueryString)(t,"us_privacy",r.uspConsent)),!0===p.vc.getConfig("coppa")&&(t=(0,u.tryAppendQueryString)(t,"coppa",!0)),t.lastIndexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),(0,u.logMessage)("tlCall request built: "+t),{method:"POST",url:t,data:n,bidderRequest:r}},interpretResponse:function(e,r){var t=r.bidderRequest;return(e.body.bids||[]).map((function(e){return function(e,r){var t={},n=r.width||1,i=r.height||1,o=r.deal_id||"",a=r.crid||"",u=e.bids[r.imp_id];0!=r.cpm&&r.ad&&(t={requestId:u.bidId,cpm:r.cpm,width:n,height:i,netRevenue:!0,ad:r.ad,creativeId:a,dealId:o,currency:"USD",ttl:300,tl_source:r.tl_source,meta:{}},h(u)&&"video"===r.media_type&&(t.vastXml=r.ad,t.mediaType="video",t.ttl=3600),r.advertiser_name&&(t.meta.advertiserName=r.advertiser_name),r.adomain&&r.adomain.length&&(t.meta.advertiserDomains=r.adomain),r.tl_source&&"hdx"==r.tl_source&&(h(u)&&"video"===r.media_type?t.meta.mediaType="video":t.meta.mediaType="banner"),r.tl_source&&"tlx"==r.tl_source&&(t.meta.mediaType="native"),a&&(t.meta.networkId=a.slice(0,a.indexOf("_"))));return t}(t,e)}))},getUserSyncs:function(e,r,t,n){var i=function(e){if(!e)return;if(e.iframeEnabled)return"iframe";if(e.pixelEnabled)return"image"}(e);if(i){var o="https://eb2.3lift.com/sync?";return"image"===i&&(o=(0,u.tryAppendQueryString)(o,"px",1),o=(0,u.tryAppendQueryString)(o,"src","prebid")),null!==g&&(o=(0,u.tryAppendQueryString)(o,"gdpr",y),o=(0,u.tryAppendQueryString)(o,"cmp_cs",g)),n&&(o=(0,u.tryAppendQueryString)(o,"us_privacy",n)),[{type:i,url:o}]}}};function h(e){return O(e)&&(S(e)||function(e){return O(e)&&"outstream"===e.mediaTypes.video.context.toLowerCase()}(e))}function S(e){return O(e)&&"instream"===e.mediaTypes.video.context.toLowerCase()}function O(e){return e.mediaTypes.video&&e.mediaTypes.video.context}function x(e){var r=null;if("function"==typeof e.getFloor)try{var t=e.getFloor({currency:"USD",mediaType:h(e)?"video":"banner",size:"*"});"object"!==(0,n.Z)(t)||"USD"!==t.currency||isNaN(parseFloat(t.floor))||(r=parseFloat(t.floor))}catch(e){(0,u.logError)("Triplelift: getFloor threw an error: ",e)}return null!==r?r:e.params.floor}function E(e,r){(0,u.isEmpty)(r)||Object.keys(r).forEach((function(t){null!=r[t]&&(e[t]=r[t])}))}function A(e,r,t,n){return e.map(function(e){return function(r){return r&&r.userId&&r.userId[e]}}(r)).filter(j(r)).map(function(e,r){return function(t){return{source:e,uids:[{id:t.id?t.id:t,ext:{rtiPartner:r}}]}}}(t,n))}var j=function(e){return function(r,t,n){var i=!!r&&((0,u.isStr)(r)?!!r:(0,u.isPlainObject)(r)&&!(0,u.isArray)(r)&&!(0,u.isEmpty)(r)&&r.id&&(0,u.isStr)(r.id)&&!!r.id);return i||void 0===n[0]||(0,u.logWarn)("Triplelift: invalid ".concat(e," userId format")),i}};function I(e){return e.filter(T).map((function(e){return{w:e[0],h:e[1]}}))}function T(e){return 2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}(0,c.dX)(b),(0,a.z)("tripleliftBidAdapter")}},function(e){var r;r=70789,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[33377],{41457:function(e,r,t){var n=t(93324),i=t(4942),o=t(78640),s=t(64358),d=t(20265),a=t(14699),p=t(3193),u=t(24679),c=t(90154);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g="visx",y="EUR",l="/push_sync",b={noAuid:"Bid from response has no auid parameter - ",noAdm:"Bid from response has no adm parameter - ",noBid:"Array of bid objects is empty",noImpId:"Bid from response has no impid parameter - ",noPlacementCode:"Can't find in requested bids the bid with auid - ",emptyUids:"Uids should not be empty",emptySeatbid:"Seatbid array from response has an empty item",emptyResponse:"Response is empty",hasEmptySeatbidArray:"Response has empty seatbid array",hasNoArrayOfBids:"Seatbid from response has no array of bid objects - ",notAllowedCurrency:"Currency is not supported - ",currencyMismatch:"Currency from the request is not match currency from the response - ",onlyVideoInstream:"Only video ".concat(c.LD," supported"),videoMissing:"Bid request videoType property is missing - "},v=["EUR","USD","GBP","PLN"],h={code:g,gvlid:154,supportedMediaTypes:[u.Mk,u.pX],isBidRequestValid:function(e){return!(I(e)&&!O(e,!0)&&!function(e){return e.mediaType===u.Mk||(0,d.Z)(e,"mediaTypes.banner")}(e))&&(!!e.params.uid&&!isNaN(parseInt(e.params.uid)))},buildRequests:function(e,r){var t,i,o,a,u,c=[],m={},y=e||[],l=p.vc.getConfig("currency.bidderCurrencyDefault.".concat(g))||p.vc.getConfig("currency.adServerCurrency")||"EUR";if(-1!==v.indexOf(l)){var h=[];y.forEach((function(e){t=e.bidderRequestId;var r=function(e){var r=e.params.uid,t=e.bidId,i=e.mediaTypes,o=e.sizes,a=e.adUnitCode,p=i&&I(e)&&O(e)&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.keys(e).filter((function(e){return"context"!==e&&"playerSize"!==e})).reduce((function(r,t){return r[t]=e[t],r}),{w:(0,d.Z)(e,"playerSize.0.0"),h:(0,d.Z)(e,"playerSize.0.1")});if(r.w&&r.h)return r}(i.video),u=function(e){var r=e&&e.sizes;if(r){var t=(0,s.parseSizesInput)(r);if(t.length)return{format:t.map((function(e){var r=e.split("x"),t=(0,n.Z)(r,2),i=t[0],o=t[1];return{w:parseInt(i,10),h:parseInt(o,10)}}))}}}(i&&i.banner||!p&&{sizes:o}),c=f(f(f({id:t},u&&{banner:u}),p&&{video:p}),{},{ext:{bidder:{uid:parseInt(r)}}});c.banner&&(c.ext.bidder.adslotExists=function(e){if(document.getElementById(e))return!0;var r=(0,s.getGptSlotInfoForAdUnitCode)(e);if(r.divId&&document.getElementById(r.divId))return!0;return!1}(a));if(c.ext.bidder.uid&&(c.banner||c.video))return c}(e);r&&(h.push(r),m[e.bidId]=e);var p=e.params.uid,u=e.schain,g=e.userId,y=e.userIdAsEids;!i&&u&&(i=u),!a&&y&&(a=y),!o&&g&&(o=g),c.push(p)}));var S={};r&&(u=r.timeout,r.refererInfo&&r.refererInfo.page&&(S.u=r.refererInfo.page),r.gdprConsent&&(r.gdprConsent.consentString&&(S.gdpr_consent=r.gdprConsent.consentString),S.gdpr_applies="boolean"==typeof r.gdprConsent.gdprApplies?Number(r.gdprConsent.gdprApplies):1));var C=Number(p.vc.getConfig("bidderTimeout"))||u,E=u?Math.min(C,u):C,j={ext:f({wrapperType:"Prebid_js",wrapperVersion:"7.45.0"},i&&{schain:i})},w={ext:f(f({},a&&{eids:a}),S.gdpr_consent&&{consent:S.gdpr_consent})},A="gdpr_applies"in S&&{ext:{gdpr:S.gdpr_applies}},T=f(f({id:t,imp:h,tmax:E,cur:[l],source:j,site:{page:S.u}},Object.keys(w.ext).length&&{user:w}),A&&{regs:A});return{method:"POST",url:x("/hb_post")+"?auids="+encodeURIComponent(c.join(",")),data:T,bidsMap:m}}(0,s.logError)(b.notAllowedCurrency+l)},interpretResponse:function(e,r){e=e&&e.body;var t,n=[],i=r.bidsMap,o=r.data.cur[0];return e?e.seatbid&&!e.seatbid.length&&(t=b.hasEmptySeatbidArray):t=b.emptyResponse,!t&&e.seatbid&&e.seatbid.forEach((function(e){!function(e,r,t,n){if(!e)return;var i;e.auid||(i=b.noAuid+JSON.stringify(e));e.impid||(i=b.noImpId+JSON.stringify(e));if(e.adm){var o=t||y,a=r[e.impid];if(a)if(e.cur&&e.cur!==o)i=b.currencyMismatch+o+" - "+e.cur;else{var p={requestId:a.bidId,cpm:e.price,width:e.w,height:e.h,creativeId:e.auid,currency:o,netRevenue:!0,ttl:360,dealId:e.dealid,meta:{advertiserDomains:e.advertiserDomains?e.advertiserDomains:[],mediaType:e.mediaType}};e.ext&&e.ext.prebid&&(p.ext=e.ext.prebid);var u=(0,d.Z)(e,"ext.prebid.targeting");u&&(p.adserverTargeting=u),S(a)?(p.vastXml=e.adm,p.mediaType="video"):p.ad=e.adm,n.push(p)}else i=b.noPlacementCode+e.auid}else i=b.noAdm+JSON.stringify(e);i&&(0,s.logError)(i)}(function(e){e?e.bid?e.bid[0]||(0,s.logError)(b.noBid):(0,s.logError)(b.hasNoArrayOfBids+JSON.stringify(e)):(0,s.logError)(b.emptySeatbid);return e&&e.bid&&e.bid[0]}(e),i,o,n)})),t&&(0,s.logError)(t),n},getUserSyncs:function(e,r,t){var n=[];return t&&(t.consentString&&n.push("gdpr_consent="+encodeURIComponent(t.consentString)),n.push("gdpr_applies="+encodeURIComponent("boolean"==typeof t.gdprApplies?Number(t.gdprApplies):1))),e.iframeEnabled?[{type:"iframe",url:x(l)+"?iframe=1"+(n.length?"&"+n.join("&"):"")}]:e.pixelEnabled?[{type:"image",url:x(l)+(n.length?"?"+n.join("&"):"")}]:void 0},onSetTargeting:function(e){e.ext&&e.ext.events&&e.ext.events.pending&&(0,s.triggerPixel)(e.ext.events.pending)},onBidWon:function(e){e.ext&&e.ext.events&&e.ext.events.win&&(0,s.triggerPixel)(e.ext.events.win)},onTimeout:function(e){var r=e.map((function(e){var r=e.params,t={timeout:e.timeout};return r&&(t.params=r.map((function(e){return e&&e.uid?{uid:parseInt(e.uid)}:{}}))),t}));(0,s.triggerPixel)(x("/track/bid_timeout")+"//"+JSON.stringify(r))}};function x(e){return(p.vc.getConfig("devMode")?"https://t-stage.visx.net":"https://t.visx.net")+e}function I(e){return e.mediaType===u.pX||(0,d.Z)(e,"mediaTypes.video")}function S(e){return I(e)&&(0,d.Z)(e,"mediaTypes.video",{}).context===c.LD}function O(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=!0,n=(0,d.Z)(e,"mediaTypes.video");return S(e)||(r&&(0,s.logError)(b.onlyVideoInstream),t=!1),n.playerSize&&(0,s.parseSizesInput)((0,d.Z)(n,"playerSize",[]))||(r&&(0,s.logError)(b.videoMissing+"playerSize"),t=!1),t}(0,a.dX)(h),(0,o.z)("visxBidAdapter")}},function(e){var r;r=41457,e(e.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[26900],{6620:function(e,n,t){var a=t(93324),r=t(71002),i=t(78640),s=t(64358),o=t(20265),c=t(14699),d=t(34614),p=t(24679),u=t(35706),m=t(70059),l="https://ad.yieldlab.net",v="EUR",f="x",h={code:"yieldlab",gvlid:70,supportedMediaTypes:[p.pX,p.Mk,p.B5],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.adslotId&&e.params.supplyId)},buildRequests:function(e,n){e=(0,m.lY)(e);var t=[],i=[],c=[],d={ts:Date.now(),json:!0};(0,s._each)(e,(function(e){t.push(e.params.adslotId);var n,u,m,l,y,g=function(e){var n=e.mediaTypes,t=[];if((0,s.isPlainObject)(n)){var r=n[p.Mk];r&&(0,s.isArray)(r.sizes)&&((0,s.isArray)(r.sizes[0])?t.push(r.sizes):t.push([r.sizes]))}else(0,s.isArray)(e.sizes)&&((0,s.isArray)(e.sizes[0])?t.push(e.sizes):t.push([e.sizes]));var i=new Set(t.flat().map((function(e){var n=(0,a.Z)(e,2),t=n[0],r=n[1];return t+f+r})));return Array.from(i)}(e);if(g.length>0&&i.push(e.params.adslotId+":"+g.join("|")),e.params.extId&&(d.id=e.params.extId),e.params.targeting&&(d.t=function(e){var n=[];for(var t in e)if(e.hasOwnProperty(t)){var a=t,r=e[t];n.push(a+"="+r)}return n.join("&")}(e.params.targeting)),e.userIdAsEids&&Array.isArray(e.userIdAsEids)&&(d.ids=function(e){for(var n=[],t=0;t<e.length;t++)n.push(e[t].source+":"+e[t].uids[0].id);return n.join(",")}(e.userIdAsEids),d.atypes=function(e){for(var n=[],t=0;t<e.length;t++)e[t].uids[0].atype&&n.push(e[t].source+":"+e[t].uids[0].atype);return n.join(",")}(e.userIdAsEids)),e.params.customParams&&(0,s.isPlainObject)(e.params.customParams))for(var b in e.params.customParams)d[b]=e.params.customParams[b];e.schain&&(0,s.isPlainObject)(e.schain)&&Array.isArray(e.schain.nodes)&&(d.schain=(n=e.schain,u=n.ver||"",m=1===n.complete||0===n.complete?n.complete:"",l=["asi","sid","hp","rid","name","domain","ext"],y=n.nodes.reduce((function(e,n){return e+"!".concat(l.map((function(e){return n[e]?(t=n[e],encodeURIComponent(t).replace(/!/g,"%21")):"";var t})).join(","))}),""),"".concat(u,",").concat(m).concat(y)));var I=function(e){if(e.params.iabContent&&(0,s.isPlainObject)(e.params.iabContent))return e.params.iabContent;var n=(0,o.Z)(e,"ortb2.site")?(0,o.Z)(e,"ortb2.site.content"):(0,o.Z)(e,"ortb2.app.content");if(n&&(0,s.isPlainObject)(n))return n;return}(e);I&&(d.iab_content=function(e){var n=["keywords","cat"],t=[],a=function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(var s in a)-1!==n.indexOf(s)&&Array.isArray(a[s])?t.push("".concat(s,":",a[s].map((function(e){return encodeURIComponent(e)})).join("|"))):"object"!==(0,r.Z)(a[s])?t.push("".concat(i+s,":",encodeURIComponent(a[s]))):e(a[s],"".concat(i,s,"."));return t.join(",")};return encodeURIComponent(a(e))}(I));var w=function(e,n){if(!(0,s.isFn)(e.getFloor))return;var t=(0,o.Z)(e,"mediaTypes"),a=void 0!==t?Object.keys(t)[0].toLowerCase():void 0,r=e.getFloor({currency:v,mediaType:void 0!==a&&h.supportedMediaTypes.includes(a)?a:"*",size:1!==n.length?"*":n[0].split(f)});if(r.currency===v)return(100*r.floor).toFixed(0);return}(e,g);w&&c.push(e.params.adslotId+":"+w)})),n&&(n.refererInfo&&n.refererInfo.page&&(d.pubref=n.refererInfo.page),n.gdprConsent&&(d.gdpr="boolean"!=typeof n.gdprConsent.gdprApplies||n.gdprConsent.gdprApplies,d.gdpr&&(d.consent=n.gdprConsent.consentString)));var u=t.join(",");i.length>0&&(d.sizes=i.join(",")),c.length>0&&(d.floor=c.join(","));var y=function(e){var n=[];for(var t in e)if(e.hasOwnProperty(t)){var a=e[t];"schain"!==t&&"iab_content"!==t?n.push(encodeURIComponent(t)+"="+encodeURIComponent(a)):n.push(t+"="+a)}return n.join("&")}(d);return{method:"GET",url:"".concat(l,"/yp/").concat(u,"?").concat(y),validBidRequests:e,queryParams:d}},interpretResponse:function(e,n){var t=[],a=Date.now(),r=n.queryParams;return n.validBidRequests.forEach((function(n){if(e.body){var i,c,m=(0,d.sE)(e.body,(function(e){return n.params.adslotId==e.id}));if(m){var f=2!==n.sizes.length||(0,s.isArray)(n.sizes[0])?n.sizes[0]:n.sizes,h=void 0!==n.params.adSize?y(n.params.adSize):void 0!==m.adsize?y(m.adsize):f,b=void 0!==n.params.extId?"&id="+n.params.extId:"",I=void 0!==m.adtype?m.adtype:"",w=r.gdpr?"&gdpr="+r.gdpr:"",j=r.consent?"&consent="+r.consent:"",A=void 0!==m.pvid?"&pvid="+m.pvid:"",z=r.iab_content?"&iab_content="+r.iab_content:"",C={requestId:n.bidId,cpm:m.price/100,width:h[0],height:h[1],creativeId:""+m.id,dealId:m["c.dealid"]?m["c.dealid"]:m.pid,currency:v,netRevenue:!1,ttl:300,referrer:"",ad:'<script src="'.concat(l,"/d/").concat(m.id,"/").concat(n.params.supplyId,"/?ts=").concat(a).concat(b).concat(w).concat(j).concat(A).concat(z,'"><\/script>'),meta:{advertiserDomains:m.advertiser?m.advertiser:"n/a"}};if(i=n,c=I,(0,o.Z)(i,"mediaTypes.video")&&"video"===c.toLowerCase()){var E=function(e){var n=(0,o.Z)(e,"mediaTypes.video.playerSize");return n&&(0,s.isArray)(n[0])?n[0]:n}(n);if(E&&(C.width=E[0],C.height=E[1]),C.mediaType=p.pX,C.vastUrl="".concat(l,"/d/").concat(m.id,"/").concat(n.params.supplyId,"/?ts=").concat(a).concat(b).concat(w).concat(j).concat(A).concat(z),function(e){return"outstream"===(0,o.Z)(e,"mediaTypes.video.context")}(n)){var R=u.Th.install({id:n.bidId,url:"https://ad.adition.com/dynamic.ad?a=o193092&ma_loadEvent=ma-start-event",loaded:!1});R.setRender(g),C.renderer=R}}if(function(e,n){return(0,o.Z)(e,"mediaTypes.native")&&"native"===n.toLowerCase()}(n,I)){var T="".concat(l,"/d/").concat(m.id,"/").concat(n.params.supplyId,"/?ts=").concat(a).concat(b).concat(w).concat(j).concat(A);C.adUrl=T,C.mediaType=p.B5;var U=(0,d.sE)(m.native.assets,(function(e){return 2===e.id})),P=U?U.img:{url:"",w:0,h:0},_=(0,d.sE)(m.native.assets,(function(e){return 1===e.id})),x=(0,d.sE)(m.native.assets,(function(e){return 3===e.id}));C.native={title:_?_.title.text:"",body:x?x.data.value:"",image:{url:P.url,width:P.w,height:P.h},clickUrl:m.native.link.url,impressionTrackers:m.native.imptrackers}}t.push(C)}}})),t},getUserSyncs:function(e,n,t,a){var r=[];if(e.iframeEnabled){var i=[];i.push("ts=".concat((0,s.timestamp)())),i.push("type=h"),t&&"boolean"==typeof t.gdprApplies&&i.push("gdpr=".concat(Number(t.gdprApplies))),t&&"string"==typeof t.consentString&&i.push("gdpr_consent=".concat(t.consentString)),r.push({type:"iframe",url:"".concat(l,"/d/6846326/766/2x2?").concat(i.join("&"))})}return r}};function y(e){return e.split(f).map(Number)}function g(e){e.renderer.push((function(){window.ma_width=e.width,window.ma_height=e.height,window.ma_vastUrl=e.vastUrl,window.ma_container=e.adUnitCode,window.document.dispatchEvent(new Event("ma-start-event"))}))}(0,c.dX)(h),(0,i.z)("yieldlabBidAdapter")}},function(e){var n;n=6620,e(e.s=n)}]);
})(),pbjs.processQueue();
function amazonLibraryForFramework() { !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js"); }
var _0x3d23=["loadRessource","length","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_","removeStickiness","fixed","AgdM","userSync","stopped","getItem","fde","container","head","PbB","setRenderedBid","addToFocusStack","_startAuction","defineOutOfPageSlot","AnimationName","match","sendAllBids","Add AdUnits","disableInitialLoad","innerHTML","position","none","Consent","timeout","euconsent-v2","disable","shift","disableLimitedAds","idle","_disableVisibilityCheck","defineOutPage","getAdUnitsToFetch","resolveRequireRefresh","Prebid.request"," { animation-duration: 0.001s; animation-name: ","cpg_debug=true","slotResponseReceived","uc_tcf","font-size:8px","getAdUnitsForCurrentMapping","rendered","gLa","533257JcbBkA","\n                            <div style=\"position: relative !important; text-align: center\">\n                                <div id=\"","getSlot","absolute","[%RCPG \uD83D\uDE80%c] ","Consent._triggerInit","initial","MSAnimationStart","adUnit","average","data-size","color:blue;","legitimateInterests","documentElement","_mapping","addConsentCallback","fixedVector","_prebidStatus","concat","_findConsent","dpd.de","move","fluid","onAdRendered","cmd","_autoRecalcTimer","zIndex","_callOnViewable","onBidderTimeout","require","frAT","startRefreshTimer","Scroll trigger request","Aat","collapseEmptyDivs","_debug","Prebid Done","que","_purpose","getRefreshState","_impressionViewable","eventStatus","_init","_focusStack","container-missed","destroy","_callOnVisibility","div","Prepare request","mediaTypes","getFallbackCallee","Refresh_version","Core","//securepubads.g.doubleclick.net/tag/js/gpt.js","hb_size","fas","slotID","scroll","_o_1","callAdManager","now","gpt._init","applyTargeting","DFP","animationName","sort","purposeConsents","1345986ljmCdo","params","requireVisibility","playerSize","dspx_scroller","service","color:blue; font-weight: bold;","call","visibility","_responseStatus","%1ms %c]","AgSc","addBidError","Load Library"," || [%c","toFixed","bidCpmAdjustment","GPT._onSlotResponseReceived","Shim loaded","isSticky","clear","getBoundingClientRect","AoRTe","getEntriesByType","%1ms %c] [ ","googletag","_slotResponse","enableSingleRequest","1547657unlGOv","slotRenderEnded","Loading done","stopAtEndOfContainer","width","CDA","additionalSlotSizes","isDebugEnabled","autoboot","_bootFromStorage","requireViewable","getRenderStatus","targetingNameCounter","Consent._init","_amazonStatus","undefined","slot","449031XGzlbP","Prebid","_slotTargetings","viewable","tryToRefresh","cookies","getBidError","setConfig","gpt","10000",";expires=","resolve","_allowRequests","adManagerRequest","_adsReceived","_callbacks","animationstart","Amazon","freezeContainerPosition","conversionRateFile","_amazonEnabled","cpg_","apiReady","status","log","value","_visibility","unsticky","bottom","request","addService","mods","requestAdUnitsForRefresh","slotName","fetchBids","gpt_ppid50=","apply","object","formatDuration","scrollY","availableWidth","isEmpty","join","start","getPropertyValue","Amazon.request","AoRT","vendorLegitimateInterests","4.1.9","adUnitName","apstag","Consent Skip","protocol","Unable to parse sizes","360280SJlruY","_missedContainerMonitored","toLowerCase","[%gCPG Performance%c] [Last Entry] [Tag Total ] [Since Boot] [Since Load] || Tag | Section ","setRequestNonPersonalizedAds","indexOf","__tcfapi","setAttribute","isFirstRequest","split","freSt","pop","pubstack","clearTargeting","GPT Response received ","boolean","fTI","auctionDone","onRender","schain","fetchMarginPercent","onReceivedBid","getBidders","currency","waitForConsentEvent","_bidsReceived","fallback","cmpApi","faD","bidderSettings","applyCustomTargetings","targetings","_relations","Framework.reset","fIN","search","applyFireplaceLogic","parcelno","getBids","innerHeight","display","toString","setTimeout","Prebid._init","ppid","setSlotResponse","getAdUnit","creative_id","vendor","getHtml","destroyPageType","error","getVisibility","frs","1571829uvEDkM","stopTrigger","Request","_targetingMapping","sticky","timeToRespond","setTargeting","inViewPercentage","left","adUnits","contains","getMediaTypes","context","\"></div></div>\n                            </div>\n                        ","amazon","getMappingIndex","Framework._onFocus","frN","every","settings","getConsentData","opacity","getBidResponses","prebid","[object Object]","Request AdUnits","destroySlots","pubId","Container available! Fill now","Consent.addConsentCallback","Amazon Done","addAdUnits","createElement","wait","purpose","_processLabel","AaT","userAgent","addEventListener","faDN","true","freSF","unloadPageskin","_calculateStickyStart","amzn_win.apstag.renderImp","applyStickiness","body","addTargetings","getAttribute","pubads","ignoreLazy","goN","AiV","removeEventListener","allowRequests","parse","color:red;","enableSendAllBids","version","Refresh","_focus","refreshRelation","floor","bidder","getContainer","adHandler","video","webkitAnimationStart","getElementById","_onSlotRenderEnded","getAdUnitsByTag","tcloaded","host","personalizedContent","_getWinners","forceMapping","amzniid","_status","onResponse","random","color:green;","defaultView","Amazon._init","instream","Webkit Moz O ms Khtml","Requests completed!","string","_refreshTimer","data","_sp_user_consent","clientWidth","parentNode","preGptRequest","slotVisibilityChanged","class","_currentMapping","personalized","; path=/","keyframes ","substr","removeChild","location","Slot rendered","Add Callback to queue","reset","getResponseStatus","Ale","appendChild","callback","_monitorMissedContainer","\"></div>","amznsz","eval","buildAt","amznp","data-is-active","_loadDebugLibrary","static","PEX","requireFocus","enableGptFirst","%c] ","refresh","top","prototype","Firefox/94","getAdUnitsForRefresh","_refreshCount","%1ms %c] ","frSi","onBids","setFullYear","enableServices","onImpressionViewable","mapping_","getPPID","defineSlot","consentData","Start Auction","_stack","style","libLoaded","siteId","_applyTargetingToAdUnits","int","cpm","tags","%c] [%c","stopAtContainer","setPrivacySettings","printHelp","setItem","_adUnitCodes","2023-06-07 15:53:35","_disableFocusCheck","lazy","gdpr","_slots","GPT._onSlotRenderEnded","Framework.addAdUnits","\" style=\"position: relative !important; top: 0\"><div id=\"","impressionViewable","Process Request","Agd","crossorigin","CST","render","ltd","bids","Error while parsing consent","prevStyles","requestBids","repeat","Consent Parsed","block","loadMapping","_onFocus","getSlotVisibleIndex","text/javascript","enableTargeting","color:orange;","_log","animation-duration: 0.001s; ","processing","charAt","banner","seamless","consents","fallbackCallee","href","purposeLegitimateInterests","C2o","bid","callbacks","_onScroll","type","_consentData","getRenderedBid","containerId","hb_bidder","format","dspx","forceLazyLoadForAllAdUnits","sizes","Setup Prebid.js","hb_format","addToStack","down","Framework.monitorMissedContainer","getComputedStyle","tcString","_receivedBids","cpg_debug_targetings","_renderedBid","framework","GPT","_requireRefresh","199161uCdcmV","clearTimeout","_refreshWaitTimer","_slotVisibleIndex","onStickyBehaviour","consentManagement","_o_0","_setSendAllBidsTargeting","5dnJuyb","_renderStatus","adserverTargeting","gdprApplies","outerWidth","defineOutOfPage","enabled","pathname","_currentMappingType","Load Shim","Firefox/93","done","availableHeight","_oldPos","vendorConsents","calculateStickyEnd","disableConsentManagement","ADr","requestAdUnits","focus","disabled","height","getSlotElementId","Receive Slot Infos","debug","stop","Initilize","forEach","scroller","setVisibility","target","_requestedAdUnits","_bidErrors","_onSlotVisibilityChanged","filter","1jMFOmv","freeze","_getConfig","deals","pbjs","_applyBidsToAdUnits","autoRecalculateEndPosition","enable","dds","vendorVector","firS","function","AgSm","cookie","size","pubID","_disableEnable","AoR","onBidInvalid","fetched","amznbid","color:red; font-weight: bold;","_onConsent","script","priceGranularity","_onBlur","1jBwCwR","_slotNextIndex","_triggerInit","_requestTime","_onSlotImpressionViewable"," } ","tagLog","navigation","getSizes","Lazy.scroll","getTargetingValueFromMapping","gdR","targeting","push","hasOwnProperty","getStatus"],_0xa9ac46=_0xb64b;function _0xb64b(a,b){return(_0xb64b=function(a){return _0x3d23[a-=161]})(a,b)}function rapidTCFDecode(b){var g=_0xa9ac46;if(!1===b||null==b)return!1;var f=null,c=[[6],[36],[36],[12],[12],[6,"consentScreen",g(315)],[12],[12],[6],[1],[1],[12],[24,g(584),"fixedVector"],[24,g(361),g(534)],[1],[12],[null,g(410),g(440)],[null,g(677),g(440)],[null]],h={int:function(a){return typeof a===g(257)&&(a=parseInt(a,10)),a.toString(2)},fixedVector:function(a,b){for(var c=[],d=1;d<=b;d++)"1"===a[d-1]&&(c[d]=!0);return c},vendorVector:function(b){var e=g,h=parseInt(b.substr(0,16),2),j=17,k=[],a=0;if(1!==parseInt(b[e(355)](16),2)){var m=b.substr(j,h);for(j+=h,a=1;a<=h;a++)"1"===m[a-1]&&(k[a]=!0)}else{var n=parseInt(b[e(270)](j,12),2);for(j+=12,a=0;a<n;a++){var d="1"===b[e(270)](j,1);j+=1;var o=parseInt(b[e(270)](j,16),2);if(j+=16,d){var l=parseInt(b.substr(j,16),2);j+=16;for(var c=o;c<=l;c++)k[c]=!0}else k[o]=!0}}return f=j,k}},a=[],j=function(b){for(var c,d=g,e=d(475),f="",h=0;h<b.length;h++)c=e[d(689)](b[h]).toString(2),f+="0"[d(343)](6-c[d(474)])+c;return f}(b[g(693)](".")[0]),k=0;return c[g(423)](function(b){var c=g;f=null;var d=b[0],e=typeof b[2]!==c(628)&&b[2];0!==d&&(!1!==e&&(a[b[1]]=h[e](j[c(270)](k,null===d?void 0:d),d)),null===d?null!==f&&(k+=f):k+=d)}),a}(function(a){for(var b=_0xb64b;;)try{if(901181===parseInt(b(613))+-parseInt(b(518))+-parseInt(b(585))+-parseInt(b(171))*parseInt(b(431))+parseInt(b(684))+parseInt(b(388))*parseInt(b(457))+parseInt(b(396))*parseInt(b(630)))break;a.push(a.shift())}catch(b){a.push(a.shift())}})(_0x3d23),window.adHandler=window[_0xa9ac46(236)]||{cmd:[]},window[_0xa9ac46(435)]=window.pbjs||{que:[]},window.googletag=window[_0xa9ac46(610)]||{cmd:[]},adHandler[_0xa9ac46(265)]={},adHandler[_0xa9ac46(590)]={},adHandler.refreshRelation=adHandler[_0xa9ac46(232)]||[],typeof adHandler[_0xa9ac46(364)]===_0xa9ac46(628)&&(adHandler.callbacks={preGptRequest:[]}),typeof adHandler[_0xa9ac46(621)]===_0xa9ac46(628)&&(adHandler.autoboot=0>=window.adHandler[_0xa9ac46(542)][_0xa9ac46(474)]),typeof adHandler[_0xa9ac46(291)]===_0xa9ac46(628)&&(adHandler[_0xa9ac46(291)]=!1),typeof adHandler[_0xa9ac46(279)]===_0xa9ac46(628)&&(adHandler[_0xa9ac46(279)]={}),typeof adHandler[_0xa9ac46(279)][_0xa9ac46(301)]===_0xa9ac46(628)&&(adHandler.callback[_0xa9ac46(301)]=function(){}),typeof adHandler[_0xa9ac46(279)].preGptRequest===_0xa9ac46(628)&&(adHandler[_0xa9ac46(279)].preGptRequest=function(){}),typeof adHandler[_0xa9ac46(246)]===_0xa9ac46(628)&&(adHandler.forceMapping=!1),typeof adHandler[_0xa9ac46(412)]===_0xa9ac46(628)&&(adHandler[_0xa9ac46(412)]=!1),typeof adHandler[_0xa9ac46(541)]===_0xa9ac46(628)&&(adHandler.onAdRendered=!1),void 0===adHandler[_0xa9ac46(392)]&&(adHandler[_0xa9ac46(392)]=function(){}),typeof adHandler[_0xa9ac46(503)]===_0xa9ac46(628)&&(adHandler[_0xa9ac46(503)]=!1),typeof adHandler[_0xa9ac46(708)]===_0xa9ac46(628)&&(adHandler[_0xa9ac46(708)]=!0),void 0===adHandler[_0xa9ac46(661)]&&(adHandler[_0xa9ac46(661)]=[]),void 0===adHandler[_0xa9ac46(501)]&&(adHandler[_0xa9ac46(501)]=[]),adHandler[_0xa9ac46(229)]=_0xa9ac46(678),adHandler[_0xa9ac46(284)]=_0xa9ac46(324),adHandler.application=function(_0x3d0803){var _0x15f20b=_0xa9ac46,_0x32e14f=function(a){var b=_0xb64b;_0x3e01cd[b(542)][b(470)](a)};window[_0x15f20b(209)]("message",function(_0x6abc1c){var _0x231944=_0x15f20b;try{if(void 0===_0x6abc1c[_0x231944(259)])return;if(null===_0x6abc1c.data)return;if(void 0===_0x6abc1c[_0x231944(259)][_0x231944(426)])return;if(void 0===_0x6abc1c[_0x231944(259)][_0x231944(283)])return;if(_0x6abc1c[_0x231944(259)][_0x231944(426)]!==_0x231944(385))return;eval(_0x6abc1c[_0x231944(259)][_0x231944(283)])}catch(a){}},!1);var vb,wb,kb,lb,qa,ra,sa,ta,ua,jc,kc,_0x6679c9={getCookie:function(a){var b=_0xb64b;if(-1===document[b(444)][b(689)](a))return!1;var c=("; "+document.cookie)[b(693)]("; "+a+"=");return 2===c[b(474)]?c[b(695)]()[b(693)](";")[b(502)]():void 0},position:function(a){var b=_0xb64b;return{top:a[b(606)]()[b(294)]-document[b(217)].getBoundingClientRect().top,left:a[b(606)]()[b(179)]-document.body[b(606)]().left}},loadRessource:function(a){var b=_0xb64b,c=document[b(203)](b(454));c.async=!0,c[b(335)]="anonymous",c[b(366)]=b(349),c.src=a,document[b(484)][b(278)](c)},availableHeight:function(){return window[_0xb64b(723)]},availableWidth:function(){var a=_0xb64b;return typeof window.outerWidth===a(628)||0===window[a(400)]?document[a(531)][a(261)]:window[a(400)]},forEach:function(b,c,d){var e=_0xb64b;if(Object[e(295)][e(725)].call(b)===e(195))for(var f in b)Object[e(295)][e(471)][e(592)](b,f)&&c.call(d,b[f],f,b);else for(var a=0,g=b.length;a<g;a++)c.call(d,b[a],a,b)}},_0x3578f4=(qa=_0x15f20b,ra=performance[qa(578)](),sa={},ta={},ua={pad:function(a,b){var c=qa;for(parts=a.toString().split(".");parts[0][c(474)]<b;)parts[0]="0"+parts[0];return parts[0]+"."+parts[1]},formatDuration:function(b,c){var d=qa,e="",f="";void 0!==c&&(e=b<c.good?"%g":b<c[d(527)]?"%b":"%r",f="%c");var g=b[d(600)](2)[d(725)]()[d(693)]("."),h=4-g[0][d(474)];return 0<h&&(g[0]=" "[d(343)](h)+g[0]),e+g[0]+"."+g[1]+f},colorizeText:function(b){var c=qa,d=[],e="",f=!1;for(var g in b)if(b.hasOwnProperty(g)){if("%"===b[g=parseInt(g)]&&"%"!==b[g+1]){switch(b[g+1]){case"c":d.push("");break;case"R":d[c(470)](c(452));break;case"B":d[c(470)](c(591));break;case"b":d.push(c(529));break;case"o":d.push(c(351));break;case"g":d[c(470)](c(251));break;case"r":d[c(470)](c(227));break;case"1":d.push(c(514));break;default:d[c(470)]("");}f=!0}"%"!==b[g]&&f?(e+="c",f=!1):e+=b[g]}return[e,d]},printHelp:function(){var a=qa,b=ua.colorizeText(a(687));console[a(654)][a(666)](console,[b[0]][a(536)](b[1]||[]))},_log:function(b,e,g,h,j,k){var m=qa;if(void 0===h&&(h=1),void 0===j&&(j=1.5),void 0===k&&(k=2),typeof performance!==m(628))try{var o=performance[m(608)](m(464))[0].requestStart,d=performance[m(578)](),p=!1,q=d-ra,c=!1,s="";void 0!==g&&(void 0===sa[g]?(s+="[ "+ua[m(668)](0)+m(609)+ua.formatDuration(0)+m(299),ta[g]=d):(c=d-ta[g],p=d-sa[g],s+="[ "+ua[m(668)](p)+m(609)+ua[m(668)](c)+m(299)),sa[g]=performance.now()),s+="[ "+ua.formatDuration(q)+m(299),s+="[ "+ua[m(668)](d-o)+m(595),e=m(522)+s+m(599)+g+m(318)+b+m(292)+e,ua.colorizeText(e)}catch(a){}},tagLog:function(b,c,d,e,f,a){ua[qa(352)](c,d,b,e,f,a)}},{tagLog:ua[qa(463)],printHelp:ua[qa(321)]}),_0x3e01cd=(kb=_0x15f20b,lb={cmd:[],_debug:!1,_level:0,_init:function(){var a=_0xb64b;lb[a(553)]=lb[a(620)](),lb[a(553)]&&lb._loadDebugLibrary()},enable:function(){var a=_0xb64b;lb[a(553)]||(lb[a(553)]=!0,lb[a(287)]())},disable:function(){var a=_0xb64b;lb[a(553)]=!1,localStorage.removeItem(a(383))},enableTargeting:function(a,b){var c=_0xb64b;localStorage[c(322)](c(383),[a,b]),window[c(610)].cmd[c(470)](function(){var d=c;window[d(610)][d(220)]().setTargeting(a,b)})},isDebugEnabled:function(){var a=_0xb64b;return!0===_0x3d0803[a(420)][a(402)]||localStorage[a(481)]("cpg_debug")===a(211)||-1!==top[a(272)][a(719)][a(689)](a(511))},_loadDebugLibrary:function(){var a=_0xb64b;_0x6679c9[a(473)](_0x3d0803[a(420)].debugScript)}},lb[kb(560)](),{cmd:lb[kb(542)],enable:lb.enable,disable:lb[kb(501)],enableTargeting:lb[kb(350)],isDebugEnabled:lb[kb(620)]}),_0x34370e=(vb=_0x15f20b,wb={_status:"wait",_api:null,_consentData:null,_consentString:"",_callbacks:[],_purpose:{cookies:!1,personalized:!1,personalizedContent:!1},_bootFromStorage:!1,_init:function(){var a=_0xb64b;if(!0===adHandler.disableConsentManagement)return _0x3578f4[a(463)](a(498),a(626),a(681)),void wb[a(459)]();var b=wb[a(537)]();!1===b?typeof window.__tcfapi===a(628)?(_0x32e14f({id:"Cw"}),window[a(726)](wb[a(560)],100)):(_0x32e14f({id:"Co"}),wb[a(248)]="loaded",window[a(690)](a(209),2,wb._onConsent)):(wb[a(622)]=!0,wb[a(453)](b))},_findConsent:function(){var b=_0xb64b,c=!1,d=!1;try{[b(260),b(513)][b(423)](function(a){var d=b;if(!1===c){var e=localStorage[d(481)](a);null!==e&&(c="_sp_user_consent"===a?JSON[d(226)](e).euconsent:a===d(513)?JSON[d(226)](e)[d(381)]:e)}}),!1===c&&[b(500),"eupubconsent-v2"].forEach(function(a){var d=b,e=("; "+document[d(444)])[d(693)]("; "+a+"=");2===e[d(474)]&&(c=e[d(695)]()[d(693)](";")[d(502)]())});var f=rapidTCFDecode(c);!1!==f&&(d={tcString:c,gdprApplies:!0,eventStatus:"useractioncomplete",purpose:{consents:f[b(584)]},vendor:{consents:f[b(410)],legitimateInterests:f.purposeLegitimateInterests}})}catch(a){console[b(168)](b(340),a),d=!1}return d},_onConsent:function(a){var b=_0xb64b;if(null!==a&&typeof a[b(399)]===b(699)&&!1===a[b(399)])return adHandler[b(412)]=!0,adHandler[b(503)]=!0,void wb._triggerInit();if(null==a||void 0===a[b(559)])_0x32e14f({id:"CI",options:a[b(559)]});else if("useractioncomplete"===a[b(559)]||a[b(559)]===b(242)){var c=!1,d=!1;void 0!==a[b(165)][b(358)]&&typeof(c=a[b(165)].consents[755])===b(628)&&(c=!1),typeof a[b(165)][b(530)]!==b(628)&&void 0===(d=a[b(165)][b(530)][755])&&(d=!1),!1!==c||!1!==d?(_0x32e14f({id:b(618),consent:a}),(wb[b(367)]=a)[b(381)]&&(wb._consentString=a[b(381)]),a[b(205)]&&(void 0!==a[b(205)][b(358)][1]&&(wb._purpose[b(635)]=a[b(205)][b(358)][1]),typeof a[b(205)][b(358)][3]!==b(628)&&typeof a[b(205)].consents[4]!==b(628)&&(wb._purpose.personalized=a[b(205)][b(358)][3]&&a[b(205)][b(358)][4]),void 0!==a.purpose[b(358)][5]&&void 0!==a[b(205)][b(358)][6]&&(wb[b(556)][b(244)]=a[b(205)][b(358)][5]&&a[b(205)].consents[6])),_0x32e14f({id:b(362),myPurpose:wb[b(556)]}),wb[b(459)]()):_0x32e14f({id:"C3"})}else _0x32e14f({id:"C2",options:a[b(559)]})},_triggerCallbacks:function(){var a=_0xb64b;if(!1===adHandler[a(412)]&&!0===adHandler[a(503)]&&!1===wb.purpose(a(635)))_0x32e14f({id:a(336)});else{if(0===wb[a(645)].length)return;_0x3578f4[a(463)](a(498),a(200),"Trigger Callbacks"),wb._callbacks[a(423)](function(a){requestAnimationFrame(a)}),wb[a(645)]=[]}},addConsentCallback:function(a){var b=_0xb64b;wb[b(248)]===b(407)?(_0x3578f4[b(463)](b(498),b(200),"Call Callback"),a()):(_0x3578f4[b(463)]("Consent","Consent.addConsentCallback",b(274)),wb[b(645)].push(a))},purpose:function(a){var b=_0xb64b;return!0===adHandler[b(412)]||(wb[b(248)]===b(407)?wb[b(556)][a]:(_0x32e14f({id:"Cp",options:a}),!1))},_triggerInit:function(){var a=_0xb64b;if(wb[a(248)]!==a(407)){if(_0x3578f4[a(463)](a(498),a(523),a(344)),-1!==window[a(272)][a(360)][a(689)](a(538)))try{var b=[];""!==window[a(272)][a(719)]&&(window.location[a(719)][a(270)](1).split("&")[a(423)](function(c){var d=a;c.substr(0,8)!==d(721)&&b[d(470)](c)}),history.pushState("","",window[a(272)][a(682)]+"//"+window[a(272)][a(243)]+window.location[a(403)]+"?"+b[a(672)]("&")))}catch(a){}wb[a(248)]=a(407),wb._triggerCallbacks()}}},wb[vb(560)](),{addConsentCallback:wb[vb(533)],purpose:wb[vb(205)],isBootFromStorage:function(){return wb[vb(622)]},getConsent:function(){return wb._consentString},getConsentData:function(){return wb._consentData}}),_0x26bf77=null,_0x58fc76=null;typeof _0x3d0803[_0x15f20b(194)]!==_0x15f20b(628)&&(_0x58fc76={resolve:{resolve:function(a){var b=[];return a.forEach(function(c){var d=_0xb64b;"ix"===c[d(234)]&&typeof c[d(586)][d(374)]!==d(628)?c.params[d(374)].forEach(function(a){var e=d,f={bidder:"ix",params:{siteId:c[e(586)][e(313)],size:a}};b[e(470)](f)}):b[d(470)](c)}),b}}[_0x15f20b(641)]},jc=_0x15f20b,kc={_adIdSources:{},_init:function(){var a=_0xb64b;if(-1!==adHandler.disable[a(689)](a(194)))return _0x32e14f({id:"PD"}),void(_0x26bf77=null);_0x3578f4.tagLog("Prebid","Prebid._init",a(422)),typeof window[a(435)]===a(628)||typeof window[a(435)][a(229)]===a(628)?(_0x3578f4[a(463)](a(631),a(727),a(598)),preBidLibraryForFramework(),_0x3578f4[a(463)]("Prebid",a(727),a(615),30,27,25)):_0x32e14f({id:a(289)});var b=function(){var b=a;_0x3578f4[b(463)](b(631),b(727),b(375)),window.pbjs[b(637)](kc[b(433)]()),_0x3578f4[b(463)]("Prebid",b(727),"Setup Prebid.js donee")};!0===window[a(435)][a(312)]?b():window.pbjs[a(555)][a(470)](b)},_getConfig:function(){var a=_0xb64b,b={priceGranularity:_0x3d0803[a(194)][a(455)]};if(_0x3d0803[a(194)][a(707)]&&(b.currency={adServerCurrency:_0x3d0803[a(194)][a(707)]},void 0!==adHandler.conversionRateFile&&(b.currency[a(649)]=adHandler.conversionRateFile),_0x32e14f({id:"Pc",options:_0x3d0803[a(194)].currency})),_0x3d0803[a(194)]&&typeof _0x3d0803.prebid[a(492)]!==a(628)?b.enableSendAllBids=_0x3d0803.prebid[a(492)]:b[a(228)]=!1,_0x32e14f({id:"Pa",options:b.enableSendAllBids}),void 0!==_0x3d0803[a(393)]&&void 0!==_0x3d0803[a(393)][a(194)]&&!1===adHandler[a(412)]){if(_0x32e14f({id:"PCM",options:_0x3d0803[a(393)][a(194)]}),typeof _0x3d0803[a(393)][a(194)][a(327)]==a(667)&&typeof _0x3d0803[a(393)].prebid[a(327)].defaultGdprScope==a(628)&&(_0x3d0803[a(393)][a(194)][a(327)].defaultGdprScope=!0),_0x34370e.isBootFromStorage()){var c=_0x34370e[a(191)]();_0x3d0803[a(393)][a(194)][a(327)][a(711)]=a(288),_0x3d0803[a(393)][a(194)][a(327)][a(308)]={getTCData:c}}b.consentManagement=_0x3d0803.consentManagement[a(194)]}return void 0!==_0x3d0803[a(194)].userSync&&!0===_0x3d0803[a(194)][a(479)]?(b[a(479)]={auctionDelay:50,filterSettings:{iframe:{bidders:"*",filter:"include"}}},_0x32e14f({id:"Ps"})):typeof _0x3d0803[a(194)][a(479)]===a(667)&&(b[a(479)]=_0x3d0803[a(194)][a(479)]),b},_enableBidderRelatedCommands:function(a){var b=_0xb64b,c=[];a.forEach(function(a){var b=_0xb64b;c=c[b(536)](a[b(706)]())}),-1!==c[b(689)]("rubicon")&&window[b(435)][b(637)]({rubicon:{singleRequest:!0}}),-1!==c[b(689)]("improvedigital")&&window[b(435)][b(637)]({improvedigital:{singleRequest:!0}})},request:function(a){var b=_0xb64b;_0x3578f4[b(463)]("Prebid","Prebid.request",b(566)),kc._enableBidderRelatedCommands(a);var c=[];return(a[b(423)](function(d){var e=b;if(typeof d[e(339)]!==e(628)){d[e(339)]=_0x58fc76[e(641)](d.bids);var f={code:d[e(369)],mediaTypes:d.getMediaTypes(),bids:d[e(339)],pubstack:{adUnitPath:d[e(663)]}};if(adHandler.renameFallbackForPubstack){var g=d[e(369)];null!==d[e(568)]()&&(g=d[e(568)]().containerId),f[e(696)][e(679)]=g}else{var h=d[e(663)].split("/");f[e(696)][e(679)]=h[h.length-1]}c[e(470)](f)}}),0===c[b(474)])?(_0x32e14f({id:"Pr"}),void _0x1d66d3.auctionDone(_0x26bf77)):void(window[b(435)][b(202)](c),_0x3578f4[b(463)](b(631),b(509),b(173)),requestAnimationFrame(function(){var d=b;window[d(435)][d(342)]({timeout:_0x3d0803[d(499)]||700,bidsBackHandler:function(){var b=d;adHandler[b(279)][b(301)](c),kc[b(436)](a),_0x32e14f({id:b(485)}),_0x3578f4[b(463)](b(631),b(509),b(554)),_0x1d66d3[b(701)](_0x26bf77)}})}))},_applyBidsToAdUnits:function(a){var b=_0xb64b,c=window[b(435)][b(193)]();_0x6679c9.forEach(c,function(b,c){_0x6679c9.forEach(a,function(a){var d=_0xb64b;(a[d(663)]===c||a[d(369)]===c)&&b[d(339)][d(423)](function(b){var c=d;void 0!==pbjs[c(713)]&&void 0!==pbjs.bidderSettings[b.bidder]&&void 0!==pbjs[c(713)][b[c(234)]][c(601)]&&(b[c(316)]=pbjs[c(713)][b[c(234)]][c(601)](b[c(316)])),a.onReceivedBid(new _0x43dd7c(b.ad,b[c(234)],b[c(164)],b[c(316)],b[c(176)],b[c(617)],b[c(417)],b[c(398)]))})})})},reset:function(){var a=_0xb64b;typeof window[a(435)]!==a(628)&&(window[a(435)][a(180)]=window.pbjs._bidsReceived=window[a(435)][a(323)]=window.pbjs[a(644)]=window[a(435)][a(709)]=[])}},kc._init(),_0x26bf77={reset:kc[jc(275)],request:kc[jc(659)]});var Qc,Rc,_0x110d27=null,_0x2c5e1e=!0;(-1!==navigator[_0x15f20b(208)][_0x15f20b(689)]("Firefox/92")||-1!==navigator.userAgent.indexOf(_0x15f20b(406))||-1!==navigator[_0x15f20b(208)][_0x15f20b(689)](_0x15f20b(296)))&&(_0x2c5e1e=!1,_0x32e14f({id:"Af"})),void 0!==_0x3d0803[_0x15f20b(185)]&&void 0!==_0x3d0803[_0x15f20b(638)]&&!0==_0x2c5e1e&&(Qc=_0x15f20b,Rc={_requestTime:null,_hooked:!1,_init:function(){var a=_0xb64b;if(-1!==adHandler.disable[a(689)](a(185)))return _0x32e14f({id:"AD"}),void(_0x110d27=null);if(!1!==_0x34370e.purpose(a(635))){var b={adServer:a(610),videoAdServer:a(581),pubID:_0x3d0803[a(185)][a(446)]};typeof _0x3d0803[a(185)][a(703)]===a(667)&&(b.schain=_0x3d0803.amazon[a(703)]),void 0!==_0x3d0803.amazon[a(434)]&&_0x3d0803[a(185)][a(434)]&&(b.deals=!0),_0x34370e.isBootFromStorage()&&(b.gdpr={enabled:!0,consent:_0x34370e.getConsent()}),requestAnimationFrame(function(){var c=a;_0x3578f4[c(463)](c(647),c(253),c(405)),amazonLibraryForFramework(),window[c(680)].init(b),_0x3578f4[c(463)](c(647),"Amazon._init",c(603))})}else _0x110d27=null},request:function(b){var c=_0xb64b;_0x3578f4[c(463)](c(647),c(675),"Request Amazon");var d=[];b[c(423)](function(a){var b=c;!0===a.amazonEnabled&&d[b(470)]({sizes:a.getSizes(),slotID:a.containerId+(-1===adHandler[b(501)][b(689)](b(357))?"_"+a.getSlotVisibleIndex():""),slotName:a[b(663)]})}),0===d[c(474)]?_0x1d66d3[c(701)](_0x110d27):(Rc[c(460)]=+new Date,window[c(680)][c(664)]({slots:d,timeout:_0x3d0803[c(499)]||700},function(a){var d=c;Rc[d(314)](a,b),_0x32e14f({id:"Art",options:a}),_0x3578f4[d(463)](d(647),d(675),d(201)),_0x1d66d3.auctionDone(_0x110d27)}))},_applyTargetingToAdUnits:function(a,b){var c=_0xb64b;a[c(423)](function(d){var f=c;_0x6679c9[f(423)](b,function(a){var b=f;if(a[b(369)]===d[b(574)]){var c=d;void 0!==_0x3d0803[b(185)][b(434)]&&_0x3d0803[b(185)][b(434)]&&(c=d[b(469)]),a.onReceivedBid(new _0x43dd7c("",b(185),null,null,Math.floor((+new Date-Rc[b(460)])/100),c[b(282)][b(693)]("x")[0],c[b(282)][b(693)]("x")[1],{amzniid:c[b(247)],amznbid:c[b(451)],amznp:c[b(285)],amznsz:c[b(282)]}))}})})},render:function(a,b){window.apstag.renderImp(a,b)}},_0x34370e.addConsentCallback(Rc[Qc(560)]),_0x110d27={render:Rc[Qc(337)],request:Rc.request});var kd,ld,_0x546df2=null;void 0!==_0x3d0803[_0x15f20b(638)]&&(kd=_0x15f20b,ld={_init:function(){var a=_0xb64b;if(-1!==adHandler.disable[a(689)]("gpt"))return _0x32e14f({id:"GD"}),void(_0x546df2=null);if(void 0===window[a(610)].apiReady)if(!1===_0x34370e.purpose(a(635))&&!1===adHandler[a(503)])_0x32e14f({id:"gdS",limitedAds:!0}),_0x6679c9[a(473)]("//pagead2.googlesyndication.com/tag/js/gpt.js");else{if(!1===_0x34370e[a(205)](a(635)))return _0x32e14f({id:"GD"}),void(_0x546df2=null);_0x3578f4[a(463)](a(386),a(579),"Load GPT library"),_0x32e14f({id:"gdS",limitedAds:!1}),_0x6679c9[a(473)](a(571))}window[a(610)].cmd[a(470)](function(){var b=a;window.googletag[b(220)]()[b(494)](),(!1===_0x34370e[b(205)](b(267))||!1===_0x34370e.purpose(b(244)))&&(_0x32e14f({id:"gd"}),window[b(610)][b(220)]()[b(688)](1)),!1===_0x34370e[b(205)](b(635))&&!1===adHandler.disableLimitedAds&&(_0x32e14f({id:b(517)}),window.googletag[b(220)]()[b(177)](b(338),"on"),window[b(610)].pubads()[b(320)]({limitedAds:!0})),-1===adHandler[b(501)][b(689)](b(552))&&window[b(610)].pubads().collapseEmptyDivs(!0),window[b(610)].pubads()[b(612)](),!0===_0x34370e[b(205)](b(635))&&window[b(610)].pubads().setPublisherProvidedId(ld[b(306)]()),window[b(610)].pubads().addEventListener(b(614),ld[b(240)]),window.googletag[b(220)]()[b(209)](b(512),ld._onSlotResponseReceived),window.googletag[b(220)]()[b(209)](b(264),ld[b(429)]),window[b(610)].pubads()[b(209)](b(332),ld[b(461)]),_0x6679c9[b(423)](_0x3d0803.gpt[b(469)],function(a,c){var d=b;typeof a===d(442)&&(a=a()),window.googletag[d(220)]()[d(177)](c,a)}),typeof window[b(714)]===b(442)&&window[b(714)]();var c=localStorage[b(481)](b(383));null!==c&&(c=c[b(693)](","),window[b(610)][b(542)][b(470)](function(){var a=b;window[a(610)][a(220)]().setTargeting(c[0],c[1])}))})},getPPID:function(){var b=_0xb64b;if(void 0!==adHandler[b(161)])return adHandler.ppid;var c=_0x6679c9.getCookie("gpt_ppid50");if(!1===c){c="";for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=d[b(474)],f=0;50>f;f++)c+=d[b(355)](Math[b(233)](Math[b(250)]()*e));var g=new Date;g[b(302)](g.getFullYear()+1),document[b(444)]=b(665)+c+b(640)+g+b(268)}return c},setTargeting:function(a,b){var c=_0xb64b;window[c(610)].cmd[c(470)](function(){var d=c;window.googletag&&googletag[d(652)]?window[d(610)][d(220)]()[d(177)](a,b):window[d(726)](function(){ld[d(177)](a,b)},200)})},_onSlotVisibilityChanged:function(a){var b=_0xb64b;if(void 0!==a[b(629)]){var c=_0x1d66d3[b(163)](a[b(629)][b(418)]());null!==c&&(-1===adHandler[b(501)][b(689)](b(357))?a.slot[b(418)]()[b(270)](-1)===c[b(348)]()+""&&c.setVisibility(a[b(178)]):c[b(425)](a[b(178)]))}},_onSlotImpressionViewable:function(a){var b=_0xb64b,c=_0x1d66d3.getAdUnit(a[b(629)][b(418)]());null!==c&&c[b(304)]()},_onSlotRenderEnded:function(b){var c=_0xb64b,d=_0x1d66d3.getAdUnit(b.slot.getSlotElementId());if(null===d)return _0x32e14f({id:c(222),options:b.slot});var e="";try{e=b[c(629)][c(166)]()}catch(a){}var f=d[c(722)]()[c(583)](function(a,b){return b[c(316)]-a.cpm});-1===e.indexOf("ucTagData.adServerDomain")?-1===e[c(689)](c(215))?!1===b[c(671)]&&d.setRenderedBid(c(638),b):d[c(486)]("amazon",f[c(430)](function(a){if("amazon"===a[c(234)])return a})[0]):d[c(486)](c(194),f[0]),d.setSlotResponse(b),d[c(702)](b),_0x3578f4.tagLog(b.slot[c(418)](),c(329),c(273))},_onSlotResponseReceived:function(a){var b=_0xb64b;_0x3578f4.tagLog(a[b(629)][b(418)](),b(602),b(419));var c=_0x1d66d3[b(163)](a[b(629)][b(418)]());return null===c?_0x32e14f({id:"goN",options:a[b(629)]}):void c[b(249)]()},refresh:function(b){var c=_0xb64b,d=[];_0x6679c9[c(423)](b,function(a){var b=c;if(a[b(472)]()!==b(416)){var e=a.getSlot();null!==e&&(d.push(e),a.display())}}),-1===adHandler[c(501)][c(689)](c(643))?0!==d[c(474)]&&window.googletag[c(542)].push(function(){var a=c;window[a(610)][a(303)](),window[a(610)][a(220)]()[a(293)](d)}):_0x32e14f({id:c(468)})}},_0x34370e[kd(533)](ld[kd(560)]),_0x546df2={refresh:ld[kd(293)],setTargeting:ld[kd(177)]});var _0x43dd7c=function(b,c,e,f,g,a,h,i,d){return{ad:b,bidder:c,creativeId:e,cpm:f,timeToRespond:g,width:a,height:h,targeting:i,tracking:typeof d===_0x15f20b(628)?null:d}},_0x4608fc=function(b){var c=_0x15f20b;void 0===b[c(293)]&&(b[c(293)]=!1),void 0===b[c(663)]&&null!==_0x546df2&&(b[c(663)]="/"+_0x3d0803[c(638)][c(198)]+"/"+b[c(483)]),void 0===b.mediaTypes&&void 0===b[c(374)]&&void 0===b.additionalSlotSizes||(void 0===b[c(567)]&&void 0!==b[c(374)]?b[c(567)]={banner:{sizes:b.sizes}}:void 0!==b.mediaTypes&&(void 0===b[c(374)]&&(b[c(374)]=[]),void 0!==b[c(567)].banner&&(b[c(374)]=b[c(567)][c(356)][c(374)]),void 0!==b[c(567)].video&&void 0===b[c(619)]&&(b[c(619)]=[[1,1]]),void 0!==b[c(567)][c(237)]&&0===b[c(374)][c(474)]&&(b.sizes=[b[c(567)][c(237)][c(588)]])));var f={_status:c(204),_slots:[],_slotVisibleIndex:0,_slotNextIndex:0,_slotResponse:{},_responseStatus:null,_renderStatus:null,_receivedBids:[],_refreshTimer:0,_refreshCount:0,_requireRefresh:!1,_visibility:0,_callOnVisibility:null,_callOnViewable:null,_bidErrors:[],_slotTargetings:typeof b[c(715)]===c(628)?{}:b.targetings,_disableFocusCheck:!1,_disableVisibilityCheck:!1,_disableViewableCheck:!1,_impressionViewable:!1,_renderedBid:!1,_amazonEnabled:typeof b[c(185)]===c(628)||b[c(185)],refresh:{disabled:typeof b[c(293)]===c(628),every:0,require:[],targetingNameCounter:null},sticky:{disabled:typeof b[c(175)]===c(628),autoRecalculateEndPosition:!1,start:null,top:0,bottom:0,stopTrigger:0,stop:0,location:null,stopped:!1,isSticky:!1,prevStyles:!1},fallback:void 0!==b[c(710)]&&b.fallback,fallbackCallee:null,lazy:{disabled:void 0===b[c(326)],status:c(204)},_init:function(){var a=c;typeof b[a(416)]===a(699)&&!0===b[a(416)]&&f[a(501)](a(526)),!1===f.sticky[a(416)]&&(f[a(175)][a(319)]=typeof b[a(175)][a(319)]===a(628)?null:b[a(175)][a(319)],f[a(175)][a(616)]=typeof b[a(175)][a(616)]!==a(628)&&b[a(175)][a(616)],f.sticky[a(294)]=void 0===b[a(175)][a(294)]?0:b[a(175)].top,f[a(175)][a(658)]=typeof b[a(175)][a(658)]===a(628)?0:b[a(175)][a(658)],f[a(175)].location=typeof b.sticky[a(272)]===a(628)?null:b[a(175)][a(272)],f[a(175)][a(437)]=typeof b[a(175)][a(437)]!==a(628)&&b[a(175)][a(437)],typeof b[a(175)][a(402)]===a(699)&&(f[a(175)].disabled=!b.sticky[a(402)])),!1===f[a(293)][a(416)]&&(f[a(293)].every=typeof b[a(293)][a(189)]===a(628)?30:b[a(293)][a(189)],f[a(293)][a(547)]=typeof b[a(293)].require===a(628)?[]:b[a(293)][a(547)],f[a(293)][a(625)]=typeof b[a(293)][a(625)]===a(628)?a(230):b.refresh[a(625)],-1===f[a(293)][a(547)].indexOf(a(415))&&(f[a(325)]=!0)),!0===f[a(326)][a(416)]&&"number"==typeof _0x3d0803.forceLazyLoadForAllAdUnits&&!0!==b[a(221)]?(f.lazy[a(416)]=!1,f[a(326)][a(704)]=_0x3d0803[a(373)],b[a(326)]={fetchMarginPercent:_0x3d0803.forceLazyLoadForAllAdUnits},_0x32e14f({id:"Ale",options:b})):!1===f[a(326)].disabled&&(f[a(326)][a(704)]=void 0===b.lazy.fetchMarginPercent?5:b[a(326)][a(704)],_0x32e14f({id:a(277),options:b}))},setRenderedBid:function(a,d){var e=c;if(f[e(384)]={service:a,bid:d},a===e(194))try{("teads"===d[e(234)]||d[e(469)][e(376)]===e(237))&&(f[e(501)]("refresh"),_0x32e14f({id:e(413),options:b}))}catch(a){}},onImpressionViewable:function(){var a=c;_0x32e14f({id:a(223),options:b}),f[a(558)]=!0,null!==f._callOnViewable&&(f._callOnViewable(),f[a(545)]=null)},_disableEnable:function(a,b){var d=c;a===d(415)&&(f[d(325)]=b),"visibility"===a&&(f[d(505)]=b),a===d(633)&&(f._disableViewableCheck=b),a===d(175)&&(f[d(175)][d(416)]=b),"lazy"===a&&(f[d(326)].disabled=b),a===d(293)&&(!0===(f[d(293)][d(416)]=b)?window[d(389)](f[d(258)]):f.startRefreshTimer()),"adUnit"===a&&(f._status=d(b?416:204))},disable:function(a){f._disableEnable(a,!0)},enable:function(a){f[c(447)](a,!1)},getSlot:function(){var a=c;if(void 0!==f[a(328)][f[a(391)]])return f[a(328)][f[a(391)]];if(void 0!==b[a(567)][a(237)]&&b[a(567)][a(237)][a(183)]===a(254))return null;var d=f.getContainer();if(null===d&&!0!==b[a(401)])return f[a(248)]=a(562),_0x32e14f({id:a(443),options:b}),null;if(void 0===window.googletag.defineSlot)return null;_0x32e14f({id:a(596),options:b}),void 0===b[a(374)]&&(b.sizes=b[a(567)][a(356)][a(374)]);var e=b[a(374)];void 0!==b[a(619)]&&(e=e[a(536)](b.additionalSlotSizes)),e=e[a(430)](function(a){return 728!==a[0]||600!==a[1]});var g=null;return null===(g=!0===b[a(506)]||!0===b[a(401)]?window[a(610)][a(489)](b[a(663)],b.container):-1===adHandler[a(501)].indexOf(a(357))?(null!==d&&0===f[a(328)][a(474)]&&(d[a(495)]=a(519)+(b.container+"_o_0")+a(331)+b.container+"_0\"></div></div>\n                                <div id=\""+(b.container+a(576))+"\" style=\"display: none; opacity: 0; position: relative !important; top: 0\"><div id=\""+b[a(483)]+"_1"+a(184)),window.googletag[a(307)](b[a(663)],e,b[a(483)]+"_"+f[a(391)])):window.googletag[a(307)](b[a(663)],e,b[a(483)]))?null:(g[a(660)](window[a(610)][a(220)]()),f[a(328)][a(470)](g),g)},destroy:function(){var a=c;_0x32e14f({id:a(334),options:b}),f._refreshTimer&&window[a(389)](f[a(258)]),f._slots[a(474)]&&window[a(610)][a(197)](f._slots),f[a(328)]=[],f[a(391)]=0,f[a(458)]=0,f[a(248)]="wait",f[a(384)]=!1,f[a(605)]()},display:function(){var a=c;_0x32e14f({id:"Agdi",options:b});var d=f[a(520)]();d?window[a(610)][a(724)](d):_0x32e14f({id:a(478),options:b})},reset:function(){f._impressionViewable=!1,f[c(594)]=null},clear:function(){f._receivedBids=[]},getMediaTypes:function(){var a=c;return void 0!==b.mediaTypes.video||void 0!==b[a(567)][a(356)]?b[a(567)]:typeof b.sizes===a(628)?b[a(567)]:{banner:{sizes:b[a(374)]}}},getSizes:function(){var a=c;return typeof b.sizes===a(628)?b[a(567)][a(356)][a(374)]:b.sizes},onResponse:function(){var a=c;f._status=a(450),f[a(594)]=!0;try{if(!1!==f[a(384)]&&void 0!==f[a(384)][a(363)]&&"dspx"===f[a(384)].bid[a(234)]){var d=b[a(339)][a(430)](function(b){var c=a;return b[c(234)]===c(372)}),e=!1;0<d.length&&(e=d[0][a(586)][a(371)]),e===a(424)&&(_0x32e14f({id:a(439),options:{me:b[a(483)]}}),document[a(239)](a(589))[a(495)]="")}}catch(a){}},_processLabel:function(){var a=c,d=document.getElementById(b[a(483)]+"-label"),e=f[a(235)]();if(!1===f[a(397)]){if(e.removeAttribute(a(286)),!d)return;d[a(311)][a(724)]="none"}else{if(e[a(691)](a(286),""),!d)return;d[a(311)].display=a(345)}},onRender:function(a){var d=c;if(f._status=d(516),f[d(397)]=!0!==a[d(671)],f[d(206)](),!1===f[d(397)]){if(!1!==f.fallback){var e=_0x1d66d3[d(163)](f[d(710)]);return e.setFallbackCallee(_0x1d66d3[d(163)](b[d(483)])),f.getContainer()[d(495)]="<div id=\""+e[d(369)]+d(281),f[d(235)]().style[d(724)]=d(524),void(f[d(710)]=!1)}f[d(425)](100),_0x32e14f({id:"AoRE",options:b})}else if(-1===adHandler[d(501)].indexOf("seamless")&&window[d(726)](function(){var a=d,c=document[a(239)](b[a(483)]+a(394)),e=document[a(239)](b[a(483)]+"_o_1");1===f._slotVisibleIndex?(c[a(311)][a(724)]=a(497),c[a(311)][a(192)]="0",e[a(311)][a(724)]=a(345),e[a(311)][a(192)]="1",document[a(239)](b.container+"_0")[a(495)]=""):(c[a(311)][a(724)]=a(345),c.style.opacity="1",e[a(311)][a(724)]=a(497),e[a(311)][a(192)]="0",document[a(239)](b[a(483)]+"_1").innerHTML="")},400),_0x32e14f({id:d(448),options:b,size:a.size}),0===f[d(298)]&&f[d(214)](),f.calculateStickyEnd(),!0===f[d(175)][d(437)]&&(f[d(543)]=window.setInterval(f[d(411)],300)),!1!==adHandler[d(541)]){var g=_0x1d66d3[d(163)](b[d(483)]);adHandler[d(541)](g)}!1!==b[d(293)]&&f[d(549)]()},_calculateStickyStart:function(){var a=c;if(!1===f[a(175)].disabled){var b=f.getContainer();if(b){!0===f[a(175)][a(480)]&&f[a(648)]();var d=_0x6679c9[a(496)](b);f[a(175)].start=d.top,_0x32e14f({id:a(573),adUnit:f})}}},calculateStickyEnd:function(){var a=c;if(!0!==f[a(175)][a(416)]){var d=f[a(235)]();if(null!==d){var e=0;if(document[a(252)][a(380)](d[a(262)],"")[a(674)]("position")===a(521)&&(e=_0x6679c9[a(496)](d[a(262)])[a(294)]),null!==f.sticky.stopAtContainer){var g=f.sticky.stopAtContainer();null!==g&&typeof g!==a(628)?(f.sticky.stopTrigger=_0x6679c9.position(g).top-f[a(611)][a(445)][1]-f[a(175)][a(658)],f[a(175)].stop=f[a(175)][a(172)]-e):(_0x32e14f({id:"AdSA",options:b}),f[a(175)][a(319)]=null)}else"bottom"===f[a(175)][a(272)]||f[a(175)].location===a(294)?(f[a(216)](),f.sticky[a(416)]=!0):!0===f.sticky.stopAtEndOfContainer&&(f[a(175)][a(172)]=-f[a(611)].size[1],f[a(175)][a(172)]+=f[a(175)][a(673)]+parseInt(document[a(252)][a(380)](d[a(262)],"")[a(674)](a(417)))-f[a(175)][a(658)],f[a(175)][a(421)]=f[a(175)].stopTrigger-e);_0x1721cc.onScroll(),_0x1721cc.onScroll()}}},tryToRefresh:function(){var a=c;if(!1!==f[a(397)]){var d=function(){var c=a;!0===f[c(325)]?_0x1d66d3[c(377)](function(){_0x32e14f({id:c(607),options:b}),_0x1d66d3.requestAdUnitsForRefresh(f)}):_0x1d66d3[c(487)](function(){var a=c;_0x32e14f({id:a(607),options:b}),_0x1d66d3[a(662)](f)})},g=function(){var b=a;!0===f[b(505)]||!1===h.requireVisibility||50<=f[b(656)]?d():f[b(564)]=d},h=f[a(557)]();!1!==h&&(!0===f._disableViewableCheck||!1===h[a(623)]||!0===f[a(558)]?g():f[a(545)]=g)}else _0x1d66d3[a(377)](function(){_0x32e14f({id:"AoRTe",options:b}),_0x1d66d3[a(662)](f)})},startRefreshTimer:function(){var a=c;!0!==f[a(293)][a(416)]&&(_0x32e14f({id:a(676),options:b}),f[a(258)]&&window.clearTimeout(f[a(258)]),f[a(258)]=window[a(726)](function(){f[a(298)]++,f._requireRefresh=!0,f.tryToRefresh()},1e3*b[a(293)].every))},getResponseStatus:function(){return f._responseStatus},getRenderStatus:function(){return f[c(397)]},onReceivedBid:function(a){f._receivedBids.push(a)},_setSendAllBidsTargeting:function(a,b){var d=c;if(void 0!==a[d(469)][b]){var e=b+"_"+a[d(234)];e=e[d(270)](0,20),a[d(469)][e]=a[d(469)][b],delete a.targeting[b]}},_getWinners:function(b){var d=c,g=[],h=0,i=!1;return f[d(382)][d(423)](function(a){var b=d;a[b(316)]>h&&(h=a[b(316)],i=a)}),_0x3d0803[d(194)]&&!0===_0x3d0803[d(194)][d(492)]&&!0!==b?f._receivedBids[d(423)](function(a){var b=d;a[b(234)]===b(185)?g.push(a):(f._setSendAllBidsTargeting(a,b(370)),f[b(395)](a,"hb_adid"),f[b(395)](a,"hb_pb"),f[b(395)](a,b(572)),f[b(395)](a,"hb_source"),f[b(395)](a,b(376)),g[b(470)](a))}):(!1!==i&&g[d(470)](i),!0===b||f[d(382)].forEach(function(a){var b=d;a[b(234)]===b(185)&&g[b(470)](a)})),g},applyTargeting:function(){var a=c,d=f.getSlot();if(null!==d){d[a(697)](),_0x6679c9[a(423)](f[a(632)],function(a,b){d.setTargeting(b,a)}),f[a(293)][a(625)]&&0<f[a(298)]&&(null!==_0x546df2&&window[a(610)][a(220)]().clearTargeting(f.refresh[a(625)]),d[a(177)](a(569),f._refreshCount+"_"+adHandler.version),d[a(177)](f[a(293)][a(625)],f._refreshCount));var g=f[a(245)]();0===g.length?_0x32e14f({id:a(551),containerId:b.container}):_0x6679c9[a(423)](g,function(c){var f=a;_0x6679c9[f(423)](c[f(469)],function(a,b){d[f(177)](b,a)}),_0x32e14f({id:f(207),options:c[f(469)],containerId:b.container})})}},getBidders:function(){var a=c,d=[];return typeof b[a(339)]===a(628)?[]:(b[a(339)].forEach(function(b){var c=a;d[c(470)](b[c(234)])}),d=d[a(430)](function(b,c,d){return d[a(689)](b)===c}))},setVisibility:function(a){var d=c;f[d(656)]=a,null!==f._callOnVisibility&&50<=f[d(656)]&&(f[d(564)](),f._callOnVisibility=null),_0x32e14f({id:"gv",adUnit:_0x1d66d3.getAdUnit(b[d(483)]),percent:a})},getVisibility:function(){return f[c(656)]},getRefreshState:function(){var a=c;return!1!==b[a(293)]&&{resolveRequireRefresh:function(){var b=a;f[b(387)]=!1,-1===adHandler[b(501)].indexOf(b(357))&&(f._slotVisibleIndex=0===f[b(391)]?1:0)},requireRefresh:f[a(387)],requireVisibility:-1!==b.refresh.require.indexOf(a(593)),requireFocus:-1!==b[a(293)][a(547)][a(689)](a(415)),requireViewable:-1!==b[a(293)].require[a(689)](a(633))}},setSlotResponse:function(a){f[c(611)]=a},getContainer:function(){var a=c;return document[a(239)](b[a(483)])},applyStickiness:function(){var a=c;f[a(175)][a(604)]=!0,f[a(175)][a(480)]=!1;var d=_0x1d66d3.getAdUnit(b[a(483)]);adHandler[a(392)](d,"sticky");var g=f[a(235)]().style;!1===f[a(175)].prevStyles&&(f[a(175)][a(341)]={},_0x6679c9[a(423)](g,function(b){var c=a;f[c(175)][c(341)][b]=g[b]})),g[a(496)]=a(477),"bottom"===f[a(175)].location?g.bottom=f.sticky[a(658)]+"px":g[a(294)]=f.sticky[a(294)]+"px",g.zIndex=b[a(175)][a(544)]||a(639)},removeStickiness:function(){var a=c;if(!1!==f[a(175)][a(604)]){var d=_0x1d66d3[a(163)](b[a(483)]);adHandler[a(392)](d,a(657)),f[a(175)][a(604)]=!1;var g=f[a(235)]()[a(311)];g[a(496)]=null,g[a(294)]=null,!1!==f.sticky[a(341)]&&_0x6679c9[a(423)](f[a(175)][a(341)],function(a,b){g[b]=a})}},freezeContainerPosition:function(){var a=c;f.sticky[a(480)]=!0;var d=_0x1d66d3.getAdUnit(b[a(483)]);adHandler[a(392)](d,a(432));var e=f[a(235)]()[a(311)];e[a(496)]=a(521),e[a(294)]=f[a(175)][a(421)]+"px"},getBids:function(){return f[c(382)]},addBidError:function(a){var b=c;f[b(428)][b(470)](a)},getBidError:function(){return f[c(428)]},move:function(a,d){var g=c;f.getContainer().parentNode!==a&&(f[g(563)](),a.appendChild(f[g(235)]()),typeof d===g(667)&&_0x6679c9[g(423)](d,function(a,b){f[g(177)](b,a)}),_0x1d66d3[g(414)]([_0x1d66d3.getAdUnit(b[g(483)])]))},getTargetings:function(){return f[c(632)]},setTargeting:function(a,b){f[c(632)][a]=b},getRenderedBid:function(){return f[c(384)]},contains:function(a){var d=c,f=(b[d(483)]+"").toLowerCase();return(a=(a+"")[d(686)]())===b[d(663)][d(686)]()||a===f||a===f+"_0"||a===f+"_1"}};return f[c(560)](),{contains:f.contains,setTargeting:f.setTargeting,getTargetings:f.getTargetings,move:f[c(539)],setRenderedBid:f[c(486)],getRenderedBid:f[c(368)],addBidError:f[c(597)],getBidError:f[c(636)],display:f.display,getRefreshCount:function(){return f[c(298)]},setStatus:function(a){return f._status=a},getStatus:function(){return f[c(248)]},getSlotResponse:function(){return f[c(611)]},getSlotVisibleIndex:function(){return f[c(391)]},setSlotVisibleIndex:function(a){f[c(391)]=a},setFallbackCallee:function(a){f[c(359)]=a},getFallbackCallee:function(){return f[c(359)]},getBids:f[c(722)],getWinners:f[c(245)],freezeContainerPosition:f.freezeContainerPosition,removeStickiness:f[c(476)],applyStickiness:f.applyStickiness,setSlotResponse:f[c(162)],tryToRefresh:f[c(634)],onImpressionViewable:f[c(304)],disable:f[c(501)],enable:f[c(438)],getRefreshState:f[c(557)],setVisibility:f[c(425)],getVisibility:f[c(169)],getBidders:f[c(706)],destroy:f[c(563)],clear:f.clear,reset:f[c(275)],onResponse:f[c(249)],onRender:f[c(702)],getResponseStatus:f[c(276)],getRenderStatus:f[c(624)],getSlot:f.getSlot,getSizes:f[c(465)],containerId:b[c(483)],slotName:b.slotName,tags:typeof b[c(317)]===c(628)?[]:b.tags,additionalPrebidConfig:void 0===b[c(194)]?{}:b.prebid,bids:b[c(339)],sticky:f[c(175)],fallback:f[c(710)],lazy:f[c(326)],amazonEnabled:f[c(650)],getMediaTypes:f[c(182)],getContainer:f[c(235)],onReceivedBid:f[c(705)],applyTargeting:f.applyTargeting,calculateStickyEnd:f[c(411)],calculateStickyStart:f[c(214)],settings:b,refresh:f[c(293)]}},_0x5167d0=function(){var a=_0x15f20b;this[a(563)]=function(){this.forEach(function(a){a.destroy()})},this[a(501)]=function(a){this.forEach(function(b){b[_0xb64b(501)](a)})},this[a(438)]=function(b){this[a(423)](function(a){a.enable(b)})}};_0x5167d0[_0x15f20b(295)]=Array[_0x15f20b(295)];var Nk,Ck,Dk,Dh,Eh,_0x222cf5=function(){var b=_0x15f20b,g=100,h=!1,j=b(582),k="",a=b(255)[b(693)](" "),d="",e=document[b(203)](b(565));if(e[b(311)][b(582)]&&(h=!0),!1==h)for(var m=0;m<a[b(474)];m++)if(void 0!==e[b(311)][a[m]+b(490)]){d=a[m],j=d+b(490),k="-"+d[b(686)]()+"-",h=!0;break}return function(c,e){var f,l,m,p,q,s;return h&&c[b(491)](/[^{}]/)&&(f=c,l=e,q=(p=b)(651)+g++,s=function(a){var b=p;(a.animationName===q||a[j]===q)&&(l(a[b(426)]),document.head[b(271)](m),m=null,document[b(224)](b(646),s),document[b(224)](b(525),s),document[b(224)](b(238),s))},(m=document.createElement(p(311))).innerHTML="@"+k+p(269)+q+" {  from {  outline: 1px solid transparent  } to {  outline: 0px solid transparent }  }\n"+f+p(510)+q+"; "+k+p(353)+k+"animation-name: "+q+"; "+p(462),document[p(484)][p(278)](m),document[p(209)](p(646),s,!1),document.addEventListener(p(525),s,!1),void document[p(209)](p(238),s,!1))}}(),_0x1d66d3=(Dh=_0x15f20b,Eh={_mapping:{},_targetingMapping:{},_currentMapping:null,_currentMappingType:null,_amazonStatus:null,_prebidStatus:null,_status:"idle",_stack:[],_focus:!0,_focusStack:[],_visibilityStack:[],_requestedAdUnits:[],_refreshWaitTimer:0,_allowRequests:adHandler[Dh(621)],_missedContainerMonitored:!1,_init:function(){var a=Dh;_0x32e14f({id:"fi",options:{time:new Date,version:adHandler.version}}),window[a(209)](a(415),Eh[a(347)]),window[a(209)]("blur",Eh[a(456)])},_onFocus:function(){var a=Dh;Eh._focus=!0,Eh._focusStack.forEach(function(a){var b=_0xb64b;_0x3578f4[b(463)](b(570),b(187),"Add call to Focus stack"),Eh[b(377)](a)}),Eh[a(561)]=[]},_onBlur:function(){Eh[Dh(231)]=!1},addAdUnits:function(a){var b=Dh;_0x3578f4[b(463)]("Core",b(330),b(493)),_0x6679c9[b(423)](a,function(a,c){var d=b;c[d(693)]("|")[d(423)](function(b){void 0===Eh._mapping[b]&&(Eh[d(532)][b]=[]),a.forEach(function(a){var c=new _0x4608fc(a);Eh._mapping[b].push(c),_0x32e14f({id:"frAd",adUnit:c,mapping:b})})})})},addTargetings:function(a){var b=Dh;_0x6679c9[b(423)](a,function(c,a){var d=b;a[d(693)]("|")[d(423)](function(b){var f=d;typeof Eh[f(174)][b]===f(628)&&(Eh._targetingMapping[b]=[]),_0x6679c9.forEach(c,function(a,c){var d=f;Eh._targetingMapping[b][d(470)]({target:c,value:a}),_0x32e14f({id:d(548),targeting:c,value:a,mapping:b})})})})},getTargetingValueFromMapping:function(b,c){var d=Dh,f=!1;return Eh[d(174)][b][d(423)](function(a){var b=d;a[b(426)]===c&&(f=a[b(655)])}),f},getMappingIndex:function(){var b=Dh;if(!1!==adHandler[b(246)])return adHandler[b(246)];var c=_0x6679c9[b(670)](),d=[];return _0x6679c9[b(423)](Eh._mapping,function(a,e){e=e[b(693)]("_"),c>=parseInt(e[0])&&c<=parseInt(e[1])&&(d=e[0]+"_"+e[1])}),d},getAdUnitsForCurrentMapping:function(){var a=Dh;return null===Eh._currentMapping&&(Eh[a(266)]=Eh.getMappingIndex()),typeof Eh[a(532)][Eh[a(266)]]===a(628)?[]:Eh[a(532)][Eh[a(266)]]},getAdUnitsForRefresh:function(){var b=Dh,a=Eh.getAdUnitsForCurrentMapping(),c=[];return _0x6679c9[b(423)](a,function(a){var d=b,e=a[d(557)]();if(!1!==e&&!0===e.requireRefresh){var f=!0;e[d(290)]&&!1===Eh[d(231)]&&(f=!1),e[d(587)]&&50>a[d(169)]()&&(f=!1),f&&(c[d(470)](a),e[d(508)]())}}),c},getAdUnitsToFetch:function(){var b=Dh,a=Eh[b(515)](),c=[],d=_0x6679c9[b(408)](),f=window[b(669)]+d;return _0x6679c9.forEach(a,function(g){var a=b;if("wait"===g[a(472)]())if(!(typeof g[a(190)][a(326)]===a(667)))c[a(470)](g);else if(!1===g.lazy[a(416)]&&g[a(326)][a(653)]===a(204)){var h=g[a(235)]();if(null===h)return;var e=_0x6679c9[a(496)](h),j=e.top-g[a(326)].fetchMarginPercent*d;if(0>j||j<=f&&f<e[a(294)]){try{var k=h[a(219)](a(528));null!==k&&(g.settings.sizes=[],g.settings[a(619)]=[],k[a(693)](",")[a(423)](function(b){var c=a;if("fluid"===b)g[c(190)][c(619)][c(470)](c(540));else{var d=b[c(693)]("x")[0],e=b[c(693)]("x")[1];g[c(190)][c(619)][c(470)]([parseInt(d),parseInt(e)])}}),g[a(190)].mediaTypes={},g[a(190)][a(339)]=void 0,g[a(339)]=void 0)}catch(b){console[a(654)](a(683))}c[a(470)](g)}}}),c},getAdUnitsByTag:function(b){var c=Dh,d=Eh.getAdUnitsForCurrentMapping(),f=new _0x5167d0;return _0x6679c9[c(423)](d,function(a){var d=c;-1!==a[d(317)].indexOf(b)&&f[d(470)](a)}),f},getAdUnit:function(a){var b=Dh,c=Eh[b(515)](),d=null;return isNaN(a)&&(a=a[b(686)]()),_0x6679c9[b(423)](c,function(c){c[b(181)](a)&&(d=c)}),d},addToStack:function(a){var b=Dh;"idle"===Eh[b(248)]?a():(_0x32e14f({id:b(694)}),Eh._stack[b(470)](a))},addToFocusStack:function(a){var b=Dh;!0===Eh[b(231)]?Eh.addToStack(a):(_0x32e14f({id:b(212)}),Eh._focusStack[b(470)](a))},_monitorMissedContainer:function(){var a=Dh;Eh[a(685)]||(Eh[a(685)]=!0,Eh.getAdUnitsForCurrentMapping()[a(423)](function(b){var c=a;null===b[c(235)]()&&(_0x3578f4[c(463)](b[c(663)],"Framework.monitorMissedContainer","Register watcher"),_0x222cf5("#"+b[c(369)],function(){var a=c;0!==Eh[a(507)]().length&&(b.getStatus()===a(204)?(_0x3578f4[a(463)](b[a(663)],a(379),"Container available! Request now"),Eh._refreshWaitTimer&&window[a(389)](Eh[a(390)]),Eh[a(390)]=window[a(726)](function(){Eh[a(659)]()},20)):b[a(472)]()===a(562)&&(_0x3578f4.tagLog(b[a(663)],a(379),a(199)),Eh.callAdManager([b])))}))}))},isFirstRequest:!0,request:function(){var a=Dh;_0x34370e[a(533)](function(){var b=a;if(_0x3578f4[b(463)](b(173),"Framework.request",b(333)),!1===_0x34370e[b(205)](b(635))&&!0===adHandler[b(503)])return!1;Eh[b(642)]=!0,Eh[b(266)]=Eh[b(186)]();var c=Eh[b(507)]();if(!0===adHandler.enableGptFirst&&Eh[b(692)]){Eh[b(692)]=!1;var d=c[b(430)](function(a){return void 0===a[b(339)]});d.length!==c.length&&Eh[b(377)](function(){Eh[b(659)]()}),0<d[b(474)]&&(c=d)}return(Eh[b(280)](),0===c[b(474)])?(_0x3578f4.tagLog("Request","Framework.request","No AdUnits to fetch, return"),_0x32e14f({id:b(188)})):void(_0x32e14f({id:b(300),mapping:Eh[b(266)],adUnits:c}),Eh[b(414)](c))})},requestAdUnitsForRefresh:function(a){var b=Dh;Eh[b(390)]&&window.clearTimeout(Eh[b(390)]),Eh[b(390)]=window[b(726)](function(){var c=b,d=_0x1d66d3.getAdUnitsForRefresh();return 0===d[c(474)]&&!0===a[c(387)]?a[c(634)]():void Eh.requestAdUnits(d)},150)},requestAdUnits:function(a){var b=Dh;_0x34370e[b(533)](function(){var c=b;if(0===a[c(474)])return _0x32e14f({id:c(188)});if(Eh._status===c(504)){var d=[];_0x6679c9[c(423)](a,function(a){var b=c;a[b(472)]()!==b(354)&&(a.setStatus(b(354)),a[b(605)](),d.push(a))}),d[c(474)]&&(Eh[c(427)]=d,Eh[c(248)]=c(354),_0x3578f4[c(463)](c(173),"Framework.requestAdUnits",c(196)),Eh[c(488)](d))}else Eh.addToStack(function(){Eh.requestAdUnits(a)})})},_startAuction:function(a){var b=Dh;_0x3578f4[b(463)]("Request","Framework._startAuction",b(309)),_0x32e14f({id:"fr",options:a,mapping:Eh._currentMapping,time:new Date}),null===_0x110d27?Eh[b(701)](_0x110d27):(Eh[b(627)]=!1,requestAnimationFrame(function(){_0x110d27[b(659)](a)})),null===_0x26bf77?Eh.auctionDone(_0x26bf77):(Eh[b(535)]=!1,_0x26bf77[b(659)](a)),null===_0x26bf77&&null===_0x110d27&&Eh[b(701)](null)},auctionDone:function(a){var b=Dh;a===_0x26bf77&&(Eh._prebidStatus=!0),a===_0x110d27&&(Eh[b(627)]=!0);var c=null;Eh[b(535)]&&Eh[b(627)]&&(Eh[b(248)]===b(354)?(_0x32e14f({id:b(712)}),0===Eh[b(427)][b(474)]?c=Eh[b(515)]():(c=Eh._requestedAdUnits,Eh._requestedAdUnits=[]),null===_0x546df2?_0x32e14f({id:"na"}):Eh[b(577)](c)):Eh[b(248)]===b(563)&&_0x32e14f({id:b(210)}),Eh[b(275)](c))},_relations:[],applyFireplaceLogic:function(b){var c=Dh;if(0===adHandler[c(232)][c(474)])return b;var a=!1,d=!1;if(adHandler.refreshRelation[c(423)](function(b){var f=c,g=adHandler[f(590)][f(163)](b);g&&g[f(722)]().forEach(function(b){var c=f;728===b[c(617)]&&600===b[c(417)]&&(a=b,d=g)})}),!1===a)return b;adHandler[c(232)].forEach(function(b){var e=c,f=adHandler[e(590)].getAdUnit(b);f&&f!==d&&f[e(705)](a)}),_0x32e14f({id:c(441),found:a});var f=b.filter(function(a){var b=c;return-1===adHandler[b(232)].indexOf(a[b(369)])}),g=b[c(430)](function(a){return-1!==adHandler[c(232)].indexOf(a.containerId)});return Eh._relations=Eh[c(716)][c(536)](g).filter(function(a,b,d){return d[c(689)](a)===b}),adHandler[c(232)][c(474)]===Eh._relations[c(474)]?(_0x32e14f({id:"firA",adUnits:Eh[c(716)]}),b=f[c(536)](Eh[c(716)]),Eh[c(716)]=[]):b=f,b},callAdManager:function(a){var b=Dh;a=Eh[b(720)](a),_0x3578f4[b(463)](b(386),"Framework.auctionDone","Requesting GPT"),window.googletag[b(542)][b(470)](function(){var c=b;_0x6679c9[c(423)](a,function(a){a[c(580)]()}),void 0!==Eh._targetingMapping[Eh[c(186)]()]&&Eh[c(174)][Eh[c(186)]()][c(423)](function(a){var b=c;window[b(610)][b(220)]().setTargeting(a[b(426)],a.value)});try{adHandler.callbacks[c(263)].forEach(function(a){a()}),typeof adHandler[c(279)][c(263)]===c(442)&&adHandler[c(279)][c(263)]()}catch(a){console[c(654)](a)}_0x546df2[c(293)](a)})},reset:function(a){var b=Dh;_0x3578f4[b(463)]("GPT",b(717),b(698)),_0x3578f4[b(463)](b(173),b(717),b(256)),_0x3578f4[b(463)](b(570),b(717),"Circle completed!"),_0x32e14f({id:"fre",time:+new Date}),Eh[b(627)]=null,(Eh._prebidStatus=null)===a&&(a=Eh.getAdUnitsForCurrentMapping()),typeof a!==b(628)&&_0x6679c9.forEach(a,function(a){a.reset()}),null!==_0x26bf77&&_0x26bf77.reset(),Eh[b(248)]="idle",Eh._stack.length&&(_0x32e14f({id:b(170)}),Eh[b(310)][b(502)]()())},loadMapping:function(a){var b=Dh;Eh[b(404)]===a?_0x32e14f({id:"im",type:a}):(Eh[b(532)][Eh[b(266)]]=[],Eh[b(404)]=a,window[b(236)][b(305)+a]())},destroyPageType:function(){var a=Dh;Eh.destroy(),Eh[a(532)]={},Eh[a(266)]=null,Eh[a(404)]=null},destroy:function(a){var b=Dh;_0x32e14f({id:b(482)}),Eh[b(377)](function(){var c=b;Eh[c(248)]=c(563),"function"==typeof window[c(213)]&&window[c(213)](),_0x6679c9[c(423)](Eh[c(515)](),function(a){a[c(563)]()}),Eh[c(275)](),void 0!==a&&!0===a&&(Eh[c(532)][Eh[c(266)]]=[],Eh[c(266)]=null,Eh[c(404)]=null)})},onBidderTimeout:function(a){_0x32e14f({id:Dh(700),bidder:a})},onBidInvalid:function(a,b){var c=Dh;Eh[c(163)](b.adUnitCode)[c(597)](b),_0x32e14f({id:c(718),bid:b})}},Eh._init(),{allowRequests:function(){return Eh._allowRequests},getMappingIndex:function(){return Eh[Dh(266)]},getAdUnitsToFetch:Eh.getAdUnitsToFetch,requestAdUnitsForRefresh:Eh[Dh(662)],addToFocusStack:Eh[Dh(487)],addToStack:Eh[Dh(377)],auctionDone:Eh[Dh(701)],addAdUnits:Eh[Dh(202)],addTargetings:Eh[Dh(218)],getTargetingValueFromMapping:Eh[Dh(467)],getAdUnitsForRefresh:Eh[Dh(297)],getAdUnitsForCurrentMapping:Eh[Dh(515)],getAdUnitsByTag:Eh[Dh(241)],getAdUnit:Eh.getAdUnit,requestAdUnits:Eh[Dh(414)],request:Eh[Dh(659)],destroy:Eh[Dh(563)],destroyPageType:Eh[Dh(167)],loadMapping:Eh[Dh(346)],reset:Eh[Dh(275)],onBidInvalid:Eh[Dh(449)],onBidderTimeout:Eh[Dh(546)],callAdManager:Eh[Dh(577)]}),_0x1721cc=(Ck=_0x15f20b,Dk={_oldPos:0,_init:function(){var a=_0xb64b;window.addEventListener(a(575),Dk._onScroll)},_onScroll:function(){var b=_0xb64b,c=_0x1d66d3[b(515)]();if(0!==c[b(474)]){var d=window[b(669)];b(378),Dk[b(409)]>d&&"up",Dk[b(409)]=d,_0x6679c9.forEach(c,function(a){var c=b,e=d+a[c(175)][c(294)];!1!==a[c(175)]&&null!==a[c(175)][c(673)]&&!0!==a[c(175)][c(416)]&&(!1===a[c(175)][c(416)]&&!1===a[c(175)].isSticky?e>=a[c(175)].start&&a[c(216)]():a[c(175)].stopped?0!==a[c(175)][c(172)]&&e<=a.sticky[c(172)]&&a[c(216)]():a.sticky[c(604)]&&(e<=a[c(175)][c(673)]&&a.removeStickiness(),0!==a.sticky[c(172)]&&!1===a[c(175)][c(480)]&&e>=a[c(175)][c(172)]&&a[c(648)]()))})}}},Dk[Ck(560)](),{onScroll:Dk[Ck(365)]}),_0x37c4ca=(Nk={_init:function(){var a=_0xb64b;window[a(209)](a(575),Nk[a(365)],{passive:!0})},_onScroll:function(){var a=_0xb64b;if(!1!==_0x1d66d3[a(225)]()){var b=_0x1d66d3[a(507)]();0!==b[a(474)]&&(_0x3578f4[a(463)](a(173),a(466),a(550)),_0x1d66d3[a(414)](b),_0x32e14f({id:"la",adUnits:b}))}}},Nk[_0x15f20b(560)](),{onScroll:Nk._onScroll});return{setTargeting:function(a,b){null!==_0x546df2&&_0x546df2[_0x15f20b(177)](a,b)},debug:_0x3e01cd[_0x15f20b(438)],debugTargeting:_0x3e01cd[_0x15f20b(350)],debugDisable:_0x3e01cd[_0x15f20b(501)],consent:_0x34370e,getMappingIndex:_0x1d66d3[_0x15f20b(186)],loadMapping:_0x1d66d3.loadMapping,addToStack:_0x1d66d3[_0x15f20b(377)],request:_0x1d66d3[_0x15f20b(659)],addAdUnits:_0x1d66d3[_0x15f20b(202)],addTargetings:_0x1d66d3[_0x15f20b(218)],getTargetingValueFromMapping:_0x1d66d3.getTargetingValueFromMapping,destroy:_0x1d66d3[_0x15f20b(563)],destroyPageType:_0x1d66d3[_0x15f20b(167)],addConsentCallback:_0x34370e[_0x15f20b(533)],getAdUnit:_0x1d66d3.getAdUnit,getAdUnitsByTag:_0x1d66d3[_0x15f20b(241)],getAdUnitsForCurrentMapping:_0x1d66d3[_0x15f20b(515)],cmd:_0x3e01cd[_0x15f20b(542)],settings:_0x3d0803,onBidInvalid:_0x1d66d3[_0x15f20b(449)],onBidderTimeout:_0x1d66d3[_0x15f20b(546)],speed:_0x3578f4,getScope:function(){return window}}};
adHandler.disable = adHandler.disable || [];adHandler.disable.push('seamless');
            adHandler.service = new adHandler.application({
    "timeout": 1500,
    "debug": {
        "enabled": false,
        "debugScript": "//showroom.click-performance.com/framework/debug_sidebar2.js"
    },
    "control": {
        "sandbox": adHandler.sandbox,
        "waitForConsentEvent": adHandler.waitForConsentEvent
    },
    "ownAuction": [],
    "consentManagement": {
        "prebid": {
            "gdpr": {
                "cmpApi": "iab"
            }
        }
    },
    "gpt": {
        "pubId": "16486012",
        "targeting": {
            "fw": function(){ return adHandler.version; },
            "Refresh": "0",
            "URL": window.location.pathname.substr(0, 40),
            "Subdomain": window.location.host.split('.')[0],
            "Landingpage": window.location.origin + window.location.pathname,
            "sp_day": function () {
    var d = new Date();
    var weekday = [];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[d.getUTCDay()];
},
            "sp_case": function () {
    var rnd = Math.random();
    if (rnd < .80) return "X";
    if (rnd >= .80 && rnd < .82) return "A";
    if (rnd >= .82 && rnd < .84) return "B";
    if (rnd >= .84 && rnd < .86) return "C";
    if (rnd >= .86 && rnd < .88) return "D";
    if (rnd >= .88 && rnd < .90) return "E";
    if (rnd >= .90 && rnd < .92) return "F";
    if (rnd >= .92 && rnd < .94) return "G";
    if (rnd >= .94 && rnd < .96) return "H";
    if (rnd >= .96 && rnd < .98) return "I";
    if (rnd >= .98) return "J";
},
            "mapping": function () {
    return adHandler.service.getMappingIndex();
},
            "req_id": function() {
    return 'ROS_' + adHandler.service.getMappingIndex();
},
            "FW_Prebid_Timeout": function() {
    return 'timeout_' + adHandler.service.settings.timeout;
}
        }
    },
    "prebid": {
        "sendAllBids": true,
        "priceGranularity": "high",
        "currency": "EUR",
        "userSync": {
            "syncDelay": 5000,
            "filterSettings": {
                "all": {
                    "bidders": "*",
                    "filter": "include"
                }
            }
        }
    },
    "amazon": {
        "pubID": "3998"
    }
});        
        
adHandler.service.addAdUnits({
	'315_767': [
    {
        "bids": [
            {
                "bidder": "adf",
                "params": {
                    "mid": 1694920
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumfullbanner_pure"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumfullbanner_pure"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "5176861"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2871504
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1826398,
                    "formatId": 122986
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "7d04c368-94dd-4e7b-8675-6e88311ea09e"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 171573,
                    "placementId": 186472
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumfullbanner_desktop"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "930317"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "15462850"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544751"
                }
            },
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 30043095
                }
            }
        ],
        "tags": [
            "group2",
            "autorefresh",
            "banner"
        ],
        "container": "wetter_premiumfullbanner_pure",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "amazon": true,
        "sizes": [
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "adf",
                "params": {
                    "mid": 1688551
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumstickybanner_top"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumstickybanner_top"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "5166450"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2868792
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1823277,
                    "formatId": 122858
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "c3a080e8-17a6-4806-81cd-37b6e890df37"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 171552,
                    "placementId": 186449
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumstickybanner_top"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "930163"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "15455532"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544751"
                }
            },
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 29935586
                }
            }
        ],
        "tags": [
            "group4",
            "autorefresh",
            "banner"
        ],
        "container": "wetter_premiumstickybanner_top",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "amazon": true,
        "sizes": [
            [
                320,
                50
            ],
            [
                300,
                50
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 24813621
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumstickybanner"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4420622"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2379248
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1563119,
                    "formatId": 111691
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumstickybanner"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13832613"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153748,
                    "placementId": 168088
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "ac142d3e-0a71-4799-8105-88a03baad1e0"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumstickybanner"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1688550
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "930162"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544751"
                }
            }
        ],
        "tags": [
            "group3",
            "autorefresh",
            "banner"
        ],
        "container": "wetter_premiumstickybanner",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "amazon": true,
        "sizes": [
            [
                320,
                50
            ],
            [
                300,
                50
            ]
        ]
    },
    {
        "tags": [
            "group1",
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumfullbanner_default",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumfullbanner_default_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "adf",
                "params": {
                    "mid": 1694515
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumfullbanner_default"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumfullbanner_default"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "5176860"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2871502
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1826397,
                    "formatId": 122985
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "0efa619d-7e5a-4513-b2a8-34c66aa85057"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 171574,
                    "placementId": 186473
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumfullbanner_mobile"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "930316"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "15462848"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544751"
                }
            },
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 30036907
                }
            }
        ],
        "tags": [
            "group1",
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_premiumfullbanner_default_fb",
        "slotName": "/16486012/wetter_premiumfullbanner_default",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "tags": [
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumfullbanner",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumfullbanner_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 23217968
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumfullbanner"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351972"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2212956
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1528565,
                    "formatId": 108699
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "2d43f7b9-9231-4c0c-af57-93695596a39b"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 143857,
                    "placementId": 157726
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumfullbanner"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13537941"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544751"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926671"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumfullbanner_fb"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1624453
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_premiumfullbanner_fb",
        "slotName": "/16486012/wetter_premiumfullbanner",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "tags": [
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumrectangle",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumrectangle_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 23217970
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumrectangle"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351973"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2212974
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1528566,
                    "formatId": 108702
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "a139a101-0fa0-4ea0-9f75-4237c0a5741c"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 143856,
                    "placementId": 157725
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumrectangle"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13537943"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544758"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumrectangle_fb"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1624454
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_premiumrectangle_fb",
        "slotName": "/16486012/wetter_premiumrectangle",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18783150
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle1"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351975"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626868,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200261,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle1_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227479"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153734,
                    "placementId": 168073
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "140c8919-7c0f-4f74-b95b-c53c6c65f041"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926673"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle1"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1624455
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle1",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807785
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle2"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351976"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626870,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200262,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle2_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227487"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153735,
                    "placementId": 168074
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "78c05e56-6340-41c5-b44e-8f0b10c384bf"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926674"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle2"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1624456
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle2",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5.5
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807787
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle3"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351977"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626872,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200263,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle3_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227495"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153736,
                    "placementId": 168075
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "25bf64f8-68e8-4e4d-b01c-6d0bd0e27de4"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926675"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle3"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1624459
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle3",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5.5
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "dspx",
                "params": {
                    "placement": "1242",
                    "format": "scroller"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153781,
                    "placementId": 168122
                }
            },
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 24326534,
                    "video": {
                        "language": "de",
                        "skippable": true,
                        "playback_method": [
                            "auto_play_sound_off"
                        ]
                    }
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4352056",
                    "outstreamAU": "wetter_outstream",
                    "video": {
                        "mimes": [
                            "video/mp4"
                        ]
                    }
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "a2f6a547-e46f-4724-ba13-bac9a7a5e6f8"
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_web_outstream"
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1650740,
                    "formatId": 113374
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "14328905"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926679"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1624460
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_outstream"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_web_outstream"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2739718
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "incontent"
        ],
        "container": "wetter_web_outstream",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3
        },
        "amazon": true,
        "mediaTypes": {
            "video": {
                "playerSize": [
                    640,
                    480
                ],
                "context": "outstream",
                "mimes": [
                    "video/mp4",
                    "video/x-ms-wmv"
                ],
                "playbackmethod": [
                    4,
                    5
                ],
                "placement": 3,
                "skip": 1,
                "protocols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                ],
                "maxduration": 20,
                "linearity": 1,
                "api": [
                    1,
                    2
                ],
                "renderer": {
                    "url": "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",
                    "render": function(bid) {ANOutstreamVideo.renderAd({targetId: 'wetter_web_outstream',adResponse: bid.adResponse});},
                    "backupOnly": true
                }
            },
            "banner": {
                "sizes": [
                    [
                        1,
                        1
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        336,
                        280
                    ],
                    [
                        320,
                        180
                    ]
                ]
            }
        },
        "additionalSlotSizes": [
            "fluid"
        ]
    }
]});adHandler.service.addAdUnits({
	'768_1349': [
    {
        "tags": [
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumfullbanner",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumfullbanner_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                728,
                90
            ],
            [
                800,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 23217968
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumfullbanner"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351972"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2212956
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1528565,
                    "formatId": 108699
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "2d43f7b9-9231-4c0c-af57-93695596a39b"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 143857,
                    "placementId": 157726
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumfullbanner"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13537940"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544685"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926671"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumfullbanner_fb"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588470
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_premiumfullbanner_fb",
        "slotName": "/16486012/wetter_premiumfullbanner",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "tags": [
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumrectangle",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumrectangle_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 23217970
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumrectangle"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351973"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2212974
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1528566,
                    "formatId": 108702
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "a139a101-0fa0-4ea0-9f75-4237c0a5741c"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 143856,
                    "placementId": 157725
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumrectangle"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13537942"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544696"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926662"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumrectangle_fb"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588471
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_premiumrectangle_fb",
        "slotName": "/16486012/wetter_premiumrectangle",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18783150
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle1"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351975"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626868,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200261,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle1_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227477"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153734,
                    "placementId": 168073
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "140c8919-7c0f-4f74-b95b-c53c6c65f041"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926673"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle1"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588474
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle1",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807785
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle2"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351976"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626870,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200262,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle2_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227485"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153735,
                    "placementId": 168074
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "78c05e56-6340-41c5-b44e-8f0b10c384bf"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926674"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle2"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588476
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle2",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807787
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle3"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351977"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626872,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200263,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle3_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227493"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153736,
                    "placementId": 168075
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "25bf64f8-68e8-4e4d-b01c-6d0bd0e27de4"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926675"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle3"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1589066
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle3",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3.5
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807799
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancefullbanner1"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351978"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626874,
                    "sizes": [
                        2,
                        125
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200264,
                    "formatId": 88777
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancefullbanner1_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227502"
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "3a94d1f6-ab77-4090-aa6c-34327f039012"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926676"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancefullbanner1"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588478
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_vorhersage_performancefullbanner1",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807803
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancefullbanner2"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351979"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626876,
                    "sizes": [
                        2,
                        125
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200265,
                    "formatId": 88777
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancefullbanner2_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227505"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153730,
                    "placementId": 168069
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "f7655608-b47b-4bf0-bbea-bc26f84c52c4"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926677"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancefullbanner2"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588479
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_vorhersage_performancefullbanner2",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5.5
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807808
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancefullbanner3"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351980"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626878,
                    "sizes": [
                        2,
                        125
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200266,
                    "formatId": 88777
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancefullbanner3_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227508"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153731,
                    "placementId": 168070
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "78de2cd6-018b-4615-bb24-d154d01036b2"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926678"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancefullbanner3"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588480
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_vorhersage_performancefullbanner3",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5.5
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "dspx",
                "params": {
                    "placement": "1242",
                    "format": "scroller"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 144208,
                    "placementId": 158080
                }
            },
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 24326525,
                    "video": {
                        "language": "de",
                        "skippable": true,
                        "playback_method": [
                            "auto_play_sound_off"
                        ]
                    }
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4352056",
                    "outstreamAU": "wetter_outstream",
                    "video": {
                        "mimes": [
                            "video/mp4"
                        ]
                    }
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "5f0a31c4-345a-45d4-b7de-87b9cbf7d374"
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_web_outstream"
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1650740,
                    "formatId": 113374
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "14328908"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926670"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1594523
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_outstream"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_web_outstream"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2739718
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_web_outstream",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3
        },
        "amazon": true,
        "mediaTypes": {
            "video": {
                "playerSize": [
                    640,
                    480
                ],
                "context": "outstream",
                "mimes": [
                    "video/mp4",
                    "video/x-ms-wmv"
                ],
                "playbackmethod": [
                    4,
                    5
                ],
                "placement": 3,
                "skip": 1,
                "protocols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                ],
                "maxduration": 20,
                "linearity": 1,
                "api": [
                    1,
                    2
                ],
                "renderer": {
                    "url": "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",
                    "render": function(bid) {ANOutstreamVideo.renderAd({targetId: 'wetter_web_outstream',adResponse: bid.adResponse});},
                    "backupOnly": true
                }
            },
            "banner": {
                "sizes": [
                    [
                        400,
                        300
                    ],
                    [
                        640,
                        480
                    ],
                    [
                        1,
                        1
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        336,
                        280
                    ],
                    [
                        700,
                        300
                    ],
                    [
                        700,
                        390
                    ],
                    [
                        320,
                        180
                    ],
                    [
                        640,
                        360
                    ],
                    [
                        640,
                        340
                    ]
                ]
            }
        },
        "additionalSlotSizes": [
            "fluid"
        ]
    }
]});adHandler.service.addAdUnits({
	'1350_1539': [
    {
        "tags": [
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumfullbanner",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumfullbanner_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                728,
                90
            ],
            [
                800,
                250
            ],
            [
                970,
                90
            ],
            [
                970,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 23217968
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumfullbanner"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351972"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2212956
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1528565,
                    "formatId": 108699
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "401507f5-a931-459d-9e2f-91ebfb0de89b"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153723,
                    "placementId": 168062
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumfullbanner"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13537940"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544685"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926661"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumfullbanner_fb"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588470
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_premiumfullbanner_fb",
        "slotName": "/16486012/wetter_premiumfullbanner",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ],
            [
                970,
                90
            ],
            [
                970,
                250
            ],
            [
                728,
                600
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "tags": [
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumrectangle",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumrectangle_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 23217970
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumrectangle"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351973"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2212974
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1528566,
                    "formatId": 108702
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "80bdc20d-9305-470f-bd39-ed5a5178e34d"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153724,
                    "placementId": 168063
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumrectangle"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13537942"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544696"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926662"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumrectangle_fb"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588471
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_premiumrectangle_fb",
        "slotName": "/16486012/wetter_premiumrectangle",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "tags": [
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumsitebar",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumsitebar_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                160,
                600
            ],
            [
                200,
                600
            ],
            [
                120,
                600
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 23217988
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumsitebar"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351974"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2212976
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1528579,
                    "formatId": 108704
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "2dc84f72-756a-460e-87b3-dd4f9c0f88a4"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153725,
                    "placementId": 168064
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumsitebar"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13537944"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544724"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926663"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumsitebar_fb"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588472
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_premiumsitebar_fb",
        "slotName": "/16486012/wetter_premiumsitebar",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                160,
                600
            ],
            [
                200,
                600
            ],
            [
                120,
                600
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18783150
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle1"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351975"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626868,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200261,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle1_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227477"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153726,
                    "placementId": 168065
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "9295fb91-ca2a-434b-a908-7320f67f6175"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926664"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle1"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588474
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle1",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807785
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle2"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351976"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626870,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200262,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle2_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227485"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153727,
                    "placementId": 168066
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "5c67b80c-8858-4350-9270-c40bb26ca0b6"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926665"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle2"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588476
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle2",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807787
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle3"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351977"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626872,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200263,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle3_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227493"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 143858,
                    "placementId": 168067
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "a150ca08-9a65-457d-bb65-157b83d73255"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926666"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle3"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1589066
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle3",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 4
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807799
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancefullbanner1"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351978"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626874,
                    "sizes": [
                        2,
                        125
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200264,
                    "formatId": 88777
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancefullbanner1_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227502"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153729,
                    "placementId": 168068
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "880cfbbf-e10d-481a-bf11-2000e81d1b88"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926667"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancefullbanner1"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588478
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_vorhersage_performancefullbanner1",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ],
            [
                970,
                90
            ],
            [
                970,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807803
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancefullbanner2"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351979"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626876,
                    "sizes": [
                        2,
                        125
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200265,
                    "formatId": 88777
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancefullbanner2_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227505"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153730,
                    "placementId": 168069
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "41c8191c-bc20-4a4f-8bd7-d0ed56ff0841"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926668"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancefullbanner2"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588479
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_vorhersage_performancefullbanner2",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5.5
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ],
            [
                970,
                90
            ],
            [
                970,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807808
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancefullbanner3"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351980"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626878,
                    "sizes": [
                        2,
                        125
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200266,
                    "formatId": 88777
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancefullbanner3_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227508"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153731,
                    "placementId": 168070
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "30ad153d-a6e1-4e77-b65e-7098a9b32c0d"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926669"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancefullbanner3"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588480
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_vorhersage_performancefullbanner3",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5.5
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ],
            [
                970,
                90
            ],
            [
                970,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "dspx",
                "params": {
                    "placement": "1242",
                    "format": "scroller"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 144208,
                    "placementId": 158080
                }
            },
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 24326525,
                    "video": {
                        "language": "de",
                        "skippable": true,
                        "playback_method": [
                            "auto_play_sound_off"
                        ]
                    }
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4352056",
                    "outstreamAU": "wetter_outstream",
                    "video": {
                        "mimes": [
                            "video/mp4"
                        ]
                    }
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "5f0a31c4-345a-45d4-b7de-87b9cbf7d374"
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_web_outstream"
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1650740,
                    "formatId": 113374
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "14328908"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926670"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1594523
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_outstream"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_web_outstream"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2739718
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_web_outstream",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3
        },
        "amazon": true,
        "mediaTypes": {
            "video": {
                "playerSize": [
                    640,
                    480
                ],
                "context": "outstream",
                "mimes": [
                    "video/mp4",
                    "video/x-ms-wmv"
                ],
                "playbackmethod": [
                    4,
                    5
                ],
                "placement": 3,
                "skip": 1,
                "protocols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                ],
                "maxduration": 20,
                "linearity": 1,
                "api": [
                    1,
                    2
                ],
                "renderer": {
                    "url": "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",
                    "render": function(bid) {ANOutstreamVideo.renderAd({targetId: 'wetter_web_outstream',adResponse: bid.adResponse});},
                    "backupOnly": true
                }
            },
            "banner": {
                "sizes": [
                    [
                        400,
                        300
                    ],
                    [
                        640,
                        480
                    ],
                    [
                        1,
                        1
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        336,
                        280
                    ],
                    [
                        700,
                        300
                    ],
                    [
                        700,
                        390
                    ],
                    [
                        640,
                        360
                    ],
                    [
                        640,
                        340
                    ]
                ]
            }
        },
        "additionalSlotSizes": [
            "fluid"
        ]
    }
]});adHandler.service.addAdUnits({
	'1540_10000': [
    {
        "tags": [
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumfullbanner",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumfullbanner_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                728,
                90
            ],
            [
                800,
                250
            ],
            [
                970,
                90
            ],
            [
                970,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 23217968
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumfullbanner"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351972"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2212956
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1528565,
                    "formatId": 108699
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "401507f5-a931-459d-9e2f-91ebfb0de89b"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153723,
                    "placementId": 168062
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumfullbanner"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13537940"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544685"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926661"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumfullbanner_fb"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588470
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_premiumfullbanner_fb",
        "slotName": "/16486012/wetter_premiumfullbanner",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ],
            [
                970,
                90
            ],
            [
                970,
                250
            ],
            [
                728,
                600
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "tags": [
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumrectangle",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumrectangle_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 23217970
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumrectangle"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351973"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2212974
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1528566,
                    "formatId": 108702
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "80bdc20d-9305-470f-bd39-ed5a5178e34d"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153724,
                    "placementId": 168063
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumrectangle"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13537942"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544696"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926662"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumrectangle_fb"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588471
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_premiumrectangle_fb",
        "slotName": "/16486012/wetter_premiumrectangle",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "tags": [
            "autorefresh",
            "incontent"
        ],
        "container": "wetter_premiumsitebar",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "fallback": "wetter_premiumsitebar_fb",
        "amazon": false,
        "sizes": [],
        "additionalSlotSizes": [
            [
                1,
                1
            ],
            [
                160,
                600
            ],
            [
                300,
                600
            ],
            [
                200,
                600
            ],
            [
                120,
                600
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 23217988
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_premiumsitebar"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351974"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2212976
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1528579,
                    "formatId": 108704
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "2dc84f72-756a-460e-87b3-dd4f9c0f88a4"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153725,
                    "placementId": 168064
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_premiumsitebar"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "13537944"
                }
            },
            {
                "bidder": "somyieldlab",
                "params": {
                    "supplyId": "5710",
                    "adslotId": "12544724"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926663"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_premiumsitebar_fb"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588472
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_premiumsitebar_fb",
        "slotName": "/16486012/wetter_premiumsitebar",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 100
        },
        "amazon": true,
        "sizes": [
            [
                160,
                600
            ],
            [
                300,
                600
            ],
            [
                200,
                600
            ],
            [
                120,
                600
            ]
        ],
        "additionalSlotSizes": [
            [
                1,
                1
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18783150
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle1"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351975"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626868,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200261,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle1_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227477"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153726,
                    "placementId": 168065
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "9295fb91-ca2a-434b-a908-7320f67f6175"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926664"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle1"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588474
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle1",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807785
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle2"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351976"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626870,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200262,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle2_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227485"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153727,
                    "placementId": 168066
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "5c67b80c-8858-4350-9270-c40bb26ca0b6"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926665"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle2"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588476
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle2",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807787
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancerectangle3"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351977"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626872,
                    "sizes": [
                        44,
                        82,
                        19,
                        15,
                        43,
                        117,
                        60,
                        10,
                        67
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200263,
                    "formatId": 88776
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancerectangle3_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227493"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 143858,
                    "placementId": 168067
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "a150ca08-9a65-457d-bb65-157b83d73255"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926666"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancerectangle3"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1589066
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "sidebar"
        ],
        "container": "wetter_vorhersage_performancerectangle3",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 4
        },
        "amazon": true,
        "sizes": [
            [
                300,
                250
            ],
            [
                300,
                600
            ],
            [
                320,
                480
            ],
            [
                320,
                50
            ],
            [
                320,
                100
            ],
            [
                320,
                150
            ],
            [
                300,
                100
            ],
            [
                300,
                50
            ],
            [
                320,
                75
            ],
            [
                300,
                75
            ],
            [
                300,
                150
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807799
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancefullbanner1"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351978"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626874,
                    "sizes": [
                        2,
                        125
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200264,
                    "formatId": 88777
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancefullbanner1_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227502"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153729,
                    "placementId": 168068
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "880cfbbf-e10d-481a-bf11-2000e81d1b88"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926667"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancefullbanner1"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588478
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_vorhersage_performancefullbanner1",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ],
            [
                970,
                90
            ],
            [
                970,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807803
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancefullbanner2"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351979"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626876,
                    "sizes": [
                        2,
                        125
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200265,
                    "formatId": 88777
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancefullbanner2_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227505"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153730,
                    "placementId": 168069
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "41c8191c-bc20-4a4f-8bd7-d0ed56ff0841"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926668"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancefullbanner2"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588479
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_vorhersage_performancefullbanner2",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5.5
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ],
            [
                970,
                90
            ],
            [
                970,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 18807808
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_vorhersage_performancefullbanner3"
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4351980"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 1626878,
                    "sizes": [
                        2,
                        125
                    ]
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1200266,
                    "formatId": 88777
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_performancefullbanner3_desktop"
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "10227508"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 153731,
                    "placementId": 168070
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "30ad153d-a6e1-4e77-b65e-7098a9b32c0d"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926669"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_vorhersage_performancefullbanner3"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1588480
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_vorhersage_performancefullbanner3",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 5.5
        },
        "amazon": true,
        "sizes": [
            [
                728,
                90
            ],
            [
                800,
                250
            ],
            [
                970,
                90
            ],
            [
                970,
                250
            ]
        ]
    },
    {
        "bids": [
            {
                "bidder": "dspx",
                "params": {
                    "placement": "1242",
                    "format": "scroller"
                }
            },
            {
                "bidder": "teads",
                "params": {
                    "pageId": 144208,
                    "placementId": 158080
                }
            },
            {
                "bidder": "appnexus",
                "params": {
                    "placementId": 24326525
                }
            },
            {
                "bidder": "pubmatic",
                "params": {
                    "publisherId": "159074",
                    "adSlot": "4352056",
                    "outstreamAU": "wetter_outstream",
                    "video": {
                        "mimes": [
                            "video/mp4"
                        ]
                    }
                }
            },
            {
                "bidder": "stroeerCore",
                "params": {
                    "sid": "5f0a31c4-345a-45d4-b7de-87b9cbf7d374"
                }
            },
            {
                "bidder": "criteo",
                "params": {
                    "networkId": "10136",
                    "publisherSubId": "wetter_web_outstream"
                }
            },
            {
                "bidder": "smartadserver",
                "params": {
                    "siteId": 343404,
                    "pageId": 1650740,
                    "formatId": 113374
                }
            },
            {
                "bidder": "yieldlab",
                "params": {
                    "supplyId": "10215650",
                    "adslotId": "14328908"
                }
            },
            {
                "bidder": "visx",
                "params": {
                    "uid": "926670"
                }
            },
            {
                "bidder": "adf",
                "params": {
                    "mid": 1594523
                }
            },
            {
                "bidder": "triplelift",
                "params": {
                    "inventoryCode": "wetter_web_outstream"
                }
            },
            {
                "bidder": "orbidder",
                "params": {
                    "accountId": "wettercom",
                    "placementId": "wetter_web_outstream"
                }
            },
            {
                "bidder": "rubicon",
                "params": {
                    "accountId": 22218,
                    "siteId": 317224,
                    "zoneId": 2739718
                }
            }
        ],
        "tags": [
            "autorefresh",
            "lazy",
            "banner"
        ],
        "container": "wetter_web_outstream",
        "refresh": {
            "every": 30,
            "require": [
                "focus",
                "visibility",
                "viewable"
            ]
        },
        "lazy": {
            "fetchMarginPercent": 3
        },
        "amazon": true,
        "mediaTypes": {
            "video": {
                "playerSize": [
                    640,
                    480
                ],
                "context": "outstream",
                "mimes": [
                    "video/mp4",
                    "video/x-ms-wmv"
                ],
                "playbackmethod": [
                    4,
                    5
                ],
                "placement": 3,
                "skip": 1,
                "protocols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                ],
                "maxduration": 20,
                "linearity": 1,
                "api": [
                    1,
                    2
                ],
                "renderer": {
                    "url": "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",
                    "render": function(bid) {ANOutstreamVideo.renderAd({targetId: 'wetter_web_outstream',adResponse: bid.adResponse});},
                    "backupOnly": true
                }
            },
            "banner": {
                "sizes": [
                    [
                        400,
                        300
                    ],
                    [
                        640,
                        480
                    ],
                    [
                        1,
                        1
                    ],
                    [
                        300,
                        250
                    ],
                    [
                        336,
                        280
                    ],
                    [
                        700,
                        300
                    ],
                    [
                        700,
                        390
                    ],
                    [
                        640,
                        360
                    ],
                    [
                        640,
                        340
                    ]
                ]
            }
        },
        "additionalSlotSizes": [
            "fluid"
        ]
    }
]});


pbjs.bidderSettings = {standard: { storageAllowed: true },somyieldlab: { bidCpmAdjustment:function(bidCpm){return bidCpm * 0.695;}}};
window.pbjs=window.pbjs||{que:[]};window.pbjs.que.push(function(){pbjs.aliasBidder('yieldlab', 'somyieldlab');;});

adHandler.renameFallbackForPubstack = true;

adHandler.enableGptFirst = true;

//apply sticky test. require _pure adunit 
var refAdUnit = adHandler.service.getAdUnit('wetter_premiumfullbanner_pure');
if (refAdUnit !== null){
    ['wetter_premiumfullbanner_pure', 'wetter_premiumstickybanner_top', 'wetter_premiumstickybanner', 'wetter_premiumfullbanner_default', 'wetter_premiumfullbanner_default_fb'].forEach(function(name){
      adHandler.service.getAdUnit(name).disable('adUnit')    
    });
    
}


//SOM SRA Fireplace Requirement
adHandler.refreshRelation = [
'wetter_premiumsitebar_fb',
'wetter_premiumfullbanner_fb'
];


function Som(consent){

    var self = {
        taxonomy: {
            units: ['DE_WETTERCOM', 'other'],
            channels: somChannels || ['', 'other', 'other', '', '', ''],
            content: 'content'
        },

        targetings: [{ key: 'idf', value: ['wetter'] }],
        isMobile: false,

        availableWidth: function () {
            return window.outerWidth || document.documentElement.clientWidth;
        },

        loadRessource: function ( url, async, callback ) {
            const script = document.createElement('script');
            script.async = async;
            script.crossorigin = 'anonymous';
            script.type = 'text/javascript';
            script.src = url;

            if (callback !== undefined)
                script.onload = callback;

            document.head.appendChild(script);
        },

        _init: function() {

            self.isMobile = self.availableWidth() <= 768;
            //targetings
            self.loadTaxonomy();

            self.loadRogator();
            self.loadTheAdex();

            //Fire tracking after 10 seconds (Just for this Demo! It will be fired as soon as possible)
            // window.setTimeout(function () {
            requestAnimationFrame(function () {
                self.trackAudienceProject();
                self.trackEmetriq();
                self.trackXaxis();
            });
            // }, 1000 * 10);
        },

        ajax: function(url, callback) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200)
                    callback(xmlhttp.responseText);
            };

            xmlhttp.open("GET", url, true);
            xmlhttp.withCredentials = true;
            xmlhttp.send();
        },

        trackAudienceProject: function(){
            let px = `https://sak.userreport.com/71i/launcher.js?gdpr=${consent.data.gdprApplies}&gdpr_pd=1&gdpr_consent=${consent.data.tcString}`;
            self.loadRessource(px, true);
        },

        trackEmetriq: function(){
            let px = `https://ups.xplosion.de/loader/22970/default.js?gdpr=${consent.data.gdprApplies}&gdpr_pd=1&gdpr_consent=${consent.data.tcString}`;
            self.loadRessource(px, true);
        },

        trackXaxis: function(){
            let px = `https://de-gmtdmp.mookie1.com/t/v2/learn?tagid=V2_343&src.rand=${Date.now()}&src.id=SOM&gdpr=${consent.data.gdprApplies}&gdpr_pd=1&gdpr_consent=${consent.data.tcString}`;
            self.loadRessource(px, true);
        },


        loadTaxonomy: function() {
            // BEGIN AD UNITS
            var unitSite = self.taxonomy.units[0];
            var unitZone = self.taxonomy.units[1];

            var channels = self.taxonomy.channels;
            var channel0 = channels[0] || '';
            var channel1 = channels[1] || '';
            var channel2 = channels[2] || '';
            var channel3 = channels[3] || '';

            switch (channel0) {
                case 'home':
                    if (channel1 === 'home') {
                        unitZone = channel1;
                    }
                    break;
                case 'apps_und_mehr':
                case 'blog':
                case 'news':
                case 'wetterlexikon':
                case 'oktoberfest':
                    unitZone = channel0;
                    break;
                case 'wettertv':
                case 'wettercom-live':
                case 'hd-live-webcams':
                case 'videos':
                    if (self.taxonomy.content === 'video') {
                        if (channel0 === 'wettertv' || channel0 === 'videos') {
                            unitZone = 'wettertv';
                        }

                        if (channel1 === 'livecam' ||
                            channel0 === 'hd-live-webcams' ||
                            channel0 === 'wettercom-live') {
                            unitZone = 'livecam';
                        }
                    }
                    break;
                case 'freizeit':
                    unitSite += '.' + channel0;
                    switch (channel1) {
                        case 'home':
                        case 'gartenwetter':
                        case 'wintersportwetter':
                        case 'bundesligawetter':
                        case 'championsleague':
                        case 'europaleague':
                        case 'formel_1_wetter':
                        case 'golfwetter':
                        case 'tennis':
                        case 'grillwetter':
                        case 'flugwetter':
                        case 'motorsportwetter':
                        case 'outdoorwetter':
                            unitZone = channel1;
                            break;
                    }
                    break;
                case 'webcams_galerien':
                    unitSite += '.galerien';
                    switch (channel1) {
                        case 'bildergalerie':
                            unitZone = channel2 === 'home' ? 'home' : channel1;
                            break;
                        case 'earthtv_3day_forecast':
                        case 'panorama_cams':
                        case 'webcams':
                        case 'webcams_ansicht':
                            unitZone = channel1;
                            break;
                    }
                    break;
                case 'gesundheit':
                    unitSite += '.' + channel0;
                    switch (channel1) {
                        case 'home':
                        case 'luftbelastung':
                        case 'pollenflug':
                        case 'erkaeltungswetter':
                        case 'fit-gesund-schoen':
                        case 'gesundheitslexikon':
                            unitZone = channel1;
                            break;
                        case 'uv_index':
                            unitZone = 'uv-index';
                            break;
                    }
                    break;
                case 'klima':
                    unitSite += '.' + channel0;
                    switch (channel1) {
                        case 'home':
                        case 'erneuerbare_energien':
                        case 'klimamodelle':
                        case 'klimaschutz':
                        case 'treibhauseffekt':
                            unitZone = channel1;
                            break;
                        case 'klimawissen':
                            if (channel2 === 'klimamodelle' && channel3 === 'home') unitZone = 'home';
                            break;
                    }
                    break;
                case 'reise':
                    unitSite += '.' + channel0;
                    switch (channel1) {
                        case 'home':
                        case 'laenderinfos':
                        case 'flughafen_ankunft_abflug':
                        case 'routenwetter':
                        case 'strandwetter':
                        case 'top_hotelangebote':
                        case 'urlaubsplaner':
                            unitZone = channel1;
                            break;
                    }
                    break;
                case 'spiele':
                    unitSite += '.' + channel0;
                    break;
                case 'wetter_aktuell':
                    unitSite += '.wetter';
                    switch (channel1) {
                        case 'wettervorhersage':
                            unitZone = channel2 === 'home' ? 'home' : channel1;
                            addWeatherForecastKeywords(channel2);
                            break;
                        case 'wetterwarnungen':
                        case 'hoechst_tiefstwerte':
                        case 'niederschlagsprognose':
                        case 'niederschlagsradar':
                        case 'regen_und_wolken':
                        case 'rueckblick':
                        case 'satellitenbilder':
                        case 'wetterkarten':
                        case 'wetternetzwerk':
                            unitZone = channel1;
                            break;
                    }
                    break;
                default:
                    unitZone = 'other';
                    break;
            }

            // ADTSOM-1613
            // set the forecast period as a keyword 'wetter_{window.SOI_SUB3SITE}'.
            // the keyword will not be limited to 10 chars on purpose.
            function addWeatherForecastKeywords(period) {
                switch (period) {
                    case 'heute':
                    case 'morgen':
                    case '3tage':
                    case 'wochenende':
                    case '7tage':
                    case '16tage':
                    case 'uebermorgen':
                    case 'in3tagen':
                    case 'in4tagen':
                    case 'in5tagen':
                    case 'in6tagen':
                        self.targetings.push({ key: 'kw', value: ['wetter_' + period] });
                        break;
                }
            }

            if (self.isMobile) {
                unitSite = 'DE_WETTERCOM.MEW';
                switch (channel0) {
                    case 'home':
                        unitZone = channel0;
                        break;
                    case 'wetter_aktuell':
                        switch (channel1) {
                            case 'wettervorhersage':
                                unitZone = channel1;
                                addWeatherForecastKeywords(channel2);
                                break;
                        }
                        break;
                    case 'gesundheit':
                        switch (channel1) {
                            case 'pollenflug':
                                unitZone = channel1;
                                break;
                        }
                        break;
                    case 'wettertv':
                    case 'wettercom-live':
                    case 'hd-live-webcams':
                    case 'videos':
                        switch (self.taxonomy.content) {
                            case 'video':
                                if (channel0 === 'wettertv' || channel0 === 'videos') {
                                    unitZone = 'wettertv';
                                }
                                if (channel1 === 'livecam' || channel0 === 'hd-live-webcams' || channel0 === 'wettercom-live') {
                                    unitZone = 'livecam';
                                }
                                break;
                            default: unitZone = 'other';
                        }
                        break;
                    default: unitZone = 'other';
                }
            }

            self.taxonomy.units = [unitSite, unitZone];

            var isTestingEnv = window.location.search.indexOf('somtagtesting=1') >= 0;

            if (isTestingEnv) {
                self.taxonomy.units = ['develop', 'other'];
                // config.video.taxonomy.units = ['showroom', 'other'];
                self.targetings.push({ key: 'showroom', value: 'qa_all' });
                // config.features.dev.skipCheckConsent = true;
            }
        },


        loadTheAdex: function(){
            const nuggrid = document.referrer;
            const nuggn = self.isMobile ? 126188777 : 1272195681;
            const nuggsid = 424777385;
            let nuggtg = ["wettercom"]
                .concat(self.taxonomy.channels)
                .map(val => val.replace(/_/g, ''))
                .concat(self.taxonomy.content)
                .filter(x=>x)
                .join('_');

            const theadex = `https://api.theadex.com/rt/v1/waterfall?token=ERPoiSafF7eTGldbNtBphJbZNIT1sodUNj1wCgCc&nuggsid=${nuggsid}&nuggtg=${nuggtg}&ua=${escape(navigator.userAgent)}&location=${nuggrid}&nuggn=${nuggn}&nuggrid=${nuggrid}&gdpr=${consent.data.gdprApplies}&gdpr_pd=1&gdpr_consent=${consent.data.tcString}`;
            self.ajax(theadex, function (targeting) {
try{
                targeting = JSON.parse(targeting);
                self.targetings.push(...targeting.targeting);
}catch(e){}
            });

        },

        loadRogator: function () {
            self.loadRessource("https://adserver.71i.de/cgi-bin/functions/rogator-kkl2ads.pl?580486", true, function () {
                const ROGATOR_MAGIC_KEY = 'z901';
                const referrerIsFacebook = document.referrer.indexOf('facebook.com') !== -1;

                let targetingData = { key: 'rog', value: []};
                let containsRogatorKey = false;
                if (typeof soi_rogator !== "undefined"){
                    targetingData.value = soi_rogator.split(',');
                    containsRogatorKey = soi_rogator.indexOf(ROGATOR_MAGIC_KEY) !== -1;
                }

                if (referrerIsFacebook && !containsRogatorKey)
                    targetingData.value.push(ROGATOR_MAGIC_KEY);

                self.targetings.push(targetingData);
            });



        }
    };

    self._init();

    return {
        getSlotPath: function(){
            // return `/16486012/${self.taxonomy.units.join('/')}`;
            return `/5731,16486012/${self.taxonomy.units.join('/')}`;
        },
        getTargetings: function () {
            return self.targetings;
        }
    };
}


adHandler.service.addConsentCallback(function () {
    let consentData = adHandler.service.consent.getConsentData();
    let alloWCookies = adHandler.service.consent.purpose('cookies');

if (consentData === null) return;

    //no google vendor allowed
    if(typeof consentData.vendor.consents[755] === "undefined")
        return;


    const allowSom = !!consentData.vendor.consents[857]
        || !!consentData.gdprApplies
        || alloWCookies;

    if (!allowSom)
        return ;

    let som = new Som({data: consentData});
    adHandler.service.getAdUnitsForCurrentMapping().forEach(function(e){
        if (e.fallback === false)
            return;

        console.log("update slot from ",e.settings.slotName, "to", som.getSlotPath());
        e.settings.slotName = e.slotName = som.getSlotPath();
    });

    adHandler.callbacks.preGptRequest.push(function () {
        var somTargeting = som.getTargetings();
        somTargeting.forEach(function (targeting) {
            adHandler.service.setTargeting(targeting.key, typeof targeting.value === "object" ? targeting.value : targeting.value + '');
        });


    });

});

//SOM XX targetings
adHandler.service.addConsentCallback(function () {
    
     var xxSlots = {
        'wetter_premiumfullbanner': {
            desktop: "sub,pb,bb800,bb970,bb940,bb1145",
            mobile: "mb6x1,mb2x1"
        },
        'wetter_premiumfullbanner_default': {
            desktop: "sub,pb,bb800,bb970,bb940,bb1145",
            mobile: "mb6x1,mb2x1"
        },
        'wetter_premiumsitebar': {
            desktop: "sb,scs,ws,ews"
        },
        'wetter_premiumrectangle': {
            desktop: "mr,hp",
            mobile: "mr,hp"
        },
    };
    let mappingIndex = adHandler.service.getMappingIndex();
    
    for(var i in xxSlots){
        if (!xxSlots.hasOwnProperty(i)) continue;
        try{
            let adUnit = adHandler.service.getAdUnit(i);
            if (adUnit){
                adUnit.setTargeting('xx', xxSlots[i][mappingIndex === "315_767" ? 'mobile' : 'desktop'].split(','));
            }
        }catch(e){ console.log("FW/SOM Error:", e)}
    }
});

//SOM adsafeprotected

adHandler.service.addConsentCallback(function () {
    var consentData = adHandler.service.consent.getConsentData();
    var allowCookies = adHandler.service.consent.purpose('cookies');

    if (consentData === null) return;
    if (allowCookies === false) return;

    //no google vendor allowed
    if(consentData.vendor === undefined || typeof consentData.vendor.consents[755] === "undefined")
        return;


    window.googletag.cmd.push(function () {
        window.googletag.pubads().addEventListener('slotRenderEnded', function (event) {
            var iasScriptUrl, hiddenFrame, hiddenDoc, where, domain;

            if (typeof event === "undefined" || event.size === null) return;

            //only process SOM positions
            var xxTargeting = event.slot.getTargeting('xx');
            if (xxTargeting.length === 0) return;

            var WIDTH = event.size !== undefined ? event.size[0] : '';
            var HEIGHT = event.size !== undefined ? event.size[1] : '';
            var eadv = event.advertiserId !== undefined ? event.advertiserId : '';
            var eaid = event.sourceAgnosticLineItemId !== undefined ? event.sourceAgnosticLineItemId : '';
            var ecid = event.sourceAgnosticCreativeId !== undefined ? event.sourceAgnosticCreativeId : '';
            var ebuy = event.campaignId !== undefined ? event.campaignId : '';
            var CACHEBUSTER = +new Date();

            iasScriptUrl = `//pixel.adsafeprotected.com/jload?anId=931497&campId=${WIDTH}x${HEIGHT}&pubId=${eadv}&chanId=&placementId=${eaid}&pubCreative=${ecid}&pubOrder=${ebuy}&cb=${CACHEBUSTER}&custom=${escape(xxTargeting.join(','))}`;


            hiddenFrame = document.createElement('iframe');
            (hiddenFrame.frameElement || hiddenFrame).style.cssText = "width: 0; height: 0; border: 0; display: none;";
            hiddenFrame.src = 'javascript:false';
            document.head.appendChild(hiddenFrame);
            try {
                hiddenDoc = hiddenFrame.contentWindow.document
            } catch (e) {
                domain = document.domain;
                hiddenFrame.src = "javascript:var d=document.open();d.domain='" + domain + "';void(0);";
                hiddenDoc = hiddenFrame.contentWindow.document
            }
            hiddenDoc.open().write('<body onload="' + 'window.__IntegralASUseFIF = true; ' + 'var js = document.createElement(\'script\');' + 'js.src = \'' + iasScriptUrl + '\';' + 'document.body.appendChild(js);">');
            hiddenDoc.close();


        });
    });

});




pbjs.que.push(function () {

        const customConfigObject = {
            "buckets": [{
                "precision": 2,
                "max": 10,
                "increment": 0.01
            },
                {
                    "max": 20.25,
                    "increment": 0.05
                }]
        };

        pbjs.setConfig({
            priceGranularity: customConfigObject
        })
    }
);

adHandler.service.addConsentCallback(function () {
    var myWin = adHandler.service.getScope();
    var script = myWin.document.createElement('script');
    script.async = true;
    script.crossorigin = 'anonymous';
    script.type = 'text/javascript';
    script.src = "https://boot.pbstck.com/v1/tag/68574636-3895-425b-9069-c6f6f93e4ea5";
    myWin.document.head.appendChild(script);
});

// Triplelift StandAlone UserSync
adHandler.service.addConsentCallback(function () {
    let consentData = adHandler.service.consent.getConsentData();

    try {
        if (typeof consentData.vendor.consents !== "undefined") {
            if (consentData.vendor.consents[28] === undefined || consentData.vendor.consents[28] === false) return;

            var myWin = adHandler.service.getScope();
            var script = myWin.document.createElement('script');
            script.async = true;
            script.crossorigin = 'anonymous';
            script.type = 'text/javascript';
            script.src = "https://ib.3lift.com/sync.js";
            myWin.document.head.appendChild(script);
        }
    } catch (e) {
    }

});

adHandler.cmd.push(function () {
    var scope = adHandler.service.getScope();
    scope.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function () {
        scope.googletag.pubads().addEventListener('slotResponseReceived', function (event) {
            if (event.slot.getAdUnitPath() !== "/16486012/wetter_web_outstream") return;

            var scrollerContainer = scope.document.getElementById('dspx_scroller');
            if(scrollerContainer) scrollerContainer.innerHTML = "";
        });
    });
});

/**
 * Boot the Application
 */

//Add wetter.com case, auto disable system for pay users
var disabledByContentPass = localStorage.getItem('wcom_cmp_pu') !== null;
if(disabledByContentPass === false){
    adHandler.cmd.forEach(function(cmd){ cmd(); });

    Object.defineProperty(adHandler.cmd, "push", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
            for (var i = 0, n = this.length, l = arguments.length; i < l; i++, n++) {
                arguments[i]();
            }
            return n;
        }
    });

    if (adHandler.autoboot) adHandler.service.request();
}
