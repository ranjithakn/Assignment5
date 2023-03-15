//GLOBAL VARIABLES
let empid, empName, Ext, email, Dept,output;

//Helper function to return dom elements
 function getName() {
     empid = document.getElementById('id').value;
     empName = document.getElementById('name').value;
     Ext = document.getElementById('ext').value;
     email = document.getElementById('mail').value;
     Dept = document.getElementById('did').value;
     document.write("ID:" +empid);
     document.write("<br\>");
     document.write("EMP NAME:"+empName);
     document.write("<br\>");
     document.write("EXTENSION:"+Ext);
     document.write("<br\>");
     document.write("EMAIL:"+email);
     document.write("<br\>");
     document.write("DEPARTMENT:"+Dept);
     document.write("<br\>");
}
/*
const $ = (id) => document.getElementById(id)
empid = $('id');
empName = $('name');
Ext = $('ext');
email = $('mail');
Dept = $('did');
output = $('calculate')
document.write(empid.value);
output.addEventListener('click', () => {
    document.write(empid.value);
    document.write(empName.value);
    document.write(Ext.value);
    document.write(email.value);
    document.write(Dept.value);

} )
*/