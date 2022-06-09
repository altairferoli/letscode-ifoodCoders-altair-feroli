//console.log("Hello World");

// callback

console.log("Passo 1");

function AnyComplex(a, b, callback) {
    const c = a + b;
    setTimeout(() => {
        callback(c);    
    }, 2000);
}

console.log("Passo 2");

AnyComplex(2, 3, (result) => {
    console.log("Resultado: " + result);

    AnyComplex(result, 10, (result2) => {
        console.log("Resultado + 10: " + result2);
    });
});

console.log("Passo 3");  

// promise

new Promise((resolve, err) => {
    const c = 10 + 5;
    resolve(c);
}).then((result) => {
    console.log("Resultado Promise: " + result);
}).finally(() => {
    console.log("Acabou!");    
});

// async/await

async function GetAsync() {
    const result = await fetch("https://");
}

GetAsync();