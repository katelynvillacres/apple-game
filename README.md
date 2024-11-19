# Welcome to Kate's Apple Game!

This project began as a CollegeBoard exit project for my AP Computer Science Principles Course (fun fact, that course is what inspired me to pursue CS!); only, the original project was made in Scratch! Scratch is a block-based programming language developed by MIT to teach students the principles of computer science without having to write code. This served as a great foundation for me, as I used what I learned to further my computer science education (and eventually create this game!)

Want to see the original Apple Game project? Check out the [Original Falling Apple Game](https://scratch.mit.edu/projects/397172507/) in Scratch. Or, if you want to learn more about Scratch, [check it out](https://scratch.mit.edu/about)!

I was inspired to bring this project to life following the completion of my Google CSSI program at Queens College in 2020. I began teaching coding to students at my job, and while transitioning from teaching them Scratch to JavaScript, I realized just how easy it would be to take the block-based code from Scratch and convert it to code. And so, the Apple Game took on a new form! The assets were left the same (since I'm not much of a graphic designer), but everything in this project was created by myself.

## Project Files

← `README.md`: You are here!

← `index.html`: This is the main web page for the site. The HTML defines the structure and content of the page using _elements_. You'll see references in the HTML to the JS and CSS files. Try clicking the image in the center of the page!

← `style.css`: CSS files add styling rules to your content. The CSS applies styles to the elements in your HTML page. The style rules also make the image move when you click it.

← `script.js`: While most web-projects incorporate JavaScript for animations, the code used to create the game is entirely in this file. Using the p5.js libraries, I was able to make a fully-functioning game using various functions. To learn more about p5.js, check out [the documentation](https://p5js.org/) here!

← `p5.collide2D.js`: A library from the p5.js library that checks for collision detection between two (or more) two-dimensional objects. This is the key to making this project work, since the project checks for different types of collisions, such as apple-basket collisions and apple-offscreen collisions
Open each file and check out the comments (in gray) for more info.

← `p5.min.js`: Imports the p5.js library to this project. This is what allows canvases and shapes to be drawn on screen, making it a solid choice for game development

## How to Play
A button will appear at the start of the game. Once you click it, apples will begin to fall from the sky. Using the arrow keys, move the basket left and right to collect as many apples as possible. You have three lives, and if you miss an apple, it depletes one life. Once you run out of lives, it's Game Over (but don't worry, you'll have the option to start over if you'd like).

## Next Steps
In my original version of the game, I incorporated difficulty levels. Due to the limited amount of time I had to work on this project, I chose not to incorporate difficulty levels. However, I'd like the future renditions of this game to incorporate difficulty levels and possibly even trophies! I'd also like to update the assets to create a more visually appealing final product.

In the future, I'd like to recreate this game one last time using Python. Although p5.js is a decent choice for game development, I know that Python has libraries that are also meant for game development. Be sure to look out in the future for the Python version of this game!
