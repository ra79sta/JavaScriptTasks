import axios from 'axios'
export default {

  methods: {
    getUsers() {
      axios
      .get('https://reqres.in/api/users')
      .then(response => (this.users_list = response.data))
      .catch(error => console.log(error))
    },
    clickPage(page) {
      axios
      .get('https://reqres.in/api/users?page='+ page)
      .then(response => (this.users_list = response.data))
      .catch(error => console.log(error))
    },
  }
}
