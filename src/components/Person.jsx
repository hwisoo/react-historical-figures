import React from "react";
import PropTypes from "prop-types";


class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullBioShown: false
        }
        this.handleClick = this.handleClick.bind(this);
    }




    handleClick() {
        if (this.state.fullBioShown) {
            this.setState({ fullBioShown: false });
        }
        else {
            this.setState({ fullBioShown: true });
        }

        console.log(this.state);
    }






    render() {



        let currentlyVisibleContent = null;
        if (this.state.fullBioShown == false) {
            currentlyVisibleContent =
                <div className="personDiv">
                    <h2>{this.props.name}</h2>
                    <img src={this.props.img} />
                    <p>Years alive: {this.props.years[0]}-{this.props.years[1]}</p>
                    <p>Die at age: {this.props.years[1] - this.props.years[0]}</p>
                    <p onClick={this.handleClick}>Bio: {this.props.bio}</p>
                </div>
        } else {
            currentlyVisibleContent =
                <div className="personDiv">
                    <h2>{this.props.name}</h2>
                    <img src={this.props.img} />
                    <p>Years alive: {this.props.years[0]}-{this.props.years[1]}</p>
                    <p>Die at age: {this.props.years[1] - this.props.years[0]}</p>
                    <p onClick={this.handleClick}>Bio: {this.props.bio}</p>
                    <p>Full Bio:</p>
                    <p>{this.props.fullbio}</p>
                </div>
        }

        return (
            <div>
                <style global jsx>
                    {`
        
                  .personDiv{
                      margin-left: 30px;
                  }      
                 
                  img {
                      max-width: 10vw; 
                      max-height: 15vh; 
                  }
                `}
                </style>
                {currentlyVisibleContent}
            </div>
        );










    }
}



Person.propTypes = {
    name: PropTypes.string.isRequired,
    years: PropTypes.arrayOf(Number).isRequired,
    bio: PropTypes.string.isRequired,
    fullbio: PropTypes.string.isRequired,
    img: PropTypes.string
};

export default Person;
