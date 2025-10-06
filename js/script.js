const translations = {
    en: {
        lang: 'বাংলা',
        mainTitle: 'Satbaria Shah Amanat (R:) Dakhil Madrasha',
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
        'campus-sub1': 'Building & Facilities',
        'campus-sub2': 'Playground',
        'campus-sub3': 'Classrooms',
        'admission-sub1': 'Admission Info',
        'admission-sub2': 'Admission Form',
        'admission-sub3': 'Requirements',
        'academic-sub1': 'Curriculum',
        'academic-sub2': 'Class Routine',
        'academic-sub3': 'Syllabus',
        'paper-sub1': 'Previous Papers',
        'paper-sub2': 'Sample Papers',
        'paper-sub3': 'Model Questions',
        'question-sub1': 'Question Bank',
        'question-sub2': 'Practice Tests',
        'question-sub3': 'Quiz Section',
        'assignment-sub1': 'Current Assignments',
        'assignment-sub2': 'Submit Assignment',
        'assignment-sub3': 'Past Assignments',
        'student-sub1': 'Student Portal',
        'student-sub2': 'Student List',
        'student-sub3': 'Attendance',
        'result-sub1': 'Exam Results',
        'result-sub2': 'Grade Reports',
        'result-sub3': 'Result Archive',
        'resource-sub3': 'Science Lab',
        'gallery-sub1': 'Photo Gallery',
        'gallery-sub2': 'Video Gallery',
        'gallery-sub3': 'Events',
        'contact-sub1': 'Contact Info',
        'contact-sub2': 'Location Map',
        'contact-sub3': 'Message Us',
        'application-sub1': 'New Application',
        'application-sub2': 'Track Application',
        'application-sub3': 'Application Status',
        'jubilee-sub1': 'Event Schedule',
        'jubilee-sub2': 'Photo Album',
        'jubilee-sub3': 'Celebration'
    },
    bn: {
        lang: 'English',
        mainTitle: 'সাতবাড়িয়া শাহ আমানত (রঃ) দাখিল মাদরাসা',
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
        'campus-sub1': 'ভবন ও সুবিধা',
        'campus-sub2': 'খেলার মাঠ',
        'campus-sub3': 'শ্রেণীকক্ষ',
        'admission-sub1': 'ভর্তি তথ্য',
        'admission-sub2': 'ভর্তি ফর্ম',
        'admission-sub3': 'প্রয়োজনীয়তা',
        'academic-sub1': 'পাঠ্যক্রম',
        'academic-sub2': 'ক্লাস রুটিন',
        'academic-sub3': 'সিলেবাস',
        'paper-sub1': 'পূর্ববর্তী পেপার',
        'paper-sub2': 'নমুনা পেপার',
        'paper-sub3': 'মডেল প্রশ্ন',
        'question-sub1': 'প্রশ্ন ব্যাংক',
        'question-sub2': 'অনুশীলন পরীক্ষা',
        'question-sub3': 'কুইজ বিভাগ',
        'assignment-sub1': 'বর্তমান এসাইনমেন্ট',
        'assignment-sub2': 'এসাইনমেন্ট জমা',
        'assignment-sub3': 'পূর্ববর্তী এসাইনমেন্ট',
        'student-sub1': 'শিক্ষার্থী পোর্টাল',
        'student-sub2': 'শিক্ষার্থী তালিকা',
        'student-sub3': 'উপস্থিতি',
        'result-sub1': 'পরীক্ষার ফলাফল',
        'result-sub2': 'গ্রেড রিপোর্ট',
        'result-sub3': 'ফলাফল সংরক্ষণাগার',
        'resource-sub3': 'বিজ্ঞান ল্যাব',
        'gallery-sub1': 'ফটো গ্যালারি',
        'gallery-sub2': 'ভিডিও গ্যালারি',
        'gallery-sub3': 'ইভেন্ট',
        'contact-sub1': 'যোগাযোগের তথ্য',
        'contact-sub2': 'অবস্থান মানচিত্র',
        'contact-sub3': 'আমাদের বার্তা',
        'application-sub1': 'নতুন আবেদন',
        'application-sub2': 'আবেদন ট্র্যাক',
        'application-sub3': 'আবেদনের অবস্থা',
        'jubilee-sub1': 'ইভেন্ট সূচি',
        'jubilee-sub2': 'ফটো অ্যালবাম',
        'jubilee-sub3': 'উদযাপন'
    }
};

let currentLang = 'bn';

function toggleLang() {
    currentLang = currentLang === 'bn' ? 'en' : 'bn';
    updateContent();
}

function updateContent() {
    const t = translations[currentLang];
    document.getElementById('langText').textContent = t.lang;
    document.getElementById('mainTitle').textContent = t.mainTitle;
    document.querySelector("title").innerText = t.mainTitle;

    const navElements = document.querySelectorAll('[id^="nav"]');
    navElements.forEach(elem => {
        const key = elem.id;
        if (t[key]) {
            const textNode = Array.from(elem.childNodes).find(node => node.nodeType === 3);
            if (textNode) {
                textNode.textContent = t[key];
            } else {
                elem.childNodes[0].textContent = t[key];
            }
        }
    });

    // Update all submenu items
    const allSubmenuItems = document.querySelectorAll('.submenu-item');
    allSubmenuItems.forEach(elem => {
        const key = elem.id;
        if (t[key]) {
            elem.textContent = t[key];
        }
    });
}

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

setInterval(nextSlide, 3000);

// Golden Jubilee color change
const colors = ['#ff6b35', '#e91e63', '#2196f3', '#9c27b0', '#00bcd4', '#4caf50', '#f44336', '#ff9800', '#3f51b5'];
const jubileeNav = document.getElementById('nav14');

function changeJubileeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    jubileeNav.style.background = randomColor;
}

// Change color every 3-5 seconds randomly
function scheduleNextColorChange() {
    const delay = 1500; // Random between 3000-5000ms
    setTimeout(() => {
        changeJubileeColor();
        scheduleNextColorChange();
    }, delay);
}

scheduleNextColorChange();