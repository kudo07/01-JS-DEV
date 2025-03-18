import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
const PORT = 7099;
app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch(
      'https://coderbyte.com/api/challenges/json/age-counting'
    );
    const tata = await response.json();
    const splitData = tata.data.split(', ');
    console.log(splitData);
    const accStore = splitData.reduce((acc, item) => {
      if (item.startsWith('age=')) {
        const ageSplit = item.split('=')[1];
        acc.push(ageSplit);
      }
      return acc;
    }, []);
    const finalAnswer = accStore.filter((item) => Number(item) > 50);

    const ans = finalAnswer.length;
    res.json({ ans, tata });
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => {
  console.log(`server is running as ${PORT} `);
});
