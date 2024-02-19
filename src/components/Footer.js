import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import IgIcon from "./IgIcon";
import { Bounded } from "./Bounded";
import pLogo from "../icons/p-logo.png";
import Image from "next/image";

// function SignUpForm({ settings }) {
//   return (
//     <div className="px-4">
//       <form
//         action="/api/sign-up"
//         method="post"
//         className="grid w-full max-w-xl grid-cols-1 gap-6"
//       >
//         {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
//           <div className="text-center tracking-tight text-slate-300">
//             <PrismicRichText
//               field={settings.data.newsletterDescription}
//               components={{
//                 heading1: ({ children }) => (
//                   <Heading
//                     as="h2"
//                     size="6xl"
//                     className="mb-4 text-white last:mb-0"
//                   >
//                     {children}
//                   </Heading>
//                 ),
//                 paragraph: ({ children }) => (
//                   <p className="mb-4 last:mb-0">{children}</p>
//                 ),
//               }}
//             />
//           </div>
//         )}
//         <div className="grid grid-cols-1 gap-2">
//           <div className="relative">
//             <label>
//               <span className="sr-only">Email address</span>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="jane.doe@example.com"
//                 required={true}
//                 className="w-full rounded border border-slate-500 bg-slate-600 py-3 pl-3 pr-10 text-white placeholder-slate-400"
//               />
//             </label>
//             <button
//               type="submit"
//               className="absolute bottom-0 right-0 top-0 flex items-center justify-center px-3 text-2xl text-slate-400"
//             >
//               <span className="sr-only">Submit</span>
//               <span aria-hidden={true}>&rarr;</span>
//             </button>
//           </div>
//           {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
//             <p className="text-center text-xs text-slate-400">
//               <PrismicText field={settings.data.newsletterDisclaimer} />
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

export function Footer({ settings, navigation }) {
  return (
    <Bounded className="h-auto bg-dark-beige pb-3 py-3">
      <div className="flex w-full px-2 mx-auto lg:flex-row justify-between items-center pt-1">
        <ul className="flex flex-col ">
          <PrismicNextLink href="/" className="pb-3">
            {/* <h2 className="font-display text-[2rem]">pansy</h2> */}
            <Image
              width={48}
              height={49}
              src={pLogo}
              className="w-[3rem]"
              alt="logo"
            />
          </PrismicNextLink>
          <p className="font-body font-light md:text-[12px] text-[11px]">
            {settings.data.city}
          </p>
          <p className="font-body font-light md:text-[12px] text-[11px]">
            {settings.data.phone_number}
          </p>
          <p className="font-body font-light md:text-[12px] text-[11px]">
            {settings.data.email}
          </p>
        </ul>
        <ul className="flex flex-wrap flex-col items-center gap-4 pt-[2rem]">
          {navigation.data?.links.map((item, index) => (
            <PrismicNextLink
              key={index}
              field={item.link}
              className="font-body font-light text-[14px]">
              <PrismicText field={item.label} />
            </PrismicNextLink>
          ))}
        </ul>
        <ul className="flex items-center font-body font-light flex-col">
          <div className="w-32">
            <a
              href="https://www.instagram.com/pansy.gardens/"
              target="_blank"
              alt="ig-logo">
              <IgIcon />
            </a>
            <p className="font-body font-light text-right md:text-[12px] text-[10px]">
              {settings.data.serving_city}
            </p>
          </div>
        </ul>
      </div>
      <div className="flex items-center text-center flex-col px-4  justify-center pt-7 pb-2 font-body font-light text-[11px]">
        <div className=" flex flex-row gap-2">
          <h2>{settings.data.made_by} </h2>

          <a
            href="https://odeliafinkel.com/"
            target="_blank"
            className="font-body font-light text-[11px] underline">
            Odelia Finkelstein
          </a>
        </div>
        <div>
          <h6>© 2024 pansy</h6>
        </div>
      </div>
    </Bounded>
  );
}
