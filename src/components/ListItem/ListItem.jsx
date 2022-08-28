import styled from '@emotion/styled'
import { css } from '@emotion/react'
const Li = styled.li`
    background-color: #ddd;
    color: #333;
    font-size: 1rem;
    list-style: none;
    position: relative;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    margin: 1rem 0;
    //   &::before
    // content: attr(data-ref);
    // display: block;
    // box-sizing: border-box;
    // background-color: #eee;
    //     color: #333;
    //     font-weight: 300;
    //     font-size: 1.5rem;
    //     width: 40px;
    //     height: 30px;
    //     text-align: center;
    //     position: absolute;
    //     top: -10px;
    //     left: -30px;
    //   &::after
    //     display: block;
    //     position: absolute;
    //     box-sizing: border-box;
    //     width: 0;
    //     height: 0;
    //     content: '';
    //     left: -30px;
    //     top: 20px;
    //     border: 15px solid #ccc; /* half the height of ::before */
    //     border-left-color: transparent;
    //     border-bottom-color: transparent;
`

export default function ListItem(props) {
    const { data } = { ...props }

    return (
        <Li className='list-item' data-ref={data.ref}>
            <h2 className={data.title}>{data.title}</h2>
            {data.txt && <p>{data.txt}</p>}
        </Li>
    )
}
