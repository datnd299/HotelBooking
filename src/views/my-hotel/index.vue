<template>
  <div>
    <hotel-modal @hotelCreated="onHotelCreated" v-model="hotelModalisOpen"></hotel-modal>
    <div>
      <sui-button @click.native="toggleHotelModal" icon="plus" basic primary v-if="myHotel">Add Hotel</sui-button>
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
      console.log(hotel);
      var id = HotelBooking.getHotelsNum();
        HotelBooking.createNewHotel(hotel.name,hotel.address,hotel.contact,'',{from:HotelBooking.acc,gas:3000000});
        this.hotels.push([id,'',hotel.name,hotel.address,hotel.contact]);
        
        this.toggleHotelModal();
    }
  },
  computed:{
    myHotel(){
          
          return this.$route.fullPath.includes('my-hotels');
          
      }
  },
  components: {
    SingleHotel,
    HotelModal
  },
  created() {
    var numHt = HotelBooking.getHotelsNum().toNumber();
    for (let i = 0; i < numHt; i++) {
      if(this.myHotel){
        if(HotelBooking.Hotels(i)[1]==HotelBooking.acc){
          this.hotels.push(HotelBooking.Hotels(i));
        }
      }else{
         this.hotels.push(HotelBooking.Hotels(i));
      }
     
      
    }
  
  }
};
</script>