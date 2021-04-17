import filetype


def add_a_tag(link,name):
    str_is=''
    if filetype.is_image(link):
        str_is ='''

        <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body image-thumb">
                                <div class="mb-4 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay"></div>
                                    <a href="{}" data-title="Mobile-plan.pdf" data-load-file="file" data-load-target="#resolte-contaniner" data-url="{}" data-toggle="modal" data-target="#exampleModal"><img src="{}" class="img-fluid" alt="image1"></a>
                                </div>
                                <p>{}</p>  
                                   <button type="button" class="btn btn-link delete_button" value='{}' >Delete</button>          
                            </div>
                        </div>
                    </div>
            '''.format(link,link,link,name,link)
    if filetype.is_archive(link):
        str_is = '''

        <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body image-thumb">
                                <div class="mb-4 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay"></div>
                                    <a href="{}" data-title="Mobile-plan.pdf" data-load-file="file" data-load-target="#resolte-contaniner" data-url="{}" data-toggle="modal" data-target="#exampleModal">
                                    <img src="/static/assets/images/layouts/page-1/pdf.png" class="img-fluid" alt="image1"></a>
                                </div>
                                <p>{}</p>  
                              <button type="button" class="btn btn-link delete_button" value='{}' >Delete</button>         
                            </div>
                        </div>
                    </div>
            '''.format(link, link, name,link)
    if '.csv' in name or '.xlsx' in name:
        str_is = '''

        <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body image-thumb">
                                <div class="mb-4 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay"></div>
                                    <a href="{}" data-title="Mobile-plan.pdf" data-load-file="file" data-load-target="#resolte-contaniner" 
                                    data-url="{}" data-toggle="modal" data-target="#exampleModal">
                                    <img src="/static/assets/images/layouts/page-1/xlsx.png" class="img-fluid" alt="image1"></a>
                                </div>
                                <p>{}</p>   
                        
                                <button type="button" class="btn btn-link delete_button" value='{}' >Delete</button>         
                            </div>
                        </div>
                    </div>
            '''.format(link, link, name,link)


    return str_is

