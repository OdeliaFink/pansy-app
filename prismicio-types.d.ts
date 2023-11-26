// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.TitleField;

  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | PhotoGallerySlice
  | StepsSlice
  | TextImageSlice
  | FeaturesSlice
  | MainSlice
  | HeroSlice
  | ImageSlice
  | TextWithFeaturesSlice
  | TextWithImageSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title for the page
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  siteTitle: prismic.TitleField;

  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Newsletter Description field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text above the sign up form
   * - **API ID Path**: settings.newsletterDescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  newsletterDescription: prismic.RichTextField;

  /**
   * Newsletter Disclaimer field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Small text below sign up form
   * - **API ID Path**: settings.newsletterDisclaimer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  newsletterDisclaimer: prismic.RichTextField;

  /**
   * City field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.city
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  city: prismic.KeyTextField;

  /**
   * Phone number field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.phone_number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_number: prismic.KeyTextField;

  /**
   * Email field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Serving City field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.serving_city
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  serving_city: prismic.KeyTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | NavigationDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *Features → Items*
 */
export interface FeaturesSliceDefaultItem {
  /**
   * Icon Selection field in *Features → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].icon_selection
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon_selection: prismic.SelectField<"house" | "lightbulb" | "globe" | "leaf">;

  /**
   * Icon Title field in *Features → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].icon_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  icon_title: prismic.RichTextField;

  /**
   * Icon  Desc field in *Features → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].icon_desc
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  icon_desc: prismic.RichTextField;
}

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<FeaturesSliceDefaultItem>
>;

/**
 * Slice variation for *Features*
 */
type FeaturesSliceVariation = FeaturesSliceDefault;

/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSlice = prismic.SharedSlice<
  "features",
  FeaturesSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Introductory text for the page
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceWithButtonPrimary {
  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Introductory text for the page
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * With Button variation for Hero Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceWithButton = prismic.SharedSliceVariation<
  "withButton",
  Simplify<HeroSliceWithButtonPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceWithButton;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceWhitePrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * With Accent field in *Image → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: image.primary.withAccent
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  withAccent: prismic.BooleanField;
}

/**
 * White variation for Image Slice
 *
 * - **API ID**: `white`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceWhite = prismic.SharedSliceVariation<
  "white",
  Simplify<ImageSliceWhitePrimary>,
  never
>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceLightSlatePrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * With Accent field in *Image → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: image.primary.withAccent
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  withAccent: prismic.BooleanField;
}

/**
 * Light Slate variation for Image Slice
 *
 * - **API ID**: `lightSlate`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceLightSlate = prismic.SharedSliceVariation<
  "lightSlate",
  Simplify<ImageSliceLightSlatePrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceWhite | ImageSliceLightSlate;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Primary content in *Main → Primary*
 */
export interface MainSliceDefaultPrimary {
  /**
   * Title field in *Main → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Button Text field in *Main → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Image field in *Main → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: main.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Button Link field in *Main → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: main.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for Main Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MainSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Main*
 */
type MainSliceVariation = MainSliceDefault;

/**
 * Main Shared Slice
 *
 * - **API ID**: `main`
 * - **Description**: Main
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainSlice = prismic.SharedSlice<"main", MainSliceVariation>;

/**
 * Primary content in *PhotoGallery → Primary*
 */
export interface PhotoGallerySliceDefaultPrimary {
  /**
   * Header field in *PhotoGallery → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: photo_gallery.primary.header
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  header: prismic.KeyTextField;
}

/**
 * Primary content in *PhotoGallery → Items*
 */
export interface PhotoGallerySliceDefaultItem {
  /**
   * Image field in *PhotoGallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: photo_gallery.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Desc field in *PhotoGallery → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: photo_gallery.items[].desc
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  desc: prismic.KeyTextField;
}

/**
 * Default variation for PhotoGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PhotoGallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PhotoGallerySliceDefaultPrimary>,
  Simplify<PhotoGallerySliceDefaultItem>
>;

/**
 * Slice variation for *PhotoGallery*
 */
type PhotoGallerySliceVariation = PhotoGallerySliceDefault;

/**
 * PhotoGallery Shared Slice
 *
 * - **API ID**: `photo_gallery`
 * - **Description**: PhotoGallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PhotoGallerySlice = prismic.SharedSlice<
  "photo_gallery",
  PhotoGallerySliceVariation
>;

/**
 * Primary content in *Steps → Primary*
 */
export interface StepsSliceDefaultPrimary {
  /**
   * Button Text field in *Steps → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Steps → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Primary content in *Steps → Items*
 */
export interface StepsSliceDefaultItem {
  /**
   * Step desc field in *Steps → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.items[].step_desc
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  step_desc: prismic.KeyTextField;

  /**
   * Steps field in *Steps → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.items[].steps
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  steps: prismic.SelectField<"01 Consult" | "02 Design" | "03 Maintain">;
}

/**
 * Default variation for Steps Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StepsSliceDefaultPrimary>,
  Simplify<StepsSliceDefaultItem>
>;

/**
 * Slice variation for *Steps*
 */
type StepsSliceVariation = StepsSliceDefault;

/**
 * Steps Shared Slice
 *
 * - **API ID**: `steps`
 * - **Description**: Steps
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepsSlice = prismic.SharedSlice<"steps", StepsSliceVariation>;

/**
 * Primary content in *TextImage → Primary*
 */
export interface TextImageSliceDefaultPrimary {
  /**
   * Image field in *TextImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *TextImage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *TextImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Heading field in *TextImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *TextImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.body
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body: prismic.KeyTextField;
}

/**
 * Default variation for TextImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *TextImage → Primary*
 */
export interface TextImageSliceImageRightPrimary {
  /**
   * Image field in *TextImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *TextImage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *TextImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Heading field in *TextImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *TextImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.body
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body: prismic.KeyTextField;

  /**
   * Body_2 field in *TextImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.body_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body_2: prismic.KeyTextField;
}

/**
 * ImageRight variation for TextImage Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<TextImageSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *TextImage*
 */
type TextImageSliceVariation = TextImageSliceDefault | TextImageSliceImageRight;

/**
 * TextImage Shared Slice
 *
 * - **API ID**: `text_image`
 * - **Description**: TextImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageSlice = prismic.SharedSlice<
  "text_image",
  TextImageSliceVariation
>;

/**
 * Primary content in *TextWithFeatures → Primary*
 */
export interface TextWithFeaturesSliceDefaultPrimary {
  /**
   * Icon field in *TextWithFeatures → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_features.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Text field in *TextWithFeatures → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Primary text with rich formatting
   * - **API ID Path**: text_with_features.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Primary content in *TextWithFeatures → Items*
 */
export interface TextWithFeaturesSliceDefaultItem {
  /**
   * Feature Description field in *TextWithFeatures → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Description of a feature
   * - **API ID Path**: text_with_features.items[].featureDescription
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  featureDescription: prismic.RichTextField;
}

/**
 * Default variation for TextWithFeatures Slice
 *
 * - **API ID**: `default`
 * - **Description**: TextWithFeatures
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithFeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithFeaturesSliceDefaultPrimary>,
  Simplify<TextWithFeaturesSliceDefaultItem>
>;

/**
 * Slice variation for *TextWithFeatures*
 */
type TextWithFeaturesSliceVariation = TextWithFeaturesSliceDefault;

/**
 * TextWithFeatures Shared Slice
 *
 * - **API ID**: `text_with_features`
 * - **Description**: TextWithFeatures
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithFeaturesSlice = prismic.SharedSlice<
  "text_with_features",
  TextWithFeaturesSliceVariation
>;

/**
 * Primary content in *TextWithImage → Primary*
 */
export interface TextWithImageSliceDefaultPrimary {
  /**
   * Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text displayed next to image
   * - **API ID Path**: text_with_image.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextWithImage*
 */
type TextWithImageSliceVariation = TextWithImageSliceDefault;

/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSlice = prismic.SharedSlice<
  "text_with_image",
  TextWithImageSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      FeaturesSlice,
      FeaturesSliceDefaultItem,
      FeaturesSliceVariation,
      FeaturesSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceWithButtonPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceWithButton,
      ImageSlice,
      ImageSliceWhitePrimary,
      ImageSliceLightSlatePrimary,
      ImageSliceVariation,
      ImageSliceWhite,
      ImageSliceLightSlate,
      MainSlice,
      MainSliceDefaultPrimary,
      MainSliceVariation,
      MainSliceDefault,
      PhotoGallerySlice,
      PhotoGallerySliceDefaultPrimary,
      PhotoGallerySliceDefaultItem,
      PhotoGallerySliceVariation,
      PhotoGallerySliceDefault,
      StepsSlice,
      StepsSliceDefaultPrimary,
      StepsSliceDefaultItem,
      StepsSliceVariation,
      StepsSliceDefault,
      TextImageSlice,
      TextImageSliceDefaultPrimary,
      TextImageSliceImageRightPrimary,
      TextImageSliceVariation,
      TextImageSliceDefault,
      TextImageSliceImageRight,
      TextWithFeaturesSlice,
      TextWithFeaturesSliceDefaultPrimary,
      TextWithFeaturesSliceDefaultItem,
      TextWithFeaturesSliceVariation,
      TextWithFeaturesSliceDefault,
      TextWithImageSlice,
      TextWithImageSliceDefaultPrimary,
      TextWithImageSliceVariation,
      TextWithImageSliceDefault,
    };
  }
}
