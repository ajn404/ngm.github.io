<template>
    <div class="element-demo">
        在博客中使用element-plus搞事情
        <div class="table" style="display: flex;justify-content: center">
            <el-table
                    :data="tableDataLeft"
                    style="width:50%"
            >
                <el-table-column label="黑话" prop="value"></el-table-column>
                <el-table-column label="解释" prop="res"></el-table-column>
            </el-table>
            <el-table
                    :data="tableDataRight"
                    style="width:50%;margin-left: 50px"
            >
                <el-table-column label="黑话" prop="value"></el-table-column>
                <el-table-column label="解释" prop="res"></el-table-column>
            </el-table>
        </div>
        <el-calendar v-model="value"></el-calendar>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref} from 'vue'
    import {allegoricalList} from "./data/allegorical";

    export default defineComponent({
        setup() {
            const value = ref(new Date());
            let tableDataLeft = [], tableDataRight = [];
            allegoricalList.map((value, index, array) => {
                if (index < array.length / 2) {
                    tableDataLeft.push(value)
                } else {
                    tableDataRight.push(value)
                }
            });

            return {
                value,
                tableDataLeft: tableDataLeft,
                tableDataRight: tableDataRight
            }
        }
    })
</script>

<style scoped>
    .element-demo {
        margin-top: 20px;
    }
</style>
