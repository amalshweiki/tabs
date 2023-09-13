import { useState,useEffect } from 'preact/hooks'

import './app.css'
import BtnContainer from './BtnContainer';
import JobInfo from './JobInfo';

export function App() {
  const url = 'https://course-api.com/react-tabs-project';
  const [isLoading,setIsLoading]=useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };
  useEffect(() => {
    
    fetchJobs();
  }, []);
  return (
    <>
    <section>
      <BtnContainer 
      jobs={jobs}
       currentItem={currentItem}
        setCurrentItem={setCurrentItem} />
        <JobInfo jobs={jobs} currentItem={currentItem}/>
      </section>
     
    </>
  )
}
