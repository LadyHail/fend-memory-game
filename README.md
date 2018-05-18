#### The game is hosted at: https://ladyhail.github.io/fend-memory-game/

## How the Game works
The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

* The player flips one card over to reveal its underlying symbol.
* The player then turns over a second card, trying to find the corresponding card with the same symbol.
* If the cards match, both cards stay flipped over.
* If the cards do not match, both cards are flipped face down.

The game ends once all cards have been correctly matched.

## Dependencies
When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It also tell the user how much time it took to win the game, what the star rating was and how many moves was made.

A restart button allows the player to reset the game board, the timer, the star rating and the moves.

The game displays a star rating (from 1-3) that reflects the player's performance. At the beginning of a game, it displays 3 stars:
* 32 moves - 2 stars;
* 38 moves - 1 star.

When the player starts a game, a displayed timer also start. Once the player wins the game, the timer stops.

Game displays the current number of moves a user has made.
