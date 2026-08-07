const userData = {
    name: "Phạm Thái Dương",
    slogan: "Sẵn sàng V.A.R",
    email: "phamduongth77@gmail.com",
    phone: "0589396851",
    address: "Kiên Thọ, Thanh Hóa, Việt Nam",
    dob: "07/07/2009",
    age: "17",
    education: "THPT Lê Lai",
    job: "Chủ tịch HĐ Ăn bám of Công ty TNHH My Family",
    hobbies: ["Photo&Media", "Car&Motorbike", "Badminton", "Design", "Travel", "Driving"],
    socials: [
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-tiktok", link: "#" },
        { icon: "fab fa-instagram", link: "#" },
        { icon: "fab fa-threads", link: "#" },
        { icon: "fab fa-github", link: "#" },
        { icon: "fab fa-discord", link: "#" },
        { icon: "fas fa-heart", link: "#" }
    ]
};

// Render dữ liệu
document.getElementById('user-name').innerText = userData.name.split(' ').pop().toUpperCase();
document.getElementById('short-bio').innerText = userData.slogan;
document.getElementById('btn-call').href = `tel:${userData.phone}`;
document.getElementById('btn-email').href = `mailto:${userData.email}`;

document.getElementById('primary-info').innerHTML = `
    <li class="glass-interactive"><i class="fas fa-user"></i> <span>${userData.name}</span></li>
    <li class="glass-interactive"><i class="fas fa-envelope"></i> <span>${userData.email}</span></li>
    <li class="glass-interactive"><i class="fas fa-phone-alt"></i> <span>${userData.phone}</span></li>
    <li class="glass-interactive"><i class="fas fa-map-marker-alt"></i> <span>${userData.address}</span></li>
`;

document.getElementById('extended-info').innerHTML = `
    <div class="detail-item glass-interactive"><span class="label"><i class="fas fa-calendar-alt"></i> Ngày sinh</span><span class="value">${userData.dob}</span></div>
    <div class="detail-item glass-interactive"><span class="label"><i class="fas fa-birthday-cake"></i> Tuổi</span><span class="value">${userData.age}</span></div>
    <div class="detail-item glass-interactive"><span class="label"><i class="fas fa-graduation-cap"></i> Học vấn</span><span class="value">${userData.education}</span></div>
    <div class="detail-item glass-interactive"><span class="label"><i class="fas fa-briefcase"></i> Nghề nghiệp</span><span class="value">${userData.job}</span></div>
`;

const tagsGrid = document.getElementById('hobby-tags');
userData.hobbies.forEach(tag => {
    tagsGrid.innerHTML += `<span class="tag glass-interactive">${tag}</span>`;
});

const socialGrid = document.getElementById('social-links');
userData.socials.forEach(soc => {
    socialGrid.innerHTML += `<a href="${soc.link}" target="_blank" class="social-bubble glass-interactive"><i class="${soc.icon}"></i></a>`;
});

// Toggle Accordion
function toggleAccordion(btn) {
    const body = btn.nextElementSibling;
    const icon = btn.querySelector('.arrow-icon');
    
    btn.classList.toggle('active');

    if (body.style.maxHeight && body.style.maxHeight !== "0px") {
        body.style.maxHeight = "0px";
        icon.style.transform = "rotate(0deg)";
    } else {
        body.style.maxHeight = body.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
    }
}

// HIỆU ỨNG SÓNG NƯỚC (Kích thước nhỏ gọn, bung chậm 0.6s)
document.addEventListener('pointerdown', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('global-water-drop-ripple');
    
    // Đặt tâm sóng nước trùng với trỏ chuột
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    
    document.body.appendChild(ripple);
    
    // Đồng bộ thời gian xóa phần tử với animation CSS (600ms = 0.6s)
    setTimeout(() => {
        ripple.remove();
    }, 600);
});