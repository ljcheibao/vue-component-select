export default {
  props: {
    options: {
      type: Array,
      default: []
    },
    slotOptions: {
      type: Array,
      default: []
    }
  },
  functional: true,
  render(h, { props, parent }) {
    return props.options;
  }
};