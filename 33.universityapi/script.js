let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let ul = document.querySelector("ul");

    let name = document.querySelector("input").value;

    let meaning = await getmeaning(name);
    let li =  document.createElement("li");
    if(li.innerText !=""){
        li.innerText ="";
    }

    li.innerText = meaning;
    ul.appendChild(li);

    name.innervalue = "";
    
})
async function getmeaning(name){
    try{
        let res  = await fetch(url+name);
        let data = await res.json();
    
      return data[0].meanings[0].definitions[1].definition;
    }

    catch(error){
        return "Error found",error;
    }

}