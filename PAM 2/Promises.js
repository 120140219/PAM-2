async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("hallo Rafi, Selamat Datang!!");}, 3000);
    });
    console.log(await myPromise)
  }
  
  myDisplay();