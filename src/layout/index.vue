<template>
  <div>
    <div>
      <sui-menu pointing secondary>
        <div style="    font-size: 20px;
    font-weight: 700;
    margin-top: 4px;
    color: #00b894;
    padding: 5px;">
          Hotel Booking
        </div>
        <a
          is="sui-menu-item"
          v-for="(item,index) in menu"
          :active="isActive(item.path)"
          :key="item.path"
          :content="item.name"
          @click="select(item)"
          :href="item.path"
          :v-show="item.hidden!=true"
        />
      
        <sui-menu-menu position="right">
        <a
          is="sui-menu-item"
         
          :content="currentAcc"
        
        />
      </sui-menu-menu>
      </sui-menu>
    </div>
    <div class="ui container" style="padding-top:10px">
      <router-view :key="key" />
    </div>
  </div>
</template>
<script>
import Routes from '@/router'
import HotelBooking from "@/utils/hotel-booking";
export default {
  computed: {
    key() {
      return this.$route.fullPath;
    },
    routes() {
      
      
      
      return rts;
      
    },
  },
 computed: {
   currentAcc(){
    //  console.log(HotelBooking);
     
     return HotelBooking.acc;
   }
 },
  data() {
    return {
      items: ["All Hotels", "My Hotels"],
      active: "Home",
      menu:[],
    };
  },
  created() {
    var rts = this.$router.options.routes[1].children;
      rts.forEach(o=>{
        if(!o.hidden){
          this.menu.push({
          name: o.name,
          path: o.path,
        })
        }
        
      })}
      ,
  methods: {
    activedMenu(item){
      return true;
    },
    isActive(name) {
      
 
      
      
      return this.$route.path.includes(name);
    },
    select(name) {
      this.active = name;
    }
  },
  mounted() {
    this.$route.path;

    
  },
 
};
</script>