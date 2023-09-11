<script>
export default {
    name:"Course"
}
</script>

<script setup>
    defineProps({
        course:{
            type:Object,
            required:true
        },
        isDetail:{
            type:Boolean,
            default:false
        }
    })


defineEmits(['delete']);

</script>

<template>
    <div class="course">
        <router-link v-if="!isDetail" :to="`/course/${course.id}`">
            {{ course.title }} {{ course.author }}
        </router-link>
        
        <div v-else>
            {{ course.title }} {{ course.author }}
        </div>

        <p v-if="isDetail" class="sumary">
            {{ course.summary }}
        </p>

        <p v-else class="description">
            {{ course.description }}
        </p>

        <router-link :to="`/course/${course.id}/edit`">
            Editar Curso
        </router-link>

        <button v-if="!isDetail" class="delete" @click="$emit('delete',course.id)">
            Eliminar curso
        </button>
    </div>
</template>

