import React, { useEffect, useRef } from "react";

const Network = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = document.getElementById('intro'); // Ensure this matches your container ID
        if (!canvas || !container) return; // Ensure canvas and container exist before proceeding

        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to match the #intro container
        const resizeCanvas = () => {
            if (!container) return; // If the container doesn't exist, return early
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            generateStars(); // Regenerate stars on resize
        };

        let stars = [];
        const FPS = 60;
        let numStars;

        // Generate stars proportional to screen size
        const generateStars = () => {
            stars = []; // Reset stars array
            numStars = Math.floor(canvas.width * canvas.height / 15000); // Adjust the divisor for density

            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * (canvas.width / 500) + 1, // Scale radius with screen width
                    vx: (Math.random() - 0.5) * 50, // Adjust velocity proportionally
                    vy: (Math.random() - 0.5) * 50
                });
            }
        };

        // Call the resizeCanvas to set initial size
        resizeCanvas();

        // Function to calculate distance between two points
        const distance = (point1, point2) => {
            const xs = point2.x - point1.x;
            const ys = point2.y - point1.y;
            return Math.sqrt(xs * xs + ys * ys);
        };

        // Draw stars and connections
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

        // Update stars' positions
        const update = () => {
            stars.forEach(star => {
                star.x += star.vx / FPS;
                star.y += star.vy / FPS;

                // Bounce stars off the canvas edges
                if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
                if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
            });
        };

        // Animation loop
        const tick = () => {
            draw();
            update();
            requestAnimationFrame(tick);
        };

        // Handle window resizing
        window.addEventListener('resize', resizeCanvas);

        // Start animation
        tick();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default Network;
