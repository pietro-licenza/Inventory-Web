!function(){"use strict";function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(self.webpackChunkinventory_web=self.webpackChunkinventory_web||[]).push([[318],{5318:function(e,o,i){i.r(o),i.d(o,{VendasModule:function(){return O}});var a=i(8583),c=i(9976),r=i(9598),g=i(1945),u=i(4188),d=i(7661),p=i(639),s=i(5855),l=i(6302),f=i(9577);function P(n,t){if(1&n){var e=p.EpF();p.TgZ(0,"div",9),p.TgZ(1,"h4",4),p._uU(2),p.ALo(3,"date"),p.qZA(),p.TgZ(4,"h4",4),p._uU(5),p.qZA(),p.TgZ(6,"h4",10),p.NdJ("click",function(){var n=p.CHM(e).$implicit;return p.oxw().goToDetail(n)}),p._UZ(7,"fa-icon",11),p.qZA(),p.qZA()}if(2&n){var o=t.$implicit,i=p.oxw();p.xp6(2),p.Oqu(p.xi3(3,3,null==o?null:o.updatedAt,"dd/MM/yyyy")),p.xp6(3),p.Oqu(null==o||null==o.cliente?null:o.cliente.name),p.xp6(2),p.Q6J("icon",i.faInfo)}}function v(n,t){if(1&n){var e=p.EpF();p.TgZ(0,"div",12),p.TgZ(1,"div",13),p.TgZ(2,"div",14),p.TgZ(3,"fa-icon",15),p.NdJ("click",function(){return p.CHM(e),p.oxw().getPrevPage()}),p.qZA(),p.qZA(),p.TgZ(4,"div",14),p.TgZ(5,"fa-icon",15),p.NdJ("click",function(){return p.CHM(e),p.oxw().getNextPage()}),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&n){var o=p.oxw();p.xp6(3),p.ekj("desativado",1===o.currentPage),p.Q6J("icon",o.faLeft),p.xp6(2),p.ekj("desativado",o.currentPage===o.pages),p.Q6J("icon",o.faRight)}}function h(n,t){if(1&n){var e=p.EpF();p.TgZ(0,"button",10),p.NdJ("click",function(){return p.CHM(e),p.oxw().addVenda()}),p._uU(1,"+"),p.qZA()}}var C,_=((C=function(){function e(t,o){n(this,e),this.router=t,this.vendaService=o,this.vendas=[],this.faInfo=c.YHc,this.role="",this.faLeft=c.A35,this.faRight=c._tD,this.currentPage=1,this.pages=null,this.itemsPerPage=5}var o,i,a;return o=e,(i=[{key:"ngOnInit",value:function(){var n=this;this.role=localStorage.getItem("inventory-role")+"",this.vendaService.getVendas().subscribe(function(t){t=t.filter(function(n){return n.isSaleComplete}),n.vendas=t.map(function(n){var t=new u.S;t.id=n.id,t.paymentMethod=n.paymentMethod,t.createdAt=n.createdAt,t.updatedAt=n.updatedAt;var e=new r.c;e.id=n.client.id,e.name=n.client.name,e.email=n.client.email,t.cliente=e;var o=n.products.map(function(n){var t=new d.o;t.quantity=n.quantity;var e=new g.a;return e.id=n.product.id,e.name=n.product.name,e.price=n.product.price,e.quantity=n.product.quantity,e.createdAt=n.product.createdAt,e.updatedAt=n.product.updatedAt,e.categoryId=n.product.categoryId,t.produto=e,t});return t.vendaProdutos=o,t}),n.pages=Math.ceil(n.vendas.length/n.itemsPerPage),n.getItensPage()},function(t){401==t.status&&n.router.navigate(["/login"])})}},{key:"goToDetail",value:function(n){this.router.navigate(["/detalhe-venda"],{state:{venda:n}})}},{key:"addVenda",value:function(){this.router.navigate(["/add-venda"])}},{key:"getNextPage",value:function(){this.pages&&this.currentPage<this.pages&&this.currentPage++}},{key:"getPrevPage",value:function(){this.pages&&this.currentPage>1&&this.currentPage--}},{key:"getItensPage",value:function(){var n,t=this.currentPage,e=0,o=0;return 1==t?(e=0,o=this.itemsPerPage-1):(e=(t-1)*this.itemsPerPage,o=t*this.itemsPerPage-1),null===(n=this.vendas)||void 0===n?void 0:n.filter(function(n,t){return e<=t&&t<=o})}}])&&t(o.prototype,i),a&&t(o,a),e}()).\u0275fac=function(n){return new(n||C)(p.Y36(s.F0),p.Y36(l.O))},C.\u0275cmp=p.Xpm({type:C,selectors:[["app-vendas"]],decls:15,vars:3,consts:[[1,"container"],[1,"title"],[1,"produtosDiv"],[1,"produtoCats"],[1,"name"],["class","produto",4,"ngFor","ngForOf"],["class","pagination",4,"ngIf"],[1,"addProduct"],[3,"click",4,"ngIf"],[1,"produto"],[3,"click"],[3,"icon"],[1,"pagination"],[1,"buttonsPag"],[1,"btnPag"],[3,"icon","click"]],template:function(n,t){1&n&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"h1"),p._uU(3,"VENDAS"),p.qZA(),p.qZA(),p.TgZ(4,"div",2),p.TgZ(5,"div",3),p.TgZ(6,"h4",4),p._uU(7,"Data Venda"),p.qZA(),p.TgZ(8,"h4",4),p._uU(9,"Cliente"),p.qZA(),p._UZ(10,"h4"),p.qZA(),p.YNc(11,P,8,6,"div",5),p.qZA(),p.YNc(12,v,6,6,"div",6),p.TgZ(13,"div",7),p.YNc(14,h,2,0,"button",8),p.qZA(),p.qZA()),2&n&&(p.xp6(11),p.Q6J("ngForOf",t.getItensPage()),p.xp6(1),p.Q6J("ngIf",t.pages&&t.pages>1),p.xp6(2),p.Q6J("ngIf","venda"==t.role||"admin"==t.role))},directives:[a.sg,a.O5,f.BN],pipes:[a.uU],styles:[".container[_ngcontent-%COMP%]{padding:30px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;width:100%;background-color:#9364f1;padding:5px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:25px;margin:10px 0}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]{display:flex;margin:30px 10px 0 30px}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1;text-align:center;margin:5px}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4.categoria[_ngcontent-%COMP%]{flex:2}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]{width:60%;margin:10px auto 0}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]{width:calc(100% - 40px);border:1px solid #cacaca;border-radius:30px;margin:20px;padding:10px;display:flex}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1;text-align:center;margin:5px}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4.categoria[_ngcontent-%COMP%]{flex:2}.container[_ngcontent-%COMP%]   .addProduct[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:40px}.container[_ngcontent-%COMP%]   .addProduct[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:#9671f1;border-radius:30px;color:#fff;width:50px;height:49px;padding:0;margin:0;font-size:40px;font-weight:bold;cursor:pointer}.container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{cursor:pointer}.buttonsPag[_ngcontent-%COMP%]{display:flex;justify-content:center;grid-column-gap:30px;-moz-column-gap:30px;column-gap:30px;padding:30px 0}.buttonsPag[_ngcontent-%COMP%]   .btnPag[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.5rem}.buttonsPag[_ngcontent-%COMP%]   .btnPag[_ngcontent-%COMP%]   fa-icon.desativado[_ngcontent-%COMP%]{color:#cacaca}"]}),C),M=i(665),O=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({providers:[l.O],imports:[[a.ez,s.Bz.forChild([{path:"",component:_}]),M.u5,f.uH]]}),t}()}}])}();