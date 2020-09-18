import axios from 'axios'

let counter = 0

const fetchData = async () => {
  const res = await axios.get('http://pb-api.herokuapp.com/bars&' + ++counter)
  return res.data
}
export default fetchData
