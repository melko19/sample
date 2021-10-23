import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rate-scale',
  templateUrl: './rate-scale.component.html',
  styleUrls: ['./rate-scale.component.css']
})
export class RateScaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Array = [1,1,1,1,1];
  rate = 0;

  onClick(rate: number){
    this.rate = rate;
    console.log(rate)
  }

}
