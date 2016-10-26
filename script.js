onload = function() {
    cv = document.querySelector('#cvl'),
    ctx = cv.getContext('2d');
    if (!!ctx) {
        C3qπ = 1.5 * Math.PI, // starting position[angle] for circle drawing
        tc = pct = 0,
        btn = document.querySelector('#lbtn'),
        lnk = document.querySelector('link[rel*="icon"]');
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'fuchsia';
        if(btn.disabled) btn.removeAttribute('disabled'); // enable btn on page refresh
        btn.addEventListener('click', function() { 
            tc = setInterval(updateLoader, 60);
            this.textContent = 'Loading';
            this.style.backgroundColor = '#999';
            this.setAttribute('disabled','');
        });
    }
};
function updateLoader() {
    with(ctx) {
        clearRect(0, 0, 16, 16);
        beginPath();
        arc(8, 8, 6, C3qπ, (pct * 2 * Math.PI / 100 + C3qπ));
        stroke();
    }
    lnk.href= cv.toDataURL('image/png'); // update favicon
    if (pct === 100) {
        clearInterval(tc);
        btn.textContent = 'Loaded';
        btn.style.backgroundColor = 'limegreen';
        return;
    }
    pct++;
}
