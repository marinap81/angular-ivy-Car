import { Component, OnInit, VERSION } from '@angular/core';
import { Car } from './models/car.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  carList: Car[] = [
    {
      name: 'Lightning McQueen',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/f/f7/Mater_%28Cars%29.png'
    },
    {
      name: 'Mater',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/f/f7/Mater_%28Cars%29.png'
    }
  ];

  // https://i.ebayimg.com/images/g/sEoAAOSwdFZcgbmk/s-l500.jpg -> flo's car image

  selectedCar: Car;
  //isShowView: boolean = false;
  //newCar: Car = { name: '', imgUrl: '' };

  ngOnInit() {
    this.selectedCar = this.carList[0];
  }

   /* showView() {
    this.isShowView = true;
  }

  hideView() {
    this.isShowView = false;
  }

  createCar() {
    // this.carList.push(this.newCar); -> original
    this.carList.push({ ...this.newCar });
  } */
}

/*
  user clicks on 'Close View' btn -> triggers the close() -> triggers the closeEvent() -> triggers the hideView()
*/
