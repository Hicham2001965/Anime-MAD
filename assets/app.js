// ===== Translations =====
const translations = {
    ar: {
        home: 'الرئيسية',
        onePiece: 'ون بيس',
        popular: 'الشهيرة',
        favorites: 'المفضلة',
        search: 'ابحث...',
        login: 'تسجيل الدخول',
        register: 'إنشاء حساب',
        episodes: 'الحلقات',
        info: 'معلومات',
        addToFavorites: 'أضف للمفضلة',
        viewMore: 'عرض المزيد من الحلقات',
        genre: 'النوع',
        status: 'الحالة',
        year: 'السنة',
        studio: 'الاستوديو',
        director: 'المخرج',
        ongoing: 'مستمر',
        completed: 'مكتمل',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        name: 'الاسم',
        createAccount: 'إنشاء حساب جديد',
        close: 'إغلاق',
        totalAnimes: 'إجمالي الأنميات',
        totalEpisodes: 'إجمالي الحلقات',
        averageRating: 'متوسط التقييم',
        totalViews: 'إجمالي المشاهدات',
        mostPopular: 'الأكثر شهرة',
        popularAnimes: 'الأنميات الشهيرة'
    },
    en: {
        home: 'Home',
        onePiece: 'One Piece',
        popular: 'Popular',
        favorites: 'Favorites',
        search: 'Search...',
        login: 'Login',
        register: 'Register',
        episodes: 'Episodes',
        info: 'Info',
        addToFavorites: 'Add to Favorites',
        viewMore: 'View More Episodes',
        genre: 'Genre',
        status: 'Status',
        year: 'Year',
        studio: 'Studio',
        director: 'Director',
        ongoing: 'Ongoing',
        completed: 'Completed',
        email: 'Email',
        password: 'Password',
        name: 'Name',
        createAccount: 'Create New Account',
        close: 'Close',
        totalAnimes: 'Total Animes',
        totalEpisodes: 'Total Episodes',
        averageRating: 'Average Rating',
        totalViews: 'Total Views',
        mostPopular: 'Most Popular',
        popularAnimes: 'Popular Animes'
    },
    fr: {
        home: 'Accueil',
        onePiece: 'One Piece',
        popular: 'Populaire',
        favorites: 'Favoris',
        search: 'Rechercher...',
        login: 'Connexion',
        register: 'S\'inscrire',
        episodes: 'Épisodes',
        info: 'Infos',
        addToFavorites: 'Ajouter aux favoris',
        viewMore: 'Voir plus d\'épisodes',
        genre: 'Genre',
        status: 'Statut',
        year: 'Année',
        studio: 'Studio',
        director: 'Réalisateur',
        ongoing: 'En cours',
        completed: 'Terminé',
        email: 'Email',
        password: 'Mot de passe',
        name: 'Nom',
        createAccount: 'Créer un nouveau compte',
        close: 'Fermer',
        totalAnimes: 'Total Animes',
        totalEpisodes: 'Total Épisodes',
        averageRating: 'Note Moyenne',
        totalViews: 'Vues Totales',
        mostPopular: 'Le Plus Populaire',
        popularAnimes: 'Animes Populaires'
    },
    es: {
        home: 'Inicio',
        onePiece: 'One Piece',
        popular: 'Popular',
        favorites: 'Favoritos',
        search: 'Buscar...',
        login: 'Iniciar sesión',
        register: 'Registrarse',
        episodes: 'Episodios',
        info: 'Información',
        addToFavorites: 'Agregar a favoritos',
        viewMore: 'Ver más episodios',
        genre: 'Género',
        status: 'Estado',
        year: 'Año',
        studio: 'Estudio',
        director: 'Director',
        ongoing: 'En curso',
        completed: 'Completado',
        email: 'Correo electrónico',
        password: 'Contraseña',
        name: 'Nombre',
        createAccount: 'Crear nueva cuenta',
        close: 'Cerrar',
        totalAnimes: 'Total de Animes',
        totalEpisodes: 'Total de Episodios',
        averageRating: 'Calificación Promedio',
        totalViews: 'Vistas Totales',
        mostPopular: 'Lo Más Popular',
        popularAnimes: 'Animes Populares'
    }
};

// ===== Global Variables =====
let currentLanguage = 'ar';
let currentUser = null;
let favorites = [];
let watchHistory = [];

// ===== One Piece Episodes Data =====
const onePieceEpisodes = [
    { number: 1, title: 'مغامرة جديدة', description: 'بداية أسطورية لقصة لوفي', url: 'https://dramacafe-tv.sbs/watch.php?vid=392e874fe' },
    { number: 2, title: 'الكنز الأسطوري', description: 'لقاء مع زورو' },
    { number: 3, title: 'الطاقم يتشكل', description: 'انضمام ناميه' },
    { number: 4, title: 'الخطر في الغابة', description: 'أول معركة حقيقية' },
    { number: 5, title: 'الوصول للقرية', description: 'مساعدة القرية' },
    { number: 6, title: 'معركة جديدة', description: 'تطور جديد في القصة' },
    { number: 7, title: 'الطريق الطويل', description: 'رحلة جديدة تبدأ' },
    { number: 8, title: 'الأصدقاء الجدد', description: 'لقاء مع شخصيات جديدة' },
    { number: 9, title: 'التحديات تزداد', description: 'معارك أصعب تنتظرهم' },
    { number: 10, title: 'الحلم الكبير', description: 'تحقيق الأحلام' }
];

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    initializeApp();
    loadOnePieceEpisodes();
});

function initializeApp() {
    console.log('OtakuHub initialized');
    updateLanguage(currentLanguage);
}

function loadOnePieceEpisodes() {
    const container = document.getElementById('onePieceEpisodes');
    if (!container) return;
    
    container.innerHTML = onePieceEpisodes.slice(0, 5).map(ep => `
        <div class="episode-item glass p-3 md:p-4 rounded-lg cursor-pointer" onclick="playEpisode('One Piece', ${ep.number}, '${ep.url || 'https://www.youtube.com/embed/RS7mk-UtdjQ'}')">
            <div class="flex justify-between items-center">
                <div>
                    <div class="text-sm md:text-base font-bold">الحلقة ${ep.number}: ${ep.title}</div>
                    <div class="text-xs text-slate-400">${ep.description}</div>
                </div>
                <i class="fas fa-play text-blue-500"></i>
            </div>
        </div>
    `).join('');
}

// ===== Language Management =====
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update text direction
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
    
    updateLanguage(lang);
    localStorage.setItem('language', lang);
}

function updateLanguage(lang) {
    const trans = translations[lang];
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const navTexts = ['الرئيسية', 'ون بيس', 'الشهيرة', 'المفضلة'];
    
    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = trans.search;
    }
}

// ===== Navigation =====
function setActive(element) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');
}

// ===== User Management =====
function toggleUserMenu() {
    const menu = document.getElementById('userMenu');
    menu.classList.toggle('hidden');
}

function openLoginModal() {
    closeModal('userMenu');
    document.getElementById('loginModal').classList.add('active');
}

function openRegisterModal() {
    closeModal('userMenu');
    document.getElementById('registerModal').classList.add('active');
}

function handleLogin(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    
    // Simulate login
    currentUser = {
        id: Date.now(),
        email: email,
        name: email.split('@')[0],
        loginDate: new Date()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeModal('loginModal');
    updateUserUI();
    
    alert(`مرحباً ${currentUser.name}! تم تسجيل الدخول بنجاح`);
}

function handleRegister(event) {
    event.preventDefault();
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    
    // Simulate registration
    currentUser = {
        id: Date.now(),
        name: name,
        email: email,
        registrationDate: new Date()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeModal('registerModal');
    updateUserUI();
    
    alert(`مرحباً ${name}! تم إنشاء حسابك بنجاح`);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
    alert('تم تسجيل الخروج بنجاح');
}

function updateUserUI() {
    const userMenu = document.getElementById('userMenu');
    
    if (currentUser) {
        userMenu.innerHTML = `
            <div class="py-2 px-3 text-sm font-bold mb-2">مرحباً ${currentUser.name}</div>
            <button onclick="viewProfile()" class="w-full text-right py-2 px-3 hover:bg-blue-500/20 rounded transition">الملف الشخصي</button>
            <button onclick="viewWatchHistory()" class="w-full text-right py-2 px-3 hover:bg-blue-500/20 rounded transition">سجل المشاهدة</button>
            <button onclick="logout()" class="w-full text-right py-2 px-3 hover:bg-red-500/20 rounded transition text-red-400">تسجيل الخروج</button>
        `;
    } else {
        userMenu.innerHTML = `
            <button onclick="openLoginModal()" class="w-full text-right py-2 px-3 hover:bg-blue-500/20 rounded transition">تسجيل الدخول</button>
            <button onclick="openRegisterModal()" class="w-full text-right py-2 px-3 hover:bg-blue-500/20 rounded transition">إنشاء حساب</button>
        `;
    }
}

function viewProfile() {
    if (currentUser) {
        alert(`الملف الشخصي:\nالاسم: ${currentUser.name}\nالبريد: ${currentUser.email}`);
    }
}

function viewWatchHistory() {
    if (watchHistory.length === 0) {
        alert('لا توجد حلقات في سجل المشاهدة');
    } else {
        alert(`سجل المشاهدة:\n${watchHistory.map(h => `${h.anime} - الحلقة ${h.episode}`).join('\n')}`);
    }
}

// ===== Video Player =====
function playEpisode(animeName, episodeNumber, videoUrl) {
    const modal = document.getElementById('playerModal');
    const title = document.getElementById('episodeTitle');
    const player = document.getElementById('videoPlayer');
    const description = document.getElementById('episodeDescription');
    
    title.textContent = `${animeName} - الحلقة ${episodeNumber}`;
    player.src = videoUrl;
    description.textContent = `جاري تشغيل الحلقة ${episodeNumber} من ${animeName}. استمتع بمشاهدة الأنمي!`;
    
    modal.classList.add('active');
    
    // Add to watch history
    if (currentUser) {
        watchHistory.push({
            anime: animeName,
            episode: episodeNumber,
            date: new Date()
        });
        localStorage.setItem('watchHistory', JSON.stringify(watchHistory));
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ===== Favorites Management =====
function addToFavorites(animeId) {
    if (!currentUser) {
        alert('يجب تسجيل الدخول أولاً');
        openLoginModal();
        return;
    }
    
    if (!favorites.includes(animeId)) {
        favorites.push(animeId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('تم إضافة الأنمي للمفضلة');
    } else {
        alert('الأنمي موجود بالفعل في المفضلة');
    }
}

function removeFromFavorites(animeId) {
    favorites = favorites.filter(id => id !== animeId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// ===== Search Functionality =====
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 0) {
                performSearch(query);
            }
        });
    }
});

function performSearch(query) {
    const animes = [
        { name: 'ون بيس', en: 'One Piece' },
        { name: 'مذكرة الموت', en: 'Death Note' },
        { name: 'هجوم العمالقة', en: 'Attack on Titan' },
        { name: 'ناروتو', en: 'Naruto' },
        { name: 'بليتش', en: 'Bleach' }
    ];
    
    const results = animes.filter(anime => 
        anime.name.includes(query) || anime.en.toLowerCase().includes(query)
    );
    
    console.log('Search results:', results);
}

// ===== Load More Episodes =====
function loadMoreEpisodes(animeId) {
    const container = document.getElementById('onePieceEpisodes');
    if (!container) return;
    
    container.innerHTML = onePieceEpisodes.map(ep => `
        <div class="episode-item glass p-3 md:p-4 rounded-lg cursor-pointer" onclick="playEpisode('One Piece', ${ep.number}, '${ep.url || 'https://www.youtube.com/embed/RS7mk-UtdjQ'}')">
            <div class="flex justify-between items-center">
                <div>
                    <div class="text-sm md:text-base font-bold">الحلقة ${ep.number}: ${ep.title}</div>
                    <div class="text-xs text-slate-400">${ep.description}</div>
                </div>
                <i class="fas fa-play text-blue-500"></i>
            </div>
        </div>
    `).join('');
    
    alert(`تم تحميل جميع ${onePieceEpisodes.length} حلقة من ون بيس!`);
}

// ===== Data Persistence =====
function saveUserData() {
    const data = {
        currentUser,
        favorites,
        watchHistory,
        language: currentLanguage
    };
    localStorage.setItem('otakuhubData', JSON.stringify(data));
}

function loadUserData() {
    const data = localStorage.getItem('otakuhubData');
    if (data) {
        const parsed = JSON.parse(data);
        currentUser = parsed.currentUser;
        favorites = parsed.favorites || [];
        watchHistory = parsed.watchHistory || [];
        currentLanguage = parsed.language || 'ar';
    }
    
    // Load from individual storage keys (legacy)
    const user = localStorage.getItem('currentUser');
    if (user) {
        currentUser = JSON.parse(user);
    }
    
    const favs = localStorage.getItem('favorites');
    if (favs) {
        favorites = JSON.parse(favs);
    }
    
    const history = localStorage.getItem('watchHistory');
    if (history) {
        watchHistory = JSON.parse(history);
    }
    
    updateUserUI();
}

// Save data before page unload
window.addEventListener('beforeunload', saveUserData);

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
    
    // Ctrl+K or Cmd+K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// ===== Responsive Menu =====
function toggleMobileMenu() {
    const menu = document.querySelector('.hidden.lg\\:flex');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// ===== Analytics (Optional) =====
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
    // Can be extended to send to analytics service
}

// Track page view
trackEvent('page_view', {
    page: 'home',
    timestamp: new Date()
});

// ===== Service Worker Registration (Optional) =====
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('Service Worker registration failed:', err);
    });
}

console.log('OtakuHub App Loaded Successfully');
