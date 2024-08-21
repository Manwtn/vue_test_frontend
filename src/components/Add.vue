<template lang="">
    <div>
        <h1 class="text">Add Students</h1>
    </div>

    <div class="form-control mb-2">
            <label class="input-group">
                <span>Name</span>
                <input type="text" class="input input-bordered mx-2" v-model="add.name" />
            </label>
        </div>
        
        <div class="form-control mb-2">
            <label class="input-group">
                <span>Address</span>
                <input type="text" class="input input-bordered mx-2" v-model="add.address" />
            </label>
        </div>

        <div class="form-control mb-2">
            <label class="input-group">
                <span>Score</span>
                <input type="text" class="input input-bordered mx-2" v-model="add.score" />
            </label>
        </div>
        
        <div class="col-12">
            <button class="btn btn-success me-md-2" type="submit" @click="insert_user()">Submit form</button>
            <a class="btn btn-danger" href="/" role="button">Back to Home</a>
        </div>
    
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router';

const add = ref({
    name : '',
    address : '',
    score : 0
})


const insert_user = async () => {
    await axios.post(`${import.meta.env.VITE_API}/users`, {
        "name" : add.value.name,
        "address" : add.value.address,
        "score" : add.value.score
    })
    .then((response) =>{
        console.log(response)
        router.push('/')
    }).catch((err) => {
        console.log(err)
    })
}

</script>
<style lang="">
    
</style>