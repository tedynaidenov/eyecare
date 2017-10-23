var PROJECTION = (
    function () {
        return {
            transform: function (lat, long, ) {
                return {
                    x:Math.tan(lat* Math.PI/180),
                    y:Math.tan(long * Math.PI/180)
                };
            }
        };
    }
)();


// console.log(PROJECTION.transform(0,0));
// console.log(PROJECTION.transform(45,0));
// console.log(PROJECTION.transform(0,45));
// console.log(PROJECTION.transform(45,45));
// console.log(PROJECTION.transform(-45,0));

