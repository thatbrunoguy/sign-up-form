function submitForm() {
    const email = document.getElementById('email').value;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const than = document.getElementById('thanks');
    const upform = document.getElementById('upform');
    const imgdiv = document.getElementById('imgdiv');
    const mobileimg = document.getElementById('mobileimg');
    const thankyou = document.getElementById('thankyou');
    const  dismiss = document.getElementById('dismiss');
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        errorMessage.textContent = 'Valid email required';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        errorMessage.setAttribute('class', 'valid')
    } else if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Valid email required';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        errorMessage.setAttribute('class', 'valid')
    } else {
        errorMessage.style.display = 'none';
        successMessage.textContent = `A confirmation email has been sent to ${email}. Please open it and click on the button inside to confirm your subscription.`;
        successMessage.style.display = 'block';
        than.style.display = 'none';
        upform.style.display = 'none';
        imgdiv.style.display = 'none';
        thankyou.style.display = 'block';
        dismiss.style.display = 'block';
        mobileimg.style.display = 'none';
    }
  }