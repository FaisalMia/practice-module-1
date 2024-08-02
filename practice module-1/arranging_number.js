const number = [1,3,19,5,7,15,9,8,6,13,4,2,10,12,16,,11,20,17,14,18]

const arr_num = (array) =>{
    let newArray = [];
    max_num = array[0];
    for(let i=0;i<array.length;i++)
    {
        let element = max_num;
        if(element < array[i])
        {  
            newArray.push(element);
        }
            
        else
    }
    return newArray;
}

const res = arr_num(number)
console.log(res)