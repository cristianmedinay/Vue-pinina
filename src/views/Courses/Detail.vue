
<script>

export default {
    name: 'CourseDetailView'
}
</script>

<script setup>

import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import {userCoursesStore} from '../../stores/courses'
import Course from '../../components/Courses/Course.vue';

const route = useRoute();
const store = userCoursesStore();
const {course,loading,error } = storeToRefs(store);

const {fetchCourse} = userCoursesStore();

fetchCourse(route.params.id)
</script>
<template>

        <div class="course-detail-wrapper">
            <h1>Detalle del curso</h1>
            <p v-if="loading">
                Cargarndo el curso..
            </p>
            <p v-if="error">
                {{ error.message }}
            </p>
            <main class="course-detail" v-if="course">
                    <Course :course="course" :is-detail="false" />
            </main>

        </div>


</template>


<style>
.course-detail-wrapper {
  text-align: center;
}
.course-detail-wrapper h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
}
.course-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.course-detail .course {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}
.course-detail .course .author {
  font-size: 1rem;
  color: slategray;
}
.course-detail .course .description {
  font-size: 1.1rem;
  color: slategray;
}
</style>
