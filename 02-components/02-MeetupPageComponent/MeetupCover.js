export const MeetupCover = {
  template: `<div class="meetup-cover" style="--bg-url: url('https://course-vue.javascript.ru/api/images/2')">
        <h1 class="meetup-cover__title">{{title}}</h1>
    </div>`,

  // props
  props: {
    link: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    }
  }
};
