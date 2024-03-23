const grade = prompt("Insert Your Marks:")
studentGrade(grade)



function studentGrade(){
    
    if (grade>79 && grade<=100){
        yourGrade= 'A'
    }else if (grade>=60 && grade<=79){
        yourGrade= 'B'
    }else if( grade>49 && grade<60){
        yourGrade= 'C'
    }else if (grade>=40 && grade<=49){
        yourGrade= 'D'
    }else if (grade>=0 && grade<40){
        yourGrade= 'E'
    }
    else {
        yourGrade= 'Error,Please enter a valid grade '
    }
   
}
const studentgrade =studentGrade()
console.log (studentgrade)
document.body.innerHTML =yourGrade