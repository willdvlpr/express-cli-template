# Odd Positive Integer Average

This is a boilerplate project setup for students to setup an express server that exposes a POST endpoint `/odd-positive-average`. The endpoint is pretty self explanatory as it receives a given array of integers and returns the average of only the positive odd integers.

## Expected interfaces

The server is to handle requests using Content-Type `application/json`.

#### Input

You can expect request payloads to be in the following format.

```
[ <number array> ]
```

It is expected to validate the input as accepting integers only. If this is not the case then the server should respond with a 400 status code.

#### Output

For a valid request the server is expected to return the following format.

```
{
  "average": <number>
}
```

If the validation fails, then the server is to response with status code 400 and JSON structure below.

```
{
  "message": "<message about what caused error>"
}
```

## Note

- This should be done using Typescript.
- This can be completed in many different ways. But for **YOUR** benefit using ES6 array functions would be best.
- You should write unit tests.

> "Seek not to complete the problem - instead seek to understand the code you are writing and why it is necessary" - B Turner
