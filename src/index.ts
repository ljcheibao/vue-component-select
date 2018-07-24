import "./index.less";
import {
  Vue,
  Component,
  Emit,
  Model,
  Prop,
  Watch
} from 'vue-property-decorator';

import FunctionalOptions from './functional-options.js';

function processOption(option) {
  if (!option.componentOptions) return option;
  const selected = option.componentOptions.propsData.selected;
  const propsData = {
    ...option.componentOptions.propsData,
    selected: selected
  };
  return {
    ...option,
    componentOptions: {
      ...option.componentOptions,
      propsData: propsData
    }
  };
}

/**
 * select下拉框组件
 * @class
 * @extends {Vue}
 */
@Component({
  template: require("./index.html"),
  components: {
    FunctionalOptions
  }
})
export default class VueSelectComponent extends Vue {

  @Prop()
  value: boolean;

  @Prop()
  option: { title: string, cancelText: string, confirmText: string };

  //监听value值的变更
  @Watch("value")
  watchValueChange(newVal: any): void {
    this.visible = newVal;
  }

  get title(): string {
    return this.option.title || "请选择";
  }

  get cancelText(): string {
    return this.option.cancelText || "取消";
  }

  get confirmText(): string {
    return this.option.confirmText || "确定";
  }

  get selectOptions(): any {
    let selectOptions = [];
    let slotOptions = this.slotOptions || [];
    for (let option of slotOptions) {
      if (option.componentOptions.propsData.selected)
        this.selectedOption.value = option.componentOptions.propsData.value;
      selectOptions.push(processOption(option));
    }
    return selectOptions;
  };

  slotOptions: any = this.$slots.default;

  //控制弹框的显示
  visible: boolean = this.value;

  selectedOption: { value: number | string, text: number | string } = {
    value: "",
    text: ""
  };

  /**
   * 点击取消
   * @return {void} 无返回值
   */
  closeHandle(): void {
    this.visible = false;
    this.$emit('input', false);
  }

  /**
   * 点击确定触发的事件
   * @param {string} selectedValue select选中的值
   * @return {void} 无返回值
   */
  confirmHandle(): void {
    this.visible = false;
    this.$emit('input', false);
    this.$emit("on-change", this.selectedOption.value);
  }

  selectOption(option): any {
    this.selectedOption.value = option.value;
    this.selectedOption.text = option.text;
    let tempSlotOption = [];
    this.slotOptions.map(node => {
      let propsData = node.componentOptions.propsData;
      if (propsData.value == option.value) {
        propsData.selected = true;
      } else {
        propsData.selected = false;
      }
      tempSlotOption.push(node);
    });
    this.slotOptions = tempSlotOption;
  }
}