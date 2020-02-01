import React from 'react';

import './RoomDetailPage.scss';

class RoomDetailPage extends React.Component {
  render() {
    const img = ('https://images.unsplash.com/photo-1559701242-5cc500df3e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
    return (
      <div className="RoomDetailPage">
        <div className="main">
          <div className="content">
            <div className="left">
              <div className="img-container">
                <img src="https://images.unsplash.com/photo-1580259348994-343cba02b738?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80" alt="room" title="room" />
              </div>
            </div>

            <div className="right">
              <div className="img-wrap-one">
                <img src={img} alt="room" />
                <img src={img} alt="room" />
              </div>

              <div className="img-wrap-two">
                <img src={img} alt="room" />
                <img src={img} alt="room" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomDetailPage;
