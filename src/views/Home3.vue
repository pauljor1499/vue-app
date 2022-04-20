<template>
  <div class="home">
    <h1>Home3</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <button @click="stopWatches">Stop Watching</button>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";

export default {
  name: "Home3",

  setup() {
    const search = ref("");
    const names = ref(["ysh", "mark", "paul", "carl", "marvin", "arnold"]);

    // const stopWatch = watch(search, () => {
    //   console.log("Watch!");
    // });

    // const stopWatchEffect = watchEffect(() => {
    //   console.log("Watch effect!");
    // });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    // const stopWatches = () => {
    //   stopWatch();
    //   stopWatchEffect();
    // };

    return { search, names, matchingNames };
  },
};
</script>
