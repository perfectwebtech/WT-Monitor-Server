webpackJsonp([3],{626:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){return{dispatch:t}}var a=o(7),l=o.n(a),u=o(170),c=(o.n(u),o(786)),p=o(878),d=o.n(p),h=(o(785),o(784)),f=o(783),b=o(735);o.d(e,"AuthWrapper",function(){return m});var y=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,o,n,i){var r=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&r)for(var a in r)void 0===o[a]&&(o[a]=r[a]);else o||(o=r||{});if(1===s)o.children=i;else if(s>1){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+3];o.children=l}return{$$typeof:t,type:e,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),v=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),m=function(t){function e(){var t,o,r,s;n(this,e);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return o=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),r.state={sidebarOpen:!1},s=o,i(r,s)}return r(e,t),v(e,[{key:"componentWillMount",value:function(){!this.props.isAuthenticated,this.props.dispatch(o.i(b.b)())}},{key:"onSetSidebarOpen",value:function(t){this.setState({sidebarOpen:t})}},{key:"toggleSidebar",value:function(){this.setState({sidebarOpen:!this.state.sidebarOpen})}},{key:"logout",value:function(){this.props.dispatch(requestLogout()),localStorage.removeItem("id_token"),this.props.dispatch(receiveLogout()),this.props.dispatch(push("/login")),console.log("logout")}},{key:"render",value:function(){var t=this.props.users,e=y(h.a,{toggleSidebar:this.toggleSidebar.bind(this),users:t}),n={};return y(d.a,{sidebar:e,open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen.bind(this),className:"bg-gray"},void 0,y("div",{},void 0,y("nav",{className:"w-100 bg-white cf  dt shadow-4 fixed"},void 0,y("a",{className:"dtc v-mid pl4 w1 pointer pv2 bg-blue",onClick:this.toggleSidebar.bind(this)},void 0,y("img",{src:o(846),className:"dib  ",style:{height:"20px"}})),y("a",{className:"dtc v-mid pl4 pointer pv2",onClick:this.toggleSidebar.bind(this)},void 0,"monitor"),y(f.a,{logout:this.logout.bind(this),name:n.FirstName+" "+n.LastName,image:n.image})),y("section",{className:"pt5"},void 0,y("div",{className:" mt3"},void 0,l.a.Children.toArray(this.props.children)))))}}]),e}(l.a.Component),g=o.i(c.a)();e["default"]=o.i(u.connect)(g,s)(m)},694:function(t,e,o){"use strict";o.d(e,"b",function(){return n}),o.d(e,"a",function(){return i});var n="app/AuthWrapper/GET_USERS",i="app/AuthWrapper/RECEIVED_USERS"},735:function(t,e,o){"use strict";function n(){return{type:r.b}}function i(t){return{type:r.a,payload:t}}var r=o(694);e.b=n,e.a=i},783:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=o(7),a=o.n(s),l=o(877),u=o.n(l),c=o(843),p=(o.n(c),o(838)),d=o.n(p),h=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,o,n,i){var r=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&r)for(var a in r)void 0===o[a]&&(o[a]=r[a]);else o||(o=r||{});if(1===s)o.children=i;else if(s>1){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+3];o.children=l}return{$$typeof:t,type:e,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),f=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),b=function(t){function e(){var t,o,r,s;n(this,e);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return o=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),r.state={profileDropdown:!1},s=o,i(r,s)}return r(e,t),f(e,[{key:"handleClickOutside",value:function(t){this.setState({profileDropdown:!1})}},{key:"render",value:function(){var t=this,e=this.props,n=e.name,i=e.image;return h("div",{className:"dib fr "},void 0,h("a",{className:" db pointer pv2 ph3 hover-bg-near-white",onClick:function(){return t.setState({profileDropdown:!t.state.profileDropdown})}},void 0,h("span",{className:"pr1 "},void 0,n),h("img",{src:i,className:"br-100",style:{width:"50px",height:"50px"}}),h("span",{className:"pl1"},void 0,h("img",{src:o(845),style:{width:"10px",height:"10px"}}))),h("ul",{className:d()("absolute list pa0 ma0 bg-white shadow-4",{dn:!this.state.profileDropdown,dib:this.state.profileDropdown}),style:{width:"150px"}},void 0,h("li",{className:"bg-near-white hover-black"},void 0,h("a",{onClick:this.props.logout,className:"w-100 pv2 ph3 db"},void 0,"Logout"))))}}]),e}(a.a.Component);e.a=u()(b)},784:function(t,e,o){"use strict";function n(t){var e=t.toggleSidebar,n=t.users,i=n.map(function(t,e){return s("li",{className:"ph4 pa0 white-70 hover-white mb1"},e,s(r.b,{to:"/"+t+"/screenshots",className:"link db cf ",style:{color:"inherit"}},void 0,s("span",{className:"dib pv2"},void 0,t),s("span",{className:"dib fr bg-flat-primary-dark pa2"},void 0,s("img",{src:o(847),className:"h1"}))))});return s("nav",{className:"h-100 bg-dark-blue sidenav",style:{minWidth:"250px"}},void 0,s("div",{className:" pl4 db bg-navy",style:{paddingTop:"1.5rem",paddingBottom:"1.5rem"}},void 0,s("a",{className:"white-90 ",onClick:e},void 0,"monitor")),a,s("ul",{className:"list pl0 mt2",style:{overflow:"scroll",height:"90%"}},void 0,i))}var i=o(7),r=(o.n(i),o(264)),s=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,o,n,i){var r=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&r)for(var a in r)void 0===o[a]&&(o[a]=r[a]);else o||(o=r||{});if(1===s)o.children=i;else if(s>1){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+3];o.children=l}return{$$typeof:t,type:e,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),a=s("div",{className:"ph3 bg-navy silver"},void 0,s("input",{type:"search",className:"ba  pa2"}),s("button",{type:"search"},void 0,"Search"));e.a=n},785:function(t,e,o){"use strict";var n=o(169);o.i(n.c)({header:{id:"app.containers.AuthWrapper.header",defaultMessage:"This is AuthWrapper container !"}})},786:function(t,e,o){"use strict";var n=o(171),i=function(){return function(t){return t.get("authWrapper")}},r=function(){return o.i(n.a)(i(),function(t){return t.toJS()})};e.a=r},838:function(t,e,o){var n,i;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n))t.push(o.apply(null,n));else if("object"===i)for(var s in n)r.call(n,s)&&n[s]&&t.push(s)}}return t.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof t&&t.exports?t.exports=o:(n=[],i=function(){return o}.apply(e,n),!(void 0!==i&&(t.exports=i)))}()},842:function(t,e,o){e=t.exports=o(174)(),e.push([t.i,"",""])},843:function(t,e,o){var n=o(842);"string"==typeof n&&(n=[[t.i,n,""]]),o(175)(n,{}),n.locals&&(t.exports=n.locals)},845:function(t,e,o){t.exports=o.p+"ca82bc743710e8f84904d035d92bf5cd.svg"},846:function(t,e,o){t.exports=o.p+"a6ec304eb3193059730b1acc5e16ed72.svg"},847:function(t,e,o){t.exports=o.p+"d23df87c10131d54f7b5a3e7388b2226.svg"},877:function(t,e,o){var n,i;!function(r){function s(t,e,o){return function(t,n){var i=e.createClass({statics:{getClass:function(){return t.getClass?t.getClass():t}},getInstance:function(){return t.prototype.isReactComponent?this.refs.instance:this},__outsideClickHandler:function(){},componentDidMount:function(){if("undefined"!=typeof document&&document.createElement){var t,i=this.getInstance();if(n&&"function"==typeof n.handleClickOutside){if(t=n.handleClickOutside(i),"function"!=typeof t)throw new Error("Component lacks a function for processing outside click events specified by the handleClickOutside config option.")}else if("function"==typeof i.handleClickOutside)t=e.Component.prototype.isPrototypeOf(i)?i.handleClickOutside.bind(i):i.handleClickOutside;else{if("function"!=typeof i.props.handleClickOutside)throw new Error("Component lacks a handleClickOutside(event) function for processing outside click events.");t=i.props.handleClickOutside}var r=this.__outsideClickHandler=h(o.findDOMNode(i),i,t,this.props.outsideClickIgnoreClass||c,this.props.preventDefault||!1,this.props.stopPropagation||!1),s=l.length;l.push(this),u[s]=r,this.props.disableOnClickOutside||this.enableOnClickOutside()}},componentWillReceiveProps:function(t){this.props.disableOnClickOutside&&!t.disableOnClickOutside?this.enableOnClickOutside():!this.props.disableOnClickOutside&&t.disableOnClickOutside&&this.disableOnClickOutside()},componentWillUnmount:function(){this.disableOnClickOutside(),this.__outsideClickHandler=!1;var t=l.indexOf(this);t>-1&&(u[t]&&u.splice(t,1),l.splice(t,1))},enableOnClickOutside:function(){var t=this.__outsideClickHandler;if("undefined"!=typeof document){var e=this.props.eventTypes||p;e.forEach||(e=[e]),e.forEach(function(e){document.addEventListener(e,t)})}},disableOnClickOutside:function(){var t=this.__outsideClickHandler;if("undefined"!=typeof document){var e=this.props.eventTypes||p;e.forEach||(e=[e]),e.forEach(function(e){document.removeEventListener(e,t)})}},render:function(){var o=this.props,n={};return Object.keys(this.props).forEach(function(t){n[t]=o[t]}),t.prototype.isReactComponent&&(n.ref="instance"),n.disableOnClickOutside=this.disableOnClickOutside,n.enableOnClickOutside=this.enableOnClickOutside,e.createElement(t,n)}});return function(t,e){var o=t.displayName||t.name||"Component";e.displayName="OnClickOutside("+o+")"}(t,i),i}}function a(r,s){n=[o(7),o(172)],i=function(t,e){return s(r,t,e)}.apply(e,n),!(void 0!==i&&(t.exports=i))}var l=[],u=[],c="ignore-react-onclickoutside",p=["mousedown","touchstart"],d=function(t,e,o){return t===e||(t.correspondingElement?t.correspondingElement.classList.contains(o):t.classList.contains(o))},h=function(t,e,o,n,i,r){return function(e){i&&e.preventDefault(),r&&e.stopPropagation();for(var s=e.target,a=!1;s.parentNode;){if(a=d(s,t,n))return;s=s.parentNode}s===document&&o(e)}};a(r,s)}(this)},878:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(879),r=n(i);e["default"]=r["default"]},879:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},u=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),c=o(7),p=n(c),d=o(172),h=n(d),f=20,b={root:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},sidebar:{zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},content:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"auto",transition:"left .3s ease-out, right .3s ease-out"},overlay:{zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},dragHandle:{zIndex:1,position:"fixed",top:0,bottom:0}},y=function(t){function e(t){i(this,e);var o=r(this,Object.getPrototypeOf(e).call(this,t));return o.state={sidebarWidth:0,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,dragSupported:!1},o.overlayClicked=o.overlayClicked.bind(o),o.onTouchStart=o.onTouchStart.bind(o),o.onTouchMove=o.onTouchMove.bind(o),o.onTouchEnd=o.onTouchEnd.bind(o),o.onScroll=o.onScroll.bind(o),o}return s(e,t),u(e,[{key:"componentDidMount",value:function(){this.setState({dragSupported:"object"===("undefined"==typeof window?"undefined":l(window))&&"ontouchstart"in window}),this.saveSidebarWidth()}},{key:"componentDidUpdate",value:function(){this.isTouching()||this.saveSidebarWidth()}},{key:"onTouchStart",value:function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchStartY:e.clientY,touchCurrentX:e.clientX,touchCurrentY:e.clientY})}}},{key:"onTouchMove",value:function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX,touchCurrentY:t.targetTouches[e].clientY});break}}},{key:"onTouchEnd",value:function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}}},{key:"onScroll",value:function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},{key:"inCancelDistanceOnScroll",value:function(){var t=void 0;return t=this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<f:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<f}},{key:"isTouching",value:function(){return null!==this.state.touchIdentifier}},{key:"overlayClicked",value:function(){this.props.open&&this.props.onSetOpen(!1)}},{key:"saveSidebarWidth",value:function(){var t=h["default"].findDOMNode(this.refs.sidebar).offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})}},{key:"touchSidebarWidth",value:function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)}},{key:"render",value:function(){var t=a({},b.sidebar,this.props.styles.sidebar),e=a({},b.content,this.props.styles.content),o=a({},b.overlay,this.props.styles.overlay),n=this.state.dragSupported&&this.props.touch,i=this.isTouching(),r={className:this.props.rootClassName,style:a({},b.root,this.props.styles.root)},s=void 0;if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",this.props.shadow&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",this.props.shadow&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),i){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-l)+"%)",t.WebkitTransform="translateX("+100*(1-l)+"%)"):(t.transform="translateX(-"+100*(1-l)+"%)",t.WebkitTransform="translateX(-"+100*(1-l)+"%)"),o.opacity=l,o.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?e.right=this.state.sidebarWidth+"px":e.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",o.opacity=1,o.visibility="visible");if(!i&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",e.transition="none",o.transition="none"),n)if(this.props.open)r.onTouchStart=this.onTouchStart,r.onTouchMove=this.onTouchMove,r.onTouchEnd=this.onTouchEnd,r.onTouchCancel=this.onTouchEnd,r.onScroll=this.onScroll;else{var u=a({},b.dragHandle,this.props.styles.dragHandle);u.width=this.props.touchHandleWidth,this.props.pullRight?u.right=0:u.left=0,s=p["default"].createElement("div",{style:u,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return p["default"].createElement("div",r,p["default"].createElement("div",{className:this.props.sidebarClassName,style:t,ref:"sidebar"},this.props.sidebar),p["default"].createElement("div",{className:this.props.overlayClassName,style:o,role:"presentation",tabIndex:"0",onClick:this.overlayClicked}),p["default"].createElement("div",{className:this.props.contentClassName,style:e},s,this.props.children))}}]),e}(p["default"].Component);y.propTypes={children:p["default"].PropTypes.node.isRequired,styles:p["default"].PropTypes.shape({root:p["default"].PropTypes.object,sidebar:p["default"].PropTypes.object,content:p["default"].PropTypes.object,overlay:p["default"].PropTypes.object,dragHandle:p["default"].PropTypes.object}),rootClassName:p["default"].PropTypes.string,sidebarClassName:p["default"].PropTypes.string,contentClassName:p["default"].PropTypes.string,overlayClassName:p["default"].PropTypes.string,sidebar:p["default"].PropTypes.node.isRequired,docked:p["default"].PropTypes.bool,open:p["default"].PropTypes.bool,transitions:p["default"].PropTypes.bool,touch:p["default"].PropTypes.bool,touchHandleWidth:p["default"].PropTypes.number,pullRight:p["default"].PropTypes.bool,shadow:p["default"].PropTypes.bool,dragToggleDistance:p["default"].PropTypes.number,onSetOpen:p["default"].PropTypes.func},y.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{}},e["default"]=y}});