function attempt (available, allowed, preferred) {
    var result = []
  
    

    for (i=0; i<available.length; i++) {
        for (k=0; k<allowed.length; k++) {
            for (j=0; j<preferred.length; j++) {
                
                    if((available[i]==allowed[k]||allowed[k]=='any')&&available[i]==preferred[j]&&result.length<preferred.length&&available[i]!==result[j]) {
                        result.push(available[i])
                        
                    }
                
                
            }
        }
    }


    for (i=0; i<available.length; i++) {
        for (k=0; k<allowed.length; k++) {
            for (j=0; j<preferred.length; j++) {
                
                if((available[i]==allowed[k]||allowed[k]=='any')&&result.length<preferred.length&&available[i]!==result[i]) {
                    result.push(available[i])
                }
               
            }
        }
    }
    
    function unique(arr) {
        let result = [];
      
        for (let str of arr) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
      
        return result;
      }
  
    result.sort()
    if(result.length>0) {
        alert(unique(result))  
    }
    else {
        alert('error')
    }
}




