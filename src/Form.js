import React, {Component} from "react"
import axios from "axios"

class FormPage extends Component {
  state= {movieName: ""};

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://www.omdbapi.com/?t=${this.state.movieName}&apikey=1691e553`)
    if(resp.data.Response === "True"){
      this.props.submit(resp.data);
      this.setState({movieName: ""})
    }else{
      alert(resp.data.Error);
      this.setState({movieName: ""})
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input 
            required 
            type="text" 
            onChange={event => this.setState({movieName: event.target.value})} 
            value={this.state.movieName} 
            className="form-control" 
            placeholder="Movie Name..." 
            aria-label="Recipient's username" 
            aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-dark" id="button-addon2">Button</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FormPage