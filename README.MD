# Business Opening Time Calculator
This application calculates the total opening time of a business composed of multiple stores with varying opening schedules. It solves the problem of determining the cumulative opening time while considering the processing cost of the algorithm.

## Problem Statement
A company is comprised of multiple stores, each operating at different times throughout the day. The task is to determine the total opening time of the business, considering the opening hours of each store.

## Data Structure
The data representing the business and its stores is provided in JSON format. Each store has a unique identifier (id) and an array of schedules, each schedule containing the opening and closing times (openFrom and openTo).

## Execution
To run the program and see the result, open the terminal and execute the following command:
> node index.js

### Required Packages
To run this program, you need to have the node_modules package installed. You can install it by executing the following command:

> npm i

## Example Input
{
  "id": 1,
  "name": "Business TEST",
  "shops": [
    {
      "id": 1,
      "schedules": [
        {
          "openFrom": "12:00",
          "openTo": "14:54"
        },
        {
          "openFrom": "10:00",
          "openTo": "11:32"
        },
        {
          "openFrom": "12:41",
          "openTo": "13:00"
        },
        {
          "openFrom": "16:00",
          "openTo": "20:30"
        }
      ]
    },
    {
      "id": 2,
      "schedules": [
        {
          "openFrom": "11:58",
          "openTo": "13:54"
        },
        {
          "openFrom": "09:20",
          "openTo": "10:25"
        },
        {
          "openFrom": "16:30",
          "openTo": "21:30"
        }
      ]
    },
    {
      "id": 3,
      "schedules": [
        {
          "openFrom": "21:31",
          "openTo": "23:12"
        },
        {
          "openFrom": "10:30",
          "openTo": "10:40"
        },
        {
          "openFrom": "13:58",
          "openTo": "16:00"
        }
      ]
    }
  ]
}

## Example Output
[
  {
    "openFrom": "09:20",
    "openTo": "11:32"
  },
  {
    "openFrom": "11:58",
    "openTo": "21:30"
  },
  {
    "openFrom": "21:31",
    "openTo": "23:12"
  }
]

This output represents the optimal opening schedules that maximize the total business opening time while considering the processing cost of the algorithm.