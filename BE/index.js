import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const productsSchema = new mongoose.Schema({
    title: String,
    price:Number,
    desc: String
  });

const ProductsModel = mongoose.model('products', productsSchema);


app.get('/myapp', async(req, res) => {
    const products = await ProductsModel.find();

  res.send(products)
})

app.get('/myapp/:id', async(req, res) => {
    const {id} = req.params
    const products = await ProductsModel.findById(id);

  res.send(products)
})

app.post('/myapp', async(req, res) => {
    const obj = req.body
    const product = new ProductsModel(obj);
    await product.save();

  res.send(product)
})

app.put('/myapp/:id', async(req, res) => {
    const {id} = req.params
    const obj = req.body

    const product = await ProductsModel.findByIdAndUpdate(id,obj);

  res.send(product)
})

app.delete('/myapp/:id', async(req, res) => {
    const {id} = req.params
   
    const product = await ProductsModel.findByIdAndDelete(id);

  res.send(product)
})
mongoose.connect('mongodb+srv://bd813qhzt:bd813qhzt@yusif.clyfxvf.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(()=>console.log("kgkdfgbkdf"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
