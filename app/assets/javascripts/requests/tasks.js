$.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });

var indexTasks = function (successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: successCB,
    error: errorCB
  }
    $.ajax(request);
};

var postTask = function (content, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/tasks?api_key=1',
    data: {
      task: {
        content: content
      }
    },
    success: successCB,
    error: errorCB
  }
    $.ajax(request);
};

var destoryPost = function (taskID, successCB, errorCB){
  var request = {
    type: 'DELETE',
    url: 'api/tasks/' + taskID + '?api_key=1',
    success: successCB,
    error: errorCB
  }

    $.ajax(request);
}

var completePost = function (taskID, successCB, errorCB){
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + taskID +'/mark_complete?api_key=1',
    data: {
      task: {
        completed: true
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}

var activePost = function (taskID, successCB, errorCB){
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + taskID +'/mark_active?api_key=1',
    data: {
      task: {
        completed: false
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}