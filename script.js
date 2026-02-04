// Data
const heroSlides = [
    { image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop', text: 'Hair Couture Redefined' },
    { image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1920&h=1080&fit=crop', text: 'The Art of Premium Care' },
    { image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920&h=1080&fit=crop', text: 'Where Luxury Meets Expertise' }
];

const services = [
    {
        title: 'Korean Scalp Treatment',
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=1000&fit=crop',
        description: 'Advanced scalp analysis & rejuvenation'
    },
    {
        title: 'Signature Hair Styling',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=1000&fit=crop',
        description: 'Bespoke cuts & color artistry'
    },
    {
        title: 'Premium Nail Art',
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=1000&fit=crop',
        description: 'Couture nail design & care'
    },
    {
        title: 'Body Spa Rituals',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=1000&fit=crop',
        description: 'Holistic wellness experiences'
    },
    {
        title: 'Skin Rejuvenation',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1000&fit=crop',
        description: 'Clinical-grade facial treatments'
    },
    {
        title: 'Bridal Couture',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop',
        description: 'Your perfect day, perfected'
    }
];

const journey = [
    { step: '01', title: 'Arrival', desc: 'Welcome to your sanctuary of beauty' },
    { step: '02', title: 'Consultation', desc: 'Personalized assessment with our experts' },
    { step: '03', title: 'Diagnosis', desc: 'Advanced analysis of your unique needs' },
    { step: '04', title: 'Treatment', desc: 'Bespoke service delivery with precision' },
    { step: '05', title: 'Aftercare', desc: 'Continuous support for lasting results' }
];

const testimonials = [
    { name: 'Sophia Chen', text: 'An experience that transcends typical salon visits. Pure luxury.', rating: 5 },
    { name: 'Marcus Laurent', text: 'The attention to detail is unmatched. My hair has never looked better.', rating: 5 },
    { name: 'Priya Mehta', text: 'From the moment you enter, you know you\'re somewhere special.', rating: 5 }
];

const instagramImages = [
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=600&fit=crop'
];

// State
let currentSlide = 0;
let slideInterval;

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Hero Slider
function initHeroSlider() {
    const heroTitle = document.querySelector('.hero-title');
    const indicators = document.querySelectorAll('.indicator');
    
    function showSlide(index) {
        const slides = document.querySelectorAll('.hero-slide');
        
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.remove('active');
            if (i === index) {
                indicator.classList.add('active');
            }
        });
        
        // Update hero title
        heroTitle.textContent = heroSlides[index].text;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }
    
    // Auto-advance slides
    slideInterval = setInterval(nextSlide, 5000);
    
    // Manual slide selection
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(slideInterval);
            currentSlide = index;
            showSlide(currentSlide);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
}

// Render Services
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <div class="service-info">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
            <div class="service-overlay">
                <button>Book Now</button>
            </div>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Render Journey
function renderJourney() {
    const journeyDesktop = document.getElementById('journeyDesktop');
    const journeyMobile = document.getElementById('journeyMobile');
    
    // Desktop version
    journey.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'journey-step-desktop';
        stepDiv.innerHTML = `
            <div class="journey-number">
                <span>${step.step}</span>
            </div>
            <h3>${step.title}</h3>
            <p>${step.desc}</p>
        `;
        journeyDesktop.appendChild(stepDiv);
    });
    
    // Mobile version
    journey.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'journey-step-mobile';
        stepDiv.innerHTML = `
            <div class="journey-number">
                <span>${step.step}</span>
            </div>
            <div class="journey-details">
                <h3>${step.title}</h3>
                <p>${step.desc}</p>
            </div>
        `;
        journeyMobile.appendChild(stepDiv);
    });
}

// Animated Counters
function animateCounters() {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const guestsCounter = document.getElementById('guestsCounter');
    const servicesCounter = document.getElementById('servicesCounter');
    const ratingCounter = document.getElementById('ratingCounter');
    
    let step = 0;
    
    const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        const guests = Math.floor(95 * progress);
        const servicesCount = Math.floor(5000 * progress);
        const rating = (4.8 * progress).toFixed(1);
        
        guestsCounter.textContent = guests + '%';
        servicesCounter.textContent = servicesCount.toLocaleString() + '+';
        ratingCounter.textContent = rating + '★';
        
        if (step >= steps) {
            clearInterval(timer);
        }
    }, interval);
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        const stars = '★'.repeat(testimonial.rating);
        
        card.innerHTML = `
            <div class="stars">
                ${Array(testimonial.rating).fill('<span>★</span>').join('')}
            </div>
            <p>"${testimonial.text}"</p>
            <p class="testimonial-author">— ${testimonial.name}</p>
        `;
        testimonialsGrid.appendChild(card);
    });
}

// Render Instagram Grid
function renderInstagram() {
    const instagramGrid = document.getElementById('instagramGrid');
    
    instagramImages.forEach((img, index) => {
        const post = document.createElement('div');
        post.className = 'insta-post';
        post.innerHTML = `<img src="${img}" alt="Instagram post ${index + 1}">`;
        instagramGrid.appendChild(post);
    });
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    renderServices();
    renderJourney();
    renderTestimonials();
    renderInstagram();
    animateCounters();
    initScrollAnimations();
});
