# Day-Planner Application

## Objective
### Create a day-planner application that will allow user to create events for each hour of the workday that will persist through page reloads.

#### Author - Scott Nelson

#### APIs Used
- Bootstrap
- FontAwesome
- jQuery
- Moment.js

### User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

### Working Application

![Running Application](/pics/app.jpg)

### Application Description

Application displays 1 hour time blocks from 9 AM to 5 PM that are color coded depending on the
time of day, which is displayed at the top of the page. Hour blocks from past hours are 
displayed in gray and no new events can be saved in those blocks. The current hour is displayed 
in red, and future hours are displayed in green. User types event information into an available
time block and then clicks the save button on the right of the time block to save the event. 
When an event is saved, it will be stored in local storage and will be recalled when the page is
reloaded.
