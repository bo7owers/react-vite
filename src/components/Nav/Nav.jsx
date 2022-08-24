import './Nav.css'
import { css } from '@emotion/react'

const bgColor = ' #369'
function Nav() {
    return (
        // This is not accessible, make two Nav components
        // One for sm screens (bottom), one for md >= screens
        <>
            <div
                css={css`
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: flex-end;
                    align-items: center;
                    background-color: ${bgColor};
                    height: 6em;
                    padding: 1.5em;
                    position: absolute;
                    bottom: 0;
                    width: 100vw;
                    @media screen and (min-width: 480px) {
                        position: relative;
                        top: 0;
                    }
                `}
            >
                <img
                    src='./vite.svg'
                    alt=''
                    css={css`
                        margin-right: auto;
                    `}
                />
                <nav>
                    <ul
                        css={css`
                            display: flex;
                            flex-flow: row wrap;
                            justify-content: flex-end;
                            align-items: center;
                            gap: 1rem;
                            list-style-type: none;
                        `}
                    >
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
