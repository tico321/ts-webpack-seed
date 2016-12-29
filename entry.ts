import { Server } from './server/server';

const port = 3000;
const app = (new Server()).app;

app.listen(port, () => console.log('listen on port: ' + port));
