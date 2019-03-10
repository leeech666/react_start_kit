import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js'
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
	const apiUrl ="https://reqres.in/api/users?page=1";
    dispatch(fetchWeatherStarted())

    return fetch(apiUrl).then((response) => {
		 
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }

      response.json().then((responseJson) => {
		 console.log('citycode:'+JSON.stringify(responseJson));
        dispatch(fetchWeatherSuccess(responseJson));
      }).catch((error) => {
        dispatch(fetchWeatherFailure(error));
      });
    }).catch((error) => {
      dispatch(fetchWeatherFailure(error));
    })
  };
}