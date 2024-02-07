// Text Animation

// SVG HEART ANIMATION USING d3 and GSAP
let paper = d3.select("#canvas");
let wsvg = $("#canvas").width();
let hsvg = $("#canvas").height();

let d = Math.ceil((Math.floor(Math.random() * 700) + 100) / 10) * 10;
let count = 0;

function rNumTime() {
    d = Math.ceil((Math.floor(Math.random() * 600) + 100) / 10) * 10;
}

setInterval(function () {
    count++;
    let x = Math.floor(Math.random() * (wsvg - 100)) + 50;
    let y = Math.floor(Math.random() * (hsvg - 100)) + 50;
    let b = paper
        .append("use")
        .attr("xlink:href", "#heart")
        .attr("id", "h" + count)
        .attr("transform", "translate(" + x + ", " + y + ")");
    setTimeLine();
    rNumTime();
}, d);

function setTimeLine() {
    let s = (Math.random() * (0.7 - 0.2) + 0.5).toFixed(1);
    let heart = $("#h" + count);

    let tl = new TimelineMax({ repeat: 1, yoyo: true });

    tl.from(heart, 0.7, { scale: 0, transformOrigin: "50% 50%" })
        .to(heart, 0.7, { scale: s, transformOrigin: "50% 50%" })
        .to(heart, 0.3, { scale: 1, transformOrigin: "50% 50%", opacity: 0 });
    // Tried an onComplete here but it wasn't working properly, this was just the easier know-how
    setTimeout(function () {
        remove(heart);
    }, 1700);
}

function remove(h) {
    h.remove();
}

$(window).on("resize", function () {
    wsvg = $("#canvas").width();
    hsvg = $("#canvas").height();
});
