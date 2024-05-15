import React, { useState, useEffect } from 'react';
import Stories from 'react-insta-stories';
import { useParams } from 'react-router-dom';
import storiesData from "../dataSource/storiesData";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function StoryComponent() {
    const { categoryName } = useParams();
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const navigate = useNavigate();

    function renderStories() {
        const filteredStories = storiesData.filter(story => story.category === categoryName);
        return filteredStories.map(storyItem => ({
            content: ({ action }) => (
                <div className="w-screen h-screen" style={{ backgroundImage: `url(${storyItem.backgroundImage})` }}>
                    <div className="text-2xl text-white mt-20 font-bold">
                        <span>{storyItem.caption}</span>
                    </div>
                </div>
            )
        }));
    }

    const goToNextStory = () => {
        if (!isPaused) {
            setCurrentStoryIndex(prevIndex => (prevIndex + 1) % storiesData.length);
        }
    };

    const goToPreviousStory = () => {
        if (!isPaused) {
            setCurrentStoryIndex(prevIndex => (prevIndex - 1 + storiesData.length) % storiesData.length);
        }
    };

    const togglePause = () => {
        setIsPaused(prev => {
            if (!prev) {
                setCurrentStoryIndex(0);
            }
            return !prev;
        });
    };

    useEffect(() => {
        let storyTimer;
        if (!isPaused) {
            // Set a timer to navigate back to the home screen after the story interval is over
            storyTimer = setTimeout(() => {
                navigate('/'); // Navigate to the home screen
            }, storiesData.length * 5000); // Multiply the number of stories by the interval time
        }

        // Clear the timer when component unmounts or when paused
        return () => clearTimeout(storyTimer);
    }, [isPaused, navigate]);

    return (
        <div>
            <div className="flex justify-center items-center mt-10">
                <div className="flex justify-center items-center w-20 h-full text-black text-4xl absolute z-10 mr-[280px]" onClick={goToPreviousStory}>
                    
                </div>
                <Stories stories={renderStories()} currentIndex={currentStoryIndex} defaultInterval={5000} onAllStoriesEnd={() => navigate('/')} />
                <div className="flex justify-center items-center w-20 h-full text-black text-4xl absolute z-10 ml-[280px]" onClick={goToNextStory}>
                    
                </div>
            </div>
        </div>
    );
}
