<template>
  <div class="picture-container">
    <img
      v-show="isLoaded"
      :src="imgSrc"
      class="picture"
      alt="character"
      @load="onImgLoad"
    />
    <Loader class="picture-loader" v-if="!isLoaded" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Loader from "./Loader.vue";

export default Vue.extend({
  name: "Picture",
  components: {
    Loader,
  },
  props: {
    imgSrc: String,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    onImgLoad() {
      this.isLoaded = true;
    },
  },
});
</script>

<style scoped>
.picture-container {
  position: relative;
  width: 30rem;
  height: 30rem;
}

.picture,
.picture-loader {
  width: 100%;
  height: 100%;
}

.picture {
  object-fit: contain;
  animation-name: appearance;
  animation-duration: 1s;
}

@keyframes appearance {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
