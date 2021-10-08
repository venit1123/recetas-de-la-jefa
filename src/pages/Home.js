import { Component } from 'react';
import MotherAndDaughter from "../Images/mother_and_daughter.jpg";
import "../App.css"

class Home extends Component {

    render(){
            return (
                <div className="text-center mobile-card">
                    <img src={MotherAndDaughter} className="img-fluid lg-image" alt="mother and daughter, looking at each other from the back"  />
                    <div className="card-paragraph">
                        <p className="lg-paragraph">
                            Consejos de la Jefa is a space created to share mom's advice to the world.
                        </p>
                        <p className="lg-paragraph">
                            You can find all kind of consejos, from her traditional Mexican dishes, natural remedies, to personal advice.
                        </p>
                    </div>
                </div>
            )
        }
}

export default Home