
import Duties from './Duties'
const JobInfo = ({ jobs, currentItem }) => {
 
return (
  
    <article className='job-info'>
       <pp>{jobs[currentItem ].title} </pp>
  {/* <pp>{jobs[currentItem ].company}</pp> 
    <pp>{jobs[currentItem ].dates}</pp> 
     */}
    {/* <Duties duties={jobs[currentItem ].duties}/>   */}

    </article>
    
 
)
  
}

export default JobInfo
