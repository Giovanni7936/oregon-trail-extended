class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []


    }
    getAvailableSeatCount(){

        return this.capacity - this.passengers.length
    }

    join(traveler){
        if(this.getAvailableSeatCount()> 0){
             this.passengers.push(traveler)

        }
    }
    shouldQuarantine(){
        for(let index = 0; index < this.passengers.length; index ++){
            if(this.passengers[index].isHealthy == false){
                return true
            }
            
        }
        
        return false
    }
    totalFood(){
        let total = 0
        for(let index = 0; index < this.passengers.length; index ++){
           total += this.passengers[index].food
            

    
        }
        return total
    }   
} 