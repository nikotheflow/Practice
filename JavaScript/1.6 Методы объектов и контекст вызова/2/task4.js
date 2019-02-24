new Date(0) - 0 // 0
new Array(1)[0] + "" // 'undefined'
({})[0] // undefined
[1] + 1 // 11
[1,2] + [3,4] // '1,23,4'
[] + null + 1 // 'null1'
[[0]][0][0] // 0
({} + {}) // '[object Object][object Object]'