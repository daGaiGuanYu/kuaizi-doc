console.log('welcome!')

specialBlock()

function specialBlock(){
  let list = document.querySelectorAll('.special-block-container')
  list.forEach(function(block){
    let rawChildren = Array.from(block.children) // 下面添加按钮的操作，会改变 children 对象，但变成数组后，就不会了
    let copyBtn = document.createElement('button')
    copyBtn.onclick = function(){
      navigator.clipboard.writeText(rawChildren.map(child => child.innerHTML).join('\n'))
    }
    copyBtn.classList.add('copy')
    block.appendChild(copyBtn)
  })
}