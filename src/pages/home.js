import '../App.css';
import Nav from '../components/nav';
import MainCarousel from '../components/mainCarousel';
import Carousel from '../components/carousel';

export default function Home(){
    return(
        <div>
            <Nav />
            <MainCarousel />
            <h3>What's Hot</h3>
            <Carousel />
        </div>        
    );
}