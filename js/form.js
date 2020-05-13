class Form{
        constructor(){
            this.input = createInput("Enter Your Name"); 
            this.button = createButton('PLAY');
            this.greeting = createElement('h3');
            
        }
        hide(){
            this.input.hide();
            this.button.hide();
            this.greeting.hide();
        }
        
        display(){
            var title = createElement('h2', 'Multiplayer Car Racing Game');
            title.position(390,100);
            this.input.position(390,250);
            this. button.position(480,300);
            this.button.mousePressed(() =>{
                this.input.hide();
                this.button.hide();
                player.name = this.input.value();
               playerCount = playerCount+1;
               player.index = playerCount;
               player.updateCount(playerCount);
               player.update(  );
                this.greeting.html("Hello "+ player.name);
                this.greeting.position(390,250);
            });

        }
        
}