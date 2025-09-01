let load = document.querySelectorAll("#pg");
let title = document.getElementById("title")

function toSentenceCase(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function loadPage() {
    load.forEach((el) => {
        el.addEventListener("click", (e) => {
            let text = e.currentTarget.dataset.page;
            let setter_page = toSentenceCase(text);
            console.log(setter_page)
            if (setter_page == "Welcome"){
                title.innerHTML= `<p>Welocome</p`
                setter_page = "home"
            }
            console.log(setter_page);
            title.innerHTML= `<p>${setter_page}</p`
             title.style.animation = "none";
            void title.offsetWidth; 
            title.style.animation = "loader 2s ease-in-out";
              setTimeout(() => {
                 const targetElement = document.getElementById(setter_page.toLowerCase());
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" }); 
                }    
            }, 1000); // 2000ms = 2 seconds
        });
    });
}
loadPage();


