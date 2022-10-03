function main(){
    console.log("a");
    setTimeout(
        function show(){
            console.log("b");
        }
    ,0);

    console.log("c");
}

main();