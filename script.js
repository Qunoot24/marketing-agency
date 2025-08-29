// mobile menu toggle
const menuBtn = document.querySelector('.menu');
const mobileWrap = document.querySelector('.mobile-wrap');
if(menuBtn && mobileWrap){
  menuBtn.addEventListener('click', ()=> {
    mobileWrap.style.display = mobileWrap.style.display === 'block' ? 'none' : 'block';
  });
}

// reveal on scroll
const els = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((ents)=>{
  ents.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  })
},{threshold:.14});
els.forEach(el=>io.observe(el));
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    button.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});



