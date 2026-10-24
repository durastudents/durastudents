export default function HeritageIllustration() {
  return (
    <figure className="heritage-art relative isolate overflow-hidden rounded-[2rem] border p-5 sm:p-7">
      <span
        aria-hidden="true"
        className="heritage-blob heritage-blob--one absolute"
      />
      <span
        aria-hidden="true"
        className="heritage-blob heritage-blob--two absolute"
      />
      <svg
        aria-hidden="true"
        className="relative z-10 h-auto w-full"
        fill="none"
        viewBox="0 0 440 340"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="327" cy="77" r="34" className="heritage-art-sun" />
        <circle
          cx="327"
          cy="77"
          r="47"
          className="heritage-art-sun-ring"
          strokeDasharray="2 9"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M38 199c43-55 91-64 142-20 39-45 82-54 127-27 47-27 81-21 111 5v112H38V199Z"
          className="heritage-art-hill-back"
        />
        <path
          d="M26 228c55-40 103-34 145 16 48-56 108-68 181-34 25-18 48-21 71-8v76H26v-50Z"
          className="heritage-art-hill-front"
        />
        <path
          d="M267 172c-11 29-33 53-65 72-24 15-37 30-40 45h110c-10-19-12-34-6-47 10-22 19-42 25-60"
          className="heritage-art-river"
        />
        <path
          d="M65 264c15-15 32-21 52-17m-35 21c10-11 22-15 37-12m201 3c12-14 27-19 45-16m-32 23c9-10 19-14 32-12"
          className="heritage-art-ground-detail"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <g className="heritage-art-book" strokeLinejoin="round">
          <path d="M104 190c39-18 80-15 116 8v89c-36-23-77-26-116-8v-89Z" />
          <path d="M220 198c36-23 77-26 116-8v89c-39-18-80-15-116 8v-89Z" />
          <path d="M220 198v89" />
          <path d="M121 211c27-10 53-8 77 3m-77 16c27-10 53-8 77 3m-77 16c27-10 53-8 77 3" />
          <path d="M319 211c-27-10-53-8-77 3m77 16c-27-10-53-8-77 3m77 16c-27-10-53-8-77 3" />
        </g>
        <path
          d="M185 182c6-13 18-20 35-21 16 1 28 8 35 21"
          className="heritage-art-sprout"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M220 160c-15-1-22-10-21-24 14-1 22 7 21 24Zm0-7c1-15 9-22 23-22 1 14-7 22-23 22Z"
          className="heritage-art-leaf"
        />
      </svg>
      <figcaption className="relative z-10 mt-1 text-center text-xs font-medium muted">
        Knowledge grows when it is shared with care.
      </figcaption>
    </figure>
  );
}
