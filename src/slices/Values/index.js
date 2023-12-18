/**
 * @typedef {import("@prismicio/client").Content.ValuesSlice} ValuesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ValuesSlice>} ValuesProps
 * @param {ValuesProps}
 */
const Values = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for values (variation: {slice.variation}) Slices
    </section>
  );
};

export default Values;
