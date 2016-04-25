 function validate()
      {
      
         if( document.myForm.firstname.value == "" )
         {
            alert( "Please provide your name!" );
            document.myForm.firstname.focus() ;
            return false;
         }
         
         if( document.myForm.lastname.value == "" )
         {
            alert( "Please provide your Email!" );
            document.myForm.lastname.focus() ;
            return false;
         }
      }
   //-->