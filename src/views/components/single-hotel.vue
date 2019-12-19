<template>
   
        <div class="ui cards">
            <div class="card">
              <div class="content">
                <img class="right floated mini ui image" src="/hotel.png" />
                <div class="header">{{hotel[2]?hotel[2]:'NoName'}}</div>
                <div class="meta">{{hotel[3]?hotel[3]:'NoAddress'}}</div>
                <div class="description">{{hotel[4]?hotel[4]:'NoContact'}}</div>
              </div>
              <div class="extra content">
                <div class="ui two buttons">
                  <!-- <div class="ui basic green button">Approve</div> -->
                  <router-link v-if="myHotel" :to="'/my-hotels/'+hotel[0]+'/rooms'" style="width:100%"> <div style="width:100%" class="ui basic teal button">Rooms</div></router-link>
                  <router-link v-else :to="'/all-hotels/'+hotel[0]+'/rooms'" style="width:100%"> <div style="width:100%" class="ui basic teal button">Rooms</div></router-link>
                 
                </div>
              </div>
            </div>
          </div>
    
</template>
<script>
export default {
    props:{
        hotel:Array
    },
    computed: {
      myHotel(){
          console.log(this.$route.fullPath);
          return this.$route.fullPath.includes('my-hotels');
          
      }
    },
}
</script>
<style lang="css">
    .card{
        width: 100% !important;
        
    }
    .ui.cards{
        margin-top: 10px;
        /* margin-left: 10px;
        margin-right: 10px; */
    }
</style>