WePersonalTransfer-Angular-NodeJS
=================
Stand-alone component to upload files easily on your server using NodeJS and DropzoneJS.

## Installation

You must run `npm install` at the root folder to install dependencies. Now open the `./assets/js/dropzone-config.js` file and change the url with your own hostname and port.

Run simply your app :
```
> node app.js
```

## Technical

The upload is handled using NodeJS with the [Express](http://expressjs.com) framework and [multer](https://github.com/expressjs/multer) component.

Front-end does use [DropzoneJS](http://www.dropzonejs.com).