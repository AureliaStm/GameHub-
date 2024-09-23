import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '87e0adba191b47a2a37b3f87ffa6ff95'
    }
})