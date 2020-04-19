import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        car: [
            {id: 1, count: 2, selected: false, title: '小米手机', price: 30}
        ]
    },
    mutations: {
        addGoodsToCart(state,{id,num}) {
            let isExist = false
            for (const goods of state.car) {
                if (goods.id === id) {
                    goods.count += 1
                    isExist = true
                }
            }

            if (!isExist) {
                state.car.push({
                    id,
                    count: num,
                    selected: true,
                    title: '默认title',
                    price: 30
                })
            }
        },
        updateSelectedStatus(state, {goodsId, status}) {
            for (const goods of state.car) {
                if (goods.id === goodsId) {
                    goods.selected = status
                }
            }
        },
        updateGoodsCount(state,{goodsId, count}){
            for (const goods of state.car) {
                if (goods.id === goodsId) {
                    goods.count = count
                }
            }
        }
    },
    getters: {
        getAllCount(state) {
            return state.car.length
        },
        goodsCount(state) {
            let amountAccount = ''
            for (const goods of state.car) {
                if (goods.selected) {
                    amountAccount +=  goods.count * goods.price
                }
            }

            return amountAccount
        },
        amountSelectedAccount(state){
            let amountSelected =0
            for (const goods of state.car) {
                if (goods.selected) {
                    amountSelected +=  1
                }
            }
            return amountSelected

        }

    }
})

export default store 