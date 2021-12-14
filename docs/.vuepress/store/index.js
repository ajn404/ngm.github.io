import {createStore} from 'vuex'


//一个简单的示例
const store = createStore(
    {
        state(){
            return{
                count:0
            }
        },
        mutations:{
            increment(state){
                state.count++
            },
            clearCount(state){
                state.count = 0
            }
        }
    }
)

export default store
