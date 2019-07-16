let tc = require('./text-censor')
let { readFile } = require('fs').promises

let test = async string => {
  let replaceString = await tc.filter(string)
  console.log(replaceString)
}
let _t = async () => {

  let string = await readFile('./测试文件.txt', 'utf-8')
  test(string)
}
_t()

test('邯郸T邯郸学院servants stepped in to remove t邯郸学步he body and began to wipe up the blo你好吗 on the 邯郸学习 ground. ')
