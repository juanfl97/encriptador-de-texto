function encryptMessage() {
    const inputMessage = document.getElementById('inputMessage').value;
    const encryptedMessage = btoa(inputMessage);
    document.getElementById('outputMessage').value = encryptedMessage;
}

function decryptMessage() {
    const encryptedMessage = document.getElementById('outputMessage').value;
    try {
        const decryptedMessage = atob(encryptedMessage);
        document.getElementById('inputMessage').value = decryptedMessage;
    } catch (e) {
        alert('El mensaje no es válido o no está encriptado.');
    }
}
