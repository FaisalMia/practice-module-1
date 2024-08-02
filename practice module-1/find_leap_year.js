const year = 2030;

if((year%4 == 0 && year%100 != 0) || (year%400 == 0))
    console.log("This is a leap year.")
else
    console.log("Not leap year")