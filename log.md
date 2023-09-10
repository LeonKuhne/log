2023

8/26 Thrashing kills
  Leon, it's been more than two days now that you've spent refactoring your rendering framework. I don't remember what was wrong with it before, or why you started supporting async rendering methods. Maybe it was the template fetching that was causing asyncrounous issues. But you could have just added a hook or something that... there was probably a simpler solution. But now it support async loaders, and the code complexity has... entered a labyrinth. Nice. This is why we reflect, Leon. This is why we plan and have todo-lists, and blog, Leon. You probably have no idea what I'm talking about.
  Hi. I'm me. My favorite color is Arch and my favorite food is Dvorak. I'm a professional Software Engineer who went rogue to work on games full time. Now that we all know each other lets get back to brass tacks.

8/27 Clarity
  I've notated storyline divisions and designed the Warehouse App for managing merchandise. Now its off the back of my mind. You also probably need clarity. This game is about managing your stores success by sabotaging nearby competition. I want the game to play like a very slow MMO tower defence game centered around your players actions. I came up with this idea in middleschool as a 2 player, 1v1 game, and now I think I've been playing too much Monopoly GO. Thats the basics, anywayyyys... man I am bored dead writing this. Its actually tomorrow already I just didn't feel like putting this in the next post. K. Keep reading it gets better I promise. Oh and another thing I forgot to note down was that I learned how to (multi-escape loops)[multi-break.lesson] and that js classes have bind methods for functional programming. Thought you should know.

8/28 PEMDAS
  Next, I generate the city layout, so that I can look at individual lots. I've already designed and implemented my street building algorithm, but its not working as expected. So I need to (2) fix the algorithm implementation, and (1) pray my new-age rendering pipeline doesn't cause issues. Ready? Please open up your code to page "city.mjs". Please note: its an ESM file so dont you dare use .js

8/29 Street Walker Algo
  Now, before you even think about hitting the streets, let's talk shoes. Comfort is key, but style? Equally important- oh wait this is my dev blog... crack on. 
  Transmission 1: I just fixed the algo and its beautiful. 
  Transmission 2: I've just realized the buildings shouldn't have street access on front and back.
  Transmission 3: Ok, I've fix that too but now none of the roads connect to each other to form loops.
Check out these (in-progress demos)[street-walker.demo] 
I think its good enough to start working on the lot view so bye bye algo, see you later.

8/30 Gameplay
  Purchase a store, load the store, and move your player around. Thats whats next.
  Transmission 4: I added custom rules to my (render pipeline)[render-pipeline.demo] to support waiting on child elements.
  Transmission 5: I'm removing the custom rules I added in favor of auto-child loading which I'm implementing instead.
  Transmission 6: The auto-child loading wasn't working so I integrated a debug-menu element, I also made it show split time.
Uuuuuuuggh. I've again made no progress today, I'm still struggling with the async spaghetti. I realized theres certain load tasks that should happen in the constructor, like html fetching. Not sure if that will work since its async, but any solution, yes even callback hell, is better than this garbage. I should have stopped an hour in, when I knew the code complexity had skyrocketed. Ugggggggghhh. Gameplay. This time the game played me. FUCK ASYNC.

8/31 I Can't Await
 10:31:04 tearing out async!!!
 11:02:37 async removed and systems fixed
How very naive of me to think that async's syntactic sugar would improve the code. I should have done this days ago. 
I made the map look freakin sexy. Git up there!

9/3 Silent
Its been a quiet couple of days.
Perhaps a break was needed.
I struggled with map zooming across the last couple of days, now its acceptable. Probably needs a reword later.
I added map markers and fixed the lot builder to generate some template lots, which get loaded into the city and randomly assigned.
I badly want to work on the lot view now. I'm thinking of moving the selected marker text to the bottom of the screen like in the real maps apps. A double tap for now will to to purchase lots.

9/4 A fun fact
It takes my map 10 or more seconds to load markers. This is impresive, screet walker finishes in under one. But first I want to fix my directory structure. F webpack and F preprocessing complexities; 5 lines of bash can hotreload component urls, 10 lines can save the world. 

9/5 Hmphff.
  A long time ago, my mom said debugging was like playing a game. It ticks me off still. I made my element registry preload all elements and trigger my own intitialization function on elements instead of connectedCallback. This isn't ideal, but I need to start making progress again, and the code looks clean.

9/6 In the Woods
  I'm looking too closely at these trees, I need to take a step back to enjoy this experience. With my cat in a tent now I must think smart and conserve battery.

9/9 Corrupted
  "Enjoy the experience"... of being homeless; He wrote in opaque letters as the machine exchanged time for a connection away from reality; Unrelatable Error: Your cold mechanical heart could not ESC.

[next entry]