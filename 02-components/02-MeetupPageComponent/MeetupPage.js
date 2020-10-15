import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<div>
  <MeetupView v-if="meetup" :meetup="meetup"></MeetupView>
  </div>`,

  components: {
    MeetupView
  },

  data() {
    return {
      meetup: null
    }
  },

  mounted() {
    this.getMeetup()  
  },

  methods: {    
    async getMeetup() {
      const meetup = await fetchMeetup(MEETUP_ID);
        this.meetup = meetup; 
    }
  }
};
