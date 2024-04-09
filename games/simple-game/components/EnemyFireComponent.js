class EnemyFireComponent extends Component {
    constructor() {
        super();
    }
    start() {
        this.secondsToFire = 0
        this.secondsBetweenLasers = .5
    }
    update() {
        if (this.secondsToFire <= 0) {
            let laserGameObject = new GameObject("LaserGameObject")
            laserGameObject.addComponent(new Circle("Red", "Black"))
            laserGameObject.addComponent(new EnemyLaserComponent())
            GameObject.instantiate(laserGameObject, this.transform.x, this.transform.y);

            this.secondsToFire = this.secondsBetweenLasers;
        }
        else{
            this.secondsToFire -= Time.deltaTime
        }
    }
}
window.EnemyFireComponent = EnemyFireComponent