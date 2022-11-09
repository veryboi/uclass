import React from "react";

const attributes = [
    { Title: 'MATH 32A', color: "bg-red-700", content: "Arul is the most intelligent man alive. He is so good at coding that he wrote this line of text!" },
]

export default function Post() {
    return (
        <>
            {/* {attributes.map(item =>
                <div className="">
                    <div className={`card w-96 ${item.color} shadow-xl w-auto mb-3`}>
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{item.content}</p>
                            <div className="card-actions justify-end ">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}

            <div className="w-auto max-h-72 h-fit border rounded-xl m-3 py-3 mb-5 overflow-y-hidden">
                <a href="#">
                    <div className="px-3">
                        <div className="grid grid-rows-2 w-auto p-2 bg-gray-100 rounded-xl">
                            <div className="grid grid-cols-5">
                                <div className="text-3xl font-bold text-black m-2 w-fit col-span-3">This is a sample post title! </div>
                                <div className="flex px-5 pt-3">
                                    <div className="px-5 font-bold">
                                        <div className="badge mr-2 px-6 bg-blue-500 border-gray-100 text-white rounded-lg font-normal">5</div>
                                        Replies</div>
                                    <div className="px-5 font-bold">
                                        <div className="badge mr-2 px-7 bg-green-500 border-gray-100 text-white rounded-lg font-normal">5</div>
                                        Upvotes</div>
                                </div>

                                <div className="p-1 pt-5 ml-5 bg-yellow-500 font-bold border rounded-lg justify-self-end">
                                    Class Name
                                </div>
                            </div>
                            <div className="items-start">
                                <div className="badge m-2">
                                    Flair 1
                                </div>
                                <div className="badge bg-red-500 justify-end">
                                    Flair 2
                                </div>
                            </div>

                            <div className="px-2" >
                                <p>
                                    This is the post content. It will contain the body of the message in a paragraph preview. This is some filler text to help take up space and demonstrate the flex property of the boxes. As this paragraph expands, the post preview will expand until the max height is reached. The width of the card is automatically determined by the width of its parent element.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>


        </>

    );

}