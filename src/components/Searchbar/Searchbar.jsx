// import { useState } from "react";
import { css } from '@emotion/react'
import styled from '@emotion/styled'
const searchBgColour = '#339949'
const Paragraph = styled.p`
    color: #fff;
`
export default function SearchBar(props) {
    // First var then func
    // const [userInput, setInput] = useState("");

    const submitted = (e) => {
        e.preventDefault()
        // target name of form
        // setInput(e.target["custom-search"].value);
        // props comming from App.jsx

        props.addTerm(e.target['custom-search'].value)
    }

    return (
        <section
            css={css`
                background-color: ${searchBgColour};
                font-size: 1rem;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                /* new */
                gap: 2rem;
                z-index: -1;
                margin-top: -5px;
                color: #fff;
            `}
        >
            <h2>Search for something interesting</h2>
            <form onSubmit={submitted}>
                <input
                    type='text'
                    name='custom-search'
                    className='search-text'
                />
                <button className='btn-primary btn' name='search-btn'>
                    Search
                </button>
            </form>
            <div aria-live='polite'>
                {/* {props.userInput ? (
                    <Paragraph>You searched for {props.userInput}</Paragraph>
                ) : (
                    ''
                )} */}
                {props.userInput && (
                    <Paragraph>You searched for {props.userInput}</Paragraph>
                )}
            </div>
        </section>
    )
}
