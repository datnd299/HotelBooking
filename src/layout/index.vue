<template>
  <div>
    <div>
      <sui-menu pointing secondary>
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
      </sui-menu>
    </div>
    <div style="padding:10px">
      <router-view :key="key" />
    </div>
  </div>
</template>
<script>
import Routes from '@/router'
export default {
  computed: {
    key() {
      return this.$route.fullPath;
    },
    routes() {
      
      
      
      return rts;
      
    },
  },
 
  data() {
    return {
      items: ["All Hotels", "My Hotels"],
      active: "Home",
      menu:[],
    };
  },
  created() {
    var rts = this.$router.options.routes[0].children;
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