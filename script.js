let selectedReaction = '';

function insertEmoji(emoji) {
  const feedbackTextarea = document.getElementById("feedback");
  const currentText = feedbackTextarea.value;
  feedbackTextarea.value = currentText + emoji;
}

function saveFeedback() {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const feedback = document.getElementById("feedback").value;

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const formData = {
    Name: name,
    Email: email,
    Feedback: feedback,
  };

  const formDataJSON = JSON.stringify(formData);

  const blob = new Blob([formDataJSON], { type: "application/json" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "feedback.txt";

  a.click();

  window.location.href = 'thank-you.html';
  URL.revokeObjectURL(url);
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
