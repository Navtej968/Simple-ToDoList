import {useState , useRef, useEffect} from 'react';
import './index.css';

let indexForEdit = 0;

function ToDoList(){
   const [task ,Settask] = useState([]);
   const [newTask , SetnewTask] = useState("");
   const [isEditing , setisEditing] =  useState(false);
   const inputRef =  useRef();
   function handleInput(event){
     SetnewTask(event.target.value)
   }
   function handleEdit(index){
      SetnewTask(task[index]);
      inputRef.current.focus();
      indexForEdit = index;
      // console.log(indexForEdit);
      setisEditing(true);
   }  
   function edit()
   {
      task[indexForEdit] = inputRef.current.value;
      SetnewTask("");
      setisEditing(false);
      // console.log(indexForEdit);
   }
   function addTask(){
      if(newTask.trim() !== "")
      {
      Settask(t=> [ ...t , newTask])
      SetnewTask("")
      }
   }
   function deleteTask(index){
      const update = task.filter((_, i) => i!==index);
      Settask(update);
   }
   function donetask(event){
      
      if(event.target.style.backgroundColor !== "green")
         event.target.style.backgroundColor = "green";
      else
         event.target.style.backgroundColor = "white";
      
   }
   return (
      <div class="to-do-list">
         <h1>TO DO LIST</h1>
         <div>
            <input
               type="text"
               placeholder="Enter your task"
               value = {newTask}
               onChange={handleInput}
               ref={inputRef}/>
            {isEditing && <button onClick={edit} className='add-btn'>Save ToDo</button>}
            <button onClick={addTask} className='add-btn'>ADD</button>

         </div>
            <ol>
               {
                  task.map((item , index) => 
                     <div className='container'>
                     <li 
                     key={index} > 
                     <span className="text">
                        {item}
                     </span>
                     <button  className="done-btn" onClick={donetask} id="done-btn">👍</button>
                     <button onClick={()=>deleteTask(index)} className='delete-btn'>DELETE</button>
                     <button onClick={()=>handleEdit(index)} className='delete-btn' >UPDATE</button>
                     </li>
                     </div>
                  )  
               }  
            </ol>
         </div>
   )
}

export default ToDoList;