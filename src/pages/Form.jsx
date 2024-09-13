import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog } from '../components/ui/dialog'
import { Input } from '../components/ui/input'
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"
const questions = [
    {
      id: 1,
      text: "How can storytelling help with memory retention in your course?",
      options: [
        "Sharing a historical anecdote that illustrates a key concept.",
        "Providing a case study of how a company applied the course material.",
        "Reading a fictional story completely unrelated to the course topic.",
        "Using mnemonic devices to remember important facts."
      ]
    },
    {
      id: 2,
      text: "Which learning style is most effective for visual learners?",
      options: [
        "Reading textbooks",
        "Listening to lectures",
        "Watching video demonstrations",
        "Hands-on experiments"
      ]
    },
    {
      id: 3,
      text: "What is the primary benefit of peer-to-peer learning?",
      options: [
        "Reduced workload for instructors",
        "Improved social skills",
        "Enhanced understanding through explanation",
        "Faster completion of coursework"
      ]
    },
    {
      id: 4,
      text: "What is the primary benefit of peer-to-peer learning?",
      options: [
        "Reduced workload for instructors",
        "Improved social skills",
        "Enhanced understanding through explanation",
        "Faster completion of coursework"
      ]
    },
    {
        id: 5,
        text: "What is the primary benefit of peer-to-peer learning?",
        options: [
          "Reduced workload for instructors",
          "Improved social skills",
          "Enhanced understanding through explanation",
          "Faster completion of coursework"
        ]
      }
  ];

function Form() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [quizCompleted, setQuizCompleted] = useState(false);
  
    const handleAnswerSelection = (answer) => {
      setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: answer }));
    };
  
   console.log("answersanswers",answers);
   
    const handleNext = () => {
        if (answers[questions[currentQuestion].id]) {
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
          } else {
            setQuizCompleted(true);
          }
        } else {
          alert("Please select an answer before proceeding.");
        }
      };
  
    // const handleNext = () => {
    //   if (currentQuestion < questions.length - 1) {
    //     setCurrentQuestion((prev) => prev + 1);
    //   } else {
    //     setQuizCompleted(true);
    //   }
    // };
  
    const handlePrevious = () => {
      if (currentQuestion > 0) {
        setCurrentQuestion((prev) => prev - 1);
      }
    };
  
    const handleRestart = () => {
      setCurrentQuestion(0);
      setAnswers({});
      setQuizCompleted(false);
    };
  
    const progress = ((currentQuestion + 1) / questions.length) * 100;
  
    if (quizCompleted) {
      return (
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Quiz Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {questions.map((question) => (
                <div key={question.id} className="border-b pb-4 last:border-b-0">
                  <p className="font-semibold mb-2">{question.text}</p>
                  <p className="text-primary">Your answer: {answers[question.id]}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRestart} className="w-full">Restart Quiz</Button>
          </CardFooter>
        </Card>
      );
    }
  
    const currentQuestionData = questions[currentQuestion];
  
    return (
     <div className='w-screen p-[20px] '>
      <Card className=" w-full border-2 border-primary rounded-lg ">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Question {currentQuestion + 1} of {questions.length}</CardTitle>
          <Progress value={progress} className="w-full bg-blue-200 h-[6px]" />
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-lg">{currentQuestionData.text}</p>
          <RadioGroup value={answers[currentQuestionData.id] || ""} onValueChange={handleAnswerSelection}>
            {currentQuestionData.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${
                  answers[currentQuestionData.id] === option ? "bg-blue-200" : "hover:bg-secondary"
                }`}
              > 
               <div>{index+1}.</div>
                <RadioGroupItem value={option} id={`answer-${index}`} className="sr-only" />
                <Label
                  htmlFor={`answer-${index}`}
                  className="flex items-center justify-between w-full cursor-pointer"
                >
                  <span>{option}</span>
                  {answers[currentQuestionData.id] === option && (
                    <CheckCircle2 className="w-5 h-5 text-primary " />
                  )}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
          Previous
            {/* <ChevronLeft className="mr-2 h-4 w-4" /> Previous */}
          </Button>
          <Button onClick={handleNext}>
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
          </Button>
        </CardFooter>
      </Card>
      </div>
    );
}
  
export default Form
