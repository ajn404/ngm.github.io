<template>
    <div class="element-demo">
        在博客中使用element-plus搞事情
        <br>经典el-table
        <el-table
                :data="[{ date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }, { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' }]"
                style="width: 100%"
                stripe="true"
        >
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
        <br>经典
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .element-demo{
        margin-top: 20px;
    }
</style>
