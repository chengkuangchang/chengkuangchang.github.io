document.querySelectorAll('button.bibtex').forEach(button=>{
  button.addEventListener('click',()=>{
    const panel=document.getElementById(button.getAttribute('aria-controls'));
    const open=button.getAttribute('aria-expanded')==='true';
    panel.classList.toggle('hidden',open);
    button.setAttribute('aria-expanded',String(!open));
  });
});
