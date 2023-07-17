import axios from "axios"
const baseURL=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`
export const getRestaurants =async(params) => {
    try {
        const res=await axios.get(`${baseURL}/restaurants`,{params});
        return res
    } catch (error) {
        throw new Error("Fail to fetch restaurant")
    }
};

export const getSingleRestaurant = async(id) => {
    try {
        const res=await axios.get(`${baseURL}/restaurants/${id}`)
        return res
    } catch (error) {
        throw new Error(`Fail to fetch restaurant with ID : ${id}`)
    }
};

export const postRestaurant = async(restaurantData) => {
    try {
        const res=await axios.post(`${baseURL}/restaurants`,restaurantData);
        return res;
    } catch (error) {
        throw new Error("Fail to add restaurants")
    }
};

export const deleteRestaurant = async(id) => {
    try {
        const res=await axios.delete(`${baseURL}/restaurants/${id}`);
        return res
    } catch (error) {
        throw new Error(`Fail to delete restaurant with ID:${id}`)
    }
};

export const putRestaurant = async(id,updateData) => {
    try {
        const res=await axios.put(`${baseURL}/restaurants/${id}`,updateData);
        return res
    } catch (error) {
        throw new Error(`Fail to update the restaurant with ID:${id}`)
    }
};
