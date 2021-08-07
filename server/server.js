const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const DataSetRoutes = require('./routes/dataSet')
const UserRoutes = require('./routes/user')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/DataSet', DataSetRoutes);
app.use('/User', UserRoutes);

const port = 8000;

const mongoDB = 'mongodb+srv://tower_admin:Abcd1234!@cluster0.f4brl.mongodb.net/tower?retryWrites=true&w=majority'

async function mongoConnect(mongoDB) {
    var mongoConnectionSuccessful = false;
    console.log("Connecting to mongodb at " + mongoDB + "...");
    while (!mongoConnectionSuccessful) {
        try {
            await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log("connected!");
            mongoConnectionSuccessful = true;
            mongoose.connection.on('error', ()=> console.log('MongoDB connection error:'));
            return;
        } catch (error) {
            console.log(error);
        }
        await utils.sleep(500);
    }
}

async function main() {

    await mongoConnect(mongoDB);

    app.listen(port, () => {
    console.log('Listening at ' + port + '...');
    });
}


app.get('/', (req, res) => {
    res.json('We really out here');
});

main();