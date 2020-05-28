import React, { useState } from 'react';

import AddButton from './AddButton';
import TodoInput from './TodoInput';

interface Props {}

const AddTodo = ({ }: Props) => {
    // addButton 컴포넌트 눌렀을 때, 할일을 입력하는 컴포넌트(TodoInput)을 화면에 표시하기 위해 생성
    const [showInput, setShowInput] = useState<boolean>(false);
    
    return (
        <>
            <AddButton onPress={() => setShowInput(true)} />
            {showInput && <TodoInput hideTodoInput={() => setShowInput(false)}/>
            }
        </>
    );
};
export default AddTodo;