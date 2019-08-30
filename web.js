
//Game loop update
const step = t1 => t2 =>
{
    if(t2 - t1 > 100)
    {
        state = new(state)
        draw()
        window.requestAnimationFrame(step(t2))
    }
    else
    {
        window.requestAnimationFrame(step(t1))
    }
}

//Main
draw();
window.requestAnimationFrame(step(0));