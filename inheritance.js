class Parent{
    constructor(){
        this.fatherName = 'Ratan';
    }
}
class Child extends Parent{
    
    constructor(name){
        super();
        this.name = name;

       

    }
    getFullname(){
        return this.name + ' ' + this.fatherName;
    }
}

const child1 = new Child('Hritu');
const child2 = new Child('Darpan');
console.log(child1.getFullname());
console.log(child2);
console.log(child2.getFullname());