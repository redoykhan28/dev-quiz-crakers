import Option from '../Option/Option';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';


const Question = ({ questionQuiz, correct, incorrect }) => {

    const { question, options, correctAnswer } = questionQuiz;

    const [color, setcolor] = useState(false)


    const correctAnsBtn = (option) => {

        // console.log(option.replace(/\s+/g, ''))
        // console.log(correctAnswer.replace(/\s+/g, ''))

        if (option.replace(/\s+/g, '') === correctAnswer.replace(/\s+/g, '')) {

            toast.success("Correct", { position: "top-center" })
            correct();
            setcolor(!color)
        }

        else {

            toast.error("Incorrect", { position: "top-center" })
            incorrect();
            setcolor(color)
        }
    }

    const eventHadndler2 = (ans) => {

        toast.info(ans, { position: "top-center", theme: "colored" })
    }



    return (

        <div>

            <div className='question p-2 py-md-5 rounded-2  my-3 my-5'>
                <span onClick={() => eventHadndler2(correctAnswer)}><EyeIcon className="icon my-3" /></span>
                <h4 className='mb-5'>Quiz: {question}</h4>

                <div>
                    {
                        options.map(option => <Option key={option.id} option={option} btnHandler={correctAnsBtn}></Option>)
                    }
                </div>

                <ToastContainer
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />

            </div>
        </div>

    );
};

export default Question;