export default defineNuxtRouteMiddleware(()=>{
    const pageVisitcount=usePageVisitCount();
    pageVisitcount.value++;
})