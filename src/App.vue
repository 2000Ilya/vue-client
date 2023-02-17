<template>
  <div id="app">
    <Paginator
      v-if="pages !== null"
      v-bind:totalCount="pages.length"
      v-bind:siblingCount="3"
      v-bind:currentPage="currentPage"
      v-bind:pages="pages"
      v-bind:pagesMiddleRange="
        currentPage > 2 && pages.length - currentPage > 2
          ? pages.slice(
              pages.indexOf(currentPage) - 1,
              pages.indexOf(currentPage) + 2
            )
          : pages.length - currentPage <= 2
          ? pages.slice(pages.length - 4, pages.length - 1)
          : pages.slice(1, 4)
      "
      v-bind:setPage="setPage"
    />
    <div v-else><Loader /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Paginator from "@/components/Paginator.vue";
import Loader from "@/components/Loader.vue";
import apiCharacterRequest from "./utils/apiCharacterRequest";
import { Character, DataInfo } from "./utils/types";

export default Vue.extend({
  components: {
    Paginator,
    Loader,
  },
  data() {
    return {
      pages: null as number[] | null,
      characters: null as Character[] | null,
      currentPage: 1,
      info: null as DataInfo | null,
    };
  },
  methods: {
    setPage: function (page: number) {
      this.currentPage = page;
    },
    getData: function () {
      apiCharacterRequest(this.currentPage).then((response) => {
        this.characters = response.data.results;
        this.info = response.data.info;

        this.pages = Array(response.data.info.pages)
          .fill(null)
          .map((_, index) => index + 1);
      });
    },
  },
  watch: {
    currentPage: function () {
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
});
</script>
