import{c as me}from"./createLucideIcon-a0XJ54KJ.js";import{r as $,b as he}from"./app-3SIRTf-5.js";import{b as Wt,_ as Ft,a as zt}from"./index-YuXTghCy.js";import{c as gt,$ as ge,f as we}from"./index-Cqu9cwS9.js";/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=me("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),xe=$.createContext(void 0);function Rn(t){const e=$.useContext(xe);return t||e||"ltr"}const ye=["top","right","bottom","left"],X=Math.min,L=Math.max,ft=Math.round,lt=Math.floor,j=t=>({x:t,y:t}),ve={left:"right",right:"left",bottom:"top",top:"bottom"},be={start:"end",end:"start"};function wt(t,e,n){return L(t,X(e,n))}function N(t,e){return typeof t=="function"?t(e):t}function B(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function yt(t){return t==="x"?"y":"x"}function vt(t){return t==="y"?"height":"width"}function Q(t){return["top","bottom"].includes(B(t))?"y":"x"}function bt(t){return yt(Q(t))}function $e(t,e,n){n===void 0&&(n=!1);const o=J(t),i=bt(t),r=vt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=dt(s)),[s,dt(s)]}function Ae(t){const e=dt(t);return[xt(t),e,xt(e)]}function xt(t){return t.replace(/start|end/g,e=>be[e])}function Re(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Ce(t,e,n,o){const i=J(t);let r=Re(B(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(xt)))),r}function dt(t){return t.replace(/left|right|bottom|top/g,e=>ve[e])}function Oe(t){return{top:0,right:0,bottom:0,left:0,...t}}function Nt(t){return typeof t!="number"?Oe(t):{top:t,right:t,bottom:t,left:t}}function ut(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function St(t,e,n){let{reference:o,floating:i}=t;const r=Q(e),s=bt(e),l=vt(s),c=B(e),a=r==="y",u=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:u,y:o.y-i.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(J(e)){case"start":f[s]-=m*(n&&a?-1:1);break;case"end":f[s]+=m*(n&&a?-1:1);break}return f}const Pe=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=St(a,o,c),m=o,f={},p=0;for(let h=0;h<l.length;h++){const{name:w,fn:g}=l[h],{x:y,y:x,data:v,reset:b}=await g({x:u,y:d,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:a,platform:s,elements:{reference:t,floating:e}});u=y??u,d=x??d,f={...f,[w]:{...f[w],...v}},b&&p<=50&&(p++,typeof b=="object"&&(b.placement&&(m=b.placement),b.rects&&(a=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:u,y:d}=St(a,m,c)),h=-1)}return{x:u,y:d,placement:m,strategy:i,middlewareData:f}};async function et(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:m=!1,padding:f=0}=N(e,t),p=Nt(f),w=l[m?d==="floating"?"reference":"floating":d],g=ut(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:u,strategy:c})),y=d==="floating"?{...s.floating,x:o,y:i}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),v=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},b=ut(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:x,strategy:c}):y);return{top:(g.top-b.top+p.top)/v.y,bottom:(b.bottom-g.bottom+p.bottom)/v.y,left:(g.left-b.left+p.left)/v.x,right:(b.right-g.right+p.right)/v.x}}const Se=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:a,padding:u=0}=N(t,e)||{};if(a==null)return{};const d=Nt(u),m={x:n,y:o},f=bt(i),p=vt(f),h=await s.getDimensions(a),w=f==="y",g=w?"top":"left",y=w?"bottom":"right",x=w?"clientHeight":"clientWidth",v=r.reference[p]+r.reference[f]-m[f]-r.floating[p],b=m[f]-r.reference[f],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let C=A?A[x]:0;(!C||!await(s.isElement==null?void 0:s.isElement(A)))&&(C=l.floating[x]||r.floating[p]);const E=v/2-b/2,_=C/2-h[p]/2-1,k=X(d[g],_),H=X(d[y],_),P=k,W=C-h[p]-H,O=C/2-h[p]/2+E,S=wt(P,O,W),D=!c.arrow&&J(i)!=null&&O!==S&&r.reference[p]/2-(O<P?k:H)-h[p]/2<0,R=D?O<P?O-P:O-W:0;return{[f]:m[f]+R,data:{[f]:S,centerOffset:O-S-R,...D&&{alignmentOffset:R}},reset:D}}}),Ee=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:h=!0,...w}=N(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const g=B(i),y=B(l)===l,x=await(c.isRTL==null?void 0:c.isRTL(a.floating)),v=m||(y||!h?[dt(l)]:Ae(l));!m&&p!=="none"&&v.push(...Ce(l,h,p,x));const b=[l,...v],A=await et(e,w),C=[];let E=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&C.push(A[g]),d){const P=$e(i,s,x);C.push(A[P[0]],A[P[1]])}if(E=[...E,{placement:i,overflows:C}],!C.every(P=>P<=0)){var _,k;const P=(((_=r.flip)==null?void 0:_.index)||0)+1,W=b[P];if(W)return{data:{index:P,overflows:E},reset:{placement:W}};let O=(k=E.filter(S=>S.overflows[0]<=0).sort((S,D)=>S.overflows[1]-D.overflows[1])[0])==null?void 0:k.placement;if(!O)switch(f){case"bestFit":{var H;const S=(H=E.map(D=>[D.placement,D.overflows.filter(R=>R>0).reduce((R,Y)=>R+Y,0)]).sort((D,R)=>D[1]-R[1])[0])==null?void 0:H[0];S&&(O=S);break}case"initialPlacement":O=l;break}if(i!==O)return{reset:{placement:O}}}return{}}}};function Et(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Dt(t){return ye.some(e=>t[e]>=0)}const De=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=N(t,e);switch(o){case"referenceHidden":{const r=await et(e,{...i,elementContext:"reference"}),s=Et(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Dt(s)}}}case"escaped":{const r=await et(e,{...i,altBoundary:!0}),s=Et(r,n.floating);return{data:{escapedOffsets:s,escaped:Dt(s)}}}default:return{}}}}};async function _e(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=B(n),l=J(n),c=Q(n)==="y",a=["left","top"].includes(s)?-1:1,u=r&&c?-1:1,d=N(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof p=="number"&&(f=l==="end"?p*-1:p),c?{x:f*u,y:m*a}:{x:m*a,y:f*u}}const Le=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await _e(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},Te=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:g,y}=w;return{x:g,y}}},...c}=N(t,e),a={x:n,y:o},u=await et(e,c),d=Q(B(i)),m=yt(d);let f=a[m],p=a[d];if(r){const w=m==="y"?"top":"left",g=m==="y"?"bottom":"right",y=f+u[w],x=f-u[g];f=wt(y,f,x)}if(s){const w=d==="y"?"top":"left",g=d==="y"?"bottom":"right",y=p+u[w],x=p-u[g];p=wt(y,p,x)}const h=l.fn({...e,[m]:f,[d]:p});return{...h,data:{x:h.x-n,y:h.y-o}}}}},Me=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=N(t,e),u={x:n,y:o},d=Q(i),m=yt(d);let f=u[m],p=u[d];const h=N(l,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){const x=m==="y"?"height":"width",v=r.reference[m]-r.floating[x]+w.mainAxis,b=r.reference[m]+r.reference[x]-w.mainAxis;f<v?f=v:f>b&&(f=b)}if(a){var g,y;const x=m==="y"?"width":"height",v=["top","left"].includes(B(i)),b=r.reference[d]-r.floating[x]+(v&&((g=s.offset)==null?void 0:g[d])||0)+(v?0:w.crossAxis),A=r.reference[d]+r.reference[x]+(v?0:((y=s.offset)==null?void 0:y[d])||0)-(v?w.crossAxis:0);p<b?p=b:p>A&&(p=A)}return{[m]:f,[d]:p}}}},ke=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=N(t,e),c=await et(e,l),a=B(n),u=J(n),d=Q(n)==="y",{width:m,height:f}=o.floating;let p,h;a==="top"||a==="bottom"?(p=a,h=u===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(h=a,p=u==="end"?"top":"bottom");const w=f-c[p],g=m-c[h],y=!e.middlewareData.shift;let x=w,v=g;if(d){const A=m-c.left-c.right;v=u||y?X(g,A):A}else{const A=f-c.top-c.bottom;x=u||y?X(w,A):A}if(y&&!u){const A=L(c.left,0),C=L(c.right,0),E=L(c.top,0),_=L(c.bottom,0);d?v=m-2*(A!==0||C!==0?A+C:L(c.left,c.right)):x=f-2*(E!==0||_!==0?E+_:L(c.top,c.bottom))}await s({...e,availableWidth:v,availableHeight:x});const b=await i.getDimensions(r.floating);return m!==b.width||f!==b.height?{reset:{rects:!0}}:{}}}};function q(t){return Bt(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(Bt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Bt(t){return t instanceof Node||t instanceof T(t).Node}function V(t){return t instanceof Element||t instanceof T(t).Element}function F(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function _t(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=M(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function He(t){return["table","td","th"].includes(q(t))}function $t(t){const e=At(),n=M(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function We(t){let e=G(t);for(;F(e)&&!mt(e);){if($t(e))return e;e=G(e)}return null}function At(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function mt(t){return["html","body","#document"].includes(q(t))}function M(t){return T(t).getComputedStyle(t)}function ht(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(t){if(q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||_t(t)&&t.host||I(t);return _t(e)?e.host:e}function Vt(t){const e=G(t);return mt(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&ot(e)?e:Vt(e)}function nt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Vt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=T(i);return r?e.concat(s,s.visualViewport||[],ot(i)?i:[],s.frameElement&&n?nt(s.frameElement):[]):e.concat(i,nt(i,[],n))}function It(t){const e=M(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=ft(n)!==r||ft(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function Rt(t){return V(t)?t:t.contextElement}function K(t){const e=Rt(t);if(!F(e))return j(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=It(e);let s=(r?ft(n.width):n.width)/o,l=(r?ft(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Fe=j(0);function Yt(t){const e=T(t);return!At()||!e.visualViewport?Fe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ze(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==T(t)?!1:e}function U(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Rt(t);let s=j(1);e&&(o?V(o)&&(s=K(o)):s=K(t));const l=ze(r,n,o)?Yt(r):j(0);let c=(i.left+l.x)/s.x,a=(i.top+l.y)/s.y,u=i.width/s.x,d=i.height/s.y;if(r){const m=T(r),f=o&&V(o)?T(o):o;let p=m,h=p.frameElement;for(;h&&o&&f!==p;){const w=K(h),g=h.getBoundingClientRect(),y=M(h),x=g.left+(h.clientLeft+parseFloat(y.paddingLeft))*w.x,v=g.top+(h.clientTop+parseFloat(y.paddingTop))*w.y;c*=w.x,a*=w.y,u*=w.x,d*=w.y,c+=x,a+=v,p=T(h),h=p.frameElement}}return ut({width:u,height:d,x:c,y:a})}const Ne=[":popover-open",":modal"];function Xt(t){return Ne.some(e=>{try{return t.matches(e)}catch{return!1}})}function Be(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=I(o),l=e?Xt(e.floating):!1;if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},a=j(1);const u=j(0),d=F(o);if((d||!d&&!r)&&((q(o)!=="body"||ot(s))&&(c=ht(o)),F(o))){const m=U(o);a=K(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+u.x,y:n.y*a.y-c.scrollTop*a.y+u.y}}function Ve(t){return Array.from(t.getClientRects())}function jt(t){return U(I(t)).left+ht(t).scrollLeft}function Ie(t){const e=I(t),n=ht(t),o=t.ownerDocument.body,i=L(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=L(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+jt(t);const l=-n.scrollTop;return M(o).direction==="rtl"&&(s+=L(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Ye(t,e){const n=T(t),o=I(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const a=At();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function Xe(t,e){const n=U(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=F(t)?K(t):j(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,a=o*r.y;return{width:s,height:l,x:c,y:a}}function Lt(t,e,n){let o;if(e==="viewport")o=Ye(t,n);else if(e==="document")o=Ie(I(t));else if(V(e))o=Xe(e,n);else{const i=Yt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return ut(o)}function qt(t,e){const n=G(t);return n===e||!V(n)||mt(n)?!1:M(n).position==="fixed"||qt(n,e)}function je(t,e){const n=e.get(t);if(n)return n;let o=nt(t,[],!1).filter(l=>V(l)&&q(l)!=="body"),i=null;const r=M(t).position==="fixed";let s=r?G(t):t;for(;V(s)&&!mt(s);){const l=M(s),c=$t(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!c&&qt(t,s))?o=o.filter(u=>u!==s):i=l,s=G(s)}return e.set(t,o),o}function qe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?je(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,u)=>{const d=Lt(e,u,i);return a.top=L(d.top,a.top),a.right=X(d.right,a.right),a.bottom=X(d.bottom,a.bottom),a.left=L(d.left,a.left),a},Lt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Ue(t){const{width:e,height:n}=It(t);return{width:e,height:n}}function Ze(t,e,n){const o=F(e),i=I(e),r=n==="fixed",s=U(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=j(0);if(o||!o&&!r)if((q(e)!=="body"||ot(i))&&(l=ht(e)),o){const d=U(e,!0,r,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else i&&(c.x=jt(i));const a=s.left+l.scrollLeft-c.x,u=s.top+l.scrollTop-c.y;return{x:a,y:u,width:s.width,height:s.height}}function Tt(t,e){return!F(t)||M(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ut(t,e){const n=T(t);if(!F(t)||Xt(t))return n;let o=Tt(t,e);for(;o&&He(o)&&M(o).position==="static";)o=Tt(o,e);return o&&(q(o)==="html"||q(o)==="body"&&M(o).position==="static"&&!$t(o))?n:o||We(t)||n}const Ke=async function(t){const e=this.getOffsetParent||Ut,n=this.getDimensions;return{reference:Ze(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}};function Ge(t){return M(t).direction==="rtl"}const Je={convertOffsetParentRelativeRectToViewportRelativeRect:Be,getDocumentElement:I,getClippingRect:qe,getOffsetParent:Ut,getElementRects:Ke,getClientRects:Ve,getDimensions:Ue,getScale:K,isElement:V,isRTL:Ge};function Qe(t,e){let n=null,o;const i=I(t);function r(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:a,top:u,width:d,height:m}=t.getBoundingClientRect();if(l||e(),!d||!m)return;const f=lt(u),p=lt(i.clientWidth-(a+d)),h=lt(i.clientHeight-(u+m)),w=lt(a),y={rootMargin:-f+"px "+-p+"px "+-h+"px "+-w+"px",threshold:L(0,X(1,c))||1};let x=!0;function v(b){const A=b[0].intersectionRatio;if(A!==c){if(!x)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{n=new IntersectionObserver(v,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(v,y)}n.observe(t)}return s(!0),r}function tn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=Rt(t),u=i||r?[...a?nt(a):[],...nt(e)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),r&&g.addEventListener("resize",n)});const d=a&&l?Qe(a,n):null;let m=-1,f=null;s&&(f=new ResizeObserver(g=>{let[y]=g;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let p,h=c?U(t):null;c&&w();function w(){const g=U(t);h&&(g.x!==h.x||g.y!==h.y||g.width!==h.width||g.height!==h.height)&&n(),h=g,p=requestAnimationFrame(w)}return n(),()=>{var g;u.forEach(y=>{i&&y.removeEventListener("scroll",n),r&&y.removeEventListener("resize",n)}),d==null||d(),(g=f)==null||g.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const en=Te,nn=Ee,on=ke,rn=De,Mt=Se,sn=Me,cn=(t,e,n)=>{const o=new Map,i={platform:Je,...n},r={...i.platform,_c:o};return Pe(t,e,{...i,platform:r})},ln=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Mt({element:o.current,padding:i}).fn(n):{}:o?Mt({element:o,padding:i}).fn(n):{}}}};var at=typeof document<"u"?$.useLayoutEffect:$.useEffect;function pt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!pt(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!pt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Zt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function kt(t,e){const n=Zt(t);return Math.round(e*n)/n}function Ht(t){const e=$.useRef(t);return at(()=>{e.current=t}),e}function an(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:a}=t,[u,d]=$.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,f]=$.useState(o);pt(m,o)||f(o);const[p,h]=$.useState(null),[w,g]=$.useState(null),y=$.useCallback(R=>{R!==A.current&&(A.current=R,h(R))},[]),x=$.useCallback(R=>{R!==C.current&&(C.current=R,g(R))},[]),v=r||p,b=s||w,A=$.useRef(null),C=$.useRef(null),E=$.useRef(u),_=c!=null,k=Ht(c),H=Ht(i),P=$.useCallback(()=>{if(!A.current||!C.current)return;const R={placement:e,strategy:n,middleware:m};H.current&&(R.platform=H.current),cn(A.current,C.current,R).then(Y=>{const z={...Y,isPositioned:!0};W.current&&!pt(E.current,z)&&(E.current=z,he.flushSync(()=>{d(z)}))})},[m,e,n,H]);at(()=>{a===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,d(R=>({...R,isPositioned:!1})))},[a]);const W=$.useRef(!1);at(()=>(W.current=!0,()=>{W.current=!1}),[]),at(()=>{if(v&&(A.current=v),b&&(C.current=b),v&&b){if(k.current)return k.current(v,b,P);P()}},[v,b,P,k,_]);const O=$.useMemo(()=>({reference:A,floating:C,setReference:y,setFloating:x}),[y,x]),S=$.useMemo(()=>({reference:v,floating:b}),[v,b]),D=$.useMemo(()=>{const R={position:n,left:0,top:0};if(!S.floating)return R;const Y=kt(S.floating,u.x),z=kt(S.floating,u.y);return l?{...R,transform:"translate("+Y+"px, "+z+"px)",...Zt(S.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:Y,top:z}},[n,l,S.floating,u.x,u.y]);return $.useMemo(()=>({...u,update:P,refs:O,elements:S,floatingStyles:D}),[u,P,O,S,D])}function fn(t){const[e,n]=$.useState(void 0);return gt(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const r=i[0];let s,l;if("borderBoxSize"in r){const c=r.borderBoxSize,a=Array.isArray(c)?c[0]:c;s=a.inlineSize,l=a.blockSize}else s=t.offsetWidth,l=t.offsetHeight;n({width:s,height:l})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),e}const Kt="Popper",[Gt,Cn]=ge(Kt),[dn,Jt]=Gt(Kt),un=t=>{const{__scopePopper:e,children:n}=t,[o,i]=$.useState(null);return $.createElement(dn,{scope:e,anchor:o,onAnchorChange:i},n)},pn="PopperAnchor",mn=$.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...i}=t,r=Jt(pn,n),s=$.useRef(null),l=zt(e,s);return $.useEffect(()=>{r.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:$.createElement(Wt.div,Ft({},i,{ref:l}))}),Qt="PopperContent",[hn,On]=Gt(Qt),gn=$.forwardRef((t,e)=>{var n,o,i,r,s,l,c,a;const{__scopePopper:u,side:d="bottom",sideOffset:m=0,align:f="center",alignOffset:p=0,arrowPadding:h=0,avoidCollisions:w=!0,collisionBoundary:g=[],collisionPadding:y=0,sticky:x="partial",hideWhenDetached:v=!1,updatePositionStrategy:b="optimized",onPlaced:A,...C}=t,E=Jt(Qt,u),[_,k]=$.useState(null),H=zt(e,tt=>k(tt)),[P,W]=$.useState(null),O=fn(P),S=(n=O==null?void 0:O.width)!==null&&n!==void 0?n:0,D=(o=O==null?void 0:O.height)!==null&&o!==void 0?o:0,R=d+(f!=="center"?"-"+f:""),Y=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},z=Array.isArray(g)?g:[g],ee=z.length>0,it={padding:Y,boundary:z.filter(wn),altBoundary:ee},{refs:ne,floatingStyles:Ct,placement:oe,isPositioned:rt,middlewareData:Z}=an({strategy:"fixed",placement:R,whileElementsMounted:(...tt)=>tn(...tt,{animationFrame:b==="always"}),elements:{reference:E.anchor},middleware:[Le({mainAxis:m+D,alignmentAxis:p}),w&&en({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?sn():void 0,...it}),w&&nn({...it}),on({...it,apply:({elements:tt,rects:Pt,availableWidth:fe,availableHeight:de})=>{const{width:ue,height:pe}=Pt.reference,ct=tt.floating.style;ct.setProperty("--radix-popper-available-width",`${fe}px`),ct.setProperty("--radix-popper-available-height",`${de}px`),ct.setProperty("--radix-popper-anchor-width",`${ue}px`),ct.setProperty("--radix-popper-anchor-height",`${pe}px`)}}),P&&ln({element:P,padding:h}),xn({arrowWidth:S,arrowHeight:D}),v&&rn({strategy:"referenceHidden",...it})]}),[Ot,ie]=te(oe),st=we(A);gt(()=>{rt&&(st==null||st())},[rt,st]);const re=(i=Z.arrow)===null||i===void 0?void 0:i.x,se=(r=Z.arrow)===null||r===void 0?void 0:r.y,ce=((s=Z.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[le,ae]=$.useState();return gt(()=>{_&&ae(window.getComputedStyle(_).zIndex)},[_]),$.createElement("div",{ref:ne.setFloating,"data-radix-popper-content-wrapper":"",style:{...Ct,transform:rt?Ct.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:le,"--radix-popper-transform-origin":[(l=Z.transformOrigin)===null||l===void 0?void 0:l.x,(c=Z.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:t.dir},$.createElement(hn,{scope:u,placedSide:Ot,onArrowChange:W,arrowX:re,arrowY:se,shouldHideArrow:ce},$.createElement(Wt.div,Ft({"data-side":Ot,"data-align":ie},C,{ref:H,style:{...C.style,animation:rt?void 0:"none",opacity:(a=Z.hide)!==null&&a!==void 0&&a.referenceHidden?0:void 0}}))))});function wn(t){return t!==null}const xn=t=>({name:"transformOrigin",options:t,fn(e){var n,o,i,r,s;const{placement:l,rects:c,middlewareData:a}=e,d=((n=a.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,m=d?0:t.arrowWidth,f=d?0:t.arrowHeight,[p,h]=te(l),w={start:"0%",center:"50%",end:"100%"}[h],g=((o=(i=a.arrow)===null||i===void 0?void 0:i.x)!==null&&o!==void 0?o:0)+m/2,y=((r=(s=a.arrow)===null||s===void 0?void 0:s.y)!==null&&r!==void 0?r:0)+f/2;let x="",v="";return p==="bottom"?(x=d?w:`${g}px`,v=`${-f}px`):p==="top"?(x=d?w:`${g}px`,v=`${c.floating.height+f}px`):p==="right"?(x=`${-f}px`,v=d?w:`${y}px`):p==="left"&&(x=`${c.floating.width+f}px`,v=d?w:`${y}px`),{data:{x,y:v}}}});function te(t){const[e,n="center"]=t.split("-");return[e,n]}const Pn=un,Sn=mn,En=gn;export{Cn as $,An as C,Rn as a,Pn as b,Sn as c,En as d,tn as e,nn as f,on as g,ln as h,rn as i,sn as l,Le as o,en as s,an as u};