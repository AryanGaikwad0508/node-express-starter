// 1: enter the file name
// 2: enter the content

import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileCreation = () => {
    rl.question('Enter Your filename: ', (filename) => {
        rl.question("Enter the Content for your file: ",(content) => {
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if(err) {
                    console.log(`Error Writing the file: ,${err.message}`)
                }else{
                    console.log(`File "${filename}.txt" Created Sucessfully !`);
                }
                rl.close();
            }) 
        })
    })
}
fileCreation();
