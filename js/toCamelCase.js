//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//"the-stealth-warrior" gets converted to "theStealthWarrior"
//"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let splitted = str.split("-")
    
    let uppered= splitted.map((word,i) => {
        if (i !== 0){
            let upper = word[0].toUpperCase()+word.slice(1)
            return upper
        } else {
            return word
        }
    })
    let final= uppered.join('')

    console.log (final)
}

toCamelCase("the-stealth-warrior")
// toCamelCase("The_stealth_warrior")