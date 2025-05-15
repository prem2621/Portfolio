//turn page when click the next prev button//

const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((el,index)=>{
    el.onclick=()=>{
        const pageTurnId = el.getAttribute("data-page");
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20-index;
            },500)
        }
        else{
            pageTurn.classList.add('turn');
             setTimeout(() => {
               pageTurn.style.zIndex = 20 + index;
             }, 500);
        }
    }
})


const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick=()=>{
    pages.forEach((page,index)=>{
      setTimeout(()=>{
        page.classList.add('turn');
        
        setTimeout(()=>{
            page.style.zIndex = 20 + index;
        },500)
      },(index + 1)*200 + 100)
})

}





let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick=()=>{
    pages.forEach((_,index)=>{
        reverseIndex();
        setTimeout(()=>{
      pages[pageNumber].classList.remove('turn');

      setTimeout(()=>{
        reverseIndex();
        pages[pageNumber].style.zIndex = 10+ index;
      })
        },(index + 1)*200 +100)
    })
}




//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animation (cover right animation)
setTimeout(()=>{
    coverRight.classList.add('turn');
},2100)
setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

//openig animation (page left animation or profie page animation)
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);

//opening animation (all page riht animation)
 pages.forEach((_, index) => {
   reverseIndex();
   setTimeout(() => {
     pages[pageNumber].classList.remove("turn");

     setTimeout(() => {
       reverseIndex();
       pages[pageNumber].style.zIndex = 10 + index;
     });
   }, (index + 1) * 200 + 2100);
 });


                   //Send Message

document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();

  //collect from data

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  //Send data via mail

  window.location.href = `mailto:premkumar030926@gmail.com?subject=Message from ${name} &body=Email:${email}%OD%OA%OD%OAMessage : ${message}`;

  //clear from fields

  document.getElementById("contactForm").reset();

  //Conformation message

  alert("Your Message has been send successfully !");
})

