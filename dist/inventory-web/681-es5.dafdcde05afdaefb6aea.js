!function(){"use strict";function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(self.webpackChunkinventory_web=self.webpackChunkinventory_web||[]).push([[681],{8681:function(o,e,r){r.r(e),r.d(e,{AddUsuarioModule:function(){return f}});var i,a=r(8583),c=r(7789),u=r(639),g=r(3612),p=r(5855),d=r(665),l=((i=function(){function o(t,e){n(this,o),this.usuarioService=t,this.router=e,this.usuario=new c.b}var e,r,i;return e=o,(r=[{key:"ngOnInit",value:function(){}},{key:"submit",value:function(){var n=this;""==this.usuario.name||null==this.usuario.email?alert("Preencha os campos"):(this.usuario.password="teste123",this.usuarioService.cadUsuario(this.usuario).subscribe(function(t){alert("Usu\xe1rio cadastrado com senha padr\xe3o: teste123"),n.router.navigate(["/usuarios"])},function(t){401==t.status?(alert("Sess\xe3o expirada"),n.router.navigate(["/login"])):(alert("Ocorreu um erro"),alert(t.message))}))}}])&&t(e.prototype,r),i&&t(e,i),o}()).\u0275fac=function(n){return new(n||i)(u.Y36(g.i),u.Y36(p.F0))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-add-usuario"]],decls:28,vars:3,consts:[[1,"container"],[1,"title"],["role","form","name","produtoForm","novalidate","novalidate","data-parsley-priority-enabled","false","method","post","autocomplete","off"],[1,"formGroup"],["type","text","id","name","name","name",3,"ngModel","ngModelChange"],["type","text","id","email","name","email",3,"ngModel","ngModelChange"],["id","cat","name","cat",3,"ngModel","ngModelChange"],["value","admin"],["value","compra"],["value","venda"],["value","view"],[1,"btnDiv"],["type","submit",1,"btnSubmit",3,"click"]],template:function(n,t){1&n&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"h1"),u._uU(3,"ADICIONAR USUARIO"),u.qZA(),u.qZA(),u.TgZ(4,"form",2),u.TgZ(5,"div",3),u.TgZ(6,"label"),u._uU(7,"Nome do Usuario"),u.qZA(),u.TgZ(8,"input",4),u.NdJ("ngModelChange",function(n){return t.usuario.name=n}),u.qZA(),u.qZA(),u.TgZ(9,"div",3),u.TgZ(10,"label"),u._uU(11,"Email do Usuario"),u.qZA(),u.TgZ(12,"input",5),u.NdJ("ngModelChange",function(n){return t.usuario.email=n}),u.qZA(),u.qZA(),u.TgZ(13,"div",3),u.TgZ(14,"label"),u._uU(15,"Papel"),u.qZA(),u.TgZ(16,"select",6),u.NdJ("ngModelChange",function(n){return t.usuario.role=n}),u.TgZ(17,"option",7),u._uU(18,"ADMIN"),u.qZA(),u.TgZ(19,"option",8),u._uU(20,"COMPRA"),u.qZA(),u.TgZ(21,"option",9),u._uU(22,"VENDA"),u.qZA(),u.TgZ(23,"option",10),u._uU(24,"VIEW - Apenas Visualiza\xe7\xe3o"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(25,"div",11),u.TgZ(26,"button",12),u.NdJ("click",function(){return t.submit()}),u._uU(27,"Cadastrar"),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&n&&(u.xp6(8),u.Q6J("ngModel",t.usuario.name),u.xp6(4),u.Q6J("ngModel",t.usuario.email),u.xp6(4),u.Q6J("ngModel",t.usuario.role))},directives:[d._Y,d.JL,d.F,d.Fj,d.JJ,d.On,d.EJ,d.YN,d.Kr],styles:[".container[_ngcontent-%COMP%]{padding:30px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;width:100%;background-color:#9364f1;padding:5px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:25px;margin:10px 0}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:50px;justify-content:center;display:flex;align-items:center;flex-direction:column}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:20px 0}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:bold;margin-bottom:10px;color:#534962}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#fff;width:340px;border-radius:15px;box-shadow:none;outline:none;border:1px solid #9671f1;font-size:16px;padding:15px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding-right:15px;width:370px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   .formGroupMoney[_ngcontent-%COMP%]{display:flex}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   .formGroupMoney[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:1px solid #9671f1;height:48px;border-right:none;border-radius:15px 0 0 15px;display:flex;align-items:center;padding:0 15px;font-size:20px;color:#fff;background:#9671f1}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   .formGroupMoney[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100px;border-left:none;border-radius:0 15px 15px 0}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup2[_ngcontent-%COMP%]{display:flex;grid-column-gap:50px;-moz-column-gap:50px;column-gap:50px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btnDiv[_ngcontent-%COMP%]{display:flex;grid-column-gap:50px;-moz-column-gap:50px;column-gap:50px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btnSubmit[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:2rem;border:none;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background:#ccd1ff;color:#5e17eb;border-radius:50px;font-size:20px;cursor:pointer;padding:16px 40px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btnDelete[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:2rem;border:none;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background:#ff4646;color:#fff;border-radius:50px;font-size:20px;cursor:pointer;padding:16px 40px}"]}),i),f=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({providers:[g.i],imports:[[a.ez,p.Bz.forChild([{path:"",component:l}]),d.u5]]}),t}()}}])}();