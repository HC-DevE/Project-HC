// $("#signup").click(function() {
//     $("#first").fadeOut("fast", function() {
//     $("#second").fadeIn("fast");
//     });
//     });

// code not commented is pure javascript
document.querySelector("#signup").click(function() {
  document.querySelector("#first").fadeOut("fast", function() {
  document.querySelector("#second").fadeIn("fast");
  });
  });

  // $("#signin").click(function() {
  //     $("#second").fadeOut("fast", function() {
  //     $("#first").fadeIn("fast");
  //     });
  //     });
  document.querySelector("#signin").click(function() {
    document.querySelector("#second").fadeOut("fast", function() {
    document.querySelector("#first").fadeIn("fast");
    });
    });
    
    
    
      
    //          $(function() {
    //            $("form[name='signin']").validate({
    //              rules: {
                   
    //                email: {
    //                  required: true,
    //                  email: true
    //                },
    //                password: {
    //                  required: true,
                     
    //                }
    //              },
    //               messages: {
    //                email: "Please enter a valid email address",
                  
    //                password: {
    //                  required: "Please enter password",
                    
    //                }
                   
    //              },
    //              submitHandler: function(form) {
    //                form.submit();
    //              }
    //            });
    //          });
             
    
    
    // $(function() {
      
    //   $("form[name='signup']").validate({
    //     rules: {
    //       firstname: "required",
    //       lastname: "required",
    //       email: {
    //         required: true,
    //         email: true
    //       },
    //       password: {
    //         required: true,
    //         minlength: 5
    //       }
    //     },
        
    //     messages: {
    //       firstname: "Please enter your firstname",
    //       lastname: "Please enter your lastname",
    //       password: {
    //         required: "Please provide a password",
    //         minlength: "Your password must be at least 5 characters long"
    //       },
    //       email: "Please enter a valid email address"
    //     },
      
    //     submitHandler: function(form) {
    //       form.submit();
    //     }
    //   });
    // });
    

    document.querySelector(function() {
      document.querySelector("form[name='signin']").validate({
        rules: {
          
          email: {
            required: true,
            email: true
          },
          password: {
            required: true,
            
          }
        },
         messages: {
          email: "Please enter a valid email address",
         
          password: {
            required: "Please enter password",
           
          }
          
        },
        submitHandler: function(form) {
          form.submit();
        }
      });
    });
    


document.querySelector(function() {

document.querySelector("form[name='signup']").validate({
rules: {
 firstname: "required",
 lastname: "required",
 email: {
   required: true,
   email: true
 },
 password: {
   required: true,
   minlength: 5
 }
},

messages: {
 firstname: "Please enter your firstname",
 lastname: "Please enter your lastname",
 password: {
   required: "Please provide a password",
   minlength: "Your password must be at least 5 characters long"
 },
 email: "Please enter a valid email address"
},

submitHandler: function(form) {
 form.submit();
}
});
});
