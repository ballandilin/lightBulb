window.onload = () => {


    let lamp = document.querySelector('.lampe');

    let onMouseMove = (e) => {
        lamp.style.position = 'relative';
        lamp.style.left = e.pageX - (window.innerWidth / 2) + 'px'; // convert to pixels relative
        lamp.style.top = e.pageY - (window.innerHeight / 2) + 'px'; // convert to pixels relative
        console.log(lamp.style.left);
    };


    document.addEventListener('mousemove', onMouseMove);
}