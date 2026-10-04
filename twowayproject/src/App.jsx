import React ,{useState}from 'react'
import {Check} from 'lucide-react'
const App = () => {
  const [title,setTitle] = useState('');
  const [details,setDetails] = useState('');
  const [Notes , setNotes] = useState([]);
  const [deleteMsg ,setDeleteMsg] = useState(false);
  const submitHandler =(e)=>{
   e.preventDefault();
  //  console.log(`TITLE :${title} \n About of TITLE : ${details}`);
   
  const Task = [...Notes] ;
  Task.push({title,details});
   setNotes(Task);
   console.log(Task)
   setTitle('');
   setDetails('');
  }

  const deleteNote =(idx)=>{
    const deleteData = [...Notes];
    deleteData.splice(idx,1);
    console.log("data is deleted");
    
    setNotes(deleteData);
    setDeleteMsg(true);
   
  }
  return (
    <div className='w-full h-full flex flex-col p-[20px] bg-black text-white gap-[10px] lg:flex-row h-screen  '>
     
<form
className='w-1/2 flex flex-col gap-[20px] mt-[20px]'
 onSubmit={(e)=>{
  
 submitHandler(e)}}  >
   <h1 className='text-4xl'>Add Notes</h1>


<input
 type="text" placeholder='Enter Notes Heading' className='  p-[20px] border-[3px] border-white border-solid outline-none text-2xl'
 value={title}
 onChange={(e)=>{
setTitle(e.target.value)
setDeleteMsg(false);
 }}
 />

<textarea 
type="text" placeholder='Write Details' className=' p-[10px] h-[200px] border-[3px] border-white border-solid outline-none text-2xl'
onChange={(e)=>{
  setDetails(e.target.value)
  setDeleteMsg(false);
}}
  />

<button
 className=' h-[40px]  text-black bg-green-500 cursor-pointer active:scale-80 rounded-2xl'>
Add Notes
 </button>
</form>

<div className='w-1/2 border-l px-[10px] '>
  <h1 className='text-3xl mb-[10px]'>Your Notes</h1>
  <div className='flex flex-wrap overflow-auto gap-[10px]'>
    {Notes.map((ele,idx)=>{
         return <div key={idx} className='w-[250px] h-[250px] p-4 bg-cover  bg-[url("https://www.nicepng.com/png/full/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png")] rounded-2xl  text-black relative'>
        
           <h1 className='mt-4 text-center  text-2xl font-bold'>{ele.title}</h1>
          <p className='mt-4 text-gray-700 leading-snug'>{ele.details}</p>
         
          <button onClick={()=>deleteNote(idx)} className='w-[130px] h-[25px] bg-red-500 rounded-2xl font-bold absolute bottom-0.5 left-12 cursor-pointer active:scale-75'>Delete</button>
         </div>
    })}
   
   
  </div>
</div>
<div className = {deleteMsg ? "absolute w-[500px] h-[80px] text-white-400 absolute top-150 left-150 font-bold text-5xl bg-green-800 rounded-2xl p-4 flex" : "hidden"}>
  <h2>Note is Deleted ! </h2>
  <Check className='absolute right-2 top-0' size={100} color="#178237" strokeWidth={2.5} />
</div>
    </div>
  )
}

export default App