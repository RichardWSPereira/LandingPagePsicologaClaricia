function meuEscopo() {
    const dateText = document.querySelector('.titleHTML');
    const dateCurrent = new Date();  
    
    dateText.innerHTML = dateCurrent.toLocaleString('pt-BR',{dateStyle: 'full',timeStyle:'short'});
}
meuEscopo();
