"use strict";(self.webpackChunkphoto_app=self.webpackChunkphoto_app||[]).push([[467],{6467:function(o,e,n){n.r(e),n.d(e,{default:function(){return S}});var t=n(7640),l=(n(2791),n(9271)),a=n(1413),r=n(184);function i(o){var e=o.title,n=o.backgroundUrl,t=n?{backgroundImage:"url(".concat(n,")")}:{};return(0,r.jsx)("section",{className:"banner",style:t,children:(0,r.jsx)("h1",{className:"banner__title",children:e})})}i.defaultProps={title:"",backgroundUrl:""};var s=i,c=[{value:1,label:"Technology"},{value:2,label:"Education"},{value:3,label:"Nature"},{value:4,label:"Animals"},{value:5,label:"Styles"}],d=n(5705),u=n(6052);function h(o){var e=o.field,n=o.form,t=o.type,l=o.label,i=o.placeholder,s=o.disabled,c=e.name,h=n.errors,p=n.touched,m=h[c]&&p[c];return(0,r.jsxs)(u.cw,{children:[l&&(0,r.jsx)(u.__,{for:c,children:l}),(0,r.jsx)(u.II,(0,a.Z)((0,a.Z)({id:c},e),{},{type:t,disabled:s,placeholder:i,invalid:m})),(0,r.jsx)(d.Bc,{name:c,component:u.AG})]})}h.defaultProps={type:"text",label:"",placeholder:"",disabled:!1};var p=h,m=n(5861),v=n(7757),f=n.n(v);j.defaultProps={name:"",imageUrl:"",onImageUrlChange:null,onRandomButtonBlur:null};var x=function(){var o=Math.trunc(2e3*Math.random());return"https://picsum.photos/id/".concat(o,"/300/300")};function j(o){var e=o.name,n=o.imageUrl,t=o.onImageUrlChange,l=o.onRandomButtonBlur,a=function(){var o=(0,m.Z)(f().mark((function o(){var e;return f().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t&&(e=x(),t(e));case 1:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:"random-photo",children:[(0,r.jsx)("div",{className:"random-photo__button",children:(0,r.jsx)(u.zx,{outline:!0,name:e,color:"primary",onBlur:l,onClick:a,children:"Random a photo"})}),(0,r.jsx)("div",{className:"random-photo__photo",children:n&&(0,r.jsx)("img",{src:n,alt:"Ooops ... not found. Please click random again!",onError:a})})]})}var g=j;function b(o){var e=o.field,n=o.form,t=o.label,l=e.name,a=e.value,i=e.onBlur,s=n.errors,c=n.touched,h=s[l]&&c[l];return(0,r.jsxs)(u.cw,{children:[t&&(0,r.jsx)(u.__,{for:l,children:t}),(0,r.jsx)(g,{name:l,imageUrl:a,onImageUrlChange:function(o){n.setFieldValue(l,o)},onRandomButtonBlur:i}),(0,r.jsx)("div",{className:h?"is-invalid":""}),(0,r.jsx)(d.Bc,{name:l,component:u.AG})]})}b.defaultProps={label:""};var _=b,k=n(4289);function C(o){var e=o.field,n=o.form,t=o.options,l=o.label,i=o.placeholder,s=o.disabled,c=e.name,h=e.value,p=n.errors,m=n.touched,v=p[c]&&m[c],f=t.find((function(o){return o.value===h}));return(0,r.jsxs)(u.cw,{children:[l&&(0,r.jsx)(u.__,{for:c,children:l}),(0,r.jsx)(k.ZP,(0,a.Z)((0,a.Z)({id:c},e),{},{value:f,onChange:function(o){var n=o?o.value:o,t={target:{name:c,value:n}};e.onChange(t)},placeholder:i,isDisabled:s,options:t,className:v?"is-invalid":""})),(0,r.jsx)(d.Bc,{name:c,component:u.AG})]})}C.defaultProps={label:"",placeholder:"",disabled:!1,options:[]};var P=C,y=n(132);function N(o){var e=o.initialValues,n=o.isAddMode,t=y.Ry().shape({title:y.Z_().required("This field is required."),categoryId:y.Rx().required("This field is required.").nullable(),photo:y.Z_().when("categoryId",{is:1,then:y.Z_().required("This field is required."),otherwise:y.Z_().notRequired()})});return(0,r.jsx)(d.J9,{initialValues:e,validationSchema:t,onSubmit:o.onSubmit,children:function(o){var e=o.values,t=o.errors,l=o.touched,a=o.isSubmitting;return console.log({values:e,errors:t,touched:l}),(0,r.jsxs)(d.l0,{children:[(0,r.jsx)(d.Rt,{name:"title",component:p,label:"Title",placeholder:"Eg: Wow nature ..."}),(0,r.jsx)(d.Rt,{name:"categoryId",component:P,label:"Category",placeholder:"What's your photo category?",options:c}),(0,r.jsx)(d.Rt,{name:"photo",component:_,label:"Photo"}),(0,r.jsx)(u.cw,{children:(0,r.jsxs)(u.zx,{type:"submit",color:n?"primary":"success",children:[a&&(0,r.jsx)(u.$j,{size:"sm"}),n?"Add to album":"Update your photo"]})})]})}})}N.defaultProps={onSubmit:null};var R=N,B=n(2777),I=n(6030);var U=function(o){var e=(0,I.I0)(),n=(0,l.k6)(),t=(0,l.UO)().photoId,i=!t,c=(0,I.v9)((function(o){var e=o.photos.find((function(o){return o.id===+t}));return console.log({photos:o.photos,photoId:t,foundPhoto:e}),e}));console.log({photoId:t,editedPhoto:c});var d=i?{title:"",categoryId:null,photo:""}:c;return(0,r.jsxs)("div",{className:"photo-edit",children:[(0,r.jsx)(s,{title:"Pick your amazing photo \ud83d\ude0e"}),(0,r.jsx)("div",{className:"photo-edit__form",children:(0,r.jsx)(R,{onSubmit:function(o){return new Promise((function(t){console.log("Form submit: ",o),setTimeout((function(){if(i){var n=(0,a.Z)((0,a.Z)({},o),{},{id:(r=1e4,s=99999,r+Math.trunc(Math.random()*(s-r)))}),t=(0,B.ZE)(n);console.log({action:t}),e(t)}else{var l=(0,B.tU)(o);e(l)}var r,s}),2e3),n.push("/photos"),t(!0)}))},initialValues:d,isAddMode:i})})]})},w=function(o){var e=o.photo,n=o.onEditClick,t=o.onRemoveClick;return(0,r.jsxs)("div",{className:"photo",children:[(0,r.jsx)("img",{src:e.photo,alt:e.title}),(0,r.jsxs)("div",{className:"photo__overlay",children:[(0,r.jsx)("h3",{className:"photo__title",children:e.title}),(0,r.jsxs)("div",{className:"photo__actions",children:[(0,r.jsx)("div",{children:(0,r.jsx)(u.zx,{outline:!0,size:"sm",color:"light",onClick:function(){n&&n(e)},children:"Edit"})}),(0,r.jsx)("div",{children:(0,r.jsx)(u.zx,{outline:!0,size:"sm",color:"danger",onClick:function(){t&&t(e)},children:"Remove"})})]})]})]})};w.defaultProps={photo:{},onEditClick:null,onRemoveClick:null};var E=w,Z=function(o){var e=o.photoList,n=o.onPhotoEditClick,t=o.onPhotoRemoveClick;return(0,r.jsx)(u.X2,{children:e.map((function(o){return(0,r.jsx)(u.JX,{xs:"12",md:"6",lg:"3",children:(0,r.jsx)(E,{photo:o,onEditClick:n,onRemoveClick:t})},o.title)}))})};Z.defaultProps={photoList:null,onPhotoEditClick:null,onPhotoRemoveClick:null};var A=Z,G={ORANGE_BG:n(4302),BLUE_BG:n(2565),COLORFUL_BG:n(7622),PINK_BG:n(5605)},z=n(1523);var q=function(o){var e=(0,I.v9)((function(o){return o.photos})),n=(0,l.k6)(),t=(0,I.I0)();return(0,r.jsxs)("div",{className:"photo-main",children:[(0,r.jsx)(s,{title:"Your awesome photos \ud83c\udf89",backgroundUrl:G.PINK_BG}),(0,r.jsxs)(u.W2,{className:"text-center",children:[(0,r.jsx)("div",{className:"py-5",children:(0,r.jsx)(z.rU,{to:"/photos/add",children:"Add new photo"})}),(0,r.jsx)(A,{photoList:e,onPhotoEditClick:function(o){console.log("Edit: ",o);var e="/photos/".concat(o.id);n.push(e)},onPhotoRemoveClick:function(o){console.log("Remove: ",o);var e=(0,B.Nm)(o.id);t(e)}})]})]})};var S=function(o){var e=(0,l.$B)();return console.log({match:e}),(0,r.jsxs)(l.rs,{children:[(0,r.jsx)(l.AW,{exact:!0,path:e.url,component:q}),(0,r.jsx)(l.AW,{path:"".concat(e.url,"/add"),component:U}),(0,r.jsx)(l.AW,{path:"".concat(e.url,"/:photoId"),component:U}),(0,r.jsx)(l.AW,{component:t.Z})]})}},2565:function(o,e,n){o.exports=n.p+"static/media/blue-bg.93b683dcd7c104e108ed.jpg"},7622:function(o,e,n){o.exports=n.p+"static/media/colorful-bg.95c0fb342777f6d1bc88.jpg"},4302:function(o,e,n){o.exports=n.p+"static/media/orange-bg.a98c2734b4299e305b7f.jpg"},5605:function(o,e,n){o.exports=n.p+"static/media/pink-bg.d6dafc0aa74a3594ed43.jpg"}}]);
//# sourceMappingURL=467.c542b880.chunk.js.map