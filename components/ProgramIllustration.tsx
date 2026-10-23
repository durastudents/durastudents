import type { ProgramIllustrationType } from "@/data/site";

export default function ProgramIllustration({
  kind,
}: {
  kind: ProgramIllustrationType;
}) {
  return (
    <svg
      aria-hidden="true"
      className="h-auto w-full"
      fill="none"
      viewBox="0 0 320 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      {kind === "language" && (
        <>
          <circle cx="160" cy="110" r="78" fill="#DCECDD" />
          <path d="M73 81c25-10 49-8 76 6v91c-27-14-51-16-76-6V81Z" fill="#fff" stroke="#1E5632" strokeWidth="4" />
          <path d="M247 81c-25-10-49-8-76 6v91c27-14 51-16 76-6V81Z" fill="#F7E7C8" stroke="#1E5632" strokeWidth="4" />
          <path d="M91 103c15-4 29-3 42 3M91 120c15-4 29-3 42 3M91 137c15-4 29-3 42 3M229 103c-15-4-29-3-42 3M229 120c-15-4-29-3-42 3M229 137c-15-4-29-3-42 3" stroke="#6B8D72" strokeLinecap="round" strokeWidth="4" />
          <path d="M126 62h70a13 13 0 0 1 13 13v12h-95V75a13 13 0 0 1 12-13Z" fill="#F2B544" />
          <circle cx="148" cy="48" r="7" fill="#B65D45" />
          <circle cx="174" cy="48" r="7" fill="#256A3C" />
          <circle cx="198" cy="48" r="7" fill="#365F82" />
        </>
      )}
      {kind === "documentation" && (
        <>
          <circle cx="160" cy="108" r="79" fill="#F5E9D9" />
          <path d="M82 161c0-27 20-48 46-48s46 21 46 48v17H82v-17Z" fill="#365F82" />
          <circle cx="128" cy="91" r="25" fill="#D99B73" />
          <path d="M94 87c2-26 17-39 37-39 21 0 34 16 34 38-12-4-23-13-28-22-8 12-23 20-43 23Z" fill="#253E35" />
          <rect x="191" y="102" width="28" height="52" rx="8" fill="#F2B544" stroke="#805D29" strokeWidth="3" />
          <path d="M205 154v14m-13 0h26" stroke="#805D29" strokeLinecap="round" strokeWidth="4" />
          <circle cx="205" cy="116" r="4" fill="#805D29" />
          <path d="M187 83c7-9 17-9 24 0m-31-12c12-15 29-15 41 0" stroke="#B65D45" strokeLinecap="round" strokeWidth="4" />
          <path d="M75 178h170" stroke="#1E5632" strokeLinecap="round" strokeWidth="5" />
        </>
      )}
      {kind === "gathering" && (
        <>
          <circle cx="160" cy="110" r="79" fill="#E5EAF1" />
          <path d="M76 69h168" stroke="#805D29" strokeLinecap="round" strokeWidth="4" />
          <path d="m90 70 19 27 19-27m7 0 19 27 19-27m7 0 19 27 19-27" fill="#F2B544" stroke="#B65D45" strokeLinejoin="round" strokeWidth="3" />
          <circle cx="111" cy="118" r="18" fill="#C98563" />
          <path d="M79 177c0-24 13-42 32-42s32 18 32 42v3H79v-3Z" fill="#256A3C" />
          <circle cx="160" cy="112" r="20" fill="#E0A57D" />
          <path d="M125 179c0-28 14-47 35-47s35 19 35 47v1h-70v-1Z" fill="#B65D45" />
          <circle cx="209" cy="118" r="18" fill="#9D684D" />
          <path d="M177 177c0-24 13-42 32-42s32 18 32 42v3h-64v-3Z" fill="#365F82" />
          <path d="M66 183h188" stroke="#1E5632" strokeLinecap="round" strokeWidth="5" />
        </>
      )}
      {kind === "publications" && (
        <>
          <circle cx="160" cy="110" r="79" fill="#F5E9D9" />
          <path d="M73 78h174v103H73z" fill="#B65D45" />
          <path d="M88 66h145v104H88z" fill="#F2B544" />
          <path d="M160 83c-25-15-47-15-65-8v77c19-8 41-7 65 8V83Z" fill="#fff" stroke="#1E5632" strokeLinejoin="round" strokeWidth="4" />
          <path d="M160 83c25-15 47-15 65-8v77c-19-8-41-7-65 8V83Z" fill="#E6F0E5" stroke="#1E5632" strokeLinejoin="round" strokeWidth="4" />
          <path d="M108 99c13-4 24-3 36 2m-36 14c13-4 24-3 36 2m39-16c13-5 24-6 36-2m-36 18c13-5 24-6 36-2" stroke="#6B8D72" strokeLinecap="round" strokeWidth="4" />
          <path d="M160 81v78" stroke="#1E5632" strokeLinecap="round" strokeWidth="4" />
          <path d="M126 70c2-17 14-27 28-27" stroke="#256A3C" strokeLinecap="round" strokeWidth="5" />
          <circle cx="157" cy="42" r="7" fill="#256A3C" />
        </>
      )}
      {kind === "quiz" && (
        <>
          <circle cx="160" cy="110" r="79" fill="#E5EAF1" />
          <path d="M128 56h64v24c0 24-13 39-32 39s-32-15-32-39V56Z" fill="#F2B544" stroke="#805D29" strokeWidth="4" />
          <path d="M128 67h-20v12c0 17 9 27 25 29m59-41h20v12c0 17-9 27-25 29" stroke="#805D29" strokeLinecap="round" strokeWidth="7" />
          <path d="M160 119v17m-23 12h46m-37-12h28v12h-28z" fill="#B65D45" stroke="#805D29" strokeLinejoin="round" strokeWidth="4" />
          <path d="M75 179h57v-29H75zm57 0h57v-47h-57zm57 0h57v-29h-57z" fill="#365F82" stroke="#253E35" strokeLinejoin="round" strokeWidth="4" />
          <circle cx="101" cy="137" r="13" fill="#C98563" />
          <circle cx="219" cy="137" r="13" fill="#9D684D" />
          <path d="M88 155c5-10 21-10 26 0m93 0c5-10 21-10 26 0" stroke="#F7E7C8" strokeLinecap="round" strokeWidth="5" />
          <path d="m153 72 7-10 7 10h-5l2 8-9-11h5l-2-3-5 6Z" fill="#fff" />
        </>
      )}
    </svg>
  );
}
