<template>
  <div class="paginator-container">
    <div v-if="totalCount > 5">
      <button @click.prevent="() => setPage(1)">
        {{ 1 }}
      </button>
      <span v-if="currentPage > 3"> ... </span>
      <button
        v-for="pageNum in pagesMiddleRange"
        :key="pageNum"
        @click.prevent="() => setPage(pageNum)"
      >
        {{ pageNum }}
      </button>
      <span v-if="totalCount - currentPage > 2"> ... </span>
      <button @click.prevent="() => setPage(pages[totalCount - 1])">
        {{ pages[totalCount - 1] }}
      </button>
    </div>
    <div v-else>
      <button
        v-for="pageNum in pages"
        :key="pageNum"
        @click.prevent="() => setPage(pageNum)"
      >
        {{ pageNum }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
  name: "Paginator",
  props: {
    totalCount: { required: true, type: Number },
    siblingCount: { required: true, type: Number },
    currentPage: { required: true, type: Number },
    pages: { required: true, type: Array as PropType<number[]> },
    pagesMiddleRange: { required: true, type: Array as PropType<number[]> },
    setPage: { required: true, type: Function },
  },
};
</script>

<style>
.paginator-container {
}
</style>
