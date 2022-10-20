<template>
    <div>
       
        <button @click="moveto">Take me to about page</button>

    <p>index Page</p>
    </div>
  
</template>
<script setup>
function moveto(){
    navigateTo('about')
}
</script>