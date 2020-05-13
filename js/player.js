class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    getCount(){
        var a = database.ref('playerCount');
        a.on("value",function(data){
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }
    update(){
        var playerIndex = "player"+this.index;
        database.ref(playerIndex).set({
            name:this.name, distance:this.distance
        })
    }
     static getPlayerInfo(){
         var info = database.ref('players');
         info.on("value",(data)=>{ allPlayers = data.val();})
     }
} 