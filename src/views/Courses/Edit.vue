<script>
export default {
  name: "CoursesEditView"
}
</script>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { useCoursesStore } from "../../stores/courses";
import CourseForm from "../../components/Courses/Form.vue";

const router = useRouter();
const route = useRoute();
const { updateCourse, fetchCourse } = useCoursesStore();
const { course: form, loading, error } = storeToRefs(useCoursesStore());

fetchCourse(route.params.id);

const submit = async () => {
  await updateCourse(form.value);
  if ( ! error.value) {
    await router.push({
      name: "courses",
    })
  }
}
</script>

<template>
  <div>
    <h1>Actualizar un curso</h1>
    <p v-if="loading">Procesando curso...</p>
    <p v-if="error">{{ error.message }}</p>
    <CourseForm
        text-button="Actualizar"
        :course="form"
        @submit="submit"
    />
  </div>
</template>
