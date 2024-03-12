const savedTheme = localStorage.getItem('Theme');

const toggleSwitches = document.querySelectorAll('.checkbox');
toggleSwitches.forEach(toggleSwitch =>
  toggleSwitch.addEventListener('click', onClick)
);

function onClick(e) {
  if (e.currentTarget.checked) {
    document.body.classList.add('dark');
    toggleSwitches.forEach(toggleSwitch => (toggleSwitch.checked = true));
    localStorage.setItem('Theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    toggleSwitches.forEach(toggleSwitch => (toggleSwitch.checked = false));
    localStorage.removeItem('Theme', 'dark');
  }
}

if (savedTheme) {
  document.body.classList.add(savedTheme);
  toggleSwitches.forEach(toggleSwitch => (toggleSwitch.checked = true));
}
