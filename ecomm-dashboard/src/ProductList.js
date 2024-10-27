import React, {useState, useEffect} from 'react';
import Header from './Header';
import { Table } from 'react-bootstrap';

const ProductList = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            try{
                let result = await fetch("http://127.0.0.1:8001/api/list");
                result = await result.json();
                setData(result);
            } catch (error){
                console.log("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);
    // console.warn("result", data);
    
  return (
    <div>
        <Header/>
        <h1>Product Listing</h1>
        <div className="col-sm-8 offset-sm-2">
            <Table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                </tr>
                {
                    data.map((item) => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img style={{width:100}} src={"http://127.0.0.1:8001/"+item.file_path}/></td>
                        </tr>
                    )
                }
            </Table>
        </div>
    </div>
  )
}

export default ProductList