import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useMediaQuery } from 'react-responsive'


const Hero = () => {
    const videoRef = useRef()
    const scrollRef = useRef()
    const isMobile = useMediaQuery({ maxWidth: 768 })

    useGSAP(() => {
        const heroSplit = new SplitText('#hero-title', { type: 'chars, words' })
        const paragraphSplit = new SplitText('#hero-description', { type: 'lines' })
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })

        // Setup video timeline and metadata handler

        const startValue = isMobile ? "top 50%" : "top top"
        const endValue = isMobile ? "120% top" : "bottom top"

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })

        const handleMetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }

        videoRef.current.readyState >= 1
            ? handleMetadata()
            : videoRef.current.onloadedmetadata = handleMetadata

        const boxes = gsap.utils.toArray(scrollRef.current.children)

        boxes.forEach(box => {
            gsap.to(boxes, {
                xPercent: 50,
                scale: 1.5,
                yPercent: 100,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: box,
                    start: "top 60%",
                    end: "top top",
                    scrub: true,
                }
            })
        })

        console.log(startValue, endValue)


    }, [])

    return (
        <>
            <div className='text-center  h-[calc(100vh-300px)] flex flex-col justify-center items-center'>
                < h1 className='text-[70px] font-bold mb-20 p-10 mt-20' id='hero-title'> Lorem, ipsum. </h1 >
                <p className='text-xl w-1/2' id='hero-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nihil blanditiis mollitia beatae similique hic impedit officia ad voluptate excepturi.</p>
            </div>
            <div className='video absolute z-[-1] w-screen h-full top-0 left-0 md:object-contain object-bottom object-cover inset-0'>
                <video
                    ref={videoRef}
                    src={'/videos/porsche.mp4'}
                    id='video'
                    muted
                    playsInline
                    preload='auto'
                    className='h-full w-full h-full object-cover' />
            </div>
            <div className='h-screen' ref={scrollRef}>
                <div id="scroll-pink" className="scroll-box w-20 h-20 rounded-full bg-pink-500">
                </div>
                <div id="scroll-orange" className="scroll-box w-20 h-20 rounded-full bg-orange-500">
                </div>
            </div>
        </>
    )
}

export default Hero