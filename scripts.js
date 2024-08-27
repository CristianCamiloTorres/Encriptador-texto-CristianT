document.getElementById('encrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('text-input').value;
    let encryptedText = encryptText(text);
    document.getElementById('output-message').style.display = 'none';
    document.getElementById('text-output').style.display = 'block';
    document.getElementById('text-output').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('text-input').value;
    let decryptedText = decryptText(text);
    document.getElementById('output-message').style.display = 'none';
    document.getElementById('text-output').style.display = 'block';
    document.getElementById('text-output').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('text-output');
    outputText.select();
    document.execCommand('copy');
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('text-input').value = '';
    document.getElementById('text-output').value = '';
    document.getElementById('text-output').style.display = 'none';
    document.getElementById('output-message').style.display = 'block';
});

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}
