let userImg=document.getElementById('testmonial-user');

const user_img = document.getElementById("user");
user_img.src = userImg.src;

// let nextbtn=document.getElementsByClassName('owl-nav');
// console.log(nextbtn)

// var element = document.getElementsByClassName('owl-nav');
// var children = element.children;
// console.log(children)




    // let userImg=document. getElementsByName('owl-item active');
    // const user_img = document.getElementById("user");
    // user_img.src = userImg.src;

//     var testContainer = document.querySelector('.owl-stage');
// var fourChildNode = testContainer.querySelector('.four');
// console.log(fourChildNode)


window.onload=function(){
    let arrow_next=document.querySelector(".slick-next");
let arrow_prev=document.querySelector(".slick-prev");

arrow_next.addEventListener('click',function(){
    


    const userclass = document.getElementsByClassName("slick-active");
    let userImg = userclass[0].children[0];
    const user_img = document.getElementById("user");
    user_img.src = userImg.src;
    
    })



    arrow_prev.addEventListener('click',function(){
    


        const userclass = document.getElementsByClassName("slick-active");
        let userImg = userclass[0].children[0];
        const user_img = document.getElementById("user");
        user_img.src = userImg.src;
        
        })
   
}








