const facts = [
    "Adventurous Traveler: At 18, you have a passion for exploring new places and cultures.",
    "Creative Photographer: You possess a keen eye for detail and storytelling through photography.",
    "Visual Enthusiast: Your love for photography highlights your appreciation for capturing and creating visual art."
];

let currentFactIndex = 0;

document.getElementById('nextFactButton').addEventListener('click', () => {
    const factDisplay = document.getElementById('fact');
    factDisplay.textContent = facts[currentFactIndex];
    currentFactIndex = (currentFactIndex + 1) % facts.length;
});
