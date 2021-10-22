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
        <el-calendar v-model="value" class="calendar"></el-calendar>
        <el-tabs
                type="card"
                closable
                v-model="tabsVal"
                @tab-remove="removeTab"
        >
            <el-tab-pane
                    v-for="item in tabs"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
            >{{item.content}}</el-tab-pane>
            <el-button type="primary" @click="addTab()">添加</el-button>

        </el-tabs>
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
                //日历
                value,
                //表格
                tableDataLeft: tableDataLeft,
                tableDataRight: tableDataRight,
                //
                tabsVal:'',
                tabs:[
                    {
                        title:'1',
                        name:'1',
                        content:'1'
                    },
                    {
                        title:'2',
                        name:'2',
                        content:'2'
                    }
                ],
                tabIndex:2
            }
        },
        methods: {
            removeTab(targetName) {
                const tabs = this.tabs;
                let activeName = this.tabsVal
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            const nextTab = tabs[index + 1] || tabs[index - 1]
                            if (nextTab) {
                                activeName = nextTab.name
                            }
                        }
                    })
                }
                this.tabsVal = activeName
                this.tabs = tabs.filter((tab) => tab.name !== targetName)
            },
            addTab() {
                const newTabName = `${++this.tabIndex}`
                this.tabs.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content',
                })
                this.tabsVal = newTabName
            },
        }
    })
</script>

<style scoped lang="scss">
    .element-demo {
        margin-top: 20px;
    }
    .calendar{
        width: 100%;
        ::v-deep(table){
            display: table;
        }
        ::v-deep(.el-button-group){
            display: flex;
            gap: 10px;
        }
    }

</style>
