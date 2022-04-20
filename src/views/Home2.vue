<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ninjaOne.age}}</p>
    <button @click="updateNinjaOne">Update ninja one</button> <br>
    <h2>Reactive</h2>
    <p>{{ninjaTwo.name}} - {{ninjaTwo.age}}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>

  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home2',
  // components: {
  //   HelloWorld
  // }

  setup(){
    const ninjaOne = ref({ name: 'Paul', age:'20'})
    const ninjaTwo = reactive({ name: 'Paul', age:'20'})

    const updateNinjaOne = () => {
      ninjaOne.value.age = 100
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 100
    }

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo }
  },


  // created(){
  //   console.log('created')
  // },

  // mounted(){
  //   console.log('mounted')
  // },
}
</script>
