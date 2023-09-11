import { defineStore } from "pinia";

const API_URL = "http://localhost:3000/courses";

export const userCoursesStore = defineStore("CoursesStore",{
    state:()=>({
        courses:[],
        course:{},
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
            
        },
        async fetchCourse(id){
            this.error = null;
            this.loading= true;
            try {
                this.course = await fetch(`${API_URL}/${id}`).then(res=>res.json());
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
            
        },
        async createCourse(course) {
            this.error = null;
            this.loading = true;
            try {
                await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(course),
                });
            } catch (e) {
                this.error = e;
            } finally {
                this.loading = false;
            }
        },   async updateCourse(course) {
            this.error = null;
            this.loading = true;
            try {
                await fetch(`${API_URL}/${course.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(course),
                });
            } catch (e) {
                this.error = e;
            } finally {
                this.loading = false;
            }
        },
        async deleteCourse(id) {
            this.error = null;
            this.loading = true;
            try {
                await fetch(`${API_URL}/${id}`, {
                    method: "DELETE",
                });
                await this.fetchCourses();
            } catch (e) {
                this.error = e;
            } finally {
                this.loading = false;
            }
        }
    }
})