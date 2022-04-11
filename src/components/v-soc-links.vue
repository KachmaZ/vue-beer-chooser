// Social links panel component

<template>
  <div class="soc-links">
    <SocLink
      v-for="link in links"
      :key="link.id"
      :svgImg="require(`@/assets/soc-links/${link.pic}`)"
      :url="link.url"
    />
  </div>
</template>

<script>
import SocLink from "@/components/v-soc-link.vue";
export default {
  data() {
    return {
      links: [
        {
          id: 0,
          pic: "vk.svg",
          url: "https://vk.com/art_kachmaz",
        },
        {
          id: 1,
          pic: "li.svg",
          url: "https://www.linkedin.com/in/arthur-kachmazov-2a1502236/",
        },
        {
          id: 2,
          pic: "gh.svg",
          url: "https://github.com/KachmaZ",
        },
      ],
    };
  },

  components: {
    SocLink,
  },
};
</script>

<style lang="scss" scoped>
.soc-links {
  width: 80%;
  margin: 50px 10% 0;

  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 750px) {
  .soc-links {
    flex-direction: column;
  }
}
</style>