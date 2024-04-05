
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