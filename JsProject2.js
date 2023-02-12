//////////////////////Car////////////////////////

var add = 1;
document.getElementById("output").innerHTML= add;
function blus(){
    document.getElementById("output").innerHTML = ++ add;
}
function Subtract(){
    document.getElementById("output").innerHTML = -- add;
    if(add < 1){
        add = 1;
        document.getElementById("output").innerHTML = add;
    }
}
//////////////Creat_account//////////////////////

function phone_number(){
    
    var in_number = document.getElementById("number1");
    var out_massage = document.getElementById("massage_error");
    var reguler_phone = /^01[0125][0-9]{8}$/;
    
    if(reguler_phone.test(in_number.value)==false){
        out_massage.innerHTML="Phone number is not correct";
        out_massage.style.display="block";
    }
    else{
        out_massage.style.display="none";
    }  
}
function Email_exp(){
    var in_email = document.getElementById("email");
    var out_massage = document.getElementById("massage_error");
    var reguler_email = /^[A-Z a-z 0-9 ._]+@[A-Z a-z]{3,}.[A-Z a-z]{2,3}$/;
    
    if(reguler_email.test(in_email.value)==false){
        out_massage.innerHTML="Email is not correct";
        out_massage.style.display="block";
    }
    else{
        out_massage.style.display="none";
    } 
}
function password_exp(){  
    
    var in_pass = document.getElementById("pas_1");
    var out_massage = document.getElementById("massage_error");
    var out_massage_2 = document.getElementById("massage_error_2");
    var reguler_pass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$&*_]).{8,32}/;
    
    if(reguler_pass.test(in_pass.value)==false){
        out_massage.innerHTML="Password is not correct";
        out_massage_2.innerHTML="It should not be less than eight characters and contain uppercase and lowercase letters and one of @#$&*_"
    }
    else{
        out_massage.style.display="none";
    } 
}
function Verify_password(){
    
    var password_1 = document.getElementById("pas_1");
    var password_2 = document.getElementById("pas_2");
    var out_massage = document.getElementById("massage_error");

    
    if(password_1.value == password_2.value){
        out_massage.style.display="none";
    }
    else{
        out_massage.innerHTML="Password does not match";
        out_massage.style.display="block";
    } 
}
///////////////Add item/////////////////////

//function addd(){
//    var div1 = document.createElement('div');
//    div1.className="backedg_5";
//    div1.innerHTML = '<div class="top_5">' + '<img src="../photo/image_4.jpg">' +
//        '</div>' + '<div class="center_5">' + '<p>Name prodect</p>' +
//        '<p>details of prodect</p>' + '<p>price</p>' + '<div class="footer">' +
//        '<button><a>add to car</a></button>' + '<button><a href="details.html">See more</a></button>' +
//        '</div>' + '</div>' + '<div class="clear"></div>';
//
//    document.getElementById("classPer").appendChild(div1);
//}











