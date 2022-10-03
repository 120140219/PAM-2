const Nama = ()=>{
    console.log("Irfan");
}
Nama();

function sayHello() {
    return " Hello, ";
  }
  function greeting(helloMessage, nama) {
    console.log(helloMessage() + nama);
  }
  
  greeting(sayHello, "Irfan");

function Sapa (){
    return ()=> {
        console.log("Hello!");
    };
}