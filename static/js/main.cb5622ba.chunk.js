(window["webpackJsonpgoit-react-hw-03-image-finder"]=window["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{22:function(e,t,a){e.exports={spinner:"style_spinner__2XbSq"}},23:function(e,t,a){},26:function(e,t,a){e.exports=a(70)},3:function(e,t,a){e.exports={photoCard:"style_photoCard__3S1xx",fullscreenButton:"style_fullscreenButton__1XQ0K",stats:"style_stats__3bCkF",statsItem:"style_statsItem__W5j50"}},4:function(e,t,a){e.exports={searchForm:"style_searchForm__1mpRr"}},5:function(e,t,a){e.exports={gallery:"style_gallery___jVbn",button:"style_button__1Mx7t"}},6:function(e,t,a){e.exports={overlay:"style_overlay__2Ab_i",modal:"style_modal__3yE_2"}},70:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(16),r=a.n(l),s=a(17),c=a(18),i=a(24),m=a(19),u=a(25),p=a(20),d=a.n(p),y=a(21),f=a.n(y),g=(a(69),a(22)),h=a.n(g),_=a(4),w=a.n(_),b=function(e){var t=e.onSubmit;return o.a.createElement("form",{className:w.a.searchForm,onSubmit:t},o.a.createElement("input",{className:w.a.searchForm__input,type:"text",autoComplete:"off",placeholder:"Search images..."}))},v=a(3),E=a.n(v),S=function(e){var t=e.props,a=e.toFullView,n=t.id,l=t.webformatURL,r=t.largeImageURL,s=t.comments,c=t.downloads,i=t.likes,m=t.views;return o.a.createElement("li",{className:E.a.photoCard,key:n},o.a.createElement("img",{src:l,alt:"WebFormatImg"}),o.a.createElement("div",{className:E.a.stats},o.a.createElement("p",{className:E.a.statsItem},o.a.createElement("i",{className:"material-icons"},"thumb_up"),i),o.a.createElement("p",{className:E.a.statsItem},o.a.createElement("i",{className:"material-icons"},"visibility"),m),o.a.createElement("p",{className:E.a.statsItem},o.a.createElement("i",{className:"material-icons"},"comment"),s),o.a.createElement("p",{className:E.a.statsItem},o.a.createElement("i",{className:"material-icons"},"cloud_download"),c)),o.a.createElement("button",{type:"button",className:E.a.fullscreenButton,onClick:function(){return a(r)}},o.a.createElement("i",{className:"material-icons"},"zoom_out_map")))};S.defaultProps={id:"",webformatURL:"https://delvin.by/wp-content/uploads/2019/06/empty.png",largeImageURL:"",comments:0,downloads:0,likes:0,views:0};var F=S,N=a(5),k=a.n(N),V=function(e){var t=e.imageList,a=e.toFullView,l=e.loadMore;return o.a.createElement(n.Fragment,null,o.a.createElement("ul",{className:k.a.gallery},t.map((function(e){return o.a.createElement(F,{key:e.id,props:e,toFullView:a})}))),o.a.createElement("button",{className:k.a.button,onClick:l},"Show more"))},x=a(6),C=a.n(x),I=function(e){var t=e.imgSrc,a=e.closeModal;return o.a.createElement("div",{className:C.a.overlay,id:"overlay",onClick:function(e){"overlay"===e.target.id&&a()}},o.a.createElement("img",{className:C.a.modal,src:t,alt:"FullSizePhoto"}))};I.defaultProps={imgSrc:"https://delvin.by/wp-content/uploads/2019/06/empty.png"};var M=I,P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).abortController=new AbortController,a.state={isFullView:!1,imgSrc:"",images:[],spinner:!0},a.query="",a.per_page=12,a.page=1,a.handlePressKey=function(e){"Escape"===e.code&&a.setState({isFullView:!1})},a.loadMore=function(){a.page+=1,a.fetchPhotoData()},a.fetchPhotoData=function(){a.state.spinner||a.setState({spinner:!0});var e=encodeURI(a.query);d.a.get("https://pixabay.com/api/?key=14090322-33bc1de3434a551c0882d475d&q=".concat(e,"&image_type=all&per_page=").concat(a.per_page,"&page=").concat(a.page)).then((function(e){return a.setState((function(t){return{images:t.images.concat(e.data.hits),spinner:!1}}))})).catch((function(e){return console.log(e)}))},a.onSubmit=function(e){e.preventDefault();var t=e.target.querySelector("input").value;a.query!==t&&(a.page=1,a.query=t,a.setState({images:[]}),a.fetchPhotoData())},a.toFullView=function(e){a.setState({isFullView:!0,imgSrc:e})},a.closeModal=function(){a.setState({isFullView:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchPhotoData(this.query),window.addEventListener("keydown",this.handlePressKey)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlePressKey)}},{key:"render",value:function(){var e=this.state,t=e.imgSrc,a=e.isFullView,l=e.images,r=e.spinner;return o.a.createElement(n.Fragment,null,o.a.createElement(b,{onSubmit:this.onSubmit}),r&&o.a.createElement(f.a,{timeout:5e3,className:h.a.spinner}),l[0]&&o.a.createElement(V,{imageList:l,toFullView:this.toFullView,loadMore:this.loadMore}),a&&o.a.createElement(M,{imgSrc:t,closeModal:this.closeModal}))}}]),t}(n.Component),q=a(23),L=a.n(q);r.a.render(o.a.createElement(P,{className:L.a.app}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.cb5622ba.chunk.js.map