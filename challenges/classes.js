// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(props) {
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }
    volume() {
        const calculatedVolume = this.length * this.width * this.height;
        return calculatedVolume;
    }
    surfaceArea() {
        const calculatedSurfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return calculatedSurfaceArea;
    }
}

//=================STRETCH TASK=================================
class CubeMaker extends CuboidMaker {
    constructor(cubeProps) {
        super(cubeProps);
        this.sideLength = cubeProps.sideLength;
    }
    cubeVolume() {
        const calculatedCubeVolume = (this.sideLength * this.sideLength * this.sideLength);
        return calculatedCubeVolume;
    }
    cubeSurfaceArea() {
        const calculatedCubeSurfaceArea = 6 * (this.sideLength * this.sideLength);
        return calculatedCubeSurfaceArea;
    }
}
  
const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

const cube = new CubeMaker({
    sideLength: 4
});
  
// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cube.cubeVolume()); // 100
console.log(cube.cubeSurfaceArea()); // 130