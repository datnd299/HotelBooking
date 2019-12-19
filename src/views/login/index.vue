<template>
  <div class="ui container">
    <div style="border: 1px solid #7f8c8d;
    border-radius: 5px; padding: 20px;margin-top:20px">
      <sui-dropdown
        style="width:100%"
        placeholder="Account"
        selection
        :options="accLst"
        v-model="acc"
      />
      <div style="text-align:right;margin-top:10px">
          <sui-button @click="chooseAccount" color="teal" content="Choose Account" />
      </div>
    </div>
  </div>
</template>
<script>
import HotelBooking from "@/utils/hotel-booking";
export default {
  data() {
    return {
      accLst: [],
      acc: null
    };
  },
  methods: {
      chooseAccount(){
          HotelBooking.setAcc(this.acc);
          window.location.href = "/my-hotels";
          
      }
  },
  created() {
    web3.eth.accounts.forEach(o => {
      this.accLst.push({
        text: o,
        value: o
      });
    });
  }
};
</script>