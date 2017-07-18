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
    },

    getExProfile: function (){
        return axios.get("api/exProfile");
    },

   postHelpType: function(helpType){
        return axios.post("/api/helptype", {helpType});
    }

};


export default API;