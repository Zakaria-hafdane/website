function scrollToBottom() {
    const chatMessages = document.querySelector('.chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

window.onload = function() {
    scrollToBottom();
};

const chatMessages = document.querySelector('.chat-messages');
const observer = new MutationObserver(scrollToBottom);
observer.observe(chatMessages, { childList: true });
