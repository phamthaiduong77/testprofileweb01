document.addEventListener("DOMContentLoaded", () => {
    
    // Xử lý nút Mở rộng / Thu gọn thông tin
    const expandBtn = document.getElementById("expand-btn");
    const extendedInfo = document.getElementById("extended-info");

    expandBtn.addEventListener("click", (e) => {
        // Ngăn chặn nổi bọt sự kiện click để không lặp sóng nước quá mức
        e.stopPropagation(); 
        
        if (extendedInfo.classList.contains("hidden")) {
            extendedInfo.classList.remove("hidden");
            extendedInfo.classList.add("show");
            expandBtn.innerHTML = `Thu gọn <i class="fa-solid fa-chevron-up"></i>`;
        } else {
            extendedInfo.classList.add("hidden");
            extendedInfo.classList.remove("show");
            expandBtn.innerHTML = `Xem chi tiết thông tin mở rộng <i class="fa-solid fa-chevron-down"></i>`;
        }
    });

    // ===============================================
    // HIỆU ỨNG SÓNG NƯỚC NHỎ (RIPPLE EFFECT) KHI CLICK
    // ===============================================
    document.body.addEventListener("click", function(e) {
        // Tạo element div
        let ripple = document.createElement("div");
        
        // Gán class .ripple đã CSS
        ripple.classList.add("ripple");
        
        // Xác định vị trí chuột
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        
        // Thêm vào body
        document.body.appendChild(ripple);
        
        // Xóa element sau khi kết thúc animation (0.5s)
        setTimeout(() => {
            ripple.remove();
        }, 500);
    });

    /* 
    Lưu ý: Nếu bạn muốn sửa trực tiếp dữ liệu cá nhân thông qua JS, 
    bạn có thể thay đổi thuộc tính textContent ở dưới đây:
    
    document.getElementById("user-name").textContent = "Tên Mới Của Bạn";
    document.getElementById("user-hobbies").textContent = "Nghe nhạc, Đá bóng";
    */
});