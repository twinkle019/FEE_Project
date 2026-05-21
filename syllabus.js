/* SEMESTER START DATE */

const startDate = new Date("2026-01-20")
const subjects = {
OS: "osSyllabus",
C: "cSyllabus",
JS: "jsSyllabus",
DM: "discreteMathSyllabus",
SOFT: "softComputingSyllabus"

};

/* TIMETABLE */

const timetable = {

1:["C","C","DM","FAA","OS"],        // Monday
2:["DM","FEE","FEE","FAA","C","C"],         // Tuesday
3:["DM","OS","FAA","C","C"],        // Wednesday
4:["FEE","FEE","OS","FAA","C","C"],           // Thursday
5:["FEE","OS","OS","C","C"]         // Friday

}

/* os LECTURE-WISE SYLLABUS */

const osSyllabus = [
/* 1–2 */
"Introduction to Operating Systems: Definition, goals, and functions of OS.",
"Operating System as a resource manager and abstraction provider.",
/* 3–4 */
"Computer System Architecture: Dual-mode operation and I/O structure.",
"Interrupts, system boot process and system architecture overview.",
/* 5–8 */
"OS Structure: Monolithic, Layered, Microkernel architecture.",
"Kernel, Shell, System Components and OS services.",
"System calls and OS service mechanisms.",
"Introduction to Linux OS: History, philosophy, distributions and architecture overview.",
/* 9–12 */
"Linux Basic Commands: Navigation commands (ls, cd).",
"Linux File Manipulation Commands (cp, mv, rm).",
"Linux Viewing Commands (cat, less).",
"Process Management: Process concept and definition.",
/* 13–16 */
"Process Control Block (PCB), process states and state transition diagram.",
"Process operations: creation, termination, context switching and IPC basics.",
"Threads: Concept of threading, process vs thread, benefits.",
"User-level and kernel-level threads and multithreading models.",
/* 17–20 */
"CPU Scheduling: Scheduling criteria, FCFS scheduling algorithm.",
"SJF scheduling and Priority scheduling algorithms.",
"Round Robin scheduling and multiprocessor scheduling.",
"Linux scheduling overview and implementation concepts.",
/* 21–25 */
"Process Synchronization: Critical section problem and requirements.",
"Peterson’s solution for synchronization.",
"Synchronization hardware, semaphores and mutex locks.",
"Classical problems: Bounded Buffer problem.",
"Readers-Writers problem and synchronization concepts.",
/* 26–28 */
"Deadlocks: System model and necessary conditions.",
"Deadlock prevention and avoidance techniques.",
"Banker’s Algorithm: Concept and working.",
/* 29–30 */
"Memory Management: Logical vs physical address space and MMU.",
"Swapping, contiguous memory allocation and fragmentation.",
/* 31–34 */
"Paging concept and page tables.",
"Segmentation memory management technique.",
"Virtual Memory concept and demand paging.",
"Page replacement algorithms (FIFO, NRU, LRU, Optimal) and Thrashing.",
/* 35–36 */
"Linux memory management overview, free and vmstat commands.",
"Memory allocation system calls (malloc, sbrk).",
/* 37–40 */
"Virtualization basics: Why virtualization emerged and concept of virtual machines.",
"VM vs Containers concept and OS role in isolation.",
"GPU and OS interaction: GPU as shared OS resource and CPU vs GPU philosophy.",
"How OS interacts with GPU, GPU memory and scheduling.",
/* 41–44 */
"File System Concepts: File attributes, access methods and directory structures.",
"File protection mechanisms and file allocation methods.",
"Free space management in file systems.",
"Secondary storage and disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN).",
/* 45 */
"Linux file management commands: chmod, chown, ln, mount, df, du and file system system calls (open, read, write, close, lseek, stat)."
];
const cSyllabus = [

/* UNIT 1 (Lecture 1–15) */

"History of C language and its development.",
"Role of C in system programming and its influence on modern languages.",
"Basic structure of a C program and understanding the main() function.",
"Preprocessor directives (#include, #define) and comments in C.",
"Basic syntax rules of C programming.",
"Input and Output using printf() for output.",
"Input using scanf() for user input.",
"Variables and constants: declaration and initialization.",
"Naming conventions for variables and identifiers.",
"Data types in C: int, char, float, double.",
"Type modifiers: signed, unsigned, short, long.",
"Operators in C: Arithmetic operators.",
"Relational and logical operators.",
"Assignment operators, increment/decrement operators.",
"Bitwise operators, ternary operator, and type conversion (implicit & explicit casting).",

/* UNIT 2 (Lecture 16–30) */

"Conditional statements: if statement.",
"if–else statement and nested if statements.",
"else-if ladder and switch-case statements.",
"Loops in C: introduction to iteration.",
"for loop usage and examples.",
"while loop and do-while loop.",
"Jump statements: break and continue.",
"goto statement and its usage.",
"Arrays: declaration and initialization of one-dimensional arrays.",
"Accessing and manipulating elements in arrays.",
"Multidimensional arrays (2D arrays) and their applications.",
"Strings as character arrays.",
"String manipulation using <string.h> functions (strcpy, strcat).",
"More string functions: strlen, strcmp and practical examples.",
"Introduction to functions and function prototypes.",

/* UNIT 3 (Lecture 31–45) */

"Function definition and function calling in C.",
"Types of functions: user-defined vs standard library functions.",
"Parameter passing: call by value.",
"Parameter passing: call by reference.",
"Recursion concept and recursive function basics.",
"Recursive examples such as factorial and Fibonacci series.",
"Storage classes in C: auto and register.",
"Storage classes: static and extern.",
"Pointers: introduction to memory addresses and pointer declaration.",
"Pointer initialization and pointer operators (& and *).",
"Pointer arithmetic and pointer increment/decrement.",
"Relationship between arrays and pointers.",
"Pointer to array and array of pointers.",
"Passing pointers to functions and returning pointers from functions.",
"Function pointers and their applications.",

/* UNIT 4 (Lecture 46–60) */

"Dynamic memory allocation: introduction and need.",
"Memory management functions: malloc() and calloc().",
"Memory management functions: realloc() and free().",
"Understanding and avoiding memory leaks.",
"Structures: defining and declaring structures.",
"Accessing structure members and arrays of structures.",
"Pointers to structures and structure manipulation.",
"Unions and differences between structures and unions.",
"Enumerations (enum) for named integer constants.",
"typedef for creating aliases for existing data types.",
"File handling basics and file operations.",
"File modes: r, w, a, r+, w+, a+.",
"File I/O functions: fopen(), fclose(), fprintf(), fscanf().",
"Character and string file functions: fgetc(), fputc(), fgets(), fputs().",
"Binary file functions: fread(), fwrite(), random access using fseek(), ftell(), rewind(), command line arguments (argc, argv), bit fields, and variable argument lists using <stdarg.h>."

];
const jsSyllabus = [

/* 1–4 */

"Introduction to JavaScript: History and evolution of JavaScript.",
"Role of ECMAScript standards and overview of ES6+ features.",
"Variables in JavaScript: var, let, and const with scope and mutability.",
"JavaScript data types: Primitive types – String, Number, Boolean, null, undefined, Symbol, and BigInt.",

/* 5–8 */

"Operators in JavaScript: Arithmetic, logical, comparison, and ternary operators.",
"Control flow statements: if, if-else, and switch statements.",
"Loops in JavaScript: for loop, while loop, do-while loop.",
"Advanced loops: for...in and for...of loops, break and continue statements.",

/* 9–12 */

"Console methods: console.log(), console.warn(), console.error(), console.table().",
"Reference data types: Arrays and Objects in JavaScript.",
"Defining and calling functions in JavaScript.",
"Function arguments: required arguments, default arguments, keyword arguments, and variable length arguments.",

/* 13–16 */

"Scope rules in JavaScript: Global and local scope.",
"Passing arguments: call by value (primitives) and call by reference (objects).",
"Recursive functions and their applications.",
"Function declarations vs function expressions.",

/* 17–18 */

"Arrow functions (=>): syntax, single-line return, and lexical this.",
"Closures and introduction to higher-order functions: map(), filter(), reduce(), sort().",

/* 19–22 */

"Destructuring in JavaScript: Array destructuring.",
"Object destructuring and practical examples.",
"Deep copy vs shallow copy concepts.",
"JSON handling: JSON definition, JSON.stringify() and JSON.parse().",

/* 23–26 */

"DOM Manipulation: Introduction to the DOM tree.",
"DOM selectors: querySelector(), querySelectorAll(), getElementById().",
"Reading and modifying HTML and CSS using JavaScript.",
"Creating, appending, and deleting DOM nodes dynamically.",

/* 27–30 */

"Event handling in JavaScript: addEventListener() setup.",
"Event propagation: Event bubbling and event capturing.",
"Event delegation techniques.",
"Form validation and DOM performance optimizations.",

/* 31–34 */

"BOM (Browser Object Model): window object and navigator object.",
"Location object and browser interaction.",
"Alerts, prompts, and confirm dialogs.",
"Timers in JavaScript: setTimeout() and setInterval().",

/* 35–40 */

"Asynchronous JavaScript: Introduction to asynchronous programming.",
"Callback functions and callback patterns.",
"Promises: Promise states and lifecycle.",
"Error handling with Promises.",
"Event loop and JavaScript runtime behavior.",
"Practical asynchronous workflow examples.",

/* 41–45 */

"Introduction to Version Control systems.",
"Git basics and repository concepts.",
"Git commands: init, add, commit.",
"Branching and merging basics.",
"Collaboration with Git and version tracking."

];
const softComputingSyllabus = [

/* 1 */

"Introduction to Soft Computing, concept of computing systems, Soft computing vs Hard computing, characteristics of soft computing.",

/* 2–3 */

"Soft computing techniques: Introduction to fuzzy computing.",
"Neural computing, genetic algorithms, associative memory and adaptive resonance theory.",

/* 4–5 */

"Applications of soft computing techniques.",
"Fuzzy set theory and fuzzy systems: introduction to fuzzy logic and fuzzy sets vs crisp sets.",

/* 6–9 */

"Membership functions and terminology in fuzzy logic.",
"Crisp set operations: union, intersection, complement, difference.",
"Fuzzy set operations: union, intersection, complement, equality.",
"Fuzzy relations and fuzzy IF–THEN rules.",

/* 10–12 */

"Fuzzification process in fuzzy systems.",
"De-fuzzification techniques.",
"Fuzzy inference systems and rule-based decision making.",

/* 13–14 */

"Artificial Neural Networks vs Biological Neural Networks.",
"ANN architecture and the basic building block of artificial neurons.",

/* 15 */

"Learning techniques in ANN: supervised learning, unsupervised learning, reinforcement learning.",

/* 16–17 */

"Activation functions in ANN.",
"Types of artificial neural networks.",

/* 18–22 */

"McCulloch-Pitts neuron model.",
"Hebb network learning rule.",
"Supervised learning neural networks.",
"Perceptron and Adaline networks.",
"Madaline neural network.",

/* 23–24 */

"Back-propagation neural network and its working.",
"Learning factors of back-propagation network and applications of ANN.",

/* 25–26 */

"Introduction to Genetic Algorithms (GA).",
"Basic terminology and basic structure of GA.",

/* 27–29 */

"Encoding techniques and fitness function in GA.",
"GA operators: selection and crossover.",
"GA operators: mutation.",
/* 30 */
"Applications of Genetic Algorithms using GA operators."
];
const discreteMathSyllabus = [

/* 1–4 */

"Introduction to Sets: Properties and operations on sets.",
"Subsets, power set and inclusion–exclusion principle.",
"Principle of duality and Cartesian product of sets.",
"Partition of sets, minsets and maxsets.",

/* 5–8 */

"Introduction to Relations: Types of relations.",
"Pictorial and matrix representation of relations.",
"Inverse relation and composition of relations.",
"Properties of relations.",

/* 9 */

"Equivalence relation and partial order relation.",

/* 10–13 */

"Introduction to functions and types of functions.",
"Domain and range of functions.",
"Inverse functions, injective and surjective functions.",
"Bijective functions, composition of functions and recursive functions.",

/* 14–15 */

"Permutations and combinations.",
"Pigeonhole principle.",

/* 16–18 */

"Recurrence relations: Introduction.",
"Homogeneous recurrence relations with constant coefficients.",
"Non-homogeneous recurrence relations with constant coefficients.",

/* 19–20 */

"Characteristic polynomial of recurrence relations.",
"Introduction to generating functions and methods of generating functions.",

/* 21–23 */

"Graph theory: introduction to graphs and subgraphs.",
"Directed and undirected graphs, order and size of graph.",
"Degree of vertex, source, sink, eccentricity, trail, walk and path.",

/* 24–26 */

"Distance and diameter of graphs.",
"Cycle, wheel graph and multi graph.",
"Planar graph and pseudo graph.",

/* 27–31 */

"Weighted graph and regular graph.",
"Complete graph and traversable graph.",
"Isomorphism of graphs and subgraphs.",
"Complement of graph and adjacency matrix.",
"Adjacency list and incidence matrix.",

/* 32–35 */

"Complete bipartite graph and spanning graph.",
"Cut vertex and cut edge.",
"Regions in planar graphs.",
"Eulerian and Hamiltonian graphs.",

/* 36 */

"Shortest path algorithm: Dijkstra’s algorithm.",

/* 37–40 */

"Euler’s formula and its applications.",
"Traveling salesman problem.",
"Konigsberg bridge problem and chromatic number.",
"Graph coloring and Welsh–Powell algorithm.",

/* 41–43 */

"Trees: introduction to binary trees.",
"Traversing binary trees and rooted trees.",
"Spanning trees, algebraic expression trees, depth-first search and breadth-first search.",

/* 44–45 */

"Shortest path algorithms: Kruskal’s algorithm.",
"Shortest path algorithms: Prim’s algorithm."

];
function calculate() {
  const inputValue = document.getElementById("dateInput").value;
  if (!inputValue) return;

  const inputDate = new Date(inputValue);
  const start = new Date(startDate);

  let lectureCountOS = 0;
  let lectureCountFEE = 0;
  let lectureCountDM = 0;
  let lectureCountFAA = 0;
  let lectureCountFCP = 0;

  for (let d = new Date(start); d <= inputDate; d.setDate(d.getDate() + 1)) {
    const day = d.getDay();
    const periods = timetable[day];
    if (!periods) continue;

    periods.forEach((period) => {
      const p = period.trim();
      if (!p) return;
      if (p === "OS") lectureCountOS++;
      else if (p === "FEE") lectureCountFEE++;
      else if (p === "DM") lectureCountDM++;
      else if (p === "FAA") lectureCountFAA++;
      else if (p === "C") lectureCountFCP++;
    });
  }

  lectureCountOS = Math.min(lectureCountOS, osSyllabus.length);
  lectureCountFEE = Math.min(lectureCountFEE, jsSyllabus.length);
  lectureCountDM = Math.min(lectureCountDM, discreteMathSyllabus.length);
  lectureCountFAA = Math.min(lectureCountFAA, softComputingSyllabus.length);
  lectureCountFCP = Math.min(lectureCountFCP, cSyllabus.length);

  document.getElementById("lectureCountOS").innerText = lectureCountOS;
  document.getElementById("lectureCountFEE").innerText = lectureCountFEE;
  document.getElementById("lectureCountDM").innerText = lectureCountDM;
  document.getElementById("lectureCountFAA").innerText = lectureCountFAA;
  document.getElementById("lectureCountFCP").innerText = lectureCountFCP;

  const makeTopicHTML = (count, syllabus) => {
    let html = "";
    for (let i = 0; i < count; i++) {
      html +=` <li>Lecture ${i + 1} : ${syllabus[i]}</li>`;
    }
    return html;
  };

  document.getElementById("topicListOS").innerHTML = makeTopicHTML(lectureCountOS, osSyllabus);
  document.getElementById("topicListFEE").innerHTML = makeTopicHTML(lectureCountFEE, jsSyllabus);
  document.getElementById("topicListDM").innerHTML = makeTopicHTML(lectureCountDM, discreteMathSyllabus);
  document.getElementById("topicListFAA").innerHTML = makeTopicHTML(lectureCountFAA, softComputingSyllabus);
  document.getElementById("topicListFCP").innerHTML = makeTopicHTML(lectureCountFCP, cSyllabus);
}