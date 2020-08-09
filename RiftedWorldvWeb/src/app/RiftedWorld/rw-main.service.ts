import { Injectable } from '@angular/core';
import * as rw from '../RiftedWorld/rw_core/main.js';

@Injectable({
  providedIn: 'root'
})
export class RwMainService {

  constructor( public rws: rw ) {
    this.rws.test();
  }
}
