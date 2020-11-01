let timeline = gsap.timeline()

timeline.fromTo('.logo', {
    x: -200,
    opacity: 0,

}, {
    x: 0,
    opacity: 1,
    delay: .5,
    duration: 1.3
})
timeline.fromTo('.menu', {
        x: 200,
        opacity: 0,

    }, {
        x: 0,
        opacity: 1,
        delay: .5,
        duration: 1.3
    },
    ">-1.8"
)
timeline.fromTo('.info-section h1', {
        x: 0,
        y: 100,
        opacity: 0
    }, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.3
    })
    .addLabel("h1Show")
timeline.fromTo('.girl', {
        height: 0,
        opacity: .1
    }, {
        opacity: 1,
        height: 600,
        duration: 1.4,
        ease: "power2.inOut"
    },
    ">-.5"
)
timeline.fromTo('.boy', {
        height: 0,
        opacity: .1
    }, {
        opacity: 1,
        height: 600,
        duration: 1.4,
        ease: "power2.inOut"
    },
    ">-1"
)
timeline.fromTo('.shape1', {
        scale: 0,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        ease: "power2.inOut"
    },
    ">-1"
)
timeline.fromTo('.shape3', {
        opacity: 0
    }, {
        opacity: .6,
        ease: "power2.inOut",
        duration: 1
    },
    ">-.2"
)
timeline.fromTo('.shape3', {
    y: 325
}, {
    y: 290,
    repeat: -1,
    duration: 1.5,
    ease: "sine.inOut",
    yoyo: true
})
timeline.fromTo('.shape2', {
        opacity: 0
    }, {
        opacity: .3,
        ease: "power2.inOut",
        duration: 1
    },
    ">-2"
)
timeline.fromTo('.shape2', {
    y: -300
}, {
    y: -335,
    repeat: -1,
    duration: 1.5,
    ease: "sine.inOut",
    yoyo: true
})
timeline.fromTo('.info-section h4', {
        x: -50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1.3
    },
    "h1Show"
)
timeline.fromTo('.call-actions', {
        x: -50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1.3
    },
    "h1Show+=1"
);
