console.log('hello, World!')
// Fibonacci with Loops
function fibLoops(n){
    let array = []
    if(n <= 0){
        throw new Error('number should be 1 or higher')
    }
    for(let i = 0; i <= n; i++){
        if(i < 2){
            array.push(i)
        }else{
            let formula = (array[i - 1] + array[i - 2])
            array.push(formula) 
        }
    }
    return array
}

// return fibonacci numbers on given arg
function findFibRec(n){
    let array = []
    if(n <= 1){
        return 0       
    }else if(n == 2){
        return 1
    }else{
        return findFibRec(n-1) + findFibRec(n-2)
    }   
}

// Fibonacci with recursion return an array with fibonacci numbers up to given argument
function fibRec(n){
    if(n <= 0 ){
        return 'Please insert a valid number'
    }
    if(n === 1){
        return [0, 1]
    }else{
        let array = fibRec(n-1)
        array.push(array[array.length - 1] + array[array.length - 2])
        return array
    }
}


console.log(fibLoops(5))
console.table(findFibRec(3))
console.log(fibRec(5))

/** Flowchart fibonacci recursion funtion
 * testFib(2)
 *  array = testFib(1)
 *   testFib(1) == [0, 1]
 *  array = [0, 1]
 *  array.push(array[array.length - 1] + array[array.length - 2])
 *   array.push(array[1] + array[0])
 *    array.push(1 + 0) // array.push(1)
 *  array = [0, 1, 1]
 * return array
 * testFib(2) == [0, 1, 1]  
 */

/** fibRec(3)
 * testFib(3)
 *  testFib(3) return == array = testFib(2) // n !== 1
 *   testFib(2)
 *    array = testFib(1) // n === 1 so return [0, 1]
 *    array = [0, 1]
 *    array.push(array[array.length - 1] + array[array.length - 2])
 *    array.push(array[1] + array[0]) // array.push(1)
 *    array = [0, 1, 1]
 *  testFib(2) == [0, 1, 1]
 *  array = [0, 1, 1]
 *  array.push(array[array.length - 1] + array[array.length - 2])
 *  array.push(array[2] + array[1]) // array.push(2)
 *  array == [0, 1, 1, 2]  
 * testFib(3) == [0, 1, 1, 2]
 */




