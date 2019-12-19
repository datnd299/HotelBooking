<template>
    <sui-card>
      <booking-modal @roomBooked="onRoomBooked" :room="room" v-model="bookingModalVisible"></booking-modal>
        <room-booking-list :room="room" v-model="roomBookingListVisible"></room-booking-list>
      <sui-card-content>
        <sui-card-header>{{room[4]}}
          <sui-icon class="right floated" size="small" name="like" />
          <sui-icon class="right floated" size="small" name="star" />
        </sui-card-header>
        <sui-card-description>
           Price: {{Number(room[7])}}
          </sui-card-description>
          <sui-card-description>
            
          </sui-card-description>
          <br>
        <sui-image src="https://www.travelingmom.com/wp-content/uploads/2018/10/Serafina-Beach-Hotel-how-to-get-a-room-at-a-sold-out-hotel-800x450.jpg"/>
      </sui-card-content>
      <sui-card-content extra>
        <span @click="togleModalBookingList" style="cursor:pointer">
           Booking List
        </span>
        <span slot="right">
          <sui-button @click="bookRoom()" basic positive>Book this room</sui-button>
        </span>
      </sui-card-content>
    </sui-card>
</template>

<script>
import RoomBookingList from '@/views/components/room-booking-list'
import BookingModal from '@/views/components/booking-modal';
export default {
    methods: {
      togleModalBookingList(){
        this.roomBookingListVisible =true;
      },
      bookRoom(){
        this.bookingModalVisible = true; 
      },
      onRoomBooked(){
      this.bookingModalVisible = false;
    },
    },
    data() {
      return {
        bookingModalVisible:false,
        roomBookingListVisible:false,
      }
    },
    
    components:{
      BookingModal,
      RoomBookingList
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