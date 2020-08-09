import { Component, OnInit } from '@angular/core';
import { RwMainService } from '../RiftedWorld/rw-main.service'
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(public rwms: RwMainService) {

  }

  ngOnInit() {
  }

}
