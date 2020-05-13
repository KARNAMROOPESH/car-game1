var database;
var game;
var form;
var playerCount = 0;
var player;
var GameState = 0;
var allPlayers;

function setup(){
  database = firebase.database();
  console.log(database);
  var canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background(255);
  if(playerCount === 4){
    game.updateState(1);
  }
 if(GameState === 1){
   game.play();
 }
}
