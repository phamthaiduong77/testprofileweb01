document.addEventListener("DOMContentLoaded", () => {
    
    // Xử lý đóng/mở mượt mà thông tin mở rộng
    const toggleBtn = document.getElementById("toggle-btn");
    const extendedContent = document.getElementById("extended-content");

    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Ngăn tạo sóng nước khi ấn nút
        
        extendedContent.classList.toggle("open");
        
        // Đổi chữ và icon
        if (extendedContent.classList.contains("open")) {
            toggleBtn.innerHTML = `Thu gọn <i class="fa-solid fa-chevron-up"></i>`;
        } else {
            toggleBtn.innerHTML = `Xem chi tiết <i class="fa-solid fa-chevron-down"></i>`;
        }
    });

    // Hiệu ứng sóng nước
    document.addEventListener("click", function(e) {
        let ripple = document.createElement("div");
        ripple.classList.add("ripple");
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        
        // Xóa element sau khi kết thúc animation (0.6s)
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});