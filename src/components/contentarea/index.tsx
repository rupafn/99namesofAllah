import QuizArea from "./QuizArea";
import LearnArea from "./LearnArea";

export default function ContentArea(props:any) {
    const {active} = props;
    return active === "learn" ? <LearnArea /> : <QuizArea/>;
}