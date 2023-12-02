"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4368],{4709:(e,t,n)=>{n.r(t),n.d(t,{default:()=>je});var a=n(7294),i=n(6010),o=n(1944),s=n(5281),l=n(3438),r=n(902),c=n(5893);const d=Symbol("EmptyContext"),u=a.createContext(d);function h(e){let{children:t,name:n,items:i}=e;const o=(0,a.useMemo)((()=>n&&i?{name:n,items:i}:null),[n,i]);return(0,c.jsx)(u.Provider,{value:o,children:t})}function m(){const e=(0,a.useContext)(u);if(e===d)throw new r.i6("DocsSidebarProvider");return e}var b=n(5999),p=n(2466),x=n(6550);function f(e){let{threshold:t}=e;const[n,i]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,p.Ct)();return(0,p.RF)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(o.current?o.current=!1:a>=s?(l(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),function(e){const t=(0,x.TH)(),n=(0,r.D9)(t),i=(0,r.zX)(e);(0,a.useEffect)((()=>{n&&t!==n&&i({location:t,previousLocation:n})}),[i,t,n])}((e=>{e.location.hash&&(o.current=!0,i(!1))})),{shown:n,scrollToTop:()=>s(0)}}const g={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function v(){const{shown:e,scrollToTop:t}=f({threshold:300});return(0,c.jsx)("button",{"aria-label":(0,b.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",s.k.common.backToTopButton,g.backToTopButton,e&&g.backToTopButtonShow),type:"button",onClick:t})}var j=n(1442),k=n(7524),S=n(6668),C=n(9960),_=n(4996),N=n(2263),y=n(9965);function I(e){let{logo:t,alt:n,imageClassName:a}=e;const i={light:(0,_.Z)(t.src),dark:(0,_.Z)(t.srcDark||t.src)},o=(0,c.jsx)(y.Z,{className:t.className,sources:i,height:t.height,width:t.width,alt:n,style:t.style});return a?(0,c.jsx)("div",{className:a,children:o}):o}function T(e){const{siteConfig:{title:t}}=(0,N.Z)(),{navbar:{title:n,logo:a}}=(0,S.L)(),{imageClassName:i,titleClassName:o,...s}=e,l=(0,_.Z)(a?.href||"/"),r=n?"":t,d=a?.alt??r;return(0,c.jsxs)(C.Z,{to:l,...s,...a?.target&&{target:a.target},children:[a&&(0,c.jsx)(I,{logo:a,alt:d,imageClassName:i}),null!=n&&(0,c.jsx)("b",{className:o,children:n})]})}function Z(e){return(0,c.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,c.jsxs)("g",{fill:"#7a7a7a",children:[(0,c.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,c.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const w={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function B(e){let{onClick:t}=e;return(0,c.jsx)("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",w.collapseSidebarButton),onClick:t,children:(0,c.jsx)(Z,{className:w.collapseSidebarButtonIcon})})}var L=n(9689);const A=Symbol("EmptyContext"),E=a.createContext(A);function H(e){let{children:t}=e;const[n,i]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:i})),[n]);return(0,c.jsx)(E.Provider,{value:o,children:t})}var W=n(6043),M=n(8596),R=n(2389);function F(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,c.jsx)("button",{"aria-label":t?(0,b.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,b.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function D(e){let{item:t,onItemClick:n,activePath:o,level:d,index:u,...h}=e;const{items:m,label:b,collapsible:p,className:x,href:f}=t,{docs:{sidebar:{autoCollapseCategories:g}}}=(0,S.L)(),v=function(e){const t=(0,R.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0),[e,t])}(t),j=(0,l._F)(t,o),k=(0,M.Mg)(f,o),{collapsed:_,setCollapsed:N}=(0,W.u)({initialState:()=>!!p&&(!j&&t.collapsed)}),{expandedItem:y,setExpandedItem:I}=function(){const e=(0,a.useContext)(E);if(e===A)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!_),I(e?null:u),N(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:i}=e;const o=(0,r.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&i(!1)}),[t,o,n,i])}({isActive:j,collapsed:_,updateCollapsed:T}),(0,a.useEffect)((()=>{p&&null!=y&&y!==u&&g&&N(!0)}),[p,y,u,N,g]),(0,c.jsxs)("li",{className:(0,i.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(d),"menu__list-item",{"menu__list-item--collapsed":_},x),children:[(0,c.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,c.jsx)(C.Z,{className:(0,i.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!f&&p,"menu__link--active":j}),onClick:p?e=>{n?.(t),f?T(!1):(e.preventDefault(),T())}:()=>{n?.(t)},"aria-current":k?"page":void 0,"aria-expanded":p?!_:void 0,href:p?v??"#":v,...h,children:b}),f&&p&&(0,c.jsx)(F,{collapsed:_,categoryLabel:b,onClick:e=>{e.preventDefault(),T()}})]}),(0,c.jsx)(W.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_,children:(0,c.jsx)(G,{items:m,tabIndex:_?-1:0,onItemClick:n,activePath:o,level:d+1})})]})}var P=n(3919),U=n(9471);const z={menuExternalLink:"menuExternalLink_NmtK"};function O(e){let{item:t,onItemClick:n,activePath:a,level:o,index:r,...d}=e;const{href:u,label:h,className:m,autoAddBaseUrl:b}=t,p=(0,l._F)(t,a),x=(0,P.Z)(u);return(0,c.jsx)("li",{className:(0,i.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),children:(0,c.jsxs)(C.Z,{className:(0,i.Z)("menu__link",!x&&z.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:u,...x&&{onClick:n?()=>n(t):void 0},...d,children:[h,!x&&(0,c.jsx)(U.Z,{})]})},h)}const Y={menuHtmlItem:"menuHtmlItem_M9Kj"};function K(e){let{item:t,level:n,index:a}=e;const{value:o,defaultStyle:l,className:r}=t;return(0,c.jsx)("li",{className:(0,i.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),l&&[Y.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:o}},a)}function V(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,c.jsx)(D,{item:t,...n});case"html":return(0,c.jsx)(K,{item:t,...n});default:return(0,c.jsx)(O,{item:t,...n})}}function q(e){let{items:t,...n}=e;const a=(0,l.f)(t,n.activePath);return(0,c.jsx)(H,{children:a.map(((e,t)=>(0,c.jsx)(V,{item:e,index:t,...n},t)))})}const G=(0,a.memo)(q),$={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function J(e){let{path:t,sidebar:n,className:o}=e;const l=function(){const{isActive:e}=(0,L.nT)(),[t,n]=(0,a.useState)(e);return(0,p.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,c.jsx)("nav",{"aria-label":(0,b.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",$.menu,l&&$.menuWithAnnouncementBar,o),children:(0,c.jsx)("ul",{className:(0,i.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,c.jsx)(G,{items:n,activePath:t,level:1})})})}const Q="sidebar_njMd",X="sidebarWithHideableNavbar_wUlq",ee="sidebarHidden_VK0M",te="sidebarLogo_isFc";function ne(e){let{path:t,sidebar:n,onCollapse:a,isHidden:o}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,S.L)();return(0,c.jsxs)("div",{className:(0,i.Z)(Q,s&&X,o&&ee),children:[s&&(0,c.jsx)(T,{tabIndex:-1,className:te}),(0,c.jsx)(J,{path:t,sidebar:n}),l&&(0,c.jsx)(B,{onClick:a})]})}const ae=a.memo(ne);var ie=n(3102),oe=n(2961);const se=e=>{let{sidebar:t,path:n}=e;const a=(0,oe.e)();return(0,c.jsx)("ul",{className:(0,i.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,c.jsx)(G,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function le(e){return(0,c.jsx)(ie.Zo,{component:se,props:e})}const re=a.memo(le);function ce(e){const t=(0,k.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,c.jsxs)(c.Fragment,{children:[n&&(0,c.jsx)(ae,{...e}),a&&(0,c.jsx)(re,{...e})]})}const de={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ue(e){let{toggleSidebar:t}=e;return(0,c.jsx)("div",{className:de.expandButton,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,c.jsx)(Z,{className:de.expandButtonIcon})})}const he={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function me(e){let{children:t}=e;const n=m();return(0,c.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function be(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:l}=(0,x.TH)(),[r,d]=(0,a.useState)(!1),u=(0,a.useCallback)((()=>{r&&d(!1),!r&&(0,j.n)()&&d(!0),o((e=>!e))}),[o,r]);return(0,c.jsx)("aside",{className:(0,i.Z)(s.k.docs.docSidebarContainer,he.docSidebarContainer,n&&he.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(he.docSidebarContainer)&&n&&d(!0)},children:(0,c.jsx)(me,{children:(0,c.jsxs)("div",{className:(0,i.Z)(he.sidebarViewport,r&&he.sidebarViewportHidden),children:[(0,c.jsx)(ce,{sidebar:t,path:l,onCollapse:u,isHidden:r}),r&&(0,c.jsx)(ue,{toggleSidebar:u})]})})})}const pe={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function xe(e){let{hiddenSidebarContainer:t,children:n}=e;const a=m();return(0,c.jsx)("main",{className:(0,i.Z)(pe.docMainContainer,(t||!a)&&pe.docMainContainerEnhanced),children:(0,c.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced),children:n})})}const fe={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ge(e){let{children:t}=e;const n=m(),[i,o]=(0,a.useState)(!1);return(0,c.jsxs)("div",{className:fe.docsWrapper,children:[(0,c.jsx)(v,{}),(0,c.jsxs)("div",{className:fe.docRoot,children:[n&&(0,c.jsx)(be,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:o}),(0,c.jsx)(xe,{hiddenSidebarContainer:i,children:t})]})]})}var ve=n(5658);function je(e){const t=(0,l.SN)(e);if(!t)return(0,c.jsx)(ve.Z,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,c.jsx)(o.FG,{className:(0,i.Z)(s.k.page.docsDocPage),children:(0,c.jsx)(h,{name:a,items:r,children:(0,c.jsx)(ge,{children:n})})})}},2503:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var a=n(6010),i=n(5999),o=n(6668),s=n(9960);const l={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var r=n(5893);function c(e){let{as:t,id:n,...c}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();if("h1"===t||!n)return(0,r.jsx)(t,{...c,id:void 0});const u=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof c.children?c.children:n});return(0,r.jsxs)(t,{...c,className:(0,a.Z)("anchor",d?l.anchorWithHideOnScrollNavbar:l.anchorWithStickyNavbar,c.className),id:n,children:[c.children,(0,r.jsx)(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u,children:"\u200b"})]})}},5658:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var a=n(6010),i=n(5999),o=n(2503),s=n(5893);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(o.Z,{as:"h1",className:"hero__title",children:(0,s.jsx)(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},6043:(e,t,n)=>{n.d(t,{u:()=>c,z:()=>f});var a=n(7294),i=n(412),o=n(469),s=n(1442),l=n(5893);const r="ease-in-out";function c(e){let{initialState:t}=e;const[n,i]=(0,a.useState)(t??!1),o=(0,a.useCallback)((()=>{i((e=>!e))}),[]);return{collapsed:n,setCollapsed:i,toggleCollapsed:o}}const d={display:"none",overflow:"hidden",height:"0px"},u={display:"block",overflow:"visible",height:"auto"};function h(e,t){const n=t?d:u;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function m(e){let{collapsibleRef:t,collapsed:n,animation:i}=e;const o=(0,a.useRef)(!1);(0,a.useEffect)((()=>{const e=t.current;function a(){const t=e.scrollHeight,n=i?.duration??function(e){if((0,s.n)())return 1;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(t);return{transition:`height ${n}ms ${i?.easing??r}`,height:`${t}px`}}function l(){const t=a();e.style.transition=t.transition,e.style.height=t.height}if(!o.current)return h(e,n),void(o.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(l(),requestAnimationFrame((()=>{e.style.height=d.height,e.style.overflow=d.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{l()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,i])}function b(e){if(!i.Z.canUseDOM)return e?d:u}function p(e){let{as:t="div",collapsed:n,children:i,animation:o,onCollapseTransitionEnd:s,className:r,disableSSRStyle:c}=e;const d=(0,a.useRef)(null);return m({collapsibleRef:d,collapsed:n,animation:o}),(0,l.jsx)(t,{ref:d,style:c?void 0:b(n),onTransitionEnd:e=>{"height"===e.propertyName&&(h(d.current,n),s?.(n))},className:r,children:i})}function x(e){let{collapsed:t,...n}=e;const[i,s]=(0,a.useState)(!t),[r,c]=(0,a.useState)(t);return(0,o.Z)((()=>{t||s(!0)}),[t]),(0,o.Z)((()=>{i&&c(t)}),[i,t]),i?(0,l.jsx)(p,{...n,collapsed:r}):null}function f(e){let{lazy:t,...n}=e;const a=t?x:p;return(0,l.jsx)(a,{...n})}},1442:(e,t,n)=>{function a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}n.d(t,{n:()=>a})}}]);