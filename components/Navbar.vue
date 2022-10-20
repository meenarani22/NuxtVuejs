<template>    
  <nav class="bg-purple-700 shadow-lg p-3 text-lg flex justify-between text-white">
      
      <div class="flex">
          <NuxtLink class="mr-4" to="/">Home</NuxtLink>
          <NuxtLink class="mr-4" to="/iphone">IPhone</NuxtLink>
          <p class="mr-4">Cart ({{ cart.length }})</p>
          <p>Total Route Changed : {{ pageVisitCount }}</p>
      </div>
      <div v-if="auth.isAuthenticated">
      <NuxtLink to="/profile">Profile</NuxtLink>
      <button class="ml-4" @click="logout">Logout</button>
      </div>
      <NuxtLink v-else to="/login">Login</NuxtLink>
      
  </nav>        
</template>
<script setup>
const cart =useCart();
const auth = useAuth();
const pageVisitCount = ref(0);
onMounted(() => {
  pageVisitCount.value = usePageVisitCount();
});
function logout() {
auth.value.isAuthenticated = false;
}
</script>