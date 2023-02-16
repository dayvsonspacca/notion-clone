import { useState } from 'react';
// import { useParams } from 'react-router-dom';

import Step from "./step";

interface StepInterface {
    id: number;
    text: string;
}

function NotionInfo() {
    // const { id } = useParams();
    
    const [steps, setSteps] = useState<StepInterface[]>([]);
    const [newStep, setNewStep] = useState<string>('');

    const addStep = () => {
        if (newStep.length > 0) {
            const newStepObj = {
                id: steps.length + 1,
                text: newStep,
            };
            setSteps([...steps, newStepObj]);
            setNewStep('');
        }
    };

    return (
        <div className="flex flex-col h-5/6 w-full">
            <h1 className="text-center font-bold text-5xl pb-5">{ }</h1>
            <div className="overflow-y-auto max-h-96 h-full">
                <ul className="flex flex-col list">
                    {steps.map((step) => <Step key={step.id} text={step.text} />)}
                </ul>
            </div>
            <div className="w-full h-20 mb-4 flex justify-center">
                <div className="w-5/6 rounded bg-darklight flex flex-row">
                    <div className="w-4/5">
                        <input
                            className="h-full w-full bg-transparent placeholder-white text-white ml-8 leading-5 focus:outline-none focus:ring-0"
                            type="text"
                            placeholder="Digite seu proxímo passo aqui..."
                            onChange={(event) => setNewStep(event.target.value)}
                            value={newStep}
                        />
                    </div>
                    <button className="w-1/5 rounded-r hover:bg-slate-400" onClick={addStep}><i className="fa fa-paper-plane"></i></button>
                </div>
            </div>
        </div >
    );
}


export default NotionInfo;