import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})
export class ViewCarComponent implements OnInit {
  @Input() selectedCar: Car;
  @Output() closeEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  close() {
    this.closeEvent.emit();
  }
}
