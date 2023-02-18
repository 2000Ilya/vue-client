<template>
  <div class="characters-feed">
    <Character
      v-for="character in characters"
      :key="character.id"
      :gender="character.gender"
      :name="character.name"
      :status="character.status"
      :origin="character.origin.name"
      :image="character.image"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Character from "./Character.vue";
import { Character as CharacterType } from "@/utils/types";

export default Vue.extend({
  components: {
    Character,
  },
  name: "CharactersFeed",
  props: {
    characters: { required: true, type: Array as PropType<CharacterType[]> },
  },
});
</script>

<style scoped>
.characters-feed-container {
  margin: auto;
}

.characters-feed {
  max-width: 63rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
}

@media screen and (max-width: 768px) {
  .characters-feed {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
