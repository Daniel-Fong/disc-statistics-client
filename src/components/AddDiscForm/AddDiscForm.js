import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Required, Label } from '../Form/Form';
import DiscApiService from '../../services/disc-api-service';
import cx from 'classnames';
import styles from './AddDiscForm.scss';

class AddDiscForm extends Component {
    state = {
      error: null,
      imgSrc: null
    };
  
    firstInput = React.createRef();
  
    // beginUpload = e => {
    //   e.preventDefault();
  
    //   const uploadOptions = {
    //     cloudName: 'mmpr',
    //     uploadPreset: 'upload',
    //     resourceType: 'image',
    //     multiple: false,
    //     theme: 'minimal',
    //     maxImageFileSize: 1500000 //1.5MB
    //   };
  
    //   openUploadWidget(uploadOptions, (error, photos) => {
    //     if (!error) {
    //       if (photos.event === 'success') {
    //         this.setState({
    //           imgSrc: photos.info.secure_url
    //         });
    //       }
    //     } else {
    //     }
    //   });
    // };
  
    displayPreview() {
      let image;
  
      if (this.state.imgSrc === null) {
        image = (
          <img
            className={styles.defaultImage}
            src="https://image.flaticon.com/icons/svg/166/166277.svg"
            alt="default"
          />
        );
      } else if (this.state.imgSrc) {
        image = (
          <img
            className={styles.uploadedImage}
            src={this.state.imgSrc}
            alt="Uploaded Disc"
          />
        );
      }
      return image;
    }
  
    handleSubmit = e => {
      e.preventDefault();
      const { name, brand, mold, type, plastic, stability, primaryColor, secondaryColor, speed, glide, turn, fade } = e.target;
  
      let img_src = '';
      let img_alt = '';
  
      if (this.state.imgSrc) {
        img_src = this.state.imgSrc;
        img_alt = `${username.value} Profile Picture`;
      } else if (!this.state.imgSrc) {
        img_src =
          'https://res.cloudinary.com/mmpr/image/upload/v1588908186/user_knxeok.png';
        img_alt = 'Default Profile';
      }
  
      DiscApiService.addDisc({
        name: name.value,
        brand: brand.value,
        mold: mold.value,
        type: type.value,
        plastic: plastic.value,
        stability: stability.value,
        primaryColor: primaryColor.value,
        secondaryColor: secondaryColor.value,
        speed: speed.value,
        glide: glide.value,
        turn: turn.value,
        fade: fade.value,
        img_src,
        img_alt
      })
        .then(disc => {
          name.value = '';
          brand.value = '';
          mold.value = '';
          type.value = '';
          plastic.value = '';
          stability.value = '';
          primaryColor.value = '';
          secondaryColor.value = '';
          speed.value = '';
          glide.value = '';
          turn.value = '';
          fade.value = '';
        })
        .catch(res => {
          this.setState({ error: res.error });
        });
     };
  
    render() {
      const { error } = this.state;
      return (
        <form
          onSubmit={e => {
            this.setState({ isRegistering: true });
            this.handleSubmit(e);
          }}
          className={styles.addDiscForm}
          autoComplete="off">
          <div role="alert">{error ? <p>{error}</p> : null}</div>
          <h2 className={styles.addDiscHeader}>Sign Up</h2>
          <div className={styles.inputContainer}>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-name-input"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Enter disc</span> name:
                <Required />
              </Label>
              <Input
                ref={this.firstInput}
                id="disc-name-input"
                name="name"
                placeholder="Beat in Star Wraith"
                className={styles.addDiscInput}
                required
                maxLength="30"
                autoComplete="off"
              />
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-brand-input"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Enter disc</span> brand:
                <Required />
              </Label>
              <Input
                id="disc-brand-input"
                name="brand"
                placeholder="Innova"
                className={styles.addDiscInput}
                required
                maxLength="20"
                autoComplete="off"
              />
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-mold-input"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Enter disc</span> mold:
                <Required />
              </Label>
              <Input
                id="disc-mold-input"
                name="mold"
                placeholder="Wraith"
                className={styles.addDiscInput}
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-type-select"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select disc</span> type:
                <Required />
              </Label>
              <select
                id="disc-type-select"
                name="type"
                className={styles.addDiscSelect}
              >
                <option value='Putter' default>Putter</option>
                <option value='Approach'>Approach</option>s
                <option value='Midrange'>Midrange</option>
                <option value='Fairway'>Fairway Driver</option>
                <option value='Control'>Control Driver</option>
                <option value='Distance'>Distance Driver</option>
              </select>
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-plastic-input"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Enter disc</span> plastic:
                <Required />
              </Label>
              <Input
                id="disc-plastic-input"
                name="plastic"
                placeholder="Star"
                className={styles.addDiscInput}
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-stability-select"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select disc</span> stability:
                <Required />
              </Label>
              <select
                id="disc-stability-select"
                name="stability"
                className={styles.addDiscSelect}
              >
                <option value='Stable'>Stable</option>
                <option value='Over'>Overstable</option>
                <option value='Under'>Understable</option>
                <option value='VeryOver'>Very Overstable</option>
                <option value='VeryUnder'>Very Understable</option>
              </select>
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-primaryColor-select"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select disc</span> primary color:
                <Required />
              </Label>
              <select
                id="disc-primaryColor-select"
                name="primaryColor"
                className={styles.addDiscSelect}
              >
                <option value='Red'>Red</option>
                <option value='Orange'>Orange</option>
                <option value='Yellow'>Yellow</option>
                <option value='Green'>Green</option>
                <option value='Teal'>Teal</option>
                <option value='Blue'>Blue</option>
                <option value='Purple'>Purple</option>
                <option value='Pink'>Pink</option>
                <option value='White'>White</option>
                <option value='Black'>Black</option>
                <option value='Brown'>Brown</option>
                <option value='Grey'>Grey</option>
              </select>
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-secondaryColor-select"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select disc</span> secondary color:
                <Required />
              </Label>
              <select
                id="disc-secondaryColor-select"
                name="secondaryColor"
                className={styles.addDiscSelect}
              >
                <option value='None' default>None</option>
                <option value='Red'>Red</option>
                <option value='Orange'>Orange</option>
                <option value='Yellow'>Yellow</option>
                <option value='Green'>Green</option>
                <option value='Teal'>Teal</option>
                <option value='Blue'>Blue</option>
                <option value='Purple'>Purple</option>
                <option value='Pink'>Pink</option>
                <option value='White'>White</option>
                <option value='Black'>Black</option>
                <option value='Brown'>Brown</option>
                <option value='Grey'>Grey</option>
              </select>
            </div>
            <div className={styles.uploadContainer}>
              <button
                className={styles.uploadButton}
                onClick={e => this.beginUpload(e)}>
                <span className={styles.uploadText}>Upload Disc Photo</span>
              </button>
              {this.displayPreview()}
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-speed-select"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select disc</span> speed:
                <Required />
              </Label>
              <select
                id="disc-speed-select"
                name="speed"
                className={styles.addDiscSelect}
              >
                <option value='1' default>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
              </select>
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-glide-select"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select disc</span> glide:
                <Required />
              </Label>
              <select
                id="disc-glide-select"
                name="glide"
                className={styles.addDiscSelect}
              >
                <option value='1' default>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
              </select>
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-turn-select"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select disc</span> turn:
                <Required />
              </Label>
              <select
                id="disc-turn-select"
                name="turn"
                className={styles.addDiscSelect}
              >
                <option value='1' default>1</option>
                <option value='-1'>-1</option>
                <option value='-2'>-2</option>
                <option value='-3'>-3</option>
                <option value='-4'>-4</option>
                <option value='-5'>-5</option>
              </select>
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-fade-select"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select disc</span> fade:
                <Required />
              </Label>
              <select
                id="disc-fade-select"
                name="fade"
                className={styles.addDiscSelect}
              >
                <option value='0' default>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                className={styles.addCommentLabel}
                htmlFor="disc-notes">
                Add Comment:
              </Label>
              <textarea
                name="notes"
                id="disc-notes"
                className={styles.contentInput}
                placeholder="First distance driver I owned and really enjoyed throwing"
                rows="10"
                maxLength="500"
                required
                // onChange={e =>
                //   this.updateField('description', e.target.value)}     
                ></textarea>
              </div>
            <div className={styles.uploadContainer}>
              <button
                className={styles.uploadButton}
                onClick={e => this.beginUpload(e)}>
                <span className={styles.uploadText}>Upload Disc Photo</span>
              </button>
              {this.displayPreview()}
            </div>
          </div>
          <footer className="reg-footer">
            <button>
              type="submit"
                <span className="buttonText">Submit</span>
            </button>{' '}
          </footer>
        </form>
      );
    }
  }
export default AddDiscForm;