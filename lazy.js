const lazyImages = document.querySelectorAll('.lazy');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = document.createElement('img');
            img.src = entry.target.getAttribute('data-src');
            img.alt = '懶加載的圖片';
            entry.target.appendChild(img);
            observer.unobserve(entry.target); // 停止監視已加載的元素
        }
    });
});

lazyImages.forEach(image => {
    observer.observe(image); // 監視每個懶加載圖片
});

// 使用 JavaScript 動態生成圖片
function generateImages(imageCount) {
    const container = document.getElementById('image-container');
    for (let i = 1; i <= imageCount; i++) {
        const col = document.createElement('div');
        col.className = 'col-4 mb-3';

        const img = document.createElement('img');
        img.dataset.src = `http://fakeimg.pl/300x300/?text=${i}`; // 生成圖片的 URL
        img.className = 'lazy img-fluid';
        img.alt = `圖片 ${i}`;

        col.appendChild(img);
        container.appendChild(col);
    }
}

// 初始化懶加載
function initLazyLoading() {
    const images = document.querySelectorAll('.lazy');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // 將資料屬性 src 設置為 img 的 src
                observer.unobserve(img); // 停止觀察該圖片
            }
        });
    });
    images.forEach(image => observer.observe(image)); // 開始監視所有圖片
}

// 生成 99 張圖片並初始化懶加載
generateImages(99);
initLazyLoading();