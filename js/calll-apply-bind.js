const cat = {
    name: "tom",
    getStatus(emotion, location) {
        console.log(`${this.name} is ${emotion} in ${location}`);
    }
}

const mouse = {
    name: "jerry"
}

const mouseName = cat.getStatus.bind(mouse, "happy", "Viet Nam");
cat.getStatus.call(mouse, "happy", "Viet Nam");
cat.getStatus.apply(mouse, ["happy", "Viet Nam"]);