//柱狀圖
const ctx1 = document.getElementById('Bar Chart');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '投票數',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
//氣泡圖
const ctx2 = document.getElementById('Bubble Chart');
new Chart(ctx2, {
    type: 'bubble', // 設定圖表類型為氣泡圖
    data: {
        datasets: [{
            label: '第一組數據',
            data: [
                { x: 20, y: 30, r: 15 }, // 第 1 個氣泡
                { x: 40, y: 10, r: 10 }  // 第 2 個氣泡
            ],
            backgroundColor: 'rgb(255, 99, 132)'
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X 軸標籤'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Y 軸標籤'
                }
            }
        }
    }
});
//圓環圖
const ctx3 = document.getElementById('Doughnut Chart');
new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
});
//圓餅圖
const ctx4 = document.getElementById('Pie Chart');
new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
});
//折線圖
const ctx5 = document.getElementById('Line Chart');
const labels = ['一月', '二月', '三月', '四月', '五月', '六月', '七月'];
new Chart(ctx5, {
    type: 'line', // 設定圖表類型為折線圖
    data: {
        labels: labels, // 使用定義的月份標籤
        datasets: [{
            label: '我的第一組數據',
            data: [65, 59, 80, 81, 56, 55, 40], // Y 軸數據
            fill: false, // 不填充顏色
            borderColor: 'rgb(75, 192, 192)', // 線條顏色
            tension: 0.1 // 線條的平滑程度
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X 軸標籤' // X 軸標題
                }
            },
            y: {
                beginAtZero: true, // Y 軸從零開始
                title: {
                    display: true,
                    text: 'Y 軸標籤' // Y 軸標題
                }
            }
        }
    }
});