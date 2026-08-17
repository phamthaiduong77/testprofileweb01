document.addEventListener("DOMContentLoaded", () => {
    // 1. Chức năng Đóng/Mở thông tin mở rộng
    const toggleBtn = document.getElementById("toggle-btn");
    const extendedInfo = document.getElementById("extended-info");
    const btnText = toggleBtn.querySelector("span");

    toggleBtn.addEventListener("click", () => {
        extendedInfo.classList.toggle("active");
        toggleBtn.classList.toggle("open");
        
        if (extendedInfo.classList.contains("active")) {
            btnText.textContent = "Thu gọn thông tin";
        } else {
            btnText.textContent = "Xem thông tin mở rộng";
        }
    });

    // 2. Hiệu ứng gợn sóng (Ripple) khi click vào bất cứ đâu
    document.addEventListener("click", function(e) {
        // Tạo element ripple
        const ripple = document.createElement("div");
        ripple.className = "ripple";
        
        // Đặt vị trí dựa trên tọa độ chuột
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        
        // Thêm vào body
        document.body.appendChild(ripple);
        
        // Xóa element sau khi animation kết thúc (500ms)
        setTimeout(() => {
            ripple.remove();
        }, 500);
    });
});