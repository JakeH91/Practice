var user = prompt("You've just entered a room and forgotten why you came in. Do you want to GO BACK, STAY, or DO NOTHING?").toUpperCase();

switch(user) {
    
    case 'GO BACK':
        var choice = prompt("As you turn around, and enter the living room, you remember immediately why you left. A hideous, ghoulish monster speeds towards you with unstoppable ferocity. Do you choose to ATTACK, or GO BACK to the other room?").toUpperCase();
        if (choice === "ATTACK") {
            var weapon = prompt("Alright. You're choosing to face a monster no mortal has ever defeated. But that's ok, you might as well try, you would probably die any other way. You'll need a weapon though. You look around. The only things in reach are a PENCIL, a COFFEE CUP, and a piece of scrunched up PAPER that you're not sure how long has been there (but is this really the time to be thinking about that?). Which do you choose?").toUpperCase();
            var attack = prompt("And what are you going to do with this? THROW it, or STRIKE with it?").toUpperCase();
            if (weapon === "PENCIL" && attack === "STRIKE") {
                window.alert("As the spawn of hellfire descends upon you, closing your eyes, you plunge the pencil forwards, piercing through the apparent nipple of satan. Somehow, and quite unexpectedly, the beast pops, like a balloon. You open your eyes, and there is nothing around you. Did you imagine it all? Imagine what? What was I thinking about again? Ah who cares? Now why did I come into this room???");
                window.alert("YOU WIN. THE END");
            }
            else if (weapon === "PENCIL" && attack === "THROW") {
                window.alert("With all your might, you heave the pencil forwards. Unsurprisingly, it is super ineffective. You have made a very poor choice here today. Death consumes your quickly.");
                window.alert("YOU LOSE. THE END");
            }
            else if (weapon === "COFFEE CUP" && attack === "THROW") {
                window.alert("As you throw the coffee cup, and it spirals through the air, a spider falls onto the face of the beast. Screaming like a small child, the abomination flees from the building, doing that little dance thing you when you don't know if the spider is still there or not. Disgraced, he is banished from the Earth, never able to return again.");
                window.alert("Good Job :) THE END!");
            }
            else if (weapon === "COFFEE CUP" && attack === "STRIKE") {
                window.alert("You flail your arms around in the air, swinging the cup wildly. A blow is struck to the side of the creatures head. Unfortunately, it is only one of those flimsy, kind of plasticy paper cups, and does no damage whatsoever. Did I not tell you that? Or sorry, my bad. Anyway, you're dead now. You got killed immediately. Sorry, I really dropped the ball on that one.");
                window.alert("Too Bad :( THE END!");
            }
            else if (weapon === "PAPER" && (attack === "THROW" || attack === "STRIKE")) {
                window.alert("You chose the paper? Seriously? What an idiot. You were doomed from the start. The paper does absolutely nothing. Or does it? Wait! The beast has stopped. He looks at you, then the paper, then back to you again. All of a sudden, laughter bellows from deep within the alien satanic fucker. He can't believe that was your attempt at stopping him. He actually begins to pity you as he writhes around the floor in hilarious agony. Not pain agony, he's just laughing a lot. He leaves at once, considering you to be the lowest, least intelligent being he has yet come across, in all of his existance, which happens to be longer than the Universe.");
                window.alert("Good Job, maybe? =S THE END!");
            }
            else {
                window.alert("You failed to type something correctly, and hence failed at life.");
                window.alert("GAME OVER");
            }
        }
        else if (choice === "GO BACK"){
            window.alert("You had your chance to run, but you came back. I mean seriously, how could you possibly have forgotten this nightmarish creation? It lunges for you, and, taking you by the head, begins your destruction. Every conceivable part of your body is ripped from you in the most agonizing death you could ever imagine. I guess you should have remembered why you left.");
            window.alert("YOU LOSE. THE END");
        }
        else {
            window.alert("That wasn't an option. Either you just mispelled something, or you tried to be clever. Either way, you wasted your time, and now it's too late. The beast transforms into a blazing fire and consumes you from the inside out. You feel every sensation, every fibre of your being melting and boiling all at once, until only the shell of your skin remains. The beast retreats, and freezes you in this instant in time, for all eternity. You thought trying a different answer would help you? You were wrong!");
            window.alert("GAME OVER");
        }
        break;
    
    case 'STAY':
            var sleep = prompt("OK. So what have we got in here? Just a bed. Is that it? Yeah it looks like it. Alright then, I guess maybe you were here to sleep? Yeah that must be it. Do you fancy it? YES or NO?").toUpperCase();
            if (sleep === "YES") {
                window.alert("You get yourself into bed, tuck yourself in tight and quickly drift off into a dreamworld, filled with talking pencils drinking coffee. How pleasant. Oooh and what's that on the floor? A scrumpled up bit of paper? What does it say? Let's have a look...'PAPER IS PATHETIC!'...Hmmm? I wonder what that means? Ah well. Doo di doo doo doo, dreaming, dreaming, dreaming, la la la.");
                window.alert("THE END! And you never even knew about the crazy ass monster. Isn't that nice :)");
            }
            else if (sleep === "NO") {
                window.alert("Alright, I guess you just kind of sit on the bed instead then. Having fun are you? Just sitting on a bed there? How boring.");
                window.alert("GAME OVER!!!");
            }
        break;
    
    case 'DO NOTHING':
        window.alert("Well that's boring, why did you even bother playing the game if that's what you're going to choose Rikke? Hmm? What did you think would happen? Thanks for humouring me anyway, I love you, give me a kiss on the face.");
        break;
  
    default:
        user = prompt("Was that one of the choices? No. Are you a big gay head? Yeah I would say so. Try again, and this time don't be an Ass Hat. GO BACK, STAY, or DO NOTHING?");
}