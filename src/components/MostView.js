import React, { useRef, useState, useEffect } from 'react';
import styles from "./MostView.modules.css"

const MostView = () => {



  

  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);


  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const arrowBtns = wrapper.querySelectorAll('i');
    const carouselChildren = Array.from(carousel.children);

    const firstCardWidth = carousel.querySelector('.card').offsetWidth;
    let cardPerView = Math.floor(carousel.offsetWidth / firstCardWidth);

   // Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
carouselChildren
.slice(-cardPerView)
.reverse()
.forEach((card) => {
  carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
});

// Insert copies of the first few cards to the end of the carousel for infinite scrolling
carouselChildren.slice(0, cardPerView).forEach((card) => {
carousel.insertAdjacentHTML('beforeend', card.outerHTML);
});

    // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove('no-transition');

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      setIsDragging(true);
      carousel.classList.add('dragging');
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      setIsDragging(false);
      carousel.classList.remove('dragging');
    };

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove('no-transition');
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-transition');
      }
      clearTimeout(timeoutId);
      if (!wrapper.matches(':hover')) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 8000 || !isAutoPlay) return;
      const newTimeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
      }, 6000);
      setTimeoutId(newTimeoutId); // Atualize o valor da variável timeoutId usando setTimeoutId
    };
    

    autoPlay();

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);
    carousel.addEventListener('scroll', infiniteScroll);
    wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    wrapper.addEventListener('mouseleave', autoPlay);

    return () => {
      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('mousemove', dragging);
      document.removeEventListener('mouseup', dragStop);
      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('mousemove', dragging);
      document.removeEventListener('mouseup', dragStop);
      carousel.removeEventListener('scroll', infiniteScroll);
      wrapper.removeEventListener('mouseenter', () => clearTimeout(timeoutId));
      wrapper.removeEventListener('mouseleave', autoPlay);
    };
  }, []);

  return (
    <div class="principal">
  <div ref={wrapperRef} class="wrapper">
    <i id="left" class="fa-solid fa-angle-left"></i>
    <ul ref={carouselRef} class="carousel">
      <li class="card item"> 
        <div class="img">
          <img src="https://picsum.photos/536/354" alt="" />
        </div>
        <h6>titles vfdnvuioubd</h6>
        <p>detalhes</p>
        <p>R$45,89</p>
      </li>
    </ul>
    <i id="right" class="fa-solid fa-angle-right"></i>
  </div>
</div>

  );
};

export default MostView

