const state = {
    count: 0,
    title: '首页',
    swiper: {
        options: {
            autoplay : 5000
        },
        slide: [
            {
                url: 'm.fruitday.com',
                img: 'https://imgjd2.fruitday.com/images/2017-06-26/27651c823f3a478308b744f44de29dde.jpg'
            },
            {
                url: 'm.fruitday.com',
                img: 'https://imgjd2.fruitday.com/images/2017-06-26/27651c823f3a478308b744f44de29dde.jpg'
            }
        ]
    }
}

const mutations = {
    increment(state) {
        // console.log(that.Storage.get('connect_id'))
        state.count++
    },
    decrement(state) {
        state.count--
    },
    setList(state,data1){
        state = Object.assign(state,data1)
    }
}
  
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    },
    getList({ commit, state , rootState}){
        // console.log(rootState)
        Fetch({
            method: 'post',
            url: 'api?service=present.items&source=wap',
            data: {
                page: 1,
                connect_id: '988b6a96b68c072c078071a51d717cbf',
                limit: 10
            }
        },function(response){
            var data = response.data.data;
            console.log(state)
            commit('setList', response.data)
            // return Object.assign({},state,response)
        },function(error){
            console.log(error)
        })
    }
}

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    connectId: state => Storage.get('connect_id')
}

export default {
    state,
    getters,
    actions,
    mutations
}
