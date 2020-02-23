import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() myTitle:string;
  @Input() myData;

  selected = "Level2"

  data = [];

  title = 'Average Temperatures of Cities';
  type = 'LineChart';

  columnNames = ['x', 'dt = 1.0000E-03', 'dt = 0.2500E-03', 'dt = 0.0625E-03', 'dt = 0.0156E-03'];

  options = {
     hAxis: {
        title: 'x'
     },
     vAxis: {
        title: 'y'
     },
  };
  width = 550;
  height = 400;

  constructor() {
  }

  onChange() {
    console.log(this.selected);
    if (this.selected === 'Level2') {
      this.data = this.myData[0];
    } else if(this.selected === 'Level3') {
      this.data = this.myData[1];
    } else if(this.selected === 'Level4') {
      this.data = this.myData[2];
    } else {
      this.data = this.myData[0];
    }
    console.log("onChange called");
  }

  ngOnInit() {
    this.data = this.myData[0];
  }

}
