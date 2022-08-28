// import './search-history.css'
import styled from '@emotion/styled'
import List from '../List/List'

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
    const { terms } = { ...props }
    let formattedData = terms.map((item, index) => {
        return {
            ref: index,
            title: item,
            txt: null,
        }
    })
    return <List data={formattedData} />
}
// <Ul className='search-list'>
// {props.terms.map((term) => (
//     <Li key={term}>{term}</Li>
// ))}
// </Ul>
