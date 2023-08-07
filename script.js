let email = document.getElementById('email');
let reEmail = document.getElementById('reemail');
let boxAlarm = document.getElementById('alarm');

function validForm(){
    if(reEmail.value == "" || email.value == "" ){
        boxAlarm.innerHTML = 'Fill in both fields';
        return false;
    } else if(reEmail.value != email.value){
        boxAlarm.innerHTML = 'The information of the two fields must be the same';
        return false;
    }else{
        return true;
    }
}