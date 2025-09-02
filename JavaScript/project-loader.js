let proj = document.querySelectorAll("#pro")
let det = document.getElementById("pro-det")

const details = {
    algo : {
        name : "Algorithm Visualizer",
        image : "./images/algorithm.jpg",
        type : "Web app",
        info : "An interactive web app that visually demonstrates some basic sorting algorithms, making it easier to learn, compare, and understand sorting logic step by step."
    } ,
    pdf : {
        name : "PDF Analyzer",
        image : "./images/analyzer.png",
        type : "Web Agent",
        info : "An AI-powered tool that extracts, analyzes, and summarizes insights from PDFs, helping users quickly understand documents with smart search and filtering."
    },
    idc:{
          name : "Id Card Generator",
        image : "./images/id-card.jpg",
        type : "Web app",
        info : "A simple tool to create professional digital ID cards with customizable details, photos, and layouts, ensuring quick generation for organizations or events."
    },
    tfb : {
        name : "E-turf Booking",
        image : "./images/E-turf.png",
        type : "Web app",
        info : "An online platform enabling users to check availability, reserve, and manage turf bookings seamlessly, simplifying sports ground scheduling for players and organizers."
    }
    

}

const projects = {
    algo: details.algo,
    pdf: details.pdf,
    idc: details.idc,
    tfb: details.tfb
};

proj.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
        let pname = e.currentTarget.dataset.project;
        let project = projects[pname] || projects[pname.tfb]; 

        det.innerHTML = `
            <div class="pro-img">
                <img src="${project.image}" alt="">
            </div>
            <div class="pro-about">
                <h2>${project.type}</h2>
                <p>${project.info}</p>
            </div>`;
    });
});