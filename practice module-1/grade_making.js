const marks = 58;

if(marks > 100 || marks < 0)
    console.log("Invalid marks")
else if(marks >= 80)
    console.log("You've got A+.")
else if(marks >= 70)
    console.log("You've got A.")
else if(marks >= 60)
    console.log("You've got A-.")
else if(marks >= 50)
    console.log("You've got B.")
else if(marks >= 40)
    console.log("You've got C.")
else if(marks >=33)
    console.log("You've got D.")
else
    console.log("You're failed.")