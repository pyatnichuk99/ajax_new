$(document).ready(function(){

    $('#form1').submit(function(event){
        event.preventDefault();
        
        var login=$("#login").val();
        var name=$("#name").val();
        var phone=$("#phone").val();
        var email=$("#email").val();
        var pass=$("#pass").val();

         if(login=='' || name==''|| phone==''|| email==''|| pass==''){
             if(login==''){
                 $(".login").html("*Заповніть поле логіну");
             }
             if(name==''){
                 $(".name").html("*Заповніть поле імені")
             }
             if(phone==''){
                 $(".phone").html("*Заповніть поле телефону")
             }
             if(email==''){
                 $(".email").html("*Заповніть поле email")
              }
             if(pass==''){
                 $(".password").html("*Заповніть поле паролю")
             } 
             if(login.length<5 || login.length>90){
                $(".login").html("*Недопустима довжина логіну");
            }
            if(name.length<5 || name.length>90){
                $(".name").html("*Недопустима довжина імені");
            }
            if(pass.length<5 || pass.length>90){
                $(".pass").html("*Недопустима довжина паролю");
            }
            
         }else{
        $.ajax({
            type:'Post',
            url: 'php/check.php',
            data: new FormData(this),
            cache: false,
            contentType: false,
            processData: false,
            success: function(response){
                swal({
                    title: "Чудово!",
                    text: "Користувача успішно зареєстровано!",
                    icon: "success",
                }).then(() => {
                    location.reload();
                });
            },
        });
    }
    });

});