import { render } from "@testing-library/react";
import Glimps from "./Glimps";


describe("images", () => {

    test("renders image with correct alt & title", () => {
      const alt = "title";
      const title = "fetched image";
      const { getByAltText } = render(<Glimps title={title} alt={alt} />);
      const imageElement = getByAltText(alt);

      expect(imageElement).toBeInTheDocument();
      expect(imageElement.title).toBe(title);
    });
    test("variable is not an empty value", () => {
      render(<Glimps />);
      const productVal = screen.queryByDisplayValue([]);
      expect(productVal).toBeInTheDocument();
    });
    test("Text is Getting Showed on Glips",()=>{
        render(<Glimps/>);
        const productHeading = screen.getByText("Image Slider");
        expect(productHeading).toBeInTheDocument()
    })
    // test("Value is getting stored", ()=>{
    //     render(<Glimps/>);
    //     const valueLength = screen.getByText();
    //})
});
