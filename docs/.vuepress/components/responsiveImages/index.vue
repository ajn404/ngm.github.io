<template>
    <div class="flex-box">

        <div v-for="item in fakeData" class="fake-images" :key="item.itemCity">
            <el-image :src="item.itemUrl" style="" class="image-item">
                <template #error>
                    <div class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </template>
            </el-image>
        </div>

    </div>
</template>

<script lang="ts">
    import * as faker from 'faker'

    export default {
        name: "index",
        mounted(): void {

        },
        data() {
            let fakeData = [];
            for (let i = 0; i < 21; i++) {
                let {itemCity, itemUrl} = {
                    itemCity:faker.address.city(),
                    itemUrl:faker.image.image()
                }
                fakeData.push({itemCity, itemUrl})
            }

            return {
                fakeData
            }
        }
    }
</script>

<style scoped lang="scss">
.flex-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
    .fake-images{
        flex: 0 0 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }


}
</style>
