
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
if ($(this).val() == 'all'){
$('.all_files').css('display','block')
}
else{
var classes = $('.all_files');
for(var i = 0; i < classes.length; i++)
{
   var in_element = classes[i].classList
   var inner_class = in_element
    var n = inner_class['value'].includes($(this).val())
    if(n == false){
    $('#'+classes[i].id).css('display','none')
    }
    if(n == true){
    console.log(classes[i].id)
    $('#'+classes[i].id).css('display','block')
    document.getElementById(classes[i].id).style.display = "block";
    }
}
}
}
)


function upload_files(){
console.log('here')
    var form_data = new FormData();
    form_data.append('file', $('#up_files').prop('files')[0]);
    form_data.append('main_dep', $('#main_dep').val());
    form_data.append('sec_dep', $('#sec_dep').val());
console.log(form_data)
    $(function() {
    $.ajax({
        type: 'POST',
        url:  '/fileUploader',
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        success: function(data) {
            console.log('Success!');
            $('#close_model_box').click()
        },
    });
    });
}
function cat_selected(text){


if (text != 'all'){
$('.cat_tr').hide()
$('.'+text.toLowerCase()).show()
}else{
$('.cat_tr').show()
}
}