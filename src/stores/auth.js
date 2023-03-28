import {defineStore} from "pinia";

export const AuthStore = defineStore('authStore' , {
    state: () => ({
        _user : null
    }),
    getters:{
        user(){
            if (! this.user){
                this.actions.getUser()
            }
        }
    },
    actions:{
      getUser(){

      }
    }
})