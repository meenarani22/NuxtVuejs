<template>
  <div>
    <!-- <HomeWelcome></Home-Welcome> use directory namebefore component or create a component with the same name combination of directory and component -->
   <!-- <Home-Welcome></Home-Welcome>
  <Counter></Counter> -->
  <a href="#" @click="view('home')">Home</a>&nbsp;
  <a href="#" @click="view('counter')">Counter</a>
  <br />
  <NuxtPage />    
  <!-- it will load route here -->
  <LazyHome-Welcome v-if="page=='home'" />
  <LazyCounter v-if="page=='counter'" />
  </div>
</template>
<script setup>
  const page=ref("");

  function view(name){
    page.value=name;
  }
</script>
<!-- vue 2 syntax -->
<!-- <script>
export default{
  data(){
    return{
      count:0
    }
  },
  methods:{
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    }
  }
}
</script> -->
