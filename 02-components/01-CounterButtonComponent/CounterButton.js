export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button"@click="onClick">{{count}}</button>',
  props: {
    count: {
      type: Number,
      required: false,
      default: 0,
      validator: value => typeof value === 'number',
    }
  },
  methods: {
    onClick() {
      this.$emit('increment', this.count + 1)
    }
  },
  model: {
    prop: 'count',
    event: 'increment',
  },


  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы

};
