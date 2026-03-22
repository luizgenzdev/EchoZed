document.addEventListener('DOMContentLoaded', () => {
  const nowPlaying = document.querySelector('.hidde');
  const nowPlayingHome = document.querySelector('.play-bar');
  const header = document.querySelector('.header');
 let scrollStarted = false;
 let isScrolling;
  window.addEventListener('scroll', () => {
   if (!scrollStarted) {
    nowPlayingHome.classList.add('translate-x-[200%]');
    nowPlayingHome.classList.add('hidden');
    scrollStarted = true;
  }

  // Clear the previous timeout
  window.clearTimeout(isScrolling);

  // Set a timeout to run after scrolling stops
  isScrolling = setTimeout(() => {
   
      nowPlayingHome.classList.remove('translate-x-[200%]');
   nowPlayingHome.classList.remove('hidden');
    scrollStarted = false; // reset for next scroll
  }, 200); // 200ms
   
   // alert(56)
    if (window.scrollY > 10) {
     // alert(5) // Show when scrollY > 400
    } else {  // Hide when scrollY <= 400
    }
    
    if (window.scrollY > 300) {
      header.classList.add("bg-slate-900") // Show when scrollY > 400
    } else {
      header.classList.remove('bg-slate-900')  // Hide when scrollY <= 400
    }
    
    if (window.scrollY > 300) {
      nowPlaying.style.display = 'block'; // Show when scrollY > 400
    } else {
      nowPlaying.style.display = 'none';  // Hide when scrollY <= 400
    }
  });
});