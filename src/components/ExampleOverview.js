import React from 'react';

export const ExampleOverview = (props) => {
  var data = props.data;
  if(data.length > 0) {
    return (
      <div className='overview_wrapper'>
        <h1>Overview</h1>
        {
          data.map((item, i) => {
            var iframeLink = item.link[0]+ '/image/small.png';
            return (
              <div className="f_item" key={i}>
                <h3>{item.title[0]}</h3>
                <div className="image_wrapper">
                  <img
                    className="overview_frame"
                    alt={item.title[0]}
                    src={iframeLink}
                  />
                </div>

              </div>
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div className='loader'>

      </div>
    )
  }
}
