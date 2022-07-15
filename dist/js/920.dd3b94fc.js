"use strict";(self["webpackChunkpokedex"]=self["webpackChunkpokedex"]||[]).push([[920],{5728:function(t,e,a){a.d(e,{Z:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[e("b-navbar-brand",{attrs:{href:"#"}},[e("img",{attrs:{alt:"Brand",src:"https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67",height:"50"}})]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("ul",{staticClass:"mx-auto text-center navbar-items"},[e("li",{staticClass:"navbar-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/"}},[t._v("MINHA POKÉDEX")])],1),e("li",{staticClass:"navbar-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/capture"}},[t._v("CAPTURAR POKÉMONS")])],1)]),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-form",{staticClass:"d-none d-lg-block"},[e("b-form-input",{attrs:{size:"sm",placeholder:"Nome ou ID"},model:{value:t.searchField,callback:function(e){t.searchField=e},expression:"searchField"}}),e("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.search()}}},[e("b-icon",{attrs:{icon:"search",color:"#fff"}})],1)],1)],1)],1)],1)},n=[],i={name:"PokedexNavbar",data(){return{searchField:""}},methods:{search(){this.$router.push({name:"Search",params:{searchField:this.searchField}})}}},r=i,c=a(1001),o=(0,c.Z)(r,s,n,!1,null,"92a735de",null),l=o.exports},7785:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var s=function(){var t=this,e=t._self._c;return e("div",[e("Navbar"),e("div",{staticClass:"mx-auto content mb-3"},[e("div",{staticClass:"pagination d-flex align-items-center justify-content-around mx-auto mb-3 col-md-4"},[e("b-icon",{staticClass:"pagination-controlers",attrs:{icon:"chevron-left"},on:{click:function(e){return t.previousPage()}}}),e("h2",{staticClass:"p-0 m-0"},[t._v(t._s(t.offset+1)+" - "+t._s(t.limit))]),e("b-icon",{staticClass:"pagination-controlers",attrs:{icon:"chevron-right"},on:{click:function(e){return t.nextPage()}}})],1),t._l(t.pokemons,(function(a){return e("b-card",{key:a.name,staticClass:"mb-5"},[e("b-card-header",{staticClass:"d-flex flex-wrap justify-content-between px-0"},[e("b-card-title",{staticClass:"col-md-6 text-center text-md-left"},[t._v(" #"+t._s(a.id)+" "+t._s(a.name)+" ")]),e("b-button",{staticClass:"col-md-3",attrs:{size:"sm",variant:"danger",type:"submit"},on:{click:function(e){return t.capturarPokemon(a)}}},[t._v(" Capturar Pokémon ")])],1),e("b-card-body",[e("div",{staticClass:"row d-flex align-items-center justify-content-around"},[e("div",{staticClass:"col-md-3 mb-5 mb-md-0"},[e("div",{staticClass:"wrap m-auto",staticStyle:{width:"200px"}},[e("div",{staticClass:"picture-frame m-auto"},[e("img",{attrs:{src:a.sprites.front_default}})]),e("div",{staticClass:"badges d-flex justify-content-around mt-2"},t._l(a.types,(function(a){return e("router-link",{key:a.type.name,attrs:{to:{name:"SearchByType",params:{type:a.type.name,urlType:a.type.url}}}},[e("b-badge",{attrs:{variant:t.variantTypePokemon(a.type.name)}},[e("span",{staticClass:"badge-text"},[t._v(t._s(a.type.name))])])],1)})),1)])]),e("div",{staticClass:"col-md-6 col-lg-5"},[e("div",{staticClass:"pokemon-info d-none d-md-block"},[t._l(a.stats,(function(a){return e("div",{key:a.stat.url,staticClass:"d-flex justify-content-between px-0"},[t._v(" "+t._s(a.stat.name)+": "),e("b-progress",{staticClass:"mt-2 w-50",attrs:{max:"100","show-value":""}},[e("b-progress-bar",{attrs:{value:a.base_stat,variant:"danger"}})],1)],1)})),e("div",{staticClass:"d-flex justify-content-between px-0"},[t._v(" weight: "),e("span",{staticClass:"w-50 text-center"},[t._v(t._s(a.weight))])])],2),e("div",{staticClass:"pokemon-info d-block d-md-none"},[t._l(a.stats,(function(a){return e("div",{key:a.stat.url,staticClass:"d-flex flex-wrap justify-content-center px-0"},[e("div",{staticClass:"stat-name text-center col-12"},[t._v(" "+t._s(a.stat.name)+" ")]),e("b-progress",{staticClass:"mb-3 w-100",attrs:{max:"100","show-value":""}},[e("b-progress-bar",{attrs:{value:a.base_stat,variant:"danger"}})],1)],1)})),e("div",{staticClass:"d-flex flex-wrap justify-content-center px-0"},[e("div",{staticClass:"stat-name text-center col-12"},[t._v(" weight ")]),e("span",{staticClass:"w-100 text-center"},[t._v(t._s(a.weight))])])],2)])]),e("div",{staticClass:"row mt-5 pt-3"},[e("div",{staticClass:"col-md-12"},[e("h3",{staticClass:"text-center"},[t._v("Habilidades")]),e("div",{staticClass:"abilitiess"},[e("div",{staticClass:"text-center"},[e("ol",t._l(a.abilities,(function(a,s){return e("li",{key:s,staticStyle:{"font-size":"1.2rem"}},[t._v(" "+t._s(a.ability.name)+" ")])})),0)])])])]),e("div",{staticClass:"row mt-5 pt-3"},[e("div",{staticClass:"col-md-12"},[e("h3",{staticClass:"text-center mb-4"},[t._v("Cadeia de Evolução")]),e("div",{staticClass:"col-9 mx-auto d-flex justify-content-between flex-wrap pl-md-5"},t._l(a.evolution_chain,(function(s,n){return e("div",{key:n,staticClass:"d-flex col-12 col-md-4 justify-content-center justify-content-md-around flex-wrap align-items-center pl-md-5"},[t._l(s,(function(t){return e("div",{key:t.name,staticClass:"text-center d-flex justify-content-between align-items-center"},[e("div",{staticClass:"pokemon-info-wrapper mr-3"},[e("div",{staticClass:"picture-frame",staticStyle:{height:"90px",width:"90px"}},[e("img",{attrs:{src:t.sprites.front_default}})])])])})),e("div",{staticClass:"evo-arrow ml-5 mb-4 d-none d-md-block",staticStyle:{height:"20px",width:"20px"}},[n+1!=a.evolution_chain.length?e("svg",{staticClass:"svg-inline--fa fa-arrow-right fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}})]):t._e()])],2)})),0)])])])],1)})),e("div",{staticClass:"pagination d-flex align-items-center justify-content-around mx-auto col-md-4"},[e("b-icon",{staticClass:"pagination-controlers",attrs:{icon:"chevron-left"},on:{click:function(e){return t.previousPage()}}}),e("h2",{staticClass:"p-0 m-0"},[t._v(t._s(t.offset+1)+" - "+t._s(t.limit))]),e("b-icon",{staticClass:"pagination-controlers",attrs:{icon:"chevron-right"},on:{click:function(e){return t.nextPage()}}})],1)],2)],1)},n=[],i=a(9411),r=a(4239),c=a(5728),o={name:"App",components:{Navbar:c.Z},data:()=>({pokemons:[],limit:10,offset:0,timeout:null}),methods:{async getSpecifcPokemon(t){await i.Z.getPokemon(t).then((t=>{this.pokemons.push(t)}))},async getManyPokemons(){for(let t=this.offset;t<this.limit;t++)await this.getSpecifcPokemon(t+1)},async nextPage(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.offset+=10,this.limit+=10}),450)},async previousPage(){this.offset>0&&(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.offset-=10,this.limit-=10}),450))},async capturarPokemon(t){r.Z.dispatch("addPokemonToMyPokemons",t)},variantTypePokemon(t){switch(t){case"normal":return"primary";case"fighting":return"danger";case"flying":return"info";case"poison":return"warning";case"ground":return"success";case"rock":return"dark";case"bug":return"secondary";case"ghost":return"dark";case"steel":return"dark";case"fire":return"danger";case"water":return"info";case"grass":return"success";case"electric":return"warning";case"psychic":return"danger";case"ice":return"info";case"dragon":return"warning";case"dark":return"dark";case"fairy":return"secondary";default:return"primary"}}},mounted(){this.getManyPokemons()},watch:{offset:{handler(){this.pokemons=[],this.getManyPokemons()}}}},l=o,d=a(1001),u=(0,d.Z)(l,s,n,!1,null,"2ce06e3b",null),m=u.exports}}]);
//# sourceMappingURL=920.dd3b94fc.js.map