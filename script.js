/* ============================================
   FITZONE — Premium Fitness Website Scripts
   ============================================ */

// ==================== DATA ====================

// Products Data
const supabaseUrl =
    "https://kqaffjtajhiqhokiukel.supabase.co";

const supabaseKey =
    "sb_publishable_I6SRzO1rNPPpWtiKQOrIEw_pUK4jaS0";

const supabaseClient =
    window.supabase.createClient(
        supabaseUrl,
        supabaseKey
    );

console.log("Supabase Connected");
const products = [
    {
        id: 1,
        name: "Pro Hex Dumbbells",
        desc: "Premium rubber-coated hex dumbbells for ultimate grip and durability. Available in multiple weights.",
        price: 49.99,
        rating: 4.9,
        reviews: 342,
        category: "strength",
        badge: "Bestseller",
        image: "images/dumbbells.jpg"
    },
    {
        id: 2,
        name: "Cast Iron Kettlebell",
        desc: "Competition-grade cast iron kettlebell with powder-coated finish for intense training sessions.",
        price: 39.99,
        rating: 4.8,
        reviews: 218,
        category: "strength",
        badge: "Popular",
        image: "images/kettlebell.jpg"
    },
    {
        id: 3,
        name: "Resistance Band Set",
        desc: "5-piece premium latex resistance band set with varying resistance levels. Perfect for home workouts.",
        price: 24.99,
        rating: 4.7,
        reviews: 567,
        category: "flexibility",
        badge: "Value Pack",
        image: "images/resistance-bands.jpg"
    },
    {
        id: 4,
        name: "Speed Jump Rope",
        desc: "Adjustable steel cable speed rope with ergonomic aluminum handles. Built for speed and endurance.",
        price: 19.99,
        rating: 4.6,
        reviews: 189,
        category: "cardio",
        badge: "",
        image: "images/jump-rope.jpg"
    },
    {
        id: 5,
        name: "Premium Yoga Mat",
        desc: "Extra-thick 6mm eco-friendly TPE yoga mat with alignment guides and non-slip grip technology.",
        price: 34.99,
        rating: 4.8,
        reviews: 423,
        category: "flexibility",
        badge: "Eco-Friendly",
        image: "images/yoga-mat.jpg"
    },
    {
        id: 6,
        name: "Wall Pull-Up Bar",
        desc: "Heavy-duty wall-mounted pull-up bar with multi-grip positions. Supports up to 300 lbs.",
        price: 59.99,
        rating: 4.7,
        reviews: 156,
        category: "strength",
        badge: "",
        image: "images/pullup-bar.jpg"
    },
    {
        id: 7,
        name: "Protein Shaker Pro",
        desc: "BPA-free 28oz shaker with leak-proof lid, mixing ball, and built-in supplement storage.",
        price: 14.99,
        rating: 4.5,
        reviews: 891,
        category: "accessories",
        badge: "Top Rated",
        image: "images/protein-shaker.jpg"
    },
    {
        id: 8,
        name: "Adjustable Weight Bench",
        desc: "7-position adjustable bench with heavy-duty steel frame. Perfect for flat, incline, and decline presses.",
        price: 149.99,
        rating: 4.9,
        reviews: 267,
        category: "strength",
        badge: "Premium",
        image: "images/bench.jpg"
    }
];

// Fitness Tips Data
const tipCategories = [
    {
        title: "Beginner Fitness Tips",
        icon: "baby",
        color: "linear-gradient(135deg, #3b82f6, #60a5fa)",
        tips: [
            "Start with 15-20 minute sessions and gradually increase duration as your stamina builds",
            "Focus on proper form over heavy weights — injury prevention is key for long-term progress",
            "Stay hydrated by drinking at least 8 glasses of water daily, more during workouts",
            "Set realistic, measurable goals and track your progress weekly",
            "Find a workout buddy or community for accountability and motivation"
        ],
        quote: "\"Every expert was once a beginner. Start where you are, use what you have, do what you can.\""
    },
    {
        title: "Weight Loss Tips",
        icon: "flame",
        color: "linear-gradient(135deg, #ef4444, #f97316)",
        tips: [
            "Create a moderate caloric deficit of 500-700 calories per day for sustainable weight loss",
            "Combine cardio with strength training — muscle burns more calories at rest",
            "Eat whole, unprocessed foods and prioritize lean proteins to stay satiated",
            "Get 7-9 hours of quality sleep — poor sleep disrupts hunger hormones",
            "Practice mindful eating and avoid distractions during meals"
        ],
        quote: "\"Weight loss is not about perfect. It's about effort. Every healthy choice counts.\""
    },
    {
        title: "Muscle Building Tips",
        icon: "dumbbell",
        color: "linear-gradient(135deg, #ff2d2d, #cc0000)",
        tips: [
            "Consume 1.6-2.2g of protein per kg of body weight daily for optimal muscle synthesis",
            "Progressive overload — gradually increase weight, reps, or sets each week",
            "Prioritize compound movements like squats, deadlifts, bench press, and rows",
            "Allow 48-72 hours of recovery between training the same muscle group",
            "Eat a protein-rich meal within 2 hours post-workout for maximum recovery"
        ],
        quote: "\"The iron never lies to you. It's always there, exactly where you left it.\""
    },
    {
        title: "Home Workout Tips",
        icon: "home",
        color: "linear-gradient(135deg, #22c55e, #16a34a)",
        tips: [
            "Designate a specific space for workouts — even a small corner helps build consistency",
            "Use bodyweight exercises like push-ups, squats, lunges, and planks as your foundation",
            "Invest in minimal equipment: a set of resistance bands and a mat go a long way",
            "Follow structured programs rather than random exercises for better results",
            "Schedule your workouts like appointments — consistency beats intensity"
        ],
        quote: "\"Your body is the best piece of equipment you'll ever own. Use it.\""
    },
    {
        title: "Diet & Nutrition Tips",
        icon: "apple",
        color: "linear-gradient(135deg, #f97316, #eab308)",
        tips: [
            "Eat the rainbow — include a variety of colorful fruits and vegetables daily",
            "Meal prep on weekends to avoid unhealthy convenience food during busy weekdays",
            "Don't skip breakfast — it kickstarts your metabolism and fuels morning activities",
            "Read nutrition labels and be aware of hidden sugars in processed foods",
            "Supplement wisely: Vitamin D, Omega-3s, and magnesium cover common deficiencies"
        ],
        quote: "\"Let food be thy medicine and medicine be thy food.\" — Hippocrates"
    },
    {
        title: "Daily Healthy Habits",
        icon: "sun",
        color: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
        tips: [
            "Start your day with 10 minutes of stretching or light yoga to activate your body",
            "Take walking breaks every hour if you have a sedentary job",
            "Practice deep breathing or meditation for 5-10 minutes daily for stress management",
            "Limit screen time before bed to improve sleep quality and recovery",
            "Keep a gratitude journal — mental health is as important as physical fitness"
        ],
        quote: "\"Take care of your body. It's the only place you have to live.\" — Jim Rohn"
    }
];

// Workout Plans Data
const workoutPlans = {
    weightloss: {
        title: "🔥 Weight Loss Program",
        days: [
            { name: "Monday", exercises: ["30 min HIIT Cardio", "Burpees 4×12", "Mountain Climbers 4×20", "Jump Squats 3×15"] },
            { name: "Tuesday", exercises: ["Upper Body Circuit", "Push-ups 4×15", "Dumbbell Rows 3×12", "Plank Hold 3×45s"] },
            { name: "Wednesday", exercises: ["Active Recovery", "30 min Light Walk", "Yoga Flow 20 min", "Foam Rolling"] },
            { name: "Thursday", exercises: ["Lower Body Blast", "Lunges 4×12", "Squat Jumps 3×15", "Calf Raises 3×20"] },
            { name: "Friday", exercises: ["Full Body HIIT", "Kettlebell Swings 4×15", "Box Jumps 3×10", "Sprint Intervals 20 min"] },
            { name: "Saturday", exercises: ["Cardio + Core", "Running 30 min", "Bicycle Crunches 4×20", "Leg Raises 3×15"] },
            { name: "Sunday", rest: true }
        ]
    },
    musclegain: {
        title: "💪 Muscle Gain Program",
        days: [
            { name: "Monday", exercises: ["Chest & Triceps", "Bench Press 4×8", "Incline Dumbbell Press 3×10", "Tricep Dips 3×12"] },
            { name: "Tuesday", exercises: ["Back & Biceps", "Deadlifts 4×6", "Pull-ups 4×8", "Barbell Curls 3×12"] },
            { name: "Wednesday", exercises: ["Rest / Light Cardio", "15 min Walk", "Stretching 15 min"] },
            { name: "Thursday", exercises: ["Shoulders & Abs", "Overhead Press 4×8", "Lateral Raises 3×12", "Hanging Leg Raises 3×15"] },
            { name: "Friday", exercises: ["Legs & Glutes", "Barbell Squats 4×8", "Romanian Deadlifts 3×10", "Leg Press 3×12"] },
            { name: "Saturday", exercises: ["Arms & Core", "Hammer Curls 3×12", "Skull Crushers 3×12", "Plank 3×60s"] },
            { name: "Sunday", rest: true }
        ]
    },
    generalfitness: {
        title: "❤️ General Fitness Program",
        days: [
            { name: "Monday", exercises: ["Full Body Strength", "Squats 3×12", "Push-ups 3×15", "Dumbbell Rows 3×12"] },
            { name: "Tuesday", exercises: ["Cardio Day", "30 min Jogging", "Jump Rope 10 min", "Stretching 10 min"] },
            { name: "Wednesday", exercises: ["Yoga & Flexibility", "Sun Salutations", "Warrior Poses", "Hip Openers 20 min"] },
            { name: "Thursday", exercises: ["Upper Body Focus", "Dumbbell Press 3×12", "Lateral Raises 3×15", "Planks 3×45s"] },
            { name: "Friday", exercises: ["Lower Body Focus", "Lunges 3×12", "Glute Bridges 3×15", "Calf Raises 3×20"] },
            { name: "Saturday", exercises: ["Active Fun Day", "Swimming / Cycling", "Hiking / Sports", "Stretching 15 min"] },
            { name: "Sunday", rest: true }
        ]
    }
};

// ==================== DOM ELEMENTS ====================
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
const themeToggle = document.getElementById('themeToggle');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const productsGrid = document.getElementById('productsGrid');
const productSearch = document.getElementById('productSearch');
const tipsGrid = document.getElementById('tipsGrid');
const backToTop = document.getElementById('backToTop');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ==================== STATE ====================
let cart = [];
let activeFilter = 'all';

// ==================== LOADER ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
        // Initialize Lucide icons
        lucide.createIcons();
        // Trigger hero animations
        initHeroAnimations();
    }, 1500);
});

// ==================== HERO ANIMATIONS ====================
function initHeroAnimations() {
    // Create floating particles
    const particlesContainer = document.getElementById('heroParticles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        const colors = ['#ff2d2d', '#ff6b00', '#ffaa00', '#ffffff'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = (2 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
}

// ==================== NAVBAR ====================
// Scroll behavior
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar styling on scroll
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    // Active section highlighting
    highlightActiveSection();

    // Reveal animations
    revealOnScroll();

    // Stats counter animation
    animateStatsOnScroll();
});

// Active section highlighting
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[data-section="${id}"]`);

        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

// Hamburger toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// Back to top
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== THEME TOGGLE ====================
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    lucide.createIcons();
    // Save preference
    localStorage.setItem('fitzone-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Load saved theme
if (localStorage.getItem('fitzone-theme') === 'light') {
    document.body.classList.add('light-mode');
}

// ==================== CART FUNCTIONALITY ====================
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('open');
    document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', closeCartModal);
document.querySelector('.cart-modal-overlay').addEventListener('click', closeCartModal);

function closeCartModal() {
    cartModal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    }
    else {
        cart.push({ ...product, qty: 1 });

        supabaseClient
            .from("cart_items")
            .insert([
                {
                    product_name: product.name,
                    price: product.price,
                    quantity: 1
                }
            ])
            .then(({ error }) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Cart item saved!");
                }
            });
    }

    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Update counter
    cartCount.textContent = totalItems;
    if (totalItems > 0) {
        cartCount.classList.add('visible');
    } else {
        cartCount.classList.remove('visible');
    }

    // Update cart total
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i data-lucide="shopping-bag"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <span class="cart-item-emoji">${item.emoji}</span>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name} ${item.qty > 1 ? `×${item.qty}` : ''}</div>
                    <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        `).join('');
    }
    lucide.createIcons();
}

// ==================== TOAST NOTIFICATION ====================
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
}

// ==================== RENDER PRODUCTS ====================
function renderProducts(filter = 'all', search = '') {
    let filtered = products;

    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }

    if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
    }

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i data-lucide="search-x"></i>
                <p>No products found. Try a different search or filter.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    productsGrid.innerHTML = filtered.map((product, index) => `
        <div class="product-card reveal-up" style="transition-delay: ${index * 0.05}s">
            <div class="product-image">
               <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-rating">
                    <span class="product-stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span class="product-rating-num">${product.rating} (${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i data-lucide="shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
    // Trigger reveal for new elements
    setTimeout(() => revealOnScroll(), 100);
}

// Filter tabs
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeFilter = tab.dataset.category;
        renderProducts(activeFilter, productSearch.value);
    });
});

// Search
productSearch.addEventListener('input', (e) => {
    renderProducts(activeFilter, e.target.value);
});

// ==================== RENDER TIPS ====================
function renderTips() {
    tipsGrid.innerHTML = tipCategories.map((cat, index) => `
        <div class="tip-card reveal-up" style="transition-delay: ${index * 0.05}s">
            <div class="tip-header" onclick="toggleTip(this)">
                <div class="tip-header-left">
                    <div class="tip-icon" style="background: ${cat.color}">
                        <i data-lucide="${cat.icon}"></i>
                    </div>
                    <h3 class="tip-title">${cat.title}</h3>
                </div>
                <div class="tip-toggle">
                    <i data-lucide="chevron-down"></i>
                </div>
            </div>
            <div class="tip-content">
                <div class="tip-content-inner">
                    <div class="tip-list">
                        ${cat.tips.map(tip => `<div class="tip-item">${tip}</div>`).join('')}
                    </div>
                    <div class="tip-quote">${cat.quote}</div>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}


function toggleTip(header) {
    const card = header.parentElement;
    const content = card.querySelector('.tip-content');
    const isExpanded = card.classList.contains('expanded');

    // Close all others
    document.querySelectorAll('.tip-card.expanded').forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
            c.querySelector('.tip-content').style.maxHeight = '0';
        }
    });

    if (isExpanded) {
        card.classList.remove('expanded');
        content.style.maxHeight = '0';
    } else {
        card.classList.add('expanded');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// ==================== BMI CALCULATOR ====================
document.getElementById('calcBmi').addEventListener('click', calculateBMI);

function calculateBMI() {
    const height = parseFloat(document.getElementById('bmiHeight').value);
    const weight = parseFloat(document.getElementById('bmiWeight').value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        showToast('Please enter valid height and weight values');
        return;
    }

    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    const bmiRounded = bmi.toFixed(1);

    // Update display
    document.getElementById('bmiNumber').textContent = bmiRounded;

    // Determine category
    let category, suggestion, gaugePosition, categoryColor;

    if (bmi < 18.5) {
        category = 'Underweight';
        categoryColor = '#3b82f6';
        gaugePosition = (bmi / 18.5) * 25;
        suggestion = `Your BMI of ${bmiRounded} indicates you're underweight. Consider increasing your caloric intake with nutrient-dense foods like lean proteins, healthy fats, and complex carbohydrates. Strength training can help build healthy muscle mass. Consult with a nutritionist for a personalized plan.`;
    } else if (bmi < 25) {
        category = 'Normal Weight';
        categoryColor = '#22c55e';
        gaugePosition = 25 + ((bmi - 18.5) / 6.5) * 25;
        suggestion = `Excellent! Your BMI of ${bmiRounded} is in the healthy range. Maintain your current lifestyle with regular exercise and balanced nutrition. Focus on maintaining muscle mass and cardiovascular health. Keep up the great work!`;
    } else if (bmi < 30) {
        category = 'Overweight';
        categoryColor = '#eab308';
        gaugePosition = 50 + ((bmi - 25) / 5) * 25;
        suggestion = `Your BMI of ${bmiRounded} indicates you're overweight. Consider incorporating more cardio exercises and creating a moderate caloric deficit. Focus on whole foods, reduce processed sugars, and aim for at least 150 minutes of moderate exercise weekly.`;
    } else {
        category = 'Obese';
        categoryColor = '#ef4444';
        gaugePosition = 75 + Math.min(((bmi - 30) / 10) * 25, 25);
        suggestion = `Your BMI of ${bmiRounded} indicates obesity. It's important to consult with a healthcare professional for personalized guidance. Start with low-impact exercises like walking or swimming, and focus on gradual, sustainable dietary changes. Every small step counts.`;
    }

    gaugePosition = Math.min(Math.max(gaugePosition, 2), 98);

    document.getElementById('bmiCategory').textContent = category;
    document.getElementById('bmiCategory').style.color = categoryColor;
    document.getElementById('bmiSuggestion').innerHTML = `<p>${suggestion}</p>`;

    // Animate gauge
    const indicator = document.getElementById('bmiGaugeIndicator');
    indicator.classList.add('visible');
    indicator.style.left = gaugePosition + '%';

    // Animate number
    const numberEl = document.getElementById('bmiNumber');
    animateValue(numberEl, 0, parseFloat(bmiRounded), 800);

    supabaseClient
        .from("bmi_records")
        .insert([
            {
                height: height,
                weight: weight,
                bmi: parseFloat(bmiRounded)
            }
        ])
        .then(({ error }) => {
            if (error) {
                console.error(error);
            } else {
                console.log("BMI saved successfully!");
            }
        });


}

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * eased;
        element.textContent = current.toFixed(1);
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

// ==================== WORKOUT PLANNER ====================
document.querySelectorAll('.goal-card').forEach(card => {
    card.addEventListener('click', () => {
        // Update active state
        document.querySelectorAll('.goal-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const goal = card.dataset.goal;
        renderWorkoutPlan(goal);
    });
});

function renderWorkoutPlan(goal) {
    const plan = workoutPlans[goal];
    if (!plan) return;

    const display = document.getElementById('workoutPlanDisplay');

    display.innerHTML = `
        <h3 style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; margin-bottom: 24px; text-align: center;">${plan.title}</h3>
        <div class="plan-week">
            ${plan.days.map(day => {
        if (day.rest) {
            return `<div class="plan-day rest">🛌 ${day.name} — Rest Day</div>`;
        }
        return `
                    <div class="plan-day">
                        <div class="plan-day-name">${day.name}</div>
                        <div class="plan-day-exercises">
                            ${day.exercises.map(ex => `<div class="plan-exercise">${ex}</div>`).join('')}
                        </div>
                    </div>
                `;
    }).join('')}
        </div>
    `;
}

// ==================== STATS COUNTER ====================
let statsAnimated = false;

function animateStatsOnScroll() {
    if (statsAnimated) return;

    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
        statsAnimated = true;
        const counters = document.querySelectorAll('.stat-number[data-target]');

        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(target * eased);

                if (current >= 1000000) {
                    counter.textContent = (current / 1000000).toFixed(1) + 'M+';
                } else if (current >= 1000) {
                    counter.textContent = (current / 1000).toFixed(current >= 10000 ? 0 : 1) + 'K+';
                } else {
                    counter.textContent = current.toLocaleString() + '+';
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    // Final value
                    if (target >= 1000000) {
                        counter.textContent = (target / 1000000).toFixed(1) + 'M+';
                    } else if (target >= 1000) {
                        counter.textContent = (target / 1000).toFixed(target >= 10000 ? 0 : 1) + 'K+';
                    } else {
                        counter.textContent = target.toLocaleString() + '+';
                    }
                }
            }
            requestAnimationFrame(updateCounter);
        });
    }
}

// ==================== REVEAL ON SCROLL ====================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal-up:not(.revealed)');
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) {
            el.classList.add('revealed');
        }
    });
}

// ==================== CONTACT FORM ====================
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    let valid = true;

    // Name validation
    if (!name || name.length < 2) {
        document.getElementById('nameError').textContent = 'Please enter a valid name (at least 2 characters)';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Message validation
    if (!message || message.length < 10) {
        document.getElementById('messageError').textContent = 'Please enter a message (at least 10 characters)';
        valid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    if (valid) {
        // Show success
        document.getElementById('formSuccess').classList.add('visible');
        this.reset();
        showToast('Message sent successfully!');

        setTimeout(() => {
            document.getElementById('formSuccess').classList.remove('visible');
        }, 5000);
    }
});

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderTips();
    revealOnScroll();
});
// ================= CONTACT FORM + SUPABASE =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
        document.getElementById("contactName").value;

    const email =
        document.getElementById("contactEmail").value;

    const message =
        document.getElementById("contactMessage").value;

    const { error } = await supabaseClient
        .from("contacts")
        .insert([
            {
                name: name,
                email: email,
                message: message
            }
        ]);

    if (error) {
        console.log(error);
        alert(JSON.stringify(error));
    } else {
        alert("Message sent successfully!");
        contactForm.reset();
    }

});
