<template lang="html">
 <transition name="modal">
   <div class="modal-mask">
     <div class="modal-wrapper">
       <div class="modal-container">
         <div class="modal-header">
           <slot name="header">
             default header
           </slot>
         </div>
         <div class="modal-body">
           <slot name="body">
             default body
           </slot>
         </div>
         <div class="modal-footer">
           <slot name="footer">
             default footer
             <button class="modal-default-button" @click=$emit('close')>ok</button>
           </slot>
         </div>
       </div>
     </div>
   </div>
 </transition>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import '../../assets/scss/mixin.scss';
  .modal-mask {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    display: table;
    transition: opacity .3s ease;
    .modal-wrapper {
      display: table-cell;
      vertical-align: middle;
      .modal-container {
        width: size(300);
        margin: 0 auto;
        padding: size(20) size(30);
        background-color: #fff;
        border-radius: size(2);
        box-shadow: 2 size(2) size(2) rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: sans-serif;
        .modal-header {
          margin-top: 0;
          color: #42b938;
        }
        .modal-body {
          margin: size(20) 0;
        }
        .modal-default-button {
          float: right;
        }
      }
    }
  }
</style>
