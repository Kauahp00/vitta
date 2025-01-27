let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Função para aplicar máscara no telefone enquanto o usuário digita
document.getElementById('phone').addEventListener('input', function(event) {
    var phone = event.target.value;
    phone = phone.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
    if (phone.length > 10) {
      phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (phone.length > 5) {
      phone = phone.replace(/(\d{2})(\d{5})/, '($1) $2');
    } else if (phone.length > 2) {
      phone = phone.replace(/(\d{2})/, '($1)');
    }
    event.target.value = phone;
  });

  // Validação do formulário
  document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio normal do formulário

    // Coleta os valores dos campos
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;

    // Expressão regular para validar o formato do telefone (ex: (11) 99999-9999)
    var phonePattern = /^\(\d{2}\)\s\d{5}-\d{4}$/;

    // Verifica se o telefone está no formato correto
    if (!phonePattern.test(phone)) {
      alert("Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.");
      return; // Impede o envio do formulário se o telefone estiver errado
    }

    // Cria o texto que será enviado pelo WhatsApp
    var whatsappMessage = `Olá, meu nome é ${name}. Estou interessado no serviço de ${service} e gostaria de saber mais informações, como valores, pacotes disponíveis e outros detalhes. Além disso, gostaria de saber quais são os horários disponíveis para o dia ${date}.`;

    // Formata a URL para redirecionar ao WhatsApp com a mensagem
    var whatsappUrl = `https://wa.me/5515997454357?text=${encodeURIComponent(whatsappMessage)}`;

    // Redireciona para o WhatsApp
    window.open(whatsappUrl, '_blank');
  });




  


  function showMore(fisioCard) {
    const card = document.getElementById(fisioCard);

    // Remove a classe ativa de todos os cards
    document.querySelectorAll('.box').forEach((item) => {
        item.classList.remove('active');
    });

    // Atualiza o conteúdo do card usando innerHTML
    card.innerHTML = `
        <h3>Fisioterapia</h3>
        <p>Fisioterapia é essencial para recuperação de lesões, alívio de dores e melhora na qualidade de vida. Nossos especialistas estão prontos para cuidar de você!</p>
        <button class="btn" onclick="resetCard('${fisioCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
    `;

    // Adiciona a classe ativa para destacar o card
    card.classList.add('active');
}

function resetCard(fisioCard) {
    const card = document.getElementById(fisioCard);

    // Volta o conteúdo inicial usando innerHTML
    card.innerHTML = `
        <img src="fisio.png" alt="Fisioterapia">
        <h3>Fisioterapia</h3>
        <p>Recupere seus movimentos, vença a dor e viva com mais liberdade.</p>
        <button class="btn" onclick="showMore('${fisioCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
    `;

    // Remove a classe ativa para voltar ao estilo original
    card.classList.remove('active');
}


function showMore1(acuCard) {
    const card = document.getElementById(acuCard);

    // Remove a classe ativa de todos os cards
    document.querySelectorAll('.box').forEach((item) => {
        item.classList.remove('active');
    });

    // Atualiza o conteúdo do card usando innerHTML
    card.innerHTML = `
        <h3>Acupuntura</h3>
        <p>Acupuntura é fundamental para alívio de dores, controle de estresse e melhora do bem-estar. Nossos especialistas estão prontos para cuidar de você!</p>
        <button class="btn" onclick="resetCard1('${acuCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
    `;

    // Adiciona a classe ativa para destacar o card
    card.classList.add('active');
}

function resetCard1(acuCard) {
    const card = document.getElementById(acuCard);

    // Volta o conteúdo inicial usando innerHTML
    card.innerHTML = `
        <img src="acupuntura.png" alt="acupuntura">
        <h3>Acupuntura</h3>
        <p>Equilibre sua energia, relaxe a mente e sinta o poder da harmonia.</p>
        <button class="btn" onclick="showMore1('${acuCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
    `;

    // Remove a classe ativa para voltar ao estilo original
    card.classList.remove('active');
}








function showMore2(ventCard) {
  const card = document.getElementById(ventCard);

  // Remove a classe ativa de todos os cards
  document.querySelectorAll('.box').forEach((item) => {
      item.classList.remove('active');
  });

  // Atualiza o conteúdo do card usando innerHTML
  card.innerHTML = `
      <h3>Ventosaterapia</h3>
      <p>Ventosaterapia é eficaz no alívio de dores, melhora da circulação e redução de tensões. Nossos especialistas estão prontos para cuidar de você!</p>
      <button class="btn" onclick="resetCard2('${ventCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
  `;

  // Adiciona a classe ativa para destacar o card
  card.classList.add('active');
}

function resetCard2(ventCard) {
  const card = document.getElementById(ventCard);

  // Volta o conteúdo inicial usando innerHTML
  card.innerHTML = `
      <img src="ventosas.png" alt="ventosas">
      <h3>Ventosaterapia</h3>
      <p>Desbloqueie a energia, alivie tensões e melhore o fluxo sanguíneo.</p>
      <button class="btn" onclick="showMore2('${ventCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
  `;

  // Remove a classe ativa para voltar ao estilo original
  card.classList.remove('active');
}





function showMore3(massagCard) {
  const card = document.getElementById(massagCard);

  // Remove a classe ativa de todos os cards
  document.querySelectorAll('.box').forEach((item) => {
      item.classList.remove('active');
  });

  // Atualiza o conteúdo do card usando innerHTML
  card.innerHTML = `
      <h3>Liberação Miofacial</h3>
      <p>A liberação miofascial alivia tensões musculares e melhora a mobilidade. Nossos especialistas estão prontos para cuidar de você!</p>
      <button class="btn" onclick="resetCard3('${massagCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
  `;

  // Adiciona a classe ativa para destacar o card
  card.classList.add('active');
}

function resetCard3(massagCard) {
  const card = document.getElementById(massagCard);

  // Volta o conteúdo inicial usando innerHTML
  card.innerHTML = `
      <img src="massagem-corporal.png" alt="ventosas">
      <h3>Liberação Miofacial</h3>
      <p>Alivie dores e recupere movimentos com técnicas eficazes.</p>
      <button class="btn" onclick="showMore3('${massagCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
  `;

  // Remove a classe ativa para voltar ao estilo original
  card.classList.remove('active');
}







function showMore4(coneCard) {
  const card = document.getElementById(coneCard);

  // Remove a classe ativa de todos os cards
  document.querySelectorAll('.box').forEach((item) => {
      item.classList.remove('active');
  });

  // Atualiza o conteúdo do card usando innerHTML
  card.innerHTML = `
      <h3>Cone Hindu</h3>
      <p>O cone hindu é eficaz no alívio de dores e promoção do bem-estar. Nossos especialistas estão prontos para cuidar de você!</p>
      <button class="btn" onclick="resetCard4('${coneCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
  `;

  // Adiciona a classe ativa para destacar o card
  card.classList.add('active');
}

function resetCard4(coneCard) {
  const card = document.getElementById(coneCard);

  // Volta o conteúdo inicial usando innerHTML
  card.innerHTML = `
      <img src="cone.png" alt="ventosas">
      <h3>Cone Hindu</h3>
      <p>Equilibre seu corpo e mente, harmonize sua energia com a técnica do cone hīndu.</p>
      <button class="btn" onclick="showMore4('${coneCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
  `;

  // Remove a classe ativa para voltar ao estilo original
  card.classList.remove('active');
}





function showMore5(livreCard) {
  const card = document.getElementById(livreCard);

  // Remove a classe ativa de todos os cards
  document.querySelectorAll('.box').forEach((item) => {
      item.classList.remove('active');
  });

  // Atualiza o conteúdo do card usando innerHTML
  card.innerHTML = `
      <h3>Livre</h3>
      <p>livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre   </p>
      <button class="btn" onclick="resetCard5('${livreCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
  `;

  // Adiciona a classe ativa para destacar o card
  card.classList.add('active');
}

function resetCard5(livreCard) {
  const card = document.getElementById(livreCard);

  // Volta o conteúdo inicial usando innerHTML
  card.innerHTML = `
      <img src="fisio.png" alt="ventosas">
      <h3>Livre</h3>
      <p>livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre livre</p>
  
      <button class="btn" onclick="showMore5('${livreCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
  `;

  // Remove a classe ativa para voltar ao estilo original
  card.classList.remove('active');}