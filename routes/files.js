var express = require('express');
var router = express.Router();

var fs = require('fs');
var multer  = require('multer');
router.use(multer({ dest: './public/uploads/',
               limits: {
                 fieldNameSize: 100,
                 files: 2,
                 field: 5,
                 fileSize: 5000000
               },
               rename: function (fieldname, filename) {
                return fieldname + filename + Date.now()
              }}));

function prependWithHostname(req, elt) {
  return req.get('host') + '/public/uploads/' + elt;
}

/* GET files listing. */
router.get('/', function(req, res) {
  fs.readdir("./public/uploads", function (err, files) {
    if (err) throw err;
    
    console.log(req.get('host'));
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(files.map(function(x){return prependWithHostname(req, x);})));
  });
});

/* POST upload a new file */
router.post('/', function(req, res) {
  console.log('Attempt to upload a file');
  console.log(req.files);
});

module.exports = router;
