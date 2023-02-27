const textAreaInput = document.querySelector('#characterTextArea');
const counterOutput = document.querySelector('.count');

textAreaInput.addEventListener('input', () => {
    counterOutput.textContent = textAreaInput.value.length;
});