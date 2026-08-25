import { useEffect, useRef } from "react";

function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrame;

    let width = 0;
    let height = 0;

    const nodes = [];

    const NODE_COUNT =
      window.innerWidth < 768 ? 28 : 50;

    const CONNECTION_DISTANCE = 140;

    const resize = () => {
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    const createNodes = () => {
      nodes.length = 0;

      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,

          vx:
            (Math.random() - 0.5) *
            0.15,

          vy:
            (Math.random() - 0.5) *
            0.15,

          radius:
            Math.random() * 1.2 +
            0.6,

          pulse:
            Math.random() *
            Math.PI *
            2,
        });
      }
    };

    const drawGrid = () => {
      const size = 70;

      ctx.strokeStyle =
        "rgba(255,255,255,0.018)";

      ctx.lineWidth = 1;

      for (
        let x = 0;
        x < width;
        x += size
      ) {
        ctx.beginPath();

        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);

        ctx.stroke();
      }

      for (
        let y = 0;
        y < height;
        y += size
      ) {
        ctx.beginPath();

        ctx.moveTo(0, y);
        ctx.lineTo(width, y);

        ctx.stroke();
      }
    };

    const drawConnections = () => {
      for (
        let i = 0;
        i < nodes.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < nodes.length;
          j++
        ) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance =
            Math.sqrt(
              dx * dx + dy * dy
            );

          if (
            distance <
            CONNECTION_DISTANCE
          ) {
            const opacity =
              (1 -
                distance /
                  CONNECTION_DISTANCE) *
              0.13;

            ctx.strokeStyle = `
              rgba(
                34,
                211,
                238,
                ${opacity}
              )
            `;

            ctx.lineWidth = 0.6;

            ctx.beginPath();

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.stroke();
          }
        }
      }
    };

    const drawNodes = () => {
      nodes.forEach((node) => {
        const pulse =
          Math.sin(node.pulse) *
            0.5 +
          0.5;

        ctx.beginPath();

        ctx.fillStyle = `
          rgba(
            103,
            232,
            249,
            ${0.3 + pulse * 0.35}
          )
        `;

        ctx.arc(
          node.x,
          node.y,
          node.radius +
            pulse * 0.5,
          0,
          Math.PI * 2
        );

        ctx.fill();
      });
    };

    const updateNodes = () => {
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        node.pulse += 0.015;

        if (node.x < -10)
          node.x = width + 10;

        if (node.x > width + 10)
          node.x = -10;

        if (node.y < -10)
          node.y = height + 10;

        if (node.y > height + 10)
          node.y = -10;
      });
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      drawGrid();
      drawConnections();
      drawNodes();
      updateNodes();

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    resize();
    createNodes();
    animate();

    window.addEventListener(
      "resize",
      resize
    );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cyber-background"
      aria-hidden="true"
    />
  );
}

export default CyberBackground;