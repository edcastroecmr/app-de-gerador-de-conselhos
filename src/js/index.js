const pegarBotao = document.querySelector(".advice-update")
const pegarId = document.querySelector(".advice-id")
const pegarDesc = document.querySelector(".advice-description")

async function PegarDadosDoApi(){
    try{
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    if(!response.ok){
        throw new Error("Não foi possível pegar os dados")
    }
    const respostaJson = await response.json();
    const adviceId = `Conselho #${respostaJson.slip.id}`;
    const adviceText = `"${respostaJson.slip.advice}"`;
    
    console.log(respostaJson);
   
     pegarId.innerText = adviceId;
     pegarDesc.innerText = adviceText;
    }catch(error){
        console.log("Erro ao tentar buscar as informações da API", error)
    }
}









pegarBotao.addEventListener("click", PegarDadosDoApi)

  PegarDadosDoApi()