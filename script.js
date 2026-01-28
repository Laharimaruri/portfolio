
// Scroll animations
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if(position < screenHeight - 100){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateY(40px)";
        }
    });

    // Show back to top button
    const topBtn = document.getElementById("topBtn");
    topBtn.style.display = (window.scrollY > 400) ? "block" : "none";
});

// Animate skill bars
function animateSkills() {
    document.querySelectorAll(".skill-fill").forEach(bar => {
        const fill = bar.getAttribute("data-fill");
        bar.style.width = fill;
    });
}
window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    const position = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if(position < screenHeight - 100){
        animateSkills();
    }
});

// Back to top functionality
document.getElementById("topBtn").addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
});
