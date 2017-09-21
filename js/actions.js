$(document).ready(function() {
  $("#searchTerm").keypress(function(e) {
    if (e.keyCode === 13) {
      $("#searchButton").click();
    }
  })

  $("#searchButton").on("click", function() {
    if ($("#searchTerm").val() == "") {
    } else {
      $("#output").empty();
      var formValue = $("#searchTerm").val();
      var url = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" + formValue;

      $.ajax({
        url: url,

        dataType: "json",
        data: {
          origin: "*"
        },
        type: "GET",
        success: function(data) {
          for (var i = 0; i < data[1].length; i++) {
            $("#output").prepend("<div class=well><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2></a>" + "<p>" + data[2][i] + "</p></div>");

          }
          $("#searchTerm").val("");
        }
      });
    }

  });

  $("#randomArticle").on("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  })
});
