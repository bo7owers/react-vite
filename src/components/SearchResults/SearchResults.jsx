import styled from '@emotion/styled'
import List from '../List/List'

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
    let { results, type } = { ...props }
    // continue here min 20:00

    let formattedData = results.map((item, index) => {
        let obj = {
            original: item,
        }
        switch (type) {
            case 'films':
                obj.ref = item.episode_id
                obj.title = item.title
                obj.txt = item.release_date
                break
            case 'people':
                break
            case 'planets':
                break
        }
        return obj
    })
    return (
        <div className='results'>
            <List data={formattedData} />
        </div>
    )
}

//  <Ul>
// {props.results.map((item) => (
//     <Li key={item.episode_id}>{item.title}</Li>
// ))}
// </Ul>

export default SearchResults
