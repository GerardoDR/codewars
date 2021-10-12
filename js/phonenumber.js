function createPhoneNumber(number){
    let PhNum = "("+number[0]+number[1]+number[2]+") "+number[3]+number[4]+number[5]+"-"+number[6]+number[7]+number[8]+number[9];
    return PhNum
}

let phnum = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
console.log (phnum)
phnum = createPhoneNumber([9,8,7,6,5,4,3,2,1,0])
console.log (phnum)
phnum = createPhoneNumber([4,5,6,9,3,2,1,5,6,7])
console.log (phnum)