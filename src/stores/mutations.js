/**
 * Created by 影浅-Seekwe on 2017-5-10 13:20:11
 */
import * as Get from './getters'
export const UpdateHistory = (state, data) => {
  if (data === '/') {
    state.location.history = ['/']
  } else if (Get.historyPrev(state) === data) {
    state.location.history = state.location.history.splice(0, state.location.history.length - 1)
  } else {
    state.location.history.push(data)
  }
}
