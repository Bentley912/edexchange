import axios from "axios";

const API = {

    postProfile: function(newQuote){
    return axios.post("/api/edProfile", { newQuote });
    }
};


export default API;