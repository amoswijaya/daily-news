import axios from "axios"
import { useState } from "react"

function Subscribe() {
    const [loading, setLoading] = useState(false)
    const [timer, setTimer] = useState(null)
    const [checkEmail, setCheckEmail] = useState('')
    const [email, setEmail] = useState('')
    function debounce(input) {
        setLoading(true)
        if (timer) {
            clearTimeout(timer)
            setTimer(null)
        }
        setTimer(setTimeout(async () => {
            const result = await axios.get(`http://localhost:3001/subscriber/?email=${input}`)
            setCheckEmail(result.data.result)
            setEmail(input)
            setLoading(false)
        }, 1000))
    }
    const addSubs = async () => {
        await axios.post('http://localhost:3001/subscriber/', {email})
    }
    const unSubs = async () => {
        await axios.delete(`http://localhost:3001/subscriber/?email=${email}`,)
    }
    console.log(loading);
    console.log(checkEmail);
    return (
        <>
            <div className=" w-full py-6 px-4 my-32 ">
                <div className="px-4 pt-3 pb-4  -mx-4 border-gray-400">
                    <div className="max-w-xl mx-auto">
                        <h2 className="text-xl text-left inline-block font-semibold text-gray-800">Join Our Newsletter</h2>
                        <p className="text-gray-700 text-xs pl-px">
                            Latest news ,articles and updates montly delevered to your inbox.
                </p>
                        <form className="mt-2">
                            <div className="flex items-center">
                                <input type="email" className="w-full px-2 py-4 mr-2  bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none" required placeholder="Input your email" onChange={e => debounce(e.target.value)} />
                                <button className="bg-blue-600 text-gray-200 px-5 py-2 rounded shadow " style={{ marginLeft: "-7.8rem" }}>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe