import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from '../routes';

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

RegisterRoutes(app);
app.use('/api', (req, res) => res.sendStatus(404))

// Swagger Config
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
      filter: true
    },
    customCss: '.swagger-ui .opblock-summary { background-color: #ffe0b2 }'
  })
);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
