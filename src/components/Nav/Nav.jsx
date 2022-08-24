import './Nav.css'
import { css } from '@emotion/react'
const color = ' #369'
function Nav() {
    return (
        <>
            <div
                className='main-nav'
                css={css`
                    padding: 32px;
                    background-color: hotpink;
                    font-size: 24px;
                    border-radius: 4px;
                    &:hover {
                        color: ${color};
                    }
                `}
            >
                <img src='./vite.svg' alt='' className='logo' />
                <nav>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Nav 1
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Nav 2
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Nav 3
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav
