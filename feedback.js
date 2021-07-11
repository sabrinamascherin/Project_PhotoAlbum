/*const name = document.getElementById('name')
const image = document.getElementById('image')
const comment = document.getElementById('comment')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let messages = []
    if ($name.value === '' || $name.value == null) {
        messages.push('Username must be at least 6 characters.')
    }

    if (messages.length < 6) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    if ($image.value === '' || $image.value == null) {
        messages.push('Cannot be empty.')
    }

    if (messages.length == 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    if ($comment.value === '' || $comment.value == null) {
        messages.push('Cannot be empty.')
    }

    if (messages.length == 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    //Button
    $('#submit').css("background-color", "lightblue").css("border", "red");
    $("#submit").css({
        'background-color': 'lightblue',
        'border':'red'
    });

    $(".btn btn-dark").css("background-color", "red");

    
});*/

$(document).ready(function(){
    $('#submit').click(function(){
             
    });


    $('#username').keyup(function(){
        let username = $('#username').val();

        if(username === ''){
            $('#username').show();
            $('#username').addClass('is-invalid');
            $('#validationServer03Feedback').show().html('You must enter a username.');            
            return;
        }
        else{
            $('#usernameHelp').hide();
        }

        if(username.length < 6){
            $('#username').addClass('is-invalid');
            $('#validationServer03Feedback').show().html('Username must be at least 6 characters.');            
            return;
        }else{
            $('#username').addClass("valid");
        }   
    });

    
    $('#image').keyup(function(){
        let image = $('#image').val();

        if(image === ''){
            $('#image').show();
            $('#image').addClass('is-invalid');
            $('#validationServer03Feedback2').show().html('Cannot be empty.');            
            return;
        }
        else{
            $('#imageHelp').hide();
        }

        if(image.length == 0){
            $('#image').addClass('is-invalid');
            $('#validationServer03Feedback2').show().html('Cannot be empty.');            
            return;
        }   
    });

    
    $('#comment').keyup(function(){
        let comment = $('#comment').val();

        if(comment === ''){
            $('#comment').show();
            $('#comment').addClass('is-invalid');
            $('#validationServer03Feedback3').show().html('Cannot be empty.');            
            return;
        }
        else{
            $('#commentHelp').hide();
        }

        if(comment.length == 0){
            $('#comment').addClass('is-invalid');
            $('#validationServer03Feedback3').show().html('Cannot be empty.');            
            return;
        }
        else{
            $(comment.length > 0);{
                $('#comment').addClass('valid');
                return;
            }
        } 
    });
});