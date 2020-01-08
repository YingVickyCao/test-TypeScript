//  Static Properties
// static members of a class, those that are visible on the class itself rather than on the instances. 
class Grid {
    static origin = { x: 0, y: 0 };

    constructor(public scale: number) { }

    add(point: { x: number; y: number; }): number {
        return point.x + point.y + this.scale;
    }

    getOrigin() {
        return origin;
    }
}

export function test_static_properties(): void {
    let grid1 = new Grid(1.0);  // 1x scale
    console.log(grid1.getOrigin()); // http://localhost:3000
    console.log(grid1.scale); // 1
    console.log(Grid.origin); // { x: 0, y: 0 }

    let grid2 = new Grid(5.0);  // 5x scale
    console.log(grid2.getOrigin()); // http://localhost:3000
    console.log(grid2.scale); // 5
    console.log(Grid.origin);   // { x: 0, y: 0 }

    console.log(grid1.add({ x: 10, y: 10 }));   // 21
    console.log(grid2.add({ x: 10, y: 10 }));   // 25

    Grid.origin.x = 100;
    console.log(Grid.origin);   // { x: 100, y: 0 }
    // console.log(grid1.origin);   // ERRROR:Property 'origin' is a static member of type 'Grid'  TS2576
}