import request from "./network.js"
const baseUrl = "http://lzf.com"
export function getMultiData(){
  return request({
    url: baseUrl + "/lunbo",
  })
}

export function getGoodsData(type,page){
  return request({
    url: baseUrl + "/goods",
    data:{
      type:type,
      page:page
    }
  })
}