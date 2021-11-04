<template>
    <div>
        <pre>
            {{data}}
        </pre>
    </div>
</template>
<script>
    import {getXuanjianghui} from "./api/inde";
    export default {
        name:'workcal',
        data(){
            return {
                data:{}
            }
        },
        mounted() {
            getXuanjianghui().then(
                res=>{
                    this.data =res
                }
            )
        }
    }
</script>
<style scoped>

</style>
