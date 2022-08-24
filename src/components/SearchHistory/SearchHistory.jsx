// import './search-history.css'
import styled from '@emotion/styled'

const UlBgColour = '#ffefbf'
const LiFirstColour = '#5c0202'

const Ul = styled.ul`
    padding: 1rem 2rem;
    background-color: ${UlBgColour};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`

const Li = styled.li`
    margin: 0 2rem;
    list-style-type: square;
    &:nth-of-type(1) {
        color: ${LiFirstColour};
    }
`

export default function SearcHistory(props) {
    return (
        // terms come from MainCont
        <Ul className='search-list'>
            {props.terms.map((term) => (
                <Li key={term}>{term}</Li>
            ))}
        </Ul>
    )
}
