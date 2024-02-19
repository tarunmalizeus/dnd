import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const SecondContainer = styled.div`
  padding: 20px;
  border: 4px solid black;
  border-radius: 6px;
  height: 200px;
  overflow-y: scroll;
`;

const FirstContainer = styled.div`
  padding: 20px;
  border: 4px solid black;
  border-radius: 6px;
  height: 100px;
  overflow-y: scroll;
`;



const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>


          {provided => (

              <SecondContainer>
              <FirstContainer>

            <TaskList innerRef={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>

             </FirstContainer>

                <div>Tarun</div>
                <div>Tarun</div>
                <div>Tarun</div>
                <div>Tarun</div>
                <div>Tarun</div>
                <div>Tarun</div>
                <div>Tarun</div>
                <div>Tarun</div>

             </SecondContainer>

          )}



        </Droppable>
      </Container>
    );
  }
}
