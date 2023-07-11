import axios from "axios";

const loggerMiddleware =  (store) => (next) => async (action) => {
  console.log("action", action);
  try {
    //const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //console.log(response)
    //action.payload = response.data
  } catch (error) {
    console.log(error)
  }
  next(action);
};

export default loggerMiddleware;