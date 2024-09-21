function circle(radius){
    let result = Math.PI * radius * radius;
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${result}`)
}

const arguments = process.argv.slice(2);

circle(arguments[0]*1);