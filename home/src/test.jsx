import React from "react"
import Axios from "axios";
export default function Test() {
    const url = 'https://api.ng-erp.in/unicorn/dev/enquiries/UC-211217-0005';
    const headers = {
        'x-api-key': 'Onj86mVQAGXsbzvXEq487G1fM8wVe1G65mHsclL8'
    };
    const getJoke = () => {
        Axios.get(url, { headers }).then(
            (response) => {
                console.log(response);
            }
        )
            .catch(
                error => {
                    console.error(error);
                }
            )
    }

    return (
        <div className="p-5 bg-red-500 text-white -text-3xl font-bold">
            Hello there <button onClick={getJoke}>the button</button>
        </div>
    )
};