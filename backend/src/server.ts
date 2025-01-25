import { connectDB } from './config/db';
import app from './app';
import config from './config/env.var.config';

app.listen(config.app.port, () => {
  connectDB();
  console.log(
    `Server is running on port ${config.app.port} in ${config.app.env} mode`
  );
});
