import React from 'react';

import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div>

            <h1>Blogger App</h1>

            {/* Way 1 : if using element variable */}

            {
                showBooks
                ? <BookDetails />
                : null
            }

            {/* Way 2 : Logical AND */}

            {
                showBlogs && <BlogDetails />
            }

            {/* Way 3 : Ternary */}

            {
                showCourses
                ? <CourseDetails />
                : <h3>No Courses Available</h3>
            }

        </div>

    );

}

export default App;