import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      likes: 0,
      likeToggle: false,
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
  },
});

export default store;
