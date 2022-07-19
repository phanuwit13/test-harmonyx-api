exports.calculateAnswer = (req, res, next) => {

  return (req, res, next) => {
    try {
      const num = req.body.num
      const target = req.body.target

      if (!Array.isArray(num)) {
        res.data = {
          success: 'fail',
          data: null,
          message: 'กรุณาใส่ num เป็นตัวเลขอาร์เร',
        }
        next()
      }

      num.forEach((item) => {
        if (isNaN(item)) {
          res.data = {
            success: 'fail',
            data: null,
            message: 'กรุณาใส่ num เป็นตัวเลขอาร์เร',
          }
          next()
        }
      })

      if (isNaN(target)) {
        res.data = {
          success: 'fail',
          data: null,
          message: 'กรุณาใส่ target เป็นตัวเลข',
        }
        next()
      }

      const newNum = num.filter((item) => item <= 9)
      const answer = []

      for (i = 0; i < (num.length - 1); i++) {
        for (j = (i + 1); j < newNum.length; j++) {
          if (newNum[i] + newNum[j] === target) {
            answer.push(i)
            answer.push(j)
            i = num.length
            j = i
          }
        }
      }

      res.data = {
        success: 'success',
        data: answer,
        message: `[${answer}]`,
      }
      next()

    } catch (error) {
      return res
        .status(500)
        .json({ success: false, data: null, message: error.message })
    }
  }
}
