export function conectarDB() {
  const abrirConexion = window.indexedDB.open('crm', 1)

  abrirConexion.onerror = function() {
    console.log('hubo un error');
  }

  abrirConexion.onsuccess = function() {
    DB = abrirConexion.result
  }
}

export function imprimirAlerta(mensaje, tipo) {
  let alerta = document.querySelector('.alerta')
  
  if(!alerta) {
    
    const div = document.createElement('div')
    div.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border-solid', 'border-2', 'alerta')
    
    if(tipo === 'error') {
      div.classList.add('bg-red-100', 'border-red-100', 'text-red-700', 'border-red-400')
    } else {
      div.classList.add('bg-green-100', 'border-green-100', 'text-green-700', 'border-green-400')
    }
    div.textContent = mensaje
    form.appendChild(div)
    
    setTimeout(() => {
      div.remove()
    }, 2000);
  }   
}