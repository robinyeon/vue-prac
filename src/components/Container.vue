<template>
  <div>
    <div v-if="step === 0">
      <Post v-for="(post, idx) in posts" :key="idx" :post="posts[idx]" />
    </div>

    <div v-if="step === 1">
      <div
        :class="clickedFilter"
        class="upload-image"
        :style="{ backgroundImage: `url(${tempUrl})` }"
      ></div>
      <div class="filters">
        <FilterBox
          :tempUrl="tempUrl"
          v-for="(filter, idx) in filters"
          :key="idx"
          :filter="filter"
        >
          {{ filter }}
        </FilterBox>
      </div>
    </div>

    <div v-if="step === 2">
      <div
        :class="clickedFilter"
        class="upload-image"
        :style="{ backgroundImage: `url(${tempUrl})` }"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('insertContent', $event.target.value)"
          class="write-box"
        >
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import FilterBox from "./FilterBox.vue";
import Post from "./Post.vue";
import filters from "../assets/filters.js";

export default {
  name: "container",
  data() {
    return {
      filters,
      clickedFilter: "",
    };
  },
  mounted() {
    this.emitter.on("clickFilterBox", (data) => (clickedFilter = data));
  },
  props: {
    posts: Array,
    step: Number,
    tempUrl: String,
  },
  components: {
    Post,
    FilterBox,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
