/**
 * index.js - Image2Base64
 */

(function (definition) {
    if (typeof exports === "object") {
        module.exports = definition();
    } else {
        Image2Base64 = definition();
    }

})(function () {
    return function (image) {
        var canvas = window.document.createElement('canvas'),
            ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        return canvas.toDataURL("image/png");
    };
});
