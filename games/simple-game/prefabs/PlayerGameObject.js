class PlayerGameObject extends GameObject{
    constructor(name="CircleGameObject"){
        super(name);
  
    }
    start(ctx) {
        super.start(ctx)
        this.health = 1
        //this.addComponent(new DeathComponent())
        this.addComponent(new Circle("purple", "blue"))

    }
}

window.PlayerGameObject = PlayerGameObject