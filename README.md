# score-keeper
This is a score keeper created with ReactJS. 
You can establish the number of players with 'numPlayers' and set the target to which a player will win the game.
Once the target is reached a 'Winner!' alert will prompt in green colour. 
It also has a reset button to bring the scores to zero. 

## Technical infomation
This project has been created with Vite.
https://vitejs.dev/

## Procedure 
With NPM in your local console:

$npm create vite@latest

choose "react" from the supported template presets

pick a project name

cd my-project //project name folder

npm install

npm run dev

### URL
Running in local:   http://127.0.0.1:5173/

Side Note: since the installation of the project with Vite created a new root folder, had an error popping due not finding 'package.json' when running up. You can either edit the root folder from which running the projet by "npm --prefix /path/to/project run" or step forward to the root folder "cd /path/to/project" and then again "npm run dev". 