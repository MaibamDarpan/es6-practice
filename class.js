class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Blue Bird High School';
    }
}
const student1 = new student(2, 'Shuvo');
const student2 = new student(4, 'Rehana');
const student3 = new student(9, 'Mohona');
console.log(student1, student2, student3);