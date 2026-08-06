

const PROFILE_DATA = {
    fullname: "Phạm Thái Dương",
    nickname: "DUONGG",
    subtitle: "PROFILE",
    email: "phamduongth77@gmail.com",
    phone: "0589396851",
    address: "Kiên Thọ, Thanh Hóa, Việt Nam",
    birth: "07/07/2009",
    age: "17",
    school: "THPT Lê Lai",
    job: "Nô Đóp",
    quote: "Sẵn sàng V.A.R",
    tags: ["Photo & Media", "Car & Motorbike", "Badminton", "Design", "Travel & Driving"],
    socials: [
        { name: "Facebook", icon: "fa-brands fa-facebook-f", url: "https://facebook.com/thduongg77" },
        { name: "TikTok", icon: "fa-brands fa-tiktok", url: "https://tiktok.com/@phduong_07" },
        { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://instagram.com/duongphoto07" },
        { name: "Threads", icon: "fa-brands fa-threads", url: "https://threads.com/@duongphoto07" },
        { name: "Locket", icon: "fa-solid fa-heart", url: "https://locket.cam/duong_photo" }, // ĐÃ THÊM LOCKET Ở ĐÂY
        { name: "GitHub", icon: "fa-brands fa-github", url: "https://discord.com/ph_duong" }
    ],
    footerText: "© 2026 Duongg. All rights reserved."
};

document.addEventListener('DOMContentLoaded', () => {
    // Đổ thông tin chữ cơ bản
    document.getElementById('js-nickname').textContent = PROFILE_DATA.nickname;
    document.getElementById('js-subtitle').textContent = PROFILE_DATA.subtitle;
    document.getElementById('js-fullname').textContent = PROFILE_DATA.fullname;
    document.getElementById('js-address').textContent = PROFILE_DATA.address;
    
    // Gán Email
    const mailText = document.getElementById('js-email-text');
    if (mailText) {
        mailText.textContent = PROFILE_DATA.email;
        mailText.href = `mailto:${PROFILE_DATA.email}`;
    }

    // Gán SĐT
    const phoneText = document.getElementById('js-phone-text');
    if (phoneText) {
        phoneText.textContent = PROFILE_DATA.phone;
        phoneText.href = `tel:${PROFILE_DATA.phone}`;
    }

    // Nút liên hệ nhanh
    const callBtn = document.getElementById('js-call-btn');
    if (callBtn) callBtn.href = `tel:${PROFILE_DATA.phone}`;
    
    const mailBtn = document.getElementById('js-mail-btn');
    if (mailBtn) mailBtn.href = `mailto:${PROFILE_DATA.email}`;
    
    const mapBtn = document.getElementById('js-map-btn');
    if (mapBtn) mapBtn.href = `http://googleusercontent.com/maps.google.com/?q=${encodeURIComponent(PROFILE_DATA.address)}`;

    // Thông tin chi tiết mở rộng
    document.getElementById('js-birth').textContent = PROFILE_DATA.birth;
    document.getElementById('js-age').textContent = PROFILE_DATA.age;
    document.getElementById('js-school').textContent = PROFILE_DATA.school;
    document.getElementById('js-job').textContent = PROFILE_DATA.job;
    document.getElementById('js-quote').textContent = PROFILE_DATA.quote;

    // Render Sở thích
    const tagsContainer = document.getElementById('js-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = PROFILE_DATA.tags
            .map(tag => `<span class="tag-item">${tag}</span>`)
            .join('');
    }

    // Render Mạng xã hội (Các nút giọt nước)
    const socialsContainer = document.getElementById('js-socials');
    if (socialsContainer) {
        socialsContainer.innerHTML = PROFILE_DATA.socials
            .map(s => `<a href="${s.url}" class="social-icon-btn water-drop-btn" title="${s.name}" target="_blank"><i class="${s.icon}"></i></a>`)
            .join('');
    }

    // Footer
    const footerEl = document.getElementById('js-footer');
    if (footerEl) footerEl.textContent = PROFILE_DATA.footerText;

    // Accordion
    const toggleBtn = document.getElementById('toggleBtn');
    const detailsContent = document.getElementById('detailsContent');
    const arrowIcon = document.getElementById('arrowIcon');

    if (toggleBtn && detailsContent && arrowIcon) {
        toggleBtn.addEventListener('click', () => {
            detailsContent.classList.toggle('open');
            if (detailsContent.classList.contains('open')) {
                arrowIcon.style.transform = 'rotate(180deg)';
                arrowIcon.style.transition = 'transform 0.3s ease';
            } else {
                arrowIcon.style.transform = 'rotate(0deg)';
            }
        });
    }
});