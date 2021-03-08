let arr = [];

function run() {
    for(let i = 0 ; i < 5 ; i++) {
        let num = prompt("enter your values")
        arr.push(Number(num));
    }

    document.getElementById('orig_values').innerHTML = arr;
}




function asc_sort(arr) {
    arr.sort(function (a,b){
        return a-b;
    });

    document.getElementById('sort_asc').innerHTML = arr;
}

function dec_sort(arr){
    arr.sort(function (a,b){
        return b-a;
    });
    document.getElementById('sort_des').innerHTML = arr;
}

window.addEventListener('load',function () {
    run();
    asc_sort(arr);
    dec_sort(arr);
})


