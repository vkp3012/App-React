import React,{useState} from 'react'
import { SLIDES } from  './Data';

function Hello() {
    
    let data = SLIDES;

    const [activeSlideNo,setActiveSlideNo] = useState(0)
    const [currentSlide,setCurrentSlide] = useState(SLIDES[0]);
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledRestart, setDisabledRestart] = useState(true);

    const onclickNext = () => {
        var curSlideNo = activeSlideNo;
      
      if(curSlideNo < data.length-1) {
        curSlideNo ++;
        setActiveSlideNo(curSlideNo);
        setCurrentSlide(data[curSlideNo]);
        setDisabledPrev(false);
        setDisabledRestart(false);
      }

      if(curSlideNo === data.length-1) {
        setDisabledNext(true);
      }
    }

    const onclickPrev = () => {
        var curSlideNo = activeSlideNo;
        
        if(curSlideNo > 0) {
          curSlideNo --;
          setActiveSlideNo(curSlideNo);
          setCurrentSlide(data[curSlideNo]);
          setDisabledNext(false);
        } 
        if(curSlideNo === 0) {
          setDisabledPrev(true);
          setDisabledRestart(true);
        }
      }
  
      const onclickRestart = () => {
        setActiveSlideNo(0);
        setCurrentSlide(data[0]);
        setDisabledPrev(true);
        setDisabledNext(false);
        setDisabledRestart(true);
      }

  return (
    <div>
        <div id='navigation' className='text-center'>
            <button data-testid= "button-restart" className='small outlined' onClick={()=> onclickRestart()} disabled={disabledRestart}>Restart</button>
            <button data-testid= "button-prev" className='small' onClick={()=> onclickPrev()} disabled={disabledPrev}>Prev</button>
            <button data-testid= "button-next" className='small' onClick={()=> onclickNext()} disabled={disabledNext}>Next</button>
        </div>
        <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
        </div>
    </div>
  )
}

export default Hello