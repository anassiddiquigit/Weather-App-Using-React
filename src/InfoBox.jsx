import Card from '@mui/material/Card';
import "./InfoBox.css";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://media.istockphoto.com/id/1198646459/photo/over-the-shoulder-image-of-a-woman-drinking-tea-at-home-in-cold-and-wet-weather.jpg?s=2048x2048&w=is&k=20&c=j0nw78MPa6XwP8nfynO1LGz3dBruBR40tPuN1UN2xqI=";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";


   
    return(
        <div className="InfoBox">
           
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={(info.humidity>80?RAIN_URL:(info.temp>15?HOT_URL:COLD_URL))}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {(info.humidity>80?<ThunderstormIcon/>:(info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>))}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min temp ={info.tempMin}&deg;C</p>
         <p>Max temp ={info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}