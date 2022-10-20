<template>
    <div>
    <main class="user-layout bg-grey-100">
        <article class="sidebar">
            <p>Dashboard</p>
            <p>Settings</p>
            <p>Profile</p>
        </article>
        <section>
            <!-- Here Nuxt will replace Page content -->
            <slot></slot>
        </section>
    </main>
</div>
</template>
<style>
.sidebar {
    flex-direction: column;
    display: flex;
}
.user-layout{
display: flex;
}
</style>
