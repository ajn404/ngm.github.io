<template>
    <div class="chart-box">
        <div ref="chart">
        </div>
    </div>
</template>

<script>
    import ApexCharts from 'apexcharts'

    export default {
        name: "charts",
        mounted() {
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
            let chart = new ApexCharts(this.$refs.chart, options);
            chart.render()
        }
    }
</script>

<style scoped>

</style>
