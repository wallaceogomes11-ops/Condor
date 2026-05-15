// ===== NAVEGAÇÃO ENTRE TELAS =====

function showScreen(screenId) {
  // Esconde todas as telas
  document.querySelectorAll('.screen').forEach(function (s) {
    s.classList.remove('active');
  });

  // Mostra a tela solicitada
  var target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }

  // Limpa campos ao voltar para home
  if (screenId === 'screen-home') {
    resetForms();
  }
}

// ===== RESET DOS FORMULÁRIOS =====

function resetForms() {
  // Comprovante
  var compMotorista = document.getElementById('comp-motorista');
  var compNf = document.getElementById('comp-nf');
  if (compMotorista) compMotorista.value = '';
  if (compNf) compNf.value = '';
  resetPhoto();

  // Atraso
  var atrMotorista = document.getElementById('atr-motorista');
  var atrNf = document.getElementById('atr-nf');
  var atrData = document.getElementById('atr-data');
  if (atrMotorista) atrMotorista.value = '';
  if (atrNf) atrNf.value = '';
  if (atrData) atrData.value = '';
}

// ===== FOTO FAKE =====

function fakePhotoClick(element) {
  var placeholder = document.getElementById('photo-placeholder');
  var added = document.getElementById('photo-added');

  if (added.style.display === 'none') {
    // Simula adição de foto
    placeholder.style.display = 'none';
    added.style.display = 'flex';
    element.style.borderColor = '#1DB954';
    element.style.background = '#e8f8ee';
  } else {
    // Remove foto
    placeholder.style.display = 'flex';
    added.style.display = 'none';
    element.style.borderColor = '';
    element.style.background = '';
  }
}

function resetPhoto() {
  var placeholder = document.getElementById('photo-placeholder');
  var added = document.getElementById('photo-added');
  var photoArea = document.querySelector('.photo-area');

  if (placeholder) placeholder.style.display = 'flex';
  if (added) added.style.display = 'none';
  if (photoArea) {
    photoArea.style.borderColor = '';
    photoArea.style.background = '';
  }
}

// ===== VALIDAR COMPROVANTE =====

function validarComprovante() {
  var motorista = document.getElementById('comp-motorista').value.trim();
  var nf = document.getElementById('comp-nf').value.trim();
  var photoAdded = document.getElementById('photo-added').style.display !== 'none';

  if (!motorista) {
    alert('Por favor, informe o nome do motorista.');
    return;
  }

  if (!nf) {
    alert('Por favor, informe o número da nota fiscal.');
    return;
  }

  alert('Comprovante registrado com sucesso');
  showScreen('screen-home');
}

// ===== ENVIAR COMUNICADO =====

function enviarComunicado() {
  var motorista = document.getElementById('atr-motorista').value.trim();
  var nf = document.getElementById('atr-nf').value.trim();
  var data = document.getElementById('atr-data').value;

  if (!motorista) {
    alert('Por favor, informe o nome do motorista.');
    return;
  }

  if (!nf) {
    alert('Por favor, informe o número da nota fiscal.');
    return;
  }

  if (!data) {
    alert('Por favor, informe a nova data de entrega.');
    return;
  }

  alert('Comunicado enviado');
  showScreen('screen-home');
}
