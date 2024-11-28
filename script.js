document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({

      behavior: 'smooth'

    });

  });

});
document.querySelector('.order-form').addEventListener('submit', function (e) {
  e.preventDefault(); 
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const coffee = document.querySelector('#coffee').value;
  const suggestions = document.querySelector('#suggestions').value;
  const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked'))
    .map(input => input.value)
    .join(', ');
  const orderSummary = `
    Thank you, ${name}! Your order has been placed:
    - Coffee: ${coffee}
    - Extras: ${extras || 'None'}
    - Suggestions: ${suggestions || 'None'}
    We will contact you at ${email} or ${phone} for updates. Enjoy your coffee!
  `;
  alert(orderSummary);

  // Optionally, clear the form after submission
  document.querySelector('.order-form').reset();
});