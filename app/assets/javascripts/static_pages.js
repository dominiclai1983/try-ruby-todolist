
var renderTask = function(){
  indexTasks(function (response) {
    var htmlString = response.tasks.map(function(task) {
      return "<div class='col-12 mb-3 p-2 border rounded task'><input type='checkbox' class='inputbox' data-id='" + task.id + "'> " + task.content + "<span class='icon'><i class='fas fa-pen fa-lg' data-id='" + task.id + "'></i> <i class='fas fa-trash-alt fa-lg' data-id='" + task.id + "'></i></span>" + "</div>";
    });

    $("#tasks").html(htmlString);
  });
}

$(document).on("turbolinks:load", function () {

  if ($('.static_pages.index').length > 0) {
    indexTasks(function (response) {
      var htmlString = response.tasks.map(function(task) {
        return "<div class='col-12 mb-3 p-2 border rounded task'><input type='checkbox' class='inputbox' data-id='" + task.id + "'> " + task.content + "<span class='icon'><i class='fas fa-pen fa-lg' data-id='" + task.id + "'></i> <i class='fas fa-trash-alt fa-lg' data-id='" + task.id + "'></i></span>" + "</div>";
                                                                  
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

  $(document).on('click', ".fa-trash-alt", function(event){
    console.log("deleteID");
    var deleteID = $(this).attr('data-id');
    destoryPost(deleteID);
    renderTask();
  })

  $(document).on('click', ".inputbox", function(event){
    console.log("dododo");
    var checkboxID = $(this).attr('data-id');
    console.log(checkboxID);
    if($(this).is(':checked')){
      completePost(checkboxID);
    }else{
      activePost(checkboxID);
    }
  })

});


