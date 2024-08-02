var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const biggest_name =(array) =>{
    let big_name = array[0];
    for(let i=0;i<array.length;i++)
    {
        if(array[i].length > big_name.length){
            big_name = array[i];
        }
    }
    return big_name;
}

const result = biggest_name(friends)
console.log(result)