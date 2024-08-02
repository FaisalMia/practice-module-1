// let x = [1000,2000,3000], y = 5400;
// let x = [1000,2000,2500], y = 5000;
// let x = [900,2700,3400], y = 10000;
let y = 1000,x = [900,2700,3400];
function monthlySavings(x,y){

    // if(y,x)
    //     return "invalid input";
    let tax = 0;
    for(let i=0;i<x.length;i++)
    {
        if(x[i] >= 3000)
        {
             tax = x[i]*.2;
        }
    }

    let sum = 0;
    for(let i=0;i<x.length;i++)
    {
        sum+=x[i];
    }

    const savings = sum - (tax + y);

    return savings;

}

const res = monthlySavings(x,y)



if(res > 0)
    console.log(res)
    
else if(res < 0)
    console.log("earn more")
    
else if(res == 0)
    console.log(0)
else if(res == "invalid input")
    console.log("Invalid input")





