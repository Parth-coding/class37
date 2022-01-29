class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
      if(playerCount===2){
        gameState=1;
      }
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1=createSprite(width/2-50,height-100,50,50);
    car1.addImage("car1",car1_img);

    car2=createSprite(width/2+50,height-100,50,50);
    car2.addImage("car2",car2_img);

    cars=[car1,car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  update(state){
   database.ref("/").update({
     gameState:state
   })
  }

  play() {
    this.handleElements();
    text("game start",width/2,height/2);
  
    Player.getPlayersInfo();
   
    if(allPlayers!==undefined){
      Image("track",track);
      var displayPosition=width/2
      for(var plr in allPlayers){
        // if(plr==="player"+player.index){
        //   fill("red");
        // }
        // else{
        //   fill("blue");
        //}
      }
    }
  }
}
