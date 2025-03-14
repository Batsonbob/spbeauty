import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    background-color: #F8FAFC;
    color: #0F172A;
    &:hover {
        background-color: #F8FAFC;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='text-caption-rg'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;