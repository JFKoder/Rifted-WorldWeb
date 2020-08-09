import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { StartComponent } from './start/start.component';
import { ConfigComponent } from './config/config.component';
import { DebugComponent } from './debug/debug.component';
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ConfigComponent,
    DebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
