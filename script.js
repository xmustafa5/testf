
   // navbar resposave

   

   const init1= function(){
    
    if (window.location.href.includes('#prog1')
    ){
      window.scrollTo(1500,1500)
      change.prog11.call()
    
    }else if(window.location.href.includes('#prog2')){
      window.scrollTo(1500,1500)
      change.prog22.call()
    } else if(window.location.href.includes('#prog3')){
      window.scrollTo(1700,1700)
      change.prog33.call()
    } else if(window.location.href.includes('#prog4')){
      window.scrollTo(1700,1700)
      change.prog44.call()
    }
    else if(window.location.href.includes('#prog5')){
      window.scrollTo(1700,1700)
      change.prog55.call()
    }
    else if(window.location.href.includes('#prog6')){
      window.scrollTo(1800,1800)
      change.prog66.call()
    }
   }
  
 window.onload=init1 


let mune = document.getElementById("mune")
let btn = document.getElementById("btn")
let nava = document.querySelector("aa")
let icon = document.querySelector(".fa-solid")


  btn.addEventListener('click', cc )

  function cc (){
      
      mune.classList.toggle("active");
      icon.classList.toggle("fa-xmark");
      // nava.classList.toggle('aa')
 }







  //navbar change
 let a1 = document.getElementById('a1')
 let a2 = document.getElementById('a2')
 let a3 = document.getElementById('a3')
 let a4 = document.getElementById('a4')
 let a5 = document.getElementById('a5')
 let animation = document.querySelector('.animation')
 
 a1.addEventListener('click', aa1)
 a2.addEventListener('click', aa2)
 a3.addEventListener('click', aa3)
 a4.addEventListener('click', aa4)
 a5.addEventListener('click', aa5)

   
 function aa1 () {
     animation.classList.add('animation1')
     animation.classList.remove('animation2')
     animation.classList.remove('animation3')
     animation.classList.remove('animation4')
     animation.classList.remove('animation5')
 }
 function aa2 () {
    animation.classList.add('animation2')
    animation.classList.remove('animation1')
    animation.classList.remove('animation3')
    animation.classList.remove('animation4')
    animation.classList.remove('animation5')

 }
 function aa3 () {
    animation.classList.add('animation3')
    animation.classList.remove('animation1')
    animation.classList.remove('animation2')
    animation.classList.remove('animation4')
    animation.classList.remove('animation5')

 }
 function aa4 () {
    animation.classList.add('animation4')
    animation.classList.remove('animation1')
    animation.classList.remove('animation3')
    animation.classList.remove('animation2')
    animation.classList.remove('animation5')

 }
 function aa5 () {
    animation.classList.add('animation5')
    animation.classList.remove('animation1')
    animation.classList.remove('animation3')
    animation.classList.remove('animation4')
    animation.classList.remove('animation2')

 }

     //qrcode

 let qrcode = document.querySelector('.grMove')
  

 

 a1.addEventListener('click', qrcode1)

 a2.addEventListener('click', qrcode2)
 

 function qrcode1(){
   qrcode.classList.add('grMove1')
   qrcode.classList.remove('grMove2')
   qrcode.classList.remove('grMove3')
 
 }
 function qrcode2(){
   qrcode.classList.add('grMove2')
   qrcode.classList.remove('grMove1')
   qrcode.classList.remove('grMove3')
 
 }

   



 //change

 let change = {
  prog11: function(){
  // sopace
  space1.classList.toggle('prog11')
  space2.classList.remove('prog11')
  space3.classList.remove('prog11')
  space4.classList.remove('prog11')
  space5.classList.remove('prog11')
  space6.classList.remove('prog11')
 //audio remove
   audio7.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio9.classList.remove('audioshow')
   audio10.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio12.classList.remove('audioshow')


  
  //add
  pp1.classList.add('ppshow')
  pp2.classList.remove('ppshow')
  pp3.classList.remove('ppshow')
  pp4.classList.remove('ppshow')
  pp5.classList.remove('ppshow')
  pp6.classList.remove('ppshow')
  //remove space
    prog1.classList.add('prog1')
    prog2.classList.remove('prog1')
    prog3.classList.remove('prog1')
    prog4.classList.remove('prog1')
    prog5.classList.remove('prog1')
    prog6.classList.remove('prog1')
   //  grcode addevent
    qrcode.classList.add('grMove3')
    qrcode.classList.remove('grMove1')
    qrcode.classList.remove('grMove2')
    qrcode.classList.remove('grMove4')
    qrcode.classList.remove('grMove5')
    qrcode.classList.remove('grMove6')
    qrcode.classList.remove('grMove7')
    qrcode.classList.remove('grMove8')

 
    },
    prog22: function(){
      
   // sopace
   space2.classList.toggle('prog11')
   space1.classList.remove('prog11')
   space3.classList.remove('prog11')
   space4.classList.remove('prog11')
   space5.classList.remove('prog11')
   space6.classList.remove('prog11')
  //audio remove 
  audio8.classList.add('audioshow')
  audio7.classList.remove('audioshow')
  audio9.classList.remove('audioshow')
  audio10.classList.remove('audioshow')
  audio11.classList.remove('audioshow')
  audio12.classList.remove('audioshow')
   
   //add  
    pp2.classList.add('ppshow')
   pp1.classList.remove('ppshow')
   pp3.classList.remove('ppshow')
   pp4.classList.remove('ppshow')
   pp5.classList.remove('ppshow')
   pp6.classList.remove('ppshow')

   //remove buttn
     prog2.classList.add('prog1')
     prog1.classList.remove('prog1')
     prog3.classList.remove('prog1')
     prog4.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
    //  grcode addevent
    qrcode.classList.add('grMove4')
    qrcode.classList.remove('grMove1')
    qrcode.classList.remove('grMove2')
    qrcode.classList.remove('grMove3')
    qrcode.classList.remove('grMove5')
    qrcode.classList.remove('grMove6')
    qrcode.classList.remove('grMove7')
    qrcode.classList.remove('grMove8')

     
    },
    prog33: function(){
    // sopace
    space3.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space1.classList.remove('prog11')
    space4.classList.remove('prog11')
    space5.classList.remove('prog11')
    space6.classList.remove('prog11')
   //audio remove
   audio9.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio7.classList.remove('audioshow')
   audio10.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio12.classList.remove('audioshow')
    
    //add
    pp3.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp4.classList.remove('ppshow')
    pp5.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog3.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog1.classList.remove('prog1')
     prog4.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
      //  grcode addevent
    qrcode.classList.add('grMove5')
    qrcode.classList.remove('grMove1')
    qrcode.classList.remove('grMove2')
    qrcode.classList.remove('grMove3')
    qrcode.classList.remove('grMove4')
    qrcode.classList.remove('grMove6')
    qrcode.classList.remove('grMove7')
    qrcode.classList.remove('grMove8')
    },
    prog44: function(){
      
    // sopace
    space4.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space3.classList.remove('prog11')
    space1.classList.remove('prog11')
    space5.classList.remove('prog11')
    space6.classList.remove('prog11')
   //audio remove
   audio10.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio9.classList.remove('audioshow')
   audio7.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio12.classList.remove('audioshow')
    
    //add
    pp4.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp3.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp5.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog4.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog1.classList.remove('prog1')
     prog3.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
    //  grcode addevent
    qrcode.classList.add('grMove6')
    qrcode.classList.remove('grMove1')
    qrcode.classList.remove('grMove2')
    qrcode.classList.remove('grMove3')
    qrcode.classList.remove('grMove5')
    qrcode.classList.remove('grMove4')
    qrcode.classList.remove('grMove7')
    qrcode.classList.remove('grMove8')

   
    },
    prog55: function(){
      
    // sopace
    space5.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space3.classList.remove('prog11')
    space4.classList.remove('prog11')
    space1.classList.remove('prog11')
    space6.classList.remove('prog11')
   //audio remove
     audio11.classList.add('audioshow')
     audio8.classList.remove('audioshow')
     audio9.classList.remove('audioshow')
     audio10.classList.remove('audioshow')
     audio7.classList.remove('audioshow')
     audio12.classList.remove('audioshow')
 
 
    
    //add
    pp5.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp3.classList.remove('ppshow')
    pp4.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog5.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog3.classList.remove('prog1')
      prog4.classList.remove('prog1')
      prog1.classList.remove('prog1')
      prog6.classList.remove('prog1')

        //  grcode addevent
  qrcode.classList.add('grMove7')
  qrcode.classList.remove('grMove1')
  qrcode.classList.remove('grMove2')
  qrcode.classList.remove('grMove3')
  qrcode.classList.remove('grMove4')
  qrcode.classList.remove('grMove5')
  qrcode.classList.remove('grMove6')
  qrcode.classList.remove('grMove8')

   
 
    },
    prog66: function(){
      
  // sopace
  space6.classList.toggle('prog11')
  space2.classList.remove('prog11')
  space3.classList.remove('prog11')
  space4.classList.remove('prog11')
  space5.classList.remove('prog11')
  space1.classList.remove('prog11')
 //audio remove
   audio12.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio9.classList.remove('audioshow')
   audio10.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio7.classList.remove('audioshow')


  
  //add
  pp6.classList.add('ppshow')
  pp2.classList.remove('ppshow')
  pp3.classList.remove('ppshow')
  pp4.classList.remove('ppshow')
  pp5.classList.remove('ppshow')
  pp1.classList.remove('ppshow')
  //remove space
    prog6.classList.add('prog1')
    prog2.classList.remove('prog1')
    prog3.classList.remove('prog1')
    prog4.classList.remove('prog1')
    prog5.classList.remove('prog1')
    prog1.classList.remove('prog1')
  //  grcode addevent
  qrcode.classList.add('grMove8')
  qrcode.classList.remove('grMove1')
  qrcode.classList.remove('grMove2')
  qrcode.classList.remove('grMove3')
  qrcode.classList.remove('grMove4')
  qrcode.classList.remove('grMove5')
  qrcode.classList.remove('grMove6')
  qrcode.classList.remove('grMove7')

  
    },
  aa1:  function aa1 () {
     animation.classList.add('animation1')
     
    animation.classList.remove('animation2')
    animation.classList.remove('animation3')
    animation.classList.remove('animation4')
    animation.classList.remove('animation5')
    animation.classList.remove('animation6')
  },
  aa2:  function aa2 () {
     animation.classList.add('animation2')
     animation.classList.remove('animation1')
     animation.classList.remove('animation3')
     animation.classList.remove('animation4')
     animation.classList.remove('animation5')
  },
  aa3:  function aa3 () {
     animation.classList.add('animation3')
     animation.classList.remove('animation1')
     animation.classList.remove('animation2')
     animation.classList.remove('animation4')
     animation.classList.remove('animation5')
  },
  qr1: function qrcode1(){
    qrcode.classList.add('grMove1')
    qrcode.classList.remove('grMove2')
    qrcode.classList.remove('grMove3')

  },
  qr2 :function qrcode2(){
    qrcode.classList.add('grMove2')
    qrcode.classList.remove('grMove1')
    qrcode.classList.remove('grMove3')
  },

}


//  SELECT SECTION FOR scroll navbar change
let one = document.querySelector('.main')
 let two = document.querySelector('.Emergence')
 let three = document.querySelector('.pro')
//  let four = document.querySelector('.kaftera')
//  let five = document.querySelector('.lop')
//  let six = document.querySelector('.branch1')
//  let seven = document.querySelector('.raiso')
// scroll
window.addEventListener('scroll', ()=>{
  let scrollPosition = document.documentElement.scrollTop;
  if (window.scrollY >=  one.offsetTop - one.offsetHeight * 0.2  &&
     scrollPosition <
       one.offsetTop + one.offsetHeight - one.offsetHeight * 0.25
        ){
           change.aa1.call()
           change.qr1.call()
 }
  }
 )
window.addEventListener('scroll', ()=>{
  let scrollPosition = document.documentElement.scrollTop;
  if (window.scrollY >=  two.offsetTop - two.offsetHeight -50 &&
     scrollPosition <
       two.offsetTop + two.offsetHeight - two.offsetHeight + 200
        ){
           change.aa2.call()
           change.qr2.call()
 }
 
  }
 )
  window.addEventListener('scroll', ()=>{
   let scrollPosition = document.documentElement.scrollTop;
   if (window.scrollY >= three.offsetTop - three.offsetHeight +400 &&
      scrollPosition <
        three.offsetTop + three.offsetHeight - three.offsetHeight * 0.5 ){
         change.aa3.call()
          // change.qr3.call()

     
  }
   }
  )
//  window.addEventListener('scroll', ()=>{
//   let scrollPosition = document.documentElement.scrollTop;
//   if (window.scrollY >= four.offsetTop - four.offsetHeight - 200 &&
//      scrollPosition <
//        four.offsetTop + four.offsetHeight - four.offsetHeight * 0.4){
//         change.aa4.call()
//         change.squre4.call()
     
//  }
//   }
//  )
//  window.addEventListener('scroll', ()=>{
//   let scrollPosition = document.documentElement.scrollTop;
//   if (window.scrollY >= five.offsetTop - five.offsetHeight * 0.25 &&
//      scrollPosition <
//        five.offsetTop + five.offsetHeight - five.offsetHeight * 0.8 ){
//         change.aa5.call()
//         change.squre5.call()

     
//  }
//   }
//  )
//  window.addEventListener('scroll', ()=>{
//   let scrollPosition = document.documentElement.scrollTop;
//   if (window.scrollY >= six.offsetTop - six.offsetHeight * 0.25 &&
//      scrollPosition <
//        six.offsetTop + six.offsetHeight - six.offsetHeight * 0.25 ){
//         change.aa6.call()
     
//  }
//   }
//  )
//  window.addEventListener('scroll', ()=>{
//  let scrollPosition = document.documentElement.scrollTop;
//  if (window.scrollY >= seven.offsetTop - seven.offsetHeight * 0.25 &&
//     scrollPosition <
//       seven.offsetTop + seven.offsetHeight - seven.offsetHeight * 0.25
//        ){
//        change.aa7.call()
    
// }
//  }
// )
   

  //scroll navbar
let lastScrollTop;

navbar1 = document.querySelector('.navigation');
window.addEventListener('scroll',function(){
  let scrollPosition = document.documentElement.scrollTop;
let scrollTop = window.pageYOffset || scrollPosition;
if(scrollTop > lastScrollTop){
  navbar1.classList.add('navigation1')


}
else{
  navbar1.classList.remove('navigation1')



}
lastScrollTop = scrollTop;
});


      let vi1 = document.querySelector(".audio1")
     let vi2 = document.querySelector(".audio2");
      // let vi3 = document.querySelector(".audio3");
      // let vi4 = document.querySelector(".audio4");
      // let vi5 = document.querySelector(".audio5");
      // let vi6 = document.querySelector(".audio6");
      vi1.onplay  = function () {
       vi1.classList.add('smooth-zigzag-anim-1')
        vi1.classList.remove('smooth-zigzag-anim-2')
        vi1.classList.remove('smooth-zigzag-anim-3')
   };
    vi2.onplay = function() {
        vi2.classList.add('smooth-zigzag-anim-2')
         vi2.classList.remove('smooth-zigzag-anim-1')
         vi2.classList.remove('smooth-zigzag-anim-3')

    };


// vi3.onplay = function() {
//   vi3.classList.add('smooth-zigzag-anim-3')
//   vi3.classList.remove('smooth-zigzag-anim-2')
//   vi3.classList.remove('smooth-zigzag-anim-1')
// };
// vi4.onplay = function() {
//   vi4.classList.add('smooth-zigzag-anim-3')
//   vi4.classList.remove('smooth-zigzag-anim-2')
//   vi4.classList.remove('smooth-zigzag-anim-1')
// };
// vi5.onplay = function() {
//   vi5.classList.add('smooth-zigzag-anim-2')
//   vi5.classList.remove('smooth-zigzag-anim-1')
//   vi5.classList.remove('smooth-zigzag-anim-3')
// };
// vi6.onplay = function() {
//   vi6.classList.add('smooth-zigzag-anim-1')
//   vi6.classList.remove('smooth-zigzag-anim-2')
//   vi6.classList.remove('smooth-zigzag-anim-3')
// };
// let space1 = document.getElementById('space1')
// let button1 = document.getElementById('button1')
// let button = document.getElementById('button')
// button.addEventListener('click', function (){
//   space.classList.toggle('prog11')
//   audio7.classList.toggle('audio7')
//   pp1.classList.toggle('ppshow')
// })
// button1.addEventListener('click', function (){
//   space.classList.toggle('prog11')
//   audio8.classList.toggle('audio8')
//   pp1.classList.toggle('ppshow')
// })


let space1 = document.getElementById('space1')
let space2 = document.getElementById('space2')
let space3 = document.getElementById('space3')
let space4 = document.getElementById('space4')
let space5 = document.getElementById('space5')
let space6 = document.getElementById('space6')

let prog1 = document.getElementById('prog1')
let prog2 = document.getElementById('prog2')
let prog3 = document.getElementById('prog3')
let prog4 = document.getElementById('prog4')
let prog5 = document.getElementById('prog5')
let prog6 = document.getElementById('prog6')
let audio7 = document.querySelector('.audio7')
let audio8 = document.querySelector('.audio8')
let audio9 = document.querySelector('.audio9')
let audio10 = document.querySelector('.audio10')
let audio11 = document.querySelector('.audio11')
let audio12 = document.querySelector('.audio12')
let pp1 = document.querySelector('.pp1')
let pp2 = document.querySelector('.pp2')
let pp3 = document.querySelector('.pp3')
let pp4 = document.querySelector('.pp4')
let pp5 = document.querySelector('.pp5')
let pp6 = document.querySelector('.pp6')



 prog1.addEventListener('click', function(){
  // sopace
   space1.classList.toggle('prog11')
   space2.classList.remove('prog11')
   space3.classList.remove('prog11')
   space4.classList.remove('prog11')
   space5.classList.remove('prog11')
   space6.classList.remove('prog11')
  //audio remove
    audio7.classList.add('audioshow')
    audio8.classList.remove('audioshow')
    audio9.classList.remove('audioshow')
    audio10.classList.remove('audioshow')
    audio11.classList.remove('audioshow')
    audio12.classList.remove('audioshow')


   
   //add
   pp1.classList.add('ppshow')
   pp2.classList.remove('ppshow')
   pp3.classList.remove('ppshow')
   pp4.classList.remove('ppshow')
   pp5.classList.remove('ppshow')
   pp6.classList.remove('ppshow')
   //remove space
     prog1.classList.add('prog1')
     prog2.classList.remove('prog1')
     prog3.classList.remove('prog1')
     prog4.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
    //  grcode addevent
     qrcode.classList.add('grMove3')
     qrcode.classList.remove('grMove1')
     qrcode.classList.remove('grMove2')
     qrcode.classList.remove('grMove4')
     qrcode.classList.remove('grMove5')
     qrcode.classList.remove('grMove6')
     qrcode.classList.remove('grMove7')
     qrcode.classList.remove('grMove8')

  
  })
 prog2.addEventListener('click', function(){
   // sopace
   space2.classList.toggle('prog11')
   space1.classList.remove('prog11')
   space3.classList.remove('prog11')
   space4.classList.remove('prog11')
   space5.classList.remove('prog11')
   space6.classList.remove('prog11')
  //audio remove 
  audio8.classList.add('audioshow')
  audio7.classList.remove('audioshow')
  audio9.classList.remove('audioshow')
  audio10.classList.remove('audioshow')
  audio11.classList.remove('audioshow')
  audio12.classList.remove('audioshow')
   
   //add  
    pp2.classList.add('ppshow')
   pp1.classList.remove('ppshow')
   pp3.classList.remove('ppshow')
   pp4.classList.remove('ppshow')
   pp5.classList.remove('ppshow')
   pp6.classList.remove('ppshow')

   //remove buttn
     prog2.classList.add('prog1')
     prog1.classList.remove('prog1')
     prog3.classList.remove('prog1')
     prog4.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
    //  grcode addevent
    qrcode.classList.add('grMove4')
    qrcode.classList.remove('grMove1')
    qrcode.classList.remove('grMove2')
    qrcode.classList.remove('grMove3')
    qrcode.classList.remove('grMove5')
    qrcode.classList.remove('grMove6')
    qrcode.classList.remove('grMove7')
    qrcode.classList.remove('grMove8')

     
 })
 prog3.addEventListener('click', function(){
    // sopace
    space3.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space1.classList.remove('prog11')
    space4.classList.remove('prog11')
    space5.classList.remove('prog11')
    space6.classList.remove('prog11')
   //audio remove
   audio9.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio7.classList.remove('audioshow')
   audio10.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio12.classList.remove('audioshow')
    
    //add
    pp3.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp4.classList.remove('ppshow')
    pp5.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog3.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog1.classList.remove('prog1')
     prog4.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
      //  grcode addevent
    qrcode.classList.add('grMove5')
    qrcode.classList.remove('grMove1')
    qrcode.classList.remove('grMove2')
    qrcode.classList.remove('grMove3')
    qrcode.classList.remove('grMove4')
    qrcode.classList.remove('grMove6')
    qrcode.classList.remove('grMove7')
    qrcode.classList.remove('grMove8')

 })
 prog4.addEventListener('click', function(){
    // sopace
    space4.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space3.classList.remove('prog11')
    space1.classList.remove('prog11')
    space5.classList.remove('prog11')
    space6.classList.remove('prog11')
   //audio remove
   audio10.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio9.classList.remove('audioshow')
   audio7.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio12.classList.remove('audioshow')
    
    //add
    pp4.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp3.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp5.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog4.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog1.classList.remove('prog1')
     prog3.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
    //  grcode addevent
    qrcode.classList.add('grMove6')
    qrcode.classList.remove('grMove1')
    qrcode.classList.remove('grMove2')
    qrcode.classList.remove('grMove3')
    qrcode.classList.remove('grMove5')
    qrcode.classList.remove('grMove4')
    qrcode.classList.remove('grMove7')
    qrcode.classList.remove('grMove8')

   

 })
 prog5.addEventListener('click', function(){
    // sopace
    space5.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space3.classList.remove('prog11')
    space4.classList.remove('prog11')
    space1.classList.remove('prog11')
    space6.classList.remove('prog11')
   //audio remove
     audio11.classList.add('audioshow')
     audio8.classList.remove('audioshow')
     audio9.classList.remove('audioshow')
     audio10.classList.remove('audioshow')
     audio7.classList.remove('audioshow')
     audio12.classList.remove('audioshow')
 
 
    
    //add
    pp5.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp3.classList.remove('ppshow')
    pp4.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog5.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog3.classList.remove('prog1')
      prog4.classList.remove('prog1')
      prog1.classList.remove('prog1')
      prog6.classList.remove('prog1')

        //  grcode addevent
  qrcode.classList.add('grMove7')
  qrcode.classList.remove('grMove1')
  qrcode.classList.remove('grMove2')
  qrcode.classList.remove('grMove3')
  qrcode.classList.remove('grMove4')
  qrcode.classList.remove('grMove5')
  qrcode.classList.remove('grMove6')
  qrcode.classList.remove('grMove8')

   
 
   

 })
 prog6.addEventListener('click', function(){
  // sopace
  space6.classList.toggle('prog11')
  space2.classList.remove('prog11')
  space3.classList.remove('prog11')
  space4.classList.remove('prog11')
  space5.classList.remove('prog11')
  space1.classList.remove('prog11')
 //audio remove
   audio12.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio9.classList.remove('audioshow')
   audio10.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio7.classList.remove('audioshow')


  
  //add
  pp6.classList.add('ppshow')
  pp2.classList.remove('ppshow')
  pp3.classList.remove('ppshow')
  pp4.classList.remove('ppshow')
  pp5.classList.remove('ppshow')
  pp1.classList.remove('ppshow')
  //remove space
    prog6.classList.add('prog1')
    prog2.classList.remove('prog1')
    prog3.classList.remove('prog1')
    prog4.classList.remove('prog1')
    prog5.classList.remove('prog1')
    prog1.classList.remove('prog1')
  //  grcode addevent
  qrcode.classList.add('grMove8')
  qrcode.classList.remove('grMove1')
  qrcode.classList.remove('grMove2')
  qrcode.classList.remove('grMove3')
  qrcode.classList.remove('grMove4')
  qrcode.classList.remove('grMove5')
  qrcode.classList.remove('grMove6')
  qrcode.classList.remove('grMove7')

  
 })



//  var navLinks = document.querySelectorAll("ul li a");
//  navLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     var currentId = e.target.attributes.href.value;
//     var section = document.querySelector(currentId);
//     var sectionPos = section.offsetTop;
//    //  section.scrollIntoView({
//    //    behavior: "smooth",
//   //   });

//      window.scroll({
//        top: sectionPos,
//        behavior: "smooth",
//      });
//   });
// });