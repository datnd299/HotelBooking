<template>
  <div>
    <div class="ui stackable three column grid">
      <div class="row">
        <div v-for="(item,index) in bookingLst" :key="index" class="column">
          <room-booking-info :room="item"></room-booking-info>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HotelBooking from "@/utils/hotel-booking";
import RoomBookingInfo from "@/views/components/room-booking-info";
export default {
  data() {
    return {
      bookingLst: []
    };
  },
  components: {
    RoomBookingInfo
  },
  computed: {},
  created() {
    var numBk = HotelBooking.getBookingsNum().toNumber();
    for (let i = 0; i < numBk; i++) {
      var bk = HotelBooking.BookingInfos(i);

      if (bk[0] == HotelBooking.acc) {
        this.bookingLst.push(bk);
      }
    }
  }
};
</script>