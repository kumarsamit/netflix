"use strict";(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[157],{3157:(M,a,o)=>{o.r(a),o.d(a,{SigninModule:()=>C});var m=o(9808);class l{constructor(){this.email="",this.password=""}}var n=o(5e3),i=o(3075),f=o(520),c=o(0),d=o(9898);const u=[{path:"",component:(()=>{class e{constructor(t,r,s,h){this.formbuilder=t,this.http=r,this.router=s,this.api=h,this.signinObj=new l,this.username="test",this.userpd="test"}ngOnInit(){this.loginUserForm=this.formbuilder.group({Email:[""],Password:[""]})}loginUser(){"test"==this.loginUserForm.value.Email&&"test"===this.loginUserForm.value.Password?(localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"),this.router.navigate(["/movies"])):alert("invalid user !!!")}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(i.qu),n.Y36(f.eN),n.Y36(c.F0),n.Y36(d.I))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signin"]],decls:31,vars:1,consts:[[1,"d-flex","justify-content-between","w-100"],["href","",1,"brand-logo"],["viewBox","0 0 111 30","aria-hidden","true","focusable","false",1,"svg-icon","svg-icon-netflix-logo"],["id","netflix-logo"],["d","M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z","id","Fill-14"],[1,"hero-section"],["action","",1,"signin-form",3,"formGroup"],[1,"form-group","mb-3"],["type","email","required","","placeholder","Email","formControlName","Email"],[1,"form-group","mb-5"],["type","password","required","","placeholder","password","formControlName","Password"],[1,"form-group"],[1,"btn","col-12","btn-danger",3,"click"],[1,"d-flex","justify-content-between","mt-2","checkme","mb-5"],[1,"form-check","d-flex","align-items-center"],["type","checkbox","id","exampleCheck1",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label","mx-2"],["href",""],[1,"mt-5","signup"],["routerLink","/signup"],[1,"mt-3","learn"]],template:function(t,r){1&t&&(n.TgZ(0,"header",0)(1,"a",1),n.O4$(),n.TgZ(2,"svg",2)(3,"g",3),n._UZ(4,"path",4),n.qZA()()()(),n.kcU(),n.TgZ(5,"div",5)(6,"form",6)(7,"h2"),n._uU(8,"Sign In"),n.qZA(),n.TgZ(9,"div",7),n._UZ(10,"input",8),n.qZA(),n.TgZ(11,"div",9),n._UZ(12,"input",10),n.qZA(),n.TgZ(13,"div",11)(14,"button",12),n.NdJ("click",function(){return r.loginUser()}),n._uU(15,"Sign In"),n.qZA()(),n.TgZ(16,"div",13)(17,"div",14),n._UZ(18,"input",15),n.TgZ(19,"label",16),n._uU(20,"Check me out"),n.qZA()(),n.TgZ(21,"a",17),n._uU(22,"Need help?"),n.qZA()(),n.TgZ(23,"div",18),n._uU(24," New to Netflix? "),n.TgZ(25,"a",19),n._uU(26,"Sign up now."),n.qZA()(),n.TgZ(27,"div",20),n._uU(28," This page is protected by Google reCAPTCHA to ensure you're not a bot. "),n.TgZ(29,"a",17),n._uU(30,"Learn more."),n.qZA()()()()),2&t&&(n.xp6(6),n.Q6J("formGroup",r.loginUserForm))},directives:[i._Y,i.JL,i.sg,i.Fj,i.Q7,i.JJ,i.u,c.yS],styles:["header[_ngcontent-%COMP%]{position:absolute;z-index:1;padding:2.8rem 5.6rem 0}header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{width:10rem;background:transparent}header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .svg-icon-netflix-logo[_ngcontent-%COMP%]{fill:#e50914;width:13.4rem}header[_ngcontent-%COMP%]   .red-btn[_ngcontent-%COMP%]{background-color:#e50914;line-height:normal;padding:.7rem 1.7rem;font-weight:400;font-size:1.6rem;font-family:regular;color:#fff}header[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding-left:1.375rem;padding-right:1.375rem;line-height:1.3rem;overflow:hidden;white-space:nowrap;color:#fff;font-family:regular;height:3.5rem;border:1px solid #fff;background:transparent}header[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background:#666}.hero-section[_ngcontent-%COMP%]{background-image:linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%),url(/assets/img/withoutLogin/hero-bg.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;width:100%;display:flex;justify-content:center;align-items:center}.hero-section[_ngcontent-%COMP%]   .hero-section-text[_ngcontent-%COMP%]{color:#fff;max-width:65rem;width:100%;text-align:center}.hero-section[_ngcontent-%COMP%]   .hero-section-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5rem;font-family:medium;line-height:1}.hero-section[_ngcontent-%COMP%]   .hero-section-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;line-height:1.1;font-family:regular;margin:1.6rem auto}.hero-section[_ngcontent-%COMP%]   .hero-section-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.9rem;font-family:light;line-height:1.1;margin-bottom:2rem}[_nghost-%COMP%]     .search-bar{display:flex;width:60rem;max-width:100%}[_nghost-%COMP%]     .search-bar .mat-form-field{flex-grow:1}[_nghost-%COMP%]     .search-bar .mat-form-field-flex{border-radius:0;background:#fff;font-family:regular;font-size:1.6rem;height:6rem}[_nghost-%COMP%]     .search-bar button{height:6rem;padding:0 4rem;border:.1rem solid #e50914;background:#e50914;color:#fff;font-size:2.2rem;font-family:regular}.feature-section-list[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]{padding:5rem 0;background:#000;border-top:.8rem solid #222}.feature-section-list[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5.2rem;line-height:1.2;font-family:medium;color:#fff}.feature-section-list[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.2rem;line-height:1.2;font-family:regular;color:#fff}.feature-section-list[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]   .tv-mockup[_ngcontent-%COMP%]{width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.feature-section-list[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]   .card-story-animation[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;border:2px solid #222;padding:1rem;border-radius:1rem;position:absolute;bottom:10%;background:#000;width:60%;left:50%;transform:translate(-50%)}.feature-section-list[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]   .card-story-animation[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{width:6rem;margin-right:1rem}.feature-section-list[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]   .card-story-animation[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{flex-grow:1}.feature-section-list[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]   .card-story-animation[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]{font-size:1.6rem;font-family:medium;margin-bottom:0}.feature-section-list[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]   .card-story-animation[_ngcontent-%COMP%]   .text2[_ngcontent-%COMP%]{font-family:light;font-size:1.4rem;color:#0071eb;margin-bottom:0}.feature-section-list[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]   .card-story-animation[_ngcontent-%COMP%]   .anim-icon[_ngcontent-%COMP%]{width:4.5rem}.signin-form[_ngcontent-%COMP%]{padding:6rem;background-color:#000000b3;border-radius:.4rem;width:50rem;max-width:90%}.signin-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border:none}.signin-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;background:#333;color:#8c8c8c;border:none;font-family:regular;padding:1.2rem}.signin-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:3.2rem;font-family:medium;color:#fff;margin-bottom:4rem}.signin-form[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]{padding:1.2rem;font-family:medium;background:#e50914;font-size:1.6rem}.signin-form[_ngcontent-%COMP%]   .checkme[_ngcontent-%COMP%]{color:#b3b3b3;font-size:1.3rem;font-family:regular}.signin-form[_ngcontent-%COMP%]   .checkme[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#b3b3b3;font-size:1.3rem;font-family:regular;text-decoration:none}.signin-form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{margin-top:6rem!important}.signin-form[_ngcontent-%COMP%]   .learn[_ngcontent-%COMP%], .signin-form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{font-size:1.6rem;font-family:regular;color:#737373}.signin-form[_ngcontent-%COMP%]   .learn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .signin-form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:1.6rem;font-family:regular;text-decoration:none}.signin-form[_ngcontent-%COMP%]   .learn[_ngcontent-%COMP%]{font-size:1.3rem}.signin-form[_ngcontent-%COMP%]   .learn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.3rem;color:#0071eb}@media only screen and (max-width: 767px){header[_ngcontent-%COMP%]{padding:1.5rem 1.5rem 0}header[_ngcontent-%COMP%]   .svg-icon-netflix-logo[_ngcontent-%COMP%]{width:12rem!important}header[_ngcontent-%COMP%]   .mx-5[_ngcontent-%COMP%]{margin:0 1rem!important}.signin-form[_ngcontent-%COMP%]{padding:1.5rem}}"]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[m.ez,c.Bz.forChild(u)]]}),e})()}}]);