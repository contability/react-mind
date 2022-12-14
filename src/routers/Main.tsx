import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main : Function = () => {
    const navigate : Function = useNavigate();
    const movePage : Function = (path : string) => {
        navigate(path);
    };

   

    return (
        <MainBox>
            <ul>
                <li>
                    <button onClick={() => movePage("/")}>Go To Main</button>
                </li>
                <li>
                    <button onClick={() => movePage("/ReactHookForm")}>Go To ReactHookForm</button>
                </li>
            </ul>
            
            
        </MainBox>
    );
};

const MainBox = styled.div`
    width: 100%;
    height: 100%;
`;

export default Main;