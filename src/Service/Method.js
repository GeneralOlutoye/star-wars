import axios from "axios";

export const GET = async(url) => {
    const response = await axios.get(url)
    return response.data
}