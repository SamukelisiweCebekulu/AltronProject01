const quotes = [
  "Be kind",

  "Smile - Muhammad Baiyant",

  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",

  "Do what you can, with what you have, where you are. - Theodore Roosevelt",

  "It is okay to be at a place of struggle. Struggle is just another word for growth. - Idowu Koyenikan",

  "Grief is not a disorder, a disease, or a sign of weakness. It is an emotional, physical, and spiritual necessity. - Doug Manning",

  "There is no moving on without grief. Grief IS how we move. - Claire Bidwell Smith, LCPC, author of Anxiety: The Missing Stage of Grief",

  "Sometimes the bravest and most important thing you can do is just show up. - Brené Brown, PhD, LMSW, author of Daring Greatly",

  "Rock bottom became the solid foundation on which I rebuilt my life. - J.K. Rowling",

  "Courage does not always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.' - Mary Anne Radmacher",

  "Hard times are not the enemy of a good life. They are part of it. - Attributed broadly to modern resilience literature",

  "Even the darkest night will end and the sun will rise. - Victor Hugo, Les Misérables",

  "Although the world is full of suffering, it is also full of the overcoming of it. - Helen Keller",

  "The human capacity for burden is like bamboo. Far more flexible than you'd ever believe at first glance. - Jodi Picoult, My Sister's Keeper"
]

const quotesElement = document.querySelector(".quote");
const quotesButton = document.querySelector(".button");

quotesButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quotesElement.textContent = quotes[randomIndex];
})