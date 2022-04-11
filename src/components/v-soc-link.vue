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
.soc-link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.soc-link-img {
  width: 200px;
  height: 200px;
}

@media screen and (max-width: 750px) {
  .soc-link-img {
    width: 100px;
    height: 100px;
  }
}
</style>