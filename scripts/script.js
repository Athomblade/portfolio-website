

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

    menu.style.backgroundColor = 'black'
    
        
   }

function whiteBack(){

menu = document.querySelector('#menu');

menu.style.backgroundColor = 'white'



}

