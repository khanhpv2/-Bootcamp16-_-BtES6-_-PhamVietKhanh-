
import { formCovid } from "../models/FormCovid.js"
import { giaoDienCovid } from "../models/GiaoDien.js"


let giaoDien = new giaoDienCovid();
giaoDien.getUserFormStorage();
giaoDien.renderArrayUser('#detail-user');
// console.log('mảng user',mangUser);
console.log('giaodien',giaoDien.mangUser);
// let user = new formCovid ();
// console.log('user',user);

document.querySelector('#signup-form .actions ul li:last-child a').onclick = function () {
    // alert(12345);
   let arrInput = document.querySelectorAll('#signup-form .content .fieldset-content input, #signup-form .content .fieldset-content select');
   let user = new formCovid();

   for (let input of arrInput) {
       let {value,id} = input;
       user[id] = value;
   }
   console.log('user',user);
   // in ra giao diện
   giaoDien.addUser(user);
   giaoDien.renderArrayUser('#detail-user');
//    document.querySelector('#detail-user').innerHTML = formHtml;
   giaoDien.saveUserToStorage();

}