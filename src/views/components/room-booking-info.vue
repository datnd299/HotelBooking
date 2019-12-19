<template>
    <sui-card>
      <booking-modal :room="room" v-model="bookingModalVisible"></booking-modal>
      <sui-card-content>
        <sui-card-header>{{hotelName}}
          
        </sui-card-header>
        <sui-card-description>
           {{roomName}}
          </sui-card-description>
          <sui-card-description>
            {{timeLabel}}
          </sui-card-description>
          <sui-card-description>
            Total Price: {{totalPrice}}
          </sui-card-description>
        <sui-image src="https://www.travelingmom.com/wp-content/uploads/2018/10/Serafina-Beach-Hotel-how-to-get-a-room-at-a-sold-out-hotel-800x450.jpg"/>
      </sui-card-content>
      <sui-card-content extra>
        <span>
          <sui-button v-if="Number(room[5])==0" basic secondary>Canceled</sui-button>
        </span>
        <span slot="right">
          <sui-button v-if="Number(room[5])==1" @click="cancelBooking()" basic negative>Cancel</sui-button>
        </span>
      </sui-card-content>
    </sui-card>
</template>

<script>
import HotelBooking from "@/utils/hotel-booking";
import BookingModal from '@/views/components/booking-modal';
export default {
    methods: {
      cancelBooking(){
        HotelBooking.cancelBooking(Number(this.room[6]),{from:HotelBooking.acc,gas:3000000})
      }
    },
    computed: {
      timeLabel(){
        return (new Date(Number(this.room[2]))).toISOString().substring(0,10)+ '--'+(new Date(Number(this.room[4]))).toISOString().substring(0,10);
      },
      totalPrice(){
return Math.floor(( Number(this.room[4]) - Number(this.room[2]) ) / 86400000)*Number(this.room[3]); 
      }
    },
    data() {
      return {
        bookingModalVisible:false,
        roomName:'',
        hotelName:'',
      }
    },
    components:{
      BookingModal
    },
    created() {
      var room = HotelBooking.Rooms(Number(this.room[1]));
      this.roomName = room[4];
      var hotel = HotelBooking.Hotels(Number(room[1]));
      this.hotelName = hotel[2];
    },
    props:{
      room:Array
    }
}
</script>
<style lang="css">
    .card{
        width: 100% !important;
        
    }
    .ui.card{
        margin-top: 10px !important;
        /* margin-left: 10px;
        margin-right: 10px; */
    }
</style>