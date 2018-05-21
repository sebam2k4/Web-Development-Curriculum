import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider} from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location:{
    city:string,
    state:string
  }

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider, private storage:Storage) {
    // store location in Ionic Storage (Similar to local storage except it's asynchronous)

  }

  // similar on ng-oninit
  ionViewWillEnter() {
    // get from storage (async - returns a promise)
    // Storage values are saved as string
    this.storage.get('location').then((val) => {
      if (val != null) {
        // parse location values as JSON so can access as an object
        this.location = JSON.parse(val);
      } else {
        // set default when no location set
        this.location = {
          city: 'Chicago',
          state: 'IL'
        }
      }

      this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather => {
        // weather is the API response
        console.log(weather);
        this.weather = weather.current_observation;
      });

    });

    

    
  }

}
