import { axiosInstance } from "@/config/axiosIntance"


async function register(obj) {
    try {
        const res = await axiosInstance.post('/auth/register', obj)
        return res
        
    } catch (error) {
        return error
    }
}
async function login(obj) {
        try {
        const res = await axiosInstance.post('/auth/login', obj)
        return res.data
        
    } catch (error) {
        return error
    }
}
async function allcategories() {
        try {
        const res = await axiosInstance.get('/category/')
        return res.data
        
    } catch (error) {
        return error
    }
}
async function createCategory(obj) {
        try {
        const res = await axiosInstance.post('/category/', obj)
        return res.data
        
    } catch (error) {
        return error
    }
}
export{
    register,
    login,
    allcategories,
    createCategory
}