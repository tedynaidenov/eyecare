var exported = (function() {
    return {
        rad2deg: function() {
            return (180 / Math.PI) * radians;
        },
        deg2rad: function() {
            return (Math.PI / 180) * degrees;
        },
        /*
        *  Converts spherical coordinates to pair of horizontal/vertical angles.
        *  Parameters:
        *       theta - azimuth
        *       phi - zenith (declination)
        *  Returns:
        *       array of horizontal and vertical angles
        */
        spherical2angle: function (theta, phi) {
            var t = deg2rad(theta);
            var p = deg2rad(phi);
            return [
                rad2deg(Math.atan(Math.cos(t) * Math.sin(p) / Math.cos(p))), //ha
                rad2deg(Math.atan(Math.sin(t) * Math.sin(p) / Math.cos(p)))  //va
            ];
        }
    }; 
});
