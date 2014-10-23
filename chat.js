var input = document.getElementById('new-message');
var messages = document.getElementById('messages');
var message = messages.children[0];
function addMessage() {
    var newMessage = message.cloneNode(true);
    var text = newMessage.querySelector('i');
    text.innerText = input.value;
    messages.appendChild(newMessage);
    input.value = '';
}
document.getElementById('send').addEventListener('click', addMessage);

input.addEventListener('keypress', function(e) { if (e.keyCode==13) addMessage()});

