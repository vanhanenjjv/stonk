(this.webpackJsonpstonk=this.webpackJsonpstonk||[]).push([[0],{517:function(t,e){},532:function(t,e){},550:function(t,e,n){n(551),t.exports=n(826)},557:function(t,e,n){},826:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"default",(function(){return _}));var r={};n.r(r),n.d(r,"default",(function(){return Q}));n(556),n(557);var c=n(116),o=n.n(c),i=n(352),u=n.n(i),s=n(511),l=n.n(s),d=n(0),j=n.n(d),f=n(69),h=n.n(f),b=n(107),x=n(512),v=n.n(x),O=n(534),g=(n(827),Object(O.b)(v.a)),p=n(831),m=n(837),k={username:"vanhanenjjv",repository:"Stonk",commitHash:"ea57bd7\n",link:"https://github.com/".concat("vanhanenjjv","/").concat("Stonk")},D=n(38),y=function(t){var e=t.children;return Object(D.jsxs)(p.a,{children:[Object(D.jsx)(p.a.Content,{style:{width:"100%",alignSelf:"center",maxWidth:900,padding:"0 16px",margin:"16px 0 0 0"},children:e}),Object(D.jsx)(p.a.Footer,{style:{textAlign:"center"},children:Object(D.jsx)(m.a.Link,{type:"secondary",rel:"noopener",target:"_blank",href:"".concat(k.link,"/commit/").concat(k.commitHash),children:k.commitHash})})]})},w=n(838),C=n(840),S=n(111),A=n(841),I=function(t){var e=t.title,n=t.onBack,a=t.extra;return Object(D.jsx)(w.a,{title:e,subTitle:"",onBack:n,ghost:!1,extra:Object(D.jsxs)(C.b,{size:"middle",children:[a,Object(D.jsx)(S.a,{shape:"circle",size:"large",rel:"noopener",href:k.link,target:"_blank",children:Object(D.jsx)(A.a,{})},"GitHub")]})})},E=n(836),F=n(835),M=n(842),R=function(t){return Object(D.jsxs)(F.a.Dragger,{beforeUpload:function(e){return e.text().then(t.onReceive),!1},maxCount:1,showUploadList:!1,children:[Object(D.jsx)("p",{className:"ant-upload-drag-icon",children:Object(D.jsx)(M.a,{})}),Object(D.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(D.jsx)("p",{className:"ant-upload-hint",children:"more text goes here"})]})},L=n(96);function T(t){var e=t.split(",").map((function(t){return t.trim()})),n=Object(b.a)(e,6),a=n[0],r=n[1],c=n[2],i=n[3],u=n[4],s=n[5];if(!(a&&r&&c&&i&&u&&s))throw new Error("Unable to parse line '".concat(t,"'."));return{date:o()(a),close:Y(r),volume:Number(c),open:Y(i),high:Y(u),low:Y(s),priceChange:Math.abs(Y(u)-Y(s))}}function B(t,e){return t.date.unix()-e.date.unix()}function P(t,e,n){if(e<5)return t;var a=100*(1-n.slice(e-5,e).reduce((function(t,e){return t+e.close}),0)/5/t.open);return Object(L.a)(Object(L.a)({},t),{},{sma5Percentage:a})}var Y=function(t){if("number"===typeof t)return t;var e=String(t);return Number(e.startsWith("$")?e.slice(1):e)},_=function(){return j.a.useReducer((function(t,e){switch(e.type){case"PARSE_FILE":var n=function(t){try{return t.split("\n").slice(1).filter((function(t){return t})).map(T).sort(B).map(P)}catch(e){return console.error(e),[]}}(e.content);return Object(L.a)(Object(L.a)({},t),{},{stockData:n});case"CLEAR_STOCKDATA":return Object(L.a)(Object(L.a)({},t),{},{stockData:[]})}}),{stockData:[]})};n(517);var N=function(t){var e=_(),n=Object(b.a)(e,2),a=n[0].stockData,r=n[1];return j.a.useEffect((function(){0!==a.length&&(t.onUpload(a),r({type:"CLEAR_STOCKDATA"}))}),[a]),Object(D.jsxs)(C.b,{style:{width:"100%"},direction:"vertical",children:[Object(D.jsx)(I,{title:"Upload"}),Object(D.jsx)(E.a,{children:Object(D.jsx)(R,{onReceive:function(t){r({type:"PARSE_FILE",content:t})}})})]})},U=n(833),$=n(213),H=n(121),G=n(839),K=function(t){var e=t.stockData,n=j.a.useMemo((function(){for(var t={current:[],longest:[]},n=1;n<e.length;++n){var a=e[n];e[n-1].close>a.close?t.current=[]:(t.current.push(a),t.current>t.longest&&(t.longest=t.current))}return t.longest}),[e]),a=j.a.useMemo((function(){return[0===n.length?void 0:n[0],0===n.length?void 0:n[n.length-1]]}),[n]),r=Object(b.a)(a,2),c=r[0],o=r[1],i=j.a.useMemo((function(){return n.length}),[n]),u=j.a.useMemo((function(){var t="DD.MM.YYYY",e=null===c||void 0===c?void 0:c.date.format(t),n=null===o||void 0===o?void 0:o.date.format(t);return"".concat(e," - ").concat(n)}),[c,o]),s=j.a.useMemo((function(){var t,e,n=null!==(t=null===c||void 0===c?void 0:c.close)&&void 0!==t?t:0;return(100*((null!==(e=null===o||void 0===o?void 0:o.close)&&void 0!==e?e:0)/n-1)).toFixed(1)}),[c,o]);return Object(D.jsx)(E.a,{title:"Longest bullish trend",children:Object(D.jsxs)($.a,{gutter:8,justify:"space-around",children:[Object(D.jsx)(H.a,{children:Object(D.jsx)(G.a,{title:"Lasted",value:i,suffix:"days"})}),Object(D.jsx)(H.a,{children:Object(D.jsx)(G.a,{title:"From",value:u})}),Object(D.jsx)(H.a,{children:Object(D.jsx)(G.a,{title:"Value increased",value:s,suffix:"%"})})]})})},z=function(t){var e=t.stockData;return Object(D.jsx)(K,{stockData:e})},J=n(533),V=function(t){var e=j.a.useMemo((function(){return t.stockData.map((function(t){return Object(L.a)(Object(L.a)({},t),{},{date:t.date.format("YYYY-MM-DD")})}))}),[t.stockData]);return Object(D.jsx)(E.a,{children:Object(D.jsx)(J.a,{width:400,height:500,xField:"date",yField:["open","close","high","low"],data:e})})},W=n(834),q=function(t){var e=t.stockData;return Object(D.jsx)(W.a,{scroll:{x:!0},columns:[{title:"Date",dataIndex:"date",render:function(t){return o()(t).format("ll")},sorter:function(t,e){return t.date.unix()-e.date.unix()}},{title:"Close",dataIndex:"close",render:function(t){return"$".concat(t)},sorter:function(t,e){return t.close-e.close}},{title:"Volume",dataIndex:"volume",sorter:function(t,e){return t.volume-e.volume}},{title:"Open",dataIndex:"open",render:function(t){return"$".concat(t)},sorter:function(t,e){return t.open-e.open}},{title:"High",dataIndex:"high",render:function(t){return"$".concat(t)},sorter:function(t,e){return t.high-e.high}},{title:"Low",dataIndex:"low",render:function(t){return"$".concat(t)},sorter:function(t,e){return t.low-e.low}},{title:"Change",dataIndex:"priceChange",render:function(t){return"$".concat(t.toFixed(2))},sorter:function(t,e){return t.priceChange-e.priceChange}},{title:"SMA5",dataIndex:"sma5Percentage",render:function(t){return t?"".concat(t.toFixed(2),"%"):"n/a"},sorter:function(t,e){var n,a;return(null!==(n=t.sma5Percentage)&&void 0!==n?n:0)-(null!==(a=e.sma5Percentage)&&void 0!==a?a:0)}}],dataSource:e,rowKey:function(t){return t.date.unix()}})},Q=function(t){var e,n,a={stockData:null!==(e=null===t||void 0===t?void 0:t.stockData)&&void 0!==e?e:[],stockDataInRange:null!==(n=null===t||void 0===t?void 0:t.stockData)&&void 0!==n?n:[],range:[null,null]};return j.a.useReducer((function(t,e){switch(e.type){case"SET_RANGE":return Object(L.a)(Object(L.a)({},t),{},{stockDataInRange:t.stockData.filter((function(t){var n,a,r,c,i=o()(t.date),u=null===(n=e.range)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.subtract(1,"day"),s=null===(r=e.range)||void 0===r||null===(c=r[1])||void 0===c?void 0:c.add(1,"day");return u&&!s?i.isAfter(u,"day"):!u&&s?i.isBefore(s,"day"):!u||!s||i.isBetween(u,s,"day")})),range:e.range})}}),a)};n(532);var X=function(t){var e=Q({stockData:t.stockData}),n=Object(b.a)(e,2),a=n[0],r=n[1];return Object(D.jsxs)(C.b,{direction:"vertical",style:{width:"100%"},children:[Object(D.jsx)(I,{title:"Analytics",onBack:t.onBack,extra:Object(D.jsx)(g.RangePicker,{onChange:function(t){return r({type:"SET_RANGE",range:null!==t&&void 0!==t?t:[null,null]})}})}),Object(D.jsx)(U.a,{children:"Statistics"}),Object(D.jsx)(z,{stockData:a.stockData}),Object(D.jsx)(U.a,{children:"Chart"}),Object(D.jsx)(V,{stockData:a.stockData}),Object(D.jsx)(U.a,{children:"Table"}),Object(D.jsx)(q,{stockData:a.stockData})]})},Z=function(){var t=j.a.useState([]),e=Object(b.a)(t,2),n=e[0],a=e[1],r=j.a.useCallback((function(){return a([])}),[]);return Object(D.jsx)(y,{children:0===n.length?Object(D.jsx)(N,{onUpload:a}):Object(D.jsx)(X,{onBack:r,stockData:n})})},tt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,843)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};o.a.extend(u.a),o.a.extend(l.a),h.a.render(Object(D.jsx)(j.a.StrictMode,{children:Object(D.jsx)(Z,{})}),document.getElementById("root")),tt()}},[[550,1,2]]]);
//# sourceMappingURL=main.66f5679d.chunk.js.map