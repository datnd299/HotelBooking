<template>
    <sui-modal v-model="value">
      <sui-modal-header>Add new Hotel</sui-modal-header>
      <sui-modal-content>
        <sui-form>
          <sui-form-field>
            <label>Name</label>
            <input v-model="hotel.name" placeholder="Name" />
          </sui-form-field>
          <sui-form-field>
            <label>Address</label>
            <input v-model="hotel.address" placeholder="Address" />
          </sui-form-field>
          <sui-form-field>
            <label>Contact</label>
            <input v-model="hotel.contact" placeholder="Contact" />
          </sui-form-field>
          <sui-form-field>
            <label>Address</label>
            <input placeholder="Address" />
          </sui-form-field>
          
        </sui-form>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="createHotel">Create</sui-button>
      </sui-modal-actions>
    </sui-modal>
</template>
<script>
export default {
    props:{
        value:Boolean
    },
    data() {
        return {
            hotel:{
                name:'',
                address:'',
                contact:'',

            }
        }
    },
    methods: {
        createHotel(){
            this.$emit('hotelCreated',this.hotel);
        }
    },
    watch:{
        value(){
            this.$emit('input',this.value)
        }
    }
}
</script>