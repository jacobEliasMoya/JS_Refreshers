// simple repo, just practicing my classes/ making sure I get the feel before jumping to learn node. Core conceptes
//just some mental refreshers/ hacent used a class outside of React in a while

class Apple {

    constructor(flavor, color){
        this.flavor = flavor;
        this.color = color;
    }

    logFlavor(){
        console.log(this.flavor)
    }

    logColor(){
        console.log(this.color)
    }

    logBoth(){
        console.log(`this is a ${this.flavor} and ${this.color} apple`)
    }

}

const apples = [
    { flavor: "sweet", color: "red" },
    { flavor: "tart", color: "green" },
    { flavor: "mild", color: "yellow" },
    { flavor: "crisp", color: "pink" },
  ];

apples.forEach((apple)=>{
    const mainApple = new Apple(apple.flavor,apple.color)
    mainApple.logBoth()
})