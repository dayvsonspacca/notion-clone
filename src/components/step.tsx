
type StepProps = {
    text: string;
}

function Step(props: StepProps) {
    return (
        <div className="h-10">
            <li className="ml-10 text-xl list-disc h-10">{props.text}</li>
        </div>
    );
}

export default Step;