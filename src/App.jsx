/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const currentDate = new Date().toLocaleString();
const initialTravellers = [
  {
    id: 1, name: 'Jack', phone: 88885555,
    bookingTime: new Date().toLocaleString(), seatNo: "Driver", bookingID: String.fromCharCode( Math.floor(Math.random()*26) + 65) + Math.floor(Math.random()*100000000).toString()
  },
  {
    id: 2, name: 'Rose', phone: 88884444,
    bookingTime: new Date().toLocaleString(), seatNo: "Co-Driver", bookingID: String.fromCharCode( Math.floor(Math.random()*26) + 65) + Math.floor(Math.random()*100000000).toString()
  },
];
var count = 2;






class Display2 extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <table className="bordered-table">
        <thead>
          <tr>
      {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Booking Time</th>
            <th>Seat Number</th>
            <th>Booking ID</th>
          </tr>
        </thead>
        <tbody>
      {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
          {this.props.traveller2.map(t=>(
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.name}</td>
            <td>{t.phone}</td>
            <td>{t.bookingTime}</td>
            <td>{t.seatNo}</td>
            <td>{t.bookingID}</td>
          </tr>))}
        </tbody>
      </table>
    );
  }
}


class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
    const formAdd = document.forms.addTraveller;
    console.log(formAdd.travellername.value);
    //code to delete the traveller
    this.props.addfunction(formAdd.travellername.value , formAdd.travelerphone.value);
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
	    {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <label htmlFor="travellername">Name:</label>
        <input id="travellername" type="text" name="travellername" placeholder="Name" />
        <label htmlFor="travelerphone">Phone: </label>
        <input id="travelerphone" type="text" name="travelerphone" placeholder="Phone" />
        <button>Add</button>
      </form>
    );
  }
}


class Delete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    const form = document.forms.deleteTraveller;
    console.log(form.bookingID.value);
    //code to delete the traveller
    this.props.delfunction(form.bookingID.value);
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
	    {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
        <label htmlFor="Booking ID">Booking ID:</label>
	      <input id="bookingID" type="text" name="bookingID" placeholder="Booking ID" />
        <button>Delete</button>
      </form>
    );
  }
}

class Homepage extends React.Component {
	constructor(props) {
	super(props);
  this.seatNumber = [1,2,3,4,5,6,7,8,9,10];
  this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
  this.handleSubmitDel = this.handleSubmitDel.bind(this);
	}


  handleSubmitAdd(e) {
    e.preventDefault();
    console.log("A")
    this.props.showAdd();
  }

  handleSubmitDel(e) {
    e.preventDefault();
    this.props.showDelete();
  }
  
	render(){
	return (
	<div>
		{/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
    <nav>
      <button onClick={this.handleSubmitAdd}>Reserve seat</button>
      <button onClick={this.handleSubmitDel}>Cancel booking</button>
    </nav>

    <p style={{margin:0, color:'red', marginTop: 10, padding:0}}>Seat Occupancy [Green:Available Grey:Occupied]</p>
    <p style={{margin:0, color:'red', padding:0}}>Total available seat: {10-this.props.selector}</p>
    {this.seatNumber.map(element => (
      this.props.availableSeatNumber.includes(element)? 
      <h1 style={{marginTop:0, marginLeft:7 ,backgroundColor: 'green',display: 'inline-block'}}>{element}  </h1> : 
      <h1 style={{marginTop:0, marginLeft:7 , backgroundColor: 'grey',display: 'inline-block'}}>{element}  </h1>))}
	</div>);
	}
}
class TicketToRide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { travellers: initialTravellers, selector: 0,availableSeatNumber : [1,2,3,4,5,6,7,8,9,10],addFlag : 0, deleteFlag : 0};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
    this.showAddComponent = this.showAddComponent.bind(this);
    this.showDeleteComponent = this.showDeleteComponent.bind(this);
  }

  showAddComponent() {
    
    this.setState(state=>({addFlag:1 , deleteFlag:0}));
    console.log("1",this.state.addFlag,this.state.deleteFlag);

  }

  showDeleteComponent() {
    this.setState(state=>({addFlag:0 , deleteFlag:1}));
    console.log("2",this.state.addFlag,this.state.deleteFlag);
  }

  setSelector(value)
  {
  	/*Q2. Function to set the value of component selector variable based on user's button click.*/
  }
  componentDidMount() {
    this.loadData();

  }

  componentDidUpdate() {
    //console.log("BBBB",this.state.travellers);

    
  }

  loadData() {
    setTimeout(() => {
      this.setState({ travellers: initialTravellers });
    }, 500);
  }

/*
  loadData() {
    this.setState({ travellers: initialTravellers },()=>{console.log(this.state.travellers);});
    }
 */ 

  bookTraveller(passenger,phoneNumber) {
	    /*Q4. Write code to add a passenger to the traveller state variable.*/
      var assignedSeatNo = this.state.availableSeatNumber.pop();
      if (assignedSeatNo==undefined){return alert("Sorry, no more seat available");}
      this.state.travellers.push({id:count+1,name:passenger,phone:phoneNumber,bookingTime: new Date().toLocaleString() ,seatNo:assignedSeatNo, 
        bookingID: String.fromCharCode( Math.floor(Math.random()*26) + 65) + Math.floor(Math.random()*100000000).toString()});
      this.state.selector+=1;
      count+=1;
      this.setState((state)=>({travellers:state.travellers,selector:state.selector}));  
  }

  deleteTraveller(passengerBookingID) {
	  /*Q5. Write code to delete a passenger from the traveller state variable.*/
    console.log("deleteTraveller:",passengerBookingID);
    //actual deletion
    var newlist = [];
    
    this.state.travellers.forEach(element => {
      if (element.bookingID!=passengerBookingID){newlist.push(element); }
      else {this.state.availableSeatNumber.push(element.seatNo);}
    });
    if (newlist.length == this.state.travellers.length){return alert("No such booking ID found");} 
    else {this.state.selector-=1;}
    this.setState((state)=>({travellers:newlist,selector:state.selector}));  

  }
  



  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
        <div>
            {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
        </div>
        <div>
          {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
          {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
          <Homepage availableSeatNumber={this.state.availableSeatNumber} showAdd={this.showAddComponent} showDelete={this.showDeleteComponent} selector={this.state.selector}/>
          {/*Q3. Code to call component that Displays Travellers.*/}
          {console.log(currentDate)}
          <Display2 traveller2={this.state.travellers}/>
          {/*Q4. Code to call the component that adds a traveller.*/}
          {this.state.addFlag == 1? <Add addfunction={this.bookTraveller} /> : ""}
          {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
          {this.state.deleteFlag == 1? <Delete delfunction={this.deleteTraveller}  /> : ""}
          
        </div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
