function checkSelection() {
  var checkboxes = document.getElementsByName('servicos');

  var selectedCheckbox = null;

  checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
          selectedCheckbox = checkbox.id;
      }
  });

  if (selectedCheckbox === null) {
    alert("No checkbox selected.");
  } else {
    return selectedCheckbox;
  }
}

var telefoneInput = document.getElementById('phoneNumberInput');

telefoneInput.addEventListener('blur', function() {
  var numero = telefoneInput.value.replace(/\D/g, '');
  var formatado;

  if (numero.length === 11) {
    formatado = numero.substr(0, 2) + ' ' + numero.substr(2, 1) + ' ' + numero.substr(3, 4) + '-' + numero.substr(7, 4);
  } else {
    formatado = numero;
  }

  telefoneInput.value = formatado;
});

function toggleCheckbox(currentCheckbox) {
  var checkboxes = document.getElementsByName('servicos');
  const valorServico = document.getElementById("valor_servico");
  const valorTotal = document.getElementById("valor_total");
  const rsServico = document.getElementById("rs_servico");
  const rsTotal = document.getElementById("rs_total");

  valorServico.innerHTML = parseInt(currentCheckbox.value);
  valorTotal.innerHTML = parseInt(currentCheckbox.value);

  if (currentCheckbox.value == "Nao Disponivel") {
    valorServico.innerHTML = currentCheckbox.value;
    valorTotal.innerHTML = "Entre em contato";
    rsServico.innerHTML = "";
    rsTotal.innerHTML = "";
  } else {
    rsServico.innerHTML = "R$";
    rsTotal.innerHTML = "R$";
  }

  checkboxes.forEach(function(checkbox) {
    if (checkbox !== currentCheckbox) {
      checkbox.checked = false;
    }
  });
}

function hiddenAlertBox() {
  const alertBox = document.getElementById("alert");
  alertBox.style.visibility = "hidden";
}
