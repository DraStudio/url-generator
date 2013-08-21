//THANKS:http://stackoverflow.com/questions/4006991/build-url-from-form-fields-with-javascript-or-jquery
$('#ghpagesForm').change(function() {
	var newURL = "http://" + $('#userName').val() + ".github.io/" + $('#repoName').val() + "/" + $('#dirLocation').val();
	var directURL = "https://github.com/" + $('#userName').val() + "/" + $('#repoName').val() + "/settings"
	$('#contactURL span').empty();
	$('#contactURL span').append('<a target="_blank" href="' + newURL + '">' + newURL + '</a>');
	$('#directSettings span').empty();
	$('#directSettings span').append('<a target="_blank" href="' + directURL + '">Settings</a>');
});