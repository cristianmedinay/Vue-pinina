<script>
export default {
    name:"CursosCrearView"
}

</script>

<script setup>

import {reactive} from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import CourseForm from '../../components/Courses/Form.vue';
import { userCoursesStore } from '../../stores/courses';

const route = useRouter();
const store = userCoursesStore();

const {loading, error} = storeToRefs(store);
const {createCourse} = userCoursesStore();

const form = reactive({
  title: "",
  author: "",
  summary: "",
  description: "",
});

const submit = async () => {
  await createCourse(form);
  if (!error.value) {
    await route.push({
      name: "courses",
    })
  }
}
</script>

<template>

    <div>
        <h1>Crear un nuevo curso</h1>
        <p v-if="loading">Procesando curso</p>
        <p v-if="error">{{ error.message }}</p>
        <CourseForm  :course="form" @submit="submit"/>
    </div>

</template>