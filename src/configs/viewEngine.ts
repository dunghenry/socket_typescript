import express, { Express } from 'express';
import expressLayouts from 'express-ejs-layouts';
const viewEngine = (app: Express) => {
    app.use(expressLayouts);
    app.use(express.static("./src/public"));
    app.set('view engine', 'ejs');
    app.set('layout', './layouts/main');
    app.set('views', './src/views');
}
export default viewEngine;