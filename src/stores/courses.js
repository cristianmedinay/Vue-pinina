import { defineStore } from "pinia";

const API_URL = "http://localhost:3000/courses"

export const userCoursesStore = defineStore("CoursesStore",{
    state:()=>({
        courses:[],
        courses:{},
        loading:false,
        error:null
    }),
    //peticiones HTTP
    actions:{
        async fetchCourses(){
            this.error = null;
            this.loading= true;
            try {
                this.courses = await fetch(API_URL).then(res=>res.json());
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
            
        }
    }
})