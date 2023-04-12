const API_KEY = '6a3dc6255cfe840714e77239d812c0f6'
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async(infoType,searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType)
    url.search = new URLSearchParams({...searchParams,appid:API_KEY})

    return await fetch(url).then((res)=>res.json());
}

export default getWeatherData;