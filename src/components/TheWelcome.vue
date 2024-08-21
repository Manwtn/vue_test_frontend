<template>
  <div>
    <h1 class="text">Students Details</h1>
  </div>
  
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <a class="btn btn-success mb-2" href="/addstudent" role="button">Add Student</a>
  </div>

  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Score</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(users, index) in users">
        <th>{{ index+1 }}</th>
        <td>{{ users.name }}</td>
        <td>{{ users.address }}</td>
        <td>{{ users.score }}</td>
        <td>
          <router-link :to="`/editstudent/${users.id}`">
            <button type="button" class="btn btn-secondary mx-2">Edit</button>
          </router-link>
          <button type="button" class="btn btn-danger" @click="delete_users(users.id)">Delete</button>
        </td>
      </tr>
      
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref({})

const fetch_users = async () => {
  await axios.get(`${import.meta.env.VITE_API}/users`)
  .then((response) => {
    users.value = response.data.data
    console.log(users.value)
  }).catch((err) => {
    console.log(err)
  })
}

const delete_users = async (id) => {
  await axios.delete(`${import.meta.env.VITE_API}/users/${id}`)
  .then((response) => {
    console.log(response)
    fetch_users()
  }).catch((err) => {
    console.log(err)
  })
}

onMounted(() => fetch_users())

</script>

