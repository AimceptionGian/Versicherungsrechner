import '../styles/App.css';
import Progress from '../components/Progress';
import Menu from '../components/Menu';
import Info from '../components/Info';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { moduleList } from '../components/Modules';

const Choose = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [tempHoverIndex, setTempHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
        setTempHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    const navigate = useNavigate();
    
    function handleContinueButton() {
        navigate("/Questions");
    }

    return (
        <div className='Choose'>
            <header>
                <Menu />
                <Progress progressBarValue1='0.5' progressBarValue2='0'/>
            </header>
            <div className='Content'>
                <div className='HorizontalTop'>
                    <md-list>
                        <md-list-item onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                            {moduleList[0]}
                        </md-list-item>
                    </md-list>
                    <md-list>
                        <md-list-item onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                            {moduleList[1]}
                        </md-list-item>
                    </md-list>
                    <md-list>
                        <md-list-item onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                            {moduleList[2]}
                        </md-list-item>
                    </md-list>
                    <md-list>
                        <md-list-item onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                            {moduleList[3]}
                        </md-list-item>
                    </md-list>
                </div>
                <div onMouseEnter={() => handleMouseEnter(tempHoverIndex)} onMouseLeave={handleMouseLeave} className={`InfoMouseHandler ${hoverIndex === null ? '' : 'visible'}`}>
                    <Info hoverIndex={hoverIndex} />
                </div>
                <div className='Continue'>
                    <md-filled-button onClick={handleContinueButton}>Weiter</md-filled-button>
                </div>
            </div>
        </div>
    );
}

export default Choose;