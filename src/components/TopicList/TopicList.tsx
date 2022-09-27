import react, { useState, useCallback, useEffect, useRef } from "react";
import RadioItem  from "../../components/RadioItem/RadioItem";

interface ITopicLIstProps {
  onChangeTopic: (topic: string) => void;
}
export const TopicList: React.FC<ITopicLIstProps> = ({ onChangeTopic }) => {
  const topis = [
    "Art",
    "Cinema",
    "Sport",
    "Family",
    "Pets",
    "Test1",
    "Test2",
    "Test3",
    "Test4",
    "Test5",
    "Test6",
    "Test7",
    "elventh",
    "twelves",
    "fourteenth",
    "fivteents",
    "sexteenth",
    "seveteenth",
    "eighteenth",
    "ninteeth",
    "twenteenth",
  ];
  const [filteredTopics, setFilteredTopics] = useState(topis);
  const [currentTopic, setCurrentTopic] = useState("");
  const [searchStringText, setSearchStringText] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const questionsRef = useRef<HTMLDivElement>(null);

  const changeTopic = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentTopic(event.target.value);
      setQuestions([]);
    },
    [setCurrentTopic]
  );

  useEffect(() => {
    onChangeTopic(currentTopic);
    setSearchStringText('');
  }, [currentTopic]);

  useEffect(() => {
    setFilteredTopics(
      topis.filter((item) =>
        item.trim().toLocaleLowerCase().includes(searchStringText)
      )
    );
  }, [searchStringText]);

  useEffect(() => {
    if (!currentTopic) {
      window.Telegram.WebApp.MainButton.disable();
    } else {
      window.Telegram.WebApp.MainButton.enable();
    }
  }, [currentTopic]);

  useEffect(() => {
    let idTimout: ReturnType<typeof setTimeout>;

    if (currentTopic) {
      idTimout = setTimeout(() => {
        setQuestions([
          "first",
          "second",
          "third",
          "fourth",
          "fivth",
          "sixth",
          "seventh",
          "eighth",
          "ninth",
          "tenth",
        ]);
      }, Math.floor(Math.random() * (800 - 200 + 1) + 200));
    }
    return () => clearTimeout(idTimout);
  }, [currentTopic, setQuestions]);

  useEffect(() => {
    if (questions.length) {
      questionsRef.current?.scrollIntoView(false);
    }
  }, [questions]);

  return (
    <div>
      {filteredTopics.map((topic) => (
        <div key={topic}>
          <RadioItem
            radioGroupName="languages"
            label={topic}
            onChange={changeTopic}
            isSelected={topic === currentTopic}
          />
          {currentTopic === topic
            ? questions.map((question) => (
                <div ref={questionsRef} key={question}>
                  {question}
                </div>
              ))
            : null}
        </div>
      ))}
    </div>
  );
};
