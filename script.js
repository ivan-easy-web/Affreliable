
const url="https://daiktraf.affise.com/signup";


$('#submitButton').click(function (e) { 
    e.preventDefault();
    superagent
    .post(url)
    .send({ 
        email: $('#emailInput'),
        password: $('#passwordOnput')
    })
    .end((err, res) => {
      console.log(res);
    });
});


function showModal(text, success) {
    $(document).append(text);
}