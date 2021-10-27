import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageInfoContainerComponent } from './page-info-container/page-info-container.component';
import { TimerContainerComponent } from './timer-container/timer-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PageInfoContainerComponent,
    TimerContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
