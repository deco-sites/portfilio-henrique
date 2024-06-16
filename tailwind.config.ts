import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    fontFamily: {
      primary: "Inter"
    },
    container: 
      { center: true }
  },
};
