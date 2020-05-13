class Game {
    constructor(){
        

    }
    getState(){
       var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(gameref){
            GameState = gameref.val();
        });
    }
    updateState(state){
        database.ref('/').update(
            { gameState : state }

        );
    }
   async start(){
        if(GameState === 0){
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
         form.hide();
         text("GAME START",390,250);
         Player.getPlayerInfo();
         if(allPlayers !== undefined){
             var dp = 130;
             for(var plr in allPlayers){
               dp = dp+20;
               text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,dp) ;
             }

         }

         if(keyIsDown(UP_ARROW) && player.index !== null){
             player.distance = player.distance+10;
             player.update();
         }
    }
}
