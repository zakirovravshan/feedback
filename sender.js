let form = document.querySelector('#form');
let message = document.querySelector('#message');

var radioButtons = document.getElementsByName('rating');

var selectedValue = '';

var post = {
	text: message.value,
	rating: selectedValue,
	botTOKEN: `6490061389:AAE2tRzVNw7GkrHD-1Hp19lUT1ds45_20zM`,
	chatId: -4096235042,
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	for (var i = 0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked) {
			selectedValue = radioButtons[i].value;
			break; // Exit the loop once a selection is found
		}
	}
	fetch(
		`https://api.telegram.org/bot${post.botTOKEN}/sendMessage?chat_id=${post.chatId}&text=📩: ${message.value} || Nastroy : ${selectedValue}`,
		{
			method: 'GET',
		},
	)
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((error) => console.log(error));

	console.log(selectedValue, message.value);
});
