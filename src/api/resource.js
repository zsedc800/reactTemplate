import Axios from 'axios'
import qs from 'qs'
Axios.defaults.timeout = 5000


export const formReq = Axios.create({
  transformRequest: [
    function (data) {
      return qs.stringify(data)
    }
  ],
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

export const jsonReq = Axios.create({

})