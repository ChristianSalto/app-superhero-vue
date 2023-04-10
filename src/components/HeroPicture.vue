<template>
  <div class="wrapper-img">
    <img
      :class="showHero ? 'show-hero' : 'hidden-hero'"
      :src="imgSrc"
      alt="hero"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, required: true },
    showHero: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  //   data(){
  //     return this.heroId
  //   },
  computed: {
    imgSrc() {
      return this.image;
    },
  },
};
</script>

<style scoped>
.wrapper-img {
  padding: 2rem;
}

.hidden-hero {
  filter: blur(50px);
}

.show-hero {
  filter: blur(0);
}
</style>

