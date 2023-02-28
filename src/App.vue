<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">Publish</li>
    </ul>
  </div>

  <Container
    @insertContent="writtenContent = $event"
    :posts="posts"
    :step="step"
    :tempUrl="tempUrl"
  />

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="uploadImg" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <button @click="clickMoreBtn">More</button>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">More and more</button>
</template>

<script>
import posts from "./assets/posts";
import Container from "./components/Container.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      posts,
      count: 0,
      step: 0,
      tempUrl: "",
      writtenContent: "",
      clickedFilter: "",
    };
  },
  components: {
    Container,
  },
  methods: {
    clickMoreBtn() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then((res) => {
          this.posts.push(res.data);
          this.count++;
        });
    },
    uploadImg(e) {
      let file = e.target.files;
      let tempUrl = URL.createObjectURL(file[0]);
      this.tempUrl = tempUrl;
      this.step++;
    },
    mounted() {
      this.emitter.on("clickFilterBox", (data) => (this.clickedFilter = data));
    },
    publish() {
      const myPost = {
        name: "Kim JunHo",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.tempUrl,
        likes: 223,
        date: "May 27",
        liked: false,
        content: this.writtenContent,
        filter: this.clickedFilter,
      };
      this.posts.unshift(myPost);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
