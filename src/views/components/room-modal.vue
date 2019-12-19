<template>
    <sui-modal v-model="value">
      <sui-modal-header>Add new Room</sui-modal-header>
      <sui-modal-content>
        <sui-form>
          <sui-form-field>
            <label>Name</label>
            <input v-model="room.name" placeholder="Name" />
          </sui-form-field>
          <sui-form-field>
            <label>Price</label>
            <input v-model="room.price" placeholder="Address" />
          </sui-form-field>
          
          
        </sui-form>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="createRoom">Create</sui-button>
      </sui-modal-actions>
    </sui-modal>
</template>
<script>
export default {
    props:{
        value:Boolean,
        hotel:Array
    },
    data() {
        return {
            room:{
                name:'',
                price:'',

            }
        }
    },
    methods: {
        createRoom(){
            this.$emit('roomCreated',this.room);
        }
    },
    watch:{
        value(){
            this.$emit('input',this.value)
        }
    }
}
</script>