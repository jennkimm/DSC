import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

const NavBarBlock = styled.nav`
    background-color: #f6edb4;
    padding: 2rem;
`;

const MainPage = () => {
    return (
        <NavBarBlock>
            <a href="/">홈</a>
            <a href="/login">로그인</a>
            <a href="/register">회원가입</a>
            <a href="/write">글쓰기</a>
        </NavBarBlock>
    )
}

export default MainPage;