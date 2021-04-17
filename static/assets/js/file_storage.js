
$('.delete_button').click(function(){
var file = $(this).val();
       $.ajax({
            url: "delete_file_strd",
            type: "post",
            data: {'file':file},
            success: (result) => {
                if (!result.success) {
                    alert(result.message);
                }
                else {
                    console.log('Success')
                    location.reload();
                }
            },
            error: (XMLHttpRequest, textStatus, errorThrown) => {
                alert(errorThrown + "\nContact your database administrator.\nStatus: " + textStatus);
            }
        });

})