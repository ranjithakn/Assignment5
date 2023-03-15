//GLOBAL VARIABLES
let empid, empName, Ext, email, Dept,output;

//Helper function to return dom elements
 function getName() {
     empid = document.getElementById('id').value;
     document.write(empid);
     empName = document.getElementById('name').value;
     document.write(empName);

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