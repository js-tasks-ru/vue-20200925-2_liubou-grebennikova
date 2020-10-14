 import { MeetupCover } from './MeetupCover.js';
 import { MeetupDescription } from './MeetupDescription.js';
 import { MeetupAgenda } from './MeetupAgenda.js';
 import { MeetupInfo } from './MeetupInfo.js';
 import { getMeetupCoverLink } from './data.js';

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div>
      <MeetupCover :link="coverLink" :title="meetup.title"></MeetupCover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description"></MeetupDescription>
            <h3>Программа</h3>
            <MeetupAgenda :agenda="meetup.agenda"></MeetupAgenda>
          </div>
          <div class="meetup__aside">
            <MeetupInfo v-if="meetup.organizer" 
            :organizer="meetup.organizer" 
            :place="meetup.place"
            :date="meetup.date"></MeetupInfo>
          </div>
        </div>
      </div>
    </div>`,

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

   props: {
     meetup: {
       type: Object,
       required: true,
       validator: typeof value === 'object' 
     }
   },
   computed: {
     coverLink() {
       if (this.meetup.imageId) {
         return getMeetupCoverLink (this.meetup)
       }
     },
     date() {
       return new Date(this.meetup.date)
     }

   }
};
