// import { PrismicRichText } from '@prismicio/react';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';
/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param {FeaturesProps}
 */

const icons = [
  {
    house: <HouseIcon />,
    lightbulb: <LightBulbIcon />,
    globe: <GlobeIcon />,
    leaf: <LeafIcon />,
  },
];

// {icons.map((item) => (
//   <>
//     <>{item.globe}</>
//     <>{item.house}</>
//     <>{item.lightbulb}</>
//     <>{item.leaf}</>
//   </>
// ))}

const Features = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="">
        <div className="bg-medium-beige py-1 py-4">
          <div className=" flex flex-row justify-center py-2 gap-[4rem]  mx-auto sm:place-items-start place-items-center">
            {slice.items.map((item, index) => (
              <div key={index} className="bg-medium-beige py-2 flex flex-col ">
                <div className="justify-center text-center  mx-auto">
                  <div className="flex flex-row justify-center gap-[5rem]"></div>
                  <div className="">
                    <PrismicRichText
                      components={{
                        paragraph: ({ children }) => (
                          <p className="mb-6 font-body text-[1.3rem] font-semibold last:mb-0">
                            {children}
                          </p>
                        ),
                      }}
                      field={item.icon_title}
                    />
                  </div>
                  <PrismicRichText
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mb-6 font-light last:mb-0">{children}</p>
                      ),
                    }}
                    field={item.icon_desc}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
function HouseIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0107 31.4555H10.1797L6.10711 27.3865C4.71066 25.9913 2.44595 25.9913 1.04951 27.3865C-0.349908 28.7876 -0.34895 31.0478 1.04707 32.4426L6.17019 37.5612C6.85534 38.2457 7.7739 38.6119 8.72493 38.605C8.73044 38.6053 16.3253 38.6059 16.3253 38.6059V48.0198C16.3253 48.5611 16.7645 48.9999 17.3063 48.9999C17.8481 48.9999 18.2872 48.5611 18.2872 48.0198V37.6258C18.2872 37.0845 17.8481 36.6457 17.3063 36.6457H8.75319C8.28388 36.6501 7.8684 36.4858 7.55749 36.1751L2.43436 31.0565C1.80363 30.4263 1.80363 29.4053 2.43417 28.7756C3.06974 28.1428 4.09037 28.1437 4.71981 28.7725L9.07972 33.1286C9.17082 33.2196 9.27896 33.2918 9.39798 33.3411C9.517 33.3903 9.64457 33.4157 9.77339 33.4157H18.9675C18.9812 33.4167 19.9088 33.4201 19.9088 33.4201C20.8031 33.4201 21.5283 34.1447 21.5283 35.0382V48.0197C21.5283 48.5611 21.9675 48.9999 22.5093 48.9999C23.0511 48.9999 23.4903 48.5611 23.4903 48.0197V35.0382C23.4903 33.062 21.8867 31.4598 19.9088 31.4598H19.1074C19.0882 31.4585 19.0621 31.4574 19.0107 31.4554V31.4555ZM29.0905 31.4599C27.1126 31.4599 25.509 33.0621 25.509 35.0383V48.0198C25.509 48.5612 25.9482 49 26.49 49C27.0318 49 27.471 48.5612 27.471 48.0198V35.0383C27.471 34.1447 28.1962 33.4202 29.0905 33.4202H29.9464L30.0202 33.4157H39.2259C39.4861 33.4157 39.7356 33.3125 39.9196 33.1287L44.2795 28.7726C44.9089 28.1437 45.9296 28.1429 46.56 28.7701C47.1957 29.4054 47.1957 30.4264 46.565 31.0565L41.4418 36.1752C41.1309 36.4859 40.7154 36.6502 40.2799 36.6448C40.1581 36.6497 40.1581 36.6497 40.1281 36.6545C40.1437 36.6514 40.1437 36.6514 40.257 36.6458H31.6931C31.1513 36.6458 30.7121 37.0845 30.7121 37.6259V48.0199C30.7121 48.5612 31.1513 49 31.6931 49C32.2349 49 32.6741 48.5612 32.6741 48.0199V38.606H40.257C41.218 38.6149 42.1413 38.2486 42.8292 37.5613L47.9523 32.4427C49.3483 31.0479 49.3493 28.7877 47.955 27.3922C46.5534 25.9914 44.2887 25.9914 42.8923 27.3866L38.8196 31.4556H29.9887C29.9309 31.4579 29.905 31.4589 29.885 31.4606L29.0906 31.46L29.0905 31.4599ZM11.5801 14.3939L23.7632 2.38411C24.3375 1.81773 25.2612 1.81921 25.8335 2.38718L37.9299 14.3915C38.3143 14.773 38.9354 14.7709 39.3172 14.3869C39.699 14.0028 39.6969 13.3822 39.3125 13.0008L27.2161 0.996408C25.8804 -0.329179 23.7249 -0.332577 22.3851 0.988894L10.2021 12.9985C9.81645 13.3787 9.81229 13.9992 10.1928 14.3845C10.5733 14.7698 11.1944 14.774 11.58 14.3938L11.5801 14.3939Z"
        fill="#F5EDE5"
      />
      <path
        d="M33.9602 9.96562V25.6203C33.9602 26.4201 33.275 27.0688 32.4303 27.0688H17.5697C16.725 27.0688 16.0398 26.4201 16.0398 25.6203V9.96562C16.0398 9.43231 15.5832 9 15.0199 9C14.4566 9 14 9.43231 14 9.96562V25.6203C14 27.4866 15.5984 29 17.5697 29H32.4303C34.4016 29 36 27.4866 36 25.6203V9.96562C36 9.43231 35.5434 9 34.9801 9C34.4168 9 33.9602 9.43231 33.9602 9.96562Z"
        fill="#F5EDE5"
      />
    </svg>
  );
}
function LightBulbIcon() {
  return (
    <svg
      width="60"
      height="80"
      viewBox="0 0 29 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 14.5001C29 6.50476 22.4953 0 14.4999 0C11.4864 0 8.59675 0.915986 6.14343 2.64883C5.75253 2.925 5.65955 3.46569 5.93561 3.85659C6.21189 4.24749 6.75247 4.34047 7.14337 4.06441C9.30262 2.53927 11.8465 1.73307 14.5001 1.73307C21.5398 1.73307 27.2669 7.46031 27.2669 14.4999C27.2669 19.5354 24.294 24.1147 19.693 26.166C19.3806 26.3053 19.1793 26.6154 19.1793 26.9575V29.5776H18.1463V17.8332H19.6957C20.7812 17.8332 21.734 17.1783 22.1228 16.165C22.5117 15.1516 22.2416 14.0275 21.4347 13.3014L20.7518 12.6868C19.9779 11.9901 18.9062 11.8207 17.9551 12.2442C17.0039 12.6679 16.4131 13.5777 16.4131 14.619V16.1001H12.5868V14.619C12.5868 13.5777 11.9958 12.6679 11.0448 12.2442C10.0937 11.8206 9.02205 11.9901 8.24805 12.6868L7.56527 13.3014C6.75852 14.0276 6.48839 15.1516 6.8772 16.165C7.26613 17.1783 8.21882 17.8332 9.30427 17.8332H10.8537V29.5777H9.82056V26.9576C9.82056 26.6155 9.61934 26.3053 9.3069 26.1661C4.70587 24.1148 1.73296 19.5355 1.73296 14.5001C1.73296 11.5523 2.70862 8.78391 4.55455 6.4941C4.85478 6.12145 4.79621 5.57592 4.42377 5.27568C4.05122 4.97556 3.50569 5.03402 3.20535 5.40646C1.13842 7.97067 0 11.2002 0 14.5001C0 20.0294 3.15578 25.074 8.0876 27.5077V29.5777H6.18123C5.70263 29.5777 5.3147 29.9657 5.3147 30.4443V39.8028C5.3147 43.1475 8.03573 45.8685 11.3804 45.8685H17.6195C20.9642 45.8685 23.6852 43.1475 23.6852 39.8028V37.3765C23.6852 36.8979 23.2973 36.51 22.8187 36.51C22.3401 36.51 21.9521 36.8979 21.9521 37.3765V38.9363H7.04787V35.9323H19.5838C20.0623 35.9323 20.4503 35.5443 20.4503 35.0657C20.4503 34.5871 20.0623 34.1992 19.5838 34.1992H7.04787V31.3108H21.9522V32.7551C21.9522 33.2337 22.3402 33.6216 22.8188 33.6216C23.2974 33.6216 23.6853 33.2337 23.6853 32.7551V30.4443C23.6853 29.9657 23.2974 29.5777 22.8188 29.5777H20.9124V27.5077C25.8442 25.0738 29 20.0292 29 14.5001ZM18.1463 14.6189C18.1463 14.0967 18.5397 13.881 18.6603 13.8273C18.781 13.7736 19.2045 13.6255 19.5924 13.9746L20.2753 14.5893C20.686 14.959 20.5547 15.4133 20.5047 15.5439C20.4547 15.6743 20.2483 16.0999 19.6957 16.0999H18.1463V14.6189ZM10.8538 16.1001H9.30438C8.52301 16.1001 8.14068 15.115 8.72467 14.5895L9.40746 13.9749C9.95947 13.478 10.8538 13.8832 10.8538 14.619V16.1001ZM21.8651 40.6693C21.4624 42.6446 19.7119 44.1355 17.6196 44.1355H11.3805C9.28811 44.1355 7.53768 42.6446 7.13513 40.6693H21.8651ZM16.4132 29.5777H12.5869V17.8332H16.4132V29.5777Z"
        fill="#F5EDE5"
      />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 0C9.85776 0 0 9.85776 0 22C0 34.1422 9.85776 44 22 44C34.1202 44 43.9608 34.1774 43.9965 22.0651C43.9987 22.0435 43.9999 22.0218 44 22C44 21.9805 43.9991 21.9609 43.9974 21.9415C43.9657 9.82608 34.1229 0 22 0ZM22.616 1.3354C23.4062 1.35734 24.1945 1.42418 24.977 1.5356C25.4786 1.73888 25.9406 1.98132 26.2152 2.21628C27.0098 2.85868 30.8308 4.79468 28.9476 2.64924C28.9194 2.59204 28.9036 2.54628 28.8842 2.49656C36.9235 5.3306 42.68 12.9862 42.68 22C42.68 31.8094 35.8626 40.0083 26.7049 42.137C27.251 41.8436 27.8797 41.5378 28.252 41.3257C30.1422 40.4677 31.9035 39.4407 33.477 38.0151C34.5743 36.1592 37.0058 35.6787 37.8418 33.5861C38.3658 31.7051 40.0611 30.2768 40.113 28.2709C39.2124 26.9654 36.4346 28.1191 35.9278 26.2451C35.739 24.2761 33.6376 25.1385 32.714 24.2123C31.3302 24.0522 32.1794 21.765 31.0398 22.8206C29.6366 22.1544 29.9838 23.0362 28.4847 23.0692C28.6708 22.3947 27.4903 21.7624 27.243 22.3797C27.097 22.4378 24.7289 22.348 24.501 23.8383C23.6095 23.8801 22.279 24.0667 21.4078 23.5761C20.6312 22.4814 22.2248 20.5797 19.9778 20.486C18.3806 20.8802 19.1814 19.844 19.4608 18.7233C20.1564 16.9312 17.4148 18.1588 17.0887 19.085C15.3701 20.0486 14.2916 17.3298 15.2429 16.0472C15.4902 13.4152 18.4232 15.0348 19.7622 14.0936C21.1662 14.0699 21.7747 15.748 21.8618 16.6918C24.083 16.331 20.8274 13.3742 23.0498 12.7129C24.8208 12.2606 23.8872 10.6383 25.1398 9.67296C26.7362 9.77328 25.1451 8.42292 26.4748 8.30016C26.994 8.69528 29.4584 8.21436 28.417 7.17156C27.5519 7.96136 27.2853 6.589 26.6165 6.44204C27.4732 6.4548 27.7979 6.84156 28.428 5.96992C28.2176 7.11744 29.6305 7.5856 30.5928 7.304C29.385 5.71736 27.6615 4.75288 25.92 3.674C25.5442 2.0812 24.2524 1.73712 22.616 1.3354ZM22.4184 2.08208C22.7088 2.06756 23.0344 2.1296 23.1955 2.28756C21.8222 2.99156 22.4778 3.06284 22.6745 4.25216C23.2971 3.9468 22.6833 5.0776 22.759 4.63188C23.1796 4.00092 21.7571 4.26316 22.3058 5.269C21.6779 4.51792 20.0517 4.59492 19.287 3.85C19.3151 2.32628 21.7835 3.73296 22.1857 2.71392C21.5499 2.34608 21.9344 2.10672 22.4184 2.08208ZM11.3643 4.26008C10.9859 4.83956 10.1992 5.68216 10.6924 5.5044C10.7373 5.84452 10.028 7.865 9.1542 8.54744C8.37188 9.5238 8.0014 11.8664 8.8 12.4049C8.86336 13.5722 9.01868 14.9406 9.32668 15.9878C10.3981 18.2948 10.4997 15.5276 9.834 14.5006C10.5688 15.4858 11.4787 17.3752 11.5817 18.9046C12.6425 19.7833 13.9704 20.8375 15.4251 20.7702C16.5915 21.3264 18.2644 22.183 19.4709 22.9772C19.8766 24.1696 21.2617 24.9075 22.3978 25.2578C22.953 23.8942 23.9646 25.5372 23.8062 26.565C23.2949 27.5268 21.7008 28.604 22.183 29.7603C21.1631 30.9518 23.001 31.9013 23.4194 33.1641C24.0825 34.1062 24.5027 35.3756 25.8914 35.6193C27.7653 36.9472 25.6335 39.3166 24.9295 40.8478C24.746 41.4128 23.7833 42.0653 23.5787 42.614C23.0569 42.6532 22.5315 42.68 22 42.68C10.571 42.68 1.32 33.429 1.32 22C1.32 14.4619 5.34556 7.8738 11.3643 4.26008ZM23.5118 15.4145C23.349 15.407 23.1823 15.4761 23.0116 15.657C24.1371 15.5888 22.4968 17.156 23.8022 17.123C24.3232 15.5192 24.1358 17.4957 25.1266 17.736C25.758 18.3608 25.2793 16.7913 25.2366 16.9264C24.8244 16.9105 24.2145 15.4466 23.5118 15.4145ZM21.8711 16.9796C21.5258 16.9681 21.1856 17.0642 20.8974 17.2546C19.6768 17.952 20.7742 17.9194 21.2054 18.2591C21.9784 17.6048 22.6063 18.2446 23.5365 18.5755C23.5462 19.8695 25.6269 18.1504 25.623 19.1387C24.4798 19.5747 25.8518 19.9527 26.4431 19.8849C26.6895 20.3139 26.8382 19.7177 27.1132 19.7586C28.0262 19.8616 28.8442 19.2628 27.3513 18.7774C26.1351 18.9605 26.033 18.223 25.6397 17.9238C24.5925 18.6604 23.2654 17.0218 21.8711 16.9796ZM30.2782 19.3015C30.2408 19.316 30.217 19.3794 30.213 19.5206C30.7116 20.2783 31.5656 21.2784 31.0446 22.378C32.0478 22.2675 31.2884 20.2198 31.0046 19.4718C30.8572 20.0886 30.4405 19.2386 30.2782 19.3015Z"
        fill="#F5EDE5"
      />
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.4973 27.7607C34.6286 27.8482 34.7762 27.8898 34.9228 27.8898C35.17 27.8898 35.4117 27.7706 35.5594 27.5496C36.0789 26.7731 36.6575 26.165 37.2809 25.7406C38.6306 24.8207 40.4189 24.5878 41.6822 24.5539C42.1044 24.5429 42.438 24.1907 42.427 23.7675C42.4161 23.3453 42.0661 23.0139 41.6406 23.0226C40.1728 23.062 38.075 23.3464 36.418 24.4751C35.6327 25.01 34.9152 25.7581 34.2862 26.6987C34.0522 27.0498 34.1462 27.5256 34.4973 27.7607Z"
        fill="#F5EDE5"
      />
      <path
        d="M33.864 29.8717C34.1615 29.8717 34.4448 29.6967 34.5684 29.4068L34.5979 29.3368C34.7631 28.9475 34.5826 28.4979 34.1932 28.3328C33.8039 28.1665 33.3543 28.3481 33.1892 28.7375L33.1596 28.8053C32.9934 29.1946 33.175 29.6442 33.5632 29.8104C33.6617 29.852 33.7634 29.8717 33.864 29.8717Z"
        fill="#F5EDE5"
      />
      <path
        d="M19.9264 33.0381C19.21 31.8065 16.2448 27.18 11.4608 25.9539C6.0456 24.5659 0.574666 28.1195 0.343885 28.2715C0.0157598 28.4881 -0.0958029 28.919 0.0890408 29.2679C0.218103 29.5118 3.30357 35.2595 8.71982 36.6475C9.59482 36.8717 10.472 36.9657 11.3284 36.9657C13.5148 36.9657 15.5612 36.3543 17.0629 35.7407C17.4545 35.5811 17.6415 35.1337 17.4819 34.7421C17.3222 34.3506 16.8748 34.1636 16.4833 34.3232C14.6075 35.09 11.8031 35.8578 9.09935 35.1643C5.33029 34.1986 2.7392 30.6362 1.81607 29.1804C3.32654 28.347 7.31107 26.4723 11.0801 27.4381C15.8314 28.6565 18.709 33.9962 18.7375 34.0498C18.7386 34.0531 18.7408 34.0553 18.7429 34.0586C18.7495 34.0717 18.7572 34.0837 18.7648 34.0957C18.7703 34.1056 18.7769 34.1143 18.7823 34.1242C18.79 34.1351 18.7976 34.145 18.8053 34.1559C18.8129 34.1657 18.8195 34.1756 18.8283 34.1854C18.8359 34.1942 18.8447 34.2029 18.8523 34.2117C18.8611 34.2215 18.8698 34.2314 18.8786 34.2401C18.8873 34.2489 18.8961 34.2565 18.9059 34.2642C18.9158 34.2729 18.9245 34.2817 18.9344 34.2893C18.9442 34.297 18.9551 34.3046 18.965 34.3123C18.9748 34.3189 18.9836 34.3265 18.9934 34.3331C19.0044 34.3407 19.0164 34.3462 19.0273 34.3539C19.0372 34.3593 19.047 34.3659 19.0579 34.3714C19.0689 34.3768 19.0798 34.3823 19.0919 34.3878C19.1039 34.3932 19.1148 34.3987 19.1269 34.4031C19.1367 34.4075 19.1476 34.4107 19.1586 34.414C19.1717 34.4184 19.1859 34.4239 19.2001 34.4271C19.2034 34.4282 19.2067 34.4293 19.21 34.4304L24.5125 35.8961C25.289 39.2287 25.6817 42.51 25.6817 45.7201C25.6817 46.1434 26.024 46.4857 26.4473 46.4857C26.8706 46.4857 27.2129 46.1434 27.2129 45.7201C27.2129 42.3798 26.805 38.9706 25.9956 35.5121L29.9768 32.6881C30.5762 32.8051 31.8778 33.0173 33.4878 33.0173C35.7081 33.0173 38.5147 32.6148 40.8706 31.0092C45.4906 27.8603 46.4367 21.4061 46.4739 21.1326C46.5286 20.7421 46.2781 20.3746 45.8942 20.2828C45.6262 20.2182 39.2726 18.7384 34.6526 21.8873C30.5718 24.6687 29.3578 30.027 29.104 31.4292L25.5942 33.9175C24.5004 29.8378 22.8522 25.6925 20.6592 21.5089L21.8875 20.1778C22.174 19.8671 22.1554 19.3826 21.8448 19.0961C21.5342 18.8095 21.0497 18.8281 20.7631 19.1387L19.8914 20.0837C17.064 14.9759 14.3286 11.5054 13.4426 10.4303C13.6931 9.25121 14.1175 6.24121 12.6354 3.83058C10.7881 0.827145 6.77513 0.0451134 6.6056 0.0133947C6.21842 -0.0598866 5.83998 0.174176 5.72951 0.552613C5.68138 0.718863 4.56795 4.65308 6.41529 7.65652C8.08107 10.3657 11.5089 11.267 12.2887 11.4409C13.1342 12.4745 15.6728 15.7142 18.3054 20.3845L15.6717 19.7107C15.0395 18.6553 12.7197 15.1936 9.04904 14.2737C8.77998 14.2059 8.50107 14.1523 8.21998 14.1129C7.80107 14.0539 7.41498 14.347 7.35592 14.7659C7.29795 15.1848 7.58998 15.5709 8.00888 15.63C8.23638 15.6617 8.4606 15.7054 8.67717 15.759C11.4006 16.4415 13.3289 18.9298 14.1098 20.1078C12.8684 20.7804 10.0028 22.0667 7.26951 21.382C4.54607 20.7006 2.61779 18.2112 1.83795 17.0332C2.37826 16.7412 3.22482 16.3321 4.23107 16.0215C4.63467 15.8968 4.86107 15.4681 4.73638 15.0645C4.6117 14.6609 4.18295 14.4345 3.77935 14.5592C1.80623 15.1684 0.410603 16.0937 0.351541 16.132C0.0245097 16.3507 -0.0837718 16.7828 0.102166 17.1295C0.203884 17.3198 2.64295 21.802 6.89763 22.8673C7.57467 23.0368 8.2517 23.1079 8.91232 23.1079C11.8326 23.1079 14.4347 21.7112 15.2976 21.1939L19.3051 22.2176C21.4226 26.2579 23.0184 30.2556 24.0826 34.1854L19.9264 33.0381ZM35.5167 23.1517C38.7334 20.9598 43.1193 21.3678 44.8212 21.6379C44.4515 23.3201 43.2342 27.5453 40.0087 29.7437C36.792 31.9356 32.4061 31.5265 30.7042 31.2575C31.0739 29.5742 32.2912 25.3501 35.5167 23.1517ZM7.72123 6.85371C6.64935 5.11027 6.84732 2.8473 7.04529 1.70543C8.15217 2.04121 10.2565 2.8823 11.3328 4.6323C12.4047 6.37574 12.2067 8.63871 12.0087 9.78058C10.9019 9.4448 8.79748 8.60371 7.72123 6.85371Z"
        fill="#F5EDE5"
      />
      <path
        d="M22.921 18.6957C22.9232 18.6957 22.9276 18.6957 22.9309 18.6957C23.2623 18.6957 28.276 18.641 31.1985 15.4429C34.1582 12.2054 33.7175 7.12167 33.6967 6.90621C33.6595 6.51464 33.3314 6.21386 32.9376 6.21277C32.721 6.21386 27.6187 6.22808 24.659 9.46558C21.6993 12.7031 22.1401 17.7868 22.1609 18.0023C22.1992 18.3939 22.5273 18.6935 22.921 18.6957ZM25.791 10.4992C27.6843 8.42761 30.7895 7.91355 32.1982 7.78667C32.1971 9.20089 31.9642 12.3389 30.0698 14.4104C28.1765 16.482 25.0714 16.996 23.6626 17.1229C23.6626 15.7087 23.8967 12.5696 25.791 10.4992Z"
        fill="#F5EDE5"
      />
      <path
        d="M5.93404 15.63C5.95045 15.6311 5.96576 15.6311 5.98107 15.6311C6.38248 15.6311 6.71935 15.3182 6.74451 14.9125C6.77076 14.4903 6.4492 14.1271 6.02701 14.102L5.99857 14.1009C5.57529 14.0823 5.22092 14.4093 5.20123 14.8304C5.18154 15.2515 5.50638 15.6092 5.92748 15.6311L5.93404 15.63Z"
        fill="#F5EDE5"
      />
    </svg>
  );
}
