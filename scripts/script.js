

const logo = document.querySelector('#logoimage')

window.addEventListener('scroll', function(event){
    let scroll = this.scrollY;
    console.log(scroll)
    if(scroll < 100){
        logo.style.width = '30%'
        logo.style.height = '30%'
        
    }else if( 100 < scroll){
        logo.style.width = '10%'
        logo.style.height = '10%'
        
    }
})


// const image = document.querySelectorAll('.logoimg')

// function chooseSkill(){
    
//     idnum = document.getElementById(d)
//      idnum.classList.add('centered') 
// }

// function skillChoose(xid, xid2){
//     img1 = document.querySelector(xid2)
//     d = document.querySelector(xid)
//     d.classList.add('centered')
//     img1.classList.add('bigger')
//     img1.classList.remove('logoimg')

//     console.log('dsasda')
//     }
  
//     function skillChoose2(xid, xid2){
//         img1 = document.querySelector(xid2)
//         d = document.querySelector(xid)
//         d.classList.remove('centered')
//         img1.classList.remove('bigger')
//         img1.classList.add('logoimg')
    
        
//         }
    



function blackBack(){
    menu = document.querySelector('#menu');
    body = document.querySelector('body')
    menu.style.backgroundColor = 'black'
    body.style.backgroundColor = 'black'
    
        
   }

function whiteBack(){

menu = document.querySelector('#menu');
body = document.querySelector('body')

menu.style.backgroundColor = 'white'
body.style.backgroundColor = 'white'


}

const para = document.querySelectorAll('p')
para.forEach((img) => {
    img.classList.add('hidden2')
})


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove("show");
        }
    });
});


const hiddenEle = document.querySelectorAll(".hidden");
hiddenEle.forEach((el) => observer.observe(el));

const hiddenEle2 = document.querySelectorAll(".hidden2");
hiddenEle2.forEach((el2) => observer.observe(el2));


