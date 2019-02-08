<script>
import Layout from '@layouts/main'
import axios from 'axios'
import Modal from '@components/modal.vue'

export default {
  // page() {
  //   return {
  //     title: this.user.name,
  //     meta: [
  //       {
  //         name: 'description',
  //         content: `The user profile for ${this.user.name}.`,
  //       },
  //     ],
  //   }
  // },
  components: { Layout, Modal },
   data() {
    return {
      users_list: {},
      selectedUser: '',
    }

 },
  mounted () {
      axios
          .get('https://reqres.in/api/users')
          .then(response => (this.users_list = response.data))
          .catch(error => console.log(error))
    },
 methods: {
      sendInfo(user) {
      this.selectedUser = user;
    }
  }
}
</script>

<template>
  <Layout>
    <div v-if="users_list.data">
       <ul id="list">
         <li  v-for="user in users_list.data" :key="user.id" v-b-modal.modalPrevent @click="sendInfo(user)">
            <img :src="user.avatar"> {{ user.first_name }} {{ user.last_name }}
        </li>
      </ul>
    </div>
    <Modal v-bind:listOf="users_list" v-bind:thatUser="selectedUser"></Modal>
  </Layout>
</template>



<style lang="scss" module>
@import '@design';


li>img {
  height: 40px;
  width: 40px;
  margin-top: 15px;
}
li {
     list-style: none;
}

</style>
