import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewCarComponent } from './components/view-car/view-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ViewCarComponent, AddCarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
