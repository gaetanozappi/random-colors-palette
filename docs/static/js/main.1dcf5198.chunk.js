(this["webpackJsonprandom-colors-palette"]=this["webpackJsonprandom-colors-palette"]||[]).push([[0],{104:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=(a(104),a(49)),i=a(7),s=a(39),f=a(24),d=a(13),u=a(67),b=a(165),j=a(120),h=a(172),m=a(173),O=a(186),p=a(175),x=a(176),v=a(177),g=a(119),y=a(183),A=a(184),C=a(178),k=a(156),S=a(89),w=a(15),N=a(174),B=a(68),I=a(69),z=a(86),F=a.n(z),T=a(187),G=a(164),W=a(189),M=a(179),E=a(166),H=a(167),q=a(182),P=a(180),R=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.join(" ")},L=(a(56),function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.reduce((function(n,r,c){return a.length<t&&a.push(r),a.length!==t&&c!==e.length-1||(n.push(a),a=[]),n}),[])}),V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string",a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!a)return null;a.shift();var n=a.map((function(e){return parseInt(e,16)})),r=Object(f.a)(n,3),c=r[0],o=r[1],l=r[2];switch(t){case"obj":return{r:c,g:o,b:l};case"array":return[c,o,l];default:return"rgb(".concat(c,", ").concat(o,", ").concat(l,")")}},D=function(e){var t=V(e,"obj");return(299*t.r+587*t.g+114*t.b)/1e3>=128?"#000000":"#FFFFFF"},J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string",a=0,n=0,r=0;4===e.length?(a="0x".concat(e[1]).concat(e[1]),n="0x".concat(e[2]).concat(e[2]),r="0x".concat(e[3]).concat(e[3])):7===e.length&&(a="0x".concat(e[1]).concat(e[2]),n="0x".concat(e[3]).concat(e[4]),r="0x".concat(e[5]).concat(e[6])),a/=255,n/=255,r/=255;var c=Math.min(a,n,r),o=Math.max(a,n,r),l=o-c,i=0,s=0,f=0;switch(i=0===l?0:o===a?(n-r)/l%6:o===n?(r-a)/l+2:(a-n)/l+4,(i=Math.round(60*i))<0&&(i+=360),f=(o+c)/2,s=+(100*(s=0===l?0:l/(1-Math.abs(2*f-1)))).toFixed(1),f=+(100*f).toFixed(1),t){case"obj":return{h:i,s:s,l:f};case"array":return[i,s,f];default:return"hsl(".concat(i,", ").concat(s,"%, ").concat(f,"%)")}},$=function(e,t){switch(t){case"rgb":return V(e);case"rgb-obj":return V(e,"obj");case"rgb-array":return V(e,"array");case"hsl":return J(e);case"hsl-obj":return J(e,"obj");case"hsl-array":return J(e,"array");default:return e}},_=function(e){return e.split("").reduce((function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e}),0)},U=function(e,t){return"number"===typeof t?t:e%Math.abs(t[1]-t[0])+t[0]},K={red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},deepPurple:{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},lightBlue:{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},lightGreen:{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},deepOrange:{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},blueGrey:{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"}},Q=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","grey","blueGrey"],X=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"],Y=["hex","rgb","hsl"],Z=a(161),ee=a(3);function te(e){var t=e.darkState,a=Object(k.a)((function(e){return{title:{color:t?"#ffffff":"#343a40",textShadow:"3px 3px 2px ".concat(t?"rgba(0, 0, 0, 1)":"rgba(150, 150, 150, 1)")}}}))(),r=Object(n.useState)({uniqRandom:[],text:["random","colors","palette"],format:"hex",textContrast:!0,typeObj:!1}),c=Object(f.a)(r,2),o=c[0],l=c[1],s=o.uniqRandom,d=o.text,u=o.textContrast,b=o.format,j=o.typeObj;Object(n.useEffect)((function(){console.log("tt",j);var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.text,a=void 0===t?new Date:t,n=e.format,r=void 0===n?"hex":n,c=e.textContrast,o=void 0!==c&&c,l=e.typeObj,s=void 0===l||l;return""===a&&(a=new Date),Array.isArray(a)||(a=[a.toString()]),a.map((function(e){var t=Math.abs(_(String(e))),a=U(t,[0,18]),n=U(t,[0,13]),c=Object(f.a)(Object.entries(K)[a],2),l=c[0],d=c[1],u=Object(f.a)(Object.entries(d)[n],2),b=u[0],j=u[1];return s?Object(i.a)({hue:l,shade:b,value:$(j,r)},o&&{textContrast:D(j)}):$(j,r)}))}({text:d,format:b,textContrast:u,typeObj:j});l((function(t){return Object(i.a)(Object(i.a)({},t),{},{uniqRandom:e})}))}),[d,b,u,j]);return console.log(o),Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)("h1",{className:R(a.title,"text-6xl font-bold hp"),children:["uniq",Object(ee.jsx)("span",{className:"text-primary",children:"Color"})]}),Object(ee.jsx)("div",{style:{marginBottom:12},children:Object(ee.jsx)(P.a,{freeSolo:!0,multiple:!0,id:"text-exclude-outlined",options:[],getOptionLabel:function(e){return e},defaultValue:d,filterSelectedOptions:!0,renderTags:function(e,t){return e.map((function(e,a){var n,r,c;return Object(ee.jsx)(O.a,Object(i.a)(Object(i.a)({label:e,size:"small"},t({index:a})),{},{style:{backgroundColor:(null===(n=s[a])||void 0===n?void 0:n.value)||s[a],color:null===(r=s[a])||void 0===r?void 0:r.textContrast},deleteIcon:Object(ee.jsx)(Z.a,{style:{color:null===(c=s[a])||void 0===c?void 0:c.textContrast}})}))}))},renderInput:function(e){return Object(ee.jsx)(T.a,Object(i.a)(Object(i.a)({},e),{},{variant:"outlined",label:"Text",placeholder:"Text",size:"small",fullWidth:!0}))},onChange:function(e,t){return l((function(e){return Object(i.a)(Object(i.a)({},e),{},{text:t})}))}})}),Object(ee.jsx)("div",{style:{marginBottom:12},children:Object(ee.jsxs)(G.a,{variant:"outlined",size:"small",fullWidth:!0,className:a.formControl,children:[Object(ee.jsx)(W.a,{id:"demo-simple-select-outlined-label",children:"Format"}),Object(ee.jsx)(M.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:b,onChange:function(e){var t=e.target.value;return l((function(e){return Object(i.a)(Object(i.a)({},e),{},{format:t})}))},label:"Format",children:Y.map((function(e){return Object(ee.jsx)(E.a,{value:e,children:e},e)}))})]})}),j&&Object(ee.jsx)(H.a,{control:Object(ee.jsx)(q.a,{checked:u,onChange:function(e){var t=e.target.checked;return l((function(e){return Object(i.a)(Object(i.a)({},e),{},{textContrast:t})}))},name:"textContrast",color:"primary"}),label:"Text Contrast"}),Object(ee.jsx)("div",{style:{marginBottom:12},children:Object(ee.jsxs)(G.a,{variant:"outlined",size:"small",fullWidth:!0,className:a.formControl,children:[Object(ee.jsx)(W.a,{id:"demo-simple-select-outlined-label",children:"Format"}),Object(ee.jsxs)(M.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:j,onChange:function(e){var t=e.target.value;return l((function(e){return Object(i.a)(Object(i.a)({},e),{},{typeObj:t})}))},label:"Format",children:[Object(ee.jsx)(E.a,{value:!0,children:"Type object"}),Object(ee.jsx)(E.a,{value:!1,children:"Type not object"})]})]})}),Object(ee.jsx)("div",{style:{marginBottom:12},children:s.map((function(e,t){var a=e.hue,n=e.shade,r=e.value,c=e.textContrast;return function(e){var t=e.hue,a=void 0===t?"":t,n=e.shade,r=void 0===n?"":n,c=e.value,o=e.textContrast,l=void 0===o?"#000":o,s=e.key;return Object(ee.jsxs)("div",{style:{backgroundColor:c,padding:8,borderRadius:4,marginBottom:4,color:l},children:[a,Object(ee.jsxs)("div",{style:{textAlign:"left"},children:[r," ",Object(ee.jsx)("span",{style:Object(i.a)({},a&&{float:"right"}),children:c})]})]},"".concat(a,"-").concat(r,"-").concat(s))}(Object(i.a)(Object(i.a)(Object(i.a)({},a&&{hue:a,shade:n,value:r,textContrast:c}),!a&&{value:e}),{},{key:t}))}))})]})}var ae=a(185),ne=a(169),re=a(53),ce=a(171),oe=a(168),le=a(170);function ie(e){var t,a,r=e.darkState,c=Object(k.a)((function(e){return{title:{color:r?"#ffffff":"#343a40",textShadow:"3px 3px 2px ".concat(r?"rgba(0, 0, 0, 1)":"rgba(150, 150, 150, 1)")}}}))(),o=Object(n.useState)({number:12,colors:[],hues:["red","blue","lightBlue","cyan"],excludeHues:["red"],shades:["100","300","400","500","700"],excludeShades:["400"],numberColorGroup:1,repeat:!1,format:"hex",textContrast:!0}),s=Object(f.a)(o,2),d=s[0],u=s[1],b=d.number,j=d.colors,h=d.hues,m=d.shades,p=d.excludeHues,x=d.excludeShades,v=d.numberColorGroup,y=d.repeat,A=d.format,C=d.textContrast,S=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.number,a=void 0===t?1:t,n=e.hues,r=void 0===n?Q:n,c=e.shades,o=void 0===c?X:c,s=e.excludeHues,f=void 0===s?[]:s,d=e.excludeShades,u=void 0===d?[]:d,b=e.repeat,j=void 0!==b&&b,h=e.numberColorGroup,m=void 0===h?1:h,O=e.filter,p=void 0!==O&&O,x=e.format,v=void 0===x?"hex":x,g=e.typeObj,y=void 0===g||g,A=e.textContrast,C=void 0!==A&&A;if(isNaN(a)&&(a=1),a<1)return{combination:0,error:"The number must be greater than zero."};var k=r.filter((function(e){return!f.includes(e)})),S=o.filter((function(e){return!u.includes(e)})),w=function(e){return Math.floor(Math.random()*e.length)},N=function(e,t){var a=e.length,n=Array.from(Array(a).keys()).filter((function(e){return!t.includes(e)}));return n[w(n)]},B=K;delete B.common,B=Object.entries(B).filter((function(e){return k.includes(e[0])})).map((function(e){return{hue:e[0],shades:Object.fromEntries(Object.entries(e[1]).reduce((function(e,t,a,n){return S.includes(t[0])&&!e.map((function(e){return e[1]})).includes(t[1])&&e.push(t),e}),[]))}}));var I=j?a:B.reduce((function(e,t){return e+Object.entries(t.shades).length}),0);if(!j&&a>I)return console.error(I),{combination:I,error:"The number of colors required exceeds those that are available."};var z=[],F=Object(l.a)(Array(a).keys()).reduce((function(e,t){var a;p?(z.length===B.length&&(z=[]),a=z.length<B.length?N(B,z):w(B),z.push(a)):a=w(B);var n=B[a],r=w(Object.entries(n.shades)),c=Object.entries(n.shades)[r];return y?e.push(Object(i.a)({hue:n.hue,shade:c[0],value:$(c[1],v)},C&&{textContrast:D(c[1])})):e.push($(c[1],v)),j||(delete B[a].shades[c[0]],0===Object.entries(B[a].shades).length&&B.splice(a,1)),e}),[]),T=m>1?Math.ceil(a/m):1;return m>1&&(F=L(F,m)),{combination:I,color:F,numberGroup:T}}({number:b,hues:h,shades:m,excludeHues:p,excludeShades:x,numberColorGroup:v,repeat:y,format:A,textContrast:C});u((function(t){return Object(i.a)(Object(i.a)({},t),{},{colors:e})}))};Object(n.useEffect)((function(){S()}),[b,h,m,p,x,v,y,C,A]);var w=function(e){var t=e.hue,a=e.shade,n=e.value,r=e.textContrast,c=e.key;return Object(ee.jsxs)("div",{style:{backgroundColor:n,padding:8,borderRadius:4,marginBottom:4,color:r},children:[t,Object(ee.jsxs)("div",{style:{textAlign:"left"},children:[a," ",Object(ee.jsx)("span",{style:{float:"right"},children:n})]})]},"".concat(t,"-").concat(a,"-").concat(c))};return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)("h1",{className:R(c.title,"text-6xl font-bold hp"),children:["random",Object(ee.jsxs)("span",{className:"text-primary",children:["Color(",null===j||void 0===j?void 0:j.combination,")"]})]}),Object(ee.jsx)("div",{style:{marginBottom:12},children:Object(ee.jsx)(T.a,{id:"number",label:"Number",placeholder:"Number",variant:"outlined",onChange:function(e){var t=e.target.value;return u((function(e){return Object(i.a)(Object(i.a)({},e),{},{number:parseInt(t)})}))},value:b||"",size:"small",fullWidth:!0})}),Object(ee.jsx)("div",{style:{marginBottom:12},children:Object(ee.jsx)(P.a,{multiple:!0,id:"hues-outlined",options:Q,getOptionLabel:function(e){return e},defaultValue:h,filterSelectedOptions:!0,renderTags:function(e,t){return e.map((function(e,a){return Object(ee.jsx)(O.a,Object(i.a)(Object(i.a)({label:e,size:"small"},t({index:a})),{},{style:{backgroundColor:K[e][500],color:D(K[e][500])},deleteIcon:Object(ee.jsx)(Z.a,{style:{color:D(K[e][500])}})}))}))},renderInput:function(e){return Object(ee.jsx)(T.a,Object(i.a)(Object(i.a)({},e),{},{variant:"outlined",label:"Hues",placeholder:"Hues",size:"small",fullWidth:!0}))},onChange:function(e,t){return u((function(e){return Object(i.a)(Object(i.a)({},e),{},{hues:t})}))}})}),Object(ee.jsx)("div",{style:{marginBottom:12},children:Object(ee.jsx)(P.a,{multiple:!0,id:"hues-exclude-outlined",options:Q,getOptionLabel:function(e){return e},defaultValue:p,filterSelectedOptions:!0,renderTags:function(e,t){return e.map((function(e,a){return Object(ee.jsx)(O.a,Object(i.a)(Object(i.a)({label:e,size:"small"},t({index:a})),{},{style:{backgroundColor:K[e][500],color:D(K[e][500])},deleteIcon:Object(ee.jsx)(Z.a,{style:{color:D(K[e][500])}})}))}))},renderInput:function(e){return Object(ee.jsx)(T.a,Object(i.a)(Object(i.a)({},e),{},{variant:"outlined",label:"Exclude Hues",placeholder:"Exclude Hues",size:"small",fullWidth:!0}))},onChange:function(e,t){return u((function(e){return Object(i.a)(Object(i.a)({},e),{},{excludeHues:t})}))}})}),Object(ee.jsx)("div",{style:{marginBottom:12},children:Object(ee.jsx)(P.a,{multiple:!0,id:"shades-outlined",options:X,getOptionLabel:function(e){return e},defaultValue:m,filterSelectedOptions:!0,renderTags:function(e,t){return e.map((function(e,a){return Object(ee.jsx)(O.a,Object(i.a)(Object(i.a)({label:e,size:"small"},t({index:a})),{},{style:{backgroundColor:K.blue[e],color:D(K.blue[e])},deleteIcon:Object(ee.jsx)(Z.a,{style:{color:D(K.blue[500])}})}))}))},renderInput:function(e){return Object(ee.jsx)(T.a,Object(i.a)(Object(i.a)({},e),{},{variant:"outlined",label:"Shades",placeholder:"Shades",size:"small",fullWidth:!0}))},onChange:function(e,t){return u((function(e){return Object(i.a)(Object(i.a)({},e),{},{shades:t})}))}})}),Object(ee.jsx)("div",{style:{marginBottom:12},children:Object(ee.jsx)(P.a,{multiple:!0,id:"shades-exclude-outlined",options:X,getOptionLabel:function(e){return e},defaultValue:x,filterSelectedOptions:!0,renderTags:function(e,t){return e.map((function(e,a){return Object(ee.jsx)(O.a,Object(i.a)(Object(i.a)({label:e,size:"small"},t({index:a})),{},{style:{backgroundColor:K.blue[e],color:D(K.blue[e])},deleteIcon:Object(ee.jsx)(Z.a,{style:{color:D(K.blue[500])}})}))}))},renderInput:function(e){return Object(ee.jsx)(T.a,Object(i.a)(Object(i.a)({},e),{},{variant:"outlined",label:"Exclude Shades",placeholder:"Exclude Shades",size:"small",fullWidth:!0}))},onChange:function(e,t){return u((function(e){return Object(i.a)(Object(i.a)({},e),{},{excludeShades:t})}))}})}),Object(ee.jsx)("div",{style:{marginBottom:12},children:Object(ee.jsx)(T.a,{id:"number-colors-group",label:"Number of colors for each group",placeholder:"Number of colors for each group",variant:"outlined",onChange:function(e){var t=e.target.value;return u((function(e){return Object(i.a)(Object(i.a)({},e),{},{numberColorGroup:parseInt(t)})}))},value:v||"",size:"small",fullWidth:!0})}),Object(ee.jsx)("div",{style:{marginBottom:12},children:Object(ee.jsxs)(G.a,{variant:"outlined",size:"small",fullWidth:!0,className:c.formControl,children:[Object(ee.jsx)(W.a,{id:"demo-simple-select-outlined-label",children:"Format"}),Object(ee.jsx)(M.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:A,onChange:function(e){var t=e.target.value;return u((function(e){return Object(i.a)(Object(i.a)({},e),{},{format:t})}))},label:"Format",children:Y.map((function(e){return Object(ee.jsx)(E.a,{value:e,children:e},e)}))})]})}),Object(ee.jsx)(H.a,{control:Object(ee.jsx)(q.a,{checked:y,onChange:function(e){var t=e.target.checked;return u((function(e){return Object(i.a)(Object(i.a)({},e),{},{repeat:t})}))},name:"repeat",color:"primary"}),label:"Repeat"}),Object(ee.jsx)(H.a,{control:Object(ee.jsx)(q.a,{checked:C,onChange:function(e){var t=e.target.checked;return u((function(e){return Object(i.a)(Object(i.a)({},e),{},{textContrast:t})}))},name:"textContrast",color:"primary"}),label:"Text Contrast"}),Object(ee.jsx)(g.a,{"aria-label":"delete",onClick:S,children:Object(ee.jsx)(oe.a,{style:{cursor:"pointer"}})}),(null===j||void 0===j?void 0:j.error)&&Object(ee.jsxs)("div",{style:{marginBottom:12},children:["There is a problem, the number of possible combinations is"," ",null===j||void 0===j?void 0:j.combination]}),1===(null===j||void 0===j?void 0:j.numberGroup)?null===j||void 0===j||null===(t=j.color)||void 0===t?void 0:t.map((function(e,t){var a=e.hue,n=e.shade,r=e.value,c=e.textContrast;return w({hue:a,shade:n,value:r,textContrast:c,key:t})})):null===j||void 0===j||null===(a=j.color)||void 0===a?void 0:a.map((function(e,t){return Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{expandIcon:Object(ee.jsx)(le.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(ee.jsxs)(re.a,{className:c.heading,children:["Group: ",t," (",e.length,")"]})}),Object(ee.jsx)(ce.a,{children:Object(ee.jsx)("div",{style:{flex:1},children:e.map((function(e,t){var a=e.hue,n=e.shade,r=e.value,c=e.textContrast;return w({hue:a,shade:n,value:r,textContrast:c,key:t})}))})})]},"group".concat(t))}))]})}function se(e){var t=e.darkState,a=Object(k.a)((function(e){return{title:{color:t?"#ffffff":"#343a40",textShadow:"3px 3px 2px ".concat(t?"rgba(0, 0, 0, 1)":"rgba(150, 150, 150, 1)")}}}))();return Object(ee.jsxs)("div",{className:"text-center",children:[Object(ee.jsx)("h1",{className:R(a.title,"text-6xl font-bold hp"),children:"404"}),Object(ee.jsx)(re.a,{paragraph:!0,variant:"h5",color:"textSecondary",children:"We are sorry but we could not find the page you are looking."})]})}a(115);var fe=240;var de=function(e){var t=e.wind,a=void 0!==t?function(){return t().document.body}:void 0,n=window.matchMedia("(prefers-color-scheme: dark)").matches,c=localStorage.getItem("dark"),o=null===c?n:"true"===c,z=Object(d.f)().pathname.replace("/","");""===z&&(z="about");var T=r.a.useState({mobileOpen:!1,darkState:o,repo:[]}),G=Object(f.a)(T,2),W=G[0],M=G[1],E=W.mobileOpen,H=W.darkState,q=(W.repo,Object(k.a)((function(e){var t;return{root:{display:"flex"},drawer:Object(s.a)({},e.breakpoints.up("sm"),{width:fe,flexShrink:0}),appBar:Object(s.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(fe,"px)"),marginLeft:fe}),menuButton:(t={marginRight:e.spacing(2)},Object(s.a)(t,e.breakpoints.up("sm"),{display:"none"}),Object(s.a)(t,"backgroundColor",H?B.a[900]:I.a[500]),t),toolbar:e.mixins.toolbar,drawerPaper:{width:fe,color:"#ffffff",backgroundColor:H?B.a[900]:I.a[500]},content:{flexGrow:1,padding:e.spacing(3)}}}))),P=H?"dark":"light",R=H?B.a[900]:I.a[500],L=H?B.a[800]:I.a[300],V=Object(S.a)({palette:{type:P,primary:{main:R},secondary:{main:L}}}),D=q(),J=Object(w.a)(),$=function(){return M((function(e){return Object(i.a)(Object(i.a)({},e),{},{mobileOpen:!E})}))},_=r.a.useCallback((function(){localStorage.setItem("dark",!H),M((function(e){return Object(i.a)(Object(i.a)({},e),{},{darkState:!e.darkState})}))}),[]),U=[{path:"/",obj:Object(ee.jsx)(te,{darkState:H})},{path:"uniqColor",obj:Object(ee.jsx)(te,{darkState:H})},{path:"randomColor",obj:Object(ee.jsx)(ie,{darkState:H})}];r.a.useEffect((function(){Promise.all([fetch("https://api.github.com/users/gaetanozappi/repos?per_page=1000"),fetch("https://api.github.com/users/TheCaponeBrothers/repos?per_page=1000")]).then((function(e){var t=Object(f.a)(e,2),a=t[0],n=t[1];return Promise.all([a.json(),n.json()])})).then((function(e){var t=Object(f.a)(e,2),a=t[0],n=t[1];return M((function(e){return Object(i.a)(Object(i.a)({},e),{},{repo:[].concat(Object(l.a)(e.repo),Object(l.a)(a),Object(l.a)(n))})}))})).catch((function(e){console.error("Error",e)}))}),[]);var K=Object(ee.jsxs)("div",{className:"mt-32",children:[Object(ee.jsx)("div",{className:D.toolbar}),Object(ee.jsx)(b.a,{children:[{title:"uniqColor",path:"uniqColor"},{title:"randomColor",path:"randomColor"}].map((function(e,t){var a=e.title,n=e.path,r=e.icon,c=e.badge;return Object(ee.jsx)(u.b,{to:"/".concat(n),children:Object(ee.jsxs)(j.a,{button:!0,onClick:function(){return e=n,M((function(t){return Object(i.a)(Object(i.a)({},t),{},{page:e})}));var e},children:[Object(ee.jsx)(h.a,{style:{color:n===z?"#ffffff":"#ffffff80"},children:r}),Object(ee.jsx)(m.a,{primary:Object(ee.jsx)("span",{className:"font-bold",children:a}),style:{color:n===z?"#ffffff":"#ffffff80"}}),c&&Object(ee.jsx)(O.a,{label:c,size:"small",color:"secondary",className:"font-bold",style:{color:"#ffffff"}})]},a)},a)}))})]});return Object(ee.jsx)(N.a,{theme:V,children:Object(ee.jsxs)("div",{className:D.root,children:[Object(ee.jsx)(p.a,{}),Object(ee.jsx)(x.a,{position:"fixed",className:D.appBar,style:{backgroundColor:H?"#303030":B.a[50],boxShadow:"none"},children:Object(ee.jsxs)(v.a,{className:"shadow-none",children:[Object(ee.jsx)(g.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:$,className:D.menuButton,children:Object(ee.jsx)(C.a,{})}),Object(ee.jsx)("div",{className:"ml-auto text-right flex",children:Object(ee.jsx)(F.a,{onChange:_,checked:H,size:60})})]})}),Object(ee.jsxs)("nav",{className:D.drawer,"aria-label":"mailbox folders",children:[Object(ee.jsx)(y.a,{smUp:!0,implementation:"css",children:Object(ee.jsx)(A.a,{container:a,variant:"temporary",anchor:"rtl"===J.direction?"right":"left",open:E,onClose:$,classes:{paper:D.drawerPaper},ModalProps:{keepMounted:!0},children:K})}),Object(ee.jsx)(y.a,{xsDown:!0,implementation:"css",children:Object(ee.jsx)(A.a,{classes:{paper:D.drawerPaper},variant:"permanent",open:!0,children:K})})]}),Object(ee.jsxs)("main",{className:D.content,children:[Object(ee.jsx)("div",{className:D.toolbar}),Object(ee.jsxs)(d.c,{children:[U.map((function(e,t){var a=e.path,n=e.obj;return Object(ee.jsx)(d.a,{exact:!0,path:"/".concat(a),component:function(){return n}},t)})),Object(ee.jsx)(d.a,{component:function(){return Object(ee.jsx)(se,{darkState:H})}})]})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(ee.jsx)(u.a,{basename:"/",children:Object(ee.jsx)(de,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.1dcf5198.chunk.js.map