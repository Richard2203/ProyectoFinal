const form = document.getElementById('form_contacto');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const prePayload = new FormData(form);
	const payload = new URLSearchParams(prePayload);

	console.log([...payload]);

	fetch('http://localhost:3000/users', {
		method: 'POST',
		body: payload,
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.then((err) => console.log(err));
});
