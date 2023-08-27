const timer = {
    s_clock : 0,
    tick_interval : null,
    tick_status : false,
    tick : function(){
        if (!this.tick_status){
            const SECOND_IN_MILLISECONDS = 1000        
            this.tick_interval = setInterval(() =>{
                this.s_clock+=1
                console.log(this.format_s())
                this.timer_swap()},SECOND_IN_MILLISECONDS)    
            this.tick_status = true                            
            return this.tick_Interval;
        }
        return null
    },
    pause : function () {
        if(this.tick_status){
            clearInterval(timer.tick_interval)            
            this.tick_status = false
        }
    },
    clear : function () {      
        clearInterval(this.tick_interval)  
        this.s_clock = 0        
        this.timer_swap()
        this.tick_status = false                
    },
    format_s : function() {
        const hh = Math.trunc((this.s_clock/3600))
        const mm = Math.trunc((this.s_clock - hh*3600)/60)
        const ss = this.s_clock - (hh*3600 + mm*60)                
        return {hh:hh,mm:mm,ss:ss}
    },
    timer_swap : function() {        
        document.getElementById('timer').innerText = this.toString()
    },
    toString : function(){
        const current_time = this.format_s()  
        return `${current_time.hh.toString().padStart(2,'0')}:${current_time.mm.toString().padStart(2,'0')}:${current_time.ss.toString().padStart(2,'0')}`
    }    

}

const start_btn_fn = () =>{ 
    console.log('Timer Started')       
    timer.tick()
    document.getElementById('timer').style.backgroundColor ='lightgreen';
}

const pause_btn_fn = () =>{
    timer.pause()
    console.log('Timer Paused')
}

const reset_btn_fn = () =>{
    timer.clear()
    const lapList = document.getElementById('lap-list-entry');    
    lapList.innerHTML = null;
    document.getElementById('timer').style.backgroundColor =null;
    console.log('Timer Reseted')
}

const lap_btn_fn = () =>{
    console.log('Lap button')
    const lapEntryElement = document.createElement('li')
    const lapData = document.createTextNode(timer.toString())  
    lapEntryElement.appendChild(lapData)  
    const lapList = document.getElementById('lap-list-entry');
    lapList.appendChild(lapEntryElement);    
}