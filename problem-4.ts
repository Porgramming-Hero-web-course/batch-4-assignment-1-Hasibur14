{

    type Circle = {
        shape: "circle";
        radius: number;
    };
    
   type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };
    
    type Shape = Circle | Rectangle;
    
    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
        }
        return parseFloat((shape.width * shape.height).toFixed(2));
    }
    
    


}