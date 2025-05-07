
new Vue({
    el: '#app',
    components: {
        apexchart: VueApexCharts,
    },
    data: {
        
        series: [10, 10, 10, 60],
        chartOptions: {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['아키텍처', '프로젝트 관리사', 'IT 컨설턴트', 'S/W개발 시스템운영'],
        responsive: [{
            breakpoint: 480,
            options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
            }
        }]
        },
    },

})
    