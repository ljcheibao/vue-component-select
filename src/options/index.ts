import {
  Vue,
  Component,
  Emit,
  Model,
  Prop,
  Watch
} from 'vue-property-decorator';

/**
 * select下拉框组件
 * @class
 * @extends {Vue}
 */
@Component({
  template: require("./index.html")
})
export default class VueSelectOptionComponent extends Vue {

  @Prop()
  value: string | number;

  @Prop()
  text: string;

  @Prop()
  selected: boolean;

  get showOptionText() {
    return (this.text) ? this.text : this.value;
  }

  get optionText() {
    return this.text || (this.$el && this.$el.textContent);
  }

  get classes(): string {
    return this.selected ? "at hover" : "at";
  }

  selectHandle() {
    //@ts-ignore
    this.$parent.selectOption({
      value: this.value,
      text: this.optionText,
    });
  }
}