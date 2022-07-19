exports.changeMoney = (req, res, next) => {

  const checkType = (item) => {
    return item.type > 10
      ? `แบงค์ ${item.type} จำนวน ${item.amount} ใบ`
      : `เหรียญ ${item.type} จำนวน ${item.amount} เหรียญ`
  }

  return (req, res, next) => {
    try {
      console.log('req.body', req.query)
      const pay = Number(req.query.pay)
      const price = Number(req.query.price)
      if (!isNaN(pay) && !isNaN(price)) {
        let moneyChange = pay - price
        const bank = [1, 2, 5, 10, 20, 50, 100, 500, 1000]

        if (moneyChange < 0) {
          res.data = {
            success: 'fail',
            data: null,
            message: 'จ่ายเงินมาไม่ครบ',
          }
          next()
        }

        let result = bank
          .reverse()
          .map((item) => {
            let amount = Math.floor(moneyChange / item)
            if (amount > 0) {
              moneyChange = moneyChange - amount * item
              return {
                type: item,
                amount,
              }
            }
          })
          .filter((item) => item)

        let message = `เงินทอน ${pay - price} บาท เป็น `
        result.forEach((item) => {
          message += `${checkType(item)} `
        })

        res.data = {
          success: 'success',
          data: result,
          message: message,
        }
        next()
      } else {
        res.data = {
          success: 'fail',
          data: null,
          message: 'กรุณากรอกจำนวนเงินเป็นตัวเลข',
        }
        next()
      }

    } catch (error) {
      return res
        .status(500)
        .json({ success: false, data: null, message: error.message })
    }
  }
}
