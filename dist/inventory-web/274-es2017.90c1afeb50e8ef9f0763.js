"use strict";(self.webpackChunkinventory_web=self.webpackChunkinventory_web||[]).push([[274],{6274:function(n,t,o){o.r(t),o.d(t,{CategoriasModule:function(){return C}});var e=o(8583),i=o(7120),c=o(9976),r=o(639),a=o(1072),g=o(5855),d=o(9577);function p(n,t){if(1&n){const n=r.EpF();r.TgZ(0,"div",8),r.TgZ(1,"h4",4),r._uU(2),r.qZA(),r.TgZ(3,"h4",7),r.NdJ("click",function(){const t=r.CHM(n).$implicit;return r.oxw().editCategoria(t)}),r._UZ(4,"fa-icon",9),r.qZA(),r.qZA()}if(2&n){const n=t.$implicit,o=r.oxw();r.xp6(2),r.Oqu(null==n?null:n.name),r.xp6(2),r.Q6J("icon",o.faPencil)}}let s=(()=>{class n{constructor(n,t){this.categoriaService=n,this.router=t,this.faPencil=c.UJf,this.categorias=[]}ngOnInit(){this.categoriaService.getCategorias().subscribe(n=>{this.categorias=n.map(n=>new i.E(n.id,n.name))})}addCategoria(){this.router.navigate(["/add-categoria"])}editCategoria(n){this.router.navigate(["/add-categoria"],{state:{categoria:n}})}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(a.n),r.Y36(g.F0))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-categorias"]],decls:13,vars:1,consts:[[1,"container"],[1,"title"],[1,"produtosDiv"],[1,"produtoCats"],[1,"name"],["class","produto",4,"ngFor","ngForOf"],[1,"addProduct"],[3,"click"],[1,"produto"],[3,"icon"]],template:function(n,t){1&n&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"h1"),r._uU(3,"LISTA DE CATEGORIAS"),r.qZA(),r.qZA(),r.TgZ(4,"div",2),r.TgZ(5,"div",3),r.TgZ(6,"h4",4),r._uU(7,"Nome"),r.qZA(),r._UZ(8,"h4"),r.qZA(),r.YNc(9,p,5,2,"div",5),r.qZA(),r.TgZ(10,"div",6),r.TgZ(11,"button",7),r.NdJ("click",function(){return t.addCategoria()}),r._uU(12,"+"),r.qZA(),r.qZA(),r.qZA()),2&n&&(r.xp6(9),r.Q6J("ngForOf",t.categorias))},directives:[e.sg,d.BN],styles:[".container[_ngcontent-%COMP%]{padding:30px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;width:100%;background-color:#9364f1;padding:5px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:25px;margin:10px 0}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]{display:flex;margin:30px 10px 0 30px}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1;text-align:center;margin:5px}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4.categoria[_ngcontent-%COMP%]{flex:2}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]{width:60%;margin:10px auto 0}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]{width:calc(100% - 40px);border:1px solid #cacaca;border-radius:30px;margin:20px;padding:10px;display:flex}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1;text-align:center;margin:5px}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4.categoria[_ngcontent-%COMP%]{flex:2}.container[_ngcontent-%COMP%]   .addProduct[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:40px}.container[_ngcontent-%COMP%]   .addProduct[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:#9671f1;border-radius:30px;color:#fff;width:50px;height:49px;padding:0;margin:0;font-size:40px;font-weight:bold;cursor:pointer}.container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{cursor:pointer}"]}),n})();var u=o(665);let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({providers:[a.n],imports:[[e.ez,g.Bz.forChild([{path:"",component:s}]),u.u5,d.uH]]}),n})()}}]);