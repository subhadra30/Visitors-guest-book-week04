const messageForm = document.getElementById("messageForm");
fetchMessages();
messageForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(messageForm);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  const response = await fetch(
    "https://visitors-guest-book-week04.onrender.com/messages",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }
  );
  const data = response.json();
  console.log(data);
  fetchMessages();
});

async function fetchMessages() {
  const result = await fetch(
    "https://visitors-guest-book-week04.onrender.com/messages"
  );
  console.log(result);
  const messages = await result.json();
  console.log("messages from server messages-->" + messages);
  displayMessages(messages);
}
const container = document.getElementById("app");

function displayMessages(messages) {
  console.log(messages.length);
  container.innerHTML = "";

  for (let i = 0; i < messages.length; i++) {
    const divDisplay = document.createElement("div");
    divDisplay.className = "divdisplay";
    const imageEmoji = document.createElement("img");
    imageEmoji.setAttribute("src", messages[i].emoji);
    container.appendChild(imageEmoji);
    const usernameElement = document.createElement("p");
    usernameElement.textContent = `    ${messages[i].username} said:  ${messages[i].message}`;
    divDisplay.appendChild(imageEmoji);
    divDisplay.appendChild(usernameElement);
    container.appendChild(divDisplay);
  }
}
