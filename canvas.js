class canvas{

    constructor(){
        
        this.etatPalette=false
        this.size=
        
        this.canvas=document.getElementById('slate')
        
        this.context=this.canvas.getContext('2d')
        // this.canvas=document.getElementById('color-palette')
        //this.context=this.canvas.getElementById('tool-clear-canvas')
        this.canvas.addEventListener('mousedown',this.createLine.bind(this))
        this.canvas.addEventListener('mousemove',this.OnMouseMouve.bind(this))
        this.canvas.addEventListener('mouseup',this.OnMouseUp.bind(this))
        // this.canvas.addEventListener('mouseup',this..bind(this))
        $('#tool-color-picker').on('click',this.PaletteColor.bind(this))
        //this.canvas.addEventListener('click',this.effacerArdoise.bind(this))
        this.x=0
        this.y=0
        this.clicked=false
        this.objetpos=null
        console.log('Bonjour Canvas11')
    }

    createLine(event)
    {  
      this.clicked=true
    //   this.context.moveTo(pos=0,y=0);
    let position=this.position(event)
    this.objetpos=this.position(event)
    }

    OnMouseMouve(event)
    {
        if(this.clicked==true){
           if(this.etatPalette==true){
            let c=myPicker.toHEXAString()
            console.log('Color Palette '+c)
            this.color=c
           }
          
        let position=this.position(event)
         //let Palette=this.changeColor
     //   console.log(position) 
        this.context.strokeStyle=this.color
        this.context.beginPath()
         this.context.moveTo(this.objetpos.i, this.objetpos.j);
        this.context.lineTo(position.i,position.j);
        this.context.lineWidth=this.size
        this.context.stroke();
        this.objetpos=position
        }
    }

    OnMouseUp(){
        this.clicked=false
    }

    position(event)
 {
    let x=event.offsetX
    let y=event.offsetY 
    return{i:x ,j:y}
    /////parce que on vas utuliser dans une autre fonction
 }

   setcolor()
   {
      this.color="#" + this.color
   }

effacerArdoise()
    {
       // console.log('Hello')
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
  PaletteColor()
{
    this.etatPalette=true
    console.log('Palette de couleur')
}
 }

 
function position2(event1)
{
    let x1=event1.clientX 
    let y1=event1.clientY  
    return{x1:x1 ,y1:y1}
}

