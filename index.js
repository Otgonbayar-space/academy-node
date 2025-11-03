
import * as fs from "node:fs";

const a = new Promise(resolve  => {
    resolve(`12341234`);

})


a.then(data => {
    console.log(data)

});