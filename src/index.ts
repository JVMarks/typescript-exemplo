import express from 'express';
import { helloword } from './routes';

const app = express();

app.get('/', helloword)

app.listen(333);

/*
yarn init -y
yarn add typescript -D

converter o index no node


yarn tsc src/index.ts 
yarn tsc --init 
yarn tsc     
"outDir": "./dist",  
yarn tsc     
*/