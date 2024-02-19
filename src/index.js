import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';
import styled from 'styled-components';



// const DragDropContextContainer = styled.div`
//   padding: 20px;
//   border: 4px solid indianred;
//   border-radius: 6px;
//   height: 300px;
//   overflow-y: scroll;
// `;
// const SecondContainer = styled.div`
//   padding: 20px;
//   border: 4px solid indianred;
//   border-radius: 6px;
//   height: 300px;
//   overflow-y: scroll;
// `;

// const FirstContainer = styled.div`
//   padding: 20px;
//   border: 4px solid indianred;
//   border-radius: 6px;
//   height: 300px;
//   overflow-y: scroll;
// `;



class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return(
              // <SecondContainer>
              // <FirstContainer>
                              <Column key={column.id} column={column} tasks={tasks} />
             // {/* </FirstContainer>
             // </SecondContainer> */}
            )
            
          })}

        </DragDropContext>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
