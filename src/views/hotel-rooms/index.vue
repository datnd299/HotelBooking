<template>
    <div>
        <room-modal @roomCreated='onRoomCreated' v-model="roomModalVisible"></room-modal>
      
        <h2>{{hotelName}}</h2>
        <sui-button v-if="myHotel" icon="plus" basic primary @click="toggleRoomModal">Add Room</sui-button>
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
import RoomModal from '@/views/components/room-modal'
import RoomBookingList from '@/views/components/room-booking-list'
export default {
    data() {
        return {
            rooms:[],
            hotelId : null,
            hotelName:'',
            
            roomModalVisible:false,
            roomBookingListVisible:false
        }
    },
    components:{
        SingleRoom,
        RoomModal,
        RoomBookingList
    },
    computed: {
      myHotel(){
       
          return this.$route.fullPath.includes('my-hotels');
          
      }
    },
    
    created() {
        this.hotelId = this.$route.params.id;
        var name = HotelBooking.Hotels(this.hotelId)[2];
        this.hotelName = (name?name:'NoName');


        var allRoomNum = HotelBooking.getRoomsNum();
        for (let i = 0; i < allRoomNum; i++) {
            var room = HotelBooking.Rooms(i);
            if(room[1].toNumber()==this.hotelId){
                this.rooms.push(room);
            }
            
        }
    },
    methods: {
        onRoomCreated(room){
            console.log(room);
            var id = HotelBooking.getRoomsNum();
            HotelBooking.createRoom(Number(this.hotelId),room.name,'','',Number(room.price),0,{from:HotelBooking.acc,gas:3000000});
            this.rooms.push([id,Number(this.hotelId),1,1,room.name,'','',room.price,0]);

            this.toggleRoomModal();
        },

        toggleRoomModal(){
            this.roomModalVisible = !this.roomModalVisible;
        }
    },
}
</script>