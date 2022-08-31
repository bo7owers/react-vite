import { NavLink } from 'react-router-dom'
import { css } from '@emotion/react'
export default function People({ list }) {
    // TODO: Show people in the same route as Person
    return (
        <div className='people-results'>
            {list.lenght === 0 && <p>There are no people found...</p>}
            {list.map((item, index) => (
                <p key={item.name}>
                    <NavLink
                        className={(navigationData) =>
                            navigationData.isActive ? 'active' : null
                        }
                        to={`/people/${index + 1}`}
                        css={css`
                            &.active {
                                color: green;
                            }
                        `}
                    >
                        {item.name}
                    </NavLink>
                </p>
            ))}
        </div>
    )
}
