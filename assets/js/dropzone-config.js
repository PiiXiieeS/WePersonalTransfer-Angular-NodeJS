Dropzone.autoDiscover = false;

$(function() {
    $("#myDropZone").dropzone({
    url : "http://localhost:3000/files"
    });
});

Dropzone.options.myDropZone = {
  paramName: "file",
  maxFilesize: 5,
  maxFiles: 1,
  addRemoveLinks: true,
  init: function () {
    this.on("complete", function (file) {
      console.log(this);
      file.previewElement.addEventListener("click", function() { this.removeFile(file); });
    });
  }
};