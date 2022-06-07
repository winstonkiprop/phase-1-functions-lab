// Code your solution in this file!
 const hq = 42;
 function distanceFromHqInBlocks(pickuplocation){
    if (pickuplocation <42 ){
        return hq-pickuplocation
    } else {
        return pickuplocation - hq
    }
 }

 function distanceFromHqInFeet(pickuplocation){
      return distanceFromHqInBlocks(pickuplocation) * 264
       if ( pickuplocation < 42)
       return ( hq-pickuplocation)*264
       else {
           return (pickuplocation - hq)*264
       }
 } function distanceTravelledInFeet(start,destination){
     if (destination<start)
     return (start -destination)*264
     else (destination>start)
     return (destination-start)*264

     

     
 }

 let charges;
 function calculatesFarePrice (start, destination){
    if (distanceTravelledInFeet(start, destination) < 400) {
      return 0
    } 
    else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000) {
      charges = (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } 
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
      charges = 25
    } else {
      return 'cannot travel that far'
    }
    return charges
  } 