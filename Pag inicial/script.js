
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Header scroll effect
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        
        // Particles.js initialization
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#6C63FF"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6C63FF",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
        
        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate elements on scroll
        gsap.utils.toArray('.feature-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1
            });
        });
        
        gsap.utils.toArray('.service-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1
            });
        });
        
        // Counter animation
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = '0+';
                
                const updateCount = () => {
                    const current = +counter.innerText.replace('+', '');
                    const newCount = Math.ceil(current + increment);
                    
                    if (newCount < target) {
                        counter.innerText = newCount + '+';
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target + '+';
                    }
                };
                
                ScrollTrigger.create({
                    trigger: counter,
                    start: "top 80%",
                    onEnter: updateCount,
                    once: true
                });
            }
        });

        // Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(contactForm);
    const nome = formData.get('name');
    const email = formData.get('email');
    const mensagem = formData.get('message');
    
    // Format WhatsApp message
    const whatsappMsg = `Nova mensagem do site:\n\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
    const encodedMsg = encodeURIComponent(whatsappMsg);
    
    // Replace with your WhatsApp number (with country code, remove +)
    const whatsappNumber = '+5519974151771'; // Ex: 5511999999999
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
    
    // Continue with success UI
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
    
    setTimeout(() => {
        contactForm.reset();
        submitBtn.innerHTML = 'Enviar mensagem';
        submitBtn.disabled = false;
        
        const successMsg = document.createElement('div');
        successMsg.innerHTML = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        successMsg.style.color = '#10b981';
        successMsg.style.marginTop = '1rem';
        successMsg.style.fontWeight = '600';
        contactForm.appendChild(successMsg);
        
        setTimeout(() => {
            successMsg.remove();
        }, 5000);
    }, 2000);
});



        
        // Form submission
       /* const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
                
                // Reset form after 2 seconds
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = 'Enviar mensagem';
                    submitBtn.disabled = false;
                    
                    // Show success message
                    const successMsg = document.createElement('div');
                    successMsg.innerHTML = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                    successMsg.style.color = '#10b981';
                    successMsg.style.marginTop = '1rem';
                    successMsg.style.fontWeight = '600';
                    contactForm.appendChild(successMsg);
                    
                    // Remove message after 5 seconds
                    setTimeout(() => {
                        successMsg.remove();
                    }, 5000);
                }, 2000);
            }, 1500);
        });*/
        
        // Testimonials slider (simple version)
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }
        
        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }
        
        // Initialize
        showTestimonial(0);
        setInterval(nextTestimonial, 5000);



        // WhatsApp Button
    (function() {
        // Configurações
        const phoneNumber = "5519974151771"; // Substitua pelo seu número com código do país
        const message = "Olá, vim pelo site da VIRION TECH!"; // Mensagem padrão (opcional)
        const position = "right"; // 'left' ou 'right'
        const bottom = "20px"; // Distância do fundo
        const size = "60px"; // Tamanho do botão
        const zIndex = "9999"; // Camada
    
        // Criar elemento do botão
        const whatsappBtn = document.createElement('a');
        whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        whatsappBtn.target = "_blank";
        whatsappBtn.rel = "noopener noreferrer";
    
        // Estilização do botão
        whatsappBtn.style.position = "fixed";
        whatsappBtn.style.width = size;
        whatsappBtn.style.height = size;
        whatsappBtn.style.bottom = bottom;
        whatsappBtn.style[position] = "20px";
        whatsappBtn.style.backgroundColor = "#25D366";
        whatsappBtn.style.color = "white";
        whatsappBtn.style.borderRadius = "50%";
        whatsappBtn.style.textAlign = "center";
        whatsappBtn.style.lineHeight = size;
        whatsappBtn.style.zIndex = zIndex;
        whatsappBtn.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
        whatsappBtn.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"white\"><path d=\"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z\"/></svg>')";
        whatsappBtn.style.backgroundRepeat = "no-repeat";
        whatsappBtn.style.backgroundPosition = "center";
        whatsappBtn.style.backgroundSize = "60%";
    
        // Adicionar ao corpo do documento
        document.body.appendChild(whatsappBtn);
    })();