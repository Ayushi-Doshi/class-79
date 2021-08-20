name_of_the_student_array = [];

function submit()
{


    var name_1 = document.getElementById("nos1").value;
    var name_2 = document.getElementById("nos2").value;
    var name_3 = document.getElementById("nos3").value;
    var name_4 = document.getElementById("nos4").value;


    name_of_the_student_array.push(name_1);
    name_of_the_student_array.push(name_2);
    name_of_the_student_array.push(name_3);
    name_of_the_student_array.push(name_4);

    console.log(name_of_the_student_array);

    document.getElementById("dn").innerHTML=name_of_the_student_array;
    document.getElementById("sb").style.display = "none";
    document.getElementById("sortb").style.display = "inline-block";
    
}
function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("dn").innerHTML=name_of_the_student_array;
}
