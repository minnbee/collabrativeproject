controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -90)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 2 f 2 2 2 . . . . . 
    . . . . . 2 2 2 2 f 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setPosition(80, 60)
mySprite.ay = 200
game.onUpdateInterval(500, function () {
	
})
