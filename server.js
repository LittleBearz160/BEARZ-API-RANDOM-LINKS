const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const api = require("./routes/api");
const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/", api);

app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});
// const uri = "mongodb+srv://Disryter123:Disryter123@cluster0.dppma.mongodb.net/databot?retryWrites=true&w=majority";

(async () => {
  // await mongoose.connect(uri, {
  //   useUnifiedTopology: true,
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  // });
  app.listen(process.env.PORT || 80);
  console.log(
    "\n██████╗░███████╗░█████╗░██████╗░███████╗\n██╔══██╗██╔════╝██╔══██╗██╔══██╗╚════██║\n██████╦╝█████╗░░███████║██████╔╝░░███╔═╝\n██╔══██╗██╔══╝░░██╔══██║██╔══██╗██╔══╝░░\n██████╦╝███████╗██║░░██║██║░░██║███████╗\n╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝"
    );
})();
