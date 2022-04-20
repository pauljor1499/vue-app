<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    Home
    <p ref="p">My name is {{name}} and age is {{age}}</p>
    <button @click="clickMe">click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name">

    <br><br><router-link to="/">Home Page</router-link><br>
    <router-link to="/home2">Home Page</router-link><br>
    <router-link to="/home3">Home Page</router-link>

  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }

  setup(){
    const p = ref(null)

    const name = ref('mario')
    const age = ref(30)

    const clickMe = () => {
      name.value = 'Paul'
      age.value = 100
    }

    return { name, age, clickMe, p }
  },

  data(){
    return {
      score: 5
    }
  }

  // created(){
  //   console.log('created')
  // },

  // mounted(){
  //   console.log('mounted')
  // },
}
</script>
