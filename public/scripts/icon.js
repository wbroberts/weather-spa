const setIcon = (weather) => {
  const icon = document.createElement('i')

  switch (weather) {
    case 'chanceflurries': icon.className = 'wi wi-wu-chanceflurries snow-wind'; break;
    case 'chancerain': icon.className = 'wi wi-wu-chancerain rain'; break;
    case 'chancesleet': icon.className = 'wi wi-wu-chancesleat sleet'; break;
    case 'chancesnow': icon.className = 'wi wi-wu-chancesnow snow'; break;
    case 'chancetstorms': icon.className = 'wi wi-wu-chancetstorms thunderstorm'; break;
    case 'clear': icon.className = 'wi wi-wu-clear day-sunny'; break;
    case 'cloudy': icon.className = 'wi wi-wu-cloudy day-cloudy'; break;
    case 'flurries': icon.className = 'wi wi-wu-flurries snow-wind'; break;
    case 'fog': icon.className = 'wi wi-wu-hazy day-haze'; break;
    case 'hazy': icon.className = 'wi wi-wu-hazy day-haze'; break;
    case 'mostlycloudy': icon.className = 'wi wi-wu-mostlycloudy day-cloudy'; break;
    case 'mostlysunny': icon.className = 'wi wi-wu-mostlysunny day-sunny'; break;
    case 'partlycloudy': icon.className = 'wi wi-wu-partlycloudy day-cloudy'; break;
    case 'partlysunny': icon.className = 'wi wi-wu-partlysunny day-sunny'; break;
    case 'sleet': icon.className = 'wi wi-wu-sleat sleet'; break;
    case 'rain': icon.className = 'wi wi-wu-rain showers'; break;
    case 'snow': icon.className = 'wi wi-wu-snow snow'; break;
    case 'sunny': icon.className = 'wi wi-wu-sunny day-sunny'; break;
    case 'tstorms': icon.className = 'wi wi-wu-tstorms thunderstorm'; break;
    case 'unknown': icon.className = 'wi wi-wu-unknown day-sunny'; break;
  }

  return icon;
}