var renderTask = function(){
  indexTasks(function (response) {
    var htmlString = response.tasks.map(function(task) {
      return "<div class='col-12 mb-3 p-2 border rounded task d-flex' data-id='" + task.id + "'>" + task.content + "</div>";
    });

    $("#tasks").html(htmlString);
  });
}

$(document).on("turbolinks:load", function () {

  if ($('.static_pages.index').length > 0) {
    indexTasks(function (response) {
      var htmlString = response.tasks.map(function(task) {
        return "<div class='col-8 mb-3 p-2 border rounded task' data-id='" + task.id + "'> " + task.content + "</div>" + "<div class='col-4 mb-3 p-2'>1234</div>";
      });
  
      $("#tasks").html(htmlString);
    });
  }

  //when click input button on input field, add new task on API
  $("#button-addon1").on('click', function(){
    console.log("yeah yeah yeah!");
    var input = $('.form-control').val();
    postTask(input);
    renderTask();
    $('.form-control').val('').focus();
  })

});


