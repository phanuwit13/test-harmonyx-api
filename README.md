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

Method POST

| Server | Path |
| ------ | ------ |
| Local | `http://localhost:4020/api/exam-1/calculate-answer`|
| Heroku | `https://test-harmonyx.herokuapp.com/api/exam-1/calculate-answer` |
| Zeet | `https://harmonyx-api-main-wgc6h2sscq-wm.a.run.app/api/exam-1/calculate-answer` |

Payload json
```
{
  "num": [1,2,4,5, 2, 8],
  "target": 10
}
```

### exam 2

Method GET

| Server | Path |
| ------ | ------ |
| Local | `http://localhost:4020/api/exam-2/change-money?price=234&pay=400`|
| Heroku | `https://test-harmonyx.herokuapp.com/api/exam-2/change-money?price=234&pay=400` |
| Zeet | `https://harmonyx-api-main-wgc6h2sscq-wm.a.run.app/api/exam-2/change-money?price=234&pay=400` |

### exam 3

Method POST

| Server | Path |
| ------ | ------ |
| Local | `http://localhost:4020/api/exam-3/calculate-price`|
| Heroku | `https://test-harmonyx.herokuapp.com/api/exam-3/calculate-price` |
| Zeet | `https://harmonyx-api-main-wgc6h2sscq-wm.a.run.app/api/exam-3/calculate-price` |

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
