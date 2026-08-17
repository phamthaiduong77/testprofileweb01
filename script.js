// Tính năng đóng/mở thông tin mở rộng
const toggleBtn = document.getElementById('toggle-btn');
const extendedInfo = document.getElementById('extended-info');
const btnText = toggleBtn.querySelector('span');

toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Ngăn sự kiện click tạo gợn sóng đè lên nút
    extendedInfo.classList.toggle('active');
    toggleBtn.classList.toggle('open');
    
    // Đổi chữ trên nút khi đóng/mở
    if (extendedInfo.classList.contains('active')) {
        btnText.textContent = 'Thu gọn thông tin';
    } else {
        btnText.textContent = 'Xem thông tin mở rộng';
    }
});

// Tính năng hiệu ứng gợn sóng nước khi click/chạm
document.addEventListener('click', function(e) {
    // Tạo phần tử div chứa gợn sóng
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    
    // Đặt tọa độ của gợn sóng ngay tại điểm click chuột / chạm ngón tay
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    
    // Thêm vào thẻ body để hiển thị
    document.body.appendChild(ripple);
    
    // Tự động xóa phần tử gợn sóng sau khi hiệu ứng kết thúc (600ms) để không làm nặng web
    setTimeout(() => {
        ripple.remove();
    }, 600);
});