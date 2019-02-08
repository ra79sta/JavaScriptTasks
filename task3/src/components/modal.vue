
<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import '@views/new.vue'

Vue.use(BootstrapVue);

export default {
  props:{
    listOf: {},
    thatUser: '',

  },
  data () {
    return {
      imageData: null
    }
  },
  methods: {
    previewImage (event) {
        let pics = event.target;
        if (pics.files && pics.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.imageData = e.target.result;
          }
          reader.readAsDataURL(pics.files[0]);
        }
      },

    clearName () {
      this.name = ''
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.name) {
        alert('Please enter your name')
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.names.push(this.name)
      this.clearName()
      this.$refs.modal.hide()
    }
  },
  // computed: {
  //   showNewImage: function () {
  //     return this.imageData = thatUser.avatar
  //   }
  // }

}
</script>

<template>
  <div>
    <!-- <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn> -->
    <!-- Modal Component -->
    <b-modal id="modalPrevent"
             ref="modal"
             title="Submit users data"
             @ok="handleOk"
             @shown="clearName">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input v-model="thatUser.first_name" type="text"></b-form-input>
        <b-form-input v-model="thatUser.last_name" type="text"></b-form-input>
        <img :src="thatUser.avatar"/>
        <div><input type="file" accept="image/*" @change="previewImage" ></input></div>

     <!-- <div v-if="listOf.data">
       <ul id="list">
         <li  v-for="user in listOf.data" :key="user.id">
            <img :src="user.avatar"> {{ user.first_name }} {{ user.last_name }}
        </li>
       </ul>
    </div>-->
    </form>
    </b-modal>

  </div>
</template>
