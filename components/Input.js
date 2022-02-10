const Input = ({type,title,placeholder, onChange, value}) => {
    return ( 
        <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1">{title}</label>
            <input type={type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={value} placeholder={placeholder} onChange={onChange} required/>
        </div>
     );
}
 
export default Input;