<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList";

export default {
  name: "PageHome",
  components: { CategoryList },

  computed: {
    categories() {
      return Object.values(this.$store.state.categories);
    }
  }
};
</script>