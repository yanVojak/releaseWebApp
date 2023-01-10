import React, { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import RadioItem from "../../components/RadioItem/RadioItem";
import useTgBackButton from "../../hooks/useTgBackButton";

const topics = [ "Art",
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
"twenteenth",]
export const TopicList = () => {
  const [filteredTopics, setFilteredTopics] = useState(topics);
  const [currentTopic, setCurrentTopic] = useState("");
  const [searchStringText, setSearchStringText] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const questionsRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const { setBackButtonOnClick } =
    useTgBackButton(true);

  const handleBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    setBackButtonOnClick(handleBack);
  }, [handleBack, setBackButtonOnClick]);

  const changeTopic = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentTopic(event.target.value);
      setQuestions([]);
    },
    [setCurrentTopic]
  );

  useEffect(() => {
    setSearchStringText("");
  }, [currentTopic]);

  useEffect(() => {
    setFilteredTopics(
      topics.filter((item) =>
        item.trim().toLocaleLowerCase().includes(searchStringText)
      )
    );
  }, [searchStringText, setFilteredTopics]);

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
      <button onClick={handleBack}>lelvel</button>
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

// type Replacement = [string, string | number | boolean];

export function replaceInUrl(url: string, replacementPairs: string[]): string {
  return url.replace(replacementPairs[0], replacementPairs[1]);
}
