import axios from 'axios' // install axios and config it when you want to use the endpoints

const limit = 10
const count = 10

export const getPosts = async (after) => {
  try {
    let url = `${process.env.VUE_APP_API_URL}?limit=${limit}&count=${count}` + (after ? `&after=${after}` : '');
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data.data
    }
    return false
  } catch (error) {
    // eslint-disable-next-line
    console.error('error', error)
    return false
  }
}
  