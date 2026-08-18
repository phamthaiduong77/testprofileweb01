document.addEventListener("DOMContentLoaded", () => {
    
    // Xử lý đóng/mở mượt mà cho phần thông tin chi tiết
    const toggleBtn = document.getElementById("toggle-btn");
    const extendedContent = document.getElementById("extended-content");

    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        
        extendedContent.classList.toggle("open");
        
        if (extendedContent.classList.contains("open")) {
            toggleBtn.innerHTML = `Thu gọn <i class="fa-solid fa-chevron-up"></i>`;
        } else {
            toggleBtn.innerHTML = `Xem chi tiết <i class="fa-solid fa-chevron-down"></i>`;
        }
    });

    // Tạo hiệu ứng sóng nước nhỏ khi nhấp chuột
    document.addEventListener("click", function(e) {
        let ripple = document.createElement("div");
        ripple.classList.add("ripple");
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 550);
    });
});