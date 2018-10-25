import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgXCSClockFaceComponent } from './ngx-cs-clock-face/ngx-cs-clock-face.component';
import { NgxCircularSliderComponent } from './ngx-cs-slider/ngx-cs-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NgXCSClockFaceComponent,
    NgxCircularSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
