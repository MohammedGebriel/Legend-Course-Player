"use client"; 
import { createContext, useContext, useEffect, useState } from "react";
import CourseImage1 from '../assets/course details image.png';
import CourseImage2 from '../assets/course details 2.jpg';
import Student1 from '../assets/comments 1.png';
import Student2 from '../assets/comments 2.png';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [courses, setCourses] = useState([
        {
            id: 0,
            price: 100,
            currentLesson: 0,
            courseVideo: "/lesson1.mp4",
            courseImage: CourseImage1,
            progress: 0,
            instructorName: "Mohammed Gebriel",
            courseName: "Starting SEO as your Home",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, adipisci?',
            duration: '3 Weeks',
            students: 65,
            languge: 'English',
            comments: [
                {
                    id: 0,
                    studentImage: Student1,
                    studentName: 'Mohammed Gebriel',
                    commentDate: '2 Days Ago',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'
                },
                {
                    id: 1,
                    studentImage: Student2,
                    studentName: 'Ali',
                    commentDate: '5 Days Ago',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'
                },
                {
                    id: 2,
                    studentImage: Student1,
                    studentName: 'Mohammed Gebriel',
                    commentDate: '10 Days Ago',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'
                },
            ],
            lessons: [
                {
                    id:0,
                    lessonName: 'Introduction to SEO',
                    lessonVideo: "/lesson1.mp4",
                    watchStatus: true,
                    isWatch: false,
                },
                {
                    id:1,
                    lessonName: 'Course Overview',
                    lessonVideo: "/lesson2.mp4",
                    watchStatus: false,
                    isWatch: false,
                },
                {
                    id:2,
                    lessonName: 'Course Exercise / Reference Files',
                    lessonVideo: "/lesson3.mp4",
                    watchStatus: false,
                    isWatch: false,
                },
                {
                    id:3,
                    lessonName: 'Code Editor Installation',
                    lessonVideo: "/lesson4.mp4",
                    watchStatus: false,
                    isWatch: false,
                },
                {
                    id:4,
                    lessonName: 'Embedding PHP in HTML',
                    lessonVideo: "/lesson5.mp4",
                    watchStatus: false,
                    isWatch: false,
                },
            ]
        },
        {
            id: 1,
            price: 100,
            description: 'dolor sit amet consectetur adipisicing elit. Numquam, adipisci',
            currentLesson: 0,
            courseVideo: "/lesson2.mp4",
            courseImage: CourseImage2,
            progress: 0,
            instructorName: "Mostafa Gebriel",
            courseName: "Starting JavaScript From Zero",
            duration: '3 Months',
            students: 20,
            languge: 'English',
            comments: [
                {
                    id: 0,
                    studentImage: Student1,
                    studentName: 'Mohammed Gebriel',
                    commentDate: '2 Days Ago',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'
                },
                {
                    id: 1,
                    studentImage: Student2,
                    studentName: 'Ali',
                    commentDate: '5 Days Ago',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'
                },
                {
                    id: 2,
                    studentImage: Student1,
                    studentName: 'Mohammed Gebriel',
                    commentDate: '10 Days Ago',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'
                },
            ],
            lessons: [
                {
                    id:0,
                    lessonName: 'Introduction to SEO',
                    lessonVideo: 'video',
                    watchStatus: true,
                    isWatch: false,
                },
                {
                    id:1,
                    lessonName: 'Introduction to SEO',
                    lessonVideo: 'video',
                    watchStatus: false,
                    isWatch: false,
                },
            ]
        }
    ]);
    const updateLessonProperty = (courseId, lessonId, property, value) => {
        setCourses((prevCourses) =>
            prevCourses.map((course) =>
                course.id === courseId
                ? {
                    ...course,
                    lessons: course.lessons.map((lesson) =>
                        lesson.id === lessonId ? { ...lesson, [property]: value } : lesson
                    ),
                    }
                : course
            )
            );
    };
    const updateCourseProperty = (courseId, property, value) => {
        setCourses((prevCourses) =>
            prevCourses.map((course) =>
            course.id === courseId ? { ...course, [property]: value } : course
            )
        );
    };
    useEffect(() => {
        localStorage.setItem("courses", JSON.stringify(courses));
    },[courses])
    return ( 
        <DataContext.Provider value={{ courses, setCourses, updateLessonProperty, updateCourseProperty}}>
        {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);
