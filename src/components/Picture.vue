<template>
  <img v-bind:src="imgSrc" class="picture" alt="character" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Picture",
  props: {
    imgSrc: String,
  },
});
</script>

<style scoped>
.picture {
  width: 30rem;
  height: 30rem;
}
</style>
