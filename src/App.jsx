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


function TravellerRow(props) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
  return (
    <tr>
	  {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}

    </tr>
  );
}

function Display(traveller1) {
  
	/*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
  console.log("Aek",typeof(traveller1.traveller1.phone),traveller1.traveller1.phone,traveller1);
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
        </tr>
      </thead>
      <tbody>
    {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
        <tr>
      
          <td>{traveller1.traveller1.id}</td>
          <td>{traveller1.traveller1.name}</td>
          <td>{traveller1.traveller1.phone}</td>
          <td>"111111"</td>
          <td>{traveller1.traveller1.id}</td>
          
        </tr>
      </tbody>
    </table>
  );
}

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

          </tr>
        </thead>
        <tbody>
      {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}

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

  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
	    {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}

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

  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
	    {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}

      </form>
    );
  }
}

class Homepage extends React.Component {
	constructor(props) {
	super(props);
  this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
  this.handleSubmitDel = this.handleSubmitDel.bind(this);
	}


 

 
  
	render(){
	return (
	<div>
		{/*Q2. Placeholder for Homepage code that shows free seats visually.*/}

	</div>);
	}
}
class TicketToRide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { travellers: initialTravellers, selector: 0,availableSeatNumber : [1,2,3,4,5,6,7,8,9,10],addFlag : 0, deleteFlag : 0};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);

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

  }

  deleteTraveller(passengerBookingID) {
	  /*Q5. Write code to delete a passenger from the traveller state variable.*/
 

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
          
          {/*Q3. Code to call component that Displays Travellers.*/}
          
          {/*Q4. Code to call the component that adds a traveller.*/}
          
          {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
          
          
        </div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));

//test
