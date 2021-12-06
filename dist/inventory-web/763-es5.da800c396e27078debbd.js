!function(){"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(self.webpackChunkinventory_web=self.webpackChunkinventory_web||[]).push([[763],{4763:function(t,o,r){r.r(o),r.d(o,{AddFornecedorModule:function(){return C}});var i=r(8583),c=r(4294),a=r(639),d=r(2385),f=r(5855),g=r(665);function l(n,e){1&n&&(a.TgZ(0,"h1"),a._uU(1,"ADICIONAR FORNECEDOR"),a.qZA())}function u(n,e){1&n&&(a.TgZ(0,"h1"),a._uU(1,"ALTERAR FORNECEDOR"),a.qZA())}function s(n,e){if(1&n){var t=a.EpF();a.TgZ(0,"button",13),a.NdJ("click",function(){return a.CHM(t),a.oxw().submit()}),a._uU(1,"Cadastrar"),a.qZA()}}function p(n,e){if(1&n){var t=a.EpF();a.TgZ(0,"button",14),a.NdJ("click",function(){return a.CHM(t),a.oxw().delete()}),a._uU(1,"Excluir"),a.qZA()}}function m(n,e){if(1&n){var t=a.EpF();a.TgZ(0,"button",15),a.NdJ("click",function(){return a.CHM(t),a.oxw().edit()}),a._uU(1,"Alterar"),a.qZA()}}var h,M=((h=function(){function t(e,o){n(this,t),this.fornecedorService=e,this.router=o,this.fornecedor=new c.u,this.isEditing=!1}var o,r,i;return o=t,(r=[{key:"ngOnInit",value:function(){var n=history.state.fornecedor;n&&(this.fornecedor=n,this.isEditing=!0)}},{key:"submit",value:function(){var n=this;if(""==this.fornecedor.name||null==this.fornecedor.email||null==this.fornecedor.cnpj||null==this.fornecedor.telefone)alert("Preencha todos os campos");else{var e={};e.name=this.fornecedor.name,e.corporateName=this.fornecedor.name,e.cnpj=this.fornecedor.cnpj,e.phoneNumber=this.fornecedor.telefone,e.email=this.fornecedor.email,e.address={street:"Rua Provider",number:1,neighborhood:"Bairro Provider",state:"SP",city:"S\xe3o Paulo",cep:"00000-00"},this.fornecedorService.addFornecedor(e).subscribe(function(e){alert("Fornecedor Cadastrado com sucesso"),n.router.navigate(["/fornecedores"])},function(e){401==e.status?(alert("Sess\xe3o expirada"),n.router.navigate(["/login"])):(alert("Ocorreu um erro"),alert(e.message))})}}},{key:"delete",value:function(){var n=this;this.fornecedorService.deletarFornecedor(this.fornecedor).subscribe(function(e){alert("Fornecedor Exclu\xeddo com Sucesso"),n.router.navigate(["/fornecedores"])},function(e){401==e.status?(alert("Sess\xe3o expirada"),n.router.navigate(["/login"])):(alert("Ocorreu um erro"),alert(e.message))})}},{key:"edit",value:function(){var n=this;if(""==this.fornecedor.name||null==this.fornecedor.email||null==this.fornecedor.cnpj||null==this.fornecedor.telefone)alert("Preencha todos os campos");else{var e={};e.id=this.fornecedor.id,e.name=this.fornecedor.name,e.corporateName=this.fornecedor.name,e.cnpj=this.fornecedor.cnpj,e.phoneNumber=this.fornecedor.telefone,e.email=this.fornecedor.email,e.address={street:"Rua Provider",number:1,neighborhood:"Bairro Provider",state:"SP",city:"S\xe3o Paulo",cep:"00000-00"},this.fornecedorService.updateFornecedor(e).subscribe(function(e){alert("Fornecedor alterado com sucesso"),n.router.navigate(["/fornecedores"])},function(e){401==e.status?(alert("Sess\xe3o expirada"),n.router.navigate(["/login"])):(alert("Ocorreu um erro"),alert(e.message))})}}}])&&e(o.prototype,r),i&&e(o,i),t}()).\u0275fac=function(n){return new(n||h)(a.Y36(d.p),a.Y36(f.F0))},h.\u0275cmp=a.Xpm({type:h,selectors:[["app-add-fornecedor"]],decls:25,vars:9,consts:[[1,"container"],[1,"title"],[4,"ngIf"],["role","form","name","produtoForm","novalidate","novalidate","data-parsley-priority-enabled","false","method","post","autocomplete","off"],[1,"formGroup"],["type","text","id","name","name","name",3,"ngModel","ngModelChange"],["type","text","id","email","name","email",3,"ngModel","ngModelChange"],["type","text","id","cnpj","name","cnpj",3,"ngModel","ngModelChange"],["type","text","id","telefone","name","telefone",3,"ngModel","ngModelChange"],[1,"btnDiv"],["class","btnSubmit","type","submit",3,"click",4,"ngIf"],["class","btnDelete",3,"click",4,"ngIf"],["class","btnSubmit",3,"click",4,"ngIf"],["type","submit",1,"btnSubmit",3,"click"],[1,"btnDelete",3,"click"],[1,"btnSubmit",3,"click"]],template:function(n,e){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.YNc(2,l,2,0,"h1",2),a.YNc(3,u,2,0,"h1",2),a.qZA(),a.TgZ(4,"form",3),a.TgZ(5,"div",4),a.TgZ(6,"label"),a._uU(7,"Nome do Fornecedor"),a.qZA(),a.TgZ(8,"input",5),a.NdJ("ngModelChange",function(n){return e.fornecedor.name=n}),a.qZA(),a.qZA(),a.TgZ(9,"div",4),a.TgZ(10,"label"),a._uU(11,"Email do Fornecedor"),a.qZA(),a.TgZ(12,"input",6),a.NdJ("ngModelChange",function(n){return e.fornecedor.email=n}),a.qZA(),a.qZA(),a.TgZ(13,"div",4),a.TgZ(14,"label"),a._uU(15,"CNPJ do Fornecedor"),a.qZA(),a.TgZ(16,"input",7),a.NdJ("ngModelChange",function(n){return e.fornecedor.cnpj=n}),a.qZA(),a.qZA(),a.TgZ(17,"div",4),a.TgZ(18,"label"),a._uU(19,"Telefone Fornecedor"),a.qZA(),a.TgZ(20,"input",8),a.NdJ("ngModelChange",function(n){return e.fornecedor.telefone=n}),a.qZA(),a.qZA(),a.TgZ(21,"div",9),a.YNc(22,s,2,0,"button",10),a.YNc(23,p,2,0,"button",11),a.YNc(24,m,2,0,"button",12),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(2),a.Q6J("ngIf",!e.isEditing),a.xp6(1),a.Q6J("ngIf",e.isEditing),a.xp6(5),a.Q6J("ngModel",e.fornecedor.name),a.xp6(4),a.Q6J("ngModel",e.fornecedor.email),a.xp6(4),a.Q6J("ngModel",e.fornecedor.cnpj),a.xp6(4),a.Q6J("ngModel",e.fornecedor.telefone),a.xp6(2),a.Q6J("ngIf",!e.isEditing),a.xp6(1),a.Q6J("ngIf",e.isEditing),a.xp6(1),a.Q6J("ngIf",e.isEditing))},directives:[i.O5,g._Y,g.JL,g.F,g.Fj,g.JJ,g.On],styles:[".container[_ngcontent-%COMP%]{padding:30px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;width:100%;background-color:#9364f1;padding:5px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:25px;margin:10px 0}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:50px;justify-content:center;display:flex;align-items:center;flex-direction:column}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:20px 0}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:bold;margin-bottom:10px;color:#534962}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#fff;width:340px;border-radius:15px;box-shadow:none;outline:none;border:1px solid #9671f1;font-size:16px;padding:15px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding-right:15px;width:370px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   .formGroupMoney[_ngcontent-%COMP%]{display:flex}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   .formGroupMoney[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:1px solid #9671f1;height:48px;border-right:none;border-radius:15px 0 0 15px;display:flex;align-items:center;padding:0 15px;font-size:20px;color:#fff;background:#9671f1}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup[_ngcontent-%COMP%]   .formGroupMoney[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100px;border-left:none;border-radius:0 15px 15px 0}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup2[_ngcontent-%COMP%]{display:flex;grid-column-gap:50px;-moz-column-gap:50px;column-gap:50px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .formGroup2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btnDiv[_ngcontent-%COMP%]{display:flex;grid-column-gap:50px;-moz-column-gap:50px;column-gap:50px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btnSubmit[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:2rem;border:none;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background:#ccd1ff;color:#5e17eb;border-radius:50px;font-size:20px;cursor:pointer;padding:16px 40px}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btnDelete[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:2rem;border:none;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background:#ff4646;color:#fff;border-radius:50px;font-size:20px;cursor:pointer;padding:16px 40px}"]}),h),C=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({providers:[d.p],imports:[[i.ez,f.Bz.forChild([{path:"",component:M}]),g.u5]]}),e}()}}])}();