const html = document.documentElement;
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const scrollProgress = document.getElementById('scrollProgress');
const navLinks = document.querySelectorAll('.nav-link');

// ========== 다크모드 토글 ==========
function initDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') !== 'false';

    const applyDarkMode = (isDark) => {
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        localStorage.setItem('darkMode', isDark);
    };

    applyDarkMode(isDarkMode);

    const toggleDarkMode = () => {
        const isDark = html.classList.contains('dark');
        applyDarkMode(!isDark);
    };

    darkModeToggle?.addEventListener('click', toggleDarkMode);
    darkModeToggleMobile?.addEventListener('click', toggleDarkMode);
}

// ========== 모바일 메뉴 토글 ==========
function initMobileMenu() {
    menuToggle?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ========== 스크롤 진행 바 ==========
function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// ========== 스크롤 스파이 ==========
function initScrollSpy() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );
                activeLink?.classList.add('active');
            }
        });
    }, {
        threshold: 0.3
    });

    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });
}

// ========== 부드러운 스크롤 네비게이션 ==========
function initSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ========== 원형 프로그레스 애니메이션 ==========
function initCircleProgress() {
    const circles = document.querySelectorAll('.circle-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circle = entry.target;
                const percentage = parseFloat(circle.getAttribute('data-percentage')) || 0;
                const circumference = 2 * Math.PI * 40;
                const offset = circumference - (percentage / 100) * circumference;

                setTimeout(() => {
                    circle.style.strokeDashoffset = offset;
                }, 100);

                observer.unobserve(circle);
            }
        });
    }, {
        threshold: 0.5
    });

    circles.forEach(circle => {
        const circumference = 2 * Math.PI * 40;
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;
        observer.observe(circle);
    });
}

// ========== 섹션 애니메이션 ==========
function initSectionAnimations() {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.visibility = 'visible';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ========== 외부 링크 표시 ==========
function initExternalLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.title = '새 창에서 열기';
    });
}

// ========== 키보드 네비게이션 ==========
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key === 'Home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (e.altKey && e.key === 'End') {
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }

        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// ========== 성능 모니터링 ==========
function initPerformanceMonitoring() {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`페이지 로드 시간: ${pageLoadTime}ms`);

        if (pageLoadTime > 3000) {
            console.warn('⚠️ 페이지 로드 시간이 깁니다.');
        }
    });
}

// ========== 초기화 함수 ==========
function initialize() {
    console.log('🚀 포트폴리오 초기화 시작...');

    initDarkMode();
    initMobileMenu();
    initScrollProgress();
    initScrollSpy();
    initSmoothScroll();
    initCircleProgress();
    initSectionAnimations();
    initExternalLinks();
    initKeyboardNavigation();
    initPerformanceMonitoring();

    console.log('✅ 초기화 완료!');
}

// ========== DOM 로드 시 초기화 ==========
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

// ========== 온라인/오프라인 상태 감지 ==========
window.addEventListener('online', () => {
    console.log('✅ 온라인 상태로 복구됨');
});

window.addEventListener('offline', () => {
    console.warn('⚠️ 오프라인 상태입니다');
});

// ========== 메모리 누수 방지 ==========
window.addEventListener('beforeunload', () => {
    console.log('🧹 페이지 언로드');
});
