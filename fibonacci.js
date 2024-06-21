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
        throw new Error('Please insert valid number');
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

/** Flowchart fibonacci recursion function
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
 *   testFib(2) == [0, 1, 1]
 *   array = [0, 1, 1]
 *   array.push(array[array.length - 1] + array[array.length - 2])
 *   array.push(array[2] + array[1]) // array.push(2)
 *  array == [0, 1, 1, 2]  
 * testFib(3) == [0, 1, 1, 2]
 */


/** Fibonacci Recursion function pseudocode
 * function fibRecur(number) 
 * // This condition will only return the first 2 number of fibonacci and the rest will be from sum of two previous number in array
 ** if(number is equal to 1)
 *   then return array of two first number of fibonacci
 *   that is 0 and 1, [0, 1]
 * 
 * else
 *  let array = fibRecur(number - 1), until fibRecur(1)
 *  then array.push(array[length - 1] + array[length - 2]) that will be going from fibRecur(1) until fibRecur(number - 1), line(**)
 *  return array 
 */

