// Add your Circle class here
// Add your Circle class here
class Circle{

    constructor(radius){
        this.radius=radius;
    }

    get circumference(){
        return 2*Math.PI*this.radius
    }
    get diameter(){
        return 2*this.radius;
    }
    get area(){
        return  Math.PI*Math.pow(this.radius,2) ;
    }
    set diameter(val){
        this.radius= val/2;
    }
    set circumference(val){
        this.radius=val/(2*Math.PI)
    }
    set area(val){
        this.radius= Math.sqrt(val/Math.PI)
    }

}