import ListItem from '../ListItem/ListItem'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export default function List(props) {
    return (
        <ul
            css={css`
                list-style: none;
            `}
        >
            {props.data.map((item) => (
                <ListItem key={item.title} data={item} />
            ))}
        </ul>
    )
}
