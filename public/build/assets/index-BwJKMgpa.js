import{r as t,m as i}from"./app-3SIRTf-5.js";import{$ as v}from"./index-Cqu9cwS9.js";import{_ as h,$ as N,a as M,b as _}from"./index-YuXTghCy.js";const x=t.forwardRef((e,r)=>{const{children:o,...n}=e,l=t.Children.toArray(o),c=l.find(T);if(c){const a=c.props.children,m=l.map(C=>C===c?t.Children.count(a)>1?t.Children.only(null):t.isValidElement(a)?a.props.children:null:C);return t.createElement(b,h({},n,{ref:r}),t.isValidElement(a)?t.cloneElement(a,void 0,m):null)}return t.createElement(b,h({},n,{ref:r}),o)});x.displayName="Slot";const b=t.forwardRef((e,r)=>{const{children:o,...n}=e;return t.isValidElement(o)?t.cloneElement(o,{...O(n,o.props),ref:r?N(r,o.ref):o.ref}):t.Children.count(o)>1?t.Children.only(null):null});b.displayName="SlotClone";const P=({children:e})=>t.createElement(t.Fragment,null,e);function T(e){return t.isValidElement(e)&&e.type===P}function O(e,r){const o={...r};for(const n in r){const l=e[n],c=r[n];/^on[A-Z]/.test(n)?l&&c?o[n]=(...m)=>{c(...m),l(...m)}:l&&(o[n]=l):n==="style"?o[n]={...l,...c}:n==="className"&&(o[n]=[l,c].filter(Boolean).join(" "))}return{...e,...o}}function D(e){const r=e+"CollectionProvider",[o,n]=v(r),[l,c]=o(r,{collectionRef:{current:null},itemMap:new Map}),a=p=>{const{scope:s,children:$}=p,f=i.useRef(null),d=i.useRef(new Map).current;return i.createElement(l,{scope:s,itemMap:d,collectionRef:f},$)},m=e+"CollectionSlot",C=i.forwardRef((p,s)=>{const{scope:$,children:f}=p,d=c(m,$),u=M(s,d.collectionRef);return i.createElement(x,{ref:u},f)}),y=e+"CollectionItemSlot",R="data-radix-collection-item",w=i.forwardRef((p,s)=>{const{scope:$,children:f,...d}=p,u=i.useRef(null),S=M(s,u),E=c(y,$);return i.useEffect(()=>(E.itemMap.set(u,{ref:u,...d}),()=>void E.itemMap.delete(u))),i.createElement(x,{[R]:"",ref:S},f)});function A(p){const s=c(e+"CollectionConsumer",p);return i.useCallback(()=>{const f=s.collectionRef.current;if(!f)return[];const d=Array.from(f.querySelectorAll(`[${R}]`));return Array.from(s.itemMap.values()).sort((E,I)=>d.indexOf(E.ref.current)-d.indexOf(I.ref.current))},[s.collectionRef,s.itemMap])}return[{Provider:a,Slot:C,ItemSlot:w},A,n]}const H=t.forwardRef((e,r)=>t.createElement(_.span,h({},e,{ref:r,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})));export{D as $,H as a};
