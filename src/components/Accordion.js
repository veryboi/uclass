import React from 'react';

function Accordion(props) {
    const [open, setOpen] = useState(false);

    let toggleHandler = (e) => {
        setOpen(!open);
    };

    return (
        <>
            <li className={"font-semibold " + (item.color)}>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    {item.name}
                </a>
            </li>


            <div className={"font-semibold " + (props.color)}>
                <div className="accordion__header" onClick={toggleHandler}>
                    <h4 >{props.title}</h4>
                    <i>
                    </i>
                </div>
                <p className="accordion__content">{props.text}</p>
            </div>
        </>
    );


}