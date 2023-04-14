let subjects = ["Someone you know", "A new person", "Someone close to you", "An ex friend", "A close friend", "A relative", "A stranger"];
let futures = ["is going to", "might", "could", "will try to"];
let actions = ["poke you with", "damage you with", "assassinate you with", "tell you about", "make you cry about", "fight with you for"];
let objects = ["a hamburger", "a cactus", "your doctor", "an elephant", "Dolly Parton", "a chihuahua", "a rabied raccoon", "a senior developer"];

let buildRandomPhrase = (subject, future, action, object) => {
    let sub = Math.floor(Math.random() * subject.length);
    let fut = Math.floor(Math.random() * future.length);
    let act = Math.floor(Math.random() * action.length);
    let obj = Math.floor(Math.random() * object.length);

    return `${subject[sub]} ${future[fut]} ${action[act]} ${object[obj]}`
}

console.log(buildRandomPhrase(subjects, futures, actions, objects))
