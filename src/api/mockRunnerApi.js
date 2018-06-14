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
const generateId = (runner) => {
  return replaceAll(runner.name, ' ', '-');
};

class RunnersApi {
  static getAllRunners() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], runners));
      }, delay);
    });
  }

  static saveRunner(runner) {
    runner = Object.assign({}, runner); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minRunnernameLength = 3;
        if (runner.name.length < minRunnernameLength) {
          reject(`name must be at least ${minRunnernameLength} characters.`);
        }

        if (runner.id) {
          // The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
          const existingRunnerIndex = runners.findIndex(element => element.id === runner.id);
          // The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
          runners.splice(existingRunnerIndex, 1, runner);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new runners in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          runner.id = generateId(runner);
          runners.push(runner);
        }

        resolve(runner);
      }, delay);
    });
  }

  static deleteRunner(runnerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfRunnerToDelete = runners.findIndex(runner => {
          runner.id == runnerId;
        });
        runners.splice(indexOfRunnerToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default RunnersApi;