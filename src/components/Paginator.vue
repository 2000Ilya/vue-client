<template>
  <div class="paginator-footer">
    <div v-if="totalCount > 5" class="paginator-container">
      <button
        @click.prevent="() => setPage(1)"
        v-bind:class="{
          'paginator__current-page': currentPage === 1,
        }"
        class="paginator__btn"
      >
        {{ 1 }}
      </button>
      <span v-if="currentPage > 3" class="paginator__ellipsis"> ... </span>
      <button
        v-for="pageNum in pagesMiddleRange"
        :key="pageNum"
        @click.prevent="() => setPage(pageNum)"
        v-bind:class="{
          'paginator__current-page': currentPage === pageNum,
        }"
        class="paginator__btn"
      >
        {{ pageNum }}
      </button>
      <span v-if="totalCount - currentPage > 2" class="paginator__ellipsis">
        ...
      </span>
      <button
        @click.prevent="() => setPage(pages[totalCount - 1])"
        v-bind:class="{
          'paginator__current-page': currentPage === pages[totalCount - 1],
        }"
        class="paginator__btn"
      >
        {{ pages[totalCount - 1] }}
      </button>
    </div>
    <div v-else class="paginator-container">
      <button
        v-for="pageNum in pages"
        :key="pageNum"
        @click.prevent="() => setPage(pageNum)"
        v-bind:class="{
          'paginator__current-page': currentPage === pageNum,
        }"
        class="paginator__btn"
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
.paginator-footer {
  width: 100vw;
  height: 6rem;
  background: #000000;
  opacity: 0.9;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.paginator-container {
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  align-items: end;
}

.paginator__btn.paginator__current-page {
  font-size: 18px;
}

.paginator__btn,
.paginator__ellipsis {
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
}
</style>
