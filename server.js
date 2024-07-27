const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
// const swaggerSpecs = require('./swaggerConfig');
const swaggerSpecs = require('./swaggerConfig');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5151;

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  res.json({ message: 'Server is working' });
});

// Swagger documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


// Your existing routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger documentation is available at http://localhost:${PORT}/api-docs`);
});