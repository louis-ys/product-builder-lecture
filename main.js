// Theme Management Logic
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update button text if needed
  updateToggleButtonText(newTheme);
};

const updateToggleButtonText = (theme) => {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.textContent = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  }
};

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateToggleButtonText(document.documentElement.getAttribute('data-theme'));
  
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
});
