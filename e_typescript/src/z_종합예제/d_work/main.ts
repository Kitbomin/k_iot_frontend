
//! 사용자로부터 입력받은 할 일을 관리하는 Task Logger

// 1. 할 일 타입 정의 - 인터페이스
interface Task {
  id: number;
  description: string;
  timestamp: Date; //생성시간

}

// Task 저장소의 구조 - 클래스
// : 할 일에 대한 저장소(배열)와 기능(함수) 명시
class TaskLogger {
  // Task 빈 배열로 초기화
  private tasks: Task[] = [];
  
  // 할 일의 ID 생성을 위한 카운터
  private taskIdCounter = 0;
  
  addTask(description: string): Task {
    const newTask: Task = {
      // 현재 카운터 값응로 ID 지정 후 증가
      id: this.taskIdCounter++,
      
      // 매개변수의 특권임 -> 변수 이름이 key로, 값이 value로 담김
      description,

      timestamp: new Date()
    }

    this.tasks.push(newTask);
    this.renderTasks(); // 할일 목록을 화면에 재랜더링 (다시 출력)
    return newTask;
  }

  deleteTask(taskId: number): void {
    // 현재의 tasks 배열을 순회하여 순회되는 요소의 id와 삭제하고자하는 요소의 id(매개변수 값)가 일치하지 않는 요소만 새로운 배열에 담아 tasks에 저장
    this.tasks = this.tasks.filter(task =>  task.id !== taskId); 

    this.renderTasks();
  }

  private createTaskElement(task: Task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    taskItem.innerHTML = `
      <span>${task.description} - ${task.timestamp.toLocaleString()}</span>
      <button data-task-id=${task.id}>Delete</button>
    `;

    return taskItem;
  }

  private renderTasks() {
    const taskList = document.getElementById('task-list');

    if (taskList) {
      taskList.innerHTML = '';
      this.tasks.forEach(task => {
        const taskItem = this.createTaskElement(task);
        taskList.appendChild(taskItem);
      });

      this.addDeleteEventListeners();
    }
  }

  private addDeleteEventListeners() {
    const deleteButtons = document.querySelectorAll('.task-item button');

    deleteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // 데이터 셋 들고올거니까
        const taskId = parseInt((e.target as HTMLButtonElement).dataset.taskId || '0', 10);

        this.deleteTask(taskId);
      });
    })
  }
}

//! 프로젝트 실행의 진입점
const init = (): void => {
  //? TaskManager 인스턴스 생성
  const taskManager = new TaskLogger();

  const logTaskButton = document.getElementById('log-task-button');

  const taskModal = document.getElementById('task-modal');
  const closeModalButton = document.querySelector('.close');
  const addTaskButton = document.getElementById('add-task-button');
  const taskInput = document.getElementById('task-input') as HTMLInputElement;

  if (logTaskButton) {
    logTaskButton.addEventListener('click', () => {
      if (taskModal) {
        taskModal.style.display = 'block';
        taskInput.focus();
      }
    });
  }

  if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
      if (taskModal) {
        taskModal.style.display = 'none';
      }
    });
  }

  window.addEventListener('click', (e) => {
    // 이벤트가 발생된 요소 범위가 modal 내부의 modal-content가 아닌 실질적인 taskModal 인 경우를 확인하기 위해서
    if (e.target === taskModal) {
      if (taskModal) {
        taskModal.style.display = 'none';
      }
    }
  });
  
  const handleAddTask = () => {
    const description = taskInput.value;
    if (description && description.trim() !== '') {
      taskManager.addTask(description.trim());
      taskInput.value = '';

      taskModal!.style.display = 'none'; //if 조건문 대신
    } else {
      alert('Task 설명은 필수값입니다. 내용을 입력해주세요.');
    }
  };

  // 조건문 대신
  addTaskButton?.addEventListener('click', handleAddTask);

  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);