class Spring{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }

        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
    }

    fly(){
        this.Chain.bodyA = null;
    }

    display(){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}