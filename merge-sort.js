let arr = [2, 1, 5, 0, 4, 3]
// let sorted = arr.sort((a, b)=>{return a - b })
console.clear()

function merge(ar1, ar2){
    let array = []
    let i = 0
    let j = 0
    while(i < ar1.length && j < ar2.length){
        if(ar1[i] > ar2[j]){
            array.push(ar2[j])
            j++
        }    
        else{
            array.push(ar1[i])
            i++
        }        
    }
    for(; i < ar1.length; i++){
        array.push(ar1[i])
    }
    for(; j < ar2.length; j++){
        array.push(ar2[j])
    }
    return array
}

function mergeSort(arr){
    if(1 < arr.length){
        let mid =  (1 +arr.length)/ 2
        let leftSide = mergeSort(arr.slice(0, mid))
        let rightSide = mergeSort(arr.slice(mid, arr.length))
        let merged = merge(leftSide, rightSide)
        return merged
    }else{ // Base Case
        return arr
    }
}


let merged = mergeSort(arr)
console.log(merged)