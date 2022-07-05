<template>
  <div>
    <h1>11111</h1>
    <div class="lia">
      <left></left>
      <right></right>
    </div>
  </div>
</template>
<script>
import left from "@/components/left.vue";
import right from "@/components/right.vue";
export default {
  components: {
    left,
    right,
  },
};
</script>
<style scoped>
.lia {
  display: flex;
}
</style>

