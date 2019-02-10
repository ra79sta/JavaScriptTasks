<script>
import Layout from '@layouts/main'
import axios from 'axios'
import Modal from '@components/modal.vue'

export default {
  components: { Layout, Modal },

   data() {
    return {
      users_list: {},
      selectedUser: '',
      currentPage: 1,
    }
 },

  mounted () {
      axios.get('https://reqres.in/api/users')
           .then(response => (this.users_list = response.data))
           .catch(error => console.log(error))
    },

  methods: {
      sendInfo(user) {
      this.selectedUser = user;
    },
      clickPage(currentPage){
         axios.get('https://reqres.in/api/users?page='+ this.currentPage)
        .then(response => (this.users_list = response.data))
        .catch(error => console.log(error))
        }
  }
}
</script>

<template>
  <Layout>
    <div v-if="users_list.data">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="user in users_list.data" :key="user.id" v-b-modal.modalPrevent @click="sendInfo(user)">
                <td>{{user.id}}</td>
                <td><img :src="user.avatar"></td>
                <td>{{ user.first_name }}</td>
                <td>{{ user.last_name }}</td>
                <td>X</td>
            </tr>
        </tbody>
      </table>
    </div>
    <Modal v-bind:listOf="users_list" v-bind:thatUser="selectedUser"></Modal>
    <div>
    <b-pagination size="sm" :total-rows="users_list.total" v-model="currentPage" :per-page="users_list.per_page" @input="clickPage(currentPage)"></b-pagination>
  </div>
  </Layout>
</template>



<style lang="scss" module>
@import '@design';

table {
  border: 2px solid #6785eb;
  background-color: #fff;
}

td, th {
  border: 1px solid #6785eb;
  text-align: left;
  padding: 8px;
}

td>img {
  height: 40px;
  width: 40px;
  margin-top: 15px;
}

</style>
