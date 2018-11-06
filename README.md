This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Mars-Mining`

This application was created with React/Redux

CORS requests was made via jQuery to https://headlight-tournament-3.herokuapp.com/ at 1s intervals.

In the Grid component, the bot and node data is checked and then rendered onto the 20x20 grid squares. Grid is a PureComponent to avoid rendering a square if it was already the same square as the last render. 

As the data is relatively small, my iterative approach may suffer as data starts scaling. 