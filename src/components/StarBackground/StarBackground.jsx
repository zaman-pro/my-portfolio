import React, { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    let isMounted = true;

    const minDelay = 400;
    const maxDelay = 2000;

    const spawnMeteor = () => {
      if (!isMounted) return;

      const animationDuration = Math.random() * 3;

      const meteor = {
        id: Date.now() + Math.random(),
        size: Math.random() * 1.2 + 0.8,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDuration,
      };

      setMeteors((prev) => [...prev, meteor]);

      setTimeout(() => {
        setMeteors((prev) => prev.filter((m) => m.id !== meteor.id));
      }, animationDuration * 1000);

      // Schedule next meteor spawn with random delay
      const nextDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(spawnMeteor, nextDelay);
    };

    spawnMeteor();

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-twinkle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 60 + "px",
            height: meteor.size * 2.5 + "px", // thinner shape
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
