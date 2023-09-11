<script>
export default {
    name : "CourseForm"
}

</script>

<script setup>
defineProps({

    course:{
        type:Object,
        required:true,
    },
    textButton:{
        type:String,
        default:"Crear",
    },
    
})


defineEmits(['submit']);

</script>

<template>
    <div class="course-form-wrapper"> 

 <form @submit.prevent="$emit('submit')">

      <div class="form-group">
        <label for="title">Título</label>
        <input
          id="title"
          v-model="course.title"
        />
      </div>

      <div class="form-group">
        <label for="author">Autor</label>
        <input
            id="author"
            v-model="course.author"
        />
      </div>

      <div class="form-group">
        <label for="summary">Resumen</label>
        <input
            id="summary"
            v-model="course.summary"
        />
      </div>

      <div class="form-group">
        <label for="description">Descripción</label>
        <textarea
            id="description"
            v-model="course.description"
        ></textarea>
      </div>

      <button type="submit">{{ textButton }}</button>

    </form>

    </div>


</template>


<style>
.course-form-wrapper {
  text-align: center;
}
.course-form-wrapper form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.course-form-wrapper form .form-group {
  margin: 5px;
  font-size: 1.5rem;
}
.course-form-wrapper form .form-group label {
  font-size: 1rem;
  color: slategray;
  display: block;
}
.course-form-wrapper form .form-group input {
  font-size: 1.1rem;
  color: slategray;
}
.course-form-wrapper form .form-group textarea {
  font-size: 1.1rem;
  color: slategray;
}
.course-form-wrapper form button {
  margin: 5px;
  font-size: 1.5rem;
}
</style>
