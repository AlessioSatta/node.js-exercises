function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const getResult = async () => {
  try {
    const Tina = await luckyDraw("Tina");
    console.log(Tina);
  } catch (error) {
    console.error(error);
  }
  try {
    const Jorge = await luckyDraw("Jorge");
    console.log(Jorge);
  } catch (error) {
    console.error(error);
  }
  try {
    const Julien = await luckyDraw("Julien");
    console.log(Julien);
  } catch (error) {
    console.error(error);
  }
};

getResult();
