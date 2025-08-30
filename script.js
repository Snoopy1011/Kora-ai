function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  // Show user message
  const chatLog = document.getElementById("chat-log");
  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + message;
  chatLog.appendChild(userMsg);

  // Placeholder turtle reply
  const botMsg = document.createElement("div");
  botMsg.textContent = "Kōra 🐢: I hear you, but my brain isn’t connected yet!";
  chatLog.appendChild(botMsg);

  // Scroll to bottom
  chatLog.scrollTop = chatLog.scrollHeight;

  input.value = "";
}
