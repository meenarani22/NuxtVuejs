<template>
    <div class="grid grid-cols-4 gap-4 mt-10">
        <NuxtLink
        v-for="iphone in iphones"
        :key="iphone"
        :to="`/iphone/${iphone}`"
        class="shadow-lg border rounded-lg text-center"
        >
        <h1> {{iphone}}</h1>
            <div class="flex justify-center">
               
                <img width="200" :src="`/images/${iphone}.png`" alt="" />
            </div>
        </NuxtLink>       
    </div>
</template>
<script setup>
useHead({
    title:"Nuxt3 - Iphone"
});
//client route path
const iphones=['iphone-12','iphone-13','iphone-12pro','iphone-13pro'];
//these for server route but here we use client route
//const {data}=useFetch("api/iphones")
// const {data}=useFetch("/iphones")
// const iphones= data;
</script>