<script>
import Layout from '@layouts/main'
import axios from 'axios'

export default {
components: { Layout },
data() {
  return {
    max: 10,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: ''
     }
   }
  },
  methods: {

    onSubmit(e) {
    e.preventDefault()
    const allData = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber,
      dateOfBirth: this.user.dateOfBirth
        };
        // this.postData(allData)
        this.initForm();
    },

    onReset(e) {
    e.preventDefault();
    this.initForm();
    },

  initForm(){
    this.user.firstName = '';
    this.user.lastName = ''
    this.user.email = '';
    this.user.phoneNumber = '';
    this.user.dateOfBirth = '';
    },
  }
}
</script>

<template>
  <Layout>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="form-firstName-group"
                label="First Name:"
                label-for="form-firstName-input">
      <b-form-input id="form-firstName-input"
                    type="text"
                    v-model="user.firstName"
                    required
                    placeholder="Enter First Name">
      </b-form-input>
      </b-form-group>
      <b-form-group id="form-lastName-group"
                label="Last Name:"
                label-for="form-lastName-input">
      <b-form-input id="form-lastName-input"
                    type="text"
                    v-model="user.lastName"
                    required
                    placeholder="Enter Last Name">
      </b-form-input>
    </b-form-group>
            <b-form-group id="form-email-group"
                label="Email:"
                label-for="form-email-input">
      <b-form-input id="form-email-input"
                    type="email"
                    v-model="user.email"
                    required
                    placeholder="Enter email">
      </b-form-input>
    </b-form-group>
            <b-form-group id="form-phoneNumber-group"
                label="Phone Number:"
                label-for="form-phoneNumber-input">
      <b-form-input id="form-phoneNumber-input"
                    type="text"
                    v-model="user.phoneNumber"
                    :maxlength="max"
                    required
                    placeholder="Enter Phone Number">
      </b-form-input>
    </b-form-group>
                <b-form-group id="form-dateOfBirth-group"
                label="Date of Birth:"
                label-for="form-dateOfBirth-input">
      <b-form-input id="form-dateOfBirth-input"
                    type="date"
                    v-model="user.dateOfBirth"
                    required
                    placeholder="Enter Date Of Birth">
      </b-form-input>
    </b-form-group>
         <b-button type="submit" variant="primary">Submit</b-button>
         <b-button type="reset" variant="danger">Reset</b-button>
   </b-form>
  </Layout>
</template>
