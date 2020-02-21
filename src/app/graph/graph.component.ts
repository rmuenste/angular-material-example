import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  selected = "Level2"

  data = [
    [ 1.000000E-03, 1.000003E+00, 1.000003E+00, 1.000003E+00, 1.000003E+00],
    [ 1.010000E-01, 9.999997E-01, 1.000003E+00, 1.000003E+00, 1.000004E+00],
    [ 2.010000E-01, 9.999737E-01, 9.999941E-01, 9.999992E-01, 1.000001E+00],
    [ 3.010000E-01, 9.998566E-01, 9.999157E-01, 9.999304E-01, 9.999345E-01],
    [ 4.010000E-01, 9.993843E-01, 9.995019E-01, 9.995319E-01, 9.995395E-01],
    [ 5.010000E-01, 9.980088E-01, 9.981975E-01, 9.982447E-01, 9.982574E-01],
    [ 6.010000E-01, 9.951433E-01, 9.954031E-01, 9.954682E-01, 9.954859E-01],
    [ 7.010000E-01, 9.906517E-01, 9.909757E-01, 9.910572E-01, 9.910787E-01],
    [ 8.010000E-01, 9.850278E-01, 9.854125E-01, 9.855089E-01, 9.855351E-01],
    [ 9.010000E-01, 9.790875E-01, 9.795354E-01, 9.796478E-01, 9.796791E-01],
    [ 1.001000E+00, 9.735572E-01, 9.740788E-01, 9.742098E-01, 9.742484E-01],
    [ 1.101000E+00, 9.688805E-01, 9.694871E-01, 9.696398E-01, 9.696925E-01],
    [ 1.201000E+00, 9.652136E-01, 9.659163E-01, 9.660941E-01, 9.661625E-01],
    [ 1.301000E+00, 9.625105E-01, 9.633189E-01, 9.635236E-01, 9.636276E-01],
    [ 1.401000E+00, 9.606203E-01, 9.615405E-01, 9.617736E-01, 9.619281E-01],
    [ 1.501000E+00, 9.593582E-01, 9.603938E-01, 9.606570E-01, 9.608657E-01],
    [ 1.601000E+00, 9.585517E-01, 9.597052E-01, 9.599980E-01, 9.602595E-01],
    [ 1.701000E+00, 9.580578E-01, 9.593305E-01, 9.596545E-01, 9.599642E-01],
    [ 1.801000E+00, 9.577709E-01, 9.591637E-01, 9.595181E-01, 9.598722E-01],
    [ 1.901000E+00, 9.576125E-01, 9.591276E-01, 9.595134E-01, 9.599079E-01],
    [ 2.001000E+00, 9.575303E-01, 9.591684E-01, 9.595856E-01, 9.600219E-01],
    [ 2.101000E+00, 9.574864E-01, 9.592481E-01, 9.596972E-01, 9.601759E-01],
    [ 2.201000E+00, 9.574533E-01, 9.593399E-01, 9.598211E-01, 9.603426E-01],
    [ 2.301000E+00, 9.574122E-01, 9.594238E-01, 9.599374E-01, 9.605009E-01],
    [ 2.401000E+00, 9.573496E-01, 9.594862E-01, 9.600318E-01, 9.606372E-01],
    [ 2.501000E+00, 9.572568E-01, 9.595176E-01, 9.600952E-01, 9.607420E-01],
    [ 2.601000E+00, 9.571298E-01, 9.595134E-01, 9.601224E-01, 9.608111E-01],
    [ 2.701000E+00, 9.569670E-01, 9.594726E-01, 9.601130E-01, 9.608431E-01],
    [ 2.801000E+00, 9.567679E-01, 9.593938E-01, 9.600651E-01, 9.608365E-01],
    [ 2.901000E+00, 9.565307E-01, 9.592752E-01, 9.599778E-01, 9.607900E-01],
    [ 3.001000E+00, 9.562475E-01, 9.591094E-01, 9.598417E-01, 9.606950E-01],
  ];

  dataL2 = [
    [ 1.000000E-03, 1.000003E+00, 1.000003E+00, 1.000003E+00, 1.000003E+00],
    [ 1.010000E-01, 9.999997E-01, 1.000003E+00, 1.000003E+00, 1.000004E+00],
    [ 2.010000E-01, 9.999737E-01, 9.999941E-01, 9.999992E-01, 1.000001E+00],
    [ 3.010000E-01, 9.998566E-01, 9.999157E-01, 9.999304E-01, 9.999345E-01],
    [ 4.010000E-01, 9.993843E-01, 9.995019E-01, 9.995319E-01, 9.995395E-01],
    [ 5.010000E-01, 9.980088E-01, 9.981975E-01, 9.982447E-01, 9.982574E-01],
    [ 6.010000E-01, 9.951433E-01, 9.954031E-01, 9.954682E-01, 9.954859E-01],
    [ 7.010000E-01, 9.906517E-01, 9.909757E-01, 9.910572E-01, 9.910787E-01],
    [ 8.010000E-01, 9.850278E-01, 9.854125E-01, 9.855089E-01, 9.855351E-01],
    [ 9.010000E-01, 9.790875E-01, 9.795354E-01, 9.796478E-01, 9.796791E-01],
    [ 1.001000E+00, 9.735572E-01, 9.740788E-01, 9.742098E-01, 9.742484E-01],
    [ 1.101000E+00, 9.688805E-01, 9.694871E-01, 9.696398E-01, 9.696925E-01],
    [ 1.201000E+00, 9.652136E-01, 9.659163E-01, 9.660941E-01, 9.661625E-01],
    [ 1.301000E+00, 9.625105E-01, 9.633189E-01, 9.635236E-01, 9.636276E-01],
    [ 1.401000E+00, 9.606203E-01, 9.615405E-01, 9.617736E-01, 9.619281E-01],
    [ 1.501000E+00, 9.593582E-01, 9.603938E-01, 9.606570E-01, 9.608657E-01],
    [ 1.601000E+00, 9.585517E-01, 9.597052E-01, 9.599980E-01, 9.602595E-01],
    [ 1.701000E+00, 9.580578E-01, 9.593305E-01, 9.596545E-01, 9.599642E-01],
    [ 1.801000E+00, 9.577709E-01, 9.591637E-01, 9.595181E-01, 9.598722E-01],
    [ 1.901000E+00, 9.576125E-01, 9.591276E-01, 9.595134E-01, 9.599079E-01],
    [ 2.001000E+00, 9.575303E-01, 9.591684E-01, 9.595856E-01, 9.600219E-01],
    [ 2.101000E+00, 9.574864E-01, 9.592481E-01, 9.596972E-01, 9.601759E-01],
    [ 2.201000E+00, 9.574533E-01, 9.593399E-01, 9.598211E-01, 9.603426E-01],
    [ 2.301000E+00, 9.574122E-01, 9.594238E-01, 9.599374E-01, 9.605009E-01],
    [ 2.401000E+00, 9.573496E-01, 9.594862E-01, 9.600318E-01, 9.606372E-01],
    [ 2.501000E+00, 9.572568E-01, 9.595176E-01, 9.600952E-01, 9.607420E-01],
    [ 2.601000E+00, 9.571298E-01, 9.595134E-01, 9.601224E-01, 9.608111E-01],
    [ 2.701000E+00, 9.569670E-01, 9.594726E-01, 9.601130E-01, 9.608431E-01],
    [ 2.801000E+00, 9.567679E-01, 9.593938E-01, 9.600651E-01, 9.608365E-01],
    [ 2.901000E+00, 9.565307E-01, 9.592752E-01, 9.599778E-01, 9.607900E-01],
    [ 3.001000E+00, 9.562475E-01, 9.591094E-01, 9.598417E-01, 9.606950E-01],
  ];

  dataL3 = [
    [1.000000E-03, 1.000000E+00, 1.000000E+00, 1.000000E+00, 1.000000E+00],
    [1.010000E-01, 9.999956E-01, 9.999992E-01, 9.999997E-01, 1.000000E+00],
    [2.010000E-01, 9.999676E-01, 9.999885E-01, 9.999936E-01, 9.999951E-01],
    [3.010000E-01, 9.998474E-01, 9.999065E-01, 9.999213E-01, 9.999248E-01],
    [4.010000E-01, 9.993706E-01, 9.994886E-01, 9.995181E-01, 9.995253E-01],
    [5.010000E-01, 9.979895E-01, 9.981787E-01, 9.982259E-01, 9.982376E-01],
    [6.010000E-01, 9.951191E-01, 9.953794E-01, 9.954445E-01, 9.954607E-01],
    [7.010000E-01, 9.906222E-01, 9.909467E-01, 9.910272E-01, 9.910477E-01],
    [8.010000E-01, 9.849918E-01, 9.853759E-01, 9.854713E-01, 9.854950E-01],
    [9.010000E-01, 9.790407E-01, 9.794875E-01, 9.795985E-01, 9.796258E-01],
    [1.001000E+00, 9.734959E-01, 9.740140E-01, 9.741431E-01, 9.741754E-01],
    [1.101000E+00, 9.688016E-01, 9.694028E-01, 9.695527E-01, 9.695900E-01],
    [1.201000E+00, 9.651154E-01, 9.658109E-01, 9.659843E-01, 9.660275E-01],
    [1.301000E+00, 9.623921E-01, 9.631904E-01, 9.633903E-01, 9.634399E-01],
    [1.401000E+00, 9.604798E-01, 9.613879E-01, 9.616149E-01, 9.616718E-01],
    [1.501000E+00, 9.591937E-01, 9.602154E-01, 9.604713E-01, 9.605352E-01],
    [1.601000E+00, 9.583613E-01, 9.594984E-01, 9.597835E-01, 9.598549E-01],
    [1.701000E+00, 9.578391E-01, 9.590934E-01, 9.594079E-01, 9.594867E-01],
    [1.801000E+00, 9.575205E-01, 9.588934E-01, 9.592378E-01, 9.593240E-01],
    [1.901000E+00, 9.573291E-01, 9.588218E-01, 9.591960E-01, 9.592902E-01],
    [2.001000E+00, 9.572115E-01, 9.588251E-01, 9.592298E-01, 9.593315E-01],
    [2.101000E+00, 9.571308E-01, 9.588658E-01, 9.593020E-01, 9.594112E-01],
    [2.201000E+00, 9.570603E-01, 9.589183E-01, 9.593854E-01, 9.595026E-01],
    [2.301000E+00, 9.569820E-01, 9.589627E-01, 9.594609E-01, 9.595861E-01],
    [2.401000E+00, 9.568822E-01, 9.589857E-01, 9.595153E-01, 9.596480E-01],
    [2.501000E+00, 9.567530E-01, 9.589787E-01, 9.595392E-01, 9.596794E-01],
    [2.601000E+00, 9.565903E-01, 9.589370E-01, 9.595279E-01, 9.596761E-01],
    [2.701000E+00, 9.563928E-01, 9.588593E-01, 9.594806E-01, 9.596362E-01],
    [2.801000E+00, 9.561594E-01, 9.587445E-01, 9.593957E-01, 9.595589E-01],
    [2.901000E+00, 9.558885E-01, 9.585901E-01, 9.592710E-01, 9.594421E-01],
    [3.001000E+00, 9.555713E-01, 9.583884E-01, 9.590986E-01, 9.592766E-01],
  ];

  dataL4 = [
      [1.000000E-03, 1.000000E+00, 1.000000E+00, 1.000000E+00, 1.000000E+00],
      [1.010000E-01, 9.999956E-01, 9.999987E-01, 9.999997E-01, 9.999997E-01],
      [2.010000E-01, 9.999671E-01, 9.999880E-01, 9.999931E-01, 9.999946E-01],
      [3.010000E-01, 9.998464E-01, 9.999055E-01, 9.999203E-01, 9.999238E-01],
      [4.010000E-01, 9.993696E-01, 9.994871E-01, 9.995166E-01, 9.995242E-01],
      [5.010000E-01, 9.979880E-01, 9.981767E-01, 9.982239E-01, 9.982361E-01],
      [6.010000E-01, 9.951171E-01, 9.953774E-01, 9.954420E-01, 9.954581E-01],
      [7.010000E-01, 9.906192E-01, 9.909447E-01, 9.910252E-01, 9.910452E-01],
      [8.010000E-01, 9.849878E-01, 9.853744E-01, 9.854693E-01, 9.854931E-01],
      [9.010000E-01, 9.790372E-01, 9.794861E-01, 9.795965E-01, 9.796244E-01],
      [1.001000E+00, 9.734939E-01, 9.740140E-01, 9.741421E-01, 9.741740E-01],
      [1.101000E+00, 9.688026E-01, 9.694033E-01, 9.695522E-01, 9.695895E-01],
      [1.201000E+00, 9.651187E-01, 9.658118E-01, 9.659843E-01, 9.660271E-01],
      [1.301000E+00, 9.623977E-01, 9.631923E-01, 9.633903E-01, 9.634395E-01],
      [1.401000E+00, 9.604873E-01, 9.613893E-01, 9.616144E-01, 9.616709E-01],
      [1.501000E+00, 9.592017E-01, 9.602158E-01, 9.604699E-01, 9.605334E-01],
      [1.601000E+00, 9.583683E-01, 9.594974E-01, 9.597803E-01, 9.598511E-01],
      [1.701000E+00, 9.578447E-01, 9.590906E-01, 9.594032E-01, 9.594815E-01],
      [1.801000E+00, 9.575247E-01, 9.588888E-01, 9.592307E-01, 9.593165E-01],
      [1.901000E+00, 9.573314E-01, 9.588143E-01, 9.591867E-01, 9.592799E-01],
      [2.001000E+00, 9.572120E-01, 9.588152E-01, 9.592181E-01, 9.593188E-01],
      [2.101000E+00, 9.571289E-01, 9.588536E-01, 9.592870E-01, 9.593957E-01],
      [2.201000E+00, 9.570566E-01, 9.589033E-01, 9.593676E-01, 9.594838E-01],
      [2.301000E+00, 9.569764E-01, 9.589454E-01, 9.594402E-01, 9.595645E-01],
      [2.401000E+00, 9.568747E-01, 9.589656E-01, 9.594918E-01, 9.596236E-01],
      [2.501000E+00, 9.567446E-01, 9.589562E-01, 9.595129E-01, 9.596522E-01],
      [2.601000E+00, 9.565810E-01, 9.589126E-01, 9.594993E-01, 9.596466E-01],
      [2.701000E+00, 9.563825E-01, 9.588326E-01, 9.594496E-01, 9.596039E-01],
      [2.801000E+00, 9.561487E-01, 9.587155E-01, 9.593624E-01, 9.595242E-01],
      [2.901000E+00, 9.558764E-01, 9.585592E-01, 9.592354E-01, 9.594046E-01],
      [3.001000E+00, 9.555582E-01, 9.583557E-01, 9.590606E-01, 9.592368E-01],
    ];

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

  constructor() { }

  onChange() {
    console.log(this.selected);
    if (this.selected === 'Level2') {
      this.data = this.dataL2;
    } else if(this.selected === 'Level3') {
      this.data = this.dataL3;
    } else if(this.selected === 'Level4') {
      this.data = this.dataL4;
    } else {
      this.data = this.dataL2;
    }
    console.log("onChange called");
  }

  ngOnInit() {
  }

}
