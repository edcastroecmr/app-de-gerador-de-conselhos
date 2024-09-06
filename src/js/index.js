// ===========consultar API
async function consultarApi(){
    let url = await fetch('https://api.adviceslip.com/advice')
    let response =  await url.json()
    console.log(response)
}
consultarApi()
// ===========consultar API


async function pegarApi(){
      try{
      const url = await fetch('https://api.adviceslip.com/advice');
      const response = await url.json()
      pegarIDdoHTML.innerHTML =  `Conselho # ${response.slip.id}`
      pegarDescription.innerHTML = response.slip.advice 
      
    }catch(error){
      console.log("algo deu errado", error)
    }
}


const pegarIDdoHTML = document.querySelector(".advice-id")
const pegarDescription = document.querySelector(".advice-description")
const pegarButton = document.querySelector(".advice-update")



pegarApi()
pegarButton.addEventListener('click',()=>{
    pegarApi()
})







pegarBotao.addEventListener("click", PegarDadosDoApi)

  PegarDadosDoApi()
