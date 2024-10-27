import React, {useState} from 'react';
import Header from './Header';

const AddProduct = () => {

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProduct = async() => {
    console.warn(name, file, price, description);
    const formData = new FormData();

    formData.append('file', file);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('description', description);

    const result = await fetch("http://127.0.0.1:8001/api/addproduct", {
      method: 'POST',
      body: formData,
    });
    alert("Data has been Saved Successfully");
     
  }

  return (
    <div>
      <Header/>
      <div className='col-sm-6 offset-sm-3'>
        <br/>
        <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} placeholder='name' /> <br/>
        <input type="file" className='form-control' onChange={(e) => setFile(e.target.files[0])} placeholder='file' /> <br/>
        <input type='text' className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price' /> <br/>
        <input type='text' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' /> <br/>
        <button onClick={addProduct} className='btn btn-primary'>Add Product</button>
      </div>
    </div>
  )
}

export default AddProduct