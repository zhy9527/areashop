const state = {
    count: 2,
    msg: '0'
}

const mutations = {
    
}

const actions = {
    getGoodsList({ commit, state }){
        // console.log(Fetch)
        Fetch({
            method: 'post',
            url: 'api?service=present.items&source=wap',
            data: {
                page: 1,
                connect_id: '988b6a96b68c072c078071a51d717cbf',
                limit: 10
            }
        },function(response){
            var data = response.data.data
            // console.log(data)
        },function(error){
            console.log(error)
        })
        // axios({
        //     method: 'post',
        //     url: 'http://staging.m.fruitday.com/api?service=present.items&source=wap',
        //     data: {
        //         connect_id: '988b6a96b68c072c078071a51d717cbf',
        //         page: 1,
        //         limit: 10
        //     }
        // })
        // .then(function (response) {
        //     return Object.assign(state, response)
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }
}

export default {
    state,
    actions,
    mutations
}
