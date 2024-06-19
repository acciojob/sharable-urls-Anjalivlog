// your code here
document.getElementById('button').addEventListener('click', function (event) {
	event.preventDefault();
	const name = document.getElementById('name').value;
	const year = document.getElementById('year').value;

	let newUrl = 'https://localhost:8080/';

	if (name || year) {
        newUrl += '?';
        const params = [];
        if (name) {
            params.push(`name=${encodeURIComponent(name)}`);
        }
        if (year) {
            params.push(`year=${encodeURIComponent(year)}`);
        }
        newUrl += params.join('&');
    }

    // Update the h3 text
    document.getElementById('url').innerText = newUrl;

})