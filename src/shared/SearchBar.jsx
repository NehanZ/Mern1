import React,{useRef} from "react"; 
import "./searchbar.css";
import {Col, Form, FormGroup } from "reactstrap"; 

const SearchBar = () =>{

    const checkinRef = useRef('')
    const checkoutRef = useRef(0)
    const countRef = useRef(0)

    const searchHandler = ()=>{
        const checkin = checkinRef.current.value
        const checkout = checkoutRef.current.value
        const countSize = countRef.current.value

        if (checkin === "" || checkout === "" || countSize === ""){
        return alert("All fields are required!");
        }
    }    



    return (
      <Col lg="12">
            <div className="search_bar">
            <Form className="search_bar d-flex align-items-center gap-4">
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                    <span>
                        <i className="ri-calendar-check-line"></i>
                    </span>
                    <div>
                        <h6>Check in</h6>
                        <input type="date" placeholder="Where are you going?" ref={checkinRef} />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                    <span>
                    <i className="ri-calendar-check-line"></i>
                    </span>
                    <div>
                        <h6>Check out</h6>
                        <input type="date" placeholder="Where are you going?" ref={checkoutRef} />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                    <span>
                    <i class="ri-user-3-line"></i>
                    </span>
                    <div>
                        <h6>Adults</h6>
                        <input type="number" placeholder="Where are you going?" ref={countRef}/>
                    </div>
                </FormGroup>
                <span className="search__icon" onClick={searchHandler}>
                    <i className="ri-search-line"></i>
                </span>
            </Form>
            </div>
        </Col>
    );
};
export default SearchBar;