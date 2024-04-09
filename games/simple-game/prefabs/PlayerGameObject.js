class PlayerGameObject extends GameObject{
    constructor(name="PlayerGameObject"){
        super(name);
  
    }
    start(ctx) {
        super.start(ctx)
        this.health = 5
        this.addComponent(new DeathComponent())
        this.addComponent(new Circle("purple", "blue"))

    }
}

window.PlayerGameObject = PlayerGameObject