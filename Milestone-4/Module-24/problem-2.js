const balot = ["mango", "mango", "banana", "banana", "No-vote"];
function vote (papers) {
    let mango = [];
    let banana = [];
    for (let paper of papers ) {
        if (paper == "mango") {
            mango.push(paper);
        } else if (paper == "banana") {
            banana.push(paper)
        }
    }
    if (mango.length > banana.length) {
        return "Mango"
    } else if (mango.length == banana.length) {
        return "Draw"
    } 
    else {
        return "Banana"
    }
}

console.log(vote(balot))