import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  uri?:string;
  packageName?: string;

  constructor(private plataforma :Platform, private appLauncher: AppLauncher) {}
  
  
  openMaps(){
    const options:AppLauncherOptions = {
      packageName: 'com.google.android.apps.maps'
    }

    this.appLauncher.canLaunch(options).then((launched : Boolean) =>{
      if( launched ){
        this.appLauncher.launch(options).then(()=>{

        },(error) =>{
          alert(JSON.stringify(error));
        })
      }
      else{
        alert("Accion no valida")
      }
    },(error) =>{
      alert(JSON.stringify(error));
    });

    
  }

}
  

  



