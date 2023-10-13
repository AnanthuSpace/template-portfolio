$(document).ready(function(){

    $("#mail-form").validate({
        rules:{
            name:{
                required:true,
                normalizer: function(value) {
                    return $.trim(value);
                  },
                minlength:3,
            },
            email:{
                required:true,
            },
            message:{
                required:true,
                normalizer: function(value) {
                    return $.trim(value);
                  },
                minlength:10,
            }
        }
    })
});