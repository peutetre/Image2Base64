var Qstart = require('qstart'),
    Qimage = require('qimage'),
    Image2Base64 = require('../index');

function main() {
    var url = "https://0.gravatar.com/avatar/65920e23fe9e867755920783db9fe3aa";
    return Qimage(url, { crossOrigin : "Anonymous" }).then(function (image) {
        console.log(Image2Base64(image));
    });
}

function errƒ(err) { console.log(err); }

Qstart.then(main, errƒ);
