import styled from '@emotion/styled'
const UlBgColour = '#ffefbf'
const LiFirstColour = '#5c0202'

const Ul = styled.ul`
    // display: flex;
    // flex-flow: row wrap;
    // justify-content: flex-start;
    // align-items: flex-start;
    // gap: 2rem;
    // min-height: 2rem;
    background-color: ${UlBgColour};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`

const Li = styled.li`
    margin: 0 2rem;
    list-style-type: square;
    // &:nth-of-type(1) {
    //     color: ${LiFirstColour};
    // }
`
const SearchResults = (props) => {
    return (
        <>
            <Ul>
                {props.results.map((item) => (
                    <Li key={item.episode_id}>
                        <strong>{item.director}</strong> directed the item:{' '}
                        {item.title}
                        <em>{item.title}</em>
                    </Li>
                ))}
            </Ul>
        </>
    )
}

export default SearchResults
