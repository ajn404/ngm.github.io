import axios from 'axios'

//请求图片列表
const serviceForPisc = axios.create({
        baseURL: 'https://91.usst.edu.cn',
        timeout: 50000,
    }
)

serviceForPisc.interceptors.response.use(
    response=>{
            return response.data
    }
)

export const getXuanjianghui = ()=>{
        return serviceForPisc({
                url:'/API/Meet/GetCampusRecruList',
                method:'Get'
        })
}
