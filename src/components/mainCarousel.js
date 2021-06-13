import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBMask,MDBView } from "mdbreact";
import '../App.css';
export default function MainCarousel(){
    return(
        <MDBContainer>
            <MDBCarousel activeItem={1} length={2} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src="images\Now-You-See-Me-2.jpg"
                            alt="First slide"
                        />
                        <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">1 Light mask</h3>
                        <p>First text</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src="images\Now-You-See-Me-2.jpg"
                            alt="Second slide"
                        />
                        <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">2 Light mask</h3>
                        <p>First text</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}
