import app from "./app";
import { config } from 'dotenv';
config();

app.set('port', process.env.port || 4500)

app.listen(app.get('port'), () => {
  console.log('server listen at port ', app.get('port'));
  console.log(`http://localhost:${app.get('port')}`)
})

