import { Component } from 'react';
import MotherAndDaughter from "../Images/mother_and_daughter.jpg";
import "../App.css"

class Home extends Component {
    render(){
            return (
                <div className="text-center">
                    <img src={MotherAndDaughter} className="img-fluid" alt="mother and daughter, looking at each other from the back"  />
                </div>
            )
        }
}

export default Home