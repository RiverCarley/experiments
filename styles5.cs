.slideshow {
    position: relative;
}

.slide {
    display: none;
}

.slide img {
    width: 100%;
    height: auto;
}

.text {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
    box-sizing: border-box;
    cursor: pointer;
}

.gallery {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    padding: 20px;
    box-sizing: border-box;
        display: none; /* Hide gallery by default */
}

#close-gallery {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #ffffff;
    color: #000000;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

