<template>
    <div class="col-full">
        <h1>{{ category.name }}</h1>
        <CategoryListItem :category="category" />
    </div>
</template>

<script>
import CategoryListItem from '@/components/CategoryListItem';
import srcData from '@/data.json';

export default {
  name: "PageCategory",
  components: { CategoryListItem },

  props: {
      id: {
          required: true,
          type: String
      }
  },

    computed: {
        category() {
            return srcData.categories[this.id];
        }
    }
};
</script>