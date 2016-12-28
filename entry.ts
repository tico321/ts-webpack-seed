import { Server } from './server/app';

const port = 3000;
const app = (new Server()).app;

app.listen(port, () => console.log('listen on port: ' + port));
