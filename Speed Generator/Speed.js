function speedOfCar(speed){
    //  Enter the speed of the driver 
    speed=32
    let reply=""
    let demeritpoints;
        if(speed<0){
            return 'Invalid Value'
        }
        if(speed>=0 && speed<=70){
            return 'Ok'
         }
    
      else {
        //Dividing distance per 5km with the difference of the speeds helps us find the demerited points.
            let perKm=5
            let diff= speed-70 
            demeritpoints= Math.floor(diff/perKm) 
            reply = 'Points:' + demeritpoints
    
            if(demeritpoints>12){
                reply = "License suspended. "+ "demerit points: "+demeritpoints
            }
        }
        return reply
    }
    const carSpeed=speedOfCar()
    console.log(carSpeed)