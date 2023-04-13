let subject = ["Someone you know", "A new person", "Someone close to you", "An ex friend", "A close friend", "A relative", "A stranger"];
let future = ["is going to", "might", "could", "will try to"];
let actions = ["poke you with", "damage you with", "assassinate you with", "tell you about", "make you cry about", "fight with you for"];
let objects = ["a hamburger", "a cactus", "your doctor", "an elephant", "Dolly Parton", "a chihuahua", "a rabied raccoon", "a senior developer" ];

let buildRandomPhrase = arr => {
 let firstElement = Math.floor(Math.random() * arr.length);
 console.log(firstElement)
}