"use strict";(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[215],{1215:(w,a,r)=>{r.r(a),r.d(a,{TvShowDetailsModule:()=>d});var l=r(9808),e=r(5e3),u=r(9898),n=r(0),h=r(2313);function m(t,i){if(1&t&&e._UZ(0,"iframe",1),2&t){const o=e.oxw();e.Q6J("src",o.trailerurl,e.uOi)}}const p=[{path:"",component:(()=>{class t{constructor(o,s,f){this.movie=o,this.route=s,this.domSanitizer=f,this.trailer="https://api.themoviedb.org/3/tv/"+this.route.snapshot.params.id+"/videos?api_key=ddf611caad1fe1aab5910321c0cfa7ba",console.log(this.trailer),this.movie.getData(this.trailer).subscribe(c=>{this.trailerList=c,console.log(c);let v=this.getRandomInt(this.trailerList.results.length);this.trailerurl=this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.trailerList.results[v].key+"?showinfo=0&rel=0&autoplay=1&loop=1"),console.log(this.trailerurl)})}getRandomInt(o){return Math.floor(Math.random()*o)}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(u.I),e.Y36(n.gz),e.Y36(h.H7))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tv-show-details"]],decls:1,vars:1,consts:[["width","100%","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src",4,"ngIf"],["width","100%","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"]],template:function(o,s){1&o&&e.YNc(0,m,1,1,"iframe",0),2&o&&e.Q6J("ngIf",s.trailerurl)},directives:[l.O5],styles:["iframe[_ngcontent-%COMP%]{width:100%;aspect-ratio:2.3}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,n.Bz.forChild(p)]]}),t})()}}]);