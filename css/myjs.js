$(function() {
  var userids =
    "3125964;7469625;8537370;8525793;8550389;8537351";
  var num = userids.split(";").length;
  $.getJSON(
    "https://api.stackexchange.com/2.2/users/" +
      userids +
      "?order=desc&sort=reputation&site=stackoverflow",
    function(data) {
      for (var i = 0; i < num; i++) {
        $("#socreboard tbody").append(
          "<tr> <td>" +
            (i + 1) +
            "</td><td><img class='avatar' src='" +
            data.items[i].profile_image +
            "'/>" +
            data.items[i].display_name +
            "</td><td>" +
            data.items[i].reputation +
            "</td></tr>"
        );
      }
    }
  );
});
