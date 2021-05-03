function validateForm() {
    var first_name = document.getElementById('firstName').value;
    var last_name = document.getElementById('lastName').value;
    var user_email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var first_name_error = document.getElementById('firstNameError');
    var last_name_error = document.getElementById('lastNameError');
    var user_email_error = document.getElementById('emailNameError');
    var subject_error = document.getElementById('subjectError');
    var message_error = document.getElementById('messageError');

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (first_name == "") {
        first_name_error.style.display = 'block';
        return false;
        
    }
    if (last_name == "") {
        last_name_error.style.display = 'block';
        first_name_error.style.display = 'none';
        return false;
    }
     if (last_name.length < 3) {
                last_name_error.innerHTML = "Minimum length 3 required";
                last_name_error.style.display = 'block';
                return false;
     }
    if (user_email == "") {
        last_name_error.style.display = 'none';
                    user_email_error.style.display = 'block';
                    return false;
        
                }
                
    if (subject == "") {
        subject_error.style.display = 'block';
         user_email_error.style.display = 'none';
                        return false;
                    }

                    if (subject.length < 7) {
                        subject_error.innerHTML = 'Minimum length 7 required';
                        subject_error.style.display = 'block';
                        return false;
                    }
    if (message == "") {
        message_error.style.display = 'block';
        subject_error.style.display = 'none';
                        return false;
                    }

                    if (message.length < 15) {
                        message_error.innerHTML = 'Minimum length 15 required';
                        message_error.style.display = 'block';
                        return false;
    }
    
    message_error.style.display = 'none';
    


    alert("form submitted successfully!");


    return true;
  
}