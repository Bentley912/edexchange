import axios from "axios";

const API = {

    postProfile: function(newQuote){
    return axios.post("/api/edProfile", { newQuote });
    },

    getProfile: function (){
        return axios.get("api/profile");
    }
};


export default API;