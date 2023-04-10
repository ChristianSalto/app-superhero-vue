<template>
  <h1 v-if="!hero">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quien es este heroe?</h1>

    <HeroPicture
      :image="hero.image"
      :showHero="hero.id === heroId ? !showHero : showHero"
    />
    <HeroOptions :heros="herosArr" @on-select="checkAnswer($event)" />
  </div>

  <template v-if="showAnswer">
    <h2 v-html="msg" class="fade-in"></h2>
    <button @click="newGame">Start game</button>
  </template>
</template>

<script>
import HeroOptions from "@/components/HeroOptions.vue";
import HeroPicture from "@/components/HeroPicture.vue";

import { getHeroOptions } from "@/helpers/getHeroOptions";

export default {
  components: { HeroOptions, HeroPicture },
  data() {
    return {
      herosArr: [],
      hero: null,
      showHero: false,
      heroId: null,
      showAnswer: false,
      msg: "",
    };
  },
  methods: {
    async mixHeroArray() {
      this.herosArr = await getHeroOptions();

      const rndInt = Math.floor(Math.random() * 4);
      this.hero = this.herosArr[rndInt];
    },

    checkAnswer(heroId) {
      this.heroId = heroId;
      this.showAnswer = true;

      if (heroId != this.hero.id) {
        this.msg = `Oops, Incorrecto era <span class="span">${this.hero.name}</span>`;
      } else {
        this.msg = `Correcto es ${this.hero.name}`;
      }
      
      return this.msg;
    },

    newGame() {
      this.showAnswer = false;
      this.showHero = false;
      this.herosArr = [];
      this.mixHeroArray();
    },
  },
  mounted() {
    this.mixHeroArray();
  },
};
</script>

<style scoped>
div h1 {
  color: blue;
}

button {
  padding: 10px;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  background: whitesmoke;
}

button:hover {
  background: ghostwhite;
}
</style>