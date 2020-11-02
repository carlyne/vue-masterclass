<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import srcData from "@/data.json";
import CategoryList from "@/components/CategoryList";

export default {
  name: "PageHome",
  components: { CategoryList },

  data() {
    return {
      categories: Object.values(srcData.categories)
    };
  },
};
</script>