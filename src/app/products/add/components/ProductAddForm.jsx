
"use client"

import { useRouter } from "next/navigation";

const ProductAddForm = () => {
    const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env;
    const router = useRouter()
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const payload = {productName};
        const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`,{
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await res.json();
        console.log(result);
        form.reset();
        router.push('/products')

    }
    return (
        <div className="text-center mt-6">
            <form onSubmit={handleSubmit}>
                <input type="text" name='productName' placeholder='product name' className="text-black"/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ProductAddForm;