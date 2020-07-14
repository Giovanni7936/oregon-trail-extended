class Traveler  {
    constructor (name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    
    }
    hunt(){
        this.food +=2


    }

    eat(){
        
        if (this.food < 1) {
			return (this.isHealthy = false);
		}
		this.food -= 1;
	}

        
        }
    

    

    


   


class Doctor extends Traveler {
    constructor (name, food, isHealthy){
        super(name, food, isHealthy)

        
    }
   


    heal(traveler){
        traveler.isHealthy = true
    }
}

class Hunter extends Traveler{
    constructor(name, food = 2, isHealthy){
        super(name, food, isHealthy)
    
        this.food = food
        
    

    }
    hunt(){
        this.food +=5

    }

    eat(){
        

        if(this.food < 2 ){
            this.food -=1
            return (this.isHealthy = false);
             
        }
        this.food -=2
        




    }
    giveFood(traveler, numOfFoodUnits){
        if(numOfFoodUnits <= this.food){
            traveler.food +=numOfFoodUnits
            this.food -= numOfFoodUnits

        } 
    }
        

        

}
