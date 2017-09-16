/**
 * Created by 影浅-Seekwe on 2017-5-10 13:25:14
 */
export default {
  state: JSON.parse(sessionStorage.getItem('user')) || {
    username: '影浅',
    author: 'seekwe@gmail.com'
  }
}
