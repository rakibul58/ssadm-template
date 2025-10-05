const translations = {
    en: {
        lang: 'বাংলা',
        mainTitle: 'Satbaria Shah Amanat (R:) Dakhil Madrasha',
        headerLang: 'English',
        nav1: '🏠',
        nav2: 'Campus',
        nav3: 'Admission',
        nav4: 'Academic',
        nav5: 'Academic Paper',
        nav6: 'Online Question',
        nav7: 'Assignment',
        nav8: 'Student',
        nav9: 'Result',
        nav10: 'Resources',
        nav11: 'Gallery',
        nav12: 'Contact',
        nav13: 'Online Application',
        nav14: 'Golden Jubilee',
        sub1: 'Library',
        sub2: 'Computer Lab',
        side1: 'Library',
        side2: 'Computer Lab',
        founderTitle: 'Founder'
    },
    bn: {
        lang: 'English',
        mainTitle: 'সাতবাড়িয়া শাহ আমানত (রঃ) দাখিল মাদরাসা',
        nav1: '🏠',
        nav2: 'ক্যাম্পাস',
        nav3: 'ভর্তি',
        nav4: 'একাডেমিক',
        nav5: 'একাডেমিক পেপার',
        nav6: 'অনলাইন প্রশ্নত',
        nav7: 'এ্যাসাইনমেন্ট',
        nav8: 'শিক্ষার্থী',
        nav9: 'ফলাফল',
        nav10: 'রিসোর্স',
        nav11: 'গ্যালারী',
        nav12: 'যোগাযোগ',
        nav13: 'অনলাইন আবেদন',
        nav14: 'সুবর্ণজয়ন্তী',
        sub1: 'লাইব্রেরি',
        sub2: 'কম্পিউটার ল্যাব',
        side1: 'লাইব্রেরি',
        side2: 'কম্পিউটার ল্যাব',
        founderTitle: 'প্রতিষ্ঠাতা'
    }
};

let currentLang = 'en';

function toggleLang() {
    currentLang = currentLang === 'bn' ? 'en' : 'bn';
    updateContent();
}

function updateContent() {
    const t = translations[currentLang];
    document.getElementById('langText').textContent = t.lang;
    document.getElementById('mainTitle').textContent = t.mainTitle;
    let titleElement = document.querySelector("title");
    titleElement.innerText = t.mainTitle;

    for (let i = 1; i <= 14; i++) {
        const elem = document.getElementById('nav' + i);
        if (elem) elem.textContent = t['nav' + i];
    }

    for (let i = 1; i <= 2; i++) {
        const elem1 = document.getElementById('sub' + i);
        const elem2 = document.getElementById('side' + i);
        if (elem1) elem1.textContent = t['sub' + i];
        if (elem2) elem2.textContent = t['side' + i];
    }
}

// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);