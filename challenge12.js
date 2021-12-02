week1 = [17, 21, 23];
week2 = [12, 5 , -5, 0, 4];

console.log("Semaine 1:");

week1.forEach((temp, day) => {
    console.log(`${temp} degrès dans ${day + 1} jour`);
});

console.log("\nSemaine 2:");

week2.forEach((temp, day) => {
    console.log(`${temp} degrès dans ${day + 1} jour`);
});