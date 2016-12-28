import { Server } from './server/app';

const app = (new Server()).app;

app.listen(3000, () => console.log('listen on port 3000'));
