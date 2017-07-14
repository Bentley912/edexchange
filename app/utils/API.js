import axios from "axios";

const API = {

    postProfile: function(newEducator){
    return axios.post("/api/edProfile", { newEducator });
    },

    getProfile: function (){
        return axios.get("api/profile");
    },

    postRequest: function(edRequest){
        return axios.post("api/edRequest", {edRequest});
    },

    postExpertProfile: function(newExpert){
        return axios.post("/api/expert", {newExpert});
    }

};


export default API;