### vue select下拉框选择组件

typescript+vue开发的下拉框选择组件，使用模拟的增强下拉选择器来代替浏览器原生的选择器，简单易用

#### 代码示例

使用v-model来进行数据双向绑定，控制组件的显示与隐藏，详情看以下代码

![image](https://github.com/ljcheibao/vue-component-select/blob/master/images/demo.png)

- js代码

  ```js
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
  ```

- html模板

  ```html
  <div id="app">
      <button @click="visible=true">点击测试</button>
      <vue-select v-model="visible" :option="option" @on-change="confirmHandle">
        <vue-option v-for="item in data" 
          :value="item.value" 
          :selected="item.value == defaultValue">
          {{item.text}}
        </vue-option>
      </vue-select>
    </div>
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
    <script src="./dist/index.js"></script>
  ```

### 组件API

- select props

  | 属性     | 说明                                       | 类型     | 默认值  |
  | ------ | ---------------------------------------- | ------ | ---- |
  | option | option对象提供3个属性值：title(标题)，cancelText(【取消】按钮文案)，confirmText(【确定】按钮文案) | object | 空对象  |

- select events

  | 方法名称      | 说明            | 参数            |
  | --------- | ------------- | ------------- |
  | on-change | 点击【确定】按钮触发的方法 | 选中的下拉框的value值 |



- option props

  | 属性       | 说明               | 类型               | 默认值   |
  | -------- | ---------------- | ---------------- | ----- |
  | value    | 下拉框每一项的value值    | string \| number | 空字符   |
  | selected | 默认选中的下拉框option项  | boolean          | false |
  | text     | 下拉框每个option显示的文案 | string           | 空字符   |



### 组件开发说明

- 安装依赖

  ```
  npm/cnpm install
  ```

- 编译

  ```
  npm run build
  ```

- demo运行

  ```
  # cd test
  # npm/cnpm install
  # npm run build

  #把test目录的index.html在浏览器打开，切换到移动的端模拟器，可以预览在手机端的展示结果
  ```

  ​
