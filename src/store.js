import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      likes: 0,
      likeToggle: false,
      more: {},
    };
  },
  mutations: {
    clickLike(state) {
      if (!likeToggle) {
        state.likes++;
        state.likeToggle = true;
      } else {
        state.likes--;
        state.likeToggle = false;
      }
    },
    setMore(state, payload) {
      state.more = payload;
    },
  },
  actions: {
    getData(context) {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then(({ data }) => context.commit("setMore", data));
    },
  },
});

export default store;
