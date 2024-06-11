document.getElementById('TelegramName').addEventListener('click', function () {
    var textarea = document.createElement("textarea");
    textarea.value = "@EvgexaFor";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
});

function showNotification() {
        var notification = document.getElementById('notification');
        notification.style.display = 'block';

        setTimeout(function() {
            notification.style.display = 'none';
        }, 2800);
}

function ClosePage() {
    window.close();
};
