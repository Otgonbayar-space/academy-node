import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});





class rectangle{
        constructor(height, width) {
            this.height = height;
            this.width = width;

        }

        area() {
            return this.height*this.width;
        }

        perimeter(){
            return 2*(this.height+this.width); 
        
        
        
        }
    
    
        calculate(){
            console.log(`Area: ${this.area()}, Perimeter: ${this.perimeter()}.`)
        }
    
    
    }




    rl.question("Height?:", (height)=>{
        rl.question("Width?:", (width)=>{
            const rect = new rectangle(parseFloat(height), parseFloat(width));
            rect.calculate()
            rl.close();
        })
    }
    )