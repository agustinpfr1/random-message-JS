let prediction = {
    subjects: ["Someone you know", "A new person", "Someone close to you", "An ex friend", "A close friend", "A relative", "A stranger", "Your boss", "A co-worker", "A neighbor", "A romantic partner", "A mentor", "A celebrity", "A politician", "A teacher"],
    futures: ["is going to", "might", "could", "will try to", "is likely to", "has the potential to", "is expected to", "may", "shall", "intends to", "plans to", "is inclined to", "is destined to", "is predicted to"],
    actions: ["poke you with", "damage you with", "assassinate you with", "tell you about", "make you cry about", "fight with you for", "gift you", "hit you with", "murder you with", "jump on", "take you on a trip to Bali with", "go to space with"],
    objects: ["a hamburger", "a cactus", "your doctor", "an elephant", "Dolly Parton", "a chihuahua", "a rabied raccoon", "a senior developer", "a vintage car", "a rollercoaster", "a snowman", "a desktop computer"],
   
    buildRandomPhrase(subject, future, action, object) {
        let sub = Math.floor(Math.random() * this.subjects.length);
        let fut = Math.floor(Math.random() * this.futures.length);
        let act = Math.floor(Math.random() * this.actions.length);
        let obj = Math.floor(Math.random() * this.objects.length);
        return `${this.subjects[sub]} ${this.futures[fut]} ${this.actions[act]} ${this.objects[obj]}.`
    }
}

console.log(prediction.buildRandomPhrase(prediction.subjects, prediction.futures, prediction.actions, prediction.objects));
