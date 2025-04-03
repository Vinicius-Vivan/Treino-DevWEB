// src/components/ToDoList.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const TaskInput = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  background: ${({ theme }) => theme.colors.light};
  padding: 10px;
  color: #000;
  margin-top: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: darkred;
  }
`;

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // Lista de tarefas
  const [taskInput, setTaskInput] = useState(''); // Valor do input

  const handleAddTask = () => {
    if (taskInput.trim() === '') return; // Impede tarefas vazias

    const newTask = { id: Date.now(), text: taskInput }; // Cria a nova tarefa
    setTasks([...tasks, newTask]); // Atualiza o estado da lista
    setTaskInput(''); // Limpa o input
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id)); // Remove a tarefa pelo ID
  };

  return (
    <TodoWrapper>
      <h2>Tarefas</h2>
      <TaskInput
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <AddButton onClick={handleAddTask}>Adicionar</AddButton>

      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {task.text}
            <DeleteButton onClick={() => handleDeleteTask(task.id)}>X</DeleteButton>
          </TaskItem>
        ))}
      </TaskList>
    </TodoWrapper>
  );
};

export default ToDoList;
