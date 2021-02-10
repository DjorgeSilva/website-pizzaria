import React, {useState} from 'react'
import NavBar from "../Navbar/Index.js"
import {HeroContainer,HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from "./HeroElements.js"
import Sidebar from "../Sidebar/Index.js"

export default function Index() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <NavBar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>A melhor pizza do mundo</HeroH1>
                    <HeroP>pronta em 20 minutos</HeroP>
                    <HeroBtn>Fazer pedido</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}
