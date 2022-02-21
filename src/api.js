import React, { Component } from "react";
import axios from 'axios'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: '',
    };
  }

  getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    this.setState({ip: res.data.IPv4})
  }
  
  componentDidMount() {
      this.getData();
  }


  render() {
    return (
      <div>
        Hello your public ip is: {this.state.ip}
      </div>
    );
  }
}
