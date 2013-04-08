//THANKS:http://stackoverflow.com/questions/4006991/build-url-from-form-fields-with-javascript-or-jquery
$('#ghpagesForm').change(function() {
	var newURL = "http://" + $('#userName').val() + ".github.io/" + $('#repoName').val() + "/" + $('#dirLocation').val();
	$('#contactURL span').empty();
	$('#contactURL span').append('<a target="_blank" href="' + newURL + '">' + newURL + '</a>');
});