import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

export default class Example extends React.Component {
    render() {
        return (
            <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md bg-success">
                       <div class="customDiv">Split wise</div>

                    </div>

                </div>
            </div>


            <div class="container-fluid">
            <div class="row">
            <div class="col-md bg-success">
                <div class="customDiv1">Lorem ipsum dolor sit amet, cibo sensibus interesset no sit. Et dolor possim volutpat qui. No malis tollit iriure eam, et vel tale zril blandit, rebum vidisse nostrum qui eu. No nostrud dolorem legendos mea, ea eum mucius oporteat platonem.Eam an case scribentur, ei clita causae cum, alia debet eu vel.</div>
            </div>
            <div class="col-md-6">
                <div class="customDiv1"> 1 of 4
                    <button type="button" class="btn btn-success">Add Bill</button>
                    <button type="button" class="btn btn-info">Settle Up</button>
                </div>
            </div>
            <div class="col-md bg-success">
                <div class="customDiv1"> 1 of 4</div>
            </div>
    </div>
    </div>

            </div>
    );
    }
}