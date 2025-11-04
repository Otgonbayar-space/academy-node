import readline from 'readline';



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


class student{
    constructor(age, name){
        this.name = name;
        this.age = age;
    }


    introduce() {
        console.log(`Hi I am ${this.name}, and I am ${this.age} years old.`)
    }

}




rl.question(`What is your name?`, (name)=>{
    rl.question(`How old are you?`, (age)=>{
        const stdnt = new student(age, (name));
        stdnt.introduce();
        rl.close();
    })
})
