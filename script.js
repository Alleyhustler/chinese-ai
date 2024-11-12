window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.intro-screen').style.display = 'none';
        document.querySelector('.tunnel-screen').style.display = 'none';

        const backgroundMusic = document.getElementById('backgroundMusic');
        backgroundMusic.play();  // Start background music

        showWelcomeMessage();  // Display welcome message
        sendHackerMessages();  // Start sending hacker messages
    }, 4000);
});

// Hacker-style messages
const hackerMessages = [
    "连接到系统...",
    "解锁访问权限...",
    "加载虚拟空间...",
    "权限已获得，准备就绪...",
    "系统启动，准备好进行对话...",
    "破解成功，开始分析..."
];

function sendHackerMessages() {
    const chatMessages = document.getElementById('chatMessages');
    let counter = 0;

    // Display each hacker message with a delay
    const interval = setInterval(() => {
        const message = document.createElement('div');
        message.className = 'message hacker';
        message.textContent = hackerMessages[counter];
        chatMessages.appendChild(message);

        // Auto-scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        counter++;
        if (counter === hackerMessages.length) {
            clearInterval(interval);  // Stop after the last message
            startChat();  // Start the chat after hacker messages finish
        }
    }, 1100); // 1.1-second delay for each message
}

function startChat() {
    // After hacker messages finish, prompt user to start chatting
    const chatWindow = document.querySelector('.chat-window');
    chatWindow.style.display = 'block';  // Show the chat window

    // Start showing the typing indicator
    const typingIndicator = document.getElementById('typingIndicator');
    typingIndicator.style.display = 'block';

    // Simulate a typing delay before showing the first message from the AI
    setTimeout(() => {
        typingIndicator.style.display = 'none';  // Hide typing indicator
        const firstMessage = document.createElement('div');
        firstMessage.className = 'message';
        firstMessage.textContent = "问候，探索者。";
        document.getElementById('chatMessages').appendChild(firstMessage);
        document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
    }, 2000); // 2-second delay to simulate typing
}

// Predefined AI responses for the chat
const messages = [
    "这条路隐秘，但敢于前行者可见。",
    "这里有一股神秘的能量...",
    "古老的知识在等待...",
    "询问，或许你会被启迪。",
    "这是一场心灵的探索，问吧，勇敢的灵魂。"
];

document.getElementById('sendButton').addEventListener('click', () => {
    const input = document.getElementById('userInput').value;
    if (input.trim() === '') return;  // Do nothing if input is empty

    // Create the user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = input;
    document.getElementById('chatMessages').appendChild(userMessage);

    // Simulate AI's response
    setTimeout(() => {
        const replyMessage = document.createElement('div');
        replyMessage.className = 'message';
        replyMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('chatMessages').appendChild(replyMessage);
        document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
    }, 1000);  // AI responds after 1 second

    // Clear the input field after sending the message
    document.getElementById('userInput').value = '';
});

// Display a welcome message after the intro sequence
function showWelcomeMessage() {
    const chatMessages = document.getElementById('chatMessages');
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'message welcome';
    welcomeMessage.textContent = "欢迎来到神秘的世界，勇敢的灵魂。";
    chatMessages.appendChild(welcomeMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Game logic
let currentCharacter = "和平"; // "Peace"
let currentHint = "这个字代表‘和平’"; // "This character means 'peace'"
let score = 0;

// Function to start a new round
function startNewRound() {
    const gameHint = document.getElementById('gameHint');
    gameHint.textContent = currentCharacter;
    document.getElementById('gameFeedback').textContent = ''; // Clear previous feedback
    document.getElementById('userGuess').value = ''; // Clear input field
    document.getElementById('score').textContent = `得分: ${score}`; // Update score
}

// Function to handle guess submission
document.getElementById('submitGuess').addEventListener('click', () => {
    const userGuess = document.getElementById('userGuess').value.trim();
    if (userGuess === '') return; // Do nothing if input is empty

    const feedback = document.getElementById('gameFeedback');
    if (userGuess === currentCharacter) {
        score += 1;
        feedback.textContent = "正确! 恭喜你！"; // "Correct! Congratulations!"
        setTimeout(() => {
            // Set a new character and hint for the next round
            currentCharacter = "爱"; // "Love"
            currentHint = "这个字代表‘爱’"; // "This character means 'love'"
            startNewRound(); // Start new round after 2 seconds
        }, 1000);
    } else {
        feedback.textContent = "错误! 再试一次。"; // "Wrong! Try again."
    }
});

// Initialize game on page load
window.addEventListener('load', startNewRound);
