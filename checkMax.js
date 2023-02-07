window.onload = function() {
    if (Object.keys(users).length >= 6) { 
        alert("Max amount of users reached"); 
        location.href = 'index.html';
    } 
};

