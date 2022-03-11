const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('Cómo estás') || text.includes('cómo estás')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Estoy bien:)';
      texts.appendChild(p)
    }
    if (text.includes("Cuál es tu nombre") || text.includes('cuál es tu nombre')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Mi nombre es Jonathan';
      texts.appendChild(p)
    }
    if (text.includes("Adiós") || text.includes('adiós')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Nos vemos luego:(';
        texts.appendChild(p)
      }
    if (text.includes('abre mi Instagram') || text.includes('Abre mi Instagram')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Abriendo Instagram';
      texts.appendChild(p)
      console.log('Abriendo Instagram')
      window.open('https://www.instagram.com/jhonny_zamitiz/')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();