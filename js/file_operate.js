/*
 * @Author: Narika
 */
const openDialogBtn = document.getElementById('openDialog')
const pathTxb = document.getElementById('path')

openDialogBtn.addEventListener('click',()=>{
    const a = window.fileOp.openSelectDialog('打开 __rena_index_2 文件')
})