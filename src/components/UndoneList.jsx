import React , { Component } from 'react';
import {modifyDesc , toggleVisibility} from '../actions/actions.js';


class UndoneList extends Component{

	constructor({todos , dispatch}){
		super();

		this._todos = todos.filter(item =>  item.status === 'undone' )
		this.dispatch = dispatch;
	}

	componentWillMount(){
		this.dispatch(toggleVisibility(true));
	}

	componentWillUpdate({todos , dispatch}){
		this._todos = todos.filter(item =>  item.status === 'undone' );
	}

	itemDescChange = (event) => {
		this.dispatch(modifyDesc(event.target.dataset.id , event.target.value));
	}

	respAreaHeight = (event) => {
		const dom = event.nativeEvent.target;
		dom.style.height = dom.scrollHeight+"px";
		dom.style.height += "30px";
	}

	render() {
		return (
			<div className="list-view">
				<ol>
					{this._todos.map((item, index) => {

							return (
								<li key={item.id}>
									<div className="list-item">
										<div className="item-title">
											<div className="rounded-checkbox">
												<input id={`checkbox_${item.id}`} type="checkbox" value={item.id}/>
												<label htmlFor={`checkbox_${item.id}`}></label>	
											</div>	
											{item.title}
										</div>
										<textarea rows="1" data-id={item.id} placeholder="請輸入描述" value={item.description} onChange={this.itemDescChange} onScroll={this.respAreaHeight}></textarea>
									</div>
								</li>
							)
						}
					)}
				</ol>
			</div>
		);
	}
	
}

export default UndoneList;