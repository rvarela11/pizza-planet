(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5362:function(e,t,a){e.exports=a(5546)},5407:function(e,t,a){},5492:function(e,t,a){},5496:function(e,t,a){},5499:function(e,t,a){},5526:function(e,t,a){},5529:function(e,t,a){},5532:function(e,t,a){},5535:function(e,t,a){},5538:function(e,t,a){},5546:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),i=a.n(c),o=a(27),l=a(5559),m=a(129),u=a(5558),s=a(142),p=a(131),d=a(5),f=a(143),v=a(133),g=a.n(v),h=a(13),E={cartItems:[],totalNumberOfItems:[],selectedPizzaSizeFromMenu:null},z={Mutation:{updatePizzaSizeByName:function(e,t,a){var n=t.selectedPizzaSizeFromMenu;return a.cache.writeData({data:{selectedPizzaSizeFromMenu:n.toUpperCase()}}),null},addItemToCart:function(e,t,a){var n=t.name,r=t.totalPrice,c=t.totalToppings;return a.cache.writeData({data:{cartItems:E.cartItems.push({name:n,totalPrice:r,totalToppings:c,__typename:"cartItem"}),totalNumberOfItems:E.totalNumberOfItems.push(1)}}),null},removeItemFromCart:function(e,t,a){var n=t.index,r=a.cache,c=E.cartItems;c.splice(n,1);var i=E.totalNumberOfItems;i.splice(n,1);var o=i.reduce(function(e,t){return e+t},0);return r.writeData({data:{cartItems:c,totalNumberOfItems:o}}),null}}},b=a(5560),y=a(5557),N=a(5555),P=a(43),T=a.n(P),I=a(136),_=a.n(I),O=a(137),S=a(15),k=a(16),x=a.n(k);function j(){var e=Object(S.a)(["\n    query getTotalNumberOfItems {\n        totalNumberOfItems @client\n    }\n"]);return j=function(){return e},e}var w=x()(j()),M=(a(5407),function(){return r.a.createElement(h.Query,{query:w},function(e){var t=e.data.totalNumberOfItems;return e.loading?null:r.a.createElement("div",{className:"header"},r.a.createElement(N.a,{to:"/",className:"link header__logo"}),r.a.createElement(N.a,{to:"/cart",className:"link"},r.a.createElement(T.a,null,r.a.createElement(_.a,{badgeContent:t,color:"secondary",invisible:0===t.length||0===t},r.a.createElement(O.a,null)))))})}),F=a(5556);function C(){var e=Object(S.a)(["\n    mutation updatePizzaSizeByName($selectedPizzaSizeFromMenu: String) {\n        updatePizzaSizeByName(selectedPizzaSizeFromMenu: $selectedPizzaSizeFromMenu) @client\n    }\n"]);return C=function(){return e},e}var $=x()(C()),q=(a(5492),Object(F.a)(function(e){var t=e.item;return r.a.createElement(h.Mutation,{mutation:$},function(e){return r.a.createElement(N.a,{to:"/order",className:"menu-card link","aria-label":t.description,onClick:function(){return e({variables:{selectedPizzaSizeFromMenu:t.name}})},tabIndex:"0",role:"button"},r.a.createElement("div",{className:"menu-card__size"},r.a.createElement("div",{className:"menu-card__size-label"},t.name.charAt(0)),r.a.createElement("div",{className:"menu-card__size-name"},t.name)),r.a.createElement("div",{className:"menu-card__description"},r.a.createElement("div",{className:"menu-card__description-basePrice"},t.basePrice),r.a.createElement("div",{className:"menu-card__description-maxToppings"},"Max Toppings: ".concat(t.maxToppings||7))))})}));function A(){var e=Object(S.a)(["\n    query getPizzas {\n        pizzaSizes {\n          name\n          maxToppings\n          basePrice\n        }\n    }\n"]);return A=function(){return e},e}var B=x()(A()),D=(a(5496),function(){return r.a.createElement(h.Query,{query:B,fetchPolicy:"network-only"},function(e){var t=e.data.pizzaSizes;return e.loading?null:r.a.createElement("div",{className:"menu__selection"},r.a.createElement("h3",{className:"menu__title"},"MENU"),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menu__list"},t.map(function(e,t){return r.a.createElement(q,{key:t,item:e})}))))})});function R(){var e=Object(S.a)(["\n    query getPizzaSizeByName($selectedPizzaSizeFromMenu: String) {\n        pizzaSizeByName(name: $selectedPizzaSizeFromMenu) {\n            name\n            maxToppings\n            basePrice\n            toppings {\n                topping {\n                    name\n                    price\n                }\n                defaultSelected\n            }\n        }\n    }\n"]);return R=function(){return e},e}function Q(){var e=Object(S.a)(["\n    query getPizzaSizeByNameFromState {\n        selectedPizzaSizeFromMenu @client\n    }\n"]);return Q=function(){return e},e}var L=x()(Q()),U=x()(R()),J=a(141),W=a(65),G=a(66),V=a(72),H=a(67),K=a(73),X=a(68),Y=a.n(X),Z=a(69),ee=a.n(Z),te=a(70),ae=a.n(te),ne=a(34),re=a.n(ne),ce=a(140),ie=a.n(ce),oe=a(74),le=a.n(oe);function me(){var e=Object(S.a)(["\n    mutation addItemToCart (\n        $name: String,\n        $totalPrice: Int,\n        $totalToppings: Int,\n        ) {\n        addItemToCart(\n            name: $name,\n            totalPrice: $totalPrice,\n            totalToppings: $totalToppings,\n        ) @client\n    }\n"]);return me=function(){return e},e}var ue=x()(me()),se=(a(5499),function(e){function t(){var e,a;Object(W.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={checked:[],remainingToppings:null,totalPrice:0,totalToppings:0},a.handleToggle=function(e){var t=a.state.checked,n=t.indexOf(e),r=Object(J.a)(t);-1===n?r.push(e):r.splice(n,1),a.setState({checked:r},a.updateRemainingToppings)},a.updateRemainingToppings=function(){var e=a.props.data,t=e.maxToppings,n=e.toppings,r=a.state.checked,c=t||n.length;a.setState({remainingToppings:c-r.length,totalToppings:r.length},a.updateTotalPrice)},a.updateTotalPrice=function(){var e=a.props.data.basePrice,t=a.state.checked,n=[];t.map(function(e){return n.push(e.topping.price)});var r=n.reduce(function(e,t){return e+t},0);a.setState({totalPrice:e+r})},a}return Object(K.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data.toppings,t=[];e.map(function(e){return e.defaultSelected?t.push(e):null}),this.setState({checked:t},this.updateRemainingToppings)}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.data,c=n.name,i=n.toppings,o=this.state,l=o.checked,m=o.remainingToppings,u=o.totalPrice,s=o.totalToppings;return r.a.createElement("div",{className:"order-card"},r.a.createElement("div",{className:"order-card__buttons"},r.a.createElement(h.Mutation,{mutation:ue},function(e){return r.a.createElement(le.a,{className:a.button,color:"primary",onClick:function(){return e({variables:{name:c,totalPrice:u,totalToppings:s}})},variant:"contained"},"ADD")}),r.a.createElement(le.a,{className:a.button,color:"secondary",variant:"contained"},r.a.createElement(N.a,{to:"/",className:"link"}," MENU ")),r.a.createElement(le.a,{className:a.button,color:"secondary",variant:"contained"},r.a.createElement(N.a,{to:"/cart",className:"link"}," CART "))),r.a.createElement("div",{className:"order-card__details"},r.a.createElement("h3",{className:"order-card__details-label"},"Size: ",r.a.createElement("span",null,c)),r.a.createElement("h3",{className:"order-card__details-label"},"Remaining toppings: ",r.a.createElement("span",null,m)),r.a.createElement("h3",{className:"order-card__details-label"},"Total: ",r.a.createElement("span",null,"$",u.toFixed(2)))),r.a.createElement(Y.a,{className:a.root},i.map(function(t,a){return r.a.createElement(ee.a,{button:!0,dense:!0,disabled:0===m&&-1===l.indexOf(t),key:a,onClick:function(){return e.handleToggle(t)},role:void 0},r.a.createElement(ie.a,{checked:-1!==l.indexOf(t),disableRipple:!0,tabIndex:-1}),r.a.createElement(re.a,{primary:t.topping.name}),r.a.createElement(ae.a,null,r.a.createElement(re.a,{primary:"$ ".concat(t.topping.price)})))})))}}]),t}(n.Component)),pe=Object(o.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,margin:"auto"},button:{width:"5rem",margin:e.spacing.unit,color:"white"}}})(se),de=(a(5526),function(){return r.a.createElement(h.Query,{query:L},function(e){var t=e.data.selectedPizzaSizeFromMenu;return e.loading?null:r.a.createElement(h.Query,{fetchPolicy:"network-only",query:U,skip:!t,variables:{selectedPizzaSizeFromMenu:t}},function(e){var t=e.data.pizzaSizeByName;return e.loading?null:r.a.createElement("div",{className:"order__selection"},r.a.createElement(pe,{data:t}))})})}),fe=a(54),ve=a.n(fe),ge=(a(5529),function(e){function t(){var e,a;Object(W.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={totalPrice:0},a.updateTotalPrice=function(){var e=a.props.cartItems,t=[];e.map(function(e){return t.push(e.totalPrice)});var n=t.reduce(function(e,t){return e+t},0);a.setState({totalPrice:n})},a.getIndexToRemoveItem=function(e){return function(){(0,a.props.removeItem)(e)}},a}return Object(K.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){this.updateTotalPrice()}},{key:"componentDidUpdate",value:function(e){e.cartItems!==this.props.cartItems&&this.updateTotalPrice()}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.cartItems,c=this.state.totalPrice;return r.a.createElement("div",{className:"cart-card"},r.a.createElement("h3",{className:"cart-card__totalPrice"},"Total: $",c.toFixed(2)),r.a.createElement(Y.a,{className:a.root},n.map(function(t,n){return r.a.createElement(ee.a,{key:n,className:a.listItem},r.a.createElement(re.a,{primary:"$".concat(t.totalPrice)}),r.a.createElement(re.a,{primary:t.name,secondary:"Toppings: ".concat(t.totalToppings)}),r.a.createElement(ae.a,null,r.a.createElement(T.a,{"aria-label":"Delete",onClick:e.getIndexToRemoveItem(n)},r.a.createElement(ve.a,null))))})))}}]),t}(n.Component)),he=Object(o.withStyles)(function(){return{root:{width:"100%",maxWidth:360},listItem:{borderBottom:"1px solid #f4f4f4"}}})(ge);function Ee(){var e=Object(S.a)(["\n    query getCartItems {\n        cartItems @client {\n            name\n            totalPrice\n            totalToppings\n        }\n    }\n"]);return Ee=function(){return e},e}var ze=x()(Ee());function be(){var e=Object(S.a)(["\n    mutation removeItemFromCart (\n        $index: Int\n        ) {\n        removeItemFromCart(\n            index: $index\n        ) @client\n    }\n"]);return be=function(){return e},e}var ye=x()(be()),Ne=(a(5532),function(){return r.a.createElement(h.Query,{query:ze},function(e){var t=e.data.cartItems,a=e.loading,n=e.refetch;return a?null:r.a.createElement("div",{className:"cart__selection"},r.a.createElement("h3",{className:"cart__title"},"CART"),r.a.createElement(h.Mutation,{mutation:ye},function(e){return r.a.createElement(he,{cartItems:t,removeItem:function(t){e({variables:{index:t}}),n()}})}))})}),Pe=(a(5535),function(){return r.a.createElement("div",{className:"footer"})}),Te=(a(5538),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null),r.a.createElement(b.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:D}),r.a.createElement(y.a,{exact:!0,path:"/order",component:de}),r.a.createElement(y.a,{exact:!0,path:"/cart",component:Ne})),r.a.createElement(Pe,null))}),Ie=new u.a,_e=Object(f.a)({resolvers:z,cache:Ie,defaults:E}),Oe=d.ApolloLink.from([Object(p.a)(function(e){var t=e.graphQLErrors,a=e.networkError;t&&t.forEach(function(e){var t=e.message,a=e.locations,n=e.path;console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(a,", Path: ").concat(n))}),a&&console.log("[Network error]: ".concat(a))}),g.a,_e,new s.a({uri:"http://localhost:4000/graphql",credentials:"same-origin"})]),Se=new m.a({cache:Ie,link:Oe}),ke=Object(o.createMuiTheme)({palette:{primary:{main:"#49aaca"},secondary:{main:"#ef9a9a"}},status:{danger:"orange"},typography:{useNextVariants:!0}});i.a.render(r.a.createElement(l.a,null,r.a.createElement(h.ApolloProvider,{client:Se},r.a.createElement(function(){return r.a.createElement(o.MuiThemeProvider,{theme:ke},r.a.createElement(Te,null))},null))),document.getElementById("root"))}},[[5362,2,1]]]);
//# sourceMappingURL=main.1d7e5fd9.chunk.js.map