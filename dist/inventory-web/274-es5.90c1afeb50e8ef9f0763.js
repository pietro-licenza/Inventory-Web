!function(){"use strict";function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(self.webpackChunkinventory_web=self.webpackChunkinventory_web||[]).push([[274],{6274:function(o,e,i){i.r(e),i.d(e,{CategoriasModule:function(){return _}});var r=i(8583),c=i(7120),a=i(9976),g=i(639),u=i(1072),d=i(5855),p=i(9577);function s(n,t){if(1&n){var o=g.EpF();g.TgZ(0,"div",8),g.TgZ(1,"h4",4),g._uU(2),g.qZA(),g.TgZ(3,"h4",7),g.NdJ("click",function(){var n=g.CHM(o).$implicit;return g.oxw().editCategoria(n)}),g._UZ(4,"fa-icon",9),g.qZA(),g.qZA()}if(2&n){var e=t.$implicit,i=g.oxw();g.xp6(2),g.Oqu(null==e?null:e.name),g.xp6(2),g.Q6J("icon",i.faPencil)}}var f,C=((f=function(){function o(t,e){n(this,o),this.categoriaService=t,this.router=e,this.faPencil=a.UJf,this.categorias=[]}var e,i,r;return e=o,(i=[{key:"ngOnInit",value:function(){var n=this;this.categoriaService.getCategorias().subscribe(function(t){n.categorias=t.map(function(n){return new c.E(n.id,n.name)})})}},{key:"addCategoria",value:function(){this.router.navigate(["/add-categoria"])}},{key:"editCategoria",value:function(n){this.router.navigate(["/add-categoria"],{state:{categoria:n}})}}])&&t(e.prototype,i),r&&t(e,r),o}()).\u0275fac=function(n){return new(n||f)(g.Y36(u.n),g.Y36(d.F0))},f.\u0275cmp=g.Xpm({type:f,selectors:[["app-categorias"]],decls:13,vars:1,consts:[[1,"container"],[1,"title"],[1,"produtosDiv"],[1,"produtoCats"],[1,"name"],["class","produto",4,"ngFor","ngForOf"],[1,"addProduct"],[3,"click"],[1,"produto"],[3,"icon"]],template:function(n,t){1&n&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"h1"),g._uU(3,"LISTA DE CATEGORIAS"),g.qZA(),g.qZA(),g.TgZ(4,"div",2),g.TgZ(5,"div",3),g.TgZ(6,"h4",4),g._uU(7,"Nome"),g.qZA(),g._UZ(8,"h4"),g.qZA(),g.YNc(9,s,5,2,"div",5),g.qZA(),g.TgZ(10,"div",6),g.TgZ(11,"button",7),g.NdJ("click",function(){return t.addCategoria()}),g._uU(12,"+"),g.qZA(),g.qZA(),g.qZA()),2&n&&(g.xp6(9),g.Q6J("ngForOf",t.categorias))},directives:[r.sg,p.BN],styles:[".container[_ngcontent-%COMP%]{padding:30px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;width:100%;background-color:#9364f1;padding:5px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:25px;margin:10px 0}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]{display:flex;margin:30px 10px 0 30px}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1;text-align:center;margin:5px}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4.categoria[_ngcontent-%COMP%]{flex:2}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]{width:60%;margin:10px auto 0}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]{width:calc(100% - 40px);border:1px solid #cacaca;border-radius:30px;margin:20px;padding:10px;display:flex}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1;text-align:center;margin:5px}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4.categoria[_ngcontent-%COMP%]{flex:2}.container[_ngcontent-%COMP%]   .addProduct[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:40px}.container[_ngcontent-%COMP%]   .addProduct[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:#9671f1;border-radius:30px;color:#fff;width:50px;height:49px;padding:0;margin:0;font-size:40px;font-weight:bold;cursor:pointer}.container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{cursor:pointer}"]}),f),l=i(665),_=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({providers:[u.n],imports:[[r.ez,d.Bz.forChild([{path:"",component:C}]),l.u5,p.uH]]}),t}()}}])}();