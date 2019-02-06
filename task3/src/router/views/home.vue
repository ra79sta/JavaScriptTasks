<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import axios from 'axios';

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  
  mounted () {
      axios
          .get('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => (console.log(response.data)))
          .catch(error => console.log(error))
    }
}
</script>

<template>
  <Layout>
    <h1>Home Page</h1>
    <img src="@assets/images/logo.png" alt="Logo" />
  </Layout>
</template>
