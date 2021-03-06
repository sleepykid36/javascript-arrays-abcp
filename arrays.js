var bar1 = "snickers"
var bar2 = "hundred grand"
var bar3 = "kit kat"
var bar4 = "skittles"
var chocolateBars= [bar1, bar2, bar3, bar4]

function addElementToBeginningOfArray(array,element){
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()

  return array
}

function removeElementFromBeginningOfArray(array, element){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array, element) {
  return array.slice(0, array.length - 1)
}