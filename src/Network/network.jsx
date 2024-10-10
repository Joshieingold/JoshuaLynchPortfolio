import React, { useEffect, useRef } from "react";

const Network = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = document.getElementById('intro'); 
        if (!canvas || !container) return; 

        const ctx = canvas.getContext('2d');


        const resizeCanvas = () => {
            if (!container) return; 
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            generateStars(); 
        };

        let stars = [];
        const FPS = 60;
        let numStars;


        const generateStars = () => {
            stars = [];
            numStars = Math.floor(canvas.width * canvas.height / 15000); 

            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * (canvas.width / 500) + 1, 
                    vx: (Math.random() - 0.5) * 50, 
                    vy: (Math.random() - 0.5) * 50
                });
            }
        };


        resizeCanvas();


        const distance = (point1, point2) => {
            const xs = point2.x - point1.x;
            const ys = point2.y - point1.y;
            return Math.sqrt(xs * xs + ys * ys);
        };


        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "lighter";

            stars.forEach(star => {
                ctx.fillStyle = "#fff";
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.strokeStyle = 'black';
                ctx.stroke();
            });

            ctx.beginPath();
            stars.forEach(starI => {
                stars.forEach(starII => {
                    if (distance(starI, starII) < 150) {
                        ctx.moveTo(starI.x, starI.y);
                        ctx.lineTo(starII.x, starII.y);
                    }
                });
            });
            ctx.lineWidth = 0.05;
            ctx.strokeStyle = 'white';
            ctx.stroke();
        };


        const update = () => {
            stars.forEach(star => {
                star.x += star.vx / FPS;
                star.y += star.vy / FPS;


                if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
                if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
            });
        };


        const tick = () => {
            draw();
            update();
            requestAnimationFrame(tick);
        };


        window.addEventListener('resize', resizeCanvas);


        tick();


        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default Network;
