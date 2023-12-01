document.getElementById('TelegramName').addEventListener('click', function () {
    var textarea = document.createElement("textarea");
    textarea.value = "@EvgexaForblane";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
});

function showNotification() {
        var notification = document.getElementById('notification');
        notification.style.display = 'block';

        // Через 2 секунды скрыть уведомление
        setTimeout(function() {
            notification.style.display = 'none';
        }, 2300);
}