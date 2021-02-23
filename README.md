# Dev-Training

- This web-app is deployed via [Netlify](https://determined-hopper-0e021f.netlify.app/).

## Project Description

Dev-Training is an Airtable and React build where the user is able to leave a comment for several software development topics: HTML, CSS, JS. The homepage will offer three different paths on the Nav bar so the user can quickly get to the general topic populated with a feed of previously posted comments. Each page will have a form to create new comments. Users will be able to delete and edit this comment. The following dependencies will need to be installed via npm install axios, react-router-dom.

## Wireframes

The wireframes below illustrate Dev-Training's responsiveness relative to monitor and phone formats. We will have each language's icon: HTML, CSS, JS; be clickable and will properly navigate to the appropriate feed.The comment feed has a form, submit button, and an edit button. As the screen size decreases the form and buttons will move to the center of the page. Regarding the homepage, the Nav Bar icons will change from horizontal to verticle.
Iphone X 375x812
Laptop with HiDPI screen 1440x900

https://drive.google.com/file/d/1s4qeD8BeqHMwORCbboDGVeGUVqqfASwh/view?usp=sharing

## Component Hierarchy

https://drive.google.com/file/d/1aLEGh4pnBRqWy_yyItkVQcgJbn_2hS4W/view?usp=sharing

## API and Data Sample

```json
{
    "records": [
        {
            "id": "recR0jggUdgvtRgQx",
            "fields": {
                "concept": "Array.prototype.indexOf()",
                "author": "MDN Source Doc",
                "comment": "In plain english, this means: The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not pres...",
                "topic": "JS"
            },
            "createdTime": "2021-02-16T16:08:36.000Z"
        },
        {
            "id": "rec6eSELNCWwS4X00",
            "fields": {
                "concept": "<a> tag",
                "comment": "Use this for audobon assignment: Defines a hyperlink",
                "topic": "HTML",
                "author": "https://www.w3schools.com/tags/"
            },
            "createdTime": "2021-02-16T16:08:36.000Z"
        },
        {
            "id": "recAD89NWTBnUYWEn",
            "fields": {
                "comment": "It defines whether the flex items are forced in a single line or can be flowed into multiple lines. If set to multiple lines, it also defines the cros...",
                "concept": "flex-wrap",
                "author": "css.tricks",
                "topic": "CSS"
            },
            "createdTime": "2021-02-16T16:08:36.000Z"
        }
    ],
    "offset": "recAD89NWTBnUYWEn"
}

```
#### MVP 
- Render previous comments on respective page 
- Allow user to submit, delete, and edit comments to airtable database

#### PostMVP  
- Functionality to pin specific comments so users can tailor their desired comments. 
- Dark mode toggle fetch 
- Initial quiz to identify skill level then filter comments based on skill level
- Add exercises to make more engaging like debugging

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 16| Prompt / Wireframes / Priority Matrix / Timeframes | Project Approval | Complete
|Feb 17| Core Application Structure (HTML, CSS, JS), render data from airtable on appropriate pages | Complete 
|Feb 18| Add flexbox styling and advance CSS | Complete
|Feb 19| Cleanup code, final review, and deploy! | Complete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial configuration (install dependencies, npx create-react-app, etc.) | H | 1.5hrs| 1 | 1 |
| Create component files and add basic HTML structure and CSS styling | H | 3hrs| 3.5 | 3.5 |
| Add additional content to airtable | H | 4hrs| 5 | 5 |
| Add links to navbar | H | 2hrs| 1.5 | 1.5 |
| search for language icon images | H | 1hrs| .5 | .5 |
| Create POST request and test functionality | H | 4hrs| 3 | 3 |
| Create DELETE request and test functionality | H | 4hrs| 5 | 5 |
| Create EDIT functionality | H | 3hrs| 4 | 4 |
| Make sure posts are properly sorted to their respective feeds | H | 4hrs| 1 | 1 |
| Finalize color palette, styling, media queries | H | 4hrs| 5 | 7 |
| Total | H | 30.5hrs| 29.5 | 31.5 |

## SWOT Analysis

### Strengths:
- Team Sapphire and the GA commnuity's resources: TA hours, issue tickets, and fellow Sapphires

### Weaknesses:
- Still gaining familiarity with handleSubmit, useState, and useEffect - so still mastering the content
- CSS and styling continues to be my achilles heel but may need to collaborate with another student

### Opportunities:
- Gain more hands-on experience with CRUD, JavaScript, and React framework

### Threats:
- User experience and design 

## Change Log
- Had to deviate from the original wireframe re parsing data by topic and changed concept to a general forum
- Within the form table I created a drop down list with the specific topics so each comment will be tagged and can be sorted when the team refactors this project
