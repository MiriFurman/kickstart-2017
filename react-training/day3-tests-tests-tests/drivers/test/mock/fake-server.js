import express from 'express';
import session from 'express-session';
import {renderVM} from './vm';

export function start(port = 3000) {
  const app = express();

  app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

  app.use('/', (req, res) => {
    res.send(renderVM('./src/index.vm', {
      visitCount: req.session.visitCount
    }));
  });

  return app.listen(port, () => {
    console.log(`Fake server is running on port ${port}`);
  });
}
