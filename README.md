# test-harmonyx-api

source code for exam in /test-harmonyx-api/controllers

## run exam

### first
```
npm install
```
### and then
```
npm run start:local or npm run start
```
## you try to call api

### exam 1

#### local
Method POST
```
http://localhost:4020/api/exam-1/calculate-answer
```
#### server
Method POST
```
https://test-harmonyx.herokuapp.com/api/exam-1/calculate-answer
```
payload json
```
{
  "num": [1,2,4,5, 2, 8],
  "target": 10
}
```

### exam 2

#### local
Method GET
```
http://localhost:4020/api/exam-2/change-money?price=234&pay=400
```
#### server
Method GET
```
https://test-harmonyx.herokuapp.com/api/exam-2/change-money?price=234&pay=400
```

### exam 3

#### local
Method POST
```
http://localhost:4020/api/exam-3/calculate-price
```
#### server
Method POST
```
https://test-harmonyx.herokuapp.com/api/exam-3/calculate-price
```
payload json
```
[
    {
        "name": "A",
        "price": 99
    },
    {
        "name": "B",
        "price": 199
    },
    {
        "name": "C",
        "price": 3990
    }
]
```
