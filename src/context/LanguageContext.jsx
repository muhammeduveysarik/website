import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const translations = {
    tr: {
        // Navigation
        about: 'Hakkımda',
        skills: 'Yetenekler',
        education: 'Eğitim',
        projects: 'Projeler',
        contact: 'İletişim',

        // Hero
        greeting: 'Merhaba, ben',
        softwareDeveloper: 'Bilgisayar Mühendisi',
        heroDesc: 'Karmaşık iş akışlarını terminale taşıyor, sistemleri otomatize eden verimli araçlar geliştiriyorum',
        contactBtn: 'İletişime Geç',
        downloadCV: 'CV İndir',
        scroll: 'Kaydır',
        codeSkills: '{"Siber G.", "Linux", "C"}',
        codeMission: 'Her Şeyi Otomatikleştir',
        codeHello: 'Merhaba Dünya! Ben Muhammed Üveys.',

        // About
        aboutTitle: 'Hakkımda',
        aboutText: 'Bilecik Şeyh Edebali Üniversitesi\'nde Bilgisayar Mühendisliği bölümünde eğitimime devam ediyor, aynı zamanda siber güvenlik üzerine yoğunlaşıyorum.',
        cyberSecurityLabel: 'Siber Güvenlik',
        cyberSecurityEnthusiast: 'Sızma Testi Uzmanı',

        // Skills
        skillsTitle: 'Yetenekler',
        technicalSkills: 'Teknik Yetenekler',
        penetrationTesting: 'Sızma Testleri',
        automation: 'Otomasyon',
        languages: 'Diller',
        english: 'İngilizce',
        turkish: 'Türkçe',
        professional: 'Profesyonel',
        Congenital: 'Doğuştan',
        certificates: 'Sertifikalar',
        viewCertifications: 'Sertifikalarımı Görüntüle',

        // Education
        educationTitle: 'Eğitim',
        bilecikUniversity: 'Bilecik Şeyh Edebali Üniversitesi',
        bachelorDegree: 'Lisans, Bilgisayar Mühendisliği',
        kocaeliHighSchool: 'Kocaeli Anadolu Lisesi',
        highSchool: 'Lise',

        // Projects
        projectsTitle: 'Projelerim',
        mostStarred: 'En Çok Yıldız Alanlar',
        recentlyUpdated: 'Son Güncellenenler',
        loadingProjects: 'Projeler yükleniyor...',
        viewAll: 'Tümünü Gör',

        // Contact
        contactTitle: 'İletişim',
        contactDesc: 'Projeleriniz veya iş birlikleri için benimle iletişime geçebilirsiniz.',
        yourName: 'Adınız Soyadınız',
        yourEmail: 'E-posta Adresiniz',
        yourMessage: 'Mesajınız',
        send: 'Gönder',
        sending: 'Gönderiliyor...',
        successMessage: 'Mesajınız başarıyla gönderildi!',
        errorMessage: 'Bir hata oluştu. Lütfen tekrar deneyin.',

        // Footer
        footerText: '© 2026 Muhammed Üveys Arık. Tüm hakları saklıdır.',
    },
    en: {
        // Navigation
        about: 'About',
        skills: 'Skills',
        education: 'Education',
        projects: 'Projects',
        contact: 'Contact',

        // Hero
        greeting: 'Hello, I\'m',
        softwareDeveloper: 'Computer Engineer',
        heroDesc: 'I bring complex workflows to the terminal and develop efficient tools that automate systems',
        contactBtn: 'Get in Touch',
        downloadCV: 'Download CV',
        scroll: 'Scroll',
        codeSkills: '["CyberSec", "Linux", "C"]',
        codeMission: 'Automate Everything',
        codeHello: 'Hello World! I\'m Muhammed Uveys.',

        // About
        aboutTitle: 'About Me',
        aboutText: 'I am continuing my degree in Computer Engineering at Bilecik Seyh Edebali University while focusing on cyber security.',
        cyberSecurityLabel: 'Cyber Security',
        cyberSecurityEnthusiast: 'CAPT',

        // Skills
        skillsTitle: 'Skills',
        technicalSkills: 'Technical Skills',
        penetrationTesting: 'Penetration Testing',
        automation: 'Automation',
        languages: 'Languages',
        english: 'English',
        turkish: 'Turkish',
        professional: 'Professional',
        Congenital: 'Congenital',
        certificates: 'Certifications',
        viewCertifications: 'View My Certifications',

        // Education
        educationTitle: 'Education',
        bilecikUniversity: 'Bilecik Seyh Edebali University',
        bachelorDegree: 'Bachelor\'s Degree, Computer Engineering',
        kocaeliHighSchool: 'Kocaeli Anadolu Lisesi',
        highSchool: 'High School',

        // Projects
        projectsTitle: 'Projects',
        mostStarred: 'Most Starred',
        recentlyUpdated: 'Recently Updated',
        loadingProjects: 'Loading projects...',
        viewAll: 'View All',

        // Contact
        contactTitle: 'Contact',
        contactDesc: 'Feel free to reach out for projects or collaborations.',
        yourName: 'Your Name',
        yourEmail: 'Your Email',
        yourMessage: 'Your Message',
        send: 'Send',
        sending: 'Sending...',
        successMessage: 'Your message has been sent successfully!',
        errorMessage: 'An error occurred. Please try again.',

        // Footer
        footerText: '© 2026 Muhammed Uveys Arik. All rights reserved.',
    }
};

export const LanguageProvider = ({ children }) => {
    const [language] = useState(() => {
        // Tarayıcı dil ayarlarına göre dil belirle
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && browserLang.toLowerCase().startsWith('tr')) {
            return 'tr';
        }
        return 'en';
    });

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
