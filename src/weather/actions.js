import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js'
import axios from 'axios';

export const fetchWeatherStarted = () => ({
type: FETCH_STARTED
});
export const fetchWeatherSuccess = (result) => ({
type: FETCH_SUCCESS,
result
})
export const fetchWeatherFailure = (error) => ({
type: FETCH_FAILURE,
error
})
export const fetchWeather = (cityCode) => {
	
  return (dispatch) => {
    //const apiUrl = `/data/cityinfo/${cityCode}.html`;
	//const apiUrl ="https://www.anapioficeandfire.com/api/houses";
    //const apiUrl ="https://reqres.in/api/users?page=1";
	//const apiUrl ="https://news-at.zhihu.com/api/4/news/latest";
	const apiUrl ="https://www.apiopen.top/satinApi?type=1&page=1";
    dispatch(fetchWeatherStarted())
	
	
	return axios.get(apiUrl)
      .then(response => {
        //dispatch(fetchPosts(response.data))
		dispatch(fetchWeatherSuccess(response.data));
		//console.log('citycode:'+JSON.stringify(response));
      }).catch(error => {
        //throw(error);
		dispatch(fetchWeatherFailure(error));
      });
	  
	
  };
}