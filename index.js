const sortedStr = function(string){
    let obj = {}
    let ordered = []
    for( let char of string){
        obj[char] ? obj[char]+= 1 : obj[char] = 1
    }

    for(let str in obj){
        ordered.push([str, obj[str]])
    }

    ordered.sort((a,b)=>{
        return b[1]- a[1]
    })

    let final = ''

    for(let [key, val] of ordered){
       let i = 1 
       while(i <= val){
           final += key
           i++
       }
    }
//  console.log(final)

 return final

}

const stringSet = function(A,B){
   
    let obj = {}
    let result = ''
    for(let char of B){
         obj[char] ? obj[char]+= 1 : obj[char] = 1
    }

    let j = 0 
    
    for(let i = 0; i < A.length; i++){
        if(obj[A[i]] !== undefined){
            obj[A[i]]--
            while(Object.keys(obj).every((key)=> obj[key] <= 0)){
                let current = A.slice(j, i+1)

                if(!result || current.length < result.length){
                    result = current
                }
                if(obj[A[j]] !== undefined){
                    obj[A[j]]++
                }
                j++
            }
        }
    }
    // console.log('results', result ? result : null)

    return result ? result : null

}

stringSet("shdjkskaboicabcic", "abc")
stringSet("h", "def")
stringSet("jhglhijksk", "ghi")
stringSet("abcdefgh", "jklm")

sortedStr('samantha')
sortedStr('apple')
sortedStr('gghhts')