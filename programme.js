

class programme{

   constructor(event){


    this.can=new canvas()
       this.color=''
       this.can.color=this.color
       this.size=''
       this.can.size=this.size
       //this.picker= new jscolor()
       
       $('#tool-clear-canvas').on('click', this.effacer.bind(this))
       $('.pen-color').on('click',this.changeColor.bind(this))
       $('.pen-size').on('click',this.ChangeEpaisseur.bind(this))
         
    //    this.canvas.addEventListener('click', this.changeColor.bind(this));
   }

effacer(){
    
    this.can.effacerArdoise()
}

changeColor(event)
{
    this.can.etatPalette=false
    let test=event.currentTarget
    let color=test.dataset.color
   //$(test).data('color')
   //this.test=$(event.currentTarget).data('color')
    this.can.color=color
    console.log('CHange color '+this.can.color)
}
//let can=new canvas()
//$('#tool-clear-canvas').on('click', effacer)
ChangeEpaisseur(event)
{
    let test=event.currentTarget
    let size=test.dataset.size
   //$(test).data('color')
   //this.test=$(event.currentTarget).data('color')
    this.can.size=size
    console.log('Change Size '+this.can.size)
}


}

