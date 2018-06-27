const setIcon = (weather) => {
  let icon;

  switch (weather) {
    case 'chanceflurries': icon = 'wi wi-wu-chanceflurries snow-wind'; break;
    case 'chancerain': icon = 'wi wi-wu-chancerain rain'; break;
    case 'chancesleet': icon = 'wi wi-wu-chancesleat sleet'; break;
    case 'chancesnow': icon = 'wi wi-wu-chancesnow snow'; break;
    case 'chancetstorms': icon = 'wi wi-wu-chancetstorms thunderstorm'; break;
    case 'clear': icon = 'wi wi-wu-clear day-sunny'; break;
    case 'cloudy': icon = 'wi wi-wu-cloudy day-cloudy'; break;
    case 'flurries': icon = 'wi wi-wu-flurries snow-wind'; break;
    case 'fog': icon = 'wi wi-wu-hazy day-haze'; break;
    case 'hazy': icon = 'wi wi-wu-hazy day-haze'; break;
    case 'mostlycloudy': icon = 'wi wi-wu-mostlycloudy day-cloudy'; break;
    case 'mostlysunny': icon = 'wi wi-wu-mostlysunny day-sunny'; break;
    case 'partlycloudy': icon = 'wi wi-wu-partlycloudy day-cloudy'; break;
    case 'partlysunny': icon = 'wi wi-wu-partlysunny day-sunny'; break;
    case 'sleet': icon = 'wi wi-wu-sleat sleet'; break;
    case 'rain': icon = 'wi wi-wu-rain showers'; break;
    case 'snow': icon = 'wi wi-wu-snow snow'; break;
    case 'sunny': icon = 'wi wi-wu-sunny day-sunny'; break;
    case 'tstorms': icon = 'wi wi-wu-tstorms thunderstorm'; break;
    case 'unknown': icon = 'wi wi-wu-unknown day-sunny'; break;
  }

  return icon;
}