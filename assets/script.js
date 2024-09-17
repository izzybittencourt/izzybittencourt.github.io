function updateSection(name) {
    let sections = document.getElementsByTagName("section");
    for (s of sections) {
        if (s.id === name) s.style.display='';
        else s.style.display='none';
    }
}