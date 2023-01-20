import {$host} from "./index";


export const fetchUsers = async (count, page) => {
    const {data} = await $host.get(`users?page=${page}&count=${count}`)
    return data
}


// export const fetchSmells = async () => {
//     const {data} = await $host.get('api/smell')
//     return data
// }


// export const fetchItems = async (typeId, page, limit) => {
//     const {data} = await $host.get('api/item', {params: {
//             typeId, page, limit}})            
//     console.log("🚀 ~ file: itemAPI.js ~ line 53 ~ fetchItems ~ data", data)
//     return data
// }
    

// export const fetchOneItem = async (id) => {
//     const {data} = await $host.get('api/item/' + id)
//     return data
// }
