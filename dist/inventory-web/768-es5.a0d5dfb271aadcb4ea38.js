!function(){"use strict";function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(self.webpackChunkinventory_web=self.webpackChunkinventory_web||[]).push([[768],{5768:function(e,o,r){r.r(o),r.d(o,{UsuariosModule:function(){return C}});var i=r(8583),a=r(7789),c=r(639),u=r(3612),g=r(5855);function s(n,t){if(1&n){var e=c.EpF();c.TgZ(0,"div",7),c.TgZ(1,"div",8),c.TgZ(2,"h4",9),c._uU(3),c.qZA(),c.TgZ(4,"h4",9),c._uU(5),c.qZA(),c.TgZ(6,"h4",9),c._uU(7),c.qZA(),c.qZA(),c.TgZ(8,"h4",10),c.NdJ("click",function(){var n=c.CHM(e).$implicit;return c.oxw().resetPwd(n)}),c.TgZ(9,"button"),c._uU(10,"Resetar Senha"),c.qZA(),c.qZA(),c.qZA()}if(2&n){var o=t.$implicit;c.xp6(3),c.Oqu(null==o?null:o.name),c.xp6(2),c.Oqu(null==o?null:o.email),c.xp6(2),c.Oqu(null==o?null:o.role)}}var d,p=((d=function(){function e(t,o){n(this,e),this.usuarioService=t,this.router=o,this.usuarios=[]}var o,r,i;return o=e,(r=[{key:"ngOnInit",value:function(){var n=this;this.usuarioService.getUsuarios().subscribe(function(t){n.usuarios=t.map(function(n){var t=new a.b;return t.id=n.id,t.email=n.email,t.name=n.name,t.role=n.role,t})})}},{key:"addUsuario",value:function(){this.router.navigate(["/add-usuario"])}},{key:"editCategoria",value:function(n){this.router.navigate(["/add-categoria"],{state:{categoria:n}})}},{key:"resetPwd",value:function(n){var t=this;this.usuarioService.resetPwd(n).subscribe(function(n){alert("Senha alterada para padr\xe3o: teste123"),t.router.navigate(["/usuarios"])},function(n){401==n.status?(alert("Sess\xe3o expirada"),t.router.navigate(["/login"])):(alert("Ocorreu um erro"),alert(n.message))})}}])&&t(o.prototype,r),i&&t(o,i),e}()).\u0275fac=function(n){return new(n||d)(c.Y36(u.i),c.Y36(g.F0))},d.\u0275cmp=c.Xpm({type:d,selectors:[["app-usuarios"]],decls:10,vars:1,consts:[[1,"container"],[1,"title"],[1,"produtosDiv"],[1,"produtoCats"],["class","produto",4,"ngFor","ngForOf"],[1,"addProduct"],[3,"click"],[1,"produto"],[1,"names"],[1,"name"],[1,"btnVenda",3,"click"]],template:function(n,t){1&n&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"h1"),c._uU(3,"USU\xc1RIOS"),c.qZA(),c.qZA(),c.TgZ(4,"div",2),c._UZ(5,"div",3),c.YNc(6,s,11,3,"div",4),c.qZA(),c.TgZ(7,"div",5),c.TgZ(8,"button",6),c.NdJ("click",function(){return t.addUsuario()}),c._uU(9,"+"),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(6),c.Q6J("ngForOf",t.usuarios))},directives:[i.sg],styles:[".container[_ngcontent-%COMP%]{padding:30px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;width:100%;background-color:#9364f1;padding:5px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:25px;margin:10px 0}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]{display:flex;margin:30px 10px 0 30px}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1;text-align:center;margin:5px}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4.categoria[_ngcontent-%COMP%]{flex:2}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]{width:60%;margin:10px auto 0}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]{width:calc(100% - 40px);border:1px solid #cacaca;border-radius:30px;margin:20px;padding:10px;display:flex;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1;text-align:center;margin:5px}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4.categoria[_ngcontent-%COMP%]{flex:2}.container[_ngcontent-%COMP%]   .addProduct[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:40px}.container[_ngcontent-%COMP%]   .addProduct[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:#9671f1;border-radius:30px;color:#fff;width:50px;height:49px;padding:0;margin:0;font-size:40px;font-weight:bold;cursor:pointer}.container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{cursor:pointer}.names[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:3}.names[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:normal}.names[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]:first-of-type{font-size:1.5em;font-weight:bold}.btnVenda[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:45px;height:50px;align-items:center}.btnVenda[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#9364f1;color:#fff;outline:none;border:none;padding:10px 15px;font-size:20px;cursor:pointer;border-radius:5px}"]}),d),l=r(665),f=r(9577),C=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({providers:[u.i],imports:[[i.ez,g.Bz.forChild([{path:"",component:p}]),l.u5,f.uH]]}),t}()}}])}();