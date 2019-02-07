<script>
import Layout from '@layouts/main'
import axios from 'axios'


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
  components: { Layout },
   data() {
    return {
      users_list: {}
    }

 },
  mounted () {
      axios
          .get('https://reqres.in/api/users')
          .then(response => (this.users_list = response.data))
          .catch(error => console.log(error))
    }
}
</script>

<template>
  <Layout>
    <div v-if="users_list.data">
       <ul id="list">
      <li  v-for="user in users_list.data" :key="user.id">
      <img :src="user.avatar"> {{ user.first_name }} {{ user.last_name }}
  </li>
</ul>
</div>
  </Layout>
</template>



<style lang="scss" module>
@import '@design';


li>img {
  height: 40px;
  width: 40px;
  margin-top: 15px;
}

</style>
