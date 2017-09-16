/**
 * Created by 影浅-Seekwe on 2017-5-10 13:26:14
 */
export const userInfo = state => state.user
export const historyPrev = state => {
  const len = state.location.history.length - 2
  return (len >= 0) ? state.location.history[len] : false
}
