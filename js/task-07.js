const refs = {
    control_panel: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

refs.control_panel.addEventListener('input', (event)=>{
    refs.text.style.fontSize = event.currentTarget.value + "px";
})