import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './counter/contador.component';
// import { ButtonAddComponent } from './counter/button-add/button-add.component';
// import { ButtonDisComponent } from './counter/button-dis/button-dis.component';
import { ContadorModule } from './counter/counte.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
    // ButtonAddComponent,
    // ButtonDisComponent,
    
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
