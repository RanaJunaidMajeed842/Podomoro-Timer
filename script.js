let worktitle = document.getElementById("work");
let breaktitle = document.getElementById("break");

let worktime = 25;
let breaktime = 5;

let seconds = "00";

window.onload = () => {
    document.getElementById("minutes").innerHTML = worktime;
    document.getElementById("seconds").innerHTML = seconds;
    worktitle.classList.add('active');
}

function start()
{

    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
    

    seconds = 59;
    let workminutes = worktime - 1;
    let breakminutes = breaktime - 1;

    breakcount = 0

    let timerfunction = () => 
    {
        document.getElementById("minutes").innerHTML = workminutes;
        document.getElementById("seconds").innerHTML = seconds;
        seconds = seconds-1;

        if (seconds == 0 )
            {
                workminutes = workminutes-1;
                if (workminutes == - 1)
                {
                    if (breakcount % 2 == 0)
                        {
                            workminutes = breakminutes;
                            breakcount++;
                            worktitle.classList.remove('active');
                            breaktitle.classList.add('active')    
                        }
                    else
                        {
                            workminutes = worktime;
                            breakcount++;
                            worktitle.classList.add('active');
                            breaktitle.classList.remove('active')  
                        }
                }
                seconds = 59;
            }
    }
    setInterval(timerfunction, 1000);
}
