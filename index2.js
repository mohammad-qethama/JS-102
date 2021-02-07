var team = prompt('Your Name Team', 'FCAWESOME!');
console.log('his team is' + team);
function  Team(){
    var myteam = document.getElementById('Team');
    myteam.textContent = 'We are '+team+ ' THE BEST IN THE WORLD ';

}

Team();