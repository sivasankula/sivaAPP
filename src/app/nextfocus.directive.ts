import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNextfocus]'
})
export class NextfocusDirective {

  constructor() { }
  @HostListener('keyup', ['$event']) onKeyDown(keyboardEvent: KeyboardEvent) {
    const target = keyboardEvent.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null;
    const prvtarget = keyboardEvent.target as | HTMLInputElement
   // console.log(target?.value)
    
    if (!target || target.maxLength !== target.value.length) return;

    keyboardEvent.preventDefault();

    const { type } = target;
    
    let { nextElementSibling } = target;
    let { previousElementSibling } = prvtarget

    while (nextElementSibling) {
     console.log(target.value)
      if ((nextElementSibling as HTMLInputElement | HTMLTextAreaElement).type === type) {
        (nextElementSibling as HTMLInputElement | HTMLTextAreaElement).focus();
        return;
      }
      nextElementSibling = nextElementSibling?.nextElementSibling;
     
    }
    while(previousElementSibling){
      
    }
  }

  //ghjkltrdyghkjl******************

//   @HostListener('keyup', ['$event']) onKeyDown(e: any) {
//     if (e.srcElement.maxLength === e.value.length) {

//         e.preventDefault();

//         let nextControl: any = e.srcElement.nextElementSibling;
//         let prv :any = e.srcElement.previousElementSibling;
//        // Searching for next similar control to set it focus
//         while (true){
//             if (nextControl){
//                 if (nextControl.type === e.srcElement.type){
//                     nextControl.focus();
//                     return;
//                 }
//                 else{
//                     nextControl = nextControl.nextElementSibling;
//                 }
//             }
//             else{

//                 return;
//             }
//         }
//     }
// }

}
