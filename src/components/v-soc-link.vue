<template>
  <a class="soc-link" :href="url" target="_blank">
    <img class="soc-link-img" :src="svgImg" />
  </a>
</template>

<script>
export default {
  props: ["url", "svgImg"],
};
</script>

<style lang="scss" scoped>
.soc-link-img {
  width: 200px;
  height: 200px;
}
</style>