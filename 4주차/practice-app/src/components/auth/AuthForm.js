import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #343a40;
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #868e96;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid #495057;
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 버튼 스타일링
 */
const StyledButton = styled.button`
  margin-top:20px;
  padding:5px;
  width:100%;
  background-color: #e3e3e3;
  border-width: 1px;
  &:hover {
    background-color: #bdbdbd;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #868e96;
    text-decoration: underline;
    &:hover {
      color: #212529;
    }
  }
`;

const textMap = {
    login: '로그인',
    register: '회원가입',
};

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const AuthForm = ({ type }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [date, setDate] = useState('2020-11-09');
  const [phonenumber, setPhonenumber] = useState('');
  const [sex, setSex] = useState('여');

  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
          <StyledInput autoComplete="username" name="username" placeholder="아이디"
            onChange = {
            (e) => {
              setUsername(e.target.value);
            }
          }/>
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
          />
          {type === 'register' && (
            <>
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
          <StyledInput
            autoComplete="random-name"
            name="name"
            placeholder="이름"
            onChange = {
              (e) => {
                setName(e.target.value);
              }
            }/>
        <FormGroup>
          <Label for="exampleDate">생년월일 </Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
            onChange = {
              (e) => {
                setDate(e.target.value);
              }
            }
          />
        </FormGroup>
          <select name = "성별" onChange = {
              (e) => {
                setSex(e.target.value);
              }
          }>
            <option>여자</option>
            <option>남자</option>
          </select>
          <StyledInput
            autoComplete="phone-number"
            name="phoneNumber"
            placeholder="전화번호"
            onChange = {
              (e) => {
                setPhonenumber(e.target.value);
              }
            }
          />
          </>
        )}
        <StyledButton
          onClick = {() => 
          {type === 'login' ? (
              alert('아이디 : '+username)
            ) : (
              alert('아이디 :' + username + '\n이름 : '+name+'\n성별 : '+sex+'\n생년월일 : '+date+'\n전화번호 : '+phonenumber)
            )}
          }>
          {text}
        </StyledButton>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
