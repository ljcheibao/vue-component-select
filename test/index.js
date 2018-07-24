import Vue from 'vue';
import { VueSelect, VueOption } from "../dist/index.js";

new Vue({
  el: '#app',
  components: {
    VueSelect,
    VueOption
  },
  data() {
    return {
      visible: false,
      defaultValue: "2",
      data: [{
        value: "1",
        text: "2017-10-31"
      }, {
        value: "2",
        text: "2018-10-31"
      }],
      option: {
        title: "请选择时间",
        cancelText: "再想想",
      }
    }
  },
  methods: {
    confirmHandle(selectedValue) {
      alert(selectedValue);
    }
  }
});