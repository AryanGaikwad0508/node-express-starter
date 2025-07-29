import https from "https";
import  Readline  from "readline";
import chalk from "chalk";


const rl = Readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const apikey = '1eeccfb59edc61c8c944107e';
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const convertCurrency = (amount, rate) => {
    return(amount * rate).toFixed(2)
}

https.get(url, (response) => {
    let data = "";
    response.on('data', (chunk) => {
        data += chunk;
    })
    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;

        // amount = 90
        // curry = inr 
        // 90usd = how much inr 
        // 1usd = 84.9667
        // 90usd = ? 
        // 90 * 84.9667

        rl.question('Enter the amount in USD: ', (amount) => {
            rl.question('Enter the target currency (e.g., INR, EUR, NPR):', (curry)=> {
                const rate = rates[curry.toUpperCase()];
                if(rate) {
                    console.log(chalk.blue.bgRed.bold(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${curry}`))
                }else{
                    console.log(`Invalid currency Code`)
                }
                rl.close();
            })
        })
    })
})