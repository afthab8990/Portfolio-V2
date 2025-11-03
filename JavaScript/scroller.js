const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry.target.className)
        if(entry.isIntersecting){
                entry.target.classList.add("showlef")
        }else{
            entry.target.classList.remove("showlef")
        }
    })
}, { threshold: 1.0 })
const todoElements = document.querySelectorAll(".punchlines")

todoElements.forEach(el => observer.observe(el))

