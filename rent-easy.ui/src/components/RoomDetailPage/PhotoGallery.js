import React from 'react';

class PhotoGallery extends React.Component {
  render() {
    const { images } = this.props;
    let allImgs;
    if (images !== undefined) {
      allImgs = images.map((img) => <img src={`data:image/jpg;base64,${img.url}`} key={img.id} alt="..." />);
    }
    return (
      <React.Fragment>
          {allImgs}
      </React.Fragment>
    );
  }
}


export default PhotoGallery;
