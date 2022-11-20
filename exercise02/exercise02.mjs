const { randomInt } = await import("node:crypto");

const id = randomInt(1, 100);

console.log(`Random id: ${id}`);
