export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const darkMode = "class";
export const theme = {
  extend: {
    animation: {
      "spin-bounce": "spin-bounce 0.3s linear",
      "spin-bounce-reverse": "spin-bounce-reverse 0.3s linear",
      "fade-bounce-in": "fade-bounce-in 0.2s cubic-bezier(0.4, 0, 1, 1)",
    },
    keyframes: {
      "spin-bounce": {
        "0%": {
          transform: "translateY(0) rotate(0deg)",
        },
        "50%": {
          transform: "translateY(-10px) rotate(90deg)",
        },
        "100%": {
          transform: "translateY(0) rotate(180deg)",
        },
      },
      "spin-bounce-reverse": {
        "0%": {
          transform: "translateY(0) rotate(180deg)",
        },
        "50%": {
          transform: "translateY(-10px) rotate(90deg)",
        },
        "100%": {
          transform: "translateY(0) rotate(0deg)",
        },
      },
      "fade-bounce-in": {
        "0%": {
          opacity: "0",
          transform: "scale(0)",
        },
        "65%": {
          opacity: "0.7",
          transform: "scale(1.2)",
        },
        "100%": {
          opacity: "1",
          transform: "scale(1)",
        },
      },
    },
  },
};
export const plugins = [];
