function viewSection(id,MeneuId){
    // to scrolling section with animation smooth
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    var navTag = document.getElementsByClassName('navLink');
    console.log(navTag);
    [].forEach.call(navTag, function(el) {
        el.classList.remove("active");
    });

    var element = document.getElementById(MeneuId);
    element.classList.add("active");
}

document.addEventListener('scroll', chickPagePosition);

function chickPagePosition(){
    elem = document.getElementById("main");
    var x_position = elem.getBoundingClientRect();
    if(x_position.top > 0){
        document.getElementById('header').style.display = 'block';
        document.getElementById('goToTop').style.display = 'none';
    }else{
        document.getElementById('header').style.display = 'none';
        document.getElementById('goToTop').style.display = 'block';
    }
}

function goToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}