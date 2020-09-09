/*This JavaScript creates and and extract information about my favourite sport: football. So a data is created using JavaScript data structures: arrays and objects. */

//A data structure(team object) to store the information about the team.
//The team has two properties: players property and games property.
const team = {
  _players: [
    {
      firstName: 'Pete', lastName: 'Wheeler', age: 54
    },
    {
      firstName: 'Pablo', lastName: 'Sanchez', age: 11
   },
   {
      firstName: 'Mo', lastName: 'Moon', age: 23
   },
  ],
  _games: [
    { 
      opponent: 'Liverpool', teamPoints: 42, opponentPoints: 27
   },
   {
     opponent: 'Man City', teamPoints: 49, opponentPoints: 37
},
  {
  opponent: 'Chelsea', teamPoints: 52, opponentPoints: 77
},
  ],

  get players(){
    return this._players;
  },

  get games(){
    return this._games;
  },

  //Adding a new player to the team
  addPlayer(firstName, lastName, age){
    //A player object.
    let player = {
      firstName: firstName, lastName: lastName, age: age
    };
//And then add to the team's players array.
    this.players.push(player);
  },

  //Recording game results
  addGame(opponent, teamPoint, gamePoint){
  //A game object
  let game = {
    opponent: opponent, teamPoint: teamPoint, gamePoint: gamePoint
  };
  //Adding the game object to the team's games array.
    this.games.push(game);
  }
};
//Above is the team object created. And below is invoking the method...
team.addPlayer('Moses', 'Pa', 21);
team.addPlayer('Michael', 'Aston', 28);
team.addPlayer('Benteke', 'Arron', 38);

//console.log(team.players);

team.addGame('Crystal Palaca', 20, 42);
team.addGame('Aston Villa', 31, 68);
team.addGame('Arsenal', 56, 88);

console.log(team.games);
