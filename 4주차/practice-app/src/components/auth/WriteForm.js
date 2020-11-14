import React, {useState} from 'react';
import styled from 'styled-components';

const WriteFormBlock = styled.div`
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

const WriteForm = () => {
    const [ lists, setLists ] = useState([
        {
            id: 1,
            title: "첫 번째 글",
            contents: "React 첫 study"
        }
    ]);
    const [inputTitle, setTitle] = useState('');
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(2);

    const contentsList = lists.map(list => <li key={list.id}><p>글 제목 : {list.title}<br/>내용 : {list.contents}</p></li>)
    return (
        <WriteFormBlock>
            <StyledInput
                placeholder="글 제목"
                value={inputTitle}
                type="text"
                onChange={e => setTitle(e.target.value)}/>
            <StyledInput 
                placeholder="내용"
                value={inputText} 
                type="text"
                onChange={e => setInputText(e.target.value)}/>
            <button onClick={() => {
                const nextLists = lists.concat({
                    id: nextId,
                    title: inputTitle,
                    contents: inputText
                })
                setNextId(nextId + 1);
                setLists(nextLists);
                setTitle('');
                setInputText('');
            }}>작성하기</button> 
            <ul>{contentsList}</ul>
        </WriteFormBlock>
    )
}

export default WriteForm;