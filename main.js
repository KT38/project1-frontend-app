"use strict;"

function answer(){
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var output = document.getElementById('output');

    // 文字列として結合
    // var result = input1.value + input2.value;

    // 整数として足し算
    var result = parseInt(input1.value) + parseInt(input2.value);

    output.textContent = result
}