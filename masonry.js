// 初始化 Masonry
var grid = document.querySelector('.grid');
var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
});