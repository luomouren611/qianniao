const cars = {
  state: {
    carsList: []
  },
  mutations: {
    setCarsList(state, params) {
      let {
        item,
        num
      } = params;
      let caritem = {
        goodsid: item.id || item.goodsid,
        numvalue: num,
        name: item.name,
        price: item.costPrice,
        before_price: item.salesPrice,
        thumb: item.image
      }
      console.log(item,num);
      let idx = state.carsList.findIndex(car => {
        return car.goodsid == caritem.goodsid
      })
      if (idx < 0) {
        state.carsList.unshift(caritem)
      } else {
        state.carsList[idx].numvalue = caritem.numvalue;
        if (state.carsList[idx].numvalue <= 0) state.carsList.splice(idx, 1);
      }

    }
  }
}

export default cars