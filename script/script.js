function henrique() {
  let div = document.getElementById('primeira-foto')

  div.innerHTML = '<div class="row justify-content-center opa"id=cabeçalho><div class="perfil-foto col-2"><img alt=""src=./img/henrique-perfil.JPG class=perfil-foto></div><div class="nome-user col-8"><h3 class=nome-user>Henrique Pignaton</h3><h5 class=cidade>Sitio Posada - Santa Tereza, ES</h5></div><div class="col-1 tres-bolinhas"><h2>...</h2></div></div><div class="fed foto-fed"><img alt=""src=./img/image3.jpeg height=100% width=100%><div class=row><div class=col-1><i class="bi bi-heart"></i></div><div class=col-1><i class="bi bi-chat"></i></div><div class=col-1><i class="bi bi-send"></i></div><h6 style=margin-bottom:0>Curtido por sdjfkak.ppo2 e outras 140 pessoas</h6></div></div>'

}


//funcao de abrir camera
function heartred() {
  let input = document.getElementById('core')
  input.style.color = 'red'
}

function camera() {

  let div = document.getElementById("camera")
  div.innerHTML = '<video id="video"></video>'

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (mediaStream) {
      var video = document.querySelector('#video');

      video.srcObject = mediaStream;
      video.play();
    })

}


//compartilhamento

const shareData = {
  title: 'Henrique Pignaton',
  text: 'Acesse minha rede social de fotos feita em HTML, CSS e JAVASCRIPT',
  url: 'https://henrique-pignaton.github.io/Rede-social-de-fotos/',
}

const btn = document.getElementById('compartilharlink');

// Deve ser acionado algum tipo de "ativação do usuário"
btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
  } catch (err) {
  }
});

// função de denunciar
function denunciar() {
  alert('Publicação denunciada!')
}


