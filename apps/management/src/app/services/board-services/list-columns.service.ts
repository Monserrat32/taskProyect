
import { Injectable } from '@angular/core';
import { Subject ,BehaviorSubject} from 'rxjs';

interface Task {
    id:string;
    title: string;
    description: string;
    status: string;
    subtasks: Subtask[];
}


interface Subtask {
    id:string;
    title: string;
    isCompleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ListColumnsService {
   public taskStatusChanged = new BehaviorSubject<any>(null);
   public  listColumnsSubject = new BehaviorSubject<any[]>([]);
            listColumns$ = this.listColumnsSubject.asObservable();
   private listColumns: any[] = [];
  public  getTodoList(): Task[] {
        return [
            {
                id:'01',
                title: 'Initiate Project Planning',
                description: 'Kick off the project by initiating the planning phase. Define project goals, identify key stakeholders, and create an initial project roadmap. The status is set to "Todo".',
                status: 'Todo',
                subtasks: [
                    { id:'40',title: 'Define project scope and objectives', isCompleted: true },
                    { id:'41',title: 'Identify key project stakeholders', isCompleted: false }
                ]
            },
            {
                id:'02',
                title: 'Task Prioritization and Assignment',
                description: 'Prioritize and assign tasks for the upcoming project sprint. Ensure that each team member is clear on their responsibilities and has a comprehensive understanding of the tasks ahead. The status is set to "Todo".',
                status: 'Todo',
                subtasks: [
                    {id:'42', title: 'Prioritize tasks based on project goals', isCompleted: false },
                    { id:'57',title: 'Assign tasks to respective team members', isCompleted: true }
                ]
            }
        ];
    }
    
  public  getDoneList(): Task[] {
        return [
            {
                id:'03',
                title: 'Project Finalization Meeting',
                description: 'Conduct a comprehensive review and finalize all project documentation in preparation for the client meeting. Ensure that all project requirements are met and that coding standards are double-checked for quality assurance.',
                status: 'Done',
                subtasks: [
                    { id:'24',title: 'Review and approve final documentation', isCompleted: true },
                    {  id:'25',title: 'Verify adherence to coding standards', isCompleted: false }
                ]
            },
            {
                id:'04',
                title: 'Task Documentation Enhancement',
                description: 'Enhance the documentation process for recent task updates by creating detailed and accurate documentation. This involves writing comprehensive task documentation and performing a meticulous verification process to ensure documentation accuracy.',
                status: 'Done',
                subtasks: [
                    { id:'26' ,title: 'Draft detailed task documentation', isCompleted: false },
                    {  id:'27',title: 'Thoroughly verify documentation accuracy', isCompleted: true }
                ]
            }
        ];
    }
 public  getDoingList(): Task[] {
        return [
            {
                id:'05',
                title: 'Progressive Development for Feature Enhancement',
                description: 'Continuously work on the progressive development of features to enhance the overall functionality of the system. The status is set to "Doing".',
                status: 'Doing',
                subtasks: [
                    { id:'28',title: 'Implement core functionality for Feature X', isCompleted: true },
                    { id:'29',title: 'Review and refine code for Feature Y', isCompleted: false }
                ]
            },
            {
                id:'06',
                title: 'User Interface Refinement and Optimization',
                description: 'Focus on refining and optimizing the user interface to improve the overall user experience. This involves ongoing tasks to enhance the visual appeal and responsiveness of the system. The status is set to "Doing".',
                status: 'Doing',
                subtasks: [
                    { id:'30',title: 'Refine layout and styling for Page A', isCompleted: false },
                    { id:'31',title: 'Optimize user interactions for Page B', isCompleted: true }
                ]
            }
        ];
    }


 public getAllLists(): any[] {
        return [
          { title: 'Todo', color:this.randomColor(), items: this.getTodoList(), connectedLists: [] },
          { title: 'Done', color:this.randomColor(), items: this.getDoneList(), connectedLists: [] },
          { title: 'Doing', color:this.randomColor(), items: this.getDoingList(), connectedLists: [] },
        ];
    }

 public emitTaskStatusChanged(task: Task) {
       
    let allLists;

    const storedData = localStorage.getItem('dataListaBoard');
    
    if (!storedData) {
      allLists = this.getAllLists().slice();
      localStorage.setItem('dataListaBoard', JSON.stringify(allLists));
    } else {

      allLists = JSON.parse(storedData);
    }
    
    for (const list of allLists) {
      const taskIndex = list.items.findIndex((item: any) => item.id === task.id);
    
      if (taskIndex !== -1) {
        list.items.splice(taskIndex, 1);
        break;
      }
    }
    
    const destinationList = allLists.find((list: any) => list.title === task.status);
    
    if (destinationList) {
      destinationList.items.push(task);
    }
    
    allLists.forEach((list: any) => {
      list.isEmpty = list.items.length === 0;
    });
    
    this.taskStatusChanged.next(allLists);
    this.listColumnsSubject.next(allLists);
    
    localStorage.setItem('dataListaBoard', JSON.stringify(allLists));
    
  }
  
  public randomColor(): string {
    const letters = '0123456789ABCDEF';
    const color = Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
    return `#${color}`;
 }
  
}