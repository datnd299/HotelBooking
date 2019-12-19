<template>
    <sui-modal v-model="value">
      <sui-modal-header>Booking: Room {{room[4]}}</sui-modal-header>
      <sui-modal-content>
        <sui-form>
          <sui-form-field>
            <label>Start</label>
            <input type="date" v-model="booking.start" placeholder="Name" />
          </sui-form-field>
          <sui-form-field>
            <label>End</label>
            <input type="date" v-model="booking.end" placeholder="Address" />
          </sui-form-field>
          <sui-form-field>
            <label>Total price: {{sumMoney}}</label>
          </sui-form-field>
          
        </sui-form>
        <sui-message
        color="red"
        v-if="error"
        header="Error"
        content="Room is busy this time"
        dismissable
        
      />
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="bookRoom">Book this room</sui-button>
      </sui-modal-actions>
    </sui-modal>
</template>
<script>
import HotelBooking from "@/utils/hotel-booking";
export default {
    props:{
        value:Boolean,
        room:Array
    },
    data() {
        return {
          error:false,
            booking:{
                start:null,
                end:null,

            }
        }
    },
    computed: {
      sumMoney(){
         return Math.floor(( Date.parse(this.booking.end) - Date.parse(this.booking.start) ) / 86400000)*Number(this.room[7]); 
      }
    },
    methods: {
        
        bookRoom(){
          try {
             HotelBooking.bookRoom(Number(this.room[0]),Date.parse(this.booking.start),Date.parse(this.booking.end),{from:HotelBooking.acc,gas:3000000});
             this.error = false;
             this.$emit('roomBooked',this.booking);
          } catch (error) {
            this.error = true;
          }
           
        }
    },
    watch:{
        value(){
            this.$emit('input',this.value)
        },
        
    }
}
</script>