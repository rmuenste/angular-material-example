import { Component, OnInit } from '@angular/core';
import { bubbleData, bubbleDataL2, bubbleDataL3, bubbleDataL4 } from '../graph-data';

@Component({
  selector: 'app-graph-route-page',
  templateUrl: './graph-route-page.component.html',
  styleUrls: ['./graph-route-page.component.css']
})
export class GraphRoutePageComponent implements OnInit {
  bubbleDataArray = [ bubbleDataL2, bubbleDataL3, bubbleDataL4 ];

  constructor() {

  }

  ngOnInit() {
  }

}
