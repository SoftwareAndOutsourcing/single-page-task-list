# single-page-task-list

Single page application to list tasks within columns.

- [Page General Layout](#general-layout)
- [REST API](#rest-api)
  - [Listing Entities](#listing-entities)
  - [Finding entities by ID](#finding-entities-by-id)
  - [Update & Create Columns](#update--create-columns)
- [Expected behaviour](#expected-behaviour)
- [Bonus feature (optional)](#bonus-feature-optional)

# General Layout

## Page Layout

![image](https://user-images.githubusercontent.com/9665358/138611156-754b484e-d37a-461e-9686-cc8b7fce0683.png)

## Column Layout

![image](https://user-images.githubusercontent.com/9665358/138611168-dfccc4b6-7091-4e6b-8b18-dc27826bb0ec.png)

## Task Layout

![image](https://user-images.githubusercontent.com/9665358/138611198-2d780045-6a3d-42b9-953c-923535f2b2cd.png)

# REST API

## Listing Entities

### Listing Persons

GET: http://localhost:8080/tasksystem/API/persons/list

Expected output:

```json
[
  {
    "id": "968fd609-603b-4516-85af-dbfc4294a980",
    "name": "John Smith"
  },
  {
    "id": "57cde20c-eaba-4881-b362-16f5bf64eaf9",
    "name": "Aaron Edgar"
  },
  {
    "id": "3a86a5b3-e210-421a-b64f-83edd5a5335f",
    "name": "Maria Evan"
  },
  {
    "id": "74714731-8300-4256-8842-581f0164916d",
    "name": "Mike Moode"
  },
  {
    "id": "e65e6380-7765-401d-8da1-0374ae130db7",
    "name": "Priscilla Nascer"
  }
]
```

### Listing Tags

GET: http://localhost:8080/tasksystem/API/tags/list

Expected output:

```json
[
  {
    "id": "37d6e6e3-f865-45dc-8ff1-83124ca3bff6",
    "identifier": "Routine",
    "labelColor": "black",
    "backgroundColor": "yellow"
  },
  {
    "id": "ff19ad56-10ff-4bbc-96d2-794ebd9d6974",
    "identifier": "New Projects",
    "labelColor": "white",
    "backgroundColor": "red"
  },
  {
    "id": "d46bcafd-f49a-4476-a30c-505175987c8d",
    "identifier": "HR",
    "labelColor": "black",
    "backgroundColor": "gray"
  },
  {
    "id": "23449bc9-1dab-4d59-96a3-8d7edc91c2e6",
    "identifier": "Training",
    "labelColor": "white",
    "backgroundColor": "orange"
  }
]
```
### Listing Columns

GET: http://localhost:8080/tasksystem/API/tags/list

Expected output:

```json

[
  {
    "id": "67000208-c768-48e1-9a36-0032ffc06f97",
    "title": "dictum aliquet Etiam ",
    "filter": {
      "titleContains": "",
      "tags": [
        {
          "id": "ff19ad56-10ff-4bbc-96d2-794ebd9d6974",
          "identifier": "New Projects",
          "labelColor": "white",
          "backgroundColor": "red"
        }
      ],
      "assignees": [],
      "deadlineInDays": 7
    }
  },
  {
    "id": "da91e803-47a5-4514-80b5-3359eb41a41f",
    "title": "ut vestibulum ",
    "filter": {
      "titleContains": "",
      "tags": [],
      "assignees": [
        {
          "id": "3a86a5b3-e210-421a-b64f-83edd5a5335f",
          "name": "Maria Evan"
        }
      ],
      "deadlineInDays": 28
    }
  },
  {
    "id": "c4d70f15-3088-442c-883d-7c24cd2d0338",
    "title": "Etiam tincidunt ",
    "filter": {
      "titleContains": "sem",
      "tags": [
        {
          "id": "ff19ad56-10ff-4bbc-96d2-794ebd9d6974",
          "identifier": "New Projects",
          "labelColor": "white",
          "backgroundColor": "red"
        }
      ],
      "assignees": [],
      "deadlineInDays": 7
    }
  },
  {
    "id": "47532bfd-a176-4965-b5f9-22509ac81b3d",
    "title": "Not filtered",
    "filter": {
      "titleContains": "",
      "tags": [],
      "assignees": [],
      "deadlineInDays": -1
    }
  }
]
```

### Listing Tasks

GET: http://localhost:8080/tasksystem/API/tasks/list

Expected output:

```json
[
  {
    "id": "71a55ff1-704c-4657-81e6-d841720616d6",
    "title": "commodo libero ",
    "description": "suscipitEtiam quam sem tristique nec ex ut vestibulum posuere nisl Nulla rutrum urna sit ",
    "deadline": 1637748000000,
    "assignee": {
      "id": "968fd609-603b-4516-85af-dbfc4294a980",
      "name": "John Smith"
    },
    "tags": [
      {
        "id": "37d6e6e3-f865-45dc-8ff1-83124ca3bff6",
        "identifier": "Routine",
        "labelColor": "black",
        "backgroundColor": "yellow"
      }
    ]
  },
  {
    "id": "8f0661e0-789f-419d-b41b-5ff94a7cf8ac",
    "title": "mauris neque ",
    "description": "sit amet mauris feugiat lobortis Mauris felis purus ultrices non orci non finibus malesuada tellus ",
    "deadline": 1637776800000,
    "assignee": {
      "id": "e65e6380-7765-401d-8da1-0374ae130db7",
      "name": "Priscilla Nascer"
    },
    "tags": [
      {
        "id": "37d6e6e3-f865-45dc-8ff1-83124ca3bff6",
        "identifier": "Routine",
        "labelColor": "black",
        "backgroundColor": "yellow"
      },
      {
        "id": "ff19ad56-10ff-4bbc-96d2-794ebd9d6974",
        "identifier": "New Projects",
        "labelColor": "white",
        "backgroundColor": "red"
      }
    ]
  },
  {
    "id": "c8843b87-aece-41ac-8f5f-a9b58ee94f77",
    "title": "vestibulum sem Interdum et malesuada ",
    "description": "felis Donec ultricies sem quis tempus pretium massa turpis molestie leo dictum turpis lectus sed ",
    "deadline": 1637694000000,
    "assignee": {
      "id": "e65e6380-7765-401d-8da1-0374ae130db7",
      "name": "Priscilla Nascer"
    },
    "tags": [
      {
        "id": "ff19ad56-10ff-4bbc-96d2-794ebd9d6974",
        "identifier": "New Projects",
        "labelColor": "white",
        "backgroundColor": "red"
      },
      {
        "id": "37d6e6e3-f865-45dc-8ff1-83124ca3bff6",
        "identifier": "Routine",
        "labelColor": "black",
        "backgroundColor": "yellow"
      }
    ]
  },
  {
    "id": "21791077-3487-4fc9-ac73-0c06750ea164",
    "title": "ipsum Sed dignissim libero ",
    "description": "sem tristique nec ex ut vestibulum posuere nisl Nulla rutrum ",
    "deadline": 1637690400000,
    "assignee": {
      "id": "968fd609-603b-4516-85af-dbfc4294a980",
      "name": "John Smith"
    },
    "tags": [
      {
        "id": "ff19ad56-10ff-4bbc-96d2-794ebd9d6974",
        "identifier": "New Projects",
        "labelColor": "white",
        "backgroundColor": "red"
      }
    ]
  }
]
```

A larger example of task output with 100 Tasks can be find [here](100-tasks.json)

## Finding entities by ID

### Finding Task by id 

GET: http://localhost:8080/tasksystem/rest/API/tasks/ac92ada4-ef24-4c8c-bc23-aa873bb142d5

Expected output:

```json
{
  "id": "ac92ada4-ef24-4c8c-bc23-aa873bb142d5",
  "title": "eu euismod nulla Nunc ",
  "description": "sed vestibulum dolor Fusce felis ex cursus at est quis maximus aliquet ",
  "deadline": 1637776800000,
  "assignee": {
    "id": "c3230cee-ad92-4e9e-a45f-42fd443253be",
    "name": "Priscilla Nascer"
  },
  "tags": [
    {
      "id": "a03f81bc-be63-46c9-b99f-9d682f5b8cf6",
      "identifier": "Training",
      "labelColor": "white",
      "backgroundColor": "orange"
    }
  ]
}
```

### Finding Tags, Columns and Persons by id 

Tags, Persons and Columns can be retrieved by id in the same way as done for Tasks:

Tags:

GET http://localhost:8080/tasksystem/rest/API/tags/1e476bd2-3f5d-43b3-b498-fac7ab6a5fa8

Columns:

GET http://localhost:8080/tasksystem/rest/API/columns/9a112e2f-3833-4fca-ab63-168a807960a4

Persons:

GET http://localhost:8080/tasksystem/rest/API/persons/c99f164b-f105-4feb-9910-839c5eb3d81c

## Update & Create Columns

### Create Column 

POST http://localhost:8080/tasksystem/rest/API/columns/create

FORM fields examples:

"title": "My column title"                                                                    # new column title

Expected output:

```json
{"result":"success"}
```

### Update Column Filter

POST http://localhost:8080/tasksystem/rest/API/columns/update/filter

FORM fields examples:

"column_id": "0eb22337-4d8b-4214-a2a5-9df314f320d7"                                              # column's id
"title_contains": "test 123"                                                                     # query text to match task title
"assignees_list": "fd161b43-226b-4051-88f2-8f67110c35ed, d35e4d6a-6e69-4ce5-a435-f1dfa6b36181"   # comma-separated list of assignees ids
"tags_list": "628c4fd4-6648-4c8b-befa-c39221a9eb9c",                                             # comma-separated list of tags ids
"deadline": "15"                                                                                 # integer representing amount of days ahead

Expected output:

```json
{"result":"success"}
```

### Update Column Title

POST http://localhost:8080/tasksystem/rest/API/columns/update/title

FORM fields examples:

"column_id": "0eb22337-4d8b-4214-a2a5-9df314f320d7"                                              # column's id
"title": "A motivating title"                                                                    # new column title

Expected output:

```json
{"result":"success"}
```

# Expected behaviour

On the page load, the `Columns list` is retrieved and each column is build. After that, the `Task list` is retrieved. Each task is assigned to one or more columns in which the filter matches. If a task is not assigned to any column, it is assigned to the last "Not filtered" column.

# Bonus feature (optional)

Sorting columns by drag-in-drop them in the columns area.

To perform this action, the javascript sort event need to call the API as exemplified below:

GET http://localhost:8080/tasksystem/rest/API/columns/swap?from=0&to=2

to swap columns 0 & 2.

This call would result something like:

```json
{"result":"success"}
```

In case of any result than `success`, the new columns sorting must be undone, popuping the user about that.
