
<script>
import axios from 'axios'

export default {
  props:{
    listOf: {},
    thatUser: '',
    pageOf: ''
  },
  data () {
    return {
      imageData: '',
      listOfList: this.listOf,

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
    getUsers() {
      axios
      .get('https://reqres.in/api/users?page='+ this.pageOf)
      .then(response => (this.listOfList = response.data))
      .catch(error => console.log(error))
    },
    clearName () {
      this.imageData = this.thatUser.avatar

    },
    handleOk (evt) {
        this.handleSubmit()
    },
    handleSubmit () {

      let data = {
        first_name: this.thatUser.first_name,
        last_name: this.thatUser.last_name,
      }

      // let formUpdate = new FormData();
      // formUpdate.append('file', this.imageData, this.imageData.name);
      axios.put('https://reqres.in/api/users/'+ this.thatUser.id, data)
      .then(() => {this.getUsers()})
      .catch(error => console.log(error))
       this.$refs.modal.hide()
    }
  },


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
        <img class="preview" :src="imageData || thatUser.avatar"/>
        <div><input type="file" accept="image/*" @change="previewImage" ></input></div>

    </form>
    </b-modal>
  </div>
</template>
<style>

 img.preview {
  width: 80px;
}
</style>
