Image2Base64
============

Transform an image to base64 for the browser.

## Usage

You can use it via browserify and npm or the old school way.

```javascript
var rslt = Image2Base64(myImage);
```

it may throw a `SecurityError` if the image doesn't support CORS.

## Build example

```
npm install
npm run example
````

## TODO

* tests
