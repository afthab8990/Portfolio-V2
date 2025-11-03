 const circle = document.getElementById("expertise");
    const maskDiameter = 500;
    const maskRadius = maskDiameter / 2;
    let isInside = false;

    function updateMaskPosition(clientX, clientY) {
      const rect = circle.getBoundingClientRect();
      const localX = clientX - rect.left;
      const localY = clientY - rect.top;

      circle.style.maskPosition = `${localX - maskRadius}px ${localY - maskRadius}px`;
      circle.style.webkitMaskPosition = `${localX - maskRadius}px ${localY - maskRadius}px`;
    }

    // Handle pointer movement
    document.addEventListener('pointermove', (e) => {
      if (!isInside) return;
      updateMaskPosition(e.clientX, e.clientY);
    });

    // When cursor enters the page or area
    document.addEventListener('pointerenter', (e) => {
      isInside = true;
      updateMaskPosition(e.clientX, e.clientY);
      circle.style.maskSize = `${maskDiameter}px ${maskDiameter}px`;
      circle.style.webkitMaskSize = `${maskDiameter}px ${maskDiameter}px`;
    });

    // When cursor leaves window or area
    document.addEventListener('pointerleave', () => {
      isInside = false;
      circle.style.maskSize = `0 0`;
      circle.style.webkitMaskSize = `0 0`;
    });