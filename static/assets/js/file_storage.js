
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


$('.inner_category').click(function(){
var classes = $('.all_files');
$('.all_files').css('display','none');
var value_of_btn = $(this).val();
$('.'+value_of_btn).css('display','block');


//for(var i = 0; i < classes.length; i++)
//{
//   var in_element = classes[i].classList
//   var inner_class = in_element
//    var n = inner_class['value'].includes($(this).val())
//    if(n == false){
//    console.log('not exist '+ classes[i].id)
//    $('#'+classes[i].id).css('display','none')
//    }
//    if(n == true){
//    console.log('exist '+classes[i].id)
//    $('#'+classes[i].id).show()
//    $('#'+classes[i].id).css('display','block !important')
//    }
//}
}
)