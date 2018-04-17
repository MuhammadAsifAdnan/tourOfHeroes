import { Component, OnInit, Input } from '@angular/core';
import { Villain } from '../villains/villain';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.css']
})
export class VillainDetailComponent implements OnInit {
  @Input() villain: Villain;
  constructor() { }

  ngOnInit() {
  }

}
