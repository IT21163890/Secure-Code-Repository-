const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const codeRoutes = require('./routes/codeRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/code', codeRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/secure-code-repo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => console.error(err));
