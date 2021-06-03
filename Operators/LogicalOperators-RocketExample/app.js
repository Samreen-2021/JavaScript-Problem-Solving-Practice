 /*You have to design a rocket launching problem.

 Take 3 variables. IsSnow, IsRain, IsSpeed.
  Give values to them true  or false as per your choice. 
To launch the rocket there are conditions that there should be no rain, no snow and the speed of wind should be less than 20km/hr. 
 Use logical operators to match the conditions and observe the result.*/
 let IsSnow = false;
 let IsRain = false; 
 let IsSpeed = 14;

let canLaunch = (IsSnow == false) && (IsRain == false) && IsSpeed <20;
console.log(canLaunch);