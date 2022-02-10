import Modal from './Modal';
import { useState } from 'react'
import Input from "./Input";

import { createProject } from '../services/Product';





const CreateProduct =   () => {
   
    const [title, setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) =>{
        e.preventDefault();
       
        const response = await createProject({title,price,description,image,category})
        const message = await response.json()

        if(!response.ok){
            setError(message)
            return
        }

        setTitle('')
        setPrice('')
        setDescription('')
        setImage('')
        setCategory('')
        setError('')



    

    }





      
    return (  
        <>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <form action=""  onSubmit={handleSubmit}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                            <Input title={'Product Title'} type={'text'}   placeholder={'enter product title'} value={title} onChange={e => setTitle(e.target.value)}   />
                            <Input title={'Price'} type={'number'}  placeholder={'enter price '} value={price} onChange={e => setPrice(e.target.value)} />
                            <Input title={'Description'} type={'text'}   placeholder={'enter description '} value={description} onChange={e => setDescription(e.target.value)}  />
                            <Input title={'Image'} type={'text'}  placeholder={'enter image link'} value={image} onChange={e => setImage(e.target.value)} />
                            <Input title={'Category'} type={'text'}   placeholder={'enter category'} value={category} onChange={e => setCategory(e.target.value)}  />
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
            </div>
        </div>
        </ form>
        </div>
        </>
    );
}
 
export default CreateProduct;