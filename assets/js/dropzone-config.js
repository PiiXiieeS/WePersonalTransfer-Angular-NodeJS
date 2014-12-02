$(function() {
    $("#myDropZone").dropzone({
    url : "http://localhost:3000/files"
    });
  
  Dropzone.options.filedrop = {
  init: function () {
    this.on("complete", function (file) {
      console.log('COUCOU');
    });
  }
};

});