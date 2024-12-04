


function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'flex';
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const offset = 100; // Adjust this value based on your header height or desired offset

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default anchor behavior
            
            const targetId = link.getAttribute("data-target"); // Get target ID

            // Special case for the "Home" link: scroll to the very top
            if (targetId === "home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                const targetElement = document.getElementById(targetId); // Find element by ID
                if (targetElement) {
                    // Calculate the position with the offset
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                    // Smooth scrolling to the adjusted position
                    window.scrollTo({
                        top: elementPosition,
                        behavior: "smooth"
                    });
                }
            }

            // Remove 'active' class from all nav links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add 'active' class to the clicked nav link
            link.classList.add("active");
        });
    });
});


