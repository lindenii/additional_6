module.exports =    function zeros(expression) {
       var exprs=expression.split('*');
    var result=[]
    var fives=0,twos=0,tens=0;

        for(var expr of exprs){
            if(expr.endsWith('!!')) result=factorial(expr,2);
            else
                if(expr.endsWith('!')) result=factorial(expr,1);
            fives+=count(result,5);
            twos+=count(result,2);
            tens+=count(result,10);
        }
        return tens+Math.min(twos,fives);
    }

function factorial(expr,pow){
    var numb=expr.replace(new RegExp('!','g'),'');
    var result=[];
    for(var n=numb;n>0;n-=pow){
        result.push(n);
    }
    return result;
}

function count(array,n){
    var count=0;
    for(var el of array){
        if(n!==10){
            while(true){
                if((el%n===0)&&(el%10!==0)){
                    count++;
                    el=el/n;
                    continue;
                }
                if(el==50){
                    count++;
                    el=el/n;
                }
                else break;
            }
        }
        else{
            while(true){
                if(el%n===0){
                    count++;
                    el=el/n;
                    continue;
                }
                else
                    break;
            }
        }
    }
    return count;
}