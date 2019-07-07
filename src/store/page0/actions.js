import axios from 'axios'

const getBlogs = function(offset, limit) {
    return async dispatch => {
        console.log("loading..................")
        const res = await axios.get('/blog', {
            params: {
                offset,
                limit
            }
        })
        console.log(res.data)
        console.log("loaded !!!!!!!!!!!!!!!!!!")
    }
}

export {
    getBlogs
}