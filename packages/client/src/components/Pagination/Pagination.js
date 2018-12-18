import React, { Component } from 'react';
import './Pagination.css';
import _ from 'lodash';


export default class Pagination extends Component {
  
  constructor(props){
    super(props)
    console.log('props.itemsCount' + props.itemsCount);
    console.log('props.pageSize' + this.props.pageSize);

    this.pageCount = Math.ceil(props.itemsCount/this.props.pageSize);
    this.pages = _.range(1,this.pageCount+1);
    console.log('this.pageCount' + this.pageCount);
    console.log('this.pages' + this.pages);

  }

  render() {
    if (this.pageCount === 1){
      return null
    }
    return (
      <div id={this.props.id} className={this.props.className}>
        <nav>
          <ul className="pagination">
            {this.pages.map(page =>{
              return(
                <li className={page === this.props.currentPage ? 'page-item active' :'page-item '}>
                <a className="page-link" onClick={()=>this.props.onPageChange(page)}>{page}</a>
              </li>
              )
            })}
          </ul>
          
        </nav>
      </div>
    );
  }
}

