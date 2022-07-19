exports.calculatePrice = (req, res, next) => {

  const getTotalPrice = (productList) => {
    return productList.reduce((acc, b) => {
      return acc + b.price
    }, 0)
  }

  const promotionList = [
    {
      key: 'promotion1',
      name: 'ซื้อ ครบ 200 บาท ลด 10%',
      function:
        (productList) => {
          const price = getTotalPrice(productList)
          return price > 200 ? price * 10 / 100 : 0
        }
    },
    {
      key: 'promotion2',
      name: 'ซื้อ A + B ลด 50 บาท',
      function: (productList) => {
        let check = 0
        productList.forEach((item) => {
          if (item.name === 'A' || item.name === 'B') {
            check += 1
          }
        })
        return check === 2 ? 50 : 0
      }
    }
  ]

  return (req, res, next) => {
    try {
      let product = req.body
      let list = []
      //validate object key
      product.forEach((item) => {
        if (!item.price || !item.name) {
          res.data = {
            success: 'false',
            data: null,
            message: 'กรุณากรอกข้อมูลให้ถูกต้อง',
          }
          next()
        }
        if (isNaN(Number(item.price))) {
          res.data = {
            success: 'false',
            data: null,
            message: 'กรุณากรอกจำนวนเงินเป็นตัวเลข',
          }
          next()
        }
      })

      let totalPrice = getTotalPrice(product)
      promotionList.forEach((item) => {
        totalPrice -= item.function(product)
        if (item.function(product) > 0) list.push(item.name)
      })

      res.data = {
        success: 'success',
        data: { totalPrice, promotionReceive: list.length > 0 ? `ได้รับโปรโมชั่น ${list.join(' และ ')}` : 'ไม่ได้รับโปรโมชั่น' },
        message: `ได้รับส่วนลดจำนวณ ${(getTotalPrice(product) - totalPrice).toFixed(2)} บาท`,
      }
      next()

    } catch (error) {
      return res
        .status(500)
        .json({ success: false, data: null, message: error.message })
    }
  }
}