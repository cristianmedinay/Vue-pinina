<script>

export default {
    name:"CoursesView"
}


</script>

<script setup>
import { storeToRefs } from 'pinia';
import { userCoursesStore } from '../../stores/courses';
import Curse from '../../components/Courses/Course.vue';
const store = userCoursesStore();
//cuando desustructuramos perdemos reactividad
const {courses,loading, error} = storeToRefs(store);

const {fetchCourses} = userCoursesStore();

fetchCourses();


</script>

<template>
    <h1>Cursos</h1>    
<!--     
    {{ JSON.stringify(courses) }} -->
    <p v-if="loading"> cargando los cursos de la api</p>
    <p v-if="error">{{error.message  }}</p>
    <main class="courses" v-if="courses.length">
        <div class="course" v-for="course in courses" :key="course.id">
            <Curse :course="course" />
        </div>
    </main>
    <div v-else class="empty">
        <p>No hay cursos disponibles</p>
    </div>
</template>
<style>
.courses-wrapper {
  text-align: center;
}
.courses-wrapper h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
}
.courses {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.courses .course {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: #f5f5f5 1px solid;
  margin-bottom: 1px;
}
.courses .course .summary {
  font-size: 0.75rem;
  color: slategray;
}
.courses .course .delete {
  font-size: 0.75rem;
  color: red;
  margin-top: 0.5rem;
}
.empty {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  background: red;
  color: white;
  text-align: center;
}
</style>