import React from 'react';
import { TbCloudUpload } from "react-icons/tb";
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })

  }

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)

    setData((preve) => {
      return {
        ...preve,
        image: data
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
    const { name, image, category, price } = data

    if (name && image && category && price) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const fetchRes = await fetchData.json()

      console.log(fetchRes)
      toast(fetchRes.message)

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: ""
        }
      })
    }
    else {
      toast("Enter required Fields")
    }

  }
  
  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name='name' className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name} />

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' name='category' id='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"}>Select Category</option>
          <option value={"meal_dabba"}>Meal Dabba</option>
          <option value={"sabji"}>Sabji</option>
          <option value={"roti"}>Roti</option>
          <option value={"paratha"}>Paratha</option>
          <option value={"dal_or_rice"}>Dal, Rice & More</option>
          <option value={"spicy_meal"}>Spicy Meals</option>
          <option value={"sides"}>Sides</option>
          <option value={"desserts"}>Desserts</option>
          <option value={"beverages"}>Beverages</option>
        </select>

        <label htmlFor='image'>Image
          <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
            {
              data.image ? <img src={data.image} className="h-full" alt='' /> : <span className='text-5xl'><TbCloudUpload /></span>
            }
            <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden" />
          </div>
        </label>

        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} name='price' className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.price} />

        <label htmlFor='description'>Description</label>
        <textarea rows={2} name='description' className='bg-slate-200 p-1 my-1 resize-none' onChange={handleOnChange} value={data.description}></textarea>

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium drop-shadow my-2'>Save</button>
      </form>
    </div>
  )
}

export default Newproduct