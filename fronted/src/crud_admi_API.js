// Función para obtener la lista de pedidos
async function obtenerPedidos() {
	try {
		const response = await fetch('http://localhost:3000/pedidos'); // Reemplazar con la URL del endpoint correspondiente
		const data = await response.json();

		// Limpiar la tabla
		const tablaCuerpo = document.getElementById('tabla-cuerpo');
		tablaCuerpo.innerHTML = '';

		// Recorrer los pedidos y agregar filas a la tabla
		data.forEach((pedido) => {
			const fila = document.createElement('tr');
			fila.classList.add('tabla-fila');

			fila.addEventListener('click', function () {
				// Obtener los valores de la fila
				const idPedido = fila.cells[0].textContent;
				const nombreCliente = fila.cells[1].textContent;
				const precio = fila.cells[2].textContent;
				const fechaEntrega = fila.cells[3].textContent;
				const descripcion = fila.cells[4].textContent;

				document.getElementById('idpedido').value = idPedido;
				document.getElementById('nombrecliente').value = nombreCliente;
				document.getElementById('precio').value = precio;
				document.getElementById('fecha_entrega').value = fechaEntrega;
				document.getElementById('descripcion').value = descripcion;
			});

			fila.innerHTML = `
		  <td>${pedido.idpedido}</td>
		  <td>${pedido.nombrecliente}</td>
		  <td>${pedido.precio}</td>
		  <td>${pedido.fecha_entrega.substring(0, 10)}</td>
		  <td>${pedido.descripcion}</td>
		  <td>
			<button class="btn btn-primary btn-sm px-3 mt-2" onclick="editarPedido(${
				pedido.idpedido
			})">Editar</button>
			<button class="btn btn-danger btn-sm mt-2" onclick="eliminarPedido(${
				pedido.idpedido
			})">Eliminar</button>
		  </td>
		`;
			tablaCuerpo.appendChild(fila);
		});
	} catch (error) {
		console.error('Error al obtener los pedidos:', error);
	}
}

// Función para agregar un pedido
async function agregarPedido() {
	const nombrecliente = document.getElementById('nombrecliente').value;
	const precio = document.getElementById('precio').value;
	const fecha_entrega = document.getElementById('fecha_entrega').value;
	const descripcion = document.getElementById('descripcion').value;

	try {
		const response = await fetch('http://localhost:3000/pedidos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				nombrecliente,
				precio,
				fecha_entrega,
				descripcion,
			}), // Enviar los datos como JSON
		});

		if (response.ok) {
			// Limpiar el formulario y obtener nuevamente la lista de pedidos
			document.getElementById('formulario-pedido').reset();
			obtenerPedidos();
		} else {
			console.error('Error al agregar el pedido');
		}
	} catch (error) {
		console.error('Error al agregar el pedido:', error);
	}
}

// Función para editar un pedido
async function editarPedido(idpedido) {
	const nombrecliente = document.getElementById('nombrecliente').value;
	const precio = document.getElementById('precio').value;
	const fecha_entrega = document.getElementById('fecha_entrega').value;
	const descripcion = document.getElementById('descripcion').value;

	try {
		const response = await fetch(
			`http://localhost:3000/pedidos/${idpedido}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					nombrecliente,
					precio,
					fecha_entrega,
					descripcion,
				}), // Enviar los datos como JSON
			}
		);

		if (response.ok) {
			// Limpiar el formulario y obtener nuevamente la lista de pedidos
			document.getElementById('formulario-pedido').reset();
			obtenerPedidos();
		} else {
			console.error('Error al editar el pedido');
		}
	} catch (error) {
		console.error('Error al editar el pedido:', error);
	}
}

// Función para eliminar un pedido
async function eliminarPedido(idpedido) {
	try {
		const response = await fetch(
			`http://localhost:3000/pedidos/${idpedido}`,
			{
				method: 'DELETE',
			}
		);

		if (response.ok) {
			document.getElementById('formulario-pedido').reset();
			// Obtener nuevamente la lista de pedidos
			obtenerPedidos();
		} else {
			console.error('Error al eliminar el pedido');
		}
	} catch (error) {
		console.error('Error al eliminar el pedido:', error);
	}
}

// Obtener la lista de pedidos al cargar la página
obtenerPedidos();
