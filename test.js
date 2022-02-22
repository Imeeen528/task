function alpha(ch) {
    ok = true;
    for (let i = 0; i < ch.length; i++) {
        if (ch[i].toUpperCase() < 'A' || ch[i].toUpperCase() > 'Z') {
            ok = false;
        }
    }
    return ok;
}

function test() {
    let fName = document.getElementById("fName").value;
    let error = document.getElementById("erreur1");
    if (!alpha(fName) || fName.length == 0) {
        error.style.display = "block";
        return false;
    }
    else {
        error.style.display = "none";
    }

    let lName = document.getElementById("lName").value;
    let error2 = document.getElementById("erreur2");
    if (!alpha(lName) || lName.length == 0) {
        error2.style.display = "block";
        return false;
    }
    else {
        error2.style.display = "none";
    }

    let error3 = document.getElementById("erreur3");
    let email = document.getElementById("email").value;
    if (email.lastIndexOf(".") < email.lastIndexOf("@") || email.lastIndexOf(".") == -1 || email.length == 0) {
        error3.style.display = "block";
        return false;
    }
    else {
        error3.style.display = "none";
    }

    let error4 = document.getElementById("erreur4");
    let phone = document.getElementById("num").value;

    if (phone.length != 8 || phone.indexOf(".") != -1) {
        error4.style.display = "block";
        return false;
    }
    else {
        error4.style.display = "none";
    }

    let password = document.getElementById("password").value;
    let up = 0;
    let nrml = 0;
    let spec = 0;
    let numb = 0;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'a' && password[i] <= 'z') {
            nrml++;
        }
        else if (password[i] >= 'A' && password[i] <= 'Z') {
            up++;
        }
        else if (password[i] >= '0' && password[i] <= '9') {
            numb++;
        }
        else {
            spec++;
        }

    }
    let error5 = document.getElementById("erreur5");
    if (up == 0 || nrml == 0 || spec == 0 || numb == 0) {
        error5.style.display = "block";
    }
    else {
        error5.style.display = "none";
    }

    let psw2 = document.getElementById("confPasssword").value;
    let error6 = document.getElementById("erreur6");
    if (confPassword != password) {
        error6.style.display = "block";
    }
    else {
        error6.style.display = "none";
    }

    let error7 = document.getElementById("erreur7");
    if (!document.getElementById("f").checked && !document.getElementById("m").checked && !document.getElementById("a").checked) {
        error7.style.display = "block";
        return false;
    }
    else {
        error7.style.display = "none";

    }

    let today = new Date().toISOString();
    let y = today.slice(0, 4);
    let m = today.slice(5, 7);
    let d = today.slice(8, 10);

    let birth = document.getElementById("birth").value;

    let yy = birth.slice(0, 4);
    let mm = birth.slice(5, 7);
    let dd = birth.slice(8, 10);


    let years = +y - yy;
    let months = +m - mm;
    let days = +d - dd;
    if ((months < 0) || (months == 0 && days < 0)) {
        years--;
    }

    let error8 = document.getElementById("erreur8");
    if (years < 18 || birth.length == 0) {
        error8.style.display = "block";
        return false;
    }
    else {
        error8.style.display = "none";
    }
} if (document.getElementById("m").checked) {
    var gender1 = document.getElementById("m").value;
}
else if (document.getElementById("f").checked) {
    var gender1 = document.getElementById("f").value;
}

/*part2*/

var table = document.getElementById("myTable");
if (window.getComputedStyle(document.getElementById('button'), null).display == "block") {
    table.style.display = "block"
    var row = table.insertRow();
    row.setAttribute("id", `row${table.rows.length - 1}`);
    var array = [fName, lName, email, phone, password, gender1, birth];
    for (let i = 0; i < 7; i++) {
        row.insertCell(i).innerHTML = array[i];
    }
    row.insertCell(7).innerHTML += `<input type='button' value ='Delete' id='button1' onclick="delete(${row.id})">`;
    row.insertCell(8).innerHTML += `<input type='button' value ='Update' id="up_button" onclick='update(${row.id})'>
    <input type="hidden" id="row_id" value="${row.id}">`;
}
return true;
function update() {
    var row = document.getElementById("row_id").value;
    var t_row = document.getElementById(row);
    if (test()) {
        t_row.cells[0].innerHTML = document.getElementById("fName").value;
        t_row.cells[1].innerHTML = document.getElementById("lName").value;
        t_row.cells[2].innerHTML = document.getElementById("email").value;
        t_row.cells[3].innerHTML = document.getElementById("num").value;
        t_row.cells[4].innerHTML = document.getElementById("password").value;
        if (document.getElementById("f").checked) {
            t_row.cells[5].innerHTML = document.getElementById("f").value;
        }
        else if (document.getElementById("m").checked) {
            t_row.cells[5].innerHTML = document.getElementById("m").value;
        }
        t_row.cells[6].innerHTML = document.getElementById("birth").value;
        document.getElementById("up").style.display = "none";
        document.getElementById("button").style.display = "block";
    }
}