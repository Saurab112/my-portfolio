        document.addEventListener("DOMContentLoaded", function () {
            // Projects Data
            const projects = [
                { title: "To-Do List", description: "A simple to-do list built with ASP.NET.", url:"https://github.com/Saurab112/ToDo-List-App" },
                { title: "Blog Management System", description: "A CRUD-based blog application.", url:"https://github.com/Saurab112/BlogManagementSystem" }
            ];
        
            function renderProjects() {
                const container = document.getElementById("projects-container");
                if (!container) return;
        
                container.innerHTML = ''; // Clear previous content
                projects.forEach(project => {
                    const div = document.createElement("div");
                    div.classList.add("project-card");
        
                    div.innerHTML = `
                        <h4>${project.title}</h4>
                        <p>${project.description}</p>
                        <a href="${project.url}" target="_blank">View Project</a>
                    `;
        
                    container.appendChild(div);
                });
            }
        
            function revealOnScroll() {
                const elements = document.querySelectorAll('.hero, .portfolio, .project-card');
                elements.forEach(el => {
                    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                        el.style.opacity = 1;
                        el.style.transform = 'translateY(0)';
                    }
                });
            }
        
            function debounce(func, delay = 50) {
                let timeout;
                return () => {
                    clearTimeout(timeout);
                    timeout = setTimeout(func, delay);
                };
            }
        
            document.addEventListener("scroll", debounce(revealOnScroll, 100));
        
            renderProjects();
            revealOnScroll();
        });