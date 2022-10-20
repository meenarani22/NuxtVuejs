<template>
    <p>Meena</p>   
</template>
<script setup>
// this used to redirect to other page definePageMeta is predefined function to use metadata
definePageMeta({
    layout:"sidebar",
    middleware:["auth"],
    //Inline middleware or default middleware code is only here
    // middleware:()=>{
    //     const auth=useAuth();
    //     return auth.value.isAuthenticated;
    // }
});
</script>