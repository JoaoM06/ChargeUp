
const header = document.querySelector("header")
const newHeader = document.querySelector("newHeader")
const logoWhite = document.querySelector("#logoWhite")
const logoBlack = document.querySelector("#logoBlack")
const noDisplay = document.querySelector(".noDisplay")
const page = document.querySelector("*")


document.addEventListener("scroll", ()=>{
    if (page.scrollTop >=  header.offsetHeight){
        logoWhite.className = "noDisplay"
        logoBlack.className = "noClass"
        header.className = "newHeader"
    }
    if (page.scrollTop <=  header.offsetHeight){
        logoWhite.className = "logoWhite"
        logoBlack.className = "noDisplay"
        header.className = "header"
    }
})

//Animações
const sobreContent = document.querySelector(".sobreContent")
const metaLeftContainer = document.querySelectorAll(".metaLeftContainer")
const metaRightContainer = document.querySelectorAll(".metaRightContainer")
sobreContent.classList.add("hiddenLeft")
metaLeftContainer.forEach((el)=>{
    el.classList.add("hiddenLeft")
})
metaRightContainer.forEach((el)=>{
    el.classList.add("hiddenRight")
})


const observerLeft = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showLeft")
        }
    })
})

const observerRight = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showRight")
        }
    })
})

const observerEase = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showEase")
        }
    })
})



const hiddenElementsLeft = document.querySelectorAll(".hiddenLeft")
const hiddenElementsRight = document.querySelectorAll(".hiddenRight")
const hiddenElementsEase = document.querySelectorAll(".hiddenEase")

hiddenElementsLeft.forEach((el)=> observerLeft.observe(el))
hiddenElementsRight.forEach((el)=> observerRight.observe(el))
hiddenElementsEase.forEach((el)=> observerEase.observe(el))