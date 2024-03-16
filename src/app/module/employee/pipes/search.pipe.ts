import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchtext: any) {
    const result:any=[]
    console.log(value);
    console.log(searchtext);
    if(!value || !searchtext ){return value}
    
    value.forEach((item:any)=>{
      if(item.username.trim().toLowerCase().includes(searchtext.trim().toLowerCase())){
        result.push(item)
      }
    })
    
    return result;
  }

}
