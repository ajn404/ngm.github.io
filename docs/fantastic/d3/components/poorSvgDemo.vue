<template>
  <div class="poor-svg-demo">
    <svg v-html="path" viewBox="0 0 100 200" style="height:50vh;width:50vw">
    </svg>
  </div>
</template>

<script setup>
    import {ref} from 'vue'
    const path = ref('')
    for(let i=5;i<100;){
        for(let j=10;j<200;j+=5,i+=2.5){
            path.value+=`
            <circle cx="${i}" cy="${j}" r="2.5">
            </circle><circle cx="${j}" cy="${i}" r="2.5"></circle>
            `
        }
    }
</script>

<style>

</style>


