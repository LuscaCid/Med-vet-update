export function elements(){
    const logoutButton = document.querySelector('#logout')
    const inputUsername = document.querySelector('#username')
    const inputPassword = document.querySelector('#password')
    const sendLogon = document.querySelector('#join')
    const telaLogin = document.querySelector('.cartao-1')
    const telaMenu = document.querySelector('.cartao-2')
    const buttonToMenu = document.querySelector('.botao-to-menu')
    const buttonToOpenMenu = document.querySelector('.menu-opcoes')
    const imgFromButtonOpenMenu = document.querySelector('#img-menu')
    const alertError = document.querySelector('.alert-error')
    const screenMenuSpan= document.querySelector('#name-user')
    const registerPetButton = document.querySelector('#cadastro-pet')
    let imgOpenned =false
    
    return{
        registerPetButton,
        logoutButton,
        inputUsername,
        inputPassword,
        sendLogon,
        telaLogin,
        telaMenu,
        buttonToMenu,
        buttonToOpenMenu,
        imgFromButtonOpenMenu,
        alertError,
        screenMenuSpan,
        imgOpenned,
    }



}