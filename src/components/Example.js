import React from 'react';

export const Example = (props) => {
  var index = props.match.params.number;
  console.log(index);
  if(props.data.length > 0) {
    var item = props.data[index];
    console.log(item);

    var iframeLink = item.link[0].replace('/pen/', '/embed/');
    iframeLink = `${iframeLink}/?theme-id=0&default-tab=result&embed-version=2&editable=true`;

    return(
      <div className="f_item">
        <h2>{item.title[0]}</h2>
        <iframe
          title={item.title[0]}
          name={item.title[0]}
          src={iframeLink}
          sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-modals allow-forms"
          allowTransparency="true"
          frameBorder="0"
          scrolling="yes"
          allowFullScreen="true"
        >
        </iframe>
      </div>
    )
  } else {
    return (
      <div className="Loader">

      </div>
    )
  }
}
