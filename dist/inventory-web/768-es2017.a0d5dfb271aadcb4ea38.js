"use strict";(self.webpackChunkinventory_web=self.webpackChunkinventory_web||[]).push([[768],{5768:function(n,t,e){e.r(t),e.d(t,{UsuariosModule:function(){return p}});var o=e(8583),r=e(7789),i=e(639),c=e(3612),a=e(5855);function s(n,t){if(1&n){const n=i.EpF();i.TgZ(0,"div",7),i.TgZ(1,"div",8),i.TgZ(2,"h4",9),i._uU(3),i.qZA(),i.TgZ(4,"h4",9),i._uU(5),i.qZA(),i.TgZ(6,"h4",9),i._uU(7),i.qZA(),i.qZA(),i.TgZ(8,"h4",10),i.NdJ("click",function(){const t=i.CHM(n).$implicit;return i.oxw().resetPwd(t)}),i.TgZ(9,"button"),i._uU(10,"Resetar Senha"),i.qZA(),i.qZA(),i.qZA()}if(2&n){const n=t.$implicit;i.xp6(3),i.Oqu(null==n?null:n.name),i.xp6(2),i.Oqu(null==n?null:n.email),i.xp6(2),i.Oqu(null==n?null:n.role)}}let u=(()=>{class n{constructor(n,t){this.usuarioService=n,this.router=t,this.usuarios=[]}ngOnInit(){this.usuarioService.getUsuarios().subscribe(n=>{this.usuarios=n.map(n=>{let t=new r.b;return t.id=n.id,t.email=n.email,t.name=n.name,t.role=n.role,t})})}addUsuario(){this.router.navigate(["/add-usuario"])}editCategoria(n){this.router.navigate(["/add-categoria"],{state:{categoria:n}})}resetPwd(n){this.usuarioService.resetPwd(n).subscribe(n=>{alert("Senha alterada para padr\xe3o: teste123"),this.router.navigate(["/usuarios"])},n=>{401==n.status?(alert("Sess\xe3o expirada"),this.router.navigate(["/login"])):(alert("Ocorreu um erro"),alert(n.message))})}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(c.i),i.Y36(a.F0))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-usuarios"]],decls:10,vars:1,consts:[[1,"container"],[1,"title"],[1,"produtosDiv"],[1,"produtoCats"],["class","produto",4,"ngFor","ngForOf"],[1,"addProduct"],[3,"click"],[1,"produto"],[1,"names"],[1,"name"],[1,"btnVenda",3,"click"]],template:function(n,t){1&n&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"h1"),i._uU(3,"USU\xc1RIOS"),i.qZA(),i.qZA(),i.TgZ(4,"div",2),i._UZ(5,"div",3),i.YNc(6,s,11,3,"div",4),i.qZA(),i.TgZ(7,"div",5),i.TgZ(8,"button",6),i.NdJ("click",function(){return t.addUsuario()}),i._uU(9,"+"),i.qZA(),i.qZA(),i.qZA()),2&n&&(i.xp6(6),i.Q6J("ngForOf",t.usuarios))},directives:[o.sg],styles:[".container[_ngcontent-%COMP%]{padding:30px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;width:100%;background-color:#9364f1;padding:5px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:25px;margin:10px 0}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]{display:flex;margin:30px 10px 0 30px}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1;text-align:center;margin:5px}.container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .produtoCats[_ngcontent-%COMP%]   h4.categoria[_ngcontent-%COMP%]{flex:2}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]{width:60%;margin:10px auto 0}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]{width:calc(100% - 40px);border:1px solid #cacaca;border-radius:30px;margin:20px;padding:10px;display:flex;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1;text-align:center;margin:5px}.container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .produtosDiv[_ngcontent-%COMP%]   .produto[_ngcontent-%COMP%]   h4.categoria[_ngcontent-%COMP%]{flex:2}.container[_ngcontent-%COMP%]   .addProduct[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:40px}.container[_ngcontent-%COMP%]   .addProduct[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:#9671f1;border-radius:30px;color:#fff;width:50px;height:49px;padding:0;margin:0;font-size:40px;font-weight:bold;cursor:pointer}.container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{cursor:pointer}.names[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:3}.names[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:normal}.names[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]:first-of-type{font-size:1.5em;font-weight:bold}.btnVenda[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:45px;height:50px;align-items:center}.btnVenda[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#9364f1;color:#fff;outline:none;border:none;padding:10px 15px;font-size:20px;cursor:pointer;border-radius:5px}"]}),n})();var g=e(665),d=e(9577);let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({providers:[c.i],imports:[[o.ez,a.Bz.forChild([{path:"",component:u}]),g.u5,d.uH]]}),n})()}}]);