function disableZoom() {
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });
}
disableZoom();