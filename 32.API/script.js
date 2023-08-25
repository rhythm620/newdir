// let data = '{"fact":"A cats nose is as unique as a humans fingerprint.","length":51}';

// let ans = JSON.parse(json_data);
// console.log(ans);
// console.log(ans.fact);

// console.log(data);

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1 = ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data 2 = " , data2.fact);
// })
// .catch((err)=>{
//     console.log("error is ",err);
// });



// let url = "https://catfact.ninja/fact";


// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);

//         let res3 = await fetch(url);
//         let data3 = await res3.json();
//         console.log(data3.fact);
//     }
//     catch(err){
//         console.log(err);
//     }
// }


// **************************************************

// let button = document.querySelector("button");

// button.addEventListener("click",async()=>{
//     let para = document.querySelector("#randomfacts");
//       para.innerText =  await getFacts();
// })

// let url =  "https://catfact.ninja/fact";

// async function getFacts(){
//         try{
//             let res = await fetch(url);
//             let data = await res.json();
//             // console.log(data.fact);
//             return data.fact;
//         }
//         catch(err){
//             console.log(err);
//             return "No fact found";
//         }
//     }


let button = document.querySelector("button");

button.addEventListener("click",async()=>{
    let link = await getImage();
    let image = document.querySelector("#random_image");

    image.setAttribute("src",link);
})


let url = "https://dog.ceo/api/breeds/image/random";

async function getImage(){
    let res = await fetch(url);
    let data= await res.json();

    console.log(data.message);
    return data.message;
}