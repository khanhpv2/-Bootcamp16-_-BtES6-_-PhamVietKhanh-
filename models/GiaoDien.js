import {formCovid} from "../models/FormCovid.js"
export class giaoDienCovid {
    mangUser =[];
    constructor () {

    }
    addUser (user) {
        this.mangUser.push(user);
        return this.mangUser;
    }
    saveUserToStorage () {
        let sUser = JSON.stringify(this.mangUser);
        localStorage.setItem('mảng user',sUser);
        return this.mangUser;
    }
    getUserFormStorage() {
        if(localStorage.getItem('mảng user')) {
            let sUser = JSON.parse(localStorage.getItem('mảng user'));
            this.mangUser = sUser;
        }
        return this.mangUser;
    }
    renderArrayUser (selector_css) {
        let formHtml = '';
        for (let userStore of this.mangUser) {
            let user = new formCovid();
            user = {...user,...userStore};
            formHtml += `
               <ul>
                 <li>Họ và tên: ${user.ho +' '+ user.ten} </li>
                 <li>Email: ${user.email} </li>
                 <li>Ngày, tháng, năm sinh: ${user.ngay +'/'+user.thang+'/' + user.nam} </li>
                 <li>Địa chỉ: ${user.diaChi} </li>
                 <li>Thông tin di chuyển: ${user.thongTinDiChuyen} </li>
                 <li>Loại nhiễm: ${user.loaiNhiem} </li>
               </ul>
            `
        }
     
        document.querySelector(selector_css).innerHTML = formHtml;
    }

}