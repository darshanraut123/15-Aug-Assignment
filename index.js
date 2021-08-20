const xhr = new XMLHttpRequest();

xhr.open("get","https://restcountries.eu/rest/v2/all");

xhr.responseType= "json";

xhr.send();

xhr.onload = ()=>{
    const myData = xhr.response;
    //It will filter the objects having population greater than 10 Million
    const a = myData.filter(b=>b.population>10000000);
    //After filtering we are extracting the data and iterating and logging to the console
    a.forEach(obj=>console.log(obj.name));
};