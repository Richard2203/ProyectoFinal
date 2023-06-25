const form = document.getElementById('form_contacto');

form.addEventListener('submit', async function (e) {
	e.preventDefault();

	const prePayload = new FormData(form);
	const payload = new URLSearchParams(prePayload);

	const response = await fetch('http://localhost:3000/users', {
		method: 'POST',
		body: payload,
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.then((err) => console.log(err));

	Swal.fire(
		document.getElementById('name').value,
		'Tu mensaje se envio correctamente',
		'success'
	);

	form.reset();
});
