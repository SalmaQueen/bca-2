let paths = document.querySelectorAll('path');

fillSvgPaths()

document.addEventListener('scroll', fillSvgPaths)

function fillSvgPaths() {

    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(scrollPercentage);

    for (var i = 0; i < paths.length; i++) {
        let path = paths[i];

        let pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;
        let drawLength = pathLength * scrollPercentage;

        path.style.strokeDashoffset = pathLength - drawLength;
    }
}


// svg {
//     position: fixed;
//     display: none;
//     width: 100%;
//     height: 100%;
//     top: 20%;
//     left: 10%;
//   }
  
//   svg path {
//     stroke-dasharray: 0;
//     stroke-dashoffset: 0;
//     stroke-width: 1;
//     stroke: #df770f;
//     fill: none;
//   }