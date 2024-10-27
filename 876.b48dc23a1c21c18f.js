"use strict";(self.webpackChunkgestion_cartera=self.webpackChunkgestion_cartera||[]).push([[876],{6876:(k,u,a)=>{a.r(u),a.d(u,{AuthModule:()=>b});var f=a(177),s=a(9012),o=a(9417),t=a(7705),l=a(5416);let h=(()=>{class n{constructor(r){this.data=r,this.toast=(0,t.WQX)(l.TQ)}static{this.\u0275fac=function(e){return new(e||n)(t.rXU(l.ht))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-toast"]],decls:2,vars:1,consts:[["matSnackBarLabel","",1,"toast"]],template:function(e,i){1&e&&(t.j41(0,"span",0),t.EFF(1),t.k0s()),2&e&&(t.R7$(1),t.SpI(" ",i.data.message,"\n"))},dependencies:[l.Mx],styles:[".toast[_ngcontent-%COMP%]{margin:0;display:flex;background:linear-gradient(to right,rgb(255,95,109),rgb(255,195,113));color:#fff}"]})}}return n})();var m=a(1626);let C=(()=>{class n{constructor(r){this.http=r,this.baseUrl="https://proyecto-finalde-finanzae-ingenieria-economica.vercel.app/"}registerCompany(r){const e=new m.Lr({"Content-Type":"application/json"});return this.http.post(`${this.baseUrl}company`,r,{headers:e})}login(r){const e=new m.Lr({"Content-Type":"application/json"});return this.http.get(`${this.baseUrl}company/${r.ruc}/${r.password}`,{headers:e})}static{this.\u0275fac=function(e){return new(e||n)(t.KVO(m.Qq))}}static{this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var p=a(9631),c=a(882),g=a(8834);function x(n,P){1&n&&(t.j41(0,"span"),t.EFF(1,"Iniciar sesi\xf3n"),t.k0s())}function y(n,P){1&n&&t.nrm(0,"span",16)}const M=[{path:"",component:(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-layout-auth"]],decls:1,vars:0,template:function(e,i){1&e&&t.nrm(0,"router-outlet")},dependencies:[s.n3],encapsulation:2})}}return n})(),children:[{path:"login",component:(()=>{class n{constructor(r,e,i){this.router=r,this.authService=e,this.toastRef=i,this.status="init",this.loginForm=new o.gE({ruc:new o.MJ(null,[o.k0.required,o.k0.minLength(11),o.k0.maxLength(11)]),password:new o.MJ(null,[o.k0.required])})}openToast(r,e){this.toastRef.openFromComponent(h,{data:{message:r,type:e},duration:3e3,verticalPosition:"top",horizontalPosition:"right"})}login(){if(this.loginForm.markAllAsTouched(),this.loginForm.invalid)return;const{ruc:r,password:e}=this.loginForm.value;this.status="loading",this.authService.login({ruc:r,password:e}).subscribe({next:i=>{i&&this.router.navigateByUrl("/app/portfolio"),i||this.openToast("Su RUC o contrase\xf1a son incorrectos, vuelva a revisarlos","failed")},error:i=>{this.status="failed",this.openToast("El usuario no existe","failed")},complete:()=>{this.status="init"}})}static{this.\u0275fac=function(e){return new(e||n)(t.rXU(s.Ix),t.rXU(C),t.rXU(l.UG))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-login"]],decls:31,vars:4,consts:[[1,"content"],[1,"login"],[1,"login__title"],["action","#",1,"form",3,"formGroup","ngSubmit"],["appearance","fill","color","primary",1,"form__field"],["formControlName","ruc","matInput","","type","text","placeholder","Ingrese su RUC","maxlength","11"],["appearance","fill",1,"form__field"],["formControlName","password","matInput","","type","password","placeholder","Ingrese su contrase\xf1a"],["mat-button","","mat-flat-button","","type","submit","color","primary",1,"form__submit",3,"disabled"],[4,"ngIf"],["class","loader",4,"ngIf"],[1,"form__or"],[1,"login__options"],["routerLink","/auth/register"],[1,"image"],["src","assets/images/login.png","alt","login image"],[1,"loader"]],template:function(e,i){1&e&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t.EFF(4,"Bienvenido"),t.k0s(),t.j41(5,"span"),t.EFF(6,"Por favor ingrese sus datos"),t.k0s()(),t.j41(7,"form",3),t.bIt("ngSubmit",function(){return i.login()}),t.j41(8,"mat-form-field",4)(9,"mat-label"),t.EFF(10,"RUC"),t.k0s(),t.nrm(11,"input",5),t.k0s(),t.j41(12,"mat-form-field",6)(13,"mat-label"),t.EFF(14,"Contrase\xf1a"),t.k0s(),t.nrm(15,"input",7),t.k0s(),t.j41(16,"button",8),t.DNE(17,x,2,0,"span",9),t.DNE(18,y,1,0,"span",10),t.k0s(),t.j41(19,"div",11),t.nrm(20,"hr"),t.j41(21,"span"),t.EFF(22," O "),t.k0s(),t.nrm(23,"hr"),t.k0s()(),t.j41(24,"div",12)(25,"p"),t.EFF(26,"\xbfNo tienes una cuenta?"),t.k0s(),t.j41(27,"a",13),t.EFF(28,"Reg\xedstrate"),t.k0s()()(),t.j41(29,"div",14),t.nrm(30,"img",15),t.k0s()()),2&e&&(t.R7$(7),t.Y8G("formGroup",i.loginForm),t.R7$(9),t.Y8G("disabled","loading"===i.status),t.R7$(1),t.Y8G("ngIf","loading"!==i.status),t.R7$(1),t.Y8G("ngIf","loading"===i.status))},dependencies:[f.bT,s.Wk,o.qT,o.me,o.BC,o.cb,o.tU,o.j4,o.JD,p.fg,c.rl,c.nJ,g.$z],styles:[".content[_ngcontent-%COMP%]{width:90%;max-width:1200px;margin:0 auto;display:flex;justify-content:center;align-items:center;gap:2rem;height:100%}.login[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3;width:100%;max-width:464px;display:flex;flex-direction:column;padding:0 64px;flex-grow:1;gap:32px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.form[_ngcontent-%COMP%]   .form__field[_ngcontent-%COMP%]{display:block;width:100%;flex-grow:1}.form[_ngcontent-%COMP%]   .form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .form__submit[_ngcontent-%COMP%]{background-color:#3566e7;margin-bottom:20px}.form[_ngcontent-%COMP%]   .form__submit.disabled[_ngcontent-%COMP%]{cursor:not-allowed}.form[_ngcontent-%COMP%]   .form__submit.undisabled[_ngcontent-%COMP%]{cursor:pointer}.form__or[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.form__or[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:1}.form__or[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 8px}.login__options[_ngcontent-%COMP%]{display:flex;gap:8px}.login__options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;color:var(--primary-color)}.image[_ngcontent-%COMP%], .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}@media (width>=728px){.content[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:0}.login[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:2}.image[_ngcontent-%COMP%]{position:absolute;right:0;z-index:-100;width:55%;display:block;overflow:hidden;max-width:800.375px;height:100%;box-shadow:-27px 0 44.1px -13px #3a6beb5c}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;object-fit:cover}}.loader[_ngcontent-%COMP%]{width:30px;height:30px;border:5px solid #FFF;border-bottom-color:#97ff6c;border-radius:50%;display:inline-block;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})}}return n})()},{path:"register",component:(()=>{class n{constructor(r,e,i){this.authService=r,this.router=e,this.toastRef=i,this.requestStatus="failed",this.registerForm=new o.gE({ruc:new o.MJ(null,[o.k0.required,o.k0.minLength(11)]),razonSocial:new o.MJ(null,[o.k0.required]),direccion:new o.MJ(null,[o.k0.required]),sector:new o.MJ(null,[o.k0.required]),password:new o.MJ(null,[o.k0.required])})}register(){if(this.registerForm.markAllAsTouched(),this.registerForm.invalid)return;const{ruc:r,razonSocial:e,direccion:i,sector:d,password:O}=this.registerForm.value;this.authService.registerCompany({ruc:r,razon_social:e,direccion:i,sector:d,password:O}).subscribe({next:()=>{this.router.navigateByUrl("/app/portfolio")},error:E=>{this.toastRef.openFromComponent(h,{data:{message:"Ocurrio un error en nuestro servidor, intentelo m\xe1s tarde",type:"failed"},duration:3e3,verticalPosition:"top",horizontalPosition:"right"})}})}static{this.\u0275fac=function(e){return new(e||n)(t.rXU(C),t.rXU(s.Ix),t.rXU(l.UG))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-register"]],decls:42,vars:1,consts:[[1,"content"],[1,"login"],[1,"login__title"],["action","#",1,"form",3,"formGroup","ngSubmit"],["appearance","fill","color","primary",1,"form__field"],["formControlName","ruc","matInput","","type","text","placeholder","Ingrese el RUC de su empresa","maxlength","11"],["appearance","fill",1,"form__field"],["formControlName","razonSocial","matInput","","type","text","placeholder","Ingrese la razon social"],["formControlName","direccion","matInput","","type","text","placeholder","Ingrese la direccion legal"],["formControlName","sector","matInput","","type","text","placeholder","Ingrese el sector al que pertenece"],["formControlName","password","matInput","","type","password","placeholder","Ingrese su contrase\xf1a"],["mat-button","","mat-flat-button","","type","submit","color","primary",1,"form__submit"],[1,"form__or"],[1,"login__options"],["routerLink","/auth/login"],[1,"image"],["src","assets/images/login.png","alt","login image"]],template:function(e,i){1&e&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t.EFF(4,"Registrarse"),t.k0s(),t.j41(5,"span"),t.EFF(6,"Por favor ingrese sus datos"),t.k0s()(),t.j41(7,"form",3),t.bIt("ngSubmit",function(){return i.register()}),t.j41(8,"mat-form-field",4)(9,"mat-label"),t.EFF(10,"RUC de la empresa"),t.k0s(),t.nrm(11,"input",5),t.k0s(),t.j41(12,"mat-form-field",6)(13,"mat-label"),t.EFF(14,"Razon social"),t.k0s(),t.nrm(15,"input",7),t.k0s(),t.j41(16,"mat-form-field",6)(17,"mat-label"),t.EFF(18,"Direccion de la sede principal"),t.k0s(),t.nrm(19,"input",8),t.k0s(),t.j41(20,"mat-form-field",6)(21,"mat-label"),t.EFF(22,"Sector"),t.k0s(),t.nrm(23,"input",9),t.k0s(),t.j41(24,"mat-form-field",6)(25,"mat-label"),t.EFF(26,"Constrase\xf1a"),t.k0s(),t.nrm(27,"input",10),t.k0s(),t.j41(28,"button",11),t.EFF(29,"Registrarse"),t.k0s(),t.j41(30,"div",12),t.nrm(31,"hr"),t.j41(32,"span"),t.EFF(33," O "),t.k0s(),t.nrm(34,"hr"),t.k0s()(),t.j41(35,"div",13)(36,"p"),t.EFF(37,"\xbfTienes una cuenta?"),t.k0s(),t.j41(38,"a",14),t.EFF(39,"Login"),t.k0s()()(),t.j41(40,"div",15),t.nrm(41,"img",16),t.k0s()()),2&e&&(t.R7$(7),t.Y8G("formGroup",i.registerForm))},dependencies:[s.Wk,o.qT,o.me,o.BC,o.cb,o.tU,o.j4,o.JD,p.fg,c.rl,c.nJ,g.$z],styles:[".content[_ngcontent-%COMP%]{width:90%;max-width:1200px;margin:0 auto;display:flex;flex-direction:row;gap:2rem;align-items:center;justify-content:center;height:100%}.login[_ngcontent-%COMP%]{max-width:464px;display:flex;flex-direction:column;padding:0 64px;flex-grow:1;gap:32px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.form[_ngcontent-%COMP%]   .form__field[_ngcontent-%COMP%]{display:block;width:100%;flex-grow:1}.form[_ngcontent-%COMP%]   .form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .form__submit[_ngcontent-%COMP%]{background-color:#3566e7;margin-bottom:20px}.form__or[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.form__or[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:1}.form__or[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 8px}.login__options[_ngcontent-%COMP%]{display:flex;gap:8px}.login__options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;color:var(--primary-color)}.image[_ngcontent-%COMP%], .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}@media (width>=728px){.image[_ngcontent-%COMP%]{display:block;overflow:hidden;max-width:800.375px;height:100%;box-shadow:-27px 0 44.1px -13px #3a6beb5c}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;object-fit:cover}}"]})}}return n})()},{path:"**",redirectTo:"login"}]}];let F=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[s.iI.forChild(M),s.iI]})}}return n})(),b=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[f.MD,F,o.X1,p.fS,c.RG,g.Hl]})}}return n})()}}]);