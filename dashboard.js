document.addEventListener("DOMContentLoaded", () => {
    const activeUser = JSON.parse(localStorage.getItem('active_user'));
    if(activeUser) {
        if(document.getElementById('user-display-name')) document.getElementById('user-display-name').innerText = activeUser.name;
        if(document.getElementById('profile-name')) document.getElementById('profile-name').innerText = activeUser.name;
        if(document.getElementById('profile-email')) document.getElementById('profile-email').innerText = activeUser.email;
        if(document.getElementById('profile-phone')) document.getElementById('profile-phone').innerText = activeUser.phone;
        if(document.getElementById('profile-district')) document.getElementById('profile-district').innerText = activeUser.district;
        if(document.getElementById('profile-college')) document.getElementById('profile-college').innerText = activeUser.college;
    }
});

function switchTab(tabName, event) {
    event.preventDefault();

    document.querySelectorAll('.nav-item a').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');

    document.querySelectorAll('.panel').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });

    const targetPanel = document.getElementById(`${tabName}-panel`);
    if(targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
    }

    const titles = {
        'home': 'Home Dashboard',
        'exam': 'Exam Section',
        'profile': 'Profile Section',
        'leaderboard': 'Leaderboard'
    };
    if(document.getElementById('page-title')) {
        document.getElementById('page-title').innerText = titles[tabName];
    }
}

function handleLogout() {
    localStorage.removeItem('active_user');
    window.location.href = "login.html";
}
