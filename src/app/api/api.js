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
        const res = await axiosInstance.post('/auth/login', obj, {
  withCredentials: true
})
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
        return res
        
    } catch (error) {
        return error
    }
}
async function editCategory(id,obj) {
        try {
        const res = await axiosInstance.put(`/category/${id}`, obj)
        return res
        
    } catch (error) {
        return error
    }
}
async function deleteeCategory(id) {
        try {
        const res = await axiosInstance.delete(`/category/${id}`)
        return res
        
    } catch (error) {
        return error
    }
}
async function verifyToken() {
        try {
        const res = await axiosInstance.get('/auth/verify-token')
        return res.data
        
    } catch (error) {
        return error
    }
}
async function createSubcat(obj) {
        try {
        const res = await axiosInstance.post('/subcategory', obj)
        return res
        
    } catch (error) {
        return error
    }
}
async function editSubcat(id,obj) {
        try {
        const res = await axiosInstance.put(`/subcategory/${id}`, obj)
        return res
        
    } catch (error) {
        return error
    }
}
async function deleteSubcat(id) {
        try {
        const res = await axiosInstance.delete(`/subcategory/${id}`)
        return res
        
    } catch (error) {
        return error
    }
}


export{
    register,
    login,
    allcategories,
    createCategory,
    verifyToken,
    deleteeCategory,
    editCategory,
    createSubcat,
    editSubcat,
    deleteSubcat
}