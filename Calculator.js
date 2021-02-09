
var screenString="0";
var num1=0,num2=0,result=0;
var operator="";
var operatorFlag=false;
var debug='';
var debugFlag=false;

function AC(){
    if(debugFlag){debug=debug+"->AC";}
    num1=0, num2=0, result=0;
    screenString="0";
    operator="";
    operatorFlag=false;
    screenPrint();

}

function equal(){
    if(debugFlag){debug=debug+"->equal";}
    if(operatorFlag && num2>0){
        switch(operator){
            case "+":
                result=num1+num2;
                break;
            case "*":
                result=num1*num2;
                break;
            case "-":
                result=num1-num2;
                break;
            case "/":
                result=num1/num2;
                break;
            case "%":
                result=num1%num2;
                break;
        }

    }else{
        result=num1;
    }
    screenString=result;
    screenPrint();
    num1=result;
    num2=0;
    operator="";
    operatorFlag=false;
    return null;
}

function keyPress(event){
    let key1=event.target.innerText;
    if(debugFlag){debug=debug+"->keyPress:"+key1;}
    if(isNaN(key1)){
        switch (key1){
            case 'AC':
                AC();
                break;
            case '=':
                equal();
                break;
            case "+":
                if(operatorFlag) { break;}
                operator="+";
                operatorFlag=true;
                createScreenDisplay()
                break;
            case "-":
                if(operatorFlag) { break;}
                operator="-";
                operatorFlag=true;
                createScreenDisplay()
                break;
            case "*":
                if(operatorFlag) { break;}
                operator="*";
                operatorFlag=true;
                createScreenDisplay()
                break;
            case "/":
                if(operatorFlag) { break;}
                operator="/";
                operatorFlag=true;
                createScreenDisplay()
                break;
            case "%":
                if(operatorFlag) { break;}
                operator="%";
                operatorFlag=true;
                createScreenDisplay()
                break;
            case "+/-":
                if(operatorFlag) { break;}
                operator="+/-";
                num1=-1*num1;
                createScreenDisplay()
                break;
        }
        if(operatorFlag && num1==0){
            AC();
        }

    }else{
        if(num1<99999999999999 && num2<99999999999999){
            if(operatorFlag){
                num2=num2*10+parseInt(key1);
                createScreenDisplay()

            }else{
                num1=num1*10+parseInt(key1);
                //alert('hello:'+num1);
                createScreenDisplay()
            }
        }
    }
    if(debugFlag){alert(debug);}
    return null;
};

function createScreenDisplay(){
    if(debugFlag){debug=debug+"->createScreenDisplay";}
    if (operatorFlag){
        if(num2==0){
            screenString=num1+operator;
        }else {
            screenString=num1+operator+num2;
        }
    }else{
        screenString=num1;
    }
    screenPrint();
    return null;

}

/*
function checkMultipleOperator(){
    if(operatorFlag){
        return break;
    }
}
*/

function screenPrint(){
    if(debugFlag){debug=debug+"->screenPrint:"+screenString;}
    let screenElement=document.getElementById("CalcScreen");
    screenString=screenString.toString();
    screenElement.innerText=screenString;
    //alert(screenString.length);

    if(screenString.length>10){
        if(screenString.length>16){
            screenElement.style.fontSize="2rem";
        }else{
            screenElement.style.fontSize="3rem";
        }
    }else{
        screenElement.style.fontSize="5rem";
        screenElement.style.marginTop;
    } /**/
    //alert(screenString);
    return null;
}

function modifyLayout(){
    let fetchedTag=document.getElementById("body");
    let ft1=document.getElementsByClassName("Operation");
    //alert(ft1.length)
    if(isMobile1()==true){
        //alert("mobile")
        //ft1.forEach(function(obj) {obj.style.fontSize="5rem";});
        ft1[0].style.fontSize="5rem";
        fetchedTag.style.maxHeight="90vh";
        fetchedTag.style.maxWidth="98%";
    }else{
        //alert("non mobile");
        fetchedTag.style.maxHeight="700px";
        fetchedTag.style.maxWidth="450px";
        //ft1.forEach(function(obj) {obj.style.fontSize="2.1rem";});
    }

}

// ****************** Find device type *********************

function isMobile() {
    let check = false;
    (function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
            check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}


// ************* Change layout based on device type **************

function isMobile1(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    }else{
        return false;
    }
}




//window.addEventListener("DOMContentLoaded",changeLayout());
window.addEventListener("load",modifyLayout);