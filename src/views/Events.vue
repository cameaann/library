<template>
  <transition>
    <div class="home-container">
      <div class="section">
        <div class="title">События</div>
        <hr />
        <div class="section__content">
          <div class="cards">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import eventsDb from "@/events__db.json";

export default {
  name: "Events",
  components:{
    EventCard
  },
  data(){
    return{
      events: eventsDb
    }
  }
};
</script>