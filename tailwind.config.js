export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const darkMode = "class";
export const theme = {
  extend: {
    animation: {
      "spin-bounce": "spin-bounce 0.3s linear",
      "spin-bounce-reverse": "spin-bounce-reverse 0.3s linear",
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
    },
  },
};
export const plugins = [];
