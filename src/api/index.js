import { formReq, jsonReq } from './resource'

export default {
  enterHome: () => jsonReq.get(`/center/live-family/index`)
}
