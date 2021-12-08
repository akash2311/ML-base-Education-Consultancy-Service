import React, { Component } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export class Forms extends Component {
    state = {
        startDate: new Date()
    };
     
    handleChange = date => {
        this.setState({
          startDate: date
        });
    };
    
    componentDidMount() {
        bsCustomFileInput.init()
    };

    render(){
      return(
        <>

        {/* <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Horizontal Form</h4>
                <p className="card-description"> Horizontal form layout </p>
                <form className="forms-sample">
                  <Form.Group className="row">
                    <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                    <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="Username" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                    <Form.Control type="email" className="form-control" id="exampleInputEmail2" placeholder="Email" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
                    <div className="col-sm-9">
                    <Form.Control type="text" className="form-control" id="exampleInputMobile" placeholder="Mobile number" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="exampleInputPassword2" className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                    <Form.Control type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Re Password</label>
                    <div className="col-sm-9">
                    <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword2" placeholder="Password" />
                    </div>
                  </Form.Group>
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
              </div>
            </div>
          </div>
           */}

        {/* // This is personal details section. */}

        <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Personal details</h4>
                <form className="form-sample">
                  <p className="card-description"> All fields are required. </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">First Name</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Last Name</label>
                        <div className="col-sm-9">
                        <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Gender</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Date of Birth</label>
                        <div className="col-sm-9">
                        <DatePicker className="form-control w-100"
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Category</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>General</option>
                            <option>OBC</option>
                            <option>ST</option>
                            <option>SC</option>
                          </select>
                        </div>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Father's Name</label>
                        <div className="col-sm-9">
                        <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                          <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
                          <div className="col-sm-9">
                          <Form.Control type="text" className="form-control" id="exampleInputMobile" placeholder="Mobile number" />
                          </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                          <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Parent's Mobile</label>
                          <div className="col-sm-9">
                          <Form.Control type="text" className="form-control" id="exampleInputMobile" placeholder="Mobile number" />
                          </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Current Class</label>
                        <div className="col-sm-4">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" defaultChecked /> 10th 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-5">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios2" /> 12th 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Stream(if required)</label>
                        <div className="col-sm-9">
                        <Form.Control type="text" placeholder="Arts / Science / Commerce" />
                        </div>
                      </Form.Group>
                    </div>

                    
                    {/* <div className="col-md-6"> 
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-outline-primary" id="dropdownMenuOutlineButton1">
                          Stream iin 12th (if required) 
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Arts</Dropdown.Header>
                          <Dropdown.Item>Science</Dropdown.Item>
                          <Dropdown.Item>Commerce</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div> */}
                  </div>
                  <p className="card-description"> Address </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Address 1</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">State</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Address 2</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Postcode</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">City</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">  
                        <label className="col-sm-3 col-form-label">Country</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>America</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>


                  <div className="row">  
                  <div className="col-md-6 ">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Interest 1</label>
                        <div className="col-sm-9">
                          <select className="form-control" id="exampleFormControlSelect1">
                            <option value="" disabled selected hidden>Select Your Interest 1</option>
                            <option value="2">Acroyoga</option>
                            <option value="3">Acting</option>
                            <option value="4">Aerial silk</option>
                            <option value="5">Airbrushing</option>
                            <option value="5">mateur radio</option>
                            <option value="5">Animation</option>
                            <option value="5">Anime</option>
                            <option value="5">Aquascaping</option>
                            <option value="5">Art</option>
                            <option value="5">Astrology</option>
                            <option value="5">Baking</option>
                            <option value="5">Barbershop Music</option>
                            <option value="5">Baton twirling</option>
                            <option value="5">Beatboxing</option>
                            <option value="5">Beer tasting</option>
                            <option value="5">Bell ringing</option>
                            <option value="5">Blogging</option>
                            <option value="5">Board/tabletop games</option>
                            <option value="5">Book discussion clubs</option>
                            <option value="5">Book restoration</option>
                            <option value="5">Bowling</option>
                            <option value="5">Brazilian jiu-jitsu</option>
                            <option value="5">Breadmaking</option>
                            <option value="5">Bullet journaling</option>
                            <option value="5">Calligraphy</option>
                            <option value="5">Candle making</option>
                            <option value="5">Candy making</option>
                            <option value="5">Car fixing and building</option>
                            <option value="5">Card games</option>
                            <option value="5">Cardistry</option>
                            <option value="5">Ceramics</option>
                            <option value="5">Chatting</option>
                            <option value="5">Cheesemaking</option>
                            <option value="5">Chess</option>
                            <option value="5">Cleaning</option>
                            <option value="5">Clothe smaking</option>
                            <option value="5">Coffee roasting</option>
                            <option value="5">Collecting</option>
                            <option value="5">Coloring</option>
                            <option value="5">Communication</option>
                            <option value="5">Community activism</option>
                            <option value="5">Computer programming</option>
                            <option value="5">Confectionery</option>
                            <option value="5">Conlanging</option>
                            <option value="5">Construction</option>
                            <option value="5">Cooking</option>
                            <option value="5">Cosplaying</option>)
                            <option value="5">Couch surfing</option>
                            <option value="5">Couponing</option>
                            <option value="5">Craft</option>
                            <option value="5">Creative writing</option>
                            <option value="5">Crocheting</option>
                            <option value="5">Cross-stitch</option>
                            <option value="5">Crossword puzzles</option>
                            <option value="5">Cryptography</option>
                            <option value="5">Cue sports</option>
                            <option value="5">Dance</option>
                            <option value="5">Decorating</option>
                            <option value="5">Digital arts</option>
                            <option value="5">Dining</option>
                            <option value="5">Diorama</option>
                            <option value="5">Distro Hopping</option>
                            <option value="5">Diving</option>
                            <option value="5">Djembe</option>
                            <option value="5">DJing</option>
                            <option value="5">Do it yourself</option>
                            <option value="5">Drama</option>
                            <option value="5">Drawing</option>
                            <option value="5">Drink mixing</option>
                            <option value="5">Electronic games</option>
                            <option value="5">Electronics</option>
                            <option value="5">Embroidery</option>
                            <option value="5">Engraving</option>
                            <option value="5">Entertaining</option>
                            <option value="5">Experimenting</option>
                            <option value="5">Fantasy sports</option>
                            <option value="5">Fashion</option>
                            <option value="5">Fashion design</option>
                            <option value="5">Feng shui decorating</option>
                            <option value="5">Filmmaking</option>
                            <option value="5">Fingerpainting</option>
                            <option value="5">Fishfarming</option>
                            <option value="5">Fishkeeping</option>
                            <option value="5">Flower arranging</option>
                            <option value="5">Fly tying</option>
                            <option value="5">Foreign language learning</option>
                            <option value="5">Furniture building</option>
                            <option value="5">Gaming</option>
                            <option value="5">Tabletop games</option>
                            <option value="5">Role-playing games</option>
                            <option value="5">Genealogy</option>
                            <option value="5">Gingerbread house making</option>
                            <option value="5">Giving advice</option>
                            <option value="5">Glassblowing</option>
                            <option value="5">Gardening</option>
                            <option value="5">Gongfu tea</option>
                            <option value="5">Graphic design</option>
                            <option value="5">Gunsmithing</option>
                            <option value="5">Hacking</option>
                            <option value="5">Hardware</option>
                            <option value="5">Herp keeping</option>
                            <option value="5">Home improvement</option>
                            <option value="5">Homebrewing</option>
                            <option value="5">Houseplant care</option>
                            <option value="5">Hula hooping</option>
                            <option value="5">Humor</option>
                            <option value="5">Hydroponics</option>
                            <option value="5">Ice skating</option>
                            <option value="5">Inventing</option>
                            <option value="5">Jewelry making</option>
                            <option value="5">Jigsaw puzzles</option>
                            <option value="5">Journaling</option>
                            <option value="5">Juggling</option>
                            <option value="5">Karaoke</option>
                            <option value="5">Karate</option>
                            <option value="5">Kendama</option>
                            <option value="5">Knife making</option>
                            <option value="5">Knot tying</option>
                            <option value="5">Kombucha brewing</option>
                            <option value="5">Kung fu</option>
                            <option value="5">Lace making</option>
                            <option value="5">Lapidary</option>
                            <option value="5">Leather crafting</option>
                            <option value="5">Lego building</option>
                            <option value="5">Livestreaming</option>
                            <option value="5">Listening to music</option>
                            <option value="5">Listening to podcasts</option>
                            <option value="5">Lock picking</option>
                            <option value="5">Machining</option>
                            <option value="5">Macrame</option>
                            <option value="5">Magic</option>
                            <option value="5">Makeup</option>
                            <option value="5">Manga</option>
                            <option value="5">Massaging</option>
                            <option value="5">Mazes (indoor/outdoor)</option>
                            <option value="5">Mechanics</option>
                            <option value="5">Meditation</option>
                            <option value="5">Memory training</option>
                            <option value="5">Metalworking</option>
                            <option value="5">Miniature art</option>
                            <option value="5">Minimalism</option>
                            <option value="5">Model building</option>
                            <option value="5">Modeling</option>
                            <option value="5">Model engineering</option>
                            <option value="5">Music</option>
                            <option value="5">Nail art</option>
                            <option value="5">Needlepoint</option>
                            <option value="5">Origami</option>
                            <option value="5">Painting</option>
                            <option value="5">Palmistry</option>
                            <option value="5">Pen Spinning</option>
                            <option value="5">Performance</option>
                            <option value="5">Pet</option>
                            <option value="5">Pet adoption and fostering</option>
                            <option value="5">Pet sitting</option>
                            <option value="5">Philately</option>
                            <option value="5">Photography</option>
                            <option value="5">Pilates</option>
                            <option value="5">Planning</option>
                            <option value="5">Plastic art</option>
                            <option value="5">Playing musical instruments</option>
                            <option value="5">Poetry</option>
                            <option value="5">Poi</option>
                            <option value="5">Pole dancing</option>
                            <option value="5">Postcrossing</option>
                            <option value="5">Pottery</option>
                            <option value="5">Power Nap</option>
                            <option value="5">Practical jokes</option>
                            <option value="5">Pressed flower craft</option>
                            <option value="5">Proofreading and editing</option>
                            <option value="5">Proverbs</option>
                            <option value="5">Public speaking</option>
                            <option value="5">Puppetry</option>
                            <option value="5">Puzzles</option>
                            <option value="5">Pyrography</option>
                            <option value="5">Quilling</option>
                            <option value="5">Quilting</option>
                            <option value="5">Quizzes</option>
                            <option value="5">Radio-controlled model playing</option>
                            <option value="5">Rail transport modeling</option>
                            <option value="5">Rapping</option>
                            <option value="5">Reading</option>
                            <option value="5">Recipe creation</option>
                            <option value="5">Refinishing</option>
                            <option value="5">Reiki</option>
                            <option value="5">Reviewing Gadgets</option>
                            <option value="5">Robot combat</option>
                            <option value="5">Rubik's Cube</option>
                            <option value="5">Scrapbooking</option>
                            <option value="5">Scuba Diving</option>
                            <option value="5">Sculpting</option>
                            <option value="5">Sewing</option>
                            <option value="5">Shoemaking</option>
                            <option value="5">Singing</option>
                            <option value="5">Sketching</option>
                            <option value="5">Skipping rope</option>
                            <option value="5">Slot car</option>
                            <option value="5">Soapmaking</option>
                            <option value="5">Social media</option>
                            <option value="5">Spreadsheets</option>
                            <option value="5">Stamp collecting</option>
                            <option value="5">Stand-up comedy</option>
                            <option value="5">Storytelling</option>
                            <option value="5">Stripping</option>
                            <option value="5">Sudoku</option>
                            <option value="5">Talking</option>
                            <option value="5">Tapestry</option>
                            <option value="5">Tarot</option>
                            <option value="5">Tatebanko</option>
                            <option value="5">Tattooing</option>
                            <option value="5">Taxidermy</option>
                            <option value="5">Telling jokes</option>
                            <option value="5">Thrifting</option>
                            <option value="5">Upcycling</option>
                            <option value="5">Video editing</option>
                            <option value="5">Video game developing</option>
                            <option value="5">Video making</option>
                            <option value="5">VR Gaming</option>
                            <option value="5">Watch making</option>
                            <option value="5">Watching documentaries</option>
                            <option value="5">Waxing</option>
                            <option value="5">Weaving</option>
                            <option value="5">Weight training</option>
                            <option value="5">Welding</option>
                            <option value="5">Wikipedia editing</option>
                            <option value="5">Wine tasting</option>
                            <option value="5">Wine making</option>
                            <option value="5">Wood carving</option>
                            <option value="5">Wood working</option>
                            <option value="5">Word searches</option>
                            <option value="5">Writing</option>
                            <option value="5">Writing music</option>
                            <option value="5">Yoga</option>
                            <option value="5">Zumba</option>
                          </select>
                        </div>
                      </Form.Group>
                   </div>
                   </div>








                  
                   



                  {/* <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button> */}
                
                </form>
              </div>
            </div>
          </div>

          {/* // Personal Detail section ends here. */}




          {/* // This is personal details section. */}

        <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Personal Interest details</h4>
                <form className="form-sample">
                  <p className="card-description"> Select 6 Interest.</p>
                  

                  
                  <div className="row">  
                    <div className="col-md-6 ">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Interest 1</label>
                          <div className="col-sm-9">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option value="" disabled selected hidden>Select Your Interest 1</option>
                              <option value="2">Acroyoga</option>
                              <option value="3">Acting</option>
                              <option value="4">Aerial silk</option>
                              <option value="5">Airbrushing</option>
                              <option value="5">mateur radio</option>
                              <option value="5">Animation</option>
                              <option value="5">Anime</option>
                              <option value="5">Aquascaping</option>
                              <option value="5">Art</option>
                              <option value="5">Astrology</option>
                              <option value="5">Baking</option>
                              <option value="5">Barbershop Music</option>
                              <option value="5">Baton twirling</option>
                              <option value="5">Beatboxing</option>
                              <option value="5">Beer tasting</option>
                              <option value="5">Bell ringing</option>
                              <option value="5">Blogging</option>
                              <option value="5">Board/tabletop games</option>
                              <option value="5">Book discussion clubs</option>
                              <option value="5">Book restoration</option>
                              <option value="5">Bowling</option>
                              <option value="5">Brazilian jiu-jitsu</option>
                              <option value="5">Breadmaking</option>
                              <option value="5">Bullet journaling</option>
                              <option value="5">Calligraphy</option>
                              <option value="5">Candle making</option>
                              <option value="5">Candy making</option>
                              <option value="5">Car fixing and building</option>
                              <option value="5">Card games</option>
                              <option value="5">Cardistry</option>
                              <option value="5">Ceramics</option>
                              <option value="5">Chatting</option>
                              <option value="5">Cheesemaking</option>
                              <option value="5">Chess</option>
                              <option value="5">Cleaning</option>
                              <option value="5">Clothe smaking</option>
                              <option value="5">Coffee roasting</option>
                              <option value="5">Collecting</option>
                              <option value="5">Coloring</option>
                              <option value="5">Communication</option>
                              <option value="5">Community activism</option>
                              <option value="5">Computer programming</option>
                              <option value="5">Confectionery</option>
                              <option value="5">Conlanging</option>
                              <option value="5">Construction</option>
                              <option value="5">Cooking</option>
                              <option value="5">Cosplaying</option>)
                              <option value="5">Couch surfing</option>
                              <option value="5">Couponing</option>
                              <option value="5">Craft</option>
                              <option value="5">Creative writing</option>
                              <option value="5">Crocheting</option>
                              <option value="5">Cross-stitch</option>
                              <option value="5">Crossword puzzles</option>
                              <option value="5">Cryptography</option>
                              <option value="5">Cue sports</option>
                              <option value="5">Dance</option>
                              <option value="5">Decorating</option>
                              <option value="5">Digital arts</option>
                              <option value="5">Dining</option>
                              <option value="5">Diorama</option>
                              <option value="5">Distro Hopping</option>
                              <option value="5">Diving</option>
                              <option value="5">Djembe</option>
                              <option value="5">DJing</option>
                              <option value="5">Do it yourself</option>
                              <option value="5">Drama</option>
                              <option value="5">Drawing</option>
                              <option value="5">Drink mixing</option>
                              <option value="5">Electronic games</option>
                              <option value="5">Electronics</option>
                              <option value="5">Embroidery</option>
                              <option value="5">Engraving</option>
                              <option value="5">Entertaining</option>
                              <option value="5">Experimenting</option>
                              <option value="5">Fantasy sports</option>
                              <option value="5">Fashion</option>
                              <option value="5">Fashion design</option>
                              <option value="5">Feng shui decorating</option>
                              <option value="5">Filmmaking</option>
                              <option value="5">Fingerpainting</option>
                              <option value="5">Fishfarming</option>
                              <option value="5">Fishkeeping</option>
                              <option value="5">Flower arranging</option>
                              <option value="5">Fly tying</option>
                              <option value="5">Foreign language learning</option>
                              <option value="5">Furniture building</option>
                              <option value="5">Gaming</option>
                              <option value="5">Tabletop games</option>
                              <option value="5">Role-playing games</option>
                              <option value="5">Genealogy</option>
                              <option value="5">Gingerbread house making</option>
                              <option value="5">Giving advice</option>
                              <option value="5">Glassblowing</option>
                              <option value="5">Gardening</option>
                              <option value="5">Gongfu tea</option>
                              <option value="5">Graphic design</option>
                              <option value="5">Gunsmithing</option>
                              <option value="5">Hacking</option>
                              <option value="5">Hardware</option>
                              <option value="5">Herp keeping</option>
                              <option value="5">Home improvement</option>
                              <option value="5">Homebrewing</option>
                              <option value="5">Houseplant care</option>
                              <option value="5">Hula hooping</option>
                              <option value="5">Humor</option>
                              <option value="5">Hydroponics</option>
                              <option value="5">Ice skating</option>
                              <option value="5">Inventing</option>
                              <option value="5">Jewelry making</option>
                              <option value="5">Jigsaw puzzles</option>
                              <option value="5">Journaling</option>
                              <option value="5">Juggling</option>
                              <option value="5">Karaoke</option>
                              <option value="5">Karate</option>
                              <option value="5">Kendama</option>
                              <option value="5">Knife making</option>
                              <option value="5">Knot tying</option>
                              <option value="5">Kombucha brewing</option>
                              <option value="5">Kung fu</option>
                              <option value="5">Lace making</option>
                              <option value="5">Lapidary</option>
                              <option value="5">Leather crafting</option>
                              <option value="5">Lego building</option>
                              <option value="5">Livestreaming</option>
                              <option value="5">Listening to music</option>
                              <option value="5">Listening to podcasts</option>
                              <option value="5">Lock picking</option>
                              <option value="5">Machining</option>
                              <option value="5">Macrame</option>
                              <option value="5">Magic</option>
                              <option value="5">Makeup</option>
                              <option value="5">Manga</option>
                              <option value="5">Massaging</option>
                              <option value="5">Mazes (indoor/outdoor)</option>
                              <option value="5">Mechanics</option>
                              <option value="5">Meditation</option>
                              <option value="5">Memory training</option>
                              <option value="5">Metalworking</option>
                              <option value="5">Miniature art</option>
                              <option value="5">Minimalism</option>
                              <option value="5">Model building</option>
                              <option value="5">Modeling</option>
                              <option value="5">Model engineering</option>
                              <option value="5">Music</option>
                              <option value="5">Nail art</option>
                              <option value="5">Needlepoint</option>
                              <option value="5">Origami</option>
                              <option value="5">Painting</option>
                              <option value="5">Palmistry</option>
                              <option value="5">Pen Spinning</option>
                              <option value="5">Performance</option>
                              <option value="5">Pet</option>
                              <option value="5">Pet adoption and fostering</option>
                              <option value="5">Pet sitting</option>
                              <option value="5">Philately</option>
                              <option value="5">Photography</option>
                              <option value="5">Pilates</option>
                              <option value="5">Planning</option>
                              <option value="5">Plastic art</option>
                              <option value="5">Playing musical instruments</option>
                              <option value="5">Poetry</option>
                              <option value="5">Poi</option>
                              <option value="5">Pole dancing</option>
                              <option value="5">Postcrossing</option>
                              <option value="5">Pottery</option>
                              <option value="5">Power Nap</option>
                              <option value="5">Practical jokes</option>
                              <option value="5">Pressed flower craft</option>
                              <option value="5">Proofreading and editing</option>
                              <option value="5">Proverbs</option>
                              <option value="5">Public speaking</option>
                              <option value="5">Puppetry</option>
                              <option value="5">Puzzles</option>
                              <option value="5">Pyrography</option>
                              <option value="5">Quilling</option>
                              <option value="5">Quilting</option>
                              <option value="5">Quizzes</option>
                              <option value="5">Radio-controlled model playing</option>
                              <option value="5">Rail transport modeling</option>
                              <option value="5">Rapping</option>
                              <option value="5">Reading</option>
                              <option value="5">Recipe creation</option>
                              <option value="5">Refinishing</option>
                              <option value="5">Reiki</option>
                              <option value="5">Reviewing Gadgets</option>
                              <option value="5">Robot combat</option>
                              <option value="5">Rubik's Cube</option>
                              <option value="5">Scrapbooking</option>
                              <option value="5">Scuba Diving</option>
                              <option value="5">Sculpting</option>
                              <option value="5">Sewing</option>
                              <option value="5">Shoemaking</option>
                              <option value="5">Singing</option>
                              <option value="5">Sketching</option>
                              <option value="5">Skipping rope</option>
                              <option value="5">Slot car</option>
                              <option value="5">Soapmaking</option>
                              <option value="5">Social media</option>
                              <option value="5">Spreadsheets</option>
                              <option value="5">Stamp collecting</option>
                              <option value="5">Stand-up comedy</option>
                              <option value="5">Storytelling</option>
                              <option value="5">Stripping</option>
                              <option value="5">Sudoku</option>
                              <option value="5">Talking</option>
                              <option value="5">Tapestry</option>
                              <option value="5">Tarot</option>
                              <option value="5">Tatebanko</option>
                              <option value="5">Tattooing</option>
                              <option value="5">Taxidermy</option>
                              <option value="5">Telling jokes</option>
                              <option value="5">Thrifting</option>
                              <option value="5">Upcycling</option>
                              <option value="5">Video editing</option>
                              <option value="5">Video game developing</option>
                              <option value="5">Video making</option>
                              <option value="5">VR Gaming</option>
                              <option value="5">Watch making</option>
                              <option value="5">Watching documentaries</option>
                              <option value="5">Waxing</option>
                              <option value="5">Weaving</option>
                              <option value="5">Weight training</option>
                              <option value="5">Welding</option>
                              <option value="5">Wikipedia editing</option>
                              <option value="5">Wine tasting</option>
                              <option value="5">Wine making</option>
                              <option value="5">Wood carving</option>
                              <option value="5">Wood working</option>
                              <option value="5">Word searches</option>
                              <option value="5">Writing</option>
                              <option value="5">Writing music</option>
                              <option value="5">Yoga</option>
                              <option value="5">Zumba</option>
                            </select>
                          </div>
                        </Form.Group>
                    </div>
                    <div className="col-md-6 ">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Interest 2</label>
                          <div className="col-sm-9">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option value="" disabled selected hidden>Select Your Interest 1</option>
                              <option value="2">Acroyoga</option>
                              <option value="3">Acting</option>
                              <option value="4">Aerial silk</option>
                              <option value="5">Airbrushing</option>
                              <option value="5">mateur radio</option>
                              <option value="5">Animation</option>
                              <option value="5">Anime</option>
                              <option value="5">Aquascaping</option>
                              <option value="5">Art</option>
                              <option value="5">Astrology</option>
                              <option value="5">Baking</option>
                              <option value="5">Barbershop Music</option>
                              <option value="5">Baton twirling</option>
                              <option value="5">Beatboxing</option>
                              <option value="5">Beer tasting</option>
                              <option value="5">Bell ringing</option>
                              <option value="5">Blogging</option>
                              <option value="5">Board/tabletop games</option>
                              <option value="5">Book discussion clubs</option>
                              <option value="5">Book restoration</option>
                              <option value="5">Bowling</option>
                              <option value="5">Brazilian jiu-jitsu</option>
                              <option value="5">Breadmaking</option>
                              <option value="5">Bullet journaling</option>
                              <option value="5">Calligraphy</option>
                              <option value="5">Candle making</option>
                              <option value="5">Candy making</option>
                              <option value="5">Car fixing and building</option>
                              <option value="5">Card games</option>
                              <option value="5">Cardistry</option>
                              <option value="5">Ceramics</option>
                              <option value="5">Chatting</option>
                              <option value="5">Cheesemaking</option>
                              <option value="5">Chess</option>
                              <option value="5">Cleaning</option>
                              <option value="5">Clothe smaking</option>
                              <option value="5">Coffee roasting</option>
                              <option value="5">Collecting</option>
                              <option value="5">Coloring</option>
                              <option value="5">Communication</option>
                              <option value="5">Community activism</option>
                              <option value="5">Computer programming</option>
                              <option value="5">Confectionery</option>
                              <option value="5">Conlanging</option>
                              <option value="5">Construction</option>
                              <option value="5">Cooking</option>
                              <option value="5">Cosplaying</option>
                              <option value="5">Couch surfing</option>
                              <option value="5">Couponing</option>
                              <option value="5">Craft</option>
                              <option value="5">Creative writing</option>
                              <option value="5">Crocheting</option>
                              <option value="5">Cross-stitch</option>
                              <option value="5">Crossword puzzles</option>
                              <option value="5">Cryptography</option>
                              <option value="5">Cue sports</option>
                              <option value="5">Dance</option>
                              <option value="5">Decorating</option>
                              <option value="5">Digital arts</option>
                              <option value="5">Dining</option>
                              <option value="5">Diorama</option>
                              <option value="5">Distro Hopping</option>
                              <option value="5">Diving</option>
                              <option value="5">Djembe</option>
                              <option value="5">DJing</option>
                              <option value="5">Do it yourself</option>
                              <option value="5">Drama</option>
                              <option value="5">Drawing</option>
                              <option value="5">Drink mixing</option>
                              <option value="5">Electronic games</option>
                              <option value="5">Electronics</option>
                              <option value="5">Embroidery</option>
                              <option value="5">Engraving</option>
                              <option value="5">Entertaining</option>
                              <option value="5">Experimenting</option>
                              <option value="5">Fantasy sports</option>
                              <option value="5">Fashion</option>
                              <option value="5">Fashion design</option>
                              <option value="5">Feng shui decorating</option>
                              <option value="5">Filmmaking</option>
                              <option value="5">Fingerpainting</option>
                              <option value="5">Fishfarming</option>
                              <option value="5">Fishkeeping</option>
                              <option value="5">Flower arranging</option>
                              <option value="5">Fly tying</option>
                              <option value="5">Foreign language learning</option>
                              <option value="5">Furniture building</option>
                              <option value="5">Gaming</option>
                              <option value="5">Tabletop games</option>
                              <option value="5">Role-playing games</option>
                              <option value="5">Genealogy</option>
                              <option value="5">Gingerbread house making</option>
                              <option value="5">Giving advice</option>
                              <option value="5">Glassblowing</option>
                              <option value="5">Gardening</option>
                              <option value="5">Gongfu tea</option>
                              <option value="5">Graphic design</option>
                              <option value="5">Gunsmithing</option>
                              <option value="5">Hacking</option>
                              <option value="5">Hardware</option>
                              <option value="5">Herp keeping</option>
                              <option value="5">Home improvement</option>
                              <option value="5">Homebrewing</option>
                              <option value="5">Houseplant care</option>
                              <option value="5">Hula hooping</option>
                              <option value="5">Humor</option>
                              <option value="5">Hydroponics</option>
                              <option value="5">Ice skating</option>
                              <option value="5">Inventing</option>
                              <option value="5">Jewelry making</option>
                              <option value="5">Jigsaw puzzles</option>
                              <option value="5">Journaling</option>
                              <option value="5">Juggling</option>
                              <option value="5">Karaoke</option>
                              <option value="5">Karate</option>
                              <option value="5">Kendama</option>
                              <option value="5">Knife making</option>
                              <option value="5">Knot tying</option>
                              <option value="5">Kombucha brewing</option>
                              <option value="5">Kung fu</option>
                              <option value="5">Lace making</option>
                              <option value="5">Lapidary</option>
                              <option value="5">Leather crafting</option>
                              <option value="5">Lego building</option>
                              <option value="5">Livestreaming</option>
                              <option value="5">Listening to music</option>
                              <option value="5">Listening to podcasts</option>
                              <option value="5">Lock picking</option>
                              <option value="5">Machining</option>
                              <option value="5">Macrame</option>
                              <option value="5">Magic</option>
                              <option value="5">Makeup</option>
                              <option value="5">Manga</option>
                              <option value="5">Massaging</option>
                              <option value="5">Mazes indoor/outdoor</option>
                              <option value="5">Mechanics</option>
                              <option value="5">Meditation</option>
                              <option value="5">Memory training</option>
                              <option value="5">Metalworking</option>
                              <option value="5">Miniature art</option>
                              <option value="5">Minimalism</option>
                              <option value="5">Model building</option>
                              <option value="5">Modeling</option>
                              <option value="5">Model engineering</option>
                              <option value="5">Music</option>
                              <option value="5">Nail art</option>
                              <option value="5">Needlepoint</option>
                              <option value="5">Origami</option>
                              <option value="5">Painting</option>
                              <option value="5">Palmistry</option>
                              <option value="5">Pen Spinning</option>
                              <option value="5">Performance</option>
                              <option value="5">Pet</option>
                              <option value="5">Pet adoption and fostering</option>
                              <option value="5">Pet sitting</option>
                              <option value="5">Philately</option>
                              <option value="5">Photography</option>
                              <option value="5">Pilates</option>
                              <option value="5">Planning</option>
                              <option value="5">Plastic art</option>
                              <option value="5">Playing musical instruments</option>
                              <option value="5">Poetry</option>
                              <option value="5">Poi</option>
                              <option value="5">Pole dancing</option>
                              <option value="5">Postcrossing</option>
                              <option value="5">Pottery</option>
                              <option value="5">Power Nap</option>
                              <option value="5">Practical jokes</option>
                              <option value="5">Pressed flower craft</option>
                              <option value="5">Proofreading and editing</option>
                              <option value="5">Proverbs</option>
                              <option value="5">Public speaking</option>
                              <option value="5">Puppetry</option>
                              <option value="5">Puzzles</option>
                              <option value="5">Pyrography</option>
                              <option value="5">Quilling</option>
                              <option value="5">Quilting</option>
                              <option value="5">Quizzes</option>
                              <option value="5">Radio-controlled model playing</option>
                              <option value="5">Rail transport modeling</option>
                              <option value="5">Rapping</option>
                              <option value="5">Reading</option>
                              <option value="5">Recipe creation</option>
                              <option value="5">Refinishing</option>
                              <option value="5">Reiki</option>
                              <option value="5">Reviewing Gadgets</option>
                              <option value="5">Robot combat</option>
                              <option value="5">Rubik's Cube</option>
                              <option value="5">Scrapbooking</option>
                              <option value="5">Scuba Diving</option>
                              <option value="5">Sculpting</option>
                              <option value="5">Sewing</option>
                              <option value="5">Shoemaking</option>
                              <option value="5">Singing</option>
                              <option value="5">Sketching</option>
                              <option value="5">Skipping rope</option>
                              <option value="5">Slot car</option>
                              <option value="5">Soapmaking</option>
                              <option value="5">Social media</option>
                              <option value="5">Spreadsheets</option>
                              <option value="5">Stamp collecting</option>
                              <option value="5">Stand-up comedy</option>
                              <option value="5">Storytelling</option>
                              <option value="5">Stripping</option>
                              <option value="5">Sudoku</option>
                              <option value="5">Talking</option>
                              <option value="5">Tapestry</option>
                              <option value="5">Tarot</option>
                              <option value="5">Tatebanko</option>
                              <option value="5">Tattooing</option>
                              <option value="5">Taxidermy</option>
                              <option value="5">Telling jokes</option>
                              <option value="5">Thrifting</option>
                              <option value="5">Upcycling</option>
                              <option value="5">Video editing</option>
                              <option value="5">Video game developing</option>
                              <option value="5">Video making</option>
                              <option value="5">VR Gaming</option>
                              <option value="5">Watch making</option>
                              <option value="5">Watching documentaries</option>
                              <option value="5">Waxing</option>
                              <option value="5">Weaving</option>
                              <option value="5">Weight training</option>
                              <option value="5">Welding</option>
                              <option value="5">Wikipedia editing</option>
                              <option value="5">Wine tasting</option>
                              <option value="5">Wine making</option>
                              <option value="5">Wood carving</option>
                              <option value="5">Wood working</option>
                              <option value="5">Word searches</option>
                              <option value="5">Writing</option>
                              <option value="5">Writing music</option>
                              <option value="5">Yoga</option>
                              <option value="5">Zumba</option>
                            </select>
                          </div>
                        </Form.Group>
                    </div>
                   </div>


                   <div className="row">  
                    <div className="col-md-6 ">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Interest 3</label>
                          <div className="col-sm-9">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option value="" disabled selected hidden>Select Your Interest 3</option>
                              <option value="2">Acroyoga</option>
                              <option value="3">Acting</option>
                              <option value="4">Aerial silk</option>
                              <option value="5">Airbrushing</option>
                              <option value="5">mateur radio</option>
                              <option value="5">Animation</option>
                              <option value="5">Anime</option>
                              <option value="5">Aquascaping</option>
                              <option value="5">Art</option>
                              <option value="5">Astrology</option>
                              <option value="5">Baking</option>
                              <option value="5">Barbershop Music</option>
                              <option value="5">Baton twirling</option>
                              <option value="5">Beatboxing</option>
                              <option value="5">Beer tasting</option>
                              <option value="5">Bell ringing</option>
                              <option value="5">Blogging</option>
                              <option value="5">Board/tabletop games</option>
                              <option value="5">Book discussion clubs</option>
                              <option value="5">Book restoration</option>
                              <option value="5">Bowling</option>
                              <option value="5">Brazilian jiu-jitsu</option>
                              <option value="5">Breadmaking</option>
                              <option value="5">Bullet journaling</option>
                              <option value="5">Calligraphy</option>
                              <option value="5">Candle making</option>
                              <option value="5">Candy making</option>
                              <option value="5">Car fixing and building</option>
                              <option value="5">Card games</option>
                              <option value="5">Cardistry</option>
                              <option value="5">Ceramics</option>
                              <option value="5">Chatting</option>
                              <option value="5">Cheesemaking</option>
                              <option value="5">Chess</option>
                              <option value="5">Cleaning</option>
                              <option value="5">Clothe smaking</option>
                              <option value="5">Coffee roasting</option>
                              <option value="5">Collecting</option>
                              <option value="5">Coloring</option>
                              <option value="5">Communication</option>
                              <option value="5">Community activism</option>
                              <option value="5">Computer programming</option>
                              <option value="5">Confectionery</option>
                              <option value="5">Conlanging</option>
                              <option value="5">Construction</option>
                              <option value="5">Cooking</option>
                              <option value="5">Cosplaying</option>
                              <option value="5">Couch surfing</option>
                              <option value="5">Couponing</option>
                              <option value="5">Craft</option>
                              <option value="5">Creative writing</option>
                              <option value="5">Crocheting</option>
                              <option value="5">Cross-stitch</option>
                              <option value="5">Crossword puzzles</option>
                              <option value="5">Cryptography</option>
                              <option value="5">Cue sports</option>
                              <option value="5">Dance</option>
                              <option value="5">Decorating</option>
                              <option value="5">Digital arts</option>
                              <option value="5">Dining</option>
                              <option value="5">Diorama</option>
                              <option value="5">Distro Hopping</option>
                              <option value="5">Diving</option>
                              <option value="5">Djembe</option>
                              <option value="5">DJing</option>
                              <option value="5">Do it yourself</option>
                              <option value="5">Drama</option>
                              <option value="5">Drawing</option>
                              <option value="5">Drink mixing</option>
                              <option value="5">Electronic games</option>
                              <option value="5">Electronics</option>
                              <option value="5">Embroidery</option>
                              <option value="5">Engraving</option>
                              <option value="5">Entertaining</option>
                              <option value="5">Experimenting</option>
                              <option value="5">Fantasy sports</option>
                              <option value="5">Fashion</option>
                              <option value="5">Fashion design</option>
                              <option value="5">Feng shui decorating</option>
                              <option value="5">Filmmaking</option>
                              <option value="5">Fingerpainting</option>
                              <option value="5">Fishfarming</option>
                              <option value="5">Fishkeeping</option>
                              <option value="5">Flower arranging</option>
                              <option value="5">Fly tying</option>
                              <option value="5">Foreign language learning</option>
                              <option value="5">Furniture building</option>
                              <option value="5">Gaming</option>
                              <option value="5">Tabletop games</option>
                              <option value="5">Role-playing games</option>
                              <option value="5">Genealogy</option>
                              <option value="5">Gingerbread house making</option>
                              <option value="5">Giving advice</option>
                              <option value="5">Glassblowing</option>
                              <option value="5">Gardening</option>
                              <option value="5">Gongfu tea</option>
                              <option value="5">Graphic design</option>
                              <option value="5">Gunsmithing</option>
                              <option value="5">Hacking</option>
                              <option value="5">Hardware</option>
                              <option value="5">Herp keeping</option>
                              <option value="5">Home improvement</option>
                              <option value="5">Homebrewing</option>
                              <option value="5">Houseplant care</option>
                              <option value="5">Hula hooping</option>
                              <option value="5">Humor</option>
                              <option value="5">Hydroponics</option>
                              <option value="5">Ice skating</option>
                              <option value="5">Inventing</option>
                              <option value="5">Jewelry making</option>
                              <option value="5">Jigsaw puzzles</option>
                              <option value="5">Journaling</option>
                              <option value="5">Juggling</option>
                              <option value="5">Karaoke</option>
                              <option value="5">Karate</option>
                              <option value="5">Kendama</option>
                              <option value="5">Knife making</option>
                              <option value="5">Knot tying</option>
                              <option value="5">Kombucha brewing</option>
                              <option value="5">Kung fu</option>
                              <option value="5">Lace making</option>
                              <option value="5">Lapidary</option>
                              <option value="5">Leather crafting</option>
                              <option value="5">Lego building</option>
                              <option value="5">Livestreaming</option>
                              <option value="5">Listening to music</option>
                              <option value="5">Listening to podcasts</option>
                              <option value="5">Lock picking</option>
                              <option value="5">Machining</option>
                              <option value="5">Macrame</option>
                              <option value="5">Magic</option>
                              <option value="5">Makeup</option>
                              <option value="5">Manga</option>
                              <option value="5">Massaging</option>
                              <option value="5">Mazes indoor/outdoor</option>
                              <option value="5">Mechanics</option>
                              <option value="5">Meditation</option>
                              <option value="5">Memory training</option>
                              <option value="5">Metalworking</option>
                              <option value="5">Miniature art</option>
                              <option value="5">Minimalism</option>
                              <option value="5">Model building</option>
                              <option value="5">Modeling</option>
                              <option value="5">Model engineering</option>
                              <option value="5">Music</option>
                              <option value="5">Nail art</option>
                              <option value="5">Needlepoint</option>
                              <option value="5">Origami</option>
                              <option value="5">Painting</option>
                              <option value="5">Palmistry</option>
                              <option value="5">Pen Spinning</option>
                              <option value="5">Performance</option>
                              <option value="5">Pet</option>
                              <option value="5">Pet adoption and fostering</option>
                              <option value="5">Pet sitting</option>
                              <option value="5">Philately</option>
                              <option value="5">Photography</option>
                              <option value="5">Pilates</option>
                              <option value="5">Planning</option>
                              <option value="5">Plastic art</option>
                              <option value="5">Playing musical instruments</option>
                              <option value="5">Poetry</option>
                              <option value="5">Poi</option>
                              <option value="5">Pole dancing</option>
                              <option value="5">Postcrossing</option>
                              <option value="5">Pottery</option>
                              <option value="5">Power Nap</option>
                              <option value="5">Practical jokes</option>
                              <option value="5">Pressed flower craft</option>
                              <option value="5">Proofreading and editing</option>
                              <option value="5">Proverbs</option>
                              <option value="5">Public speaking</option>
                              <option value="5">Puppetry</option>
                              <option value="5">Puzzles</option>
                              <option value="5">Pyrography</option>
                              <option value="5">Quilling</option>
                              <option value="5">Quilting</option>
                              <option value="5">Quizzes</option>
                              <option value="5">Radio-controlled model playing</option>
                              <option value="5">Rail transport modeling</option>
                              <option value="5">Rapping</option>
                              <option value="5">Reading</option>
                              <option value="5">Recipe creation</option>
                              <option value="5">Refinishing</option>
                              <option value="5">Reiki</option>
                              <option value="5">Reviewing Gadgets</option>
                              <option value="5">Robot combat</option>
                              <option value="5">Rubik's Cube</option>
                              <option value="5">Scrapbooking</option>
                              <option value="5">Scuba Diving</option>
                              <option value="5">Sculpting</option>
                              <option value="5">Sewing</option>
                              <option value="5">Shoemaking</option>
                              <option value="5">Singing</option>
                              <option value="5">Sketching</option>
                              <option value="5">Skipping rope</option>
                              <option value="5">Slot car</option>
                              <option value="5">Soapmaking</option>
                              <option value="5">Social media</option>
                              <option value="5">Spreadsheets</option>
                              <option value="5">Stamp collecting</option>
                              <option value="5">Stand-up comedy</option>
                              <option value="5">Storytelling</option>
                              <option value="5">Stripping</option>
                              <option value="5">Sudoku</option>
                              <option value="5">Talking</option>
                              <option value="5">Tapestry</option>
                              <option value="5">Tarot</option>
                              <option value="5">Tatebanko</option>
                              <option value="5">Tattooing</option>
                              <option value="5">Taxidermy</option>
                              <option value="5">Telling jokes</option>
                              <option value="5">Thrifting</option>
                              <option value="5">Upcycling</option>
                              <option value="5">Video editing</option>
                              <option value="5">Video game developing</option>
                              <option value="5">Video making</option>
                              <option value="5">VR Gaming</option>
                              <option value="5">Watch making</option>
                              <option value="5">Watching documentaries</option>
                              <option value="5">Waxing</option>
                              <option value="5">Weaving</option>
                              <option value="5">Weight training</option>
                              <option value="5">Welding</option>
                              <option value="5">Wikipedia editing</option>
                              <option value="5">Wine tasting</option>
                              <option value="5">Wine making</option>
                              <option value="5">Wood carving</option>
                              <option value="5">Wood working</option>
                              <option value="5">Word searches</option>
                              <option value="5">Writing</option>
                              <option value="5">Writing music</option>
                              <option value="5">Yoga</option>
                              <option value="5">Zumba</option>
                            </select>
                          </div>
                        </Form.Group>
                    </div>
                    <div className="col-md-6 ">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Interest 4</label>
                          <div className="col-sm-9">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option value="" disabled selected hidden>Select Your Interest 4</option>
                              <option value="2">Acroyoga</option>
                              <option value="3">Acting</option>
                              <option value="4">Aerial silk</option>
                              <option value="5">Airbrushing</option>
                              <option value="5">mateur radio</option>
                              <option value="5">Animation</option>
                              <option value="5">Anime</option>
                              <option value="5">Aquascaping</option>
                              <option value="5">Art</option>
                              <option value="5">Astrology</option>
                              <option value="5">Baking</option>
                              <option value="5">Barbershop Music</option>
                              <option value="5">Baton twirling</option>
                              <option value="5">Beatboxing</option>
                              <option value="5">Beer tasting</option>
                              <option value="5">Bell ringing</option>
                              <option value="5">Blogging</option>
                              <option value="5">Board/tabletop games</option>
                              <option value="5">Book discussion clubs</option>
                              <option value="5">Book restoration</option>
                              <option value="5">Bowling</option>
                              <option value="5">Brazilian jiu-jitsu</option>
                              <option value="5">Breadmaking</option>
                              <option value="5">Bullet journaling</option>
                              <option value="5">Calligraphy</option>
                              <option value="5">Candle making</option>
                              <option value="5">Candy making</option>
                              <option value="5">Car fixing and building</option>
                              <option value="5">Card games</option>
                              <option value="5">Cardistry</option>
                              <option value="5">Ceramics</option>
                              <option value="5">Chatting</option>
                              <option value="5">Cheesemaking</option>
                              <option value="5">Chess</option>
                              <option value="5">Cleaning</option>
                              <option value="5">Clothe smaking</option>
                              <option value="5">Coffee roasting</option>
                              <option value="5">Collecting</option>
                              <option value="5">Coloring</option>
                              <option value="5">Communication</option>
                              <option value="5">Community activism</option>
                              <option value="5">Computer programming</option>
                              <option value="5">Confectionery</option>
                              <option value="5">Conlanging</option>
                              <option value="5">Construction</option>
                              <option value="5">Cooking</option>
                              <option value="5">Cosplaying</option>
                              <option value="5">Couch surfing</option>
                              <option value="5">Couponing</option>
                              <option value="5">Craft</option>
                              <option value="5">Creative writing</option>
                              <option value="5">Crocheting</option>
                              <option value="5">Cross-stitch</option>
                              <option value="5">Crossword puzzles</option>
                              <option value="5">Cryptography</option>
                              <option value="5">Cue sports</option>
                              <option value="5">Dance</option>
                              <option value="5">Decorating</option>
                              <option value="5">Digital arts</option>
                              <option value="5">Dining</option>
                              <option value="5">Diorama</option>
                              <option value="5">Distro Hopping</option>
                              <option value="5">Diving</option>
                              <option value="5">Djembe</option>
                              <option value="5">DJing</option>
                              <option value="5">Do it yourself</option>
                              <option value="5">Drama</option>
                              <option value="5">Drawing</option>
                              <option value="5">Drink mixing</option>
                              <option value="5">Electronic games</option>
                              <option value="5">Electronics</option>
                              <option value="5">Embroidery</option>
                              <option value="5">Engraving</option>
                              <option value="5">Entertaining</option>
                              <option value="5">Experimenting</option>
                              <option value="5">Fantasy sports</option>
                              <option value="5">Fashion</option>
                              <option value="5">Fashion design</option>
                              <option value="5">Feng shui decorating</option>
                              <option value="5">Filmmaking</option>
                              <option value="5">Fingerpainting</option>
                              <option value="5">Fishfarming</option>
                              <option value="5">Fishkeeping</option>
                              <option value="5">Flower arranging</option>
                              <option value="5">Fly tying</option>
                              <option value="5">Foreign language learning</option>
                              <option value="5">Furniture building</option>
                              <option value="5">Gaming</option>
                              <option value="5">Tabletop games</option>
                              <option value="5">Role-playing games</option>
                              <option value="5">Genealogy</option>
                              <option value="5">Gingerbread house making</option>
                              <option value="5">Giving advice</option>
                              <option value="5">Glassblowing</option>
                              <option value="5">Gardening</option>
                              <option value="5">Gongfu tea</option>
                              <option value="5">Graphic design</option>
                              <option value="5">Gunsmithing</option>
                              <option value="5">Hacking</option>
                              <option value="5">Hardware</option>
                              <option value="5">Herp keeping</option>
                              <option value="5">Home improvement</option>
                              <option value="5">Homebrewing</option>
                              <option value="5">Houseplant care</option>
                              <option value="5">Hula hooping</option>
                              <option value="5">Humor</option>
                              <option value="5">Hydroponics</option>
                              <option value="5">Ice skating</option>
                              <option value="5">Inventing</option>
                              <option value="5">Jewelry making</option>
                              <option value="5">Jigsaw puzzles</option>
                              <option value="5">Journaling</option>
                              <option value="5">Juggling</option>
                              <option value="5">Karaoke</option>
                              <option value="5">Karate</option>
                              <option value="5">Kendama</option>
                              <option value="5">Knife making</option>
                              <option value="5">Knot tying</option>
                              <option value="5">Kombucha brewing</option>
                              <option value="5">Kung fu</option>
                              <option value="5">Lace making</option>
                              <option value="5">Lapidary</option>
                              <option value="5">Leather crafting</option>
                              <option value="5">Lego building</option>
                              <option value="5">Livestreaming</option>
                              <option value="5">Listening to music</option>
                              <option value="5">Listening to podcasts</option>
                              <option value="5">Lock picking</option>
                              <option value="5">Machining</option>
                              <option value="5">Macrame</option>
                              <option value="5">Magic</option>
                              <option value="5">Makeup</option>
                              <option value="5">Manga</option>
                              <option value="5">Massaging</option>
                              <option value="5">Mazes indoor/outdoor</option>
                              <option value="5">Mechanics</option>
                              <option value="5">Meditation</option>
                              <option value="5">Memory training</option>
                              <option value="5">Metalworking</option>
                              <option value="5">Miniature art</option>
                              <option value="5">Minimalism</option>
                              <option value="5">Model building</option>
                              <option value="5">Modeling</option>
                              <option value="5">Model engineering</option>
                              <option value="5">Music</option>
                              <option value="5">Nail art</option>
                              <option value="5">Needlepoint</option>
                              <option value="5">Origami</option>
                              <option value="5">Painting</option>
                              <option value="5">Palmistry</option>
                              <option value="5">Pen Spinning</option>
                              <option value="5">Performance</option>
                              <option value="5">Pet</option>
                              <option value="5">Pet adoption and fostering</option>
                              <option value="5">Pet sitting</option>
                              <option value="5">Philately</option>
                              <option value="5">Photography</option>
                              <option value="5">Pilates</option>
                              <option value="5">Planning</option>
                              <option value="5">Plastic art</option>
                              <option value="5">Playing musical instruments</option>
                              <option value="5">Poetry</option>
                              <option value="5">Poi</option>
                              <option value="5">Pole dancing</option>
                              <option value="5">Postcrossing</option>
                              <option value="5">Pottery</option>
                              <option value="5">Power Nap</option>
                              <option value="5">Practical jokes</option>
                              <option value="5">Pressed flower craft</option>
                              <option value="5">Proofreading and editing</option>
                              <option value="5">Proverbs</option>
                              <option value="5">Public speaking</option>
                              <option value="5">Puppetry</option>
                              <option value="5">Puzzles</option>
                              <option value="5">Pyrography</option>
                              <option value="5">Quilling</option>
                              <option value="5">Quilting</option>
                              <option value="5">Quizzes</option>
                              <option value="5">Radio-controlled model playing</option>
                              <option value="5">Rail transport modeling</option>
                              <option value="5">Rapping</option>
                              <option value="5">Reading</option>
                              <option value="5">Recipe creation</option>
                              <option value="5">Refinishing</option>
                              <option value="5">Reiki</option>
                              <option value="5">Reviewing Gadgets</option>
                              <option value="5">Robot combat</option>
                              <option value="5">Rubik's Cube</option>
                              <option value="5">Scrapbooking</option>
                              <option value="5">Scuba Diving</option>
                              <option value="5">Sculpting</option>
                              <option value="5">Sewing</option>
                              <option value="5">Shoemaking</option>
                              <option value="5">Singing</option>
                              <option value="5">Sketching</option>
                              <option value="5">Skipping rope</option>
                              <option value="5">Slot car</option>
                              <option value="5">Soapmaking</option>
                              <option value="5">Social media</option>
                              <option value="5">Spreadsheets</option>
                              <option value="5">Stamp collecting</option>
                              <option value="5">Stand-up comedy</option>
                              <option value="5">Storytelling</option>
                              <option value="5">Stripping</option>
                              <option value="5">Sudoku</option>
                              <option value="5">Talking</option>
                              <option value="5">Tapestry</option>
                              <option value="5">Tarot</option>
                              <option value="5">Tatebanko</option>
                              <option value="5">Tattooing</option>
                              <option value="5">Taxidermy</option>
                              <option value="5">Telling jokes</option>
                              <option value="5">Thrifting</option>
                              <option value="5">Upcycling</option>
                              <option value="5">Video editing</option>
                              <option value="5">Video game developing</option>
                              <option value="5">Video making</option>
                              <option value="5">VR Gaming</option>
                              <option value="5">Watch making</option>
                              <option value="5">Watching documentaries</option>
                              <option value="5">Waxing</option>
                              <option value="5">Weaving</option>
                              <option value="5">Weight training</option>
                              <option value="5">Welding</option>
                              <option value="5">Wikipedia editing</option>
                              <option value="5">Wine tasting</option>
                              <option value="5">Wine making</option>
                              <option value="5">Wood carving</option>
                              <option value="5">Wood working</option>
                              <option value="5">Word searches</option>
                              <option value="5">Writing</option>
                              <option value="5">Writing music</option>
                              <option value="5">Yoga</option>
                              <option value="5">Zumba</option>
                            </select>
                          </div>
                        </Form.Group>
                    </div>
                   </div>

                   <div className="row">  
                    <div className="col-md-6 ">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Interest 5</label>
                          <div className="col-sm-9">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option value="" disabled selected hidden>Select Your Interest 5</option>
                              <option value="2">Acroyoga</option>
                              <option value="3">Acting</option>
                              <option value="4">Aerial silk</option>
                              <option value="5">Airbrushing</option>
                              <option value="5">mateur radio</option>
                              <option value="5">Animation</option>
                              <option value="5">Anime</option>
                              <option value="5">Aquascaping</option>
                              <option value="5">Art</option>
                              <option value="5">Astrology</option>
                              <option value="5">Baking</option>
                              <option value="5">Barbershop Music</option>
                              <option value="5">Baton twirling</option>
                              <option value="5">Beatboxing</option>
                              <option value="5">Beer tasting</option>
                              <option value="5">Bell ringing</option>
                              <option value="5">Blogging</option>
                              <option value="5">Board/tabletop games</option>
                              <option value="5">Book discussion clubs</option>
                              <option value="5">Book restoration</option>
                              <option value="5">Bowling</option>
                              <option value="5">Brazilian jiu-jitsu</option>
                              <option value="5">Breadmaking</option>
                              <option value="5">Bullet journaling</option>
                              <option value="5">Calligraphy</option>
                              <option value="5">Candle making</option>
                              <option value="5">Candy making</option>
                              <option value="5">Car fixing and building</option>
                              <option value="5">Card games</option>
                              <option value="5">Cardistry</option>
                              <option value="5">Ceramics</option>
                              <option value="5">Chatting</option>
                              <option value="5">Cheesemaking</option>
                              <option value="5">Chess</option>
                              <option value="5">Cleaning</option>
                              <option value="5">Clothe smaking</option>
                              <option value="5">Coffee roasting</option>
                              <option value="5">Collecting</option>
                              <option value="5">Coloring</option>
                              <option value="5">Communication</option>
                              <option value="5">Community activism</option>
                              <option value="5">Computer programming</option>
                              <option value="5">Confectionery</option>
                              <option value="5">Conlanging</option>
                              <option value="5">Construction</option>
                              <option value="5">Cooking</option>
                              <option value="5">Cosplaying</option>
                              <option value="5">Couch surfing</option>
                              <option value="5">Couponing</option>
                              <option value="5">Craft</option>
                              <option value="5">Creative writing</option>
                              <option value="5">Crocheting</option>
                              <option value="5">Cross-stitch</option>
                              <option value="5">Crossword puzzles</option>
                              <option value="5">Cryptography</option>
                              <option value="5">Cue sports</option>
                              <option value="5">Dance</option>
                              <option value="5">Decorating</option>
                              <option value="5">Digital arts</option>
                              <option value="5">Dining</option>
                              <option value="5">Diorama</option>
                              <option value="5">Distro Hopping</option>
                              <option value="5">Diving</option>
                              <option value="5">Djembe</option>
                              <option value="5">DJing</option>
                              <option value="5">Do it yourself</option>
                              <option value="5">Drama</option>
                              <option value="5">Drawing</option>
                              <option value="5">Drink mixing</option>
                              <option value="5">Electronic games</option>
                              <option value="5">Electronics</option>
                              <option value="5">Embroidery</option>
                              <option value="5">Engraving</option>
                              <option value="5">Entertaining</option>
                              <option value="5">Experimenting</option>
                              <option value="5">Fantasy sports</option>
                              <option value="5">Fashion</option>
                              <option value="5">Fashion design</option>
                              <option value="5">Feng shui decorating</option>
                              <option value="5">Filmmaking</option>
                              <option value="5">Fingerpainting</option>
                              <option value="5">Fishfarming</option>
                              <option value="5">Fishkeeping</option>
                              <option value="5">Flower arranging</option>
                              <option value="5">Fly tying</option>
                              <option value="5">Foreign language learning</option>
                              <option value="5">Furniture building</option>
                              <option value="5">Gaming</option>
                              <option value="5">Tabletop games</option>
                              <option value="5">Role-playing games</option>
                              <option value="5">Genealogy</option>
                              <option value="5">Gingerbread house making</option>
                              <option value="5">Giving advice</option>
                              <option value="5">Glassblowing</option>
                              <option value="5">Gardening</option>
                              <option value="5">Gongfu tea</option>
                              <option value="5">Graphic design</option>
                              <option value="5">Gunsmithing</option>
                              <option value="5">Hacking</option>
                              <option value="5">Hardware</option>
                              <option value="5">Herp keeping</option>
                              <option value="5">Home improvement</option>
                              <option value="5">Homebrewing</option>
                              <option value="5">Houseplant care</option>
                              <option value="5">Hula hooping</option>
                              <option value="5">Humor</option>
                              <option value="5">Hydroponics</option>
                              <option value="5">Ice skating</option>
                              <option value="5">Inventing</option>
                              <option value="5">Jewelry making</option>
                              <option value="5">Jigsaw puzzles</option>
                              <option value="5">Journaling</option>
                              <option value="5">Juggling</option>
                              <option value="5">Karaoke</option>
                              <option value="5">Karate</option>
                              <option value="5">Kendama</option>
                              <option value="5">Knife making</option>
                              <option value="5">Knot tying</option>
                              <option value="5">Kombucha brewing</option>
                              <option value="5">Kung fu</option>
                              <option value="5">Lace making</option>
                              <option value="5">Lapidary</option>
                              <option value="5">Leather crafting</option>
                              <option value="5">Lego building</option>
                              <option value="5">Livestreaming</option>
                              <option value="5">Listening to music</option>
                              <option value="5">Listening to podcasts</option>
                              <option value="5">Lock picking</option>
                              <option value="5">Machining</option>
                              <option value="5">Macrame</option>
                              <option value="5">Magic</option>
                              <option value="5">Makeup</option>
                              <option value="5">Manga</option>
                              <option value="5">Massaging</option>
                              <option value="5">Mazes indoor/outdoor</option>
                              <option value="5">Mechanics</option>
                              <option value="5">Meditation</option>
                              <option value="5">Memory training</option>
                              <option value="5">Metalworking</option>
                              <option value="5">Miniature art</option>
                              <option value="5">Minimalism</option>
                              <option value="5">Model building</option>
                              <option value="5">Modeling</option>
                              <option value="5">Model engineering</option>
                              <option value="5">Music</option>
                              <option value="5">Nail art</option>
                              <option value="5">Needlepoint</option>
                              <option value="5">Origami</option>
                              <option value="5">Painting</option>
                              <option value="5">Palmistry</option>
                              <option value="5">Pen Spinning</option>
                              <option value="5">Performance</option>
                              <option value="5">Pet</option>
                              <option value="5">Pet adoption and fostering</option>
                              <option value="5">Pet sitting</option>
                              <option value="5">Philately</option>
                              <option value="5">Photography</option>
                              <option value="5">Pilates</option>
                              <option value="5">Planning</option>
                              <option value="5">Plastic art</option>
                              <option value="5">Playing musical instruments</option>
                              <option value="5">Poetry</option>
                              <option value="5">Poi</option>
                              <option value="5">Pole dancing</option>
                              <option value="5">Postcrossing</option>
                              <option value="5">Pottery</option>
                              <option value="5">Power Nap</option>
                              <option value="5">Practical jokes</option>
                              <option value="5">Pressed flower craft</option>
                              <option value="5">Proofreading and editing</option>
                              <option value="5">Proverbs</option>
                              <option value="5">Public speaking</option>
                              <option value="5">Puppetry</option>
                              <option value="5">Puzzles</option>
                              <option value="5">Pyrography</option>
                              <option value="5">Quilling</option>
                              <option value="5">Quilting</option>
                              <option value="5">Quizzes</option>
                              <option value="5">Radio-controlled model playing</option>
                              <option value="5">Rail transport modeling</option>
                              <option value="5">Rapping</option>
                              <option value="5">Reading</option>
                              <option value="5">Recipe creation</option>
                              <option value="5">Refinishing</option>
                              <option value="5">Reiki</option>
                              <option value="5">Reviewing Gadgets</option>
                              <option value="5">Robot combat</option>
                              <option value="5">Rubik's Cube</option>
                              <option value="5">Scrapbooking</option>
                              <option value="5">Scuba Diving</option>
                              <option value="5">Sculpting</option>
                              <option value="5">Sewing</option>
                              <option value="5">Shoemaking</option>
                              <option value="5">Singing</option>
                              <option value="5">Sketching</option>
                              <option value="5">Skipping rope</option>
                              <option value="5">Slot car</option>
                              <option value="5">Soapmaking</option>
                              <option value="5">Social media</option>
                              <option value="5">Spreadsheets</option>
                              <option value="5">Stamp collecting</option>
                              <option value="5">Stand-up comedy</option>
                              <option value="5">Storytelling</option>
                              <option value="5">Stripping</option>
                              <option value="5">Sudoku</option>
                              <option value="5">Talking</option>
                              <option value="5">Tapestry</option>
                              <option value="5">Tarot</option>
                              <option value="5">Tatebanko</option>
                              <option value="5">Tattooing</option>
                              <option value="5">Taxidermy</option>
                              <option value="5">Telling jokes</option>
                              <option value="5">Thrifting</option>
                              <option value="5">Upcycling</option>
                              <option value="5">Video editing</option>
                              <option value="5">Video game developing</option>
                              <option value="5">Video making</option>
                              <option value="5">VR Gaming</option>
                              <option value="5">Watch making</option>
                              <option value="5">Watching documentaries</option>
                              <option value="5">Waxing</option>
                              <option value="5">Weaving</option>
                              <option value="5">Weight training</option>
                              <option value="5">Welding</option>
                              <option value="5">Wikipedia editing</option>
                              <option value="5">Wine tasting</option>
                              <option value="5">Wine making</option>
                              <option value="5">Wood carving</option>
                              <option value="5">Wood working</option>
                              <option value="5">Word searches</option>
                              <option value="5">Writing</option>
                              <option value="5">Writing music</option>
                              <option value="5">Yoga</option>
                              <option value="5">Zumba</option>
                            </select>
                          </div>
                        </Form.Group>
                    </div>
                    <div className="col-md-6 ">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Interest 6</label>
                          <div className="col-sm-9">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option value="" disabled selected hidden>Select Your Interest 6</option>
                              <option value="2">Acroyoga</option>
                              <option value="3">Acting</option>
                              <option value="4">Aerial silk</option>
                              <option value="5">Airbrushing</option>
                              <option value="5">mateur radio</option>
                              <option value="5">Animation</option>
                              <option value="5">Anime</option>
                              <option value="5">Aquascaping</option>
                              <option value="5">Art</option>
                              <option value="5">Astrology</option>
                              <option value="5">Baking</option>
                              <option value="5">Barbershop Music</option>
                              <option value="5">Baton twirling</option>
                              <option value="5">Beatboxing</option>
                              <option value="5">Beer tasting</option>
                              <option value="5">Bell ringing</option>
                              <option value="5">Blogging</option>
                              <option value="5">Board/tabletop games</option>
                              <option value="5">Book discussion clubs</option>
                              <option value="5">Book restoration</option>
                              <option value="5">Bowling</option>
                              <option value="5">Brazilian jiu-jitsu</option>
                              <option value="5">Breadmaking</option>
                              <option value="5">Bullet journaling</option>
                              <option value="5">Calligraphy</option>
                              <option value="5">Candle making</option>
                              <option value="5">Candy making</option>
                              <option value="5">Car fixing and building</option>
                              <option value="5">Card games</option>
                              <option value="5">Cardistry</option>
                              <option value="5">Ceramics</option>
                              <option value="5">Chatting</option>
                              <option value="5">Cheesemaking</option>
                              <option value="5">Chess</option>
                              <option value="5">Cleaning</option>
                              <option value="5">Clothe smaking</option>
                              <option value="5">Coffee roasting</option>
                              <option value="5">Collecting</option>
                              <option value="5">Coloring</option>
                              <option value="5">Communication</option>
                              <option value="5">Community activism</option>
                              <option value="5">Computer programming</option>
                              <option value="5">Confectionery</option>
                              <option value="5">Conlanging</option>
                              <option value="5">Construction</option>
                              <option value="5">Cooking</option>
                              <option value="5">Cosplaying</option>
                              <option value="5">Couch surfing</option>
                              <option value="5">Couponing</option>
                              <option value="5">Craft</option>
                              <option value="5">Creative writing</option>
                              <option value="5">Crocheting</option>
                              <option value="5">Cross-stitch</option>
                              <option value="5">Crossword puzzles</option>
                              <option value="5">Cryptography</option>
                              <option value="5">Cue sports</option>
                              <option value="5">Dance</option>
                              <option value="5">Decorating</option>
                              <option value="5">Digital arts</option>
                              <option value="5">Dining</option>
                              <option value="5">Diorama</option>
                              <option value="5">Distro Hopping</option>
                              <option value="5">Diving</option>
                              <option value="5">Djembe</option>
                              <option value="5">DJing</option>
                              <option value="5">Do it yourself</option>
                              <option value="5">Drama</option>
                              <option value="5">Drawing</option>
                              <option value="5">Drink mixing</option>
                              <option value="5">Electronic games</option>
                              <option value="5">Electronics</option>
                              <option value="5">Embroidery</option>
                              <option value="5">Engraving</option>
                              <option value="5">Entertaining</option>
                              <option value="5">Experimenting</option>
                              <option value="5">Fantasy sports</option>
                              <option value="5">Fashion</option>
                              <option value="5">Fashion design</option>
                              <option value="5">Feng shui decorating</option>
                              <option value="5">Filmmaking</option>
                              <option value="5">Fingerpainting</option>
                              <option value="5">Fishfarming</option>
                              <option value="5">Fishkeeping</option>
                              <option value="5">Flower arranging</option>
                              <option value="5">Fly tying</option>
                              <option value="5">Foreign language learning</option>
                              <option value="5">Furniture building</option>
                              <option value="5">Gaming</option>
                              <option value="5">Tabletop games</option>
                              <option value="5">Role-playing games</option>
                              <option value="5">Genealogy</option>
                              <option value="5">Gingerbread house making</option>
                              <option value="5">Giving advice</option>
                              <option value="5">Glassblowing</option>
                              <option value="5">Gardening</option>
                              <option value="5">Gongfu tea</option>
                              <option value="5">Graphic design</option>
                              <option value="5">Gunsmithing</option>
                              <option value="5">Hacking</option>
                              <option value="5">Hardware</option>
                              <option value="5">Herp keeping</option>
                              <option value="5">Home improvement</option>
                              <option value="5">Homebrewing</option>
                              <option value="5">Houseplant care</option>
                              <option value="5">Hula hooping</option>
                              <option value="5">Humor</option>
                              <option value="5">Hydroponics</option>
                              <option value="5">Ice skating</option>
                              <option value="5">Inventing</option>
                              <option value="5">Jewelry making</option>
                              <option value="5">Jigsaw puzzles</option>
                              <option value="5">Journaling</option>
                              <option value="5">Juggling</option>
                              <option value="5">Karaoke</option>
                              <option value="5">Karate</option>
                              <option value="5">Kendama</option>
                              <option value="5">Knife making</option>
                              <option value="5">Knot tying</option>
                              <option value="5">Kombucha brewing</option>
                              <option value="5">Kung fu</option>
                              <option value="5">Lace making</option>
                              <option value="5">Lapidary</option>
                              <option value="5">Leather crafting</option>
                              <option value="5">Lego building</option>
                              <option value="5">Livestreaming</option>
                              <option value="5">Listening to music</option>
                              <option value="5">Listening to podcasts</option>
                              <option value="5">Lock picking</option>
                              <option value="5">Machining</option>
                              <option value="5">Macrame</option>
                              <option value="5">Magic</option>
                              <option value="5">Makeup</option>
                              <option value="5">Manga</option>
                              <option value="5">Massaging</option>
                              <option value="5">Mazes (indoor/outdoor)</option>
                              <option value="5">Mechanics</option>
                              <option value="5">Meditation</option>
                              <option value="5">Memory training</option>
                              <option value="5">Metalworking</option>
                              <option value="5">Miniature art</option>
                              <option value="5">Minimalism</option>
                              <option value="5">Model building</option>
                              <option value="5">Modeling</option>
                              <option value="5">Model engineering</option>
                              <option value="5">Music</option>
                              <option value="5">Nail art</option>
                              <option value="5">Needlepoint</option>
                              <option value="5">Origami</option>
                              <option value="5">Painting</option>
                              <option value="5">Palmistry</option>
                              <option value="5">Pen Spinning</option>
                              <option value="5">Performance</option>
                              <option value="5">Pet</option>
                              <option value="5">Pet adoption and fostering</option>
                              <option value="5">Pet sitting</option>
                              <option value="5">Philately</option>
                              <option value="5">Photography</option>
                              <option value="5">Pilates</option>
                              <option value="5">Planning</option>
                              <option value="5">Plastic art</option>
                              <option value="5">Playing musical instruments</option>
                              <option value="5">Poetry</option>
                              <option value="5">Poi</option>
                              <option value="5">Pole dancing</option>
                              <option value="5">Postcrossing</option>
                              <option value="5">Pottery</option>
                              <option value="5">Power Nap</option>
                              <option value="5">Practical jokes</option>
                              <option value="5">Pressed flower craft</option>
                              <option value="5">Proofreading and editing</option>
                              <option value="5">Proverbs</option>
                              <option value="5">Public speaking</option>
                              <option value="5">Puppetry</option>
                              <option value="5">Puzzles</option>
                              <option value="5">Pyrography</option>
                              <option value="5">Quilling</option>
                              <option value="5">Quilting</option>
                              <option value="5">Quizzes</option>
                              <option value="5">Radio-controlled model playing</option>
                              <option value="5">Rail transport modeling</option>
                              <option value="5">Rapping</option>
                              <option value="5">Reading</option>
                              <option value="5">Recipe creation</option>
                              <option value="5">Refinishing</option>
                              <option value="5">Reiki</option>
                              <option value="5">Reviewing Gadgets</option>
                              <option value="5">Robot combat</option>
                              <option value="5">Rubik's Cube</option>
                              <option value="5">Scrapbooking</option>
                              <option value="5">Scuba Diving</option>
                              <option value="5">Sculpting</option>
                              <option value="5">Sewing</option>
                              <option value="5">Shoemaking</option>
                              <option value="5">Singing</option>
                              <option value="5">Sketching</option>
                              <option value="5">Skipping rope</option>
                              <option value="5">Slot car</option>
                              <option value="5">Soapmaking</option>
                              <option value="5">Social media</option>
                              <option value="5">Spreadsheets</option>
                              <option value="5">Stamp collecting</option>
                              <option value="5">Stand-up comedy</option>
                              <option value="5">Storytelling</option>
                              <option value="5">Stripping</option>
                              <option value="5">Sudoku</option>
                              <option value="5">Talking</option>
                              <option value="5">Tapestry</option>
                              <option value="5">Tarot</option>
                              <option value="5">Tatebanko</option>
                              <option value="5">Tattooing</option>
                              <option value="5">Taxidermy</option>
                              <option value="5">Telling jokes</option>
                              <option value="5">Thrifting</option>
                              <option value="5">Upcycling</option>
                              <option value="5">Video editing</option>
                              <option value="5">Video game developing</option>
                              <option value="5">Video making</option>
                              <option value="5">VR Gaming</option>
                              <option value="5">Watch making</option>
                              <option value="5">Watching documentaries</option>
                              <option value="5">Waxing</option>
                              <option value="5">Weaving</option>
                              <option value="5">Weight training</option>
                              <option value="5">Welding</option>
                              <option value="5">Wikipedia editing</option>
                              <option value="5">Wine tasting</option>
                              <option value="5">Wine making</option>
                              <option value="5">Wood carving</option>
                              <option value="5">Wood working</option>
                              <option value="5">Word searches</option>
                              <option value="5">Writing</option>
                              <option value="5">Writing music</option>
                              <option value="5">Yoga</option>
                              <option value="5">Zumba</option>
                            </select>
                          </div>
                        </Form.Group>
                    </div>
                   </div>
                   



                  {/* <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button> */}
                
                </form>
              </div>
            </div>
          </div>

          {/* // Personal Detail section ends here. */}




          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Educational Hobbies details</h4>
                <form className="form-sample">
                  <p className="card-description"> Select 4 Educational Interest.</p>
                  

                  
                  <div className="row">  
                    
                    <div className="col-md-6 ">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Education 1</label>
                          <div className="col-sm-9">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option value="" disabled selected hidden>Select Your Interest 1</option>
                              <option value="2">Archaeology</option>
                              <option value="3">Astronomy</option>
                              <option value="4">Animation</option>
                              <option value="5">Aerospace</option>
                              <option value="5">Biology</option>
                              <option value="5">Botany</option>
                              <option value="5">Business</option>
                              <option value="5">Chemistry</option>
                              <option value="5">English</option>
                              <option value="5">Entrepreneurship</option>
                              <option value="5">Geography</option>
                              <option value="5">History</option>
                              <option value="5">Mathematics</option>
                              <option value="5">Medical science</option>
                              <option value="5">Microbiology</option>
                              <option value="5">Mycology</option>
                              <option value="5">Philosophy</option>
                              <option value="5">Physics</option>
                              <option value="5">Psychology</option>
                              <option value="5">Railway studies</option>
                              <option value="5">Research</option>
                              <option value="5">Science and technology studies</option>
                              <option value="5">Social studies</option>
                              <option value="5">Sociology</option>
                              <option value="5">Sports science</option>
                              <option value="5">Life Science</option>
                              <option value="5">Teaching</option>
                              <option value="Web design">Web design</option>
                            </select>
                          </div>
                        </Form.Group>
                    </div>
                    <div className="col-md-6 ">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Education 1</label>
                          <div className="col-sm-9">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option value="" disabled selected hidden>Select Your Interest 1</option>
                              <option value="2">Archaeology</option>
                              <option value="3">Astronomy</option>
                              <option value="4">Animation</option>
                              <option value="5">Aerospace</option>
                              <option value="5">Biology</option>
                              <option value="5">Botany</option>
                              <option value="5">Business</option>
                              <option value="5">Chemistry</option>
                              <option value="5">English</option>
                              <option value="5">Entrepreneurship</option>
                              <option value="5">Geography</option>
                              <option value="5">History</option>
                              <option value="5">Mathematics</option>
                              <option value="5">Medical science</option>
                              <option value="5">Microbiology</option>
                              <option value="5">Mycology</option>
                              <option value="5">Philosophy</option>
                              <option value="5">Physics</option>
                              <option value="5">Psychology</option>
                              <option value="5">Railway studies</option>
                              <option value="5">Research</option>
                              <option value="5">Science and technology studies</option>
                              <option value="5">Social studies</option>
                              <option value="5">Sociology</option>
                              <option value="5">Sports science</option>
                              <option value="5">Life Science</option>
                              <option value="5">Teaching</option>
                              <option value="Web design">Web design</option>
                            </select>
                          </div>
                        </Form.Group>
                    </div>
                   </div>


                   <div className="row">  
                    
                    <div className="col-md-6 ">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Education 1</label>
                          <div className="col-sm-9">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option value="" disabled selected hidden>Select Your Interest 1</option>
                              <option value="2">Archaeology</option>
                              <option value="3">Astronomy</option>
                              <option value="4">Animation</option>
                              <option value="5">Aerospace</option>
                              <option value="5">Biology</option>
                              <option value="5">Botany</option>
                              <option value="5">Business</option>
                              <option value="5">Chemistry</option>
                              <option value="5">English</option>
                              <option value="5">Entrepreneurship</option>
                              <option value="5">Geography</option>
                              <option value="5">History</option>
                              <option value="5">Mathematics</option>
                              <option value="5">Medical science</option>
                              <option value="5">Microbiology</option>
                              <option value="5">Mycology</option>
                              <option value="5">Philosophy</option>
                              <option value="5">Physics</option>
                              <option value="5">Psychology</option>
                              <option value="5">Railway studies</option>
                              <option value="5">Research</option>
                              <option value="5">Science and technology studies</option>
                              <option value="5">Social studies</option>
                              <option value="5">Sociology</option>
                              <option value="5">Sports science</option>
                              <option value="5">Life Science</option>
                              <option value="5">Teaching</option>
                              <option value="Web design">Web design</option>
                            </select>
                          </div>
                        </Form.Group>
                    </div>
                    <div className="col-md-6 ">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Education 1</label>
                          <div className="col-sm-9">
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option value="" disabled selected hidden>Select Your Interest 1</option>
                              <option value="2">Archaeology</option>
                              <option value="3">Astronomy</option>
                              <option value="4">Animation</option>
                              <option value="5">Aerospace</option>
                              <option value="5">Biology</option>
                              <option value="5">Botany</option>
                              <option value="5">Business</option>
                              <option value="5">Chemistry</option>
                              <option value="5">English</option>
                              <option value="5">Entrepreneurship</option>
                              <option value="5">Geography</option>
                              <option value="5">History</option>
                              <option value="5">Mathematics</option>
                              <option value="5">Medical science</option>
                              <option value="5">Microbiology</option>
                              <option value="5">Mycology</option>
                              <option value="5">Philosophy</option>
                              <option value="5">Physics</option>
                              <option value="5">Psychology</option>
                              <option value="5">Railway studies</option>
                              <option value="5">Research</option>
                              <option value="5">Science and technology studies</option>
                              <option value="5">Social studies</option>
                              <option value="5">Sociology</option>
                              <option value="5">Sports science</option>
                              <option value="5">Life Science</option>
                              <option value="5">Teaching</option>
                              <option value="Web design">Web design</option>
                            </select>
                          </div>
                        </Form.Group>
                    </div>
                   </div>


                   
                   



                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button>
                
                </form>
              </div>
            </div>
          </div>

          {/* // Personal Detail section ends here. */}

          </>
          
      )
        
    }

}

export default Forms;