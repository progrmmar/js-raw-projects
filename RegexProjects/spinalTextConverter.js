const spinalCase = str => {
    const regex = /(?:\s|_)+[A-Za-z]|[A-Z]/g;
    
    return str
        .replace(regex, content => {
            if (content === "" || content.includes("_")) {
                return `-${content.slice(1)}`;
            }
            if (str.indexOf(content) === 0) {
                return content;
            }
            return `-${content.trim()}`;
        })
        .toLowerCase();
};
// console.log(spinalCase("This Is Spinal Tap")); // this-is-spinal-tap
// console.log(spinalCase("ThisIsSpinalTap")); // this-is-spinal-tap
// console.log(spinalCase("Teletubbies say Eh-oh")); //teletubbies-say-eh-oh
