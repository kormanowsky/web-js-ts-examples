import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/v3/congratulations', (req, res) => {
    console.log('Got body', req.body);

    res.status(200).send();
});

app.listen(3000, () => {
    console.log('Backend is listening on port 3000');
});
