const proj = document.querySelectorAll("#pro")
const proCont = document.querySelector(".pro-cont")
const proCol = document.getElementById("pro-col")
const det = document.getElementById("pro-det")
const modal = document.getElementById("pro-modal")
const modalDetails = document.getElementById("pro-modal-details")
const modalClose = document.getElementById("modal-close")
const layers = proCont.querySelectorAll('div')

// Check if we're on mobile/tablet
const isMobile = () => window.innerWidth <= 768

// Track if mouse is in the area
let isHovering = false

// Desktop: Mouse tracking
proCol.addEventListener('mousemove', (e) => {
    if (isMobile()) return
    
    isHovering = true
    let posX = e.clientX
    let posY = e.clientY
    
    proCont.style.left = `${posX}px`
    proCont.style.top = `${posY}px`
    
    layers[0].style.transform = `translate(-20px, -20px)`
    layers[1].style.transform = `translate(-12px, -12px)`
    layers[2].style.transform = `translate(-6px, -6px)`
})

proCol.addEventListener('mouseenter', () => {
    if (isMobile()) return
    
    isHovering = true
    proCont.style.opacity = '1'
    proCont.style.visibility = "visible"
})

proCol.addEventListener('mouseleave', () => {
    if (isMobile()) return
    
    isHovering = false
    proCont.style.left = '60%'
    proCont.style.top = '50%'
    proCont.style.visibility = "hidden"
    
    layers[0].style.transform = `translate(0, 0)`
    layers[1].style.transform = `translate(0, 0)`
    layers[2].style.transform = `translate(0, 0)`
})

// Project details data
const details = {
    algo : {
        name : "Algorithm Visualizer",
        type : "Web app",
        info : "An interactive web app that visually demonstrates some basic sorting algorithms, making it easier to learn, compare, and understand sorting logic step by step."
    },
    pdf : {
        name : "PDF Analyzer",
        type : "Web Agent",
        info : "An AI-powered tool that extracts, analyzes, and summarizes insights from PDFs, helping users quickly understand documents with smart search and filtering."
    },
    idc: {
        name : "Id Card Generator",
        type : "Web app",
        info : "A simple tool to create professional digital ID cards with customizable details, photos, and layouts, ensuring quick generation for organizations or events."
    },
    tfb : {
        name : "E-turf Booking",
        type : "Web app",
        info : "An online platform enabling users to check availability, reserve, and manage turf bookings seamlessly, simplifying sports ground scheduling for players and organizers."
    }
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Update content on hover/click
proj.forEach((el) => {
    // Desktop: hover behavior
    el.addEventListener("mouseenter", (e) => {
        if (isMobile()) return
        
        let pname = e.currentTarget.dataset.project;
        let project = details[pname];

        if (project) {
            det.innerHTML = `
                <div class="pro-about">
                    <h2>${project.type}</h2>
                    <p>${project.info}</p>
                </div>`;
        }
    });
    
    // Mobile: Click to open modal
    el.addEventListener("click", (e) => {
        if (!isMobile()) return
        
        e.preventDefault();
        let pname = e.currentTarget.dataset.project;
        let project = details[pname];

        if (project) {
            modalDetails.innerHTML = `
                <h2>${project.name}</h2>
                <p><strong>${project.type}</strong></p>
                <p>${project.info}</p>
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close modal - button click
if (modalClose) {
    modalClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
    });
}

// Close modal - click outside
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (!isMobile() && modal.classList.contains('active')) {
        closeModal();
    }
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});