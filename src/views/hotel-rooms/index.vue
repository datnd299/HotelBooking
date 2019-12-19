<template>
    <div>
        <h2>{{hotelName}}</h2>
        <div class="ui stackable three column grid">
      <div class="row">
        <div v-for="(item,index) in rooms" :key="index" class="column">
          <single-room :room="item"></single-room>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import HotelBooking from "@/utils/hotel-booking";
import SingleRoom from '@/views/components/single-room'
export default {
    data() {
        return {
            rooms:[{},{},{},{},{},{},{},{},{},{},{},{},{}],
            hotelId : null,
            hotelName:''
        }
    },
    components:{
        SingleRoom
    },
    computed: {
      
    },
    created() {
        this.hotelId = this.$route.params.id;
        var name = HotelBooking.Hotels(this.hotelId)[2];
        this.hotelName = (name?name:'NoName');
    },
}
</script>