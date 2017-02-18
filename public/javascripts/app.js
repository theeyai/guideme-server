var socket = io();
$('form').submit(function(){
	var username = $('#username').val();
	var message = $('#msg').val();
	$('#chat').append($('<li>').html('<b>' + username + '</b>:' + message));
    socket.emit('chat message', message);
    $('#msg').val('');
    return false;
  });

socket.on('chat message', function(msg){
	$('#chat ').append($('<li>').html('<b>' + msg.Name + '</b>:' + msg.Message));
});