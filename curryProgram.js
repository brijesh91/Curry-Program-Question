function makeCurry(arr) {
    arr.sort()
    let max = arr[arr.length - 1]
    console.log(max)
    let sum = 0
    let curry = []
    for(let i=0;i<arr.length - 1;i++) {     //because max is placed on last index
        for(let j=i;j< arr.length - 1;j++) {
            sum += arr[j]
            console.log(sum)
            if(sum != arr[j] && sum != max) {
                sum -= arr[j]
                continue
            }
            else if(sum === max) {
                console.log(`sum matched for ${i} and ${j}`)
                sum = 0
                // use indexes i and j to allot any variable P or Q 
                //and store it in curry array which can be later printed as String
                curry[i] = 'P'
                curry[j] = 'P'
                break
            }
        }
    }
    return curry.toString()
}

let c = makeCurry([3,7,2,5,4])
console.log(c)

// Logic used, Find max value and for the rest elements get the sum which is equal to the max