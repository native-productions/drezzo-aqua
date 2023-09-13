import Image from 'next/image'

export function RadialGradientDeco() {
  return (
    <>
      <div
        style={{
          zIndex: -2,
        }}
        className="fixed h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bda5dd71] blur-[12rem]"
      />
      <div
        style={{
          zIndex: -2,
          background: 'radial-gradient(at center, #4e22a6 30%, #040837 5%)',
        }}
        className="fixed -top-[38%] h-[800px] w-[1280px] rounded-full bg-[#0b0c2a] opacity-50 blur-[5rem] sm:left-[-5%] xl:left-[10%]"
      />
      <div
        style={{
          zIndex: -2,
        }}
        className="fixed -top-[18%] h-[800px] w-[800px] rounded-full bg-[#5b95cc93] opacity-50 blur-[8rem] sm:right-[-5%] xl:right-[-30%]"
      />
    </>
  )
}

export function Lines() {
  return (
    <Image
      className="absolute w-full max-w-[1280px]"
      src="/svgs/lines.svg"
      alt="decorator"
      width={2428.18}
      height={2428.18}
      draggable={false}
      style={{ zIndex: -1 }}
    />
  )
}

export function Lines1() {
  return (
    <Image
      src="/svgs/lines-1.svg"
      alt="decorator"
      className="absolute w-max"
      width={1173.75}
      height={1173.75}
    />
  )
}

export function Decorators() {
  return (
    <>
      <Lines />
      {/* <Lines1 /> */}
      {/* <BlueRadial /> */}
      <RadialGradientDeco />
    </>
  )
}
