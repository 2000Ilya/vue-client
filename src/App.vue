<template>
  <div id="app">
    <div v-if="pages !== null && characters !== null && currentPage !== null">
      <router-view class="app__characters-feed" :characters="characters" />
      <Paginator
        :totalCount="pages.length"
        :currentPage="currentPage"
        :pages="pages"
        :pagesMiddleRange="
          currentPage > 2 && pages.length - currentPage > 2
            ? pages.slice(
                pages.indexOf(currentPage) - 1,
                pages.indexOf(currentPage) + 2
              )
            : pages.length - currentPage <= 2
            ? pages.slice(pages.length - 4, pages.length - 1)
            : pages.slice(1, 4)
        "
        :setPage="setPage"
      />
    </div>
    <div v-else><Loader /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Paginator from "@/components/Paginator.vue";
import Loader from "@/components/Loader.vue";
import apiCharacterRequest from "./utils/apiCharacterRequest";
import { Character } from "./utils/types";
import router from "./router";

export default Vue.extend({
  router,
  components: {
    Paginator,
    Loader,
  },
  data() {
    return {
      pages: null as number[] | null,
      characters: null as Character[] | null,
      currentPage: null as number | null,
    };
  },
  methods: {
    setPage: function (page: number) {
      this.currentPage = page;
    },
    getData: function (page: number) {
      apiCharacterRequest(page).then((response) => {
        this.characters = response.data.results;

        this.pages = Array(response.data.info.pages)
          .fill(null)
          .map((_, index) => index + 1);
      });
    },
  },
  watch: {
    currentPage: function () {
      if (this.currentPage && this.currentPage !== null) {
        this.getData(this.currentPage);
        if (this.$route.params.page !== String(this.currentPage)) {
          this.$router.push(`/${this.currentPage}`);
        }
      }
    },
  },
  mounted() {
    this.currentPage = Number(this.$route.params.page);
  },
});
</script>

<style>
@font-face {
  font-family: "Roboto Condensed";
  font-weight: 400;
  src: local("Roboto Condensed"),
    url(./assets/fonts/RobotoCondensed-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Roboto Condensed";
  font-weight: 700;
  src: local("Roboto Condensed"),
    url(./assets/fonts/RobotoCondensed-Bold.ttf) format("truetype");
}

html {
  font-size: 10px;
}

body {
  margin: 0;
  font-family: "Roboto Condensed";
  font-weight: 400;
}

button {
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
}

.app__characters-feed {
  margin: 1.6rem auto 7.6rem;
}
</style>
