import VueSelect from "./src/index";
import VueOption from "./src/options/index";

/* const VueSelectPlugin = {
  install(Vue, options) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue;
    }
    Vue.component("vue-select", VueSelectComponent);
  }
} */
export default VueSelect
export {
  VueSelect,
  VueOption
};