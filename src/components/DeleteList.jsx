import React, {Component} from 'react';
import {toggleVisibility} from '../actions/actions.js';

class DeleteList extends Component {

	constructor({todos, dispatch}) {
		super();
		this._todos = todos.filter(item =>  item.status === 'deleted' );
		this.dispatch = dispatch;
	}

	componentWillMount() {
		this.dispatch(toggleVisibility(false));
	}

	componentWillUpdate({todos, dispatch}) {
		this._todos = todos.filter(item =>  item.status === 'deleted' );
	}
	
	render() {
		return (
			<div className="list-view">
				<ol>
					{this._todos.map(item => (
						<li key={item.id}>
							<div className="list-item">
								<div className="item-title">
									<div className="rounded-checkbox">
										<input id={`checkbox_${item.id}`} type="checkbox" value={item.id}/>
										<label htmlFor={`checkbox_${item.id}`}></label>	
									</div>	
									{item.title}
								</div>
								{item.description}
							</div>
						</li>
						)
					)}
				</ol>
			</div>
		);
	}
	
}


export default DeleteList;
