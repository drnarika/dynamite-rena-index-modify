/*
 * @Author: Narika
 */

const extbtn = document.getElementById('exit')
const minbtn = document.getElementById('min')

extbtn.addEventListener('click',()=>{
    window.frameBtn.close()
})
minbtn.addEventListener('click',()=>{
    window.frameBtn.min()
})
