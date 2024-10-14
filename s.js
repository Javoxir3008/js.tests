let courses = [
    {
        title: 'SMM',
        howLong: 3,
    },
    {
        title: 'Dev',
        howLong: 6,
    },
    {
        title: 'Graph',
        howLong: 4,
    },
];

let earnings = {
    total: 0,
    max: 0,
    min: Infinity,
};

let m = 0;
let w = 0;
let average_age = 0;
let smm = 0;
let dev = 0;
let graph = 0;
let students = [
    {
        sex: 'm',
        age: 14,
        payment: 1220000,
        course: {
            title: 'SMM',
        },
    },
    {
        sex: 'm',
        age: 24,
        payment: 1883000,
        course: {
            title: 'Graph',
        },
    },
    {
        sex: 'w',
        age: 16,
        payment: 2190000,
        course: {
            title: 'Dev',
        },
    },
    {
        sex: 'm',
        age: 19,
        payment: 718000,
        course: {
            title: 'Graph',
        },
    },
    {
        sex: 'w',
        age: 15,
        payment: 2195000,
        course: {
            title: 'Dev',
        },
    },
    {
        sex: 'm',
        age: 24,
        payment: 460000,
        course: {
            title: 'SMM',
        },
    },
    {
        sex: 'w',
        age: 14,
        payment: 560000,
        course: {
            title: 'SMM',
        },
    },
    {
        sex: 'w',
        age: 22,
        payment: 160000,
        course: {
            title: 'Dev',
        },
    },
    {
        sex: 'm',
        age: 26,
        payment: 883000,
        course: {
            title: 'Graph',
        },
    },
    {
        sex: 'w',
        age: 26,
        payment: 750000,
        course: {
            title: 'Dev',
        },
    },
    {
        sex: 'm',
        age: 23,
        payment: 212000,
        course: {
            title: 'Graph',
        },
    },
    {
        sex: 'w',
        age: 24,
        payment: 883000,
        course: {
            title: 'Graph',
        },
    },
    {
        sex: 'w',
        age: 27,
        payment: 190000,
        course: {
            title: 'Dev',
        },
    },
    {
        sex: 'w',
        age: 19,
        payment: 210000,
        course: {
            title: 'Graph',
        },
    },
    {
        sex: 'w',
        age: 21,
        payment: 770000,
        course: {
            title: 'Dev',
        },
    },
    {
        sex: 'm',
        age: 18,
        payment: 1200000,
        course: {
            title: 'SMM',
        },
    },
    {
        sex: 'w',
        age: 51,
        payment: 880000,
        course: {
            title: 'SMM',
        },
    },
    {
        sex: 'm',
        age: 51,
        payment: 2430000,
        course: {
            title: 'Dev',
        },
    },
    {
        sex: 'w',
        age: 33,
        payment: 1277000,
        course: {
            title: 'Graph',
        },
    },
    {
        sex: 'w',
        age: 21,
        payment: 2750000,
        course: {
            title: 'Dev',
        },
    },
];

const setup = () => {
    students.forEach(student => {
        
        let courseDetails = courses.find(course => course.title === student.course.title);
        
        if (courseDetails) {
            student.course.howLong = courseDetails.howLong;
        }
    });

    students.forEach((student) => {
        if (student.sex === 'm') {
            m++;
        } else if (student.sex === 'w') {
            w++;
        }
    });


    students.forEach((student) => {
        earnings.total += student.payment
    })

    students.forEach((student) => {
        if (student.payment > earnings.max) {
            earnings.max = student.payment

        }
    })

    students.forEach((student) => {
        if (student.payment < earnings.min) {
            earnings.min = student.payment
        }
    })

    students.forEach((student) => {
        if (student.course.title === "SMM") {
            smm++
        } else if (student.course.title === 'Dev') {
            dev++
        } else if (student.course.title === 'Graph') {
            graph++
        }
    })

    students.forEach((student) => {
        average_age += student.age;
    })
    average_age = average_age / students.length;

}

setup();
console.log( earnings.total);
console.log( earnings.max);
console.log( earnings.min);
console.log( m);
console.log( w);
console.log( dev);
console.log( graph);
console.log( smm);
console.log(average_age);
console.log(students);
