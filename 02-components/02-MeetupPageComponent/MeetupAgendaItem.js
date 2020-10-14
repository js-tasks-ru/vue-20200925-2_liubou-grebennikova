  
import {agendaItemTitles, agendaItemIcons} from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="agendaItem.type ? \`/assets/icons/icon-\${agendaIcon}.svg\` : '' " />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ agendaItem.title || agendaTitle }}</h5>
        <p>
            <span>{{agendaItem.speaker}}</span>
            <span class="meetup-agenda__dot"></span>
            <span class="meetup-agenda__lang">{{agendaItem.language}}</span>
        </p>
        <p>{{agendaItem.description}}</p>
      </div>
    </div>`,
  props: {
    agendaItem: {
      type: Object,
      required: true
    }     
  },
  computed: {
    agendaTitle() {
      return agendaItemTitles[this.agendaItem.type];
    },
    agendaIcon() {
      return agendaItemIcons[this.agendaItem.type];
    }
  }
};
