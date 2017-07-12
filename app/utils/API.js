import axios from "axios";

const API = {

    postProfile: function(newEducator){
    return axios.post("/api/edProfile", { newEducator });
    },

    getProfile: function (){
        return axios.get("api/profile");
    }

};


export default API;