<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <div class="field">
      <label for="nameFirst">First name</label>
        <input v-model="nameFirst" name="nameFirst" />
      </div>

      <div class="field">
        <label for="nameLast">last Name</label>
        <input v-model="nameLast" name="nameLast"/>
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input v-model="email" name="email" />
      </div>

      <div class="field">
        <label for="msg">Message</label>
        <input v-model="msg" name="msg" />
      </div>

      <input type="submit" />
      </form>
  </div>
</template>
<script>
// import axios from 'axios';
import airtableBase from '../utils/airtable';

export default {
  name: 'Form',
  data() {
    return {
      nameFirst: '',
      nameLast: '',
      email: '',
      msg: '',
    };
  },
  computed: {
    body() {
      const body = {
        nameFirst: this.nameFirst,
        nameLast: this.nameLast,
        email: this.email,
        msg: this.msg,
      };

      return body;
    },
  },
  methods: {
    async onSubmit() {
      const result = airtableBase('Entries').create(
        this.body,
        (err, record) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(record.getId());
        },
      );
      console.log(result);
    },
  },
};
</script>
