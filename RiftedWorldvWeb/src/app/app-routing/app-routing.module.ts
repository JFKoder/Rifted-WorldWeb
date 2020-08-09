import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from '../start/start.component';
import { ConfigComponent } from '../config/config.component';
import { DebugComponent } from '../debug/debug.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'debug', component: DebugComponent },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
