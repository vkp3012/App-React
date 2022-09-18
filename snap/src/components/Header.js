import React from 'react'
import Logo from "../images/logo.svg"
import MenuIco from "../images/icon-menu.svg"
import CloseIco from "../images/icon-close-menu.svg"
import DownArrow from "../images/icon-arrow-down.svg"
import UpArrow from "../images/icon-arrow-up.svg"
import Todo from "../images/icon-todo.svg"
import Calendar from "../images/icon-calendar.svg"
import Reminders from "../images/icon-reminders.svg"
import Planning from "../images/icon-planning.svg"

export default function Header(props) {
    const click = props.click;
    const {activeFt,activeCo,popState} = props.state;
  return (
    <Header>
        <img src = {Logo} alt = "Span Logo" className='header-logo'/>
        <nav>
            <ul>
                <li>
                    <div>
                        Features
                        <img src={activeFt ? UpArrow: DownArrow} alt=""/>
                    </div>
                    <ul>
                        <li>
                            <img srg={Todo} alt=""/>
                            <span>Todo List</span>
                        </li>
                        <li className="dropwdown-item">
                                <img src={Calendar} alt="" />
                                <span>Calendar</span>
                        </li>
                        <li className="dropwdown-item">
                            <img src={Reminders} alt="" />
                            <span>Reminders</span>
                        </li>
                        <li className="dropwdown-item">
                            <img src={Planning} alt="" />
                            <span>Planning</span>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </nav>
    </Header>
  )
}
