let randomizedMessage = {
    subjects: ["Someone you know", "A new person", "Someone close to you", "An ex friend", "A close friend", "A relative", "A stranger"],
    futures: ["is going to", "might", "could", "will try to"],
    actions: ["poke you with", "damage you with", "assassinate you with", "tell you about", "make you cry about", "fight with you for"],
    objects: ["a hamburger", "a cactus", "your doctor", "an elephant", "Dolly Parton", "a chihuahua", "a rabied raccoon", "a senior developer"],
   
    buildRandomPhrase(subject, future, action, object) {
        let sub = Math.floor(Math.random() * this.subjects.length);
        let fut = Math.floor(Math.random() * this.futures.length);
        let act = Math.floor(Math.random() * this.actions.length);
        let obj = Math.floor(Math.random() * this.objects.length);
        return `${this.subjects[sub]} ${this.futures[fut]} ${this.actions[act]} ${this.objects[obj]}`
    }
}


console.log(randomizedMessage.buildRandomPhrase(randomizedMessage.subjects, randomizedMessage.futures, randomizedMessage.actions, randomizedMessage.objects))
