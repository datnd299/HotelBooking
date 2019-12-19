<template>
  <div>
    <hotel-modal @hotelCreated="onHotelCreated" v-model="hotelModalisOpen"></hotel-modal>
    <div>
      <sui-button @click.native="toggleHotelModal" icon="plus" basic primary>Add Hotel</sui-button>
    </div>
    <div class="ui stackable three column grid">
      <div class="row">
        <div v-for="(item,index) in hotels" :key="index" class="column">
          <single-hotel :hotel="item"></single-hotel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HotelBooking from "@/utils/hotel-booking";
import SingleHotel from "@/views/components/single-hotel";
import HotelModal from "@/views/components/hotel-modal";
export default {
  data() {
    return {
      hotels: [],
      hotelModalisOpen: false
    };
  },
  methods: {
    toggleHotelModal() {
      this.hotelModalisOpen = !this.hotelModalisOpen;
    },
    onHotelCreated(hotel){
 
        
        this.hotels.push(hotel);
        HotelBooking.createNewHotel(hotel.name,hotel.address,hotel.contact,'',{from:HotelBooking.acc,gas:300000});
        this.toggleHotelModal();
        
    }
  },
  components: {
    SingleHotel,
    HotelModal
  },
  created() {
    var i = 0;
    while (true) {
      try {
        var hotel = HotelBooking.Hotels(i);
        this.hotels.push(hotel);
        i++;
      } catch (error) {
        break;
      }
    }
  }
};
</script>