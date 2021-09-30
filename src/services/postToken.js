import axios from "axios"

const postToken = async () => {

    const postTodoContainer = async () => {
        
        var requestOptions = {
            method:'POST',
            url:'/todos',
            baseURL:'https://todos-go.herokuapp.com/api',
            // data: raw
        }
        const promise = await axios(requestOptions)
        console.log(promise)
        return promise
    }
    postTodoContainer()
    

}

  
  export default postToken