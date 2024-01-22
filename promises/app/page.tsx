import SplashScreen from "@/components/SplashScreen";
import dynamic from "next/dynamic";

export default function Home() {
  const SplitScreenSliderNoSSR = dynamic(()=> import('@/components/SplitScreenSlider'),{ssr:false})
  return (
    <>
      <SplashScreen />
      <SplitScreenSliderNoSSR />
    </>
  );
}
