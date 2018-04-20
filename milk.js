/* A simple language level asynchronous function.
   Resolve the callback after a random number of milliseconds pass. */
function timeout(cb) {
    setTimeout(cb, 1 * Math.floor(Math.random() * 1000));
};

/* buyMilk and comeHome are both simulated with timeout. */
var buyMilk = timeout;
var you = roommate = {};
you.comeHome = timeout;
roommate.comeHome = timeout;

var milk = 0;
var note = false;

function getMilk(person) {
    if (!milk && !note) {
        note = true;
        console.log(person + " get(s) milk! Milk: " + milk + ", Note: " + note);
        buyMilk(() => {
            milk++;
            note = false;

            console.log(person + " got milk! Milk: " + milk + ", Note: " + note);
        })
    } else {
        console.log(person + " is/are not leaving to get milk. Milk: " + milk + ", Note: " + note);
    }
}

you.comeHome(() => getMilk("You"));
roommate.comeHome(() => getMilk("Your roommate"));
