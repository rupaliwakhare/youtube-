let api_key = "AIzaSyCqLqYFFoqDUvXTHh8iPDW8ya64eFowGgk";
// console.log(api_key);
let api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet";
// console.log(api);
let search = document.getElementById("search");
// let main = document.getElementById("main");



const getData = async()=>{
  let res = await fetch(`${api}&q=${search.value}&key=${api_key}`);
  // console.log(res);
  let data = await res.json();
  console.log(data);
  let main = document.getElementById("main");
  let title = document.createElement("h2");
  let 
  // console.log(title);
  
  // console.log(main);
  
  
}

const delay = ()=>{
 setTimeout(getData,2000)
  
}