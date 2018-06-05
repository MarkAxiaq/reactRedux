import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const runners = [
  {
    id:1,
    name: "Mark Axiaq",
    age: 28,
    isLongDistance: true,
    worldRecord: true
  },
  {
    id:2,
    name: "Samantha Camilleri",
    age: 26,
    isLongDistance: false,
    worldRecord: false
  },
  {
    id:3,
    name: "Mark Herrera",
    age: 34,
    isLongDistance: false,
    worldRecord: true
  },
  {
    id:4,
    name: "Matthew Schicluna",
    age: 31,
    isLongDistance: true,
    worldRecord: true
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllRunners() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], runners));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = runners.findIndex(a => a.id == course.id);
          runners.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          runners.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = runners.findIndex(course => {
          course.id == courseId;
        });
        runners.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;