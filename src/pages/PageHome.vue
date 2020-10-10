<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <ThreadList :threads="threads"></ThreadList>
  </div>
</template>

<script>
import srcData from "@/data.json";
import ThreadList from "@/components/ThreadList";

export default {
  name: "PageHome",
  components: { ThreadList },
  data() {
    return {
      threads: Object.values(srcData.threads),
      posts: srcData.posts,
      users: srcData.users,
    };
  },
};
</script>