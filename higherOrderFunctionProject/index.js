const users = [
    { name: "Arjun", city: "Thakurgaon" },
    { name: "Aditi", city: "Thakurgaon" },
    { name: "Arpita", city: "Jolpaiguri" },
    { name: "Dipok", city: "Rangpur" }
];

const result = users.reduce((acc, user) => {
    acc[user.city] = [].push(user);
    return acc;
}, {});

console.log(result);
