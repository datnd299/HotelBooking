
<template>
  <sui-modal v-model="value">
    <sui-modal-header>Booking List</sui-modal-header>
    <sui-modal-content>
      <div>
        <sui-list>
          <sui-list-item v-for="(item, index) in bookingLst" :key="index"> 
            <sui-list-icon name="user" />
            <sui-list-content>
                <a v-if="Number(item[5])==0" style="color:red !important;" is="sui-list-header">{{item[0]}}</a>
              <a v-else is="sui-list-header">{{item[0]}}</a>
              <sui-list-description>{{timeLabel(item)}}</sui-list-description>
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </div>
    </sui-modal-content>
    <sui-modal-actions>
      <!-- <sui-button positive @click.native="createRoom">Create</sui-button> -->
    </sui-modal-actions>
  </sui-modal>
</template>
<script>
import HotelBooking from "@/utils/hotel-booking";
export default {
  props: {
    value: Boolean,
    room: Array
  },
    computed: {
       
    },
  data() {
    return {
      bookingLst: []
    };
  },
  methods: {
       timeLabel(item){
         
            
        return (new Date(Number(item[2]))).toISOString().substring(0,10)+ '--'+(new Date(Number(item[4]))).toISOString().substring(0,10);
      },
    fetchData() {
        this.bookingLst=[];
      var numBk = HotelBooking.getBookingsNum().toNumber();
      for (let i = 0; i < numBk; i++) {
        var bk = HotelBooking.BookingInfos(i);

        if (Number(bk[1]) ==Number(this.room[0])) {
          this.bookingLst.push(bk);
        }
      }
    }
  },
  watch: {
      value(){
            this.$emit('input',this.value);
            if(this.value){
                 this.fetchData();
            }
           
        }
  }
};
</script>