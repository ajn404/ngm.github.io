<template>
    <div class="chart-box">
        <h2>
            apexCharts
        </h2>
        <h3>
            docs demo
        </h3>
        <div ref="lineChart">
        </div>
        <h3>
            areaChart
        </h3>
        <div ref="areaChart"></div>
        <h3>烛蜡图</h3>
        <div ref="candlestick">

        </div>
    </div>
</template>

<script>
    import ApexCharts from 'apexcharts'
    export default {
        name: "charts",
        mounted() {
            this.inintApexCharts();
            this.initAreaChart();
        },
        methods:{
            //line chart
            inintApexCharts(){
                // console.log(ApexCharts);
                // console.log(this.$refs.chart)
                // console.log(document.getElementById('chart'))
                // console.log(this.$refs.chart ===document.getElementById('chart'))
                const options = {
                    chart: {
                        type: 'line'
                    },
                    series: [{
                        name: 'sales',
                        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                    }],
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    }
                };
                // debugger
                let chart = new ApexCharts(this.$refs.lineChart, options);
                chart.render()
            },
            //area chart
            initAreaChart(){
                const options = {
                    chart: {
                        type: 'area'
                    },
                    stroke:{
                      curve:'stepline'
                    },
                    series: [{
                        name: 'sales',
                        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                    }],
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    }
                };
                // debugger
                let chart = new ApexCharts(this.$refs.areaChart, options);
                chart.render()
            },


        }
    }
</script>
<style scoped>

</style>
