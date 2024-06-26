import { createApp } from "vue";
import App from "./App.vue";
import { HiVueIcon, addIcons } from ".";

import {
  FaFlag,
  FcLinux,
  BiBattery,
  BiBatteryHalf,
  BiBatteryFull,
  FaCamera,
  FaBan,
  FaSquare,
  SiWechat,
  RiRefreshLine,
  FaSpinner,
  GiPiercingSword,
  FaRegularBell,
  RiHeartPulseLine,
  BiLightning,
  HiAcademicCap,
  RiSailboatLine
} from "../icons";

addIcons(
  FaFlag,
  FcLinux,
  BiBattery,
  BiBatteryHalf,
  BiBatteryFull,
  FaCamera,
  FaBan,
  FaSquare,
  SiWechat,
  RiRefreshLine,
  FaSpinner,
  GiPiercingSword,
  FaRegularBell,
  RiHeartPulseLine,
  BiLightning,
  HiAcademicCap,
  RiSailboatLine
);

addIcons({
  name: "baidu",
  width: 23.868,
  height: 26,
  d: "M3.613 13.701c2.827-.608 2.442-3.986 2.357-4.725-.138-1.139-1.477-3.128-3.296-2.971C.386 6.21.052 9.515.052 9.515c-.309 1.528.74 4.793 3.561 4.186zm3.002 5.875c-.083.238-.268.846-.107 1.375.315 1.187 1.346 1.24 1.346 1.24h1.48v-3.619H7.749c-.713.213-1.057.767-1.134 1.004zM8.86 8.035c1.562 0 2.823-1.797 2.823-4.019C11.683 1.796 10.421 0 8.86 0 7.301 0 6.036 1.796 6.036 4.016c0 2.222 1.265 4.019 2.824 4.019zm6.724.265c2.087.271 3.429-1.956 3.695-3.644.272-1.686-1.074-3.644-2.552-3.98-1.48-.339-3.329 2.032-3.497 3.578-.2 1.89.271 3.778 2.354 4.046zm5.114 9.923s-3.229-2.498-5.113-5.198c-2.555-3.981-6.185-2.361-7.399-.337-1.209 2.024-3.093 3.305-3.36 3.644-.271.334-3.9 2.293-3.095 5.871.806 3.576 3.635 3.508 3.635 3.508s2.085.205 4.504-.336c2.42-.537 4.503.134 4.503.134s5.652 1.893 7.199-1.751c1.545-3.645-.874-5.535-.874-5.535zm-9.671 5.423H7.352c-1.587-.316-2.219-1.4-2.299-1.584-.078-.188-.528-1.059-.29-2.539.686-2.219 2.642-2.379 2.642-2.379h1.956V14.74l1.666.025v8.881zm6.844-.025h-4.229c-1.639-.423-1.716-1.587-1.716-1.587v-4.677l1.716-.027v4.203c.104.447.661.529.661.529h1.742v-4.705h1.825v6.264zm5.986-12.486c0-.808-.671-3.239-3.159-3.239-2.492 0-2.825 2.295-2.825 3.917 0 1.548.131 3.71 3.227 3.641 3.096-.068 2.757-3.507 2.757-4.319z"
});

const app = createApp(App);
app.component("VIcon", HiVueIcon);
app.mount("#app");
