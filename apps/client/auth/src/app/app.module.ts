import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [],
})
export class AppModule {}
