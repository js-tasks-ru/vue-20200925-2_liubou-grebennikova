import Vue from './vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события

const app = new Vue({
    el: '#app',
    data: {
      btnText: 0
    },
    methods: {
        increaseByOne () {
          return this.btnText ++
      }
    }
  })