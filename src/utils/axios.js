import axios from "axios";

export const APiUrl =axios.create({
    baseURL:'http://localhost/restaurant/public/api/'    
}) 
