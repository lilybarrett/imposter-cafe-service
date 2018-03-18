"use strict";

const data = {
  "menuItems": [
      {
          "name": "Perfectionism Parfait",
          "description": "A tangy, velvety combination of self-criticism and impossible standards of perfection, studded with juicy bits of high blood pressure",
          "cost": "$7",
      },
      {
          "name": "Fraud French Toast",
          "description": "Toasted and drizzled with swirls of anxiety and doubt, topped with whipped, self-love-free cream",
          "cost": "$10",
      },
      {
          "name": "'Just Getting By On Charm' Lucky Charms Pancakes",
          "description": "Light and fluffy, stacked in feelings that luck & soft skills are sole factors of success",
          "cost": "$10",
      },
      {
          "name": "'Stack Overflow' Omelette",
          "description": "Studded with frantic moments of discreet typing and Googling, this omelette is the perfect match for you",
          "cost": "$9",
      },
  ],
  "message": "This is a message"
}

module.exports = {
  menu: menu
};

function menu(req, res) {
  res.json(data);
}
