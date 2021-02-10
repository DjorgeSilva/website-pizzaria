import React from 'react'
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarMenu,
    SideBarLink,
    SideBarBtnWrap,
    SideBarRoute
} from "./SideBareElements.js"


export default function Index({ isOpen, toggle }) {
        return (

            <SideBarContainer isOpen={isOpen}>
                <Icon>
                    <CloseIcon  onClick={toggle}/>
                </Icon>
                <SideBarMenu>
                    <SideBarLink to="/">Pizzas</SideBarLink>
                    <SideBarLink to="/">Desserts</SideBarLink>
                    <SideBarLink to="/">Full Menu</SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrap>
                    <SideBarRoute to="/">Order Now</SideBarRoute>
                </SideBarBtnWrap>
            </SideBarContainer>
        )
    
};
