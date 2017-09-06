var app = angular.module('Calculator', []);
app.controller('Ctrl', function($scope) {

    $scope.result = "0";
    $scope.newNumber = true;
    $scope.currentOperation = null;
    $scope.operation = ""; 
    $scope.previousValue = null;  
    $scope.currentValue = null;    
    $scope.lastOperation = null;
    var ADD_TOKEN = "+";
    var SUBTRACT_TOKEN = "-";
    var MULTIPLY_TOKEN = "*";
    var DIVIDE_TOKEN = "/";
    var ADD = "adding";
    var SUBTRACT = "subtracting";
    var MULTIPLY = "multiplying";
    var DIVIDE = "dividing";



    setoperation = function (operation) {
        if (operation == ADD) {
            $scope.operation = ADD_TOKEN;
        }
        else if(operation == SUBTRACT) {
            $scope.operation = SUBTRACT_TOKEN;
        }
        else if (operation == MULTIPLY) {
            $scope.operation = MULTIPLY_TOKEN;
        }
        else if (operation == DIVIDE) {
            $scope.operation = DIVIDE_TOKEN;
        }
        else {
            $scope.operation = "";
        }
    };

    toNumber = function (numberString) {
        var result = 0;
        if (numberString) {
            result = numberString * 1;
        }
        return result;
    };
    
    $scope.numberButtonClicked = function (btn) {
        if ($scope.result == "0" || $scope.newNumber) 
        {
            $scope.result = btn;
            $scope.newNumber = false;
        } 
        else {
            $scope.result += String(btn);
        }
        $scope.currentValue = toNumber($scope.result);
    };

    $scope.clear = function () {
        $scope.previousValue = null;
        $scope.currentValue = null;
        $scope.currentOperation = null;
        setresult("0");
    };

    setresult = function (resultString) {
        $scope.result = resultString;
        $scope.newNumber = true;
    };

    $scope.add = function (evtType) {
        if ($scope.currentValue) {
            if ($scope.previousValue && $scope.currentOperation == ADD) {
                $scope.previousValue += $scope.currentValue;
            } 
            else if ($scope.previousValue && $scope.currentOperation == SUBTRACT) {
                $scope.previousValue -= $scope.currentValue;
            }
            else if ($scope.previousValue && ($scope.currentOperation == MULTIPLY)) {
                $scope.previousValue *= $scope.currentValue;
            } 
            else if ($scope.previousValue && ($scope.currentOperation == DIVIDE)) {
                $scope.previousValue /= $scope.currentValue;
            }
            else {
                $scope.previousValue = $scope.currentValue;
            }
        }
        setoperation(ADD);
        setresult(String($scope.previousValue));
        $scope.currentOperation = ADD;
        $scope.newNumber = true;
        $scope.currentValue = null;
        if (evtType === 'btnClick') {
            document.querySelector("#txtData").focus();
        }
    };

    
    $scope.subtract = function (evtType) {
        if ($scope.currentValue) {
            if ($scope.previousValue && ($scope.currentOperation == SUBTRACT)) {
                $scope.previousValue -= $scope.currentValue;
            }
            else if($scope.previousValue && $scope.currentOperation == ADD) {
                $scope.previousValue += $scope.currentValue;
            }
            else if ($scope.previousValue && ($scope.currentOperation == MULTIPLY)) {
                $scope.previousValue *= $scope.currentValue;
            }
            else if ($scope.previousValue && ($scope.currentOperation == DIVIDE)) {
                $scope.previousValue /= $scope.currentValue;
            } 
            else {
                $scope.previousValue = $scope.currentValue;
            }
        }
        setoperation(SUBTRACT);
        setresult(String($scope.previousValue));
        $scope.currentOperation = SUBTRACT;
        $scope.newNumber = true;
        $scope.currentValue = null;
        if (evtType === 'btnClick') {
            document.querySelector("#txtData").focus();
        }
    };

    $scope.multiply = function (evtType) {
        if ($scope.currentValue) {
            if ($scope.previousValue && ($scope.currentOperation == MULTIPLY)) {
                $scope.previousValue *= $scope.currentValue;
            }
            else if ($scope.previousValue && $scope.currentOperation == ADD) {
                $scope.previousValue += $scope.currentValue;
            }
            else if ($scope.previousValue && $scope.currentOperation == SUBTRACT) {
                $scope.previousValue -= $scope.currentValue;
            }
            else if ($scope.previousValue && $scope.currentOperation == DIVIDE) {
                $scope.previousValue /= $scope.currentValue;
            }
            else {
                $scope.previousValue = $scope.currentValue;
            }
        }
        setoperation(MULTIPLY);
        setresult(String($scope.previousValue));
        $scope.currentOperation = MULTIPLY;
        $scope.newNumber = true;
        $scope.currentValue = null;
        if (evtType === 'btnClick') {
            document.querySelector("#txtData").focus();
        }
    };

    $scope.divide = function (evtType) {
        if ($scope.currentValue) {
            if ($scope.previousValue && ($scope.currentOperation == DIVIDE)) {
                $scope.previousValue /= $scope.currentValue;
            }
            else if ($scope.previousValue && $scope.currentOperation == ADD) {
                $scope.previousValue += $scope.currentValue;
            }
            else if ($scope.previousValue && $scope.currentOperation == SUBTRACT) {
                $scope.previousValue -= $scope.currentValue;
            }
            else if ($scope.previousValue && $scope.currentOperation == MULTIPLY) {
                $scope.previousValue *= $scope.currentValue;
            }
            else {
                $scope.previousValue = $scope.currentValue;
            }
        }
        setoperation(DIVIDE);
        setresult(String($scope.previousValue));
        $scope.currentOperation = DIVIDE;
        $scope.newNumber = true;
        $scope.currentValue = null;
        if (evtType === 'btnClick') {
            document.querySelector("#txtData").focus();
        }
    };
     
    $scope.calculate = function (evtType) {
        if (!$scope.newNumber) {
            $scope.currentValue = parseFloat($scope.result);
            $scope.lastValue = $scope.currentValue;
        }
        if ($scope.currentOperation == ADD) {
            $scope.previousValue += $scope.currentValue;
            $scope.lastOperation = ADD;
        }
        else if ($scope.currentOperation == SUBTRACT) {
            $scope.previousValue -= $scope.currentValue;
            $scope.lastOperation = SUBTRACT;
        }
        else if ($scope.currentOperation == MULTIPLY) {
            $scope.previousValue *= $scope.currentValue;
            $scope.lastOperation = MULTIPLY;
        }
        else if ($scope.currentOperation == DIVIDE) {
                if($scope.currentValue==0){
                    alert("Number can't be divided by zero");
                    $scope.result= $scope.previousValue;
                }
                else{
                    $scope.previousValue /= $scope.currentValue;
                    $scope.lastOperation = DIVIDE;
                }
        }
        else {
            if ($scope.lastOperation) {
                if ($scope.lastOperation == ADD) {
                    if ($scope.previousValue) {
                        $scope.previousValue += $scope.lastValue;
                    }
                    else {
                        $scope.previousValue = 0;
                    }
                }
                else if ($scope.lastOperation == SUBTRACT) {
                    if ($scope.previousValue) {
                        $scope.previousValue -= $scope.lastValue;
                    }
                    else {
                        $scope.previousValue = 0;
                    }
                }
                else if ($scope.lastOperation == MULTIPLY) {
                    if ($scope.previousValue) {
                        $scope.previousValue *= $scope.lastValue;
                    } 
                    else {
                        $scope.previousValue = 0;
                    }
                }
                else if ($scope.lastOperation == DIVIDE) {
                    if ($scope.previousValue) {
                        $scope.previousValue /= $scope.lastValue;
                    }
                    else {
                        $scope.previousValue = 0;
                    }
                }
            }
            else {
                $scope.previousValue = 0;
            }
        }
        setresult($scope.previousValue);
        setoperation();
        $scope.currentOperation = null;
        $scope.currentValue = null;
        if (evtType === 'btnClick') {
            document.querySelector("#txtData").focus();
        }
    };
    
    $scope.getkeys=function(e){
        if(e.keyCode>=96 &&  e.keyCode<=105 ){
            var value=e.keyCode-96;
            $scope.name="keydown";
            e.preventDefault();
            $scope.numberButtonClicked(value)
        }
        else if(e.key=='.'){
            var value=e.key;
            $scope.name="keydown";
            e.preventDefault();
            $scope.numberButtonClicked(value)
        }
        else if(e.keyCode==107){
            e.preventDefault();
            $scope.add()
        }
        else if(e.keyCode==109){
            e.preventDefault();
            $scope.subtract()
        }
        else if(e.keyCode==106){
            e.preventDefault();
            $scope.multiply()
        }
        else if(e.keyCode==111){
            e.preventDefault();
            $scope.divide()
        }
        else if(e.keyCode==13){
            $scope.calculate()
        }
        else if(e.keyCode==8){
            $scope.clear()
        }
        else{
            alert("Please Enter On Numeric Value");
            e.preventDefault();
        }
    }   
});
