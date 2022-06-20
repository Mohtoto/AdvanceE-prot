// template_zli1zqy

//service_i0xbahq


//Rh-MX_dV27KSl5AiW


let contrastToggle = false ;

let isModalOpen = false ;

function toggleContrast() {
    contrastToggle = !contrastToggle; 
    if(contrastToggle){

        document.body.classList += " dark-theme"
    }
    
    else {

        document.body.classList.remove("dark-theme")
    }

}


function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    emailjs
     .sendForm(
         'service_i0xbahq',
         'template_zli1zqy',
         event.target,
         'Rh-MX_dV27KSl5AiW'
     ).then(() => {
        
        loading.classList.remove('modal__overlay--visible');
        success.classList +=' modal__overlay--visible'

        console.log('it worked')
     }).catch(() => {
        
        loading.classList.remove('modal__overlay--visible');
        alert(

            'The email service is remporarily unavaliabe. Please contact me directly on totonchym@gmail.com'

        );


     })
    
    
}



function togglemodal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    
    isModalOpen = true;
    document.body.classList += ' modal--open'
}