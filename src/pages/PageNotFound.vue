<template>
    <div class="container-fluid">
        <h1 :class="$style.headingLarge">Not Found</h1>
        <p :class="$style.textLarge">
            Oops nothing to show you here ! It's time to go back
            <router-link :to="{ name: 'PageHome' }"> Home</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "PageNotFound"
    };
</script>

<style module>
    .headingLarge {
        font-size: 3.5rem;
    }

    .textLarge {
        font-size: 2rem;
        font-weight: 100;
    }
</style>