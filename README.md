# Tic Tac Toe

This is a browser Tic Tac Toe game written in vanilla JavaScript that has 2 playing modes - versus the computer and versus another player.

# User Interface

On the main screen there is a box with 2 choices - play against the computer or against another player.

    -Choosing against the computer box will open up the 3x3 game board. Markers on each side indicate with which marker play the computer and the player. Markers and turns can be switched back and forth from the "Switch Markers" button. Clicking/tapping this button multiple times will have the computer place makers around the board, thus making it play against itself. A text under the board indicates which turn it is. A user can reset the game by clicking on the circle arrows at the bottom. Clicking the back arrow to return to the main menu will also reset the current game and clear the board.

    -Choosing player vs player will open up the 3x3 game board. Markers on each side indicate with which marker play the first and second player. A text under the board indicates which turn it is. A user can reset the game by clicking on the circle arrows at the bottom. Clicking the back arrow to return to the main menu will also reset the current game and clear the board.

# Things to be improved

At this moment, the computer will only place random markers on non-occupied squares without any logic. Would be nice to implement the Minimax algorithm and make the computer "predict" the moves that produce the best outcome for the win.
