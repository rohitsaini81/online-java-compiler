import express from 'express'
import cors from 'cors'
import {errorMiddleware} from './middlewares/error.js'
import router from './routes/compiler.js'



import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

  export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
  const port = process.env.PORT || 3000;


  const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:' * ',credentials:true})); 


  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.use('/main', express.static(path.join(__dirname, 'public')));
  // your routes here
  app.use(router)

  
  app.get("*", (req, res) => {
    res.status(404).json({
      success: false,
      message: 'Page not found'
    });
  });

  app.use(errorMiddleware);
  
  
  app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));