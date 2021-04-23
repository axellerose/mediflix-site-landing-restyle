import { FixedObject, FluidObject } from "gatsby-image";

export interface GatsbySharpImage {
  childImageSharp: {
    fixed: FixedObject
    fluid: FluidObject
  }
}
