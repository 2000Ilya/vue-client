<template>
  <div class="character-card">
    <div class="character__row-info">
      <span class="character-name">{{ name }}</span>
      <span
        class="character-status"
        :class="{
          'character__status-alive':
            status.toLowerCase() === 'Alive'.toLowerCase(),
          'character__status-dead':
            status.toLowerCase() === 'Dead'.toLowerCase(),
          'character__status-unknown':
            status.toLowerCase() === 'Unknown'.toLowerCase(),
        }"
        >{{ status }}</span
      >
    </div>
    <div class="character__row-info">
      <span class="character-gender">{{ gender }}</span>
      <span class="character-origin">{{ origin }}</span>
    </div>
    <Picture :imgSrc="image" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Picture from "./Picture.vue";

export default Vue.extend({
  components: {
    Picture,
  },
  name: "Character",
  props: {
    gender: String,
    name: String,
    status: String,
    origin: String,
    image: String,
  },
  mounted: () => {
    window.scroll({ top: 0, behavior: "smooth" });
  },
});
</script>

<style scoped>
.character-card {
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: auto;
}

.character__row-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.character-name {
  color: #333333;
}

.character__status-alive {
  color: #00bd4c;
}

.character__status-dead {
  color: #e60000;
}

.character__status-unknown {
  color: #7b7b7b;
}

.character-name,
.character-status {
  font-weight: 700;
}

.character-gender,
.character-origin {
  font-weight: 400;
  color: #8d8d8d;
}

.character-name,
.character-status,
.character-gender,
.character-origin {
  font-size: 1.2rem;
  line-height: 1.4rem;
}
</style>
