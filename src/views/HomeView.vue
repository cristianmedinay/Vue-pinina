<script setup>
import {useCounterStore} from '../stores/counter'

 const counter = useCounterStore();
 console.log(counter)
 </script>

<template>
  <main>
    <h1>Home</h1>
    <button @click="counter.increment()"> +</button>
    <span>{{ counter.count }} </span> <span>{{ counter.doubleCount }}</span>
    <button @click="counter.decrement()"> -</button>
  </main>
</template>
