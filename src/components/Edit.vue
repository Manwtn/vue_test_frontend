<template lang="">
    <div>
        <h1 class="text">Edit Students</h1>
    </div>

        <div class="form-control mb-2">
            <label class="input-group">
                <span>Name</span>
                <input type="text" class="input input-bordered mx-2" v-model="user.name" />
            </label>
        </div>
        
        <div class="form-control mb-2">
            <label class="input-group">
                <span>Address</span>
                <input type="text" class="input input-bordered mx-2" v-model="user.address" />
            </label>
        </div>

        <div class="form-control mb-2">
            <label class="input-group">
                <span>Score</span>
                <input type="text" class="input input-bordered mx-2" v-model="user.score" />
            </label>
        </div>
        
        <div class="col-12">
            <button class="btn btn-success me-md-2" type="submit" @click="edit_user()">Submit Edit</button>
            <a class="btn btn-danger" href="/" role="button">Back to Home</a>
        </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import router from '@/router';

const route = useRoute()


const user = ref({
    name : '',
    address : '',
    score : 0
})

const fetch_single_user = async () => {
    await axios.get(`${import.meta.env.VITE_API}/users/${route.params.id}`)
    .then((response) => {
        user.value.name = response.data.data[0].name
        user.value.address = response.data.data[0].address
        user.value.score = response.data.data[0].score
    }).catch((err) => {
        console.log(err)
    })
}

onMounted(() => fetch_single_user())

const edit_user = async () => {
    await axios.put(`${import.meta.env.VITE_API}/users/${route.params.id}`, {
        "name" : user.value.name,
        "address" : user.value.address,
        "score" : user.value.score
    }).then((response) => {
        console.log(response)
        router.push('/')
    }).catch((err) => {
        console.log(err)
    })
}
</script>

<style lang="">
    
</style>