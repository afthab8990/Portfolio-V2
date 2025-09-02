gsap.registerPlugin(SplitText);


// Menu window
const menu_ic = document.querySelector(".menu");
const menu_w = document.querySelector(".menu_list")
const heads = document.querySelector("header")
const menu_sv = document.querySelector(".menu_ic")
const svgPath = menu_sv.querySelector("path");


let mySplitText = new SplitText(".split", { type: "chars" });
let chars = mySplitText.chars;

menu_ic.addEventListener("click",()=>{
    menu_w.classList.toggle("active")
    

    heads.classList.toggle("colorchange")

      if (svgPath.getAttribute("stroke") === "#1e1e1e") {
    svgPath.setAttribute("stroke", "#d9d9d9");
  } else {
    svgPath.setAttribute("stroke", "#1e1e1e");
  }
    gsap.from(chars,{
    yPercent : 130,
    duration : 0.6,

    onComplete: () => {
    gsap.set(chars, { yPercent: 0 });
  },
    
})
})