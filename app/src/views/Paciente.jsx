import { useRef } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

function Paciente() {

  const nameRef = useRef();
  const birthRef = useRef();
  const genderRef = useRef();
  const medicalStudiesRef = useRef();

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const birth = birthRef.current.value;
    const gender = genderRef.current.value;
    const medicalStudies = medicalStudiesRef.current.value;

    console.log(name);
    console.log(birth);
    console.log(gender);
    console.log(medicalStudies);

  }

  return (
    <div className='container'>
        <div className='header'>
            <p>Patient's data:</p>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder='Select your name' ref={nameRef}/>
            </div>
            <div className='input'>
                <i className="fa-solid fa-calendar-days"></i>
                <input type="text" placeholder='Select your date of birth' ref={birthRef}/>
            </div>
            <div className='input'>
                <i className="fa-solid fa-venus-mars"></i>
                <input type="text" placeholder='Select your gender' ref={genderRef}/>
            </div>
            <div className='input'>
                <i className="fa-solid fa-file-pdf"></i>
                <input type="text" placeholder='Recent medical studies' ref={medicalStudiesRef}/>
            </div>
            <Link onClick={handleSubmit} to='/chatbotia' className='button'>
                Send
            </Link>
            <Link to='/monitoreo' className='button'>
                Monitoreo
            </Link>
        </div>
    </div>
  )
}

export default Paciente
