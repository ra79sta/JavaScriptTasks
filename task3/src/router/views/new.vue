<script>
import Layout from '@layouts/main'
import axios from 'axios'
import Modal from '@components/modal.vue'
import index from '@src/state/modules'
import userMixin from '@src/mixins/userMixin.js'

export default {
  components: { Layout, Modal },
  mixins: [userMixin],

   data() {
    return {
      users_list: {},
      selectedUser: '',
      currentPage: 1,
      currentSortDir:'asc',
    }
 },

  methods: {
      sendInfo(user) {
      this.selectedUser = user;
    },
      deleteUser(id) {
         axios.delete('https://reqres.in/api/users/'+ id)
         .then(response =>(this.users_list.data.splice(index, 1)))//.then(() => {this.clickPage(page)})
         .catch(error => console.log(error))
      },
      sortUsers() {
          this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
          return this.users_list.data.sort((a,b) => {
          let modifier = 1;
          if(this.currentSortDir === 'desc') modifier = -1;
          if(a.first_name < b.first_name) return -1 * modifier;
          if(a.first_name > b.first_name) return 1 * modifier;
          return 0;
        });
    }
  },
   created() {
      this.getUsers();
    },
}
</script>

<template>
  <Layout>
    <router-link to="/userForm">Input New User</router-link>
    <div v-if="users_list.data">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th @click="sortUsers">First Name</th>
            <th>Last Name</th>
            <th>Edit User</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users_list.data" :key="index" >
                <td>{{user.id}}</td>
                <td><img :src="user.avatar"></td>
                <td>{{ user.first_name }}</td>
                <td>{{ user.last_name }}</td>
                <td><button v-b-modal.modalPrevent @click="sendInfo(user)">Edit User</button></td>
                <td><button @click="deleteUser(user.id)">Delete</button></td>
            </tr>
        </tbody>
      </table>
    </div>
    <Modal v-bind:listOf="users_list" v-bind:thatUser="selectedUser" v-bind:pageOf="currentPage"></Modal>
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
